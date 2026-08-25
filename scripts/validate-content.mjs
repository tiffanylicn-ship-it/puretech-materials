import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dataPath = path.join(root, 'src/data/europe-us-blog-posts.json')
const blogSourcePath = path.join(root, 'src/lib/blog.ts')
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const blogSource = fs.readFileSync(blogSourcePath, 'utf8')
const existingSlugs = new Set([...blogSource.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]))
const required = ['slug', 'title', 'metaTitle', 'metaDescription', 'category', 'date', 'excerpt', 'image', 'imageAlt', 'content']
const errors = []
const seen = new Set()

for (const [index, post] of posts.entries()) {
  const ref = post.slug || `item ${index + 1}`
  for (const field of required) if (!post[field]) errors.push(`${ref}: missing ${field}`)
  if (seen.has(post.slug)) errors.push(`${ref}: duplicate slug in JSON`)
  if (existingSlugs.has(post.slug)) errors.push(`${ref}: conflicts with an existing blog slug`)
  seen.add(post.slug)
  if (post.metaTitle.length < 35 || post.metaTitle.length > 75) errors.push(`${ref}: metaTitle must be 35–75 characters`)
  if (post.metaDescription.length < 120 || post.metaDescription.length > 180) errors.push(`${ref}: metaDescription must be 120–180 characters`)
  const words = post.content.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).filter(Boolean).length
  const [minimumWords, maximumWords] = Array.isArray(post.wordRange) ? post.wordRange : [650, Infinity]
  if (words < minimumWords) errors.push(`${ref}: article has ${words} words; minimum is ${minimumWords}`)
  if (words > maximumWords) errors.push(`${ref}: article has ${words} words; maximum is ${maximumWords}`)
  if (!Array.isArray(post.seoKeywords) || post.seoKeywords.length < 5) errors.push(`${ref}: at least 5 SEO keywords required`)
  if (!Array.isArray(post.sources) || post.sources.length < 2 || post.sources.some((source) => !source.url?.startsWith('https://'))) errors.push(`${ref}: at least 2 HTTPS primary sources required`)
  const internalLinks = (post.content.match(/href=\"\//g) || []).length
  if (internalLinks < 2) errors.push(`${ref}: at least 2 internal links required`)
  if (/<script/i.test(post.content)) errors.push(`${ref}: script markup is not allowed`)
}

if (errors.length) {
  console.error(`Content validation failed with ${errors.length} issue(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`Content validation passed: ${posts.length} sourced Europe/US articles.`)
