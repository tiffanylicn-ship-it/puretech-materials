# Every-other-day blog publishing SOP

## Editorial standard

1. Select two unused, non-overlapping topics from `topic-backlog.md`. Search all existing titles, slugs, headings and target keywords before writing.
2. Target European or North American B2B buyers in procurement, quality, EHS, laboratory or process roles. Write natural professional English, not generic promotional prose.
3. Research current official primary sources. Prefer ECHA, European Commission, UK HSE, US EPA, FDA, OSHA, PHMSA, NIST and standards-owner documentation. Never invent certifications, customer names, performance numbers, local inventory, registrations or regulatory conclusions.
4. Each article must contain 1,000–1,600 useful words, at least two primary sources, five specific search phrases, and relevant internal links to a product, application, market, quality page or qualification case.
5. Add both records to `src/data/europe-us-blog-posts.json`. Keep metadata concise, use a descriptive existing website image and include sources in the structured `sources` field.

## Safety and concurrency

- Use Europe/London as the date authority.
- Read `seo-workflow.md` before topic selection or publication.
- Create a date lock under `/Users/e_e/.config/puretech-automation/locks` before editing. If an active same-date lock exists, stop without producing replacement articles. Treat the lock only as a concurrency guard; write resumable state and archive or remove the lock on every terminal exit.
- If a prior run published code but stopped before public verification, resume with verification only. Never create replacement articles or publish the same files again.
- Preserve all user changes. Do not reset, force-push or replace the managed JSON file wholesale.
- Preserve queued user assets and workflow changes. Include them in the next successful Blog release after reviewing the uploader dry-run scope.
- Never expose tokens, cookies or deployment credentials in logs, articles or commits.
- If research, validation, GitHub or Vercel fails, retain the prepared work and report the exact blocker. Do not mark the run successful and do not double-publish on retry.

## Validation and publication

1. Run `npm run content:check`.
2. Run `npm run seo:check`.
3. Run `npm run build` and review the generated article routes.
4. Sync the canonical source to `/Users/e_e/Documents/Codex/2026-08-19/ke-yi/work/puretech-upload-staging` without copying `.next`, `node_modules` or secrets.
5. Run the existing GitHub uploader in dry-run mode, review its file scope, then publish to `tiffanylicn-ship-it/puretech-materials` on `main` with an article-specific commit message.
6. Wait for the linked Vercel production deployment to reach Ready.
7. Verify both article URLs, their canonical metadata and sitemap entries on `https://puretechmaterials.com`.
8. Only after both public pages pass, update `state.json`, mark the two backlog entries published and archive or remove the active lock.
9. Commit the completed article, state, backlog and queued asset changes locally so the project is clean for the next scheduled run. This bookkeeping commit is local; the GitHub uploader remains the publication mechanism.

## Acceptance gate

A run is successful only when it created exactly two non-duplicate articles, all three validation commands passed, GitHub contains the commit, Vercel is Ready, both public URLs return the correct new content, the state is finalized, the lock is released and the local project is clean. Otherwise the run remains incomplete and requires a single safe retry from the recorded phase.
