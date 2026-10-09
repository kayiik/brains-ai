# Brains brand assets

This directory is the editable public brand kit for Brains. Product prose remains
**Brains**, compact visual artwork may use **brains.ai**, and the distribution and
executable remain `brains-ai`. Read [BRAND.md](BRAND.md) before using or modifying an
asset.

## Asset index

| Asset | Purpose |
|---|---|
| `logos/mark.svg` | Primary neuron mark on a Void Navy tile |
| `logos/mark-inverse.svg` | Transparent emerald-and-white mark for Void Navy fields |
| `logos/lockup.svg` | Primary horizontal mark plus `brains.ai` wordmark |
| `logos/lockup-inverse.svg` | Horizontal lockup for Void Navy fields |
| `logos/wordmark.svg` | Void Navy compact wordmark for light fields |
| `logos/wordmark-inverse.svg` | White compact wordmark for dark fields |
| `logos/mono-black.svg` | One-color black neuron mark with a knocked-out nucleus |
| `logos/mono-white.svg` | One-color white neuron mark with a knocked-out nucleus |
| `icons/favicon.svg` | Dark-tile browser icon |
| `icons/app-icon.svg` | Scalable dark-tile app and social icon master |
| `icons/icon-192.svg` | 192 px declared-size app icon |
| `icons/icon-512.svg` | 512 px declared-size app icon |
| `og/og-default.svg` | Editable 1200 by 630 social-preview master |
| `og/og-default.png` | Rendered 1200 by 630 social-preview image for crawler compatibility |
| `tokens.json` | Tool-neutral design tokens with usage notes |
| `tokens.css` | CSS custom-property projection of the tokens |
| `preview.html` | Local visual index; open directly in a browser |

## Consumers

- The public static site consumes deliberate copies in `site/assets/`.
- Documentation and package listings may consume the matching SVG directly when the host
  accepts SVG; social metadata should use the rendered PNG.
- Product surfaces should import token values into their own established theme rather
  than loading `preview.html` styles.
- Consumers must keep product claims aligned with `docs/product/PRODUCT_BRIEF.md`.

## Editable-master rules

The SVG files are source artwork, not opaque exports. Keep paths, circles, labels, and
colors readable. The neuron coordinates and stroke widths in [BRAND.md](BRAND.md) are the
geometry authority. Scale through `viewBox`; do not round coordinates or use an optimizer
that rewrites the drawing.

The system-sans wordmark remains editable SVG text so this repository needs no font file
or remote font request. Convert text to outlines only in a downstream format that requires
it, and retain these SVGs as the editable sources.

The icon files intentionally repeat the complete SVG so each can be used independently.
When the neuron geometry changes through an approved identity update, propagate the same
path and circle elements to every logo, icon, and OG asset, then review the normal text
diff. The kit uses no asset lock file or immutable digest gate.

## Manual regeneration and site copies

Run these commands from the repository root after reviewing the editable masters:

```sh
python -c "from pathlib import Path; s=Path('brand/icons/app-icon.svg').read_text(encoding='utf-8'); Path('brand/icons/icon-192.svg').write_text(s.replace('width=\"512\" height=\"512\"', 'width=\"192\" height=\"192\"').replace('Brains app icon', 'Brains 192 pixel icon'), encoding='utf-8'); Path('brand/icons/icon-512.svg').write_text(s.replace('Brains app icon', 'Brains 512 pixel icon'), encoding='utf-8')"
python -c "from pathlib import Path; pairs=(('brand/icons/favicon.svg','site/assets/favicon.svg'),('brand/logos/mark.svg','site/assets/logo-mark.svg'),('brand/og/og-default.svg','site/assets/og-default.svg')); [Path(target).write_bytes(Path(source).read_bytes()) for source, target in pairs]"
npm --prefix tests/e2e ci
npm --prefix tests/e2e exec -- playwright install chromium
node scripts/render_brand_og.mjs
```

`icon-512.svg` differs from `app-icon.svg` only by its title. Keep site projections
byte-for-byte aligned with their listed source files after intentional edits. The render
command reads only `brand/og/og-default.svg` and writes the same PNG bytes to
`brand/og/og-default.png` and `site/assets/og-default.png`; use the Playwright version
locked by `tests/e2e/package-lock.json`.

Validate XML and JSON without installing dependencies:

```sh
python -c "import json, pathlib, xml.etree.ElementTree as ET; json.load(open('brand/tokens.json', encoding='utf-8')); json.load(open('brand/provenance.json', encoding='utf-8')); [ET.parse(p) for p in pathlib.Path('brand').rglob('*.svg')]; [ET.parse(p) for p in pathlib.Path('site/assets').glob('*.svg')]"
```
