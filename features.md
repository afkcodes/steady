# Running app: feature and metrics spec (science-backed)

*Companion to `research.md`, which covers competitors and device connections. Written 28 Oct 2026. Every metric has an evidence grade, and every claim links to its source at the bottom. Where I couldn't confirm a primary paper, I say so.*

---

## 0. What "better than every running app" means

Today's apps each do one part well. Couch to 5K starts beginners well. Runna writes good plans. Garmin has deep metrics. TrainingPeaks covers load modelling. Strava covers social. **None of them is better at all of it, and none of them explains its numbers.** Garmin will tell you "Training Readiness 34" or "VO2max 52" with no range, no reason and no suggested action.

This app should be built on five principles. They are the product, more than any single feature:

1. **One coach from first run to marathon.** One model of the runner, from the first 60-second run/walk to a marathon block. A beginner never has to switch apps to improve, and an experienced runner can skip straight to their level (§1).
2. **Every number explains itself.** Every metric answers four questions: *what is it, is it good for me, what should I do, and how sure are we* (§4).
3. **Numbers are graded by evidence.** The app only makes decisions using metrics with good evidence. Weak-evidence metrics are shown as information and never drive the plan. Some popular metrics are left out on purpose (§5).
4. **It works without sensors first.** Time and "how did it feel?" work with only a phone. Heart rate, power, HRV and the rest add accuracy as the runner adds gear; they're never required.
5. **The plan fits around life.** Missed runs, illness, heat, a bad night's sleep: the plan changes and says exactly what changed and why.

---

## 1. The runner ladder (the core feature)

Five stages. Each has a goal, a set of metrics it unlocks, and a **graduation check**. New metrics appear only when they become useful, so beginners never face a dashboard of jargon. Experienced runners are placed at the right stage when they join, from imported history or a recent race time.

| Stage | Who | Goal | What unlocks | Graduates when… |
|---|---|---|---|---|
| **1. Start** | Never run / returning after years | Run 30 min non-stop at an easy, chatty effort | Minutes run, runs this week, longest non-stop run, "how did it feel?" | 30 min non-stop, twice, rated easy-to-moderate |
| **2. Build** | Can run 30 min | Run 3–4 times a week for 8 weeks; a 5K (parkrun-friendly) | Pace; heart-rate zones (if there's a heart-rate source); **long-run spike guard** shown; **easy-pace check**; 2×/week strength | 8 of the last 10 weeks consistent, plus a 5K time |
| **3. Develop** | Consistent 5K runner | 10K → half marathon; first faster sessions (strides, tempo) | **Critical speed** and race predictor; pace zones; training load (fitness/fatigue/form); intensity split; shoe tracking | Half-marathon-length long runs done without spikes; critical speed is stable |
| **4. Perform** | Half/marathon runner | Race-specific blocks, a target time | **Durability**; HRV readiness; hill-adjusted and heat-adjusted pace; **fuelling plan and gut training**; automatic taper; race-day pacing plan | Chooses to move up; there's no ceiling |
| **5. Compete** | Experienced / coached | A full season with several races | Running power; running dynamics; custom zones and overrides; raw data export; polarised-plan option; DFA-α1 "lab" (§3.3); coach mode | — |

Plus two side paths: **Return to running** (after injury, pregnancy or a long break) and **Maintenance** (keep fitness with no race goal).

*Why stages:* Novices have about 2.3× the injury rate per hour of running of recreational runners (17.8 vs 7.7 injuries per 1,000 h; [Videbæk 2015](https://pubmed.ncbi.nlm.nih.gov/25951917/)), so stages 1–2 progress more slowly. Habits take a median of about 66 days to form, with individuals ranging from 18 to 254 days ([Lally 2010](https://siliconcanals.com/t-ucl-habit-automaticity-18-254-66-days/); a 2024 review found medians of 59–66 days), so stage 1–2 support lasts about 10 weeks, not 21 days. *The graduation thresholds themselves are product choices, not science. Test and tune them.*

---

## 2. Evidence grades

| Grade | Meaning | How the app uses it |
|---|---|---|
| **A: Strong** | Meta-analyses or large cohorts that agree | Can drive plan decisions on its own |
| **B: Moderate** | One large study, or consistent smaller ones | Drives decisions alongside other inputs |
| **C: Emerging/weak** | Small, mixed, or error-prone measurement | **Shown, never drives the plan alone.** Shown as a trend with a range |
| **✗: Avoid** | Debunked, or misleading as normally presented | Not shown, or shown only with an explicit correction |

---

## 3. Metrics catalogue

### 3.1 Effort and load: works with just a phone

| Metric | What it tells you | Grade | Stage | Notes |
|---|---|---|---|---|
| **Time running** | How much running your body is absorbing | A | 1+ | Injury studies count exposure in hours, so beginner plans are written in **minutes, not distance** |
| **"How did it feel?" (1–10 RPE)** | How hard the run felt | A/B | 1+ | Works with no sensor. RPE and the talk test match the body's ventilatory thresholds, the points where breathing gets harder ([Bok, Rakovac & Foster 2022](https://doi.org/10.1007/s40279-022-01690-3)) |
| **Session load** = RPE × minutes | A single training-load number that needs no sensors | B | 2+ | Foster's session-RPE method. The load metric for phone-only users |
| **Talk-test zones**: "full sentences / short phrases / a few words" | Effort zones in plain words | B | 1+ | Easy runs are "full sentences". In a 2011 study, effort at the stage where speaking first gets uncertain was too hard for training; the stage just below it was right ([Jeans et al. 2011](https://www.bisp-surf.de/Record/PU201105004720)) |
| **Long-run spike guard**: today vs your longest run in the last 30 days | Injury risk from one sudden long run | **B** | 1+ (always on) | 5,205 runners: a single run more than 10% longer than the 30-day longest raised overuse-injury rates (rate ratio 1.64 for a 10–30% spike, 2.28 for over 100%). **Week-to-week increases showed no link** ([Frandsen 2025, BJSM](https://doi.org/10.1136/bjsports-2024-109380)). Observational study with self-reported injuries |
| **Weekly volume trend** | Consistency | A (as a description) | 2+ | Shown as a familiar bar chart. Not used to predict injury |

### 3.2 Pace, speed and fitness

| Metric | What it tells you | Grade | Stage | Notes |
|---|---|---|---|---|
| **Critical speed (CS)** and the reserve above it (D′) | The fastest pace you can hold "for a long time"; the anchor for every pace zone and prediction | **B** | 3+ | Can be estimated from **everyday training data, no test needed**: across more than 25,000 marathoners, CS from Strava training data predicted marathon time with about 8% error ([Smyth & Muniz-Pumares 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7664951)). Marathon pace was about 93% of CS for 2:30 runners and about 79% for 6:00 runners. Optional 3-min + 12-min field test makes it more accurate |
| **Race predictor** | Likely race times | B | 3+ | **Don't use plain Riegel for the marathon.** It is accurate up to the half, but predicts marathons too fast, by at least 10 min for half of recreational runners ([Vickers & Vertosick 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5000509/)). Combine critical speed, two recent races and weekly mileage. Always show a **range** |
| **Hill-adjusted pace (GAP)** | Effort-equivalent pace on hills | B | 3+ | Based on Minetti's energy-cost curve, measured from −45% to +45% gradient ([Minetti 2002](https://doi.org/10.1152/japplphysiol.01177.2001)) |
| **Heat-adjusted pace** | Why you were slower in summer | B direction / C size | 4+ | Heat clearly slows marathoners, mid-pack and slower runners more than elites. The exact adjustment per degree or dew point varies between people. **Learn each runner's own heat response** from their HR-vs-pace data rather than using a fixed table |
| **VO2max estimate** | General aerobic fitness | **C** | 3+ | Watch estimates have about 13–16% average error. Apple Watch overestimates low fitness and underestimates high fitness ([2024 validation](https://biomedeng.jmir.org/2024/1/e59459)). Garmin (older algorithm) underestimated trained athletes by 6–7 ml/kg/min. **Show as a trend and a range ("about 48–54"), never as one exact number** |
| **Pace at a fixed heart rate** (efficiency) | "Am I getting fitter at the same effort?" | C/B | 2+ | The most motivating easy-run metric: "Your easy pace at 145 bpm is 12 s/km faster than in August." Only compare runs in similar temperatures |

### 3.3 Heart rate, recovery and the body

| Metric | What it tells you | Grade | Stage | Notes |
|---|---|---|---|---|
| **Heart-rate zones** | Effort zones | B | 2+ | Anchor zones to a threshold estimated from data or a talk-test check, not a 220-minus-age formula. **Wrist HR lags a chest strap by about 10–20 s during pace changes** and gets less accurate at higher speeds. During intervals, use pace or RPE for targets and treat wrist HR as a rough guide |
| **Intensity split** (% of time easy / moderate / hard) | "Are my easy runs actually easy?" | **B** | 2+ | 2024 individual-participant meta-analysis: **pyramidal** training (mostly easy, some moderate, a little hard) suited recreational athletes better, and **polarised** (mostly easy and hard, little moderate) suited competitive ones ([Rosenblat 2024](https://www.fisiologiadelejercicio.com/wp-content/uploads/2025/02/Which-Training-Intensity-Distribution-Intervention-will.pdf)). So plans default to pyramidal and offer polarised at stage 5. The **easy-pace check** flags easy runs done too hard, the most common amateur mistake |
| **Fitness / fatigue / form** (CTL/ATL/TSB, Banister model) | Long-term fitness vs short-term tiredness | C (as a predictor) | 3+ | Good for **describing** training. Never present it as an injury predictor. Explain it in words: "Fitness building, fatigue high, freshest in 9 days" |
| **Overnight HRV vs your own normal range** | Recovery state | **C/B** | 4+ | Meta-analyses disagree: one found a small VO2max benefit from HRV-guided training ([Granero-Gallegos 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7663087)), another found no significant benefit to performance, but fewer non-responders ([Düking 2021](https://lida.sport-iat.de/ta/Record/4073164?lng=en)). Use it as **one input that can soften a hard day**, never as an order. Always ask "how do you feel?" alongside it |
| **Resting HR, sleep** | Context for recovery | C | 4+ | Read from the watch or Health app. Show the trend against the runner's own normal |
| **Durability**: pace or power at the same HR in the final third of long runs vs the first third | How well you hold pace late in long efforts, a key marathon ability | **C, promising** | 4+ | Jones's "fourth dimension": resilience to fatigue is a separate predictor of performance alongside VO2max, threshold and economy ([Jones 2023/24](https://pubmed.ncbi.nlm.nih.gov/37606604/)). Most evidence is from cycling. In running, economy is known to decline over long efforts. **A metric no consumer app explains well. Big opportunity** |
| **Heart-rate drift** (pace:HR decoupling) | Aerobic base on long runs | C | 4+ | A coaching metric used by practitioners. Same caution about temperature |
| **DFA-α1 aerobic threshold** (an HRV measure during exercise) | Finds your easy/steady boundary without a lab | **C, experimental** | 5 (labelled "lab") | Chest-strap DFA-α1 of about 0.75 tracked lab VT1 in runners ([Rogers 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7865269)), but running causes signal artefacts. Reportedly, one of its early advocates no longer recommends it (forum report, unverified). Chest strap over Bluetooth only, with a quality check |
| **Menstrual cycle log** | Personal patterns in energy, effort and symptoms | Logging: useful. Phase-based plans: **✗** | 1+ (opt-in) | The meta-analysis found a *trivial* average effect of cycle phase on performance and recommends a **personalised approach** ([McNulty 2020](https://doi.org/10.1007/s40279-020-01319-3)). So: logging and **the runner's own** patterns, not "train hard in the follicular phase" rules |

### 3.4 Form and gear

| Metric | Grade | Stage | Notes |
|---|---|---|---|
| **Cadence** | B (lower joint load) / unproven for injuries | 3+ | A 5–10% higher step rate lowered knee energy absorption, and at +10% lowered hip loading ([Heiderscheit 2011](https://pubmed.ncbi.nlm.nih.gov/20581720/)); patellofemoral force dropped about 14% ([Lenhart 2014](https://uwnmbl.engr.wisc.edu/pubs/msse14_lenhart.pdf)). **No universal 180 target.** Offer "+5% from *your* normal" only as an optional drill, e.g. for runners logging knee niggles |
| **Running dynamics** (ground contact time, vertical oscillation, Garmin "running economy" / step speed loss) | C | 5 | Show the numbers and trends. **No good/bad colours.** Garmin's Running Economy needs the HRM 600 strap |
| **Running power** (Stryd, watch-based) | C | 5 | Useful for steady effort across hills. Not comparable between brands |
| **Shoe mileage and rotation** | C | 2+ | Rotating shoes was linked to 39% lower injury risk ([Malisoux](https://runnersconnect.net/running-injury-prevention/shoe-rotation-reduce-running-injuries/); likely confounded, since careful runners may rotate). Show it as a gentle tip |
| **Race shoes** | B for elites | 4+ | About 4% lower energy cost in highly trained men ([Hoogkamer 2018](https://link.springer.com/article/10.1007/s40279-017-0811-2)). Smaller and more variable (about 1–3%) for non-elites. Tell people honestly |

### 3.5 Race preparation

| Feature | Grade | Notes |
|---|---|---|
| **Automatic taper** | **A/B** | Meta-analysis: a **2-week** taper cutting volume **41–60%** gradually, keeping intensity, worked best ([Bosquet 2007](https://pubmed.ncbi.nlm.nih.gov/17762369/)) |
| **Fuelling plan (g carbs/hour)** | B | 60–90 g/h is the common guidance; going above about 60 g/h needs glucose plus fructose. In a 2024 marathon study, runners took only about **35 g/h** on average, and those at 60–90 g/h were more likely to finish under 3 h ([Sports Med Open 2024](https://www.storre.stir.ac.uk/retrieve/f79d5a96-dd95-4c41-b592-15cff5ff69ea/s40798-024-00801-w%20%281%29.pdf)). The plan includes **gut-training long runs** that build up intake over the block |
| **Sweat-rate test** | B | Weigh before and after a run, then adjust for fluid drunk. Sweat rate varies from under 0.5 to over 2.5 L/h between people, so use the runner's own number, not averages |
| **Race-day pacing plan** | B | Per-km targets from critical speed × the % of CS for the runner's level, adjusted for the course's hills and the race-day forecast. Sent to the watch as a course |

### 3.6 Strength, mobility, injuries

| Feature | Grade | Notes |
|---|---|---|
| **Strength 2×/week, progressing by stage** | B | Heavy strength, plyometrics, and especially the two combined improve running economy ([Llanos-Lagos 2024 meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC11052887/)). Stage 1–2: bodyweight. Stage 3+: heavy lifts and plyometrics |
| **Niggle tracker** | B (the model) | Pain 0–10 by body area after runs and the next morning. Plan rules are based on the **pain-monitoring model** physios use in tendon rehab (pain up to about 5/10 during running is acceptable if it settles by the next morning; *Silbernagel 2007, cited from memory, not re-checked this session*). Pain that persists or gets worse → reduce, and suggest a physio. **Never diagnose** |

---

## 4. Signature features

These are the features to market. Each builds on the evidence above.

1. **The ladder** (§1). One continuous path from first run to marathon. Nobody else offers it.
2. **"Explain this" on every number**, in three layers:
   - *Layer 1 (everyone):* one plain sentence. "You're fitter than in August: same effort, 12 s/km faster."
   - *Layer 2 (tap):* why it matters and what to do. "This shows your easy runs are working. Keep them chatty."
   - *Layer 3 (tap again):* the science. Method, evidence grade, the runner's confidence range, and a link to the study.
   Beginners stay at layer 1; experienced runners go deeper. **Both groups end up understanding their running, not just seeing numbers.**
3. **Honest numbers.** Ranges, not false precision ("VO2max about 48–54"), plus data-quality flags ("heart rate low-confidence: wrist sensor during intervals"). No competitor does this. It earns trust from experienced runners and protects beginners.
4. **Long-run spike guard.** Built into plan generation, and live during runs: "You're at 6.6 km, 10% past your longest run this month. A good place to turn for home." Based on the strongest recent injury evidence (B grade), and simple enough for anyone.
5. **Critical-speed engine.** Estimated from ordinary runs, re-checked every week. Powers pace zones, race predictions (with ranges), and pacing plans. Shows the runner *why* a marathon goal is or isn't realistic ("2:59 needs about 88% of your CS; runners at your level usually hold 82–85%").
6. **Adaptive plan with a "what changed" log.** Inputs: missed sessions, RPE, niggles, HRV/sleep (soft input only), heat forecast, illness. Each change is listed: "Thu tempo → easy 40 min because: 2 poor nights + HRV below your range + you rated Tuesday 8/10."
7. **Easy-pace check.** "4 of your last 5 easy runs were in the moderate zone." The most common amateur mistake, flagged gently with a fix.
8. **Durability score** for half and marathon runners. "In your last 3 long runs, pace at the same heart rate dropped 4% after 75 min, down from 7% in September." Uses words and a simple before/after bar, not a new chart type.
9. **Race-day kit.** Course-aware pace plan, heat adjustment from the forecast, a fuelling timeline (g/h, gel by gel) practised in long runs, the automatic taper, and a 1-page race card and watch course.
10. **Monthly fitness report.** In plain English: what improved, what didn't, what's next, and progress toward the next stage.
11. **Built-in self-tests.** 3-min + 12-min critical-speed test, a talk-test calibration run, a 30-min threshold test (stage 4+), a sweat-rate test, and a 5K time trial (parkrun works). Each comes with a "why do this" explanation and a step-by-step guide.
12. **Strength that progresses with the runner**: short sessions on the same calendar as the runs.

### Engagement design (based on behaviour-change evidence)

Self-monitoring plus feedback are the behaviour-change techniques best supported for activity apps. Goal setting, personalisation and game-like features are promising but less proven (a 2021 BJSM meta-analysis of apps and trackers, seen only as an abstract; [2022 review of app interventions](https://link.springer.com/article/10.1186/s12966-022-01319-8)). So:

- **Self-monitoring and feedback:** the post-run summary always says one thing that improved compared with the runner's own past.
- **Goals:** stage goals and race goals. No public leaderboards for beginners.
- **Streaks count weeks, not days**, so rest days are never penalised.
- **Plan-based nudges** ("Tomorrow: 25 min easy. Kit out tonight?") and **"if-then" plans** set during onboarding ("If it's raining, I'll run at lunch instead").
- **Bounce-back after a lapse**: after 2 missed weeks, the app suggests a gentle restart week instead of showing a broken streak.

---

## 5. Left out on purpose

Leaving these out is also a way to stand out from other apps:

| Common feature | Why we drop or change it |
|---|---|
| **"Injury risk %" based on the acute:chronic workload ratio (ACWR)** | The ratio has statistical problems and no good evidence it predicts injury ([Impellizzeri 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7534938/); [Lolli 2019](https://bjsm.bmj.com/content/53/24/1510)). Use the single-run spike guard instead |
| **The "10% per week" rule as the main guard** | Week-to-week increases showed no injury link in the 5,205-runner cohort. Single long-run spikes did |
| **A 180 cadence target** | No universal target. Only small changes relative to the runner's own cadence have evidence |
| **220 − age as your max HR** | Large individual error. Estimate from data or a field test |
| **VO2max shown as one exact number** | 13–16% average error. Show a range and a trend |
| **Menstrual-phase training prescriptions** | Trivial average effect. Personal logging only |
| **Daily streaks, calorie targets** | Encourage over-training and unhealthy goals |
| **A readiness score that overrides the runner** | HRV evidence is mixed. It can suggest; the runner decides |
| **Good/bad colours on running dynamics** | Little evidence linking these to injury or performance in individuals |

---

## 6. How to show metrics so people understand them

*(Builds on what earlier design rounds showed: familiar patterns beat new chart types.)*

- **One number, one sentence, one comparison with the runner's own normal.** Example: "Easy pace at 145 bpm: 5:52/km, 12 s faster than in August."
- **Familiar visuals only:** bar charts for weekly volume, a line with a shaded "your normal" band for trends, weather-style range bars for predictions, and a progress bar for stage goals. No radar charts and no novel visual codes.
- **Compare with the runner's own past by default.** Comparisons with others (age-grading, percentiles) only when the runner asks.
- **Write confidence in words**: "fairly sure", "rough estimate — needs 3 more runs with heart rate".
- **Jargon appears only when it's useful**: "critical speed" is first introduced at stage 3 with a 1-line explanation and a glossary link.
- **Glossary and "Learn" cards** tied to the runner's own data ("This is *your* critical speed, and here's how we got it").

---

## 7. Build order

| Phase | Features |
|---|---|
| **MVP** | Stages 1–3 of the ladder; time-based plans with audio cues; RPE and talk-test zones; session load; **long-run spike guard**; adaptive rescheduling with a change log; easy-pace check; "explain this" layers 1–2; weekly streaks; niggle tracker; strength (bodyweight); phone GPS + Apple Health/Health Connect + Bluetooth HR + WorkoutKit |
| **v1** | Critical-speed engine; race predictor with ranges; pace/HR zones; fitness/fatigue described in words; shoe tracking; monthly report; Garmin + COROS (workouts sent to the watch); self-tests; layer 3 (science and citations) |
| **v2** | Stage 4: durability, HRV soft input, heat and hill adjustment, fuelling and gut training, automatic taper, race-day kit, sweat test, Polar/Suunto |
| **v3** | Stage 5: power, running dynamics, DFA-α1 lab, polarised option, custom zones, coach mode, raw export |

### Validating our own claims

- Log our race predictions against actual results and publish the accuracy (e.g. "our marathon predictions: median error X%"). That level of transparency is itself a selling point.
- Run A/B tests on the beginner support (repeat-week button, weekly streaks, if-then plans) and measure week-4 and week-10 retention.
- Track self-reported niggles against long-run spike guard warnings to check the guard is working.

### Guardrails

- Pain and injury content stays at general wellness level and points to a physio. **No diagnosis**: software that diagnoses can count as a medical device under MHRA rules. Have a qualified professional review this.
- Heart rate, HRV, sleep and menstrual data are UK GDPR **special category** data, so they need explicit opt-in (see `research.md` §5).
- Any AI explanations must not use Strava API data (see `research.md` §4).

---

## Sources

**Injury and load**
- [Frandsen et al. 2025, BJSM: single-session spikes](https://doi.org/10.1136/bjsports-2024-109380) · [Aarhus record](https://pure.au.dk/portal/en/publications/how-much-running-is-too-much-identifying-high-risk-running-sessio/)
- [Videbæk et al. 2015: injuries per 1,000 h](https://pubmed.ncbi.nlm.nih.gov/25951917/)
- [Impellizzeri et al. 2020: ACWR problems](https://pmc.ncbi.nlm.nih.gov/articles/PMC7534938/) · [Lolli et al. 2019, BJSM](https://bjsm.bmj.com/content/53/24/1510)
- [Heiderscheit et al. 2011: step rate](https://pubmed.ncbi.nlm.nih.gov/20581720/) · [Lenhart et al. 2014](https://uwnmbl.engr.wisc.edu/pubs/msse14_lenhart.pdf)

**Fitness, pace and prediction**
- [Smyth & Muniz-Pumares 2020: CS from training data](https://pmc.ncbi.nlm.nih.gov/articles/PMC7664951)
- [Vickers & Vertosick 2016: race-time prediction](https://pmc.ncbi.nlm.nih.gov/articles/PMC5000509/)
- [Minetti et al. 2002: cost of running on gradients](https://doi.org/10.1152/japplphysiol.01177.2001)
- [Jones 2023/24: "the fourth dimension" (durability)](https://pubmed.ncbi.nlm.nih.gov/37606604/)
- [Rosenblat et al. 2024: intensity distribution by level](https://www.fisiologiadelejercicio.com/wp-content/uploads/2025/02/Which-Training-Intensity-Distribution-Intervention-will.pdf)
- [Bok, Rakovac & Foster 2022: talk test and RPE validity](https://doi.org/10.1007/s40279-022-01690-3) · [Jeans et al. 2011: talk test](https://www.bisp-surf.de/Record/PU201105004720)

**Recovery and measurement accuracy**
- [Granero-Gallegos 2020: HRV-guided training](https://pmc.ncbi.nlm.nih.gov/articles/PMC7663087) · [Düking 2021](https://lida.sport-iat.de/ta/Record/4073164?lng=en)
- [Rogers et al.: DFA-α1 in runners](https://pmc.ncbi.nlm.nih.gov/articles/PMC7865269)
- [Apple Watch VO2max validation 2024](https://biomedeng.jmir.org/2024/1/e59459) · [Apple Watch VO2max 2025](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12080799/) · [Garmin VO2max study write-up](https://the5krunner.com/2025/08/27/garmin-vo2max-scientific-study-roasts-it-and-loves-it-when-a-it-dpends/)
- [Wrist vs chest HR during intervals (practitioner test)](https://en.run-motion.com/tests-of-3-heart-rate-monitors-during-interval-training)
- [McNulty et al. 2020: menstrual cycle and performance](https://doi.org/10.1007/s40279-020-01319-3)

**Race preparation, strength and gear**
- [Bosquet et al. 2007: taper meta-analysis](https://pubmed.ncbi.nlm.nih.gov/17762369/)
- [2024 marathon carbohydrate intake study](https://www.storre.stir.ac.uk/retrieve/f79d5a96-dd95-4c41-b592-15cff5ff69ea/s40798-024-00801-w%20%281%29.pdf)
- [Llanos-Lagos et al. 2024: strength training and running economy](https://pmc.ncbi.nlm.nih.gov/articles/PMC11052887/)
- [Shoe rotation (Malisoux) summary](https://runnersconnect.net/running-injury-prevention/shoe-rotation-reduce-running-injuries/)
- [Hoogkamer et al. 2018: shoe energy savings](https://link.springer.com/article/10.1007/s40279-017-0811-2)
- [Garmin Forerunner 970: running tolerance and economy](https://www.advnture.com/tech/garmin-unveils-the-forerunner-570-and-forerunner-970)

**Habits and behaviour change**
- [Lally 2010 habit formation (summary)](https://siliconcanals.com/t-ucl-habit-automaticity-18-254-66-days/)
- [2022 review of app-based interventions (behaviour-change techniques)](https://link.springer.com/article/10.1186/s12966-022-01319-8) · [Activity-app content analysis 2014](https://pmc.ncbi.nlm.nih.gov/articles/PMC4132213/)
