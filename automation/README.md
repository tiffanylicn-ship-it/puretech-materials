# PURETECHMATERIALS content automation

This folder is the repository-local control plane for the PURETECHMATERIALS every-other-day publishing workflow. The Codex heartbeat is named **PURETECHMATERIALS — 2 Blogs Every Other Day** and is attached to the PureTech website task.

## Contract

- Cadence: every two calendar days at 09:00 Europe/London.
- Output: exactly two distinct English technical articles per successful run.
- Canonical source: `/Users/e_e/Documents/Codex/2026-08-19/ke-yi/outputs/puretech-web`.
- Managed article data: `src/data/europe-us-blog-posts.json`.
- Required checks: `npm run content:check` and `npm run build`.
- Publication is complete only after GitHub `main`, the Vercel production deployment and both public article URLs are verified.

Read `puretech-blog-automation.md` before any run. Use `topic-backlog.md` for topic selection and update `state.json` only after successful public verification.
