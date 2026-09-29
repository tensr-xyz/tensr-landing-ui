# Product docs plan

Product pages sit above Analyses. Behaviour, labels, and defaults come from the code. This file is the map, not the source of truth.

## Decisions

- Sidebar: Introduction, Quickstart, then Product pages, then Analyses.
- Banner table stays the analysis page for the grid. [Significance](/docs/significance) covers letters, bases, and click-through.
- The UI label is **Rake Weights**. Mention “also called rim weighting” once on the weights page.
- Merge Datasets is two files. The agent can chain left-merges in one plan. Fuse is for waves and does not adopt the result.
- Copy comes from the running dialogs. TODOs were settled from code and removed.

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
| Import                      | `import`       | settled |
| Merging                     | `merging`      | settled |
| Weights                     | `weights`      | settled |
| The agent                   | `agent`        | settled |
| Significance and provenance | `significance` | settled |
| Export                      | `export`       | settled |
| The R script                | `r-script`     | settled |

## Code vs this plan

Settled while writing:

- Add variables is a positional column concat (same row count), not a keyed join. Keyed joins are Inner / Left / Right / Outer.
- Fuse Waves / Fuse Datasets toast the fused row count. They do not `adoptDerivedDataset` the way Merge Datasets opens the result.
- Column letters: adjusted p < .05. Uppercase is p ≤ .001. There is no 90% letter level.
- Dataset export has no Excel option. Excel is the banner/table audit export. Word is `methodology.docx` on the agency table export. PDF is `window.print()`.
- Changelog: 0.4.0 significance letters (18 Sep), 0.4.1 statistical accuracy, 0.4.2 ARIMA and trees.

## Out of scope

- Verbatim coding, choice simulator, plugins marketplace.
- Legacy intake dialogs (WinCross, QPack, Quantum Axis) beyond a pointer from Import.
- Aligning FilePicker extras (`.parquet` / `.json` / `.mdd`) with `ACCEPTED_UPLOAD_EXTENSIONS` — listed for removal, not done here.
