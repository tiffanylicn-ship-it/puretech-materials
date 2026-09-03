# PURETECHMATERIALS SEO workflow controls

This workflow borrows the useful control patterns—not code or unsupported claims—from three public projects reviewed in September 2026.

## Adopted controls

### Entity consistency

- Use one organization name: `PURETECHMATERIALS`.
- Keep the canonical domain, organization identity, website identity, favicon and logo references aligned.
- Add only truthful structured data. Do not add social profiles, addresses, certifications or corporate identifiers until verified.

### Deterministic quality gates

- Run `npm run content:check`, `npm run seo:check` and `npm run build` before publication.
- Keep Blog slugs, titles, descriptions and images unique and machine-checkable.
- Preserve direct primary-source links for regulatory, safety and method claims.
- Review the exact upload scope before GitHub publication and verify the resulting production URLs, canonicals and sitemap entries.

### Indexing discipline

- Use the XML sitemap, internal links, stable canonicals and Google Search Console for ordinary product, case-study and Blog discovery.
- Do not use Google Indexing API for ordinary PURETECHMATERIALS Blog or product pages. Google documents that API for pages containing `JobPosting` or livestream `BroadcastEvent` structured data.
- Never submit invented schema types merely to gain API eligibility.

## Run-state discipline

- A lock prevents concurrent work; it is not a permanent record. Archive or remove it on every terminal exit after writing the resumable state.
- After public verification, update `state.json` and the backlog, then create a local bookkeeping commit so the project returns to a clean state.
- If publication succeeded but public verification did not, record the remote commit and URLs in automation memory, release the concurrency lock, and make the next run verification-only.
- Queued user assets such as the favicon stay in the local project and are included in the next successful two-article release unless the user requests an immediate release.
