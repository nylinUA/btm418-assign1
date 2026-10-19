<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Brand mark

- The Suruga-ya logo (`src/assets/surugaya-logo.webp.asset.json`) is dark blue on a transparent background, so it must only ever be shown on a white or light surface — never directly on the navy header, menu bar or footer. The footer keeps the text wordmark for this reason.
- The site icon is derived from the logo's round crest, cropped from the source logo, set on a white disc and clipped to a perfect circle; regenerate it from the source file rather than drawing a new mark.

## Data and assets

- Shared storefront header and footer live in `src/components/storefront-shell.tsx` and wrap the root Outlet so content pages retain identical branding and navigation.
- Company support links point to official external channels; this educational project must not collect or pretend to deliver official customer inquiries.

- Never hotlink suruga-ya.com image URLs — they return 403 to other origins. Use locally generated or CDN-hosted assets instead.
- Prices are shown in Japanese yen first, with a converted Canadian dollar figure beneath using the `JPY_PER_CAD` constant in `src/routes/index.tsx`; the converted line must stay legible against the page background (WCAG AA), so use the muted foreground token rather than a raw light gray.

