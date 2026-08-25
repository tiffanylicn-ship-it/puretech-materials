# Every-other-day blog publishing SOP

## Editorial standard

1. Select two unused, non-overlapping topics from `topic-backlog.md`. Search all existing titles, slugs, headings and target keywords before writing.
2. Target European or North American B2B buyers in procurement, quality, EHS, laboratory or process roles. Write natural professional English, not generic promotional prose.
3. Research current official primary sources. Prefer ECHA, European Commission, UK HSE, US EPA, FDA, OSHA, PHMSA, NIST and standards-owner documentation. Never invent certifications, customer names, performance numbers, local inventory, registrations or regulatory conclusions.
4. Each article must contain 1,000–1,600 useful words, at least two primary sources, five specific search phrases, and relevant internal links to a product, application, market, quality page or qualification case.
5. Add both records to `src/data/europe-us-blog-posts.json`. Keep metadata concise, use a descriptive existing website image and include sources in the structured `sources` field.

## Safety and concurrency

- Use Europe/London as the date authority.
- Create a date lock under `/Users/e_e/.config/puretech-automation/locks` before editing. If the lock or a successfully published date already exists, stop without producing replacement articles.
- Preserve all user changes. Do not reset, force-push or replace the managed JSON file wholesale.
- Never expose tokens, cookies or deployment credentials in logs, articles or commits.
- If research, validation, GitHub or Vercel fails, retain the prepared work and report the exact blocker. Do not mark the run successful and do not double-publish on retry.

## Validation and publication

1. Run `npm run content:check`.
2. Run `npm run build` and review the generated article routes.
3. Sync the canonical source to `/Users/e_e/Documents/Codex/2026-08-19/ke-yi/work/puretech-upload-staging` without copying `.next`, `node_modules` or secrets.
4. Run the existing GitHub uploader in dry-run mode, review its file scope, then publish to `tiffanylicn-ship-it/puretech-materials` on `main` with an article-specific commit message.
5. Wait for the linked Vercel production deployment to reach Ready.
6. Verify both article URLs, their canonical metadata and sitemap entries on `https://puretechmaterials.com`.
7. Only after both public pages pass, update `state.json`, mark the two backlog entries published and remove the active lock.

## Acceptance gate

A run is successful only when it created exactly two non-duplicate articles, both validation commands passed, GitHub contains the commit, Vercel is Ready, and both public URLs return the correct new content. Otherwise the run remains incomplete and requires a single safe retry.
