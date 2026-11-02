# Marketing site · Paper match

Repo: `tensr-landing-ui` pull request #24 (`agent/paper-site`), checkout `tensr-landing-paper`.
Dev server: `http://localhost:3001` (`next dev --port 3001`). Port 3000 is the app and is left alone.
Paper file: Lucky waterfall `01M59W7RD1PH1ASN75MD4AQQ0W`, page ★ Flow · latest drafts.

Counts: todo 5 · matched 2 · done 2

| Page | Artboard | Route | Status |
| --- | --- | --- | --- |
| 0 Landing | 2WD-0 | `/` | done |
| 0b Product | 18A5-0 | `/product` | matched |
| 0c Integrations | 1CX3-0 | `/integrations` | matched |
| 0d Agencies | 17UM-0 | `/agencies` | done |
| 0e Pricing | 1BZU-0 | `/pricing` | todo |
| 0h Book a demo | 1A3G-0 | `/demo` | todo |
| 0i Docs | 1DTL-0 | `/docs` | todo |
| 0j Changelog | 1DTM-0 | `/changelog` | todo |
| 0k Security | 1DTN-0 | `/security` | todo |

`matched` means the page is built and compared. `done` means the layout and type match the artboard, with the copy made honest where the artboard invents things.

## Decisions

- Sign in and Start free trial go to `https://app.tensr.xyz/login`. The site does not host Stytch. The email fields on the landing page are not submitted.
- Book a demo goes to `/demo`, which emails `help@tensr.xyz`.
- Coming soon is only Prolific fielding, live Qualtrics sync, and Decipher and Alchemer imports. A Qualtrics CSV and a Qualtrics definition stay as file imports. SPSS, Stata, Triple-S, Parquet, Excel, CSV, PowerPoint, and a .sav plus .sps weight file stay.
- The analysis count is 83 documented pages, so the figure reads 83 rather than 83+.
- Changelog cards use the published notes: 0.5.1 (20 Oct), 0.5.0 (19 Oct), 0.4.9 (18 Oct). The artboard’s 21 Oct “Merging and levelled data” card is not a changelog entry.
- The case-study placeholder is not on the page. That slot is a four-step workflow: bring the file in, weight it, banner it, export it. No client name, quote, or result.
- Van Westendorp, Gabor-Granger, MaxDiff, and conjoint are available. They are API techniques (`techniques/van-westendorp`, `techniques/gabor-granger`, `maxdiff/*`, `conjoint/*`), not part of the 83 documented analysis pages. The 83 figure stays 83.
- Team sign-in copy says email one-time codes, and that SAML SSO is not available.
- Privacy and Terms use the GitBook URLs already in the site footer. LinkedIn and X have no URLs in the repo, so those words are not links.
- The fourth hero panel is clipped on the 1440 artboard. The page shows the three panels that are fully visible.
- Sample table percentages in the workspace mock are the artboard’s illustration, not a customer result.
- Landing is the same 1440×7624 size as the artboard. Hero cards do not state a respondent count or a result percentage. The charts keep the artboard’s dots, paired bars, and five quota columns. Prolific fielding reads Coming soon.
- The workspace Show row is one line. The mock is drawn at 1680px and scaled into the green frame so Sig, Nest banners, Low base, Weight, and Run as banner book stay visible. Sample table cells stay the artboard’s illustration and are labelled Sample table.
- Type on the Paper pages is weight 400, plus 500 where that page’s export uses it. The wordmark and the workspace marks the export sets at 600 stay at 600.
- A route change shows one Loading state. Loaded sections do not fade in on their own.
- Landing is done. Honest copy: the case-study slot is the four-step workflow; Prolific fielding reads Coming soon; the Qualtrics stack tile is not labelled coming soon because file import exists; MaxDiff, conjoint, Van Westendorp, and Gabor-Granger are available. The Show row is one line.
- Product is not done. Choice modelling and the pricing card now say MaxDiff, conjoint, Van Westendorp, and Gabor-Granger are available. Plugins are not a store. Levelled data is not claimed. The report does not say a deck updates while fieldwork is open. Notebook copy is R cells and an R script.
- Product embedded screens are not filled yet. Fill them at the end from tensr-platform-web PR #142 (`agent/flow-shell`) demo captures of Responses, Evidence, Themes, and Tables, or from the Paper screens after the Prolific chip and invented figures are removed. localhost:3000 is the other agent’s app and was not used.
- Integrations is not done. The grid is in place. Alchemer and Decipher imports say coming soon. A Qualtrics CSV and a Qualtrics definition stay. Print is the browser dialog, not a PDF file. The plugins marketplace card is not on the page. The letter tiles use the export’s 600 weight. The Prolific block is the four steps, not the artboard’s fielding screen.
- Agencies is done at 1440×7074, against a 6559 artboard. Honest copy: no 42-table wave, no Scotland 42%, no Prolific 312/400, no client template, no named partners. The next wave reruns when the file is in, not while fieldwork is open. Organisation roles are owner or member. Data is AWS us-east-1, AES-256, and not used for training. Design partners is an invitation, with no names and no count.
