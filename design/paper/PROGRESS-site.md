# Marketing site · Paper match

Repo: `tensr-landing-ui` pull request #24 (`agent/paper-site`), checkout `tensr-landing-paper`.
Dev server: `http://localhost:3001` (`next dev --port 3001`). Port 3000 is the app and is left alone.
Paper file: Lucky waterfall `01M59W7RD1PH1ASN75MD4AQQ0W`, page ★ Flow · latest drafts.

Counts: todo 8 · matched 0 · done 0

| Page | Artboard | Route | Status |
| --- | --- | --- | --- |
| 0 Landing | 2WD-0 | `/` | matched |
| 0b Product | 18A5-0 | `/product` | todo |
| 0c Integrations | 1CX3-0 | `/integrations` | todo |
| 0d Agencies | 17UM-0 | `/agencies` | todo |
| 0e Pricing | 1BZU-0 | `/pricing` | todo |
| 0h Book a demo | 1A3G-0 | `/demo` | todo |
| 0i Docs | 1DTL-0 | `/docs` | todo |
| 0j Changelog | 1DTM-0 | `/changelog` | todo |
| 0k Security | 1DTN-0 | `/security` | todo |

`matched` means the page is built and compared. `done` means the 1440 screenshot matches the artboard.

## Decisions

- Sign in and Start free trial go to `https://app.tensr.xyz/login`. The site does not host Stytch. The email fields on the landing page are not submitted.
- Book a demo goes to `/demo`, which emails `help@tensr.xyz`.
- Prolific, Qualtrics and Decipher are labelled coming soon. SPSS `.sav` import, Excel and PowerPoint stay as current exports.
- The analysis count is 83 documented pages, so the figure reads 83 rather than 83+.
- Changelog cards use the published notes: 0.5.1 (20 Oct), 0.5.0 (19 Oct), 0.4.9 (18 Oct). The artboard’s 21 Oct “Merging and levelled data” card is not a changelog entry.
- The case-study block stays the artboard’s placeholder. There is no signed-off quote and no customer number.
- MaxDiff, conjoint, Van Westendorp and Gabor-Granger are not in the analysis list. Those cards do not claim them as available.
- Team sign-in copy says email one-time codes, and that SAML SSO is not available.
- Privacy and Terms use the GitBook URLs already in the site footer. LinkedIn and X have no URLs in the repo, so those words are not links.
- The fourth hero panel is clipped on the 1440 artboard. The page shows the three panels that are fully visible.
- Sample table percentages in the workspace mock are the artboard’s illustration, not a customer result.
