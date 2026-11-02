# Marketing site · Paper match

Repo: `tensr-landing-ui` pull request #24 (`agent/paper-site`), checkout `tensr-landing-paper`.
Dev server: `http://localhost:3001` (`next dev --port 3001`). Port 3000 is the app and is left alone.
Paper file: Lucky waterfall `01M59W7RD1PH1ASN75MD4AQQ0W`, page ★ Flow · latest drafts.

Counts: todo 0 · matched 0 · done 9

| Page | Artboard | Route | Status | Live |
| --- | --- | --- | --- | --- |
| 0 Landing | 2WD-0 | `/` | done | `design/paper/live/0-landing.png` 1440×7624 |
| 0b Product | 18A5-0 | `/product` | done | `design/paper/live/0b-product.png` 1440×10936 |
| 0c Integrations | 1CX3-0 | `/integrations` | done | `design/paper/live/0c-integrations.png` 1440×4695 |
| 0d Agencies | 17UM-0 | `/agencies` | done | `design/paper/live/0d-agencies.png` 1440×6458 |
| 0e Pricing | 1BZU-0 | `/pricing` | done | `design/paper/live/0-pricing.png` 1440×3294 |
| 0h Book a demo | 1A3G-0 | `/demo` | done | `design/paper/live/0-demo.png` 1440×1570 |
| 0i Docs | 1DTL-0 | `/docs` | done | `design/paper/live/0-docs.png` 1440×2046 |
| 0j Changelog | 1DTM-0 | `/changelog` | done | `design/paper/live/0-changelog.png` 1440×5824 |
| 0k Security | 1DTN-0 | `/security` | done | `design/paper/live/0-security.png` 1440×3201 |

`matched` means the page is built and compared. `done` means the layout and type match the artboard, with the copy made honest where the artboard invents things.

## Decisions

- Sign in and Start free trial go to `https://app.tensr.xyz/login`. The landing hero email is a real field. Submitting it opens `https://app.tensr.xyz/login?email=…`. Footer About is removed. Other email boxes that were not inputs are Book a demo links.
- Book a demo goes to `/demo`, which emails `help@tensr.xyz`.
- Coming soon is only Prolific fielding, live Qualtrics sync, and Decipher and Alchemer imports. A Qualtrics CSV and a Qualtrics definition stay as file imports. SPSS, Stata, Triple-S, Parquet, Excel, CSV, PowerPoint, and a .sav plus .sps weight file stay.
- The analysis count is 83 documented pages, so the figure reads 83 rather than 83+.
- Changelog cards use the published notes: 0.5.1 (20 Oct), 0.5.0 (19 Oct), 0.4.9 (18 Oct). The artboard’s 21 Oct “Merging and levelled data” card is not a changelog entry.
- The case-study placeholder is not on the page. That slot is a four-step workflow: bring the file in, weight it, banner it, export it. No client name, quote, or result.
- Van Westendorp, Gabor-Granger, MaxDiff, and conjoint are available. They are API techniques (`techniques/van-westendorp`, `techniques/gabor-granger`, `maxdiff/*`, `conjoint/*`), not part of the 83 documented analysis pages. The 83 figure stays 83.
- Team sign-in copy says an email code, and that a workspace has an owner and members.
- Privacy and Terms use the GitBook URLs already in the site footer. LinkedIn and X have no URLs in the repo, so those words are not links.
- The fourth hero panel is clipped on the 1440 artboard. The page shows the three panels that are fully visible.
- Sample table percentages in the workspace mock are the artboard’s illustration, not a customer result.
- Landing is the same 1440×7624 size as the artboard. Hero cards do not state a respondent count or a result percentage. The charts keep the artboard’s dots, paired bars, and five quota columns. Prolific fielding reads Coming soon.
- The workspace Show row is one line. The mock is drawn at 1680px and scaled into the green frame so Sig, Nest banners, Low base, Weight, and Run as banner book stay visible. Sample table cells stay the artboard’s illustration and are labelled Sample table.
- Type on the Paper pages is weight 400, plus 500 where that page’s export uses it. The wordmark and the workspace marks the export sets at 600 stay at 600.
- A route change shows one Loading state. Loaded sections do not fade in on their own.
- Landing is done. Honest copy: the case-study slot is the four-step workflow; Prolific fielding reads Coming soon; the Qualtrics stack tile is not labelled coming soon because file import exists; MaxDiff, conjoint, Van Westendorp, and Gabor-Granger are available. The Show row is one line.
- Product is done at 1440×10936, against a 10236 artboard. Choice modelling and the pricing card say MaxDiff, conjoint, Van Westendorp, and Gabor-Granger are available. Plugins are not a store. Levelled data is not claimed. The report does not say a deck updates while fieldwork is open. Notebook copy is R cells and an R script. Open ends: Haiku proposes a code frame from a sample and codes every answer with a confidence score. Under 0.6, or no code, is a review row. Keyword coding is the fallback and is what schema-only studies run. Themes are a weighted multi-response with significance letters, and a cell opens the verbatims.
- Product screens are the full Paper exports `4a-responses`, `4c-evidence`, `4g-themes`, and `5-tables`. Sample data stays. Only the Prolific fielding chip, the pill between Live and Share, is covered. The earlier paint-out of tables, titles, and panels is reversed. localhost:3000 was not used.
- Integrations is done at 1440×4695, against a 5624 artboard. The grid includes a Plugins card: no network, and this version does not charge for a toolkit. Alchemer and Decipher imports say coming soon. A Qualtrics CSV and a Qualtrics definition stay. Print is the browser dialog. The Prolific block is four steps, not the artboard’s fielding screen. That substitution is why the page is shorter.
- Agencies is done at 1440×6458, against a 6559 artboard. Honest copy: no 42-table wave, no Scotland 42%, no Prolific 312/400, no client template, no named partners. The next wave reruns when the file is in, not while fieldwork is open. Organisation roles are owner or member. Files are AWS us-east-1 with SSE-S3 AES-256. The confidentiality card names Anthropic and OpenAI and links each provider’s published API data-use page. It does not restate those terms. Design partners is an invitation, with no names and no count.
- Pricing is done at 1440×3294, against a 4896 artboard. Prices are `app/plan_catalog.json`: Pro £79 / £63 annual (£756), Pro+ £149 / £119 (£1,428), Teams £119 a seat with a 3-seat minimum / £95 (£1,140 a seat). Trial is £0 for 30 days, 5 datasets, 100,000 rows, 150 tables, 150 agent runs, 150 reports, 8 runs an hour. USD figures in the catalog are marked proposed and are not on the page. Priority support, early access, and a PDF file are not in the catalog, so those artboard rows are not on the page. That is why it is shorter.
- Book a demo is done at 1440×1570, against a 1670 artboard. The form is `mailto:help@tensr.xyz`. Fields start empty. There is no calendar and no prefilled name. Step 03 does not say the deck regenerates while fieldwork is open, and it does not mention a client template.
- Docs index is done at 1440×2046, against a 2433 artboard. The sidebar and the cards link to the real guides in `content/docs/meta.json`. The introduction is the real `index.mdx`. Article routes stay on the docs reader.
- Changelog is done at 1440×5824, against a 3055 artboard. Entries are `getChangelogEntries()`, the published notes, newest first. The artboard’s 21 Oct “Merging and levelled data” card is not a note. There is no mailing list, so the subscribe box is an RSS link.
- Security is done at 1440×3201, against a 3148 artboard. The page says encryption, region, retention, and private mode in plain words: AES-256 at rest, HTTPS, AWS US East, and private mode sends the AI only column names and types. The data-trust note’s own sentence that Tensr does not train models on customer data is quoted as that note. Provider pages stay as links. The same facts were checked earlier in `DATA_TRUST_AND_COMPLIANCE.md` and the stacks. Left off the page: SOC 2, SAML, SCIM, and a customer-managed key.
- Fix pass: docs has one site header and one sidebar from `content/docs`. Article pages use that frame. Integrations leads with file imports, Excel, PowerPoint, Word, the R script, and plugins, and coming soon is one “On the roadmap” card for Prolific, live Qualtrics, Decipher, and Alchemer. Pricing and Book a demo read as those pages, without catalog or calendar notes.
