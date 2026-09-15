<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Porto — Rules for Every Agent

## Project
One-page portfolio site. **Next.js 16.2.10** (framework, not the version in your training data), React 19, TypeScript, CSS Modules + global CSS. Deployed via Vercel at `yokagustiyadi.vercel.app`. Local dev: Laragon `C:\laragon\www\porto`.

## Read Before Coding
- `AGENTS.md` — this file.
- `prd.md` — product requirements: what the site is, who it's for, feature scope, non-goals, success metrics.
- `design.md` — UI architecture, design tokens, component conventions, interaction behaviours, technical constraints.
- `CLAUDE.md` — short pointer file.

## Component Pattern (mandatory)
- Each section on the homepage = one `.tsx` file in `app/components/` following the **string-HTML + `html-react-parser`** pattern. Do NOT rewrite existing sections as plain JSX.
- `Work15.tsx` shows the full pattern including the `replace` option that swaps raw `<img>` tags for `next/image`. Mirror it for any image in new homepage sections.
- Client behaviour (modals, scroll-reveal, dark mode, i18n, magnetic/ripple buttons) lives in **`public/main.js`** (loaded `lazyOnload` from `layout.tsx`). Do not introduce per-component React state for features `main.js` already handles.
- Naming: `SectionName<orderNumber>.tsx` (e.g. `Hero10.tsx`, `Work15.tsx`). The order number must match the render order in `page.tsx`.
- Text elements that need i18n use a `data-key` attribute; translations live in `main.js`.

## Blog (exception to the string-HTML rule)
- Blog pages (`/blog` and `/blog/[slug]`) use plain JSX/TSX — this is intentional, not a violation of the component pattern above. The dynamic nature of slugs and per-post metadata makes the string-HTML pattern unsuitable here.
- Blog content lives in `content/blog/` as `.md` files with frontmatter (`title`, `date`, `description`, `tags`, `draft`). To add a new post, create a new `.md` file there — do not edit existing posts without confirmation.
- `lib/blog.ts` is the single source for reading posts; blog pages must import from it, not re-implement file reading.
- Markdown rendering uses `app/components/Markdown.tsx` (react-markdown + remark-gfm + rehype-slug + rehype-highlight). Do not bypass it when adding new blog pages.
- Blog CSS is in `app/blog/blog.css`, imported by `app/blog/layout.tsx`. Do not add blog styles to `globals.css`.

## Style Tokens
All colours, fonts, radii, shadows are CSS variables in `app/globals.css` (`:root` + `html.dark` overrides). **Never hardcode hex values** in components — use the tokens.

## Git / Deploy
- Branch: `main`, push straight to `origin/main`. No PRs.
- Commit style: `type(scope): imperative message` (see `git log` for examples).
- Vercel auto-deploys on push to `main`. No manual deploy step.

## Verification (mandatory before claiming "done")
1. `npx tsc --noEmit` passes.
2. `npm run build` passes.
3. If UI changed: start dev server, open in browser, confirm the change renders and doesn't break dark mode or mobile layout.
4. Do not say "fixed" or "works" without evidence from steps 1–3.

## Forbidden
- Introducing a new CSS framework or utility CSS (Tailwind, etc.) without explicit approval.
- Replacing `html-react-parser` pattern with direct JSX for existing sections.
- Removing or renaming `data-key` attributes without updating `main.js` translations.
- Committing to a branch other than `main`.
- Hardcoding secrets, API keys, or credentials in any file.
