#!/usr/bin/env python3
"""Regenerate analysis-doc examples from one seeded cohort.

Run from a tensr-api checkout of main, with that tree on PYTHONPATH:

    PYTHONPATH=/path/to/tensr-api-main \\
      /path/to/tensr-api/.venv/bin/python scripts/analysis-examples.py --write

Seed is 20260928 (NumPy PCG64). Coefficients are fixed in this file.
Re-running reprints the same tables.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

import numpy as np
import pandas as pd

SEED = 20260928
ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "content" / "docs" / "analyses"

# Primary result is written as non-significant. At least a quarter of pages.
NS_SLUGS = {
    "ttest-one-sample",
    "sign-test",
    "median-test",
    "runs-test",
    "shapiro-wilk",
    "lilliefors-ks",
    "loglinear",
    "kolmogorov-smirnov",
    "fishers-exact",
    "odds-ratio",
    "relative-risk",
    "mcnemar",
    "kendalls-w",
    "cochrans-q",
    "jonckheere-terpstra",
    "hotelling-t2",
    "moderation-analysis",
    "partial-correlation",
    "chi-square",
    "mantel-haenszel",
    "logistic-regression",
    "probit-regression",
    "kaplan-meier",
}


def build_frames(rng: np.random.Generator) -> dict[str, pd.DataFrame]:
    n = 96
    method = np.array(["Lecture"] * 32 + ["Online"] * 32 + ["Workshop"] * 32)
    time = np.tile(np.array(["Morning"] * 16 + ["Afternoon"] * 16), 3)
    hours = rng.normal(5, 1.3, n).clip(1, 9)
    anxiety = rng.normal(5, 1.3, n).clip(1, 9)
    practice = rng.normal(3, 1.0, n).clip(0, 6)
    shift = np.array([{"Lecture": 0.0, "Online": 3.0, "Workshop": 6.0}[m] for m in method])
    score = 68 + shift + 2.2 * (hours - 5) - 1.8 * (anxiety - 5) + rng.normal(0, 7.5, n)
    confidence = 50 + 0.55 * shift + 1.1 * (hours - 5) + rng.normal(0, 8, n)
    logit = -0.15 + 0.28 * (hours - 5) + 0.08 * shift + rng.normal(0, 0.4, n)
    passed = (rng.random(n) < 1 / (1 + np.exp(-logit))).astype(int)
    lam = np.exp(0.7 + 0.18 * (anxiety - 5))
    absences = rng.poisson(lam)
    # NB2 visits: variance = mu + 1.4*mu^2
    visit_mu = np.exp(0.5 + 0.16 * (anxiety - 5))
    visit_lam = rng.gamma(1 / 1.4, visit_mu * 1.4)
    visits = rng.poisson(visit_lam)
    sat_latent = 0.35 * (hours - 5) - 0.15 * (anxiety - 5) + rng.normal(0, 1, n)
    satisfaction = np.digitize(sat_latent, [-0.8, 0.0, 0.8]) + 1
    hand = rng.choice(["Left", "Right"], n, p=[0.14, 0.86])
    gender = rng.choice(["Man", "Woman"], n)

    cohort = pd.DataFrame(
        {
            "method": method,
            "time": time,
            "hours": np.round(hours, 2),
            "anxiety": np.round(anxiety, 2),
            "practice": np.round(practice, 2),
            "score": np.round(score, 1),
            "confidence": np.round(confidence, 1),
            "passed": passed,
            "absences": absences,
            "visits": visits,
            "satisfaction": satisfaction.astype(int),
            "hand": hand,
            "gender": gender,
        }
    )

    # Paired: a real but noisy gain, and a near-zero gain.
    before = rng.normal(50, 8, 48)
    after = before + rng.normal(2.2, 8.0, 48)
    before_ns = rng.normal(50, 8, 48)
    after_ns = before_ns + rng.normal(0.15, 8, 48)
    paired = pd.DataFrame(
        {
            "before": np.round(before, 1),
            "after": np.round(after, 1),
            "before_ns": np.round(before_ns, 1),
            "after_ns": np.round(after_ns, 1),
        }
    )

    # Repeated measures, moderate rise, overlapping people.
    base = rng.normal(0, 1, 36)
    repeated = pd.DataFrame(
        {
            "id": np.arange(1, 37),
            "week1": np.round(20 + base * 3 + rng.normal(0, 4, 36), 1),
            "week2": np.round(20 + base * 3 + 2.2 + rng.normal(0, 4, 36), 1),
            "week3": np.round(20 + base * 3 + 4.0 + rng.normal(0, 4, 36), 1),
        }
    )

    group = np.array(["Control"] * 24 + ["Treatment"] * 24)
    pre = rng.normal(48, 7, 48)
    gain = np.where(group == "Treatment", rng.normal(4.5, 6, 48), rng.normal(1.2, 6, 48))
    mixed = pd.DataFrame(
        {
            "id": np.arange(1, 49),
            "group": group,
            "pre": np.round(pre, 1),
            "post": np.round(pre + gain, 1),
        }
    )

    # Clinics for mixed models. Moderate cluster effect and a hours slope.
    n_c, per = 12, 10
    clinic_fx = rng.normal(0, 4.0, n_c)
    clinic = np.repeat([f"c{i:02d}" for i in range(n_c)], per)
    chours = rng.normal(5, 1.2, n_c * per).clip(1, 9)
    cscore = 50 + clinic_fx[np.repeat(np.arange(n_c), per)] + 2.0 * (chours - 5) + rng.normal(0, 5, n_c * per)
    clogit = -0.2 + 0.22 * (chours - 5) + 0.15 * clinic_fx[np.repeat(np.arange(n_c), per)]
    cpass = (rng.random(n_c * per) < 1 / (1 + np.exp(-clogit))).astype(int)
    clinics = pd.DataFrame(
        {
            "clinic": clinic,
            "hours": np.round(chours, 2),
            "score": np.round(cscore, 1),
            "passed": cpass,
        }
    )

    # Agreement. Ratings 1–3 so the numeric order is the scale order.
    true = rng.choice([1, 2, 3], 80, p=[0.25, 0.5, 0.25])

    def jitter(col: np.ndarray, stay: float) -> np.ndarray:
        out = col.copy()
        move = rng.random(len(col)) > stay
        step = rng.choice([-1, 1], len(col))
        out[move] = np.clip(out[move] + step[move], 1, 3)
        return out

    raters = pd.DataFrame(
        {
            "rater_a": jitter(true, 0.72),
            "rater_b": jitter(true, 0.72),
            "rater_c": jitter(true, 0.68),
        }
    )

    # Weak concordance: four judges, six essays, almost no shared ranking.
    essays = rng.normal(0, 1, (4, 6)) + 0.15 * rng.normal(0, 1, 6)
    kendall = pd.DataFrame(essays.T, columns=["judge1", "judge2", "judge3", "judge4"])

    # Reliability items: one moderate factor plus unique noise.
    factor = rng.normal(0, 1, 120)
    items = {
        f"item{i}": np.round(0.65 * factor + rng.normal(0, 1, 120), 3) for i in range(1, 6)
    }
    items["item6"] = np.round(0.35 * factor + rng.normal(0, 1, 120), 3)
    scales = pd.DataFrame(items)

    # Weak 2x2 for odds, risk, and Fisher.
    exposed = rng.random(90) < 0.5
    case = rng.random(90) < np.where(exposed, 0.46, 0.40)
    weak2 = pd.DataFrame(
        {
            "exposed": np.where(exposed, "Yes", "No"),
            "case": np.where(case, "Yes", "No"),
        }
    )

    # McNemar: similar numbers of each discordant pair.
    pre_yes = rng.random(80) < 0.5
    draw = rng.random(80)
    post_yes = pre_yes.copy()
    post_yes = np.where(draw < 0.12, True, post_yes)
    post_yes = np.where((draw >= 0.12) & (draw < 0.25), False, post_yes)
    mcnemar = pd.DataFrame(
        {
            "before": np.where(pre_yes, "Yes", "No"),
            "after": np.where(post_yes, "Yes", "No"),
        }
    )

    q = pd.DataFrame(
        {
            "task1": (rng.random(50) < 0.50).astype(int),
            "task2": (rng.random(50) < 0.52).astype(int),
            "task3": (rng.random(50) < 0.48).astype(int),
        }
    )

    # Trend that is real, and a flat one.
    dose = np.array(["Low"] * 40 + ["Mid"] * 40 + ["High"] * 40)
    trend_p = np.array([0.30] * 40 + [0.48] * 40 + [0.62] * 40)
    flat_p = np.array([0.42] * 40 + [0.44] * 40 + [0.41] * 40)
    trend = pd.DataFrame(
        {
            "dose": dose,
            "response": np.where(rng.random(120) < trend_p, "Yes", "No"),
            "flat": np.where(rng.random(120) < flat_p, "Yes", "No"),
        }
    )

    # Two similar tutorial groups for KS, median, Moses, Hotelling.
    a = rng.normal(70, 8, 40)
    b = rng.normal(70.4, 8, 40)
    similar = pd.DataFrame(
        {
            "group": ["A"] * 40 + ["B"] * 40,
            "score": np.round(np.concatenate([a, b]), 1),
            "confidence": np.round(rng.normal(50, 8, 80), 1),
        }
    )
    similar_wide = pd.DataFrame(
        {
            "score_a": np.round(a, 1),
            "score_b": np.round(b, 1),
        }
    )

    # Classroom edges for network centrality.
    people = [f"s{i}" for i in range(1, 13)]
    edges = []
    for i, src in enumerate(people):
        for dst in people[i + 1 :]:
            if rng.random() < 0.28:
                edges.append((src, dst, int(rng.integers(1, 5))))
    network = pd.DataFrame(edges, columns=["source", "target", "weight"])

    # Binary indicators with two latent classes.
    klass = rng.random(160) < 0.45
    lca_cols = {}
    for i, (p0, gap) in enumerate([(0.25, 0.45), (0.30, 0.40), (0.20, 0.50), (0.35, 0.35)], start=1):
        p = np.where(klass, p0 + gap, p0)
        lca_cols[f"q{i}"] = (rng.random(160) < p).astype(int)
    lca = pd.DataFrame(lca_cols)
    normal = pd.DataFrame({"noise": rng.normal(0, 1, 120)})

    # Survival: 80 people, two arms, a weak arm gap and a moderate hours slope.
    n_s = 80
    arm = np.array(["Standard"] * 40 + ["New"] * 40)
    hours_s = rng.normal(5, 1.2, n_s).clip(1, 9)
    lp = 0.16 * (hours_s - 5) + np.where(arm == "Standard", 0.22, 0.0)
    duration = -np.log(rng.random(n_s)) * 12 / np.exp(lp)
    cens = rng.exponential(20, n_s)
    event = (duration <= cens).astype(int)
    duration = np.minimum(duration, cens)
    survival = pd.DataFrame(
        {
            "weeks": np.round(np.clip(duration, 0.1, None), 2),
            "event": event,
            "arm": arm,
            "hours": np.round(hours_s, 2),
        }
    )

    # Monthly series: mild trend, period-12 season, and a near-white noise column.
    t = np.arange(48)
    months = pd.date_range("2021-01-01", periods=48, freq="MS")
    sales = 40 + 0.18 * t + 3.5 * np.sin(2 * np.pi * t / 12) + rng.normal(0, 3.2, 48)
    series = pd.DataFrame(
        {
            "month": months,
            "sales": np.round(sales, 2),
            "noise": np.round(rng.normal(50, 4, 48), 2),
        }
    )

    # Strong-signal ML sample, drawn after survival/series so those pages stay fixed.
    # The exam cohort remains the overfitting tree page.
    n_ml = 240
    hours_ml = rng.normal(6.0, 1.6, n_ml).clip(0.5, 12)
    anxiety_ml = rng.normal(50, 10, n_ml).clip(20, 80)
    score_ml = np.round(np.clip(40 + 5.5 * hours_ml - 0.35 * anxiety_ml + rng.normal(0, 4.5, n_ml), 20, 100), 1)
    logit = -6.0 + 1.15 * hours_ml - 0.02 * anxiety_ml
    passed_ml = (rng.random(n_ml) < 1 / (1 + np.exp(-logit))).astype(int)
    blob = np.concatenate([np.zeros(n_ml // 2), np.ones(n_ml - n_ml // 2)])
    x_blob = np.where(blob == 0, rng.normal(-2.2, 0.45, n_ml), rng.normal(2.2, 0.45, n_ml))
    y_blob = np.where(blob == 0, rng.normal(-2.0, 0.45, n_ml), rng.normal(2.0, 0.45, n_ml))
    ml = pd.DataFrame(
        {
            "hours": np.round(hours_ml, 2),
            "anxiety": np.round(anxiety_ml, 1),
            "score": score_ml,
            "passed": passed_ml,
            "x": np.round(x_blob, 3),
            "y": np.round(y_blob, 3),
        }
    )

    return {
        "cohort": cohort,
        "paired": paired,
        "repeated": repeated,
        "mixed": mixed,
        "clinics": clinics,
        "raters": raters,
        "kendall": kendall,
        "scales": scales,
        "weak2": weak2,
        "mcnemar": mcnemar,
        "q": q,
        "trend": trend,
        "similar": similar,
        "similar_wide": similar_wide,
        "network": network,
        "lca": lca,
        "normal": normal,
        "survival": survival,
        "series": series,
        "ml": ml,
    }


def md_table(columns: list[str], rows: list[list[str]]) -> str:
    def cell(value: object) -> str:
        text = "" if value is None else str(value)
        return text.replace("|", "\\|").replace("\n", " ")

    header = [cell(c) if c else " " for c in columns]
    body = [[cell(c) for c in row] for row in rows]

    def numeric(col: int) -> bool:
        seen = False
        for row in body:
            if col >= len(row):
                continue
            raw = row[col].strip().lstrip("<>").lstrip("−-").replace("—", "")
            raw = raw.replace(",", "").replace("%", "")
            if raw in {"", "True", "False", "included"}:
                continue
            seen = True
            try:
                float(raw)
            except ValueError:
                return False
        return seen

    align = ["---:" if numeric(i) else "---" for i in range(len(header))]
    lines = [
        "| " + " | ".join(header) + " |",
        "| " + " | ".join(align) + " |",
    ]
    for row in body:
        padded = row + [""] * (len(header) - len(row))
        lines.append("| " + " | ".join(padded[: len(header)]) + " |")
    return "\n".join(lines)


class Example:
    def __init__(self, slug: str, report: dict, raw: dict):
        self.slug = slug
        self.report = report
        self.raw = raw
        self.summary = str(report.get("summary") or "")
        self.metrics = {m["label"]: str(m["value"]) for m in report.get("metrics") or []}
        self.tables = {
            t.get("id"): t
            for t in report.get("tables") or []
            if t.get("id") != "equivalent_syntax"
        }
        self.p_text = self._primary_p()
        self.significant = self._is_sig(self.p_text)

    def _primary_p(self) -> str | None:
        for label, value in self.metrics.items():
            lowered = label.lower()
            if "p-value" in lowered or lowered.startswith("p ") or lowered.startswith("p (") or lowered.endswith(" p") or lowered == "p":
                return value
        return None

    @staticmethod
    def _is_sig(p_text: str | None) -> bool | None:
        if p_text is None:
            return None
        text = p_text.strip().replace(" ", "")
        if text.startswith("<"):
            return True
        if text.startswith(">"):
            return False
        if text.startswith("."):
            text = "0" + text
        try:
            return float(text) < 0.05
        except ValueError:
            return None

    def metric(self, label: str, default: str = "") -> str:
        return self.metrics.get(label, default)

    def table(self, table_id: str, limit: int = 8) -> str:
        table = self.tables.get(table_id)
        if not table:
            return ""
        rows = table["rows"][:limit]
        return md_table(list(table["columns"]), rows)

    def first_tables(self, ids: list[str]) -> str:
        blocks = []
        for table_id in ids:
            rendered = self.table(table_id)
            if rendered:
                blocks.append(rendered)
        if not blocks:
            for table in self.tables.values():
                blocks.append(md_table(list(table["columns"]), table["rows"][:8]))
                if len(blocks) == 2:
                    break
        return "\n\n".join(blocks)


def run_one(key: str, frame: pd.DataFrame, body: dict) -> Example:
    import warnings

    from app.analyze_dispatch import run_analysis_raw
    from app.report_builder import build_report
    from app import stats_service

    with warnings.catch_warnings(record=True) as caught:
        warnings.simplefilter("always")
        if key == "moses_test":
            # Dispatch forwards confidence_level, which run_moses_test does not accept.
            raw = stats_service.run_moses_test(frame, body["group_column"], body["value_column"])
        elif key == "correspondence":
            # The Q-program path refuses to run without a stored dataset id.
            from app.techniques import correspondence_analysis

            raw = correspondence_analysis(
                frame, body["row_column"], body["column_column"], dataset_id="docs-example"
            )
        else:
            raw = run_analysis_raw(key, frame, body)
    for item in caught:
        if item.category.__name__ in {"PerfectSeparationWarning", "SingularMatrixWarning"}:
            print(f"WARN {key}: {item.category.__name__}: {item.message}")
    report = build_report(key, {**body, "apa_format": True, "decimal_places": 3}, frame, raw)
    return Example(key, report, raw)


def section(intro: str, tables: str, reading: str, apa: str, extra: str = "") -> str:
    parts = ["## Reading the output", "", intro.strip(), ""]
    if tables.strip():
        parts.extend([tables.strip(), ""])
    parts.extend([reading.strip(), "", "## Reporting (APA 7)", ""])
    if extra.strip():
        parts.extend([extra.strip(), ""])
    parts.extend([apa.strip(), ""])
    return "\n".join(parts)


def verdict(sig: bool | None, effect: str) -> str:
    if sig is True:
        return f"This is large enough, in this sample, to treat {effect} as a real association rather than noise."
    if sig is False:
        return (
            f"This is not large enough to treat {effect} as a reliable association. "
            "The result is non-significant: the data are still compatible with no effect."
        )
    return f"Read {effect} from the table rather than from a single p-value."


def jobs(frames: dict[str, pd.DataFrame]) -> list[tuple[str, str, pd.DataFrame, dict]]:
    c, p, r, m, cl = frames["cohort"], frames["paired"], frames["repeated"], frames["mixed"], frames["clinics"]
    return [
        ("descriptives", "descriptives", c, {"columns": ["score", "hours", "method"], "statistics": ["mean", "median", "std_dev", "range", "min", "max"]}),
        ("ttest-one-sample", "ttest_one_sample", c, {"value_column": "score", "hypothesized_mean": 71}),
        ("ttest-independent", "ttest_independent", c, {"group_column": "method", "value_column": "score", "group_values": ["Lecture", "Workshop"]}),
        ("ttest-paired", "ttest_paired", p, {"before_column": "before", "after_column": "after"}),
        ("anova-oneway", "anova_oneway", c, {"group_column": "method", "value_column": "score", "post_hoc": "tukey"}),
        ("anova-twoway", "anova_twoway", c, {"factor_a": "method", "factor_b": "time", "value_column": "score", "include_interaction": True, "post_hoc": "tukey"}),
        ("anova-threeway", "anova_threeway", c.assign(campus=np.where(np.arange(len(c)) % 2 == 0, "North", "South")), {"factor_a": "method", "factor_b": "time", "factor_c": "campus", "value_column": "score"}),
        ("anova-repeated", "anova_repeated", r, {"subject_column": "id", "measure_columns": ["week1", "week2", "week3"]}),
        ("anova-mixed", "anova_mixed", m, {"subject_column": "id", "between_factor": "group", "within_measures": ["pre", "post"]}),
        ("ancova", "ancova", c, {"group_column": "method", "outcome_column": "score", "covariate_column": "hours"}),
        ("manova", "manova", c, {"group_column": "method", "dependent_columns": ["score", "confidence"]}),
        ("hotelling-t2", "hotelling_t2", frames["similar"], {"group_column": "group", "dependent_columns": ["score", "confidence"], "group_values": ["A", "B"]}),
        ("correlation", "correlation", c, {"columns": ["hours", "anxiety", "score"], "flag_significant": False}),
        ("partial-correlation", "partial_correlation", c, {"column_x": "practice", "column_y": "score", "control_columns": ["hours"]}),
        ("linear-regression", "linear_regression", c, {"dependent": "score", "independents": ["hours", "anxiety"], "method": "enter"}),
        ("hierarchical-regression", "hierarchical_regression", c, {"dependent": "score", "blocks": [["hours"], ["anxiety"]]}),
        ("logistic-regression", "logistic_regression", c, {"dependent": "passed", "independents": ["hours"]}),
        ("probit-regression", "probit_regression", c, {"dependent": "passed", "independents": ["hours"]}),
        ("poisson-regression", "poisson_regression", c, {"dependent": "absences", "independents": ["anxiety"]}),
        ("negative-binomial-regression", "negative_binomial_regression", c, {"dependent": "visits", "independents": ["anxiety"]}),
        ("ordinal-regression", "ordinal_regression", c, {"dependent": "satisfaction", "independents": ["hours"]}),
        ("moderation-analysis", "moderation_analysis", c, {"outcome_column": "score", "predictor_column": "hours", "moderator_column": "practice"}),
        ("canonical-correlation", "canonical_correlation", c, {"set_a": ["score", "confidence"], "set_b": ["hours", "anxiety"]}),
        ("discriminant-analysis", "discriminant_analysis", c, {"group_column": "method", "feature_columns": ["score", "hours"]}),
        ("mann-whitney-u", "mann_whitney_u", c, {"group_column": "method", "value_column": "score", "group_values": ["Lecture", "Workshop"]}),
        ("kruskal-wallis", "kruskal_wallis", c, {"group_column": "method", "value_column": "score"}),
        ("wilcoxon-signed-rank", "wilcoxon_signed_rank", p, {"before_column": "before", "after_column": "after"}),
        ("sign-test", "sign_test", p, {"before_column": "before_ns", "after_column": "after_ns"}),
        ("friedman", "friedman", r, {"measure_columns": ["week1", "week2", "week3"]}),
        ("median-test", "median_test", frames["similar"], {"group_column": "group", "value_column": "score"}),
        ("jonckheere-terpstra", "jonckheere_terpstra", c, {"group_column": "method", "value_column": "score", "group_order": ["Workshop", "Lecture", "Online"]}),
        ("moses-test", "moses_test", frames["similar"], {"group_column": "group", "value_column": "score"}),
        ("runs-test", "runs_test", c, {"column": "score", "cutoff": "median"}),
        ("cochrans-q", "cochrans_q", frames["q"], {"measure_columns": ["task1", "task2", "task3"]}),
        ("kolmogorov-smirnov", "kolmogorov_smirnov", frames["similar_wide"], {"test_type": "two_sample", "column_a": "score_a", "column_b": "score_b"}),
        ("shapiro-wilk", "shapiro_wilk", frames["normal"], {"column": "noise"}),
        ("lilliefors-ks", "lilliefors_ks", frames["normal"], {"column": "noise"}),
        ("chi-square", "chi_square", c, {"column_a": "gender", "column_b": "hand"}),
        ("fishers-exact", "fishers_exact", frames["weak2"], {"column_a": "exposed", "column_b": "case"}),
        ("odds-ratio", "odds_ratio", frames["weak2"], {"column_a": "exposed", "column_b": "case"}),
        ("relative-risk", "relative_risk", frames["weak2"], {"column_a": "exposed", "column_b": "case"}),
        ("mcnemar", "mcnemar", frames["mcnemar"], {"column_a": "before", "column_b": "after"}),
        ("cohens-kappa", "cohens_kappa", frames["raters"], {"column_a": "rater_a", "column_b": "rater_b"}),
        ("weighted-kappa", "weighted_kappa", frames["raters"], {"column_a": "rater_a", "column_b": "rater_b", "weights": "linear"}),
        ("fleiss-kappa", "fleiss_kappa", frames["raters"], {"columns": ["rater_a", "rater_b", "rater_c"]}),
        ("kendalls-w", "kendalls_w", frames["kendall"], {"columns": ["judge1", "judge2", "judge3", "judge4"]}),
        ("goodman-kruskal-gamma", "goodman_kruskal_gamma", c, {"column_a": "method", "column_b": "satisfaction"}),
        ("somers-d", "somers_d", c, {"column_a": "method", "column_b": "satisfaction"}),
        ("goodman-kruskal-lambda", "goodman_kruskal_lambda", c, {"column_a": "method", "column_b": "satisfaction"}),
        ("mantel-haenszel", "mantel_haenszel", frames["trend"], {"group_column": "dose", "outcome_column": "flat"}),
        ("cochran-armitage", "cochran_armitage", frames["trend"], {"group_column": "dose", "outcome_column": "response"}),
        ("loglinear", "loglinear", c, {"columns": ["method", "time"], "model": "independence"}),
        ("correspondence", "correspondence", c, {"row_column": "method", "column_column": "satisfaction"}),
        ("cronbachs-alpha", "reliability_cronbach", frames["scales"], {"columns": ["item1", "item2", "item3", "item4", "item5"]}),
        ("pca", "pca", frames["scales"], {"columns": ["item1", "item2", "item3", "item4", "item5", "item6"], "n_components": 2}),
        ("efa", "efa", frames["scales"], {"columns": ["item1", "item2", "item3", "item4", "item5", "item6"], "n_factors": 1}),
        ("confirmatory-factor-analysis", "confirmatory_factor_analysis", frames["scales"], {"indicators": ["item1", "item2", "item3", "item4"], "model_spec": "Focus =~ item1 + item2 + item3 + item4"}),
        ("structural-equation-modelling", "structural_equation_modelling", frames["scales"].iloc[:96].reset_index(drop=True).assign(hours=c["hours"].to_numpy(), score=c["score"].to_numpy()), {"model_spec": "Focus =~ item1 + item2 + item3\nscore ~ Focus + hours", "columns": ["item1", "item2", "item3", "hours", "score"]}),
        ("multidimensional-scaling", "multidimensional_scaling", frames["scales"], {"columns": ["item1", "item2", "item3", "item4", "item5"], "n_components": 2}),
        ("latent-class-analysis", "latent_class_analysis", frames["lca"], {"indicators": ["q1", "q2", "q3", "q4"], "n_classes": 2}),
        ("network", "network", frames["network"], {"source": "source", "target": "target", "weight": "weight"}),
        ("mixed-model", "mixed_model", cl, {"outcome": "score", "fixed_effects": ["hours"], "group": "clinic", "reml": True}),
        ("linear-mixed-model", "linear_mixed_model", cl, {"dependent": "score", "fixed_effects": ["hours"], "group_column": "clinic"}),
        ("generalized-linear-mixed-model", "generalized_linear_mixed_model", cl, {"dependent": "passed", "fixed_effects": ["hours"], "group_column": "clinic", "family": "binomial"}),
        ("multilevel-modelling", "multilevel_modelling", cl, {"outcome_column": "score", "level1_predictors": ["hours"], "level2_group_column": "clinic"}),
        ("gee", "gee", cl, {"outcome": "passed", "independents": ["hours"], "group": "clinic"}),
        ("kaplan-meier", "kaplan_meier", frames["survival"], {"duration_column": "weeks", "event_column": "event", "group_column": "arm"}),
        ("cox-proportional-hazards", "cox_proportional_hazards", frames["survival"], {"duration_column": "weeks", "event_column": "event", "covariates": ["hours"]}),
        ("nelson-aalen", "nelson_aalen", frames["survival"], {"duration_column": "weeks", "event_column": "event"}),
        ("arima-sarima", "arima_sarima", frames["series"], {"target_column": "sales", "date_column": "month", "seasonal_period": 12, "forecast_steps": 12}),
        ("exponential-smoothing", "exponential_smoothing", frames["series"], {"target_column": "sales", "date_column": "month", "seasonal_period": 12, "forecast_steps": 12}),
        ("stl-decomposition", "stl_decomposition", frames["series"], {"target_column": "sales", "date_column": "month", "period": 12}),
        ("stationarity-tests", "stationarity_tests", frames["series"], {"target_column": "sales", "date_column": "month"}),
        ("autocorrelation", "autocorrelation", frames["series"], {"target_column": "noise", "date_column": "month", "max_lags": 20}),
        ("cluster-analysis", "cluster_analysis", frames["ml"], {"columns": ["x", "y"], "method": "kmeans", "n_clusters": 2}),
        ("decision-tree", "decision_tree", c, {"dependent": "passed", "independents": ["hours", "anxiety"], "max_depth": None, "min_samples_leaf": 1}),
        ("random-forest-classification", "random_forest_classification", frames["ml"], {"dependent": "passed", "independents": ["hours", "anxiety"]}),
        ("random-forest-regression", "random_forest_regression", frames["ml"], {"dependent": "score", "independents": ["hours", "anxiety"]}),
        ("svm-classification", "svm_classification", frames["ml"], {"dependent": "passed", "independents": ["hours", "anxiety"]}),
        ("gradient-boosting", "gradient_boosting", frames["ml"], {"dependent": "passed", "independents": ["hours", "anxiety"], "mode": "classification"}),
        ("neural-network-mlp", "neural_network_mlp", frames["ml"], {"dependent": "passed", "independents": ["hours", "anxiety"], "mode": "classification"}),
        ("dbscan", "dbscan", frames["ml"], {"columns": ["x", "y"], "epsilon": 0.8, "min_samples": 5}),
    ]


INTRO = {
    "descriptives": "Ninety-six students. `score` is the exam, `hours` is time studied, and `method` is lecture, online, or workshop. The request asks for the mean, median, standard deviation, range, minimum, and maximum.",
    "ttest-one-sample": "The same 96 exam scores, tested against a department target of 71. The class was built to land near that target, so a difference of a point or two is the result to read.",
    "ttest-independent": "Lecture versus workshop on the exam. Online is left out so this is a two-group comparison. The workshop mean was built to sit a few points higher, with plenty of overlap.",
    "ttest-paired": "Forty-eight people measured before and after a short course. The typical gain is a few points, and some people go the other way.",
    "anova-oneway": "The same 96 students, 32 in each teaching method. Tukey compares the pairs. The method gap was built to be a few exam points against a within-group spread of about 8 points.",
    "anova-twoway": "Teaching method and morning versus afternoon, on the same exam. Method was built to matter. Time of day was not, and the two were not built to interact.",
    "anova-threeway": "Method, time of day, and a north/south campus label on the same exam. Only method was built to move the scores.",
    "anova-repeated": "Thirty-six people across three weeks. Later weeks were built a little higher, with enough noise that the weeks still overlap.",
    "anova-mixed": "Twenty-four people in control and 24 in treatment, each with a pre and a post score. Treatment was built to gain a bit more than control. The gains overlap.",
    "ancova": "Teaching method on the exam, with study hours as the covariate. Hours and method both have a moderate link to the score.",
    "manova": "Teaching method on two outcomes at once: exam score and a confidence rating. Both shift a little with method.",
    "hotelling-t2": "Two tutorial groups drawn from the same marking scheme, on score and confidence. The groups were not built to differ.",
    "correlation": "Hours, anxiety, and exam score for the 96 students. Flag significant is off, so the coefficients are printed without stars. Hours was built to rise with score. Anxiety was built to fall with it. Neither link is tight.",
    "partial-correlation": "Practice quizzes and exam score, holding study hours constant. Practice was drawn independently of the exam, so any leftover correlation is noise.",
    "linear-regression": "Exam score predicted from hours and anxiety. Both slopes were built to be moderate. A noise column, practice, is not in this model.",
    "hierarchical-regression": "Hours go in first. Anxiety is added in a second block. Each block was built to add a slice of R², not to swallow the outcome.",
    "logistic-regression": "Whether the student passed, predicted from study hours. The pass rate sits near the middle, and hours shifts it rather than separating the two groups.",
    "probit-regression": "The same pass/fail outcome and the same hours predictor, fit as a probit instead of a logit.",
    "poisson-regression": "Absence counts generated as Poisson, with anxiety raising the mean a little. These counts are not the over-dispersed visit counts.",
    "negative-binomial-regression": "Visit counts with extra-Poisson scatter, predicted from anxiety. Dispersion was built in, so α should be estimated rather than collapsing to zero.",
    "ordinal-regression": "A 1–4 satisfaction rating predicted from study hours. Higher hours were built to push people up the scale, with a lot of overlap between adjacent ratings.",
    "moderation-analysis": "Hours predicting exam score, with practice quizzes as the moderator. Practice was built with no link to the slope, so the interaction is the result to read.",
    "canonical-correlation": "One set is exam score and confidence. The other is hours and anxiety. The sets share a moderate link and a lot of leftover variance.",
    "discriminant-analysis": "Teaching method predicted from exam score and study hours. The groups overlap, so classification should be better than chance and well short of perfect.",
    "mann-whitney-u": "Lecture versus workshop ranks on the exam. The workshop scores tend to sit higher, and the two lists still overlap, so U is not zero.",
    "kruskal-wallis": "The three teaching methods, compared on ranks. The same moderate mean gap as the ANOVA, read without assuming a normal curve.",
    "wilcoxon-signed-rank": "The before and after course scores. Most people gain, some lose a little, so the signed-rank statistic is not zero.",
    "sign-test": "A second set of 48 pairs whose true change is about zero. The sign test only counts who went up and who went down.",
    "friedman": "The three weekly scores. The later weeks tend to rank higher, without a person-by-person lockstep.",
    "median-test": "Two tutorial groups drawn from the same distribution, compared on how many sit above the combined median.",
    "jonckheere-terpstra": "The teaching methods ordered Workshop, then Lecture, then Online. That is not the order of the exam means, so a monotone trend in this order is not expected.",
    "moses-test": "The same two similar tutorial groups, asking whether one group has more extreme scores than the other.",
    "runs-test": "The 96 exam scores in row order, split at the median. The row order is not a time order, so runs above and below the median should look mixed.",
    "cochrans-q": "Fifty people, three tasks, each scored pass or fail. The pass rates were built to be nearly the same.",
    "kolmogorov-smirnov": "Two tutorial groups of 40, each drawn from a normal curve near 70 with the same spread. The columns are the two groups.",
    "shapiro-wilk": "A column of 120 standard-normal draws, separate from the exam scores. The exam scores are a mixture of three teaching groups, so they are the wrong column for a clean normality check.",
    "lilliefors-ks": "The same 120 standard-normal draws. Lilliefors estimates the mean and variance from the sample.",
    "chi-square": "Gender and writing hand in the class. The two were drawn independently.",
    "fishers-exact": "A 2×2 of exposure and case status. The case rate was built only a little higher in the exposed row, on 90 people.",
    "odds-ratio": "The same weak 2×2. The odds ratio should sit near 1, and the interval should be read before the point estimate.",
    "relative-risk": "The same weak 2×2, as a ratio of risks rather than odds.",
    "mcnemar": "Eighty people classified yes or no before and after. Discordant pairs were built in both directions in similar numbers.",
    "cohens-kappa": "Two raters, 80 essays, categories 1, 2, and 3. Each rater keeps the true category most of the time and slips to a neighbour otherwise.",
    "weighted-kappa": "The same two raters. Linear weights give partial credit for a one-step miss. Categories are numeric, so sort order matches the scale.",
    "fleiss-kappa": "Three raters on the same 80 essays. Agreement beyond chance should be moderate, not perfect.",
    "kendalls-w": "Four judges scoring six essays, with almost no shared ranking. Concordance was built to be weak.",
    "goodman-kruskal-gamma": "Teaching method against the 1–4 satisfaction rating. Method and satisfaction share a mild ordinal association through the exam.",
    "somers-d": "The same method-by-satisfaction table, as an asymmetric ordinal association.",
    "goodman-kruskal-lambda": "How much knowing the teaching method reduces errors in predicting the satisfaction rating.",
    "mantel-haenszel": "Low, mid, and high dose against a response that was built flat across dose.",
    "cochran-armitage": "The same dose groups against a response that rises from low to high.",
    "loglinear": "Teaching method and time of day. The independence model. Time was balanced inside each method, so the two factors were not built to be associated.",
    "correspondence": "Teaching method by satisfaction rating. The association is mild, so the map should not collapse onto a single perfect diagonal.",
    "cronbachs-alpha": "Five items built from one common factor plus unique noise. The common part is moderate, so alpha should land in the .70s rather than the .90s.",
    "pca": "Six items from that same scale. The first component should take a clear share and leave a real second component.",
    "efa": "One factor extracted from the six items. Loadings should be moderate, and the sixth item was built weaker than the first five.",
    "confirmatory-factor-analysis": "A one-factor model, Focus, measured by item1 to item4. Those four items share a moderate factor.",
    "structural-equation-modelling": "Focus measured by item1 to item3, then exam score predicted from Focus and study hours, on 96 people.",
    "multidimensional-scaling": "Five scale items placed in two dimensions from their distances. Items that share the factor should sit nearer each other than a pure noise pair would.",
    "latent-class-analysis": "Four yes/no items scored 1 and 0, and two latent classes. One class was built to endorse the items more often. Membership is probabilistic, not a clean split.",
    "network": "A 12-person class. An edge is a study link, kept when a seeded draw fell under 0.28, with a weight from 1 to 4. Centrality is descriptive.",
    "mixed-model": "Twelve clinics, ten students each. Clinic shifts the intercept. Hours has a moderate slope. The model reports a null-model ICC, z, and a confidence interval.",
    "linear-mixed-model": "The same clinics and the same hours slope, fit as a linear mixed model with REML and a random intercept.",
    "generalized-linear-mixed-model": "The same clinics, with a pass/fail outcome and a moderate hours slope, binomial family.",
    "multilevel-modelling": "The same linear mixed model, reported with the intraclass correlation and the split of variance between clinic and residual.",
    "gee": "The clustered pass/fail outcome, population-average, exchangeable correlation within clinic.",
    "kaplan-meier": "Eighty people, 40 on standard care and 40 on a new arm. Time is weeks until the event. The new arm was built with a slightly lower hazard, and about a third of the rows are censored. The log-rank is the two-group comparison.",
    "cox-proportional-hazards": "The same 80 people. Hours is a numeric covariate with a moderate link to the hazard. Arm is not in this model.",
    "nelson-aalen": "The same 80 durations and events, as a cumulative hazard rather than a survival curve. There is no grouping column on this procedure.",
    "arima-sarima": "Forty-eight months of sales. A mild upward trend and a 12-month wiggle, with noise of about three units. Seasonal period is 12, so the search includes a seasonal order, 12 steps ahead.",
    "exponential-smoothing": "The same 48 months of sales. Holt–Winters with period 12 and an additive trend. The series is long enough for additive season.",
    "stl-decomposition": "The same 48 months, split into trend, season, and residual with period 12. There is no forecast table.",
    "stationarity-tests": "The same sales series, which was built with a drift and a seasonal wiggle, not as white noise. ADF’s null is a unit root. KPSS’s null is level stationarity.",
    "autocorrelation": "The noise column on those 48 months, drawn as independent N(50, 4) values. Lag structure here is leftover chance, not the sales season.",
    "cluster-analysis": "Two numeric columns built as two well-separated blobs, 240 rows, k-means with k = 2, standardised. Silhouette should be high.",
    "decision-tree": "The 96-student exam cohort, pass or fail from hours and anxiety, 25% holdout. max_depth is set to None and min_samples_leaf to 1 so the tree is unrestricted; the dialog defaults are 5 and 5. Hours only shifts the pass rate a little, so this page is the overfitting example: train accuracy near 1 and test accuracy near chance.",
    "random-forest-classification": "A separate 240-row sample where hours strongly shifts the pass rate. 100 trees, min_samples_leaf 5, no depth cap, 25% holdout. Test accuracy should sit clearly above chance.",
    "random-forest-regression": "Exam score from hours and anxiety on that same 240-row sample. 100 trees, min_samples_leaf 5, no depth cap. Both slopes were built steep, so holdout R² should be positive.",
    "svm-classification": "The same strong pass/fail sample and the same two features. Kernel and C are not user controls.",
    "gradient-boosting": "The same strong pass/fail sample, classification mode, 100 stages, 25% holdout.",
    "neural-network-mlp": "The same strong pass/fail sample, classification mode, hidden layers 64 and 32, 25% holdout.",
    "dbscan": "The two blobs, ε = 0.8, min_samples = 5, standardised. Dense cores should appear, with a modest noise share.",
}


def apa_line(ex: Example, sig: bool | None, p: str) -> str:
    lead = ""
    if ex.summary and ex.summary not in {"Analysis complete.", ""} and "session" not in ex.summary:
        lead = ex.summary.strip()
    if sig is False:
        tail = f"This result is not significant (p = {p}). Report the estimate with that p, and do not describe the pattern as a reliable effect."
    elif sig is True:
        tail = f"This result is significant (p = {p}). The effect is moderate, so report its size with the p-value."
    else:
        tail = "Report the estimate in the table. This procedure is not summarised by one p-value."
    return f"{lead} {tail}".strip()


def render(slug: str, ex: Example, stepwise: Example | None = None) -> str:
    intro = INTRO[slug]
    p = ex.p_text or "not reported as a single p-value"
    sig = ex.significant
    if slug in NS_SLUGS and sig is True:
        raise SystemExit(f"{slug} was intended non-significant but p = {p}")
    tables = ex.first_tables([])
    extra = ""
    if slug == "linear-regression" and stepwise is not None:
        step_p = stepwise.table("stepwise_selection")
        extra = (
            "## Stepwise regression\n\n"
            "The same scores with method set to stepwise. Hours and anxiety are the two candidates.\n\n"
            f"{step_p}\n\n"
            f"{stepwise.summary}"
        )
    if slug == "anova-twoway":
        rows = {row[0]: row for row in ex.tables["anova2"]["rows"]}
        reading = (
            f"Method is associated with the exam, F = {rows['method'][3]}, p = {rows['method'][4]}. "
            f"Time of day is not, F = {rows['time'][3]}, p = {rows['time'][4]}. "
            f"The method × time interaction is not either, F = {rows['method × time'][3]}, p = {rows['method × time'][4]}. "
            "Tukey then compares teaching methods. Only some pairs clear .05, which is what a moderate gap looks like when the groups overlap."
        )
        apa = (
            f"A two-way ANOVA on exam score (N = 96) found a method effect, F = {rows['method'][3]}, p = {rows['method'][4]}, "
            f"no time-of-day effect, F = {rows['time'][3]}, p = {rows['time'][4]}, "
            f"and no method × time interaction, F = {rows['method × time'][3]}, p = {rows['method × time'][4]}."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "anova-mixed":
        between = ex.tables["mixed_Bet"]["rows"][0]
        within = {row[0]: row for row in ex.tables["mixed_Wit"]["rows"]}
        reading = (
            f"The group main effect is not significant, F = {between[4]}, p = {between[5]}. "
            f"Scores change from pre to post, F = {within['condition'][3]}, p = {within['condition'][4]}. "
            f"The extra treatment gain, the group × condition interaction, is not significant, "
            f"F = {within['group × condition'][3]}, p = {within['group × condition'][4]}."
        )
        apa = (
            f"A mixed ANOVA (n = 24 per group) found no group effect, F = {between[4]}, p = {between[5]}, "
            f"a pre-to-post change, F = {within['condition'][3]}, p = {within['condition'][4]}, "
            f"and no group × condition interaction, F = {within['group × condition'][3]}, p = {within['group × condition'][4]}."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "loglinear":
        cells = ex.table("loglinear_cells")
        gof = ex.metric("GOF p")
        reading = (
            f"Every teaching method × time cell has the same count, and the independence model expects that same count. "
            f"Goodness-of-fit p = {gof}. Method and time of day are not associated. "
            "The coefficient rows for this balanced table are numerical zeros, so use the cell table and the fit p."
        )
        apa = (
            f"An independence loglinear model fit the method × time table, p = {gof}, N = 96. "
            "Teaching method and time of day were not associated."
        )
        return section(intro, cells, reading, apa, extra)
    if slug == "cox-proportional-hazards":
        row = ex.tables["cox_coef"]["rows"][0]
        c_index = ex.metric("Concordance index")
        n_ev = ex.metric("Events")
        n_obs = ex.metric("Observations")
        reading = (
            f"Hours is the only covariate. Coef = {row[1]}, hazard ratio = {row[2]}, p = {row[3]}. "
            f"Concordance = {c_index} on {n_obs} people and {n_ev} events. "
            "The slope is moderate. Concordance still sits near chance, so hours sorts the times only a little."
        )
        apa = (
            f"A Cox model of weeks on hours (N = {n_obs}, {n_ev} events) gave a hazard ratio of {row[2]} "
            f"per hour, p = {row[3]}, concordance = {c_index}."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "nelson-aalen":
        n_obs = ex.metric("Observations")
        n_ev = ex.metric("Events")
        reading = (
            f"The report is the count of rows and events, not a p-value. "
            f"N = {n_obs}, events = {n_ev}. The cumulative hazard chart is a step function of those events over weeks."
        )
        apa = (
            f"Nelson–Aalen cumulative hazard for weeks, N = {n_obs}, {n_ev} events. "
            "Report the curve and the event count; this estimator has no single p-value."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "arima-sarima":
        order = ex.metric("Order (p,d,q)")
        seasonal = ex.metric("Seasonal order")
        aic = ex.metric("AIC")
        aicc = ex.metric("AICc")
        n_obs = ex.metric("Observations")
        season_bit = f", seasonal order {seasonal}" if seasonal else ""
        aicc_bit = f", AICc = {aicc}" if aicc else ""
        reading = (
            f"Selected order {order}{season_bit}, AIC = {aic}{aicc_bit}, N = {n_obs}. "
            "d and D are chosen from unit-root tests first; AICc is compared only among models with those orders. "
            "The table is the 12-step forecast with a 95% interval from the fitted model. "
            "Seasonal period is 12, so this is a SARIMA search."
        )
        apa = (
            f"An automatic SARIMA{order}{'' if not seasonal else season_bit} forecast of monthly sales, "
            f"N = {n_obs}, AIC = {aic}{aicc_bit}. "
            "Report the selected order and the forecast interval, not a p-value."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "exponential-smoothing":
        period = ex.metric("Seasonal period")
        sse = ex.metric("SSE")
        n_obs = ex.metric("Observations")
        reading = (
            f"Period = {period}, SSE = {sse}, N = {n_obs}. "
            "The interval is residual SD × 1.96, so a wide band means the fit left a lot of leftover scatter, not a model-based prediction interval."
        )
        apa = (
            f"Holt–Winters exponential smoothing of monthly sales, N = {n_obs}, period = {period}. "
            "Report the forecast and the approximate interval."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "stl-decomposition":
        period = ex.metric("Period")
        n_obs = ex.metric("Observations")
        reading = (
            f"Period = {period}, N = {n_obs}. "
            "There is no component table. The three charts are the trend, the seasonal wiggle, and the residual."
        )
        apa = (
            f"STL decomposition of monthly sales, N = {n_obs}, period = {period}. "
            "Describe the charts; this procedure has no p-value."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "stationarity-tests":
        adf_p = ex.metric("ADF p-value")
        kpss_p = ex.metric("KPSS p-value")
        reading = (
            f"ADF {adf_p} (null: unit root). KPSS {kpss_p} (null: level stationarity). "
            "Neither test rejects its null on this short, mildly drifting series, so the pair is inconclusive."
        )
        apa = (
            f"ADF {adf_p}, KPSS {kpss_p} on 48 months of sales. "
            "Report both tests; they do not share a null."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "autocorrelation":
        lb = ex.tables.get("ljung_box")
        lb_line = ""
        if lb and lb.get("rows"):
            row10 = lb["rows"][0]
            lb_line = f" Ljung–Box at lag {row10[0]}: Q = {row10[1]}, {row10[2]}."
        reading = (
            "ACF and PACF on independent draws should sit inside the 95% bands at most lags."
            + lb_line
        )
        apa = (
            f"ACF and PACF of the noise series, N = {ex.metric('Observations')}, max lags = {ex.metric('Max lags')}."
            + (f" Ljung–Box {lb['rows'][0][2]} at lag {lb['rows'][0][0]}." if lb and lb.get("rows") else "")
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "cluster-analysis":
        sil = ex.metric("Silhouette score")
        method = ex.metric("Method")
        k = ex.metric("Clusters")
        reading = (
            f"{method}, k = {k}, silhouette = {sil}. "
            "The two columns were built as separate blobs, so a high silhouette is the expected reading."
        )
        apa = (
            f"K-means clustering of x and y into {k} groups, n = {ex.metric('Cases')}, "
            f"silhouette = {sil}."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "dbscan":
        k = ex.metric("Clusters")
        noise = ex.metric("Noise points")
        noise_pct = ex.metric("Noise %")
        reading = (
            f"{k} dense cluster(s), {noise} noise points ({noise_pct}). "
            "ε = 0.8 on two well-separated blobs after standardising should recover the cores and leave a modest noise share."
        )
        apa = (
            f"DBSCAN on x and y, ε = {ex.metric('ε')}, min_samples = {ex.metric('min_samples')}, "
            f"{k} cluster(s), {noise} noise points."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "decision-tree":
        test_acc = ex.metric("Test accuracy")
        train_acc = ex.metric("Train accuracy")
        n_obs = ex.metric("Observations")
        reading = (
            f"Train accuracy = {train_acc}, test accuracy = {test_acc}, n = {n_obs}. "
            "This page is the overfitting example on purpose. max_depth is set to None "
            "and min_samples_leaf to 1 (the dialog defaults are 5 and 5), hours only shifts "
            "the pass rate a little, and 72 training rows are enough to memorise the sample. "
            "A large train–test gap, with test accuracy near 0.5, is the reading."
        )
        apa = (
            f"Holdout classification of `passed` from hours and anxiety, n = {n_obs}. "
            f"Test accuracy = {test_acc}, train accuracy = {train_acc}. "
            "With max_depth set to None and min_samples_leaf to 1, the unpruned tree overfits this weak exam-cohort signal."
        )
        return section(intro, tables, reading, apa, extra)
    if slug in {
        "random-forest-classification",
        "svm-classification",
        "gradient-boosting",
        "neural-network-mlp",
    }:
        test_acc = ex.metric("Test accuracy")
        train_acc = ex.metric("Train accuracy")
        n_obs = ex.metric("Observations")
        reading = (
            f"Train accuracy = {train_acc}, test accuracy = {test_acc}, n = {n_obs}. "
            "Hours was built to move the pass rate strongly, so holdout accuracy should sit clearly above chance."
        )
        if slug == "random-forest-classification":
            leaf = ex.metric("min_samples_leaf")
            trees = ex.metric("n_estimators") or ex.metric("Trees")
            extra_h = []
            if trees:
                extra_h.append(f"trees = {trees}")
            if leaf:
                extra_h.append(f"min_samples_leaf = {leaf}")
            if extra_h:
                reading = (
                    f"Train accuracy = {train_acc}, test accuracy = {test_acc}, n = {n_obs}, "
                    + ", ".join(extra_h)
                    + ". Hours was built to move the pass rate strongly, so holdout accuracy should sit clearly above chance."
                )
        apa = (
            f"Holdout classification of `passed` from hours and anxiety, n = {n_obs}. "
            f"Test accuracy = {test_acc}, train accuracy = {train_acc}."
        )
        return section(intro, tables, reading, apa, extra)
    if slug == "random-forest-regression":
        r2 = ex.metric("R²")
        rmse = ex.metric("RMSE")
        n_obs = ex.metric("Observations")
        leaf = ex.metric("min_samples_leaf")
        leaf_bit = f", min_samples_leaf = {leaf}" if leaf else ""
        reading = (
            f"Holdout R² = {r2}, RMSE = {rmse}, n = {n_obs}{leaf_bit}. "
            "Hours and anxiety were built with steep slopes, so a positive holdout R² is the expected reading."
        )
        apa = (
            f"Random forest regression of exam score on hours and anxiety, n = {n_obs}, "
            f"holdout R² = {r2}, RMSE = {rmse}."
        )
        return section(intro, tables, reading, apa, extra)
    if slug in NS_SLUGS and sig is False:
        reading = (
            f"The primary result is not significant (p = {p}). "
            + verdict(False, "the comparison this page is about")
        )
        apa = apa_line(ex, False, p)
    elif sig is True:
        reading = f"The primary result is significant (p = {p}). " + verdict(True, "the comparison this page is about")
        apa = apa_line(ex, True, p)
    else:
        reading = ex.summary or "The report does not reduce this procedure to one p-value. Read the fit table."
        apa = apa_line(ex, None, p)

    if ex.summary and "session" not in ex.summary and ex.summary not in {"Analysis complete.", ""}:
        reading = ex.summary + " " + reading

    if ex.metrics:
        shown = list(ex.metrics.items())[:6]
        reading = reading + " Metrics: " + "; ".join(f"{label} = {value}" for label, value in shown) + "."
    return section(intro, tables, reading, apa, extra)


def _metric_float(ex: Example, label: str) -> float | None:
    text = ex.metric(label).strip().replace("%", "").replace(",", "")
    if not text or text == "—":
        return None
    if text.startswith("."):
        text = "0" + text
    try:
        return float(text)
    except ValueError:
        return None


def check_extremes(results: dict[str, Example]) -> list[str]:
    problems = []
    mw = results.get("mann-whitney-u")
    if mw and mw.metric("U statistic") in {"0", "0.000"}:
        problems.append("Mann–Whitney U is 0")
    wx = results.get("wilcoxon-signed-rank")
    if wx and wx.metric("W statistic") in {"0", "0.000"}:
        problems.append("Wilcoxon W is 0")
    corr = results.get("correlation")
    if corr:
        table = corr.tables.get("correlation")
        if table:
            for row in table["rows"]:
                for cell in row[1:]:
                    try:
                        if abs(float(cell)) > 0.85 and abs(float(cell)) < 0.999:
                            problems.append(f"correlation cell {cell} is extreme")
                    except (TypeError, ValueError):
                        continue
    tree = results.get("decision-tree")
    if tree:
        test_acc = _metric_float(tree, "Test accuracy")
        train_acc = _metric_float(tree, "Train accuracy")
        if train_acc is not None and train_acc < 0.9:
            problems.append(f"decision-tree train accuracy {train_acc} is not an overfit")
        if test_acc is not None and test_acc > 0.7:
            problems.append(f"decision-tree test accuracy {test_acc} is too high for the overfitting page")
    for slug in (
        "random-forest-classification",
        "svm-classification",
        "gradient-boosting",
        "neural-network-mlp",
    ):
        ex = results.get(slug)
        if not ex:
            continue
        test_acc = _metric_float(ex, "Test accuracy")
        if test_acc is None or test_acc < 0.65:
            problems.append(f"{slug} test accuracy {test_acc} is not clearly above chance")
    rf = results.get("random-forest-regression")
    if rf:
        r2 = _metric_float(rf, "R²")
        if r2 is None or r2 <= 0:
            problems.append(f"random-forest-regression holdout R² {r2} is not positive")
    return problems


def main() -> None:
    sys.path.insert(0, "/Users/ollie.darby/repos/tensr-worktrees/tensr-api-main")
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true")
    parser.add_argument(
        "--only",
        default="",
        help="Comma-separated slugs. Empty runs every page.",
    )
    args = parser.parse_args()
    only = {s.strip() for s in args.only.split(",") if s.strip()}
    rng = np.random.default_rng(SEED)
    frames = build_frames(rng)
    results: dict[str, Example] = {}
    failures: list[str] = []
    job_list = jobs(frames)
    if only:
        known = {j[0] for j in job_list}
        missing = only - known
        if missing:
            raise SystemExit(f"unknown slugs: {sorted(missing)}")
        job_list = [j for j in job_list if j[0] in only]
    for slug, key, frame, body in job_list:
        try:
            results[slug] = run_one(key, frame, body)
            results[slug].slug = slug
            if slug == "moderation-analysis":
                results[slug].p_text = results[slug].metrics.get("p (interaction)")
                results[slug].significant = Example._is_sig(results[slug].p_text)
            if slug in {"logistic-regression", "probit-regression"}:
                table_id = "logit_coef" if slug == "logistic-regression" else "probit_coef"
                table = results[slug].tables.get(table_id)
                if table:
                    slope = table["rows"][-1]
                    results[slug].p_text = str(slope[-1])
                    results[slug].significant = Example._is_sig(results[slug].p_text)
        except Exception as exc:  # noqa: BLE001 — surface every failed example before writing
            failures.append(f"{slug}: {type(exc).__name__}: {exc}")

    stepwise = None
    if not only or "linear-regression" in only:
        try:
            stepwise = run_one(
                "linear_regression",
                frames["cohort"],
                {"dependent": "score", "independents": ["hours", "anxiety"], "method": "stepwise"},
            )
        except Exception as exc:  # noqa: BLE001
            failures.append(f"stepwise: {type(exc).__name__}: {exc}")

    ns_hit = [slug for slug, ex in results.items() if slug in NS_SLUGS and ex.significant is False]
    ns_miss = [slug for slug in NS_SLUGS if slug not in ns_hit]
    print(f"ran {len(results)}  failed {len(failures)}  non-significant {len(ns_hit)} / {len(NS_SLUGS)}")
    for slug in sorted(ns_hit):
        print(f"  ns  {slug:32} p={results[slug].p_text}")
    for slug in sorted(set(results) - set(ns_hit)):
        ex = results[slug]
        print(f"  ..  {slug:32} p={ex.p_text} sig={ex.significant}")
    if not only:
        for slug in ns_miss:
            if slug not in results:
                print("MISSING RUN", slug)
                continue
            ex = results[slug]
            print("UNCLASSIFIED", slug, "metrics", ex.metrics, "summary", ex.summary[:240])
    for line in failures:
        print("FAIL", line)
    for line in check_extremes(results):
        print("EXTREME", line)

    if failures or check_extremes(results):
        print("ns missing", ns_miss)
        sys.exit(1)
    if not only:
        if ns_miss:
            print("ns missing", ns_miss)
            sys.exit(1)
        if len(ns_hit) * 4 < len(results):
            print("fewer than a quarter of pages are non-significant", len(ns_hit), len(results))
            sys.exit(1)
    if not args.write:
        return

    for slug, ex in results.items():
        path = PAGES / f"{slug}.mdx"
        text = path.read_text()
        start = text.index("## Reading the output")
        end = text.index("## Coming from SPSS")
        between = text[start:end]
        extras = ""
        marker = "\n## "
        idx = between.find(marker, 1)
        while idx != -1:
            heading = between[idx + 1 :].split("\n", 1)[0]
            if heading not in {"## Reading the output", "## Reporting (APA 7)"}:
                extras = between[idx + 1 :].rstrip() + "\n\n"
                break
            idx = between.find(marker, idx + 1)
        rendered = render(slug, ex, stepwise if slug == "linear-regression" else None)
        if "{" in rendered.split("## Reading the output", 1)[-1]:
            raise SystemExit(f"curly brace in {slug}")
        path.write_text(text[:start] + rendered + "\n" + extras + text[end:])
        print("wrote", slug)


if __name__ == "__main__":
    main()
