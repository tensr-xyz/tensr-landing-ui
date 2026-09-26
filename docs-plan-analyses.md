# Analyses docs plan

Inventory of every statistical procedure Tensr actually runs.

## Decisions (approved)

- Sidebar order: Descriptives, Compare means, Correlation & regression, Non-parametric, Categorical, Reliability & factor analysis, Mixed models, Survival, Time series, Survey techniques, Machine learning.
- One page per analysis. Alias keys are tech debt, not user-facing pages.
- Stepwise regression is a Method option on linear regression, with its own H2. Not its own page.
- Banner tables: one page, under Survey techniques, moved from `/docs/banners`, with a redirect. Not started.
- Brand funnel: document the procedure that runs (`funnel`). A dispatcher alias for `brand_funnel` is not needed. Web PR 12 stores `analysisOp: funnel`, and the agent alias map already sends `brand_funnel` to `funnel`.
- Verbatim coding and the choice simulator are feature pages, later. No analysis page.
- Cluster analysis sits under Machine learning.
- Descriptives are **not** computed on a 250-row preview. See bugs. Do not document that label as intended behaviour.

## Status

| Analysis                       | Slug                           | Status  |
| ------------------------------ | ------------------------------ | ------- |
| Descriptives                   | descriptives                   | drafted |
| One-sample t-test              | ttest-one-sample               | drafted |
| Independent-samples t-test     | ttest-independent              | drafted |
| Paired-samples t-test          | ttest-paired                   | drafted |
| One-way ANOVA                  | anova-oneway                   | drafted |
| Two-way ANOVA                  | anova-twoway                   | drafted |
| Three-way ANOVA                | anova-threeway                 | drafted |
| Repeated-measures ANOVA        | anova-repeated                 | drafted |
| Mixed ANOVA                    | anova-mixed                    | drafted |
| ANCOVA                         | ancova                         | drafted |
| MANOVA                         | manova                         | drafted |
| Hotelling’s T²                 | hotelling-t2                   | drafted |
| Bivariate correlation          | correlation                    | drafted |
| Partial correlation            | partial-correlation            | drafted |
| Linear regression              | linear-regression              | drafted |
| Hierarchical regression        | hierarchical-regression        | drafted |
| Logistic regression            | logistic-regression            | drafted |
| Probit regression              | probit-regression              | drafted |
| Poisson regression             | poisson-regression             | drafted |
| Negative binomial regression   | negative-binomial-regression   | drafted |
| Ordinal regression             | ordinal-regression             | drafted |
| Moderation                     | moderation-analysis            | drafted |
| Canonical correlation          | canonical-correlation          | drafted |
| Discriminant analysis          | discriminant-analysis          | drafted |
| Mann–Whitney U                 | mann-whitney-u                 | drafted |
| Kruskal–Wallis H               | kruskal-wallis                 | drafted |
| Wilcoxon signed-rank           | wilcoxon-signed-rank           | drafted |
| Sign test                      | sign-test                      | drafted |
| Friedman                       | friedman                       | drafted |
| Median test                    | median-test                    | drafted |
| Jonckheere–Terpstra            | jonckheere-terpstra            | drafted |
| Moses test                     | moses-test                     | drafted |
| Runs test                      | runs-test                      | drafted |
| Cochran’s Q                    | cochrans-q                     | drafted |
| Kolmogorov–Smirnov             | kolmogorov-smirnov             | drafted |
| Shapiro–Wilk                   | shapiro-wilk                   | drafted |
| Lilliefors K-S                 | lilliefors-ks                  | drafted |
| Chi-square                     | chi-square                     | drafted |
| Fisher’s exact                 | fishers-exact                  | drafted |
| Odds ratio                     | odds-ratio                     | drafted |
| Relative risk                  | relative-risk                  | drafted |
| McNemar                        | mcnemar                        | drafted |
| Cohen’s kappa                  | cohens-kappa                   | drafted |
| Weighted kappa                 | weighted-kappa                 | drafted |
| Fleiss’ kappa                  | fleiss-kappa                   | drafted |
| Kendall’s W                    | kendalls-w                     | drafted |
| Goodman–Kruskal gamma          | goodman-kruskal-gamma          | drafted |
| Somers’ d                      | somers-d                       | drafted |
| Goodman–Kruskal lambda         | goodman-kruskal-lambda         | drafted |
| Mantel–Haenszel                | mantel-haenszel                | drafted |
| Cochran–Armitage               | cochran-armitage               | drafted |
| Loglinear                      | loglinear                      | drafted |
| Correspondence                 | correspondence                 | drafted |
| Cronbach’s alpha               | cronbachs-alpha                | drafted |
| PCA                            | pca                            | drafted |
| Exploratory factor analysis    | efa                            | drafted |
| Confirmatory factor analysis   | confirmatory-factor-analysis   | drafted |
| Structural equation modelling  | structural-equation-modelling  | drafted |
| Multidimensional scaling       | multidimensional-scaling       | drafted |
| Latent class analysis          | latent-class-analysis          | drafted |
| Network centrality             | network                        | drafted |
| Mixed model                    | mixed-model                    | drafted |
| Linear mixed model             | linear-mixed-model             | drafted |
| Generalized linear mixed model | generalized-linear-mixed-model | drafted |
| Multilevel modelling           | multilevel-modelling           | drafted |
| GEE                            | gee                            | drafted |
| Everything else in this file   |                                | todo    |

## Tech debt (alias keys)

These are duplicate API keys for one user-facing procedure. Docs use the menu procedure only.

| User-facing procedure   | Canonical key          | Alias also on the allowlist |
| ----------------------- | ---------------------- | --------------------------- |
| Reliability             | `reliability_cronbach` | `reliability`               |
| Repeated-measures ANOVA | `anova_repeated`       | `rm_anova`                  |
| Mixed ANOVA             | `anova_mixed`          | `mixed_anova`               |

## Feature pages, later

- Verbatim coding (`analysisOp: "verbatim"`). Dialog only. Not in `analyze_dispatch.py`.
- Choice simulator (`choice_simulator`). No dataset. JSON utilities and profiles.

## Bugs found while drafting batch 1

1. **250-row preview is a label, not the computation.** `analysis-dialog-shell.tsx` prints “250-row preview”, and `analysis-wizard-tooltips.ts` says descriptives (and chi-square) use a 250-row preview. `run_descriptives` and `load_df_authorized` run on the full dataframe. The setup dialog’s local preview slice is 500 rows (`analysis-setup-provider.tsx`) and is not what gets posted. Likely a stale label.
2. **`brand_funnel` dispatcher alias — not needed.** Web PR 12 stores `analysisOp: funnel` on the Brand Funnel dialog, and `Q_ANALYSIS_TYPE_ALIASES` already maps `brand_funnel` → `funnel` for the agent. The dialog posts to `/datasets/{id}/techniques/funnel`. Do not add an `analyze_dispatch` branch for `brand_funnel`.
3. **Descriptives statistic checkboxes do not land in the Descriptive statistics table.** `DataFrame.to_json()` is column-oriented (`{column: {stat: value}}`). The statistics filter in `run_descriptives` keeps keys named `mean`, `std`, `min`, `max`, `50%`, `count`, so a wizard request for those stats drops the column entries. Extra stats such as `range` are stored the other way around (`{range: {column: value}}`). The Statistics block from `run_frequencies_output` always shows N, mean, and SD, and it ignores the statistics list.
4. **Mixed ANOVA within-subjects rows are incomplete.** On two real samples, the condition row had `sum_sq` 0 while F and p were filled, and `group × condition` had `sum_sq` and `F` null with a p-value still set. Two within levels also returned Mauchly’s W. On the 8-person example Mauchly’s p was .073, so the report did not add Greenhouse–Geisser columns, but it still printed W. Sphericity is not a test with only two levels. A second sample set `sphericity_violated: true` with epsilon 1.0.
5. **One-way ANOVA Multiple Comparisons drops cells.** On the Tukey example, that SPSS-style block left Std. Error blank for every pair, and left Sig. blank for Lecture versus Workshop, whose adjusted p was stored as 0. The pairwise table on the same run printed p < .001 and Reject H₀ true. The Sig. cell that did print used `< .001***`, with stars glued to the p-value.

Same formatter problems on other analyses (listed, not fixed):

- **Two-way ANOVA Tukey** still copies the four-decimal statsmodels table in `tukey_post_hoc`, so a tiny adjusted p is stored as 0. The pairwise table formats that 0 as `< .001`. That table has no standard-error column and does not glue stars.
- **Bivariate correlation** glues `*`, `**`, or `***` onto the coefficient. The report computes p-values itself, so the stars appear when `flag_significant` is left at false. The diagonal em dash is the variable correlated with itself, not a missing p.
- **Stepwise selection** stored the first step’s p as 0. The printed cell is `< .001`.
- **Negative binomial** left Dispersion α’s standard error as an em dash, and printed the likelihood-ratio chi-square against Poisson as 0.
- **Ordinal regression** left every p-value cell as an em dash on a monotone rating example, with very large coefficients.

`star_for_p` is only used by the one-way Multiple Comparisons block. Correlation stars are a separate helper.

Request fields the dispatcher does not pass through (listed, not fixed): partial correlation `method` (the run stays Pearson); logistic `classification_cutoff`, `max_iter`, `include_constant`, and `hosmer_lemeshow`; probit and ordinal `include_constant`; cluster analysis `standardize` (the body defaults to true and the dispatcher never forwards it, so a request that sets it to false still standardizes).

## Bugs found while drafting mixed models

1. **LMM and GEE dialogs show controls they do not post.** Both reuse `MixedModelForm` (random slopes and REML). `linear_mixed_model` posts `dependent`, `fixed_effects`, and `group_column` only, and the fit is always REML with a random intercept. `gee` posts `outcome`, `independents`, and `group`. The GEE form labels the dependent as numeric. The fit requires a binary outcome. Family is binomial and the correlation is exchangeable.
2. **GLMM `random_effects` does not add a random slope.** The body accepts it, dispatch forwards it, and each listed column must also be a fixed effect. The variational Bayes fit still uses a group random intercept only. The dialog does not send the field.
3. **Stored menu paths for Mixed Model and GEE say Analyze.** Both items live under Multivariate → Mixed Models. `SPSS_MENU_PATHS` says Analyze → Mixed Models → Mixed Model, and Analyze → Generalized Linear Models → GEE.

Sources:

- Allowlist: `tensr-api/app/assistant/constants.py` (`ALLOWED_ANALYSIS_TYPES`, `surface_analysis_types`)
- Request options and defaults: `tensr-api/app/routers/analyze.py` pydantic bodies
- Dispatch: `tensr-api/app/analyze_dispatch.py`
- Menu labels and SPSS paths: `tensr-platform-web/src/lib/analysis-definitions.ts` (`ANALYSIS_LABELS`, `SPSS_MENU_PATHS`)
- Analyze menu: `tensr-platform-web/src/configs/analysis-config/production-menu.tsx`
- Wizard copy for outputs and assumptions: `tensr-platform-web/src/lib/analysis-wizard-tooltips.ts`
- Survey dialogs: `tensr-platform-web/src/components/templates/analysis/techniques/index.tsx` (`TECHNIQUE_CONFIGS`)
- Survey catalog: `tensr-api/app/q_program_catalog.py`

`HIDDEN_ANALYSIS_TYPES`, `PULLED_UNTIL_VALIDATED`, and `UNSHIPPABLE_ANALYSIS_TYPES` are empty, so the allowlist is the surface.

Every `/analyze` body that extends `AnalyzeRequestBase` also has these shared options:

| Option                                   | Default   |
| ---------------------------------------- | --------- |
| `decimal_places` (alias `decimalPlaces`) | `3` (0–6) |
| `apa_format` (`apaFormat`)               | `true`    |
| `include_charts` (`includeCharts`)       | `true`    |

They are not repeated on each row. Column pickers have no numeric default; the wizard fills them from the open dataset.

Sidebar category headers are in `content/docs/analyses/meta.json`. Page slugs are not listed there yet, so the Analyses section will not link to anything until the pages exist. `_template.mdx` is excluded from the build by the `!**/_*.mdx` glob.

Proposed slug is the API key with underscores turned into hyphens (`anova_oneway` → `anova-oneway`).

---

## Not pages (unless you say otherwise)

These are on the allowlist or in menus, and they are data operations or tables, not a hypothesis test:

| Key                            | What it is                         | Source                           |
| ------------------------------ | ---------------------------------- | -------------------------------- |
| `merge_datasets`               | Concatenate datasets               | `analyze.py` `MergeDatasetsBody` |
| `poststratify`                 | Post-stratification weights        | `analyze.py` `PoststratifyBody`  |
| `set_active_weight`            | Set the active weight column       | `analyze.py` `ActiveWeightBody`  |
| `rake`                         | IPF raking                         | `q_program_catalog.py`           |
| `fuse_waves`                   | Concatenate waves, adds `_wave`    | `q_program_catalog.py`           |
| `batch_tables`                 | One banner × every stub            | `q_program_catalog.py`           |
| `column_frequencies`           | Sidebar value counts, not a report | `ColumnFrequenciesExploreBody`   |
| Charts (histogram, scatter, …) | Command palette visuals            | `palette-catalog.ts`             |

`banner_table` is listed under Categorical because it is a real analysis with its own route. There is already a feature page at `/docs/banners`.

Tukey is not its own analysis. `coerce_tukey_analysis_type` turns a Tukey request into one-way ANOVA with `post_hoc: "tukey"`.

---

## Descriptives

### Descriptives — `descriptives`

- **Category:** Descriptives
- **SPSS:** Analyze → Descriptive Statistics → Frequencies
- **Sources:** `DescriptivesBody`; `stats_service`; tooltip `descriptives`
- **Options:** `columns` (optional, all numeric if omitted). `statistics` optional subset of `mean`, `median`, `std_dev`, `variance`, `range`, `min`, `max`, `skewness`, `kurtosis`, `sem`. API default is `null` (server chooses). The wizard’s `DEFAULT_DESCRIPTIVE_STATS` turns on mean, median, std_dev, range, min, max, and turns off variance, skewness, kurtosis, sem.
- **Output:** Per numeric column: N, mean, SD, min, max; mode and frequency for categorical columns; optional median, variance, skewness, kurtosis, SEM.
- **Assumptions:** None. Tooltip says results reflect a 250-row preview, not the full dataset. Confirm whether that is still true before the page says it.
- **Effect size:** No.

---

## Compare means

### Independent-samples t-test — `ttest_independent`

- **Category:** Compare means
- **Non-parametric alternative:** Mann-Whitney U
- **SPSS:** Analyze → Compare Means → Independent-Samples T Test
- **Sources:** `TwoColumnBody`; `stats_service` independent t
- **Options:** `group_column`, `value_column` (required). `confidence_level` `0.95`. `hypothesized_difference` `0`. `missing_values` `listwise` (`pairwise` also allowed). `group_values` optional subset of two group labels.
- **Output:** Group means, SDs, Ns. Levene’s test. t, df, p, CI for the mean difference. Equal- and unequal-variance results where applicable. `cohens_d` is always computed.
- **Assumptions:** Levene runs automatically. There is no toggle. Normality is not tested inside this procedure (Shapiro-Wilk is separate).
- **Effect size:** Cohen’s d, always.

### Paired-samples t-test — `ttest_paired`

- **Non-parametric alternative:** Wilcoxon signed-rank (Sign test is the binary-difference alternative)
- **SPSS:** Analyze → Compare Means → Paired-Samples T Test
- **Sources:** `PairedTBody`
- **Options:** `before_column`, `after_column`. `confidence_level` `0.95`.
- **Output:** Mean and SD of differences; t, df, p, CI; correlation between the two columns. Report metric label `Cohen's dz`.
- **Assumptions:** Not checked automatically.
- **Effect size:** Cohen’s dz, included in the report.

### One-sample t-test — `ttest_one_sample`

- **SPSS:** Analyze → Compare Means → One-Sample T Test
- **Sources:** `OneSampleTBody`
- **Options:** `value_column`. `hypothesized_mean` required, no API default. Wizard default string is `"0"`. `confidence_level` `0.95`.
- **Output:** Sample mean and SD; t, df, p; mean difference and CI.
- **Assumptions:** Not checked automatically.
- **Effect size:** Not an option on the body. Confirm from `stats_service` before the page claims one.

### One-way ANOVA — `anova_oneway`

- **Non-parametric alternative:** Kruskal-Wallis
- **SPSS:** Analyze → Compare Means → One-Way ANOVA
- **Sources:** `AnovaOnewayBody`
- **Options:** `group_column`, `value_column`. `post_hoc` `none` (`tukey`, `bonferroni`, `scheffe`, `games_howell`). `confidence_level` `0.95`. `include_group_descriptives` `true`. `homogeneity_test` `levene` (`brown_forsythe`, `none`). `use_welch` `false`. `effect_size` `eta_squared` (`partial_eta_squared`, `omega_squared`, `none`). `missing_values` `listwise`. `output_chart` `boxplot` (`means_plot`, `none`).
- **Output:** F, df, p. Effect size. Group descriptives when enabled. Post-hoc table when a method is selected. Homogeneity test. Chart from `output_chart`.
- **Assumptions:** Homogeneity test, default Levene. Normality is not tested here.
- **Effect size:** Yes, default η².

### Two-way ANOVA — `anova_twoway`

- **SPSS:** Analyze → General Linear Model → Univariate
- **Sources:** `AnovaTwowayBody`
- **Options:** `factor_a`, `factor_b`, `value_column`. `include_interaction` `true`. `post_hoc` `none` (same methods as one-way). `session_filter` optional.
- **Output:** Type II ANOVA table (main effects and interaction).
- **Assumptions:** No homogeneity option on this body.
- **Effect size:** No `effect_size` field. Report builder sometimes reads `partial_eta_squared` from the raw result; confirm before stating it as a user option.

### Three-way ANOVA — `anova_threeway`

- **SPSS:** Analyze → General Linear Model → Three-Way ANOVA
- **Sources:** `AnovaThreewayBody`
- **Options:** `factor_a`, `factor_b`, `factor_c`, `value_column`. `include_interactions` `true`. `confidence_level` `0.95`.
- **Output:** Not in the wizard tooltip. Pull table labels from the service when writing the page.
- **Assumptions / effect size:** No dedicated fields.

### Repeated-measures ANOVA — `anova_repeated`

- **Non-parametric alternative:** Friedman
- **SPSS:** Analyze → General Linear Model → Repeated Measures
- **Sources:** `AnovaRepeatedBody`
- **Options:** `subject_column`. `measure_columns` (at least 2).
- **Output:** Within-subjects ANOVA table.
- **Assumptions:** Sphericity is not a request option. Confirm whether the service reports it.
- **Effect size:** Not a request field.
- **Alias:** `rm_anova` is a second allowlist key with the same SPSS path and tooltip “Repeated-measures ANOVA table.” See questions.

### Mixed ANOVA — `anova_mixed`

- **SPSS:** Analyze → General Linear Model → Mixed ANOVA
- **Sources:** `MixedAnovaBody` is wired to `anova_mixed` in the route list (`subject_column`, `between_factor`, `within_measures` ≥ 2, `confidence_level` `0.95`).
- **Alias:** `mixed_anova` is a second key. Tooltip: between, within, and interaction effects. See questions.

### ANCOVA — `ancova`

- **SPSS:** Analyze → General Linear Model → Univariate
- **Sources:** `AncovaBody`
- **Options:** `group_column`, `outcome_column`, `covariate_column`. `include_interaction` `false`.
- **Output:** Type II ANCOVA table and model R².
- **Assumptions / effect size:** No dedicated fields.

### MANOVA — `manova`

- **SPSS:** Analyze → General Linear Model → Multivariate
- **Sources:** `ManovaBody`
- **Options:** `group_column`. `dependent_columns` (at least 2).
- **Output:** Multivariate test statistics and p-values.
- **Assumptions / effect size:** No dedicated fields. Confirm which multivariate tests (Pillai, Wilks, …) the service returns.

### Hotelling’s T² — `hotelling_t2`

- **SPSS:** Analyze → Compare Means → Hotelling
- **Sources:** `HotellingT2Body`
- **Options:** `group_column`. `dependent_columns` (at least 1). `group_values` optional.
- **Output:** Tooltip entry exists but the output list is empty. η² appears in `stats_service` for this test (`eta_squared`). Confirm table labels.
- **Effect size:** η² is computed in the service, not chosen by the user.

---

## Correlation & regression

### Bivariate correlation — `correlation`

- **SPSS:** Analyze → Correlate → Bivariate
- **Sources:** `CorrelationBody`
- **Options:** `columns` optional. `method` `pearson` (`spearman`, `kendall`). `significance_alpha` `0.05`. `tail` `two_tailed` (`one_tailed`). `flag_significant` `false`. `missing_values` `pairwise` (`listwise`).
- **Output:** Matrix of r / ρ / τ, p, N. Asterisks only when `flag_significant` is on.
- **Assumptions:** Not tested. Spearman and Kendall are method options on this page, not separate analyses.
- **Effect size:** The coefficient is the effect size.

### Partial correlation — `partial_correlation`

- **SPSS:** Analyze → Correlate → Partial
- **Sources:** `PartialCorrelationBody`
- **Options:** `column_x`, `column_y`. `control_columns` default `[]`. `method` `pearson` (`spearman`, `kendall`).
- **Output:** Partial coefficient and p.
- **Assumptions / extra effect size:** No.

### Linear regression — `linear_regression`

- **SPSS:** Analyze → Regression → Linear
- **Sources:** `RegressionBody`
- **Options:** `dependent`. `independents` (at least 1). `confidence_level` `0.95`. `include_constant` `true`. `method` `enter` (`forward`, `backward`, `stepwise`). `missing_values` `listwise`. `residual_plots` `none` (`residuals_fitted`, `qq`, `both`). `collinearity_diagnostics` `false`. Optional `cluster_by`, `derive_mean_log_rt`, `scales`, `reference_levels` (agent/advanced; not the main wizard).
- **Output:** R², adjusted R², SE of the estimate. Model ANOVA (F, p). Coefficients with SE, t, p, CI. VIF and tolerance when collinearity is on. Residual plots when selected.
- **Assumptions:** Residual plots and collinearity are opt-in. No automatic normality or homoscedasticity test.
- **Effect size:** R² / adjusted R².

### Stepwise regression — `stepwise_regression`

- **SPSS:** Analyze → Regression → Linear → Stepwise
- **Sources:** Own route. Linear regression can also set `method: "stepwise"`.
- **Options:** Confirm the body in the handler before writing the page. Tooltip output: final coefficients, fit statistics, predictors entered.
- **Question:** One page that covers the `method` option, or a separate page?

### Hierarchical regression — `hierarchical_regression`

- **SPSS:** Analyze → Regression → Linear → Hierarchical
- **Sources:** `HierarchicalRegressionBody`
- **Options:** `dependent`. `blocks` (list of predictor lists, at least 1). `method` only `enter`. `confidence_level` `0.95`.
- **Output:** Not in the tooltip. Pull block ΔR² labels from the service.

### Logistic regression — `logistic_regression`

- **SPSS:** Analyze → Regression → Binary Logistic
- **Sources:** `LogisticRegressionBody`
- **Options:** `dependent` optional if `derive_binary_from` is set. `independents` ≥ 1. `confidence_level` `0.95`. `classification_cutoff` `0.5`. `max_iter` `20`. `include_constant` `true`. `hosmer_lemeshow` `false`. Optional `cluster_by`, `reference_levels`, `interactions`, `scales`, `predict_at`, `others_at` default `"mean"`, `derive_hours_since_group_min`.
- **Output:** B, Wald, p, Exp(B) with CI. −2 log likelihood, Cox & Snell R², Nagelkerke R². Classification table. Hosmer–Lemeshow only when enabled.
- **Assumptions:** Hosmer–Lemeshow is off by default.
- **Effect size:** Pseudo-R² values above.

### Probit regression — `probit_regression`

- **SPSS:** Analyze → Regression → Probit
- **Sources:** `ProbitRegressionBody`
- **Options:** `dependent` optional with `derive_binary_from`. `independents` ≥ 1. `confidence_level` `0.95`. `include_constant` `true`.
- **Output:** Coefficients, SE, p.
- **Assumptions / effect size:** No dedicated fields.

### Poisson regression — `poisson_regression`

- **SPSS:** Analyze → Regression → Poisson
- **Sources:** `PoissonRegressionBody`
- **Options:** `dependent`, `independents` ≥ 1, `confidence_level` `0.95`, `include_constant` `true`.
- **Output:** Coefficients, incidence rate ratios, AIC, deviance.

### Negative binomial regression — `negative_binomial_regression`

- **SPSS:** Analyze → Regression → Negative Binomial
- **Sources:** `NegativeBinomialRegressionBody`
- **Options:** Same shape as Poisson.
- **Output:** Coefficients, IRRs, fit statistics.

### Ordinal regression — `ordinal_regression`

- **SPSS:** Analyze → Regression → Ordinal
- **Sources:** `OrdinalRegressionBody`
- **Options:** `dependent`, `independents` ≥ 1, `confidence_level` `0.95`, `include_constant` `true`.
- **Output:** Ordinal logit coefficients and thresholds.

### Moderation — `moderation_analysis`

- **SPSS:** Analyze → Regression → Moderation
- **Sources:** `ModerationAnalysisBody`
- **Options:** `outcome_column`, `predictor_column`, `moderator_column`. `center_variables` `true`. `confidence_level` `0.95`.
- **Output:** Not in the tooltip. Pull the interaction-term table from the service.
- **Assumptions:** Not checked here.

### Canonical correlation — `canonical_correlation`

- **SPSS:** Analyze → Correlate → Canonical
- **Sources:** `CanonicalCorrelationBody`
- **Options:** `set_a`, `set_b` (each at least 1 column).
- **Output:** Canonical correlations for each function.
- **Effect size:** The canonical correlations.

### Discriminant analysis — `discriminant_analysis`

- **SPSS:** Analyze → Classify → Discriminant
- **Sources:** `DiscriminantBody`
- **Options:** `group_column`. `columns` ≥ 1.
- **Output:** Classification accuracy and discriminant coefficients.

---

## Non-parametric

### Mann-Whitney U — `mann_whitney_u`

- **Parametric counterpart:** Independent-samples t-test
- **SPSS:** Analyze → Nonparametric Tests → 2 Independent Samples
- **Sources:** `TwoColumnBody` (same fields as the independent t-test)
- **Options:** `group_column`, `value_column`, `confidence_level` `0.95`, `hypothesized_difference` `0`, `missing_values` `listwise`, optional `group_values`.
- **Output:** U, p, Wilcoxon W, Z for larger samples.
- **Assumptions / effect size:** No automatic check and no effect-size option (no rank-biserial field).

### Kruskal-Wallis H — `kruskal_wallis`

- **Parametric counterpart:** One-way ANOVA
- **SPSS:** Analyze → Nonparametric Tests → K Independent Samples
- **Sources:** `KruskalWallisBody`
- **Options:** `group_column`, `value_column`. `post_hoc` `false`. `confidence_level` `0.95`.
- **Output:** H, df, p, mean ranks. Pairwise table only when `post_hoc` is true.
- **Effect size:** No option (no epsilon-squared field).

### Wilcoxon signed-rank — `wilcoxon_signed_rank`

- **Parametric counterpart:** Paired t-test
- **SPSS:** Analyze → Nonparametric Tests → 2 Related Samples
- **Sources:** `PairedTBody`
- **Options:** `before_column`, `after_column`, `confidence_level` `0.95`.
- **Output:** W, p, median difference.
- **Effect size:** No option.

### Sign test — `sign_test`

- **SPSS:** Analyze → Nonparametric Tests → Related Samples
- **Sources:** `SignTestBody`
- **Options:** `before_column`, `after_column`.
- **Output:** Positive vs negative difference counts and p.
- **Effect size:** No.

### Friedman — `friedman`

- **Parametric counterpart:** Repeated-measures ANOVA
- **SPSS:** Analyze → Nonparametric Tests → K Related Samples
- **Sources:** `FriedmanBody`
- **Options:** `measure_columns` (at least 3).
- **Output:** χ², df, p, mean by measure.
- **Effect size:** No Kendall’s W on this body. Kendall’s W is a separate analysis (`kendalls_w`).

### Median test — `median_test`

- **SPSS:** Analyze → Compare Means → Median Test
- **Sources:** `MedianTestBody`
- **Options:** `group_column`, `value_column`.
- **Output:** Chi-square comparing counts above and below the grand median.

### Jonckheere-Terpstra — `jonckheere_terpstra`

- **SPSS:** Analyze → Nonparametric Tests → Jonckheere–Terpstra
- **Sources:** `JonckheereTerpstraBody`
- **Options:** `group_column`, `value_column`. `group_order` optional.
- **Output:** J, Z, one-tailed p.

### Moses test — `moses_test`

- **SPSS:** Analyze → Nonparametric Tests → Moses
- **Sources:** `MosesTestBody`
- **Options:** `group_column`, `value_column`. `trim_fraction` `0.05` (0–0.25).
- **Output:** Range statistics after trimming extremes.

### Runs test — `runs_test`

- **SPSS:** Analyze → Nonparametric Tests → Runs
- **Sources:** `RunsTestBody`
- **Options:** `column`. `cutoff` `median` (`mean`).
- **Output:** Number of runs, Z, p.

### Cochran’s Q — `cochrans_q`

- **SPSS:** Analyze → Nonparametric Tests → Cochran
- **Sources:** `CochransQBody`
- **Options:** `measure_columns` (at least 3).
- **Output:** Tooltip output list is empty. Pull from the service.

### Kolmogorov-Smirnov — `kolmogorov_smirnov`

- **SPSS:** Analyze → Nonparametric Tests → K-S
- **Sources:** `KolmogorovSmirnovBody`
- **Options:** `test_type` `two_sample` (`normality`). `column_a`. `column_b` required for two-sample, optional for normality.
- **Output:** Test statistic, p, sample sizes.
- **This is an assumption check**, not a mean comparison.

### Shapiro-Wilk — `shapiro_wilk`

- **SPSS:** Analyze → Nonparametric Tests → Normality
- **Sources:** `ShapiroWilkBody`
- **Options:** `column`.
- **Output:** W and p. Significant p means the normality assumption is rejected.

### Lilliefors K-S — `lilliefors_ks`

- **SPSS:** Analyze → Nonparametric Tests → Normality
- **Sources:** `LillieforsKsBody`
- **Options:** `column`.
- **Output:** D and p.

---

## Categorical

### Chi-square test of independence — `chi_square`

- **SPSS:** Analyze → Descriptive Statistics → Crosstabs
- **Sources:** `ChiSquareBody`
- **Options:** `column_a`, `column_b`. `include_phi` `true`. `include_cramers_v` `true`. `use_fishers_exact` `false`.
- **Output:** Contingency counts. χ² and p. Phi and Cramér’s V when those flags are on. Fisher’s exact when requested (also a separate analysis).
- **Assumptions:** Expected-count warnings are not a request option. Confirm whether the result includes an expected-count check.
- **Effect size:** Phi and Cramér’s V, on by default.

### Fisher’s exact test — `fishers_exact`

- **SPSS:** Analyze → Descriptive Statistics → Crosstabs → Exact
- **Sources:** `TwoColumnCategoricalBody` (`column_a`, `column_b`)
- **Output:** Not in the tooltip. 2×2 exact p from the service.
- **Also:** a flag on chi-square (`use_fishers_exact`).

### Odds ratio — `odds_ratio`

- **SPSS:** Analyze → Descriptive Statistics → Odds Ratio
- **Sources:** `TwoColumnCategoricalBody`
- **Output:** Confirm OR and CI labels from the service.

### Relative risk — `relative_risk`

- **SPSS:** Analyze → Descriptive Statistics → Relative Risk
- **Sources:** `TwoColumnCategoricalBody`

### McNemar — `mcnemar`

- **SPSS:** Analyze → Descriptive Statistics → Crosstabs
- **Sources:** `McNemarBody` (`column_a`, `column_b`)
- **Output:** Discordant pair counts and p.
- **Note:** `RETIRED_FROM_UI_LABELS` still names McNemar, but the route exists and the key is in `AnalysisKey`. Confirm it is still on the Analyze menu before writing the page.

### Cohen’s kappa — `cohens_kappa`

- **SPSS:** Analyze → Descriptive Statistics → Crosstabs → Kappa
- **Sources:** `CohensKappaBody` (`column_a`, `column_b`)
- **Output:** Tooltip output list is empty. Kappa is the statistic.

### Weighted kappa — `weighted_kappa`

- **SPSS:** Analyze → Scale → Weighted Kappa
- **Sources:** `WeightedKappaBody`
- **Options:** `column_a`, `column_b`. `weights` `linear` (`quadratic`).

### Fleiss’ kappa — `fleiss_kappa`

- **SPSS:** Analyze → Scale → Fleiss Kappa
- **Sources:** `MultiRaterBody` (`columns` ≥ 2, optional `categories`)

### Kendall’s W — `kendalls_w`

- **SPSS:** Analyze → Scale → Kendall W
- **Sources:** `MultiRaterBody`

### Goodman-Kruskal gamma — `goodman_kruskal_gamma`

- **SPSS:** Analyze → Correlate → Gamma
- **Sources:** `TwoColumnCategoricalBody`

### Somers’ d — `somers_d`

- **SPSS:** Analyze → Correlate → Somers D
- **Sources:** `TwoColumnCategoricalBody`

### Goodman-Kruskal lambda — `goodman_kruskal_lambda`

- **SPSS:** Analyze → Correlate → Lambda
- **Sources:** `TwoColumnCategoricalBody`

### Mantel-Haenszel — `mantel_haenszel`

- **SPSS:** Analyze → Correlate → Mantel-Haenszel Trend
- **Sources:** `TrendTestBody` (`group_column`, `outcome_column`)

### Cochran-Armitage — `cochran_armitage`

- **SPSS:** Analyze → Correlate → Cochran-Armitage Trend
- **Sources:** `TrendTestBody`

### Loglinear — `loglinear`

- **SPSS:** Analyze → Loglinear → General
- **Sources:** `LoglinearBody`
- **Options:** `columns` ≥ 2. `model` `saturated` (`custom`). `max_iterations` `20`.
- **Note:** Also named in `RETIRED_FROM_UI_LABELS`. Route still exists.

### Banner table — `banner_table`

- **SPSS:** Analyze → Tables → Custom Tables
- **Sources:** `BannerTableBody`
- **Options:** `stub_column`, `banner_column`. `column_percent` `true`. `column_letters` `true`. `nest_banners` `true`. `row_percent` `false`. `low_base_threshold` `30` (1–500).
- **Output:** Weighted crosstab, column %, significance letters. Already described on `/docs/banners`.
- **Question:** Second page under Analyses, or a link to the existing banners page?

### Correspondence analysis — `correspondence`

- **Menu:** Survey techniques → Correspondence Analysis (also a categorical dimension-reduction method)
- **Sources:** `TECHNIQUE_CONFIGS`, `analyze_dispatch.py`
- **Options:** `row_column`, `column_column`. No extra defaults.
- **Output:** Biplot. Pull axis and inertia labels from `techniques.py` when writing the page.

---

## Reliability & factor analysis

### Cronbach’s alpha — `reliability_cronbach`

- **SPSS:** Analyze → Scale → Reliability Analysis
- **Sources:** `ReliabilityBody` (`columns` ≥ 2)
- **Output:** Cronbach’s α (tooltip string was truncated by an apostrophe; the label in source is Cronbach’s alpha).
- **Alias:** `reliability` uses the same SPSS path. Tooltip output list is empty. See questions.

### PCA — `pca`

- **SPSS:** Analyze → Dimension Reduction → PCA
- **Sources:** `PcaBody`
- **Options:** `columns` ≥ 2. `n_components` default `null` (server decides), range 1–50. Wizard sends an empty string, which must be mapped to null.
- **Output:** Eigenvalues, variance explained, loadings.
- **Assumptions:** No KMO/Bartlett option on the body. Confirm whether the service returns them.

### Exploratory factor analysis — `efa`

- **SPSS:** Analyze → Dimension Reduction → Factor
- **Sources:** `EfaBody`
- **Options:** `columns` ≥ 2. `n_factors` default `null`, 1–50.
- **Output:** Loadings and communalities.
- **Rotation / extraction:** Not on the request body. The page should say Tensr does not expose a rotation choice unless the service hard-codes one. Confirm which method before writing.

### Confirmatory factor analysis — `confirmatory_factor_analysis`

- **SPSS path in code:** Multivariate → CFA (not an SPSS menu)
- **Sources:** `ConfirmatoryFactorAnalysisBody`
- **Options:** `indicators` ≥ 2. `model_spec` required, max 8000 characters. Wizard example: `F1 =~ item1 + item2 + item3`.
- **Output:** Loadings, CFI, RMSEA, SRMR, path diagram.

### Structural equation modelling — `structural_equation_modelling`

- **SPSS path in code:** Multivariate → SEM
- **Sources:** `StructuralEquationModellingBody`
- **Options:** `model_spec` required, max 8000. `columns` optional.
- **Output:** Path coefficients, fit indices, path diagram.

### Multidimensional scaling — `multidimensional_scaling`

- **SPSS:** Analyze → Scale → Multidimensional Scaling
- **Sources:** `MultidimensionalScalingBody`
- **Options:** `columns` ≥ 2. `n_components` `2` (1–10).
- **Output:** Coordinates and stress.

### Cluster analysis — `cluster_analysis`

- **SPSS:** Analyze → Classify → Hierarchical Cluster (the path names hierarchical even though the default method is k-means)
- **Sources:** `ClusterBody`
- **Options:** `columns` ≥ 1. `method` `kmeans` (`hierarchical`). `n_clusters` `3` (2–50). `standardize` `true`.
- **Output:** Cluster sizes and, for k-means, centroids.
- **Docs page** will be written under Machine learning, not in this section.

### Latent class analysis — `latent_class_analysis`

- **SPSS path in code:** Multivariate → Latent Class Analysis
- **Sources:** `LatentClassAnalysisBody`
- **Options:** `indicators` ≥ 1. `n_classes` `2` (2–10).
- **Output:** Class membership probabilities and a profile bar chart per class.

### Network — `network`

- **SPSS path in code:** Analyze → Network → Centrality
- **Sources:** `NetworkBody`
- **Options:** Edge list: `source`, `target`, optional `weight`. Or `adjacency_columns`. Wizard ingest default is `edge_list`.
- **Output:** Centrality table, density, components, modularity, spring layout.

---

## Mixed models

### Linear mixed model — `linear_mixed_model`

- **Menu path in code:** Multivariate → Mixed Models → LMM
- **Sources:** `LinearMixedModelBody`
- **Options:** `dependent`. `fixed_effects` ≥ 1. `group_column`. `random_effects` optional.
- **Output:** Fixed-effect coefficients, random-effects summary, fitted vs residual chart.
- **Alias question:** `mixed_model` is a different body (`MixedModelBody`: `outcome`, `group`, `fixed_effects` default `[]`, `random_slopes` default `[]`, `reml` `true`). Tooltip output: fixed effects with SE, z, p, 95% CI; variance components, ICC, group counts, fit diagnostics.

### Generalized linear mixed model — `generalized_linear_mixed_model`

- **Sources:** `GeneralizedLinearMixedModelBody`
- **Options:** `dependent`, `fixed_effects` ≥ 1, `group_column`. `family` `binomial` (`poisson`). `random_effects` optional. `derive_binary_from` optional.
- **Output:** Coefficient table, random effects, fitted vs residual chart.

### Multilevel modelling — `multilevel_modelling`

- **Sources:** `MultilevelModellingBody`
- **Options:** `outcome_column`. `level1_predictors` ≥ 1. `level2_group_column`. `random_slopes` optional.
- **Output:** ICC, fixed effects, random intercept chart.
- **Question:** Is this the same procedure as `linear_mixed_model` / `mixed_model` with different inputs?

### GEE — `gee`

- **SPSS path in code:** Analyze → Generalized Linear Models → GEE
- **Sources:** `GeeBody`
- **Options:** `outcome`, `independents` ≥ 1, `group`. No correlation-structure field.
- **Output:** Coefficients with cluster-robust SEs.
- **Assumptions:** No working-correlation option is exposed.

Resolved while drafting: `linear_mixed_model`, `mixed_model`, and `multilevel_modelling` are three menu items, not aliases. LMM and HLM share the MixedLM engine and always use REML. HLM adds the ICC and a variance split. Mixed Model posts random slopes and REML, prints z and a confidence interval, and takes its ICC from a null model. All five Mixed models pages are drafted.

---

## Survival

Menu paths in code are under “Time series → Survival”, which is not the SPSS Survival menu.

### Kaplan-Meier — `kaplan_meier`

- **Sources:** `KaplanMeierBody`
- **Options:** `duration_column`, `event_column`. `group_column` optional.
- **Output:** Survival curve with CI bands. Log-rank p when a group column is set.

### Cox proportional hazards — `cox_proportional_hazards`

- **Sources:** `CoxProportionalHazardsBody`
- **Options:** `duration_column`, `event_column`, `covariates` ≥ 1.
- **Output:** Coefficients, hazard ratios, baseline survival curve.
- **Assumptions:** No proportional-hazards test option on the body.

### Nelson-Aalen — `nelson_aalen`

- **Sources:** `NelsonAalenBody`
- **Options:** `duration_column`, `event_column`.
- **Output:** Cumulative hazard plot.

---

## Time series

### ARIMA / SARIMA — `arima_sarima`

- **Sources:** `ArimaSarimaBody`
- **Options:** `target_column`. `date_column` optional. `seasonal_period` default `null` (2–365 if set). `forecast_steps` `12` (1–60).
- **Output:** Selected order, forecast table with 95% CI, forecast chart.
- **Note:** Wizard default for `seasonalPeriod` is `"12"`, which disagrees with the API default of null. The page should follow the API unless the wizard always sends 12.

### Exponential smoothing — `exponential_smoothing`

- **Sources:** `ExponentialSmoothingBody`
- **Options:** `target_column`, optional `date_column`. `seasonal_period` `12`. `forecast_steps` `12`.
- **Output:** Forecast table with approximate CI, fitted vs forecast chart.

### STL decomposition — `stl_decomposition`

- **Sources:** `StlDecompositionBody`
- **Options:** `target_column`, optional `date_column`. `period` `12`.
- **Output:** Trend, seasonal, and residual charts.

### Stationarity tests — `stationarity_tests`

- **Sources:** `StationarityTestsBody`
- **Options:** `target_column`, optional `date_column`.
- **Output:** ADF and KPSS statistics, p-values, critical values.
- **These are the assumption checks.**

### Autocorrelation — `autocorrelation`

- **Sources:** `AutocorrelationBody`
- **Options:** `target_column`, optional `date_column`. `max_lags` `20` (1–100). Wizard default matches (`acfMaxLags` `"20"`).
- **Output:** ACF and PACF bar charts.

---

## Machine learning

Holdout models use `test_fraction` `0.25` (greater than 0.05, less than 0.5) unless noted. No classical assumption checks. “Effect size” is holdout fit, not an APA effect size.

### Decision tree — `decision_tree`

- **SPSS path in code:** Analyze → Classify → Tree
- **Sources:** `DecisionTreeBody`
- **Options:** `dependent`, `independents` ≥ 1. `max_depth` default `null` (1–50). `test_fraction` `0.25`.
- **Output:** Train/test accuracy and variable importances.

### Random forest classification — `random_forest_classification`

- **Sources:** `RandomForestClassificationBody`
- **Options:** supervised fields plus `n_estimators` `100` (10–500).
- **Output:** Accuracy, confusion matrix, ROC for binary outcomes, feature importance chart.

### Random forest regression — `random_forest_regression`

- **Sources:** `RandomForestRegressionBody`
- **Options:** `n_estimators` `100`.
- **Output:** R², RMSE, predicted-vs-actual scatter, feature importance.

### SVM classification — `svm_classification`

- **Sources:** `SvmClassificationBody` (no extra fields)
- **Output:** Confusion matrix and ROC on holdout data.
- **Kernel / C:** not exposed.

### Gradient boosting — `gradient_boosting`

- **Sources:** `GradientBoostingBody`
- **Options:** `mode` `classification` (`regression`). `n_estimators` `100` (10–300). Plus supervised fields.
- **Output:** Holdout metrics, feature importance, learning curve.
- **One page** with the mode option, not two pages.

### Neural network (MLP) — `neural_network_mlp`

- **Sources:** `NeuralNetworkMlpBody`
- **Options:** `mode` `classification` (`regression`). Hidden-layer size is not on the body.
- **Output:** Loss curve, confusion matrix or predicted-vs-actual plot.

### DBSCAN — `dbscan`

- **Sources:** `DbscanBody`
- **Options:** `columns` ≥ 1. `epsilon` `0.5`. `min_samples` `5` (1–100). `standardize` `true`.
- **Output:** Cluster sizes, noise count, 2-D scatter.

---

## Survey techniques

Registered from `Q_AGENT_ANALYSIS_TYPES` onto `POST /datasets/{id}/analyze/{op}` with `QAnalyzeBody` (extra fields allowed). Dialog fields below are what the UI sends. Service defaults that the dialog does not show are noted.

### TURF — `turf`

- **UI fields:** `items` (columns). `k` default `3`.
- **Service defaults not on the dialog:** `method` `"greedy"`, `tie_break` `"first_in_item_order"` (`techniques.py`).
- **Output:** Reach/frequency of a k-item combination. Pull the table columns from `turf()` when writing the page.

### Driver analysis — `drivers`

- **UI fields:** `outcome`, `drivers`.
- **Service default:** `method` `"johnson"` (relative weights). Hints also name shapley, pls, ridge, but the dialog does not expose them.

### NPS — `nps`

- **UI fields:** `score_column`. `group_column` optional.
- **Definition in catalog:** promoters 9–10 minus detractors 0–6, not the 0–10 mean.

### Van Westendorp — `van_westendorp`

- **UI fields:** `too_cheap`, `cheap`, `expensive`, `too_expensive`.

### Gabor-Granger — `gabor_granger`

- **UI fields:** `price_column`, `buy_column`.

### Brand funnel — catalog key `funnel`

- **Catalog key `funnel`.** The dialog stores `analysisOp: funnel` (web PR 12). A dispatcher alias for `brand_funnel` is not needed.
- **UI fields:** `stages`.

### MaxDiff counting — `maxdiff_count`

- **UI fields:** `best_column`, `worst_column`.

### MaxDiff MNL — `maxdiff_mnl`

- **UI fields:** `best_column`, `worst_column`, `set_columns`, `items`.

### MaxDiff HB — `maxdiff_hb`

- **UI fields:** `best_column`, `worst_column`. Optional `respondent_column`, `set_columns`, `items`.
- **Catalog:** penalized mixed logit, needs `respondent_id`. Not Sawtooth.

### Conjoint MNL — `conjoint_mnl`

- **UI fields:** `chosen_column`, `profile_id_column`, `attribute_columns`.

### Conjoint HB — `conjoint_hb`

- **UI fields:** `chosen_column`, `alt_column`, `task_column`. Optional `respondent_column`, `alternatives`.

### Choice simulator — `choice_simulator`

- **No dataset.** UI fields are JSON: `utilities`, `profiles`.
- **Question:** Include a docs page? It is a calculator on top of conjoint utilities, not a dataset analysis.

### Open-text coding — `code_open_text`

- **SPSS path in code:** Analyze → Text → Code open text
- **Sources:** `CodeOpenTextBody` (not the open `QAnalyzeBody`)
- **Options:** `text_column`. `codebook` default `[]`. `assignments` default `[]`. Optional `coder_columns`, `crosstab_column`.
- **Wizard** sends `lexicon` text and `multi_response: false`. Confirm the wizard payload matches this body.
- **Output:** Code frequencies, optional crosstab, Krippendorff’s alpha when two coder columns are set.
- **Not NLP.** Keyword lexicon or codebook only.

### Verbatim coding — UI only

- **Dialog** `TECHNIQUE_CONFIGS` key `Verbatim Coding`, `analysisOp: "verbatim"`, field `text_column`.
- **Not** in `analyze_dispatch.py` and not in `Q_AGENT_ANALYSIS_TYPES`. Do not write a page unless you want the dialog documented as unsupported by the agent route.

---

## Cross-links to use on the pages

| Page                            | Link to                                                                     |
| ------------------------------- | --------------------------------------------------------------------------- |
| Independent t                   | Mann-Whitney U; one-way ANOVA if there are 3+ groups                        |
| Paired t                        | Wilcoxon; Sign test                                                         |
| One-way ANOVA                   | Kruskal-Wallis; independent t (2 groups); post-hoc is an option, not a page |
| Repeated-measures ANOVA         | Friedman; Cochran’s Q for binary repeated measures                          |
| Pearson (method on correlation) | Spearman and Kendall on the same page                                       |
| Chi-square                      | Fisher’s exact; odds ratio; phi / Cramér’s V are options                    |
| Cronbach                        | EFA, PCA                                                                    |
| EFA                             | CFA, PCA                                                                    |
| Kaplan-Meier                    | Cox; Nelson-Aalen                                                           |
| Cluster k-means                 | DBSCAN                                                                      |

---

## Questions

1. **Scope.** This is about 90 procedures once survey techniques are included. Drop Machine learning, Time series, Survival, and Survey techniques from the docs, or keep the extra sidebar categories already added?
2. **Duplicate keys.** Write one page and mention the alias, or two pages?
   - `reliability_cronbach` and `reliability`
   - `anova_repeated` and `rm_anova`
   - `anova_mixed` and `mixed_anova`
   - `linear_mixed_model`, `mixed_model`, and `multilevel_modelling`
3. **Stepwise.** Separate page, or only the Method option on linear regression?
4. **Banner tables.** New analyses page, or only the existing `/docs/banners` page?
5. **`funnel` vs `brand_funnel`.** Resolved: document `funnel`. The dispatcher alias is not needed.
6. **Verbatim coding and choice simulator.** Skip both?
7. **Descriptives sample.** Is the 250-row preview note in the wizard tooltip still accurate?
8. **Cluster analysis category.** Reliability & factor analysis, or Machine learning?
9. **Example output.** After approval I will run each core stats procedure on a small in-memory frame if `stats_service` can be imported without the full API. Survey, SEM, mixed models, and ML will get `{/* TODO: real example output */}` unless that import works for them too.
10. **SPSS paths that are not SPSS.** Survival, ML, CFA, SEM, and mixed models use Tensr menu paths in `SPSS_MENU_PATHS`. The “Coming from SPSS” section should say when there is no SPSS equivalent. Confirm that wording.
