import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const errors = []
const requiredFiles = [
  'src/app/favicon.ico',
  'src/app/icon.png',
  'src/app/apple-icon.png',
  'public/robots.txt',
  'src/app/sitemap.ts',
]

for (const relativePath of requiredFiles) {
  const absolutePath = path.join(root, relativePath)
  if (!fs.existsSync(absolutePath) || fs.statSync(absolutePath).size === 0) errors.push(`${relativePath}: missing or empty`)
}

const robots = fs.readFileSync(path.join(root, 'public/robots.txt'), 'utf8')
if (!/Sitemap:\s*https:\/\/puretechmaterials\.com\/sitemap\.xml/i.test(robots)) errors.push('robots.txt: canonical sitemap declaration missing')

const layout = fs.readFileSync(path.join(root, 'src/app/layout.tsx'), 'utf8')
for (const marker of ['https://puretechmaterials.com', "'@type': 'Organization'", "'@type': 'WebSite'", 'PURETECHMATERIALS']) {
  if (!layout.includes(marker)) errors.push(`layout.tsx: missing entity marker ${marker}`)
}

const sitemap = fs.readFileSync(path.join(root, 'src/app/sitemap.ts'), 'utf8')
for (const collection of ['blogPosts', 'caseStudies', 'productPagesV3']) {
  if (!sitemap.includes(collection)) errors.push(`sitemap.ts: ${collection} is not represented`)
}

const posts = JSON.parse(fs.readFileSync(path.join(root, 'src/data/europe-us-blog-posts.json'), 'utf8'))
const uniqueFields = ['slug', 'title', 'metaTitle', 'metaDescription']
for (const field of uniqueFields) {
  const seen = new Set()
  for (const post of posts) {
    const normalized = String(post[field] ?? '').trim().toLowerCase()
    if (seen.has(normalized)) errors.push(`${post.slug}: duplicate ${field}`)
    seen.add(normalized)
  }
}

for (const post of posts) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) errors.push(`${post.slug}: invalid SEO slug`)
  const imagePath = path.join(root, 'public', post.image.replace(/^\//, ''))
  if (!fs.existsSync(imagePath)) errors.push(`${post.slug}: image not found at ${post.image}`)
  for (const source of post.sources ?? []) {
    try {
      const url = new URL(source.url)
      if (url.protocol !== 'https:') errors.push(`${post.slug}: non-HTTPS source ${source.url}`)
    } catch {
      errors.push(`${post.slug}: invalid source URL ${source.url}`)
    }
  }
}

if (errors.length) {
  console.error(`SEO validation failed with ${errors.length} issue(s):`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`SEO validation passed: entity metadata, icons, sitemap, robots and ${posts.length} sourced articles.`)
