# puretech-web

Official PURETECHMATERIALS website source package, prepared for ongoing maintenance and the GitHub repository:

`https://github.com/tiffanylicn-ship-it/puretech-materials`

## What is included

- A maintainable Next.js 14 and TypeScript website.
- The redesigned PURETECHMATERIALS homepage and production imagery.
- Existing product, product-detail, industry, solution, application, resource, FAQ, blog, about and contact pages.
- Existing product, SEO and article content libraries.
- Responsive shared navigation and footer.
- A project-specific Open Graph image at `public/og.png`.
- A GitHub Actions workflow that audits production dependencies and builds the site on pushes and pull requests.

## Local development

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm start
```

## Updating GitHub

When you are ready to replace or update the remote repository, copy the project files into your local Git checkout, review the changes, then commit and push from that checkout. Do not commit `.next`, `node_modules`, local environment files or editor caches; the included `.gitignore` excludes these.

Suggested first commit message:

```text
feat: integrate redesigned PURETECHMATERIALS website
```

## Important content review

Technical specifications, certifications, manufacturing capacities, regulatory statements and contact routing should be reviewed by the PURETECHMATERIALS team before production publication.
