# Pending website changes

These changes were explicitly requested by the user and must travel with the next successful blog release. A preview, local build, GitHub push, or failed Vercel deployment is not completion.

## sales-contact-email

- Status: pending
- Requested: 2026-09-04
- Release: next successful two-blog production release
- Value: `sales@puretechmaterials.com`

### Requirements

1. Add a clearly labelled `Sales enquiries` contact route on `/contact` using a clickable `mailto:sales@puretechmaterials.com` link.
2. Add the same sales address to an appropriate site-wide contact location, preferably the footer, without creating repeated blocks or disrupting the current visual hierarchy.
3. Keep the existing `tiffanylicn@gmail.com` general contact address. This request adds a sales mailbox; it does not authorize replacement of the general mailbox.
4. Do not expose credentials, mailbox configuration, or private contact data.
5. Include this website change in the uploader dry-run review, GitHub commit, and Vercel production deployment together with the next two blog articles.

### Acceptance

- `npm run content:check`, `npm run seo:check`, and `npm run build` pass.
- The production `/contact` page visibly shows `sales@puretechmaterials.com` and the link target is exactly `mailto:sales@puretechmaterials.com`.
- The chosen site-wide contact location also shows the same address and mailto target.
- The existing general contact address remains available.
- Record the production verification date, commit SHA, and verified URLs below before changing Status to `complete`.

### Completion record

- Production verification date:
- Commit SHA:
- Verified URLs:
