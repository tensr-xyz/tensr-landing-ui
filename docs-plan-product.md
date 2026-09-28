# Product docs plan

Product pages sit above Analyses. Behaviour, labels, and defaults come from the code. This file is the map, not the source of truth.

## Decisions

- Sidebar: Introduction, Quickstart, then Product pages, then Analyses.
- Banner table stays the analysis page for the grid. [Significance](/docs/significance) covers letters, bases, and click-through.
- The UI label is **Rake Weights**, not rim. SPSS Weight Cases is mentioned only as the thing Tensr does not do.
- Merge Datasets joins or stacks two files. Three or more files go through **Fuse Waves** or **Fuse Datasets**.
- Take copy from the running dialogs. Leave `{/* TODO: confirm ... */}` where the code is ambiguous.

## Sidebar

```
Docs
  Introduction
  Quickstart
  ---Product---
  Import
  Merging
  Weights
  The agent
  Significance and provenance
  Export
  The R script
  Analyses
```

## Pages

| Page                        | Slug           | Status  |
| --------------------------- | -------------- | ------- |
| Import                      | `import`       | drafted |
| Merging                     | `merging`      | drafted |
| Weights                     | `weights`      | drafted |
| The agent                   | `agent`        | drafted |
| Significance and provenance | `significance` | drafted |
| Export                      | `export`       | drafted |
| The R script                | `r-script`     | drafted |

## Code vs this plan

Contradictions found while writing (also listed on the PR):

- The earlier outline said 95% and 90% column letters. The banner only tests adjusted p < .05. Uppercase vs lowercase is p ≤ .001 vs .001 < p < .05, not 90%.
- The earlier outline said “rim weights”. The menu and dialog are **Rake Weights**.
- The earlier outline said “chained merges for 3+ files”. Merge Datasets is two files. 3+ is Fuse Waves / Fuse Datasets.
- Dataset export has no Excel option. Excel is the banner/table audit export.
- Two changelog entries share version 0.4.0: [Significance letters on weighted banners](/changelog) (18 Sep) and [Statistical accuracy fixes](/changelog) (28 Sep).

## Out of scope

- Verbatim coding, choice simulator, plugins marketplace.
- Legacy intake dialogs (WinCross, QPack, Quantum Axis) beyond a pointer from Import.
