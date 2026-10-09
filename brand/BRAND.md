# Brains Brand

## Brand idea

Brains makes coordination visible. The multipolar neuron shows several signals meeting
at one legible center: agent tools remain distinct, while their shared work is kept in an
inspectable local system. The white nucleus represents the operator's retained authority.
The identity must feel precise and alive, never mystical, autonomous, or cloud-dependent.

## Audience

Brains is for one local operator: a developer running several AI coding tools against
their own repositories who needs durable coordination without turning those tools into a
team server. Brand communication should assume technical literacy without assuming prior
knowledge of Brains.

## Positioning

Brains is a local-first operator control plane for directing, observing, and governing AI
coding agents. It gives connected agent Sessions shared Workspaces, durable work, local
mailboxes, reusable knowledge, and explicit human decisions in SQLite on the operator's
machine.

Brains is not a model gateway, a semantic retrieval system, a hosted collaboration
service, a multi-user platform, or a security sandbox. Intended capabilities must never be
presented as available behavior.

Approved short descriptor:

> Local-first coordination for AI coding agents.

Approved full descriptor:

> An operator control plane for directing, observing, and governing AI coding agents.

## Canonical naming

| Context | Use | Notes |
|---|---|---|
| Product name and public prose | **Brains** | Use title case. This remains the browser product identity. |
| Compact visual wordmark | **brains.ai** | Use only as an artwork or compact signature. It is not a replacement for the product name in prose and does not imply a public hostname. |
| Distribution and executable | `brains-ai` | Preserve the hyphen and lowercase form. |
| Python namespace | `brains` | Use only in technical contexts. |
| MCP tool prefix | `brains_` | Use only for MCP tool names. |
| Local state directory | `~/.brains` | Use only when documenting local state. |

Do not write "Brains AI" as the product name. Do not change canonical identifiers to
`brains.ai`, and do not set the visual wordmark in code styling when it is acting as a
logo.

## Logo system

### Construction

The mark is a biological multipolar neuron drawn on `viewBox="0 0 100 100"`. These
coordinates are the master geometry and must not be redrawn, simplified, mirrored, or
normalized:

```text
M46 44 Q34 32 20 28                      stroke 3
M28 34 Q22 22 16 18                      stroke 2
circle 20 28 3.5; circle 16 18 2.5
M54 44 Q68 32 80 26                      stroke 3
M68 32 Q78 20 84 18                      stroke 2
circle 80 26 3.5; circle 84 18 2.5
M44 50 Q28 54 18 64                      stroke 2.5
circle 18 64 3
M52 56 Q56 70 72 80                      stroke 3.5
M64 74 Q74 86 82 84                      stroke 2
circle 72 80 3.5; circle 82 84 2.5
soma circle 50 50 11; nucleus circle 50 50 4.5
```

All paths use round line caps and Matrix Emerald. Branch nodes and the soma are Matrix
Emerald; the nucleus is white. The primary mark sits on a Void Navy rounded tile. The
inverse mark has no tile and is reserved for Void Navy or another verified dark field.

The horizontal lockup places the mark before the compact `brains.ai` wordmark. Do not
detach, rotate, recolor, outline, add a gradient, add a shadow, or change the lockup's
proportions.

### Clearspace

Use `x`, the 9-unit nucleus diameter, as minimum clearspace on every side of the visible
logo. At rendered size this is 9% of the mark width. Measure clearspace from the edge of
the tile for the primary mark and from the outermost branch or letterform for transparent
and lockup artwork. More space is preferred in editorial and social layouts.

### Minimum size

| Asset | Digital minimum | Print minimum |
|---|---:|---:|
| Dark-tile mark | 16 px | 6 mm |
| Standalone inverse or mono mark | 24 px | 8 mm |
| Horizontal lockup | 120 px wide | 28 mm wide |
| Wordmark | 80 px wide | 20 mm wide |

At 16 px use the supplied favicon asset, not a hand-rasterized export. If the nucleus or
terminal nodes are no longer distinct, increase the rendered size.

## Color

### Core palette

| Token | Hex | Role |
|---|---|---|
| Matrix Emerald | `#10B981` | Neuron mark, signal paths, and non-text decorative emphasis |
| Void Navy | `#0B0F19` | Primary dark field, logo tile, and dark foreground |
| Nucleus White | `#FFFFFF` | Nucleus and primary content on Void Navy |

### Supporting palette

| Token | Hex | Role |
|---|---|---|
| Emerald Ink | `#047857` | Accessible emerald-derived text and controls on white |
| Slate | `#475569` | Secondary text on white |
| Mist | `#F8FAFC` | Quiet light surface |
| Line | `#CBD5E1` | Rules and boundaries on light surfaces |

Matrix Emerald is approved on Void Navy. Do not use Matrix Emerald for normal-size text
on white, and do not put white text on Matrix Emerald. Use Emerald Ink for text on white,
or Void Navy text when Matrix Emerald is used as a filled control or field. Existing blue
links may remain where they provide stronger, familiar link contrast.

## Typography

Space Grotesk is the preferred display identity when a consuming surface already provides
and licenses it. This repository includes no font binaries and adds no remote font
dependency. The static site and supplied editable SVG wordmarks use the existing system
sans stack:

```css
ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Use bold or 700 weight for display and wordmark settings, 600-700 for headings, and 400
for body copy. Use the existing monospace stack only for commands, identifiers, paths, and
measured data. Never use monospace as a general "AI" texture.

## Accessibility

- Preserve the supplied contrast pairings and test any new pairing against WCAG AA.
- Treat a mark next to visible "Brains" text as decorative with empty alternative text.
- Give a logo-only link or an SVG lockup an accessible name such as `Brains home`.
- Do not communicate state, ownership, or approval through emerald alone.
- Preserve the clearspace and minimum sizes so the nucleus and terminal nodes remain clear.
- Keep essential copy as HTML text rather than baking it into decorative imagery.
- Motion must stop under `prefers-reduced-motion: reduce`; the static state must carry the
  full meaning.

## Imagery and motion

Use imagery that makes local coordination inspectable: real interface crops, restrained
system diagrams, repository structure, terminal detail, and branching signal paths derived
from the neuron geometry. Show evidence only when it is current, authorized, and safe for
public display.

Avoid glowing brain stock art, humanoid robots, synthetic faces, cloud-network imagery,
and abstract "intelligence" effects that imply hosted models or autonomous operation. Do
not use private paths, account names, keys, live identifiers, or transient operational
evidence as visual texture.

If motion is used, a signal may travel once from a terminal node toward the soma or from
the soma into a branch. Keep it brief, quiet, and attributable to a user or page action.
Do not use endless breathing, random firing, particle fields, or animation that suggests
the product is acting without the operator.

## Voice

The Brains voice is local-first, inspectable, human-governed, and factual.

- Lead with what the operator can do and where state lives.
- Prefer concrete nouns: Workspace, Session, claim, handoff, mailbox, decision, SQLite.
- State boundaries next to capabilities when omission could create a false impression.
- Distinguish released behavior, current branch behavior, and intended work.
- Use short, direct sentences. Explain mechanisms instead of promising outcomes.
- Say "human-governed," not "fully autonomous." Say "coordinates," not "thinks."
- Avoid hype words such as revolutionary, magical, effortless, limitless, and intelligent.

### Approved examples

- "Local-first coordination for AI coding agents."
- "Shared context for your agents. Decisions stay with you."
- "State is stored in SQLite on the operator's machine."
- "Claims record ownership; they do not lock the filesystem."
- "Start with Quickstart."

### Prohibited examples

- "Semantic memory for every agent."
- "Automatically route every task to the best model."
- "A multi-user command center for your AI team."
- "Let autonomous agents run your business."
- "A secure sandbox for untrusted agents."
- "Guaranteed token savings."

## Do and don't

| Do | Don't |
|---|---|
| Use the supplied master geometry and color values. | Substitute a brain outline, spark, bot, or generic network icon. |
| Keep `Brains` in public prose and navigation. | Rewrite product copy to `brains.ai`. |
| Use the compact wordmark where space calls for a visual signature. | Present `brains.ai` as a URL unless a canonical URL is separately supplied. |
| Place the emerald mark on Void Navy. | Put it on a busy or low-contrast field. |
| Use Emerald Ink for accessible green text on white. | Use Matrix Emerald as small text on white. |
| Show local state and human decisions accurately. | Imply semantic retrieval, model routing, multi-user tenancy, or autonomous action. |
| Keep diagrams sparse and inspectable. | Decorate with speculative graphs, fake metrics, or private evidence. |

## Touchpoint matrix

This rollout applies to the static GitHub Pages site. The local browser console at `/app`
is a future, separate consumer and has not been integrated with this brand kit.

| Touchpoint | Naming | Asset | Required treatment |
|---|---|---|---|
| Website header (current Pages consumer) | Brains | `site/assets/favicon.svg` | Keep the visible `Brains` label; the mark is decorative at 30 px. |
| Browser favicon | Brains | `brand/icons/favicon.svg` | Use the dark tile at 16-32 px. |
| Browser console (future/separate consumer) | Brains | None in this rollout | Integrate and review separately before claiming brand adoption; do not treat the Pages assets as a console implementation. |
| Repository README and docs | Brains | Mark or lockup when needed | Use `brains-ai` only for distribution and command references. |
| CLI and package listings | `brains-ai` | Mono mark or primary mark | Keep executable spelling literal and code-styled. |
| Social avatar | Brains | `brand/icons/app-icon.svg` | Use the dark tile; do not crop terminal nodes. |
| Social preview | Brains / brains.ai signature | `brand/og/og-default.svg` master; `brand/og/og-default.png` delivery asset | Use only the factual product descriptor in the supplied artwork; publish the PNG in social metadata. |
| Small sponsor or partner row | brains.ai | Wordmark or mono mark | Honor minimum size and clearspace; link to the separately canonical URL. |
| Source identifiers | `brains`, `brains_`, `~/.brains` | None | Never brand-stylize identifiers inside code or commands. |
