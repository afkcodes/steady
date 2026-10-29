# Running app: research brief

*Researched 28 Oct 2026. The device and API rules changed a lot this year (Strava in June, Garmin in October, Fitbit shutting down on 2 Nov), so dates are spelled out. Where my only source was a blog or forum post, I say so.*

---

## 1. The short version

1. **Serving beginners and experienced runners in one app works if the app grows with the runner.** Most apps choose one group. Couch to 5K and Nike Run Club are for beginners; Runna, TrainingPeaks and intervals.icu are for experienced runners. No mainstream app takes someone from their first run/walk interval to a marathon block with the same coach, history and device setup. That path from beginner to experienced is the opening.
2. **Strava is now a poor data source.** Since June 2026 a new Strava API app serves 1 athlete by default and 10 without review, and beyond that needs a case-by-case review. Cached data can only be kept for 7 days. Strava data can't be shown to anyone but its owner, and can't be used in any AI feature. Treat Strava as somewhere to *share runs to*, never something you *build on*.
3. **Garmin is the integration that matters most, and it reopened a week ago.** The Garmin Connect Developer Program was closed to new applicants from about March to 21 Oct 2026. The new **Starter** tier includes the **Training API**, which sends structured workouts to the watch, and the **Courses API**, which sends routes. It is push-only, has no history backfill and has a user cap (reported as about 1,000). Apply as soon as you have a public website and a privacy policy.
4. **You can launch with no partner approvals at all**: phone GPS, Apple Health/HealthKit, Android Health Connect, Bluetooth heart-rate straps, and Apple WorkoutKit to send workouts to Apple Watch. Then add Garmin, COROS, Polar and Suunto.
5. **Device-neutral coaching is newly worth something.** Strava bought Runna (Apr 2025). Garmin bought TrainingPeaks and TrainHeroic (22 Jul 2026). The two biggest coaching platforms are now each owned by an ecosystem. "Works the same on any watch" is a real selling point.

---

## 2. Market map

| App | Who it's for | What it does well | Gap you can use |
|---|---|---|---|
| **NHS Couch to 5K** | Total beginners | Free, trusted, 9-week run/walk plan, celebrity audio coaches | Ends at 5K. Fixed plan with no adapting. No watch integration to speak of |
| **Nike Run Club** | Beginners, casual runners | Free, excellent guided audio runs | Its "Get Started" plan assumes you can already run 20 minutes non-stop (per a 2026 review), which is too much for real novices. Weak watch support |
| **Runna** (Strava-owned) | "Beginner-plus" to racing | Race plans, pace targets, pushes workouts to Garmin/Apple/COROS. Beginner plans rebuilt in Jan 2026 with flexible rescheduling. "Adapt for Heat" (mid-2026) | $19.99/mo / $119.99/yr. Adapts mostly on training load, not recovery signals (third-party opinion). Now tied to Strava |
| **Strava** | Everyone, social | Feed, segments, clubs, routes, the default place to share runs | Training plans are basic. API is now locked down (see §4) |
| **Garmin Coach / Connect+** | Garmin owners | Free adaptive plans, HRV status, training readiness | Garmin watch only |
| **TrainingPeaks** (Garmin-owned) | Coached and serious athletes | Coach marketplace, the standard fitness/fatigue (CTL/ATL/TSB) charts | Complex, dated interface. Independence is now in doubt |
| **intervals.icu, Runalyze** | Data-heavy amateurs | Deep analysis, cheap | Look like a spreadsheet, so beginners won't use them |

*Sources: 2026 roundup blogs (vendor-written, so rankings are biased), Runna and Strava news, Garmin press release.*

---

## 3. Features

> **The full, evidence-graded feature and metrics spec is in [`features.md`](features.md).** This section is the short overview.

The aim is **one coach, two depths.** Everyone gets the same core. The depth shown changes with experience, and runners graduate between levels rather than switching apps.

### 3.1 Core (both groups)

- **Recording**: GPS (phone or watch), pause/auto-pause, laps, live pace, distance, time and heart rate. Must work offline and in the background, and survive the app being closed.
- **Audio cues**: interval prompts, split announcements, "walk now / run now". This is the single most important beginner feature, and runners racing to a target pace want it too.
- **The plan**: today's session up front, a week view and a calendar. **Missing a run must never break the plan.** Make "Move", "Swap" and "Repeat this week" one tap each. Runna rebuilt its beginner plans around this in 2026 because it is a main reason people quit.
- **"How did it feel?"** after every run: a 1–10 effort rating (RPE) plus an optional pain/niggle tag. This one input feeds the adapting for both groups and works with no sensors at all.
- **History and records**: fastest 1K/5K/10K/half/full, longest run, streaks counted by week rather than day.
- **Sharing**: an export card, share to Strava, and a FIT/GPX/TCX export the runner owns.
- **Shoe mileage tracking** with a retirement reminder (cheap to build, and runners like it).
- **Safety**: live location sharing with a chosen contact. Important for beginners, solo runners and women running at night.

### 3.2 For beginners

| Feature | Why |
|---|---|
| **A real zero-to-5K start**: run/walk intervals from 1 min run / 1.5 min walk, timed by **minutes, not distance or pace** | Nike Run Club's entry plan is too hard. Couch to 5K proves this format works |
| **Effort in words, not pace**: "you should be able to talk in sentences" | Beginners don't know their paces, and pace targets make them run too fast |
| **A "Too hard? Repeat this week" button**, not a failed workout | Treating a run as failed makes people quit. Repeating is normal, not a setback |
| **An injury guard on single long runs**: warn when today's planned or actual run is more than 10% longer than the longest run in the last 30 days | Strongest new evidence: a 5,205-runner Garmin cohort ([Frandsen et al., BJSM 2025](https://doi.org/10.1136/bjsports-2024-109380)) found injury risk rose once a single run was more than 10% longer than the longest run in the previous 30 days. Week-to-week increases showed no link. Easy to explain, easy to build, and it is evidence-based. (Observational study, self-reported injuries) |
| **What to do after 5K**: "Keep 5K steady", "Get faster at 5K" or "Go to 10K" | This is where most plans end and most runners drop out. It is also the start of the path to experienced running |
| **Plain-language summaries** after a run: "Steadier than last week. 2 runs to go this week." | No charts the runner has to learn first |
| **Short warm-up, cool-down and strength routines** (5–10 min, video or illustrated) | Lowers injury risk and makes the plan feel complete |

### 3.3 For experienced runners

| Feature | Notes |
|---|---|
| **Structured workouts sent to the watch** | The feature that decides whether serious runners stay. Garmin Training API, Apple WorkoutKit, COROS (training-plan write), Suunto (partly). See §4 |
| **Race-goal plans** (5K → marathon, ultras later) that adapt to missed sessions, effort ratings and actual paces | Rebuild the coming weeks; never re-do the whole plan silently. Always show what changed and why |
| **Zones**: heart rate, pace, and power (Stryd and similar) | Estimate threshold from runs and let users set it manually |
| **Training load**: fitness/fatigue/form, explained in words | Use the familiar model (CTL/ATL/TSB). The injury guard from §3.2 still applies |
| **Recovery and readiness**: overnight HRV, resting HR and sleep from the watch, where available | Garmin Health API, Polar Nightly Recharge, Apple Health, Health Connect. Garmin's own coaching adapts on HRV, and runners now expect it |
| **Race predictor and race-day pacing plan** with grade-adjusted pace (GAP) for the course's hills, plus a fuelling plan | Send the race route to the watch via the Garmin Courses API or Suunto routes |
| **Heat and altitude adjustment** to target paces | Runna shipped Adapt for Heat in 2026, so this is now expected |
| **Splits and lap analysis**, comparing a workout with earlier runs of the same workout | "Your 6×800 average dropped 4 s since September" |
| **Coach mode**: a human coach sees the athlete's plan and data | Must use data from your own devices and integrations. Strava data can't be shown to a coach (§4) |

### 3.4 Engagement (evidence is thin, so treat as hypotheses)

The best evidence for why beginners quit is a 774-runner Dutch "Start to Run" study (Utrecht), along with vendor case studies. Recurring reasons: no habit forms, low confidence, boredom, and fear or experience of injury. Suggested responses:

- **Count streaks by week** ("3 weeks running"), not by day. Daily streaks punish rest days and encourage injury.
- **Milestones**: first non-stop 10 minutes, first 5K, first month, with no badge clutter.
- **Small groups for the same plan cohort** ("47 people started 10K in November"). Low pressure, unlike Strava's public feed.
- **Notifications tied to the plan** ("Tomorrow: 25 min easy. Laying out kit tonight?"), never generic nags.

### 3.5 AI coach: how to do it safely

An AI chat coach ("why is today easy?", "I have a cold, what should I change?") is now expected, but data licences limit it:

- **Strava API data can't be used in any AI feature**, including search, retrieval or putting it into a prompt.
- Garmin's 2026 developer agreement has AI-related terms (reported, not reviewed here). Read them before sending Garmin data to a model.
- Recordings your own app makes (phone GPS, your watch app, Bluetooth sensors, Apple Health and Health Connect data the user grants) are the safest inputs.
- Don't let the AI diagnose. Pain or injury questions go to fixed, reviewed answers ("see a physio if…").

---

## 4. Device and platform connectivity

### 4.1 Summary

| Platform | Read runs | Read health/recovery | **Send workouts to watch** | Send routes | How you get access (Oct 2026) | Main catch |
|---|---|---|---|---|---|---|
| **Garmin** | ✅ JSON + FIT | ✅ incl. HRV, sleep, women's health | ✅ Training API | ✅ Courses API | **Starter**: apply (reopened 21 Oct 2026). Needs a public website and privacy policy | Starter is push-only, has no backfill (history starts on the day the user connects) and is capped (reported about 1,000 users). Enterprise has backfill and no cap, priced per company, billing from 1 Apr 2027 (reported). FIT files from the API may lack VO2max/recovery fields (reported) |
| **Apple Watch / HealthKit** | ✅ HealthKit | ✅ HRV, resting HR, sleep | ✅ **WorkoutKit**: custom intervals, pacer and goal workouts, shown in the native Workout app | ❌ (only with your own watch app) | No approval. On-device, iOS only | Needs an iOS app. Running your own Apple Watch app (HKWorkoutSession) gives full control |
| **Android: Health Connect** | ✅ `ExerciseSessionRecord` + routes (separate route permission) | ✅ | ⚠️ `PlannedExerciseSessionRecord` (still alpha) | — | No approval. On-device | Reading another app's route needs consent each time. Planned-workout support is still alpha |
| **Wear OS / Pixel Watch** | Own watch app, or Health Connect | via Health Connect | Own watch app | Own app | No approval | Fitbit Web API is **turned off 2 Nov 2026**. Use the Google Health API (new auth; every user must give consent again) |
| **COROS** | ✅ | partial | ✅ "write training plans" through self-service OAuth (Tredict and Final Surge send the next 4–7 days) | Partner tier only (unconfirmed) | **Self-service OAuth, no application.** The Partner API (webhooks, two-way sync) needs review | Separate US and EU endpoints. Fewer sports supported than in COROS's own app |
| **Polar** | ✅ FIT/TCX/GPX, zones, samples, route | ✅ Nightly Recharge, sleep, cardio load, continuous HR, SpO2, ECG, skin temperature | ❌ no workout push found in AccessLink | ❌ | AccessLink: register a client with a Polar Flow account. Licence agreement | **Only runs uploaded in the last 30 days**, and only after the user connects. One webhook per client, so save each run as it arrives |
| **Suunto** | ✅ workouts, GPS, HR, laps; webhooks | ✅ via 24/7 API | ⚠️ through Suunto "Guides" (unverified) | ✅ GPX routes sync to watch | Partner programme; companies only | Thin documentation in public sources; check API Zone |
| **Wahoo** | via Wahoo Cloud API / COROS sync | — | (cycling-first) | — | Partner | Low priority for running |
| **Strava** | ⚠️ | — | — | ⚠️ | Standard tier now **requires a paid Strava subscription**. 1 athlete by default, 10 by self-upgrade, more only after review (up to 9,999); Extended Access above that | Can only show data to its owner. No AI use. 7-day cache. Must delete within 30 days of the user disconnecting. **No aggregators in between.** Club endpoints removed 1 Sep 2026 |

### 4.2 Bluetooth sensors (no partner needed)

Standard Bluetooth Low Energy (BLE) profiles any app can use directly:

- **Heart Rate Service**: Polar H10/Verity, Garmin HRM, Wahoo TICKR, most armbands, and many watches in "broadcast HR" mode.
- **Running Speed and Cadence**: footpods, for pace and cadence on treadmills or under trees.
- **Running power**: Stryd broadcasts over the Cycling Power profile.
- **Fitness Machine Service**: smart treadmills, so speed and incline are read automatically.

This gives a phone-only beginner accurate heart rate for about £50 without needing a watch.

### 4.3 Recommended order

**Phase 1, launch (no approvals needed)**
- iOS + Android app with phone GPS recording
- Apple Health and Health Connect read/write
- Bluetooth heart rate strap and footpod
- **Apple WorkoutKit** to send workouts to Apple Watch
- FIT/GPX export and manual FIT import (covers every other watch on day one)

**Phase 2, the big ones (apply now; approval takes time)**
- **Garmin Starter**: Activity + Health + **Training** + **Courses**. Show the required Garmin attribution
- **COROS** self-service OAuth (read runs + write training plans)

**Phase 3**
- Polar AccessLink (read only; save runs on arrival because of the 30-day limit)
- Suunto partner programme
- Strava *upload/share only*, once you need more than 10 users and have passed review
- Your own Apple Watch and Wear OS apps (full control of the in-run screen)
- Garmin Enterprise once you near the Starter cap (budget per monthly active user)

**Build or buy?** Paid aggregators (Terra about $399/mo, ROOK about $399/mo for 750 users, Thryve from €499/mo for 500 users; prices from a competitor's comparison page) save integration work, but **Strava bans going through them**, and Garmin needs written permission before you share your credentials with a third party. **Open Wearables** is a free, self-hosted, MIT-licensed alternative worth a look. For a running-first product, direct Garmin + Apple + Health Connect integrations are probably worth owning yourself.

---

## 5. Data, privacy and claims (UK)

General information, not legal advice. Have a privacy professional check this before launch.

- Heart rate, HRV, sleep, SpO2, ECG and women's health data count as **health data**, which is **special category data** under UK GDPR. You need explicit consent, a DPIA, and to collect only what you use. Each device licence adds its own rules for keeping and deleting data (Strava: delete within 30 days of the user disconnecting).
- **Location data** (route start and end points reveal home addresses): add privacy zones that hide the start and end of shared routes by default.
- **Avoid medical claims.** Software that diagnoses or treats a condition can count as a medical device under MHRA rules. "Readiness" and "injury-risk" guidance should stay general fitness coaching.

---

## 6. Open questions for you

1. **Platform**: iOS-first (Apple Watch + WorkoutKit is the fastest route to sending workouts to a watch) or both from day one?
2. **Business model**: free beginner tier plus paid plans (Runna's $119.99/yr is the reference price), or fully paid?
3. **Human coaches**: a goal for v1, or later?
4. **AI chat coach**: core to the product, or a later add-on? This decides how strictly to separate Strava and Garmin data from AI features.

---

## Sources

**Strava**
- [Strava: Updates to API Agreement (Nov 2024)](https://press.strava.com/articles/updates-to-stravas-api-agreement)
- [Strava support: How data appears on 3rd-party apps](https://support.strava.com/hc/en-us/articles/31798729397773-API-Agreement-Update-How-Data-Appears-on-3rd-Party-Apps)
- [Sahha: Strava API changes 2026](https://sahha.ai/blog/strava-api-changes-2026/) (vendor summary; check against Strava's own policy)
- [Terra: Strava API changes 2026](https://tryterra.co/blog/strava-api-changes-2026)
- [intervals.icu forum: new Strava terms](https://forum.intervals.icu/t/strava-api-update-new-terms-subs-required-for-api-access/130240)

**Garmin**
- [Garmin developer program overview (tiers)](https://developer.garmin.com/gc-developer-program/overview)
- [Garmin Courses API](https://developer.garmin.com/gc-developer-program/courses-api/)
- [Open Wearables: Garmin program reopened 21 Oct 2026](https://openwearables.io/blog/garmin-connect-developer-program-reopened)
- [the5krunner: Garmin API paused (Sep 2026)](https://the5krunner.com/2026/09/14/garmin-developer-api-access-paused/)
- [the5krunner: Garmin personal API (Oct 2026)](https://the5krunner.com/2026/10/22/garmin-personal-api/)
- [Garmin acquires TrainingPeaks & TrainHeroic](https://www.garmin.com/en-US/newsroom/press-release/corporate/garmin-acquires-trainingpeaks-and-trainheroic-leading-endurance-and-strength-training-platforms-for-athletes-and-coaches/)

**Polar, COROS, Suunto**
- [Polar AccessLink API v3](https://www.polar.com/accesslink-api/)
- [COROS: Connect your data](https://support.coros.com/hc/en-us/articles/53181260265492-Connect-Your-Data)
- [Tredict: COROS training sync](https://www.tredict.com/blog/coros_training_sync/)
- [COROS × Wahoo partnership](https://coros.com/stories/press-release/c/coros-wahoo-partnership)
- [Suunto API Zone FAQ](https://apizone.suunto.com/faq)
- [Suunto workout upload API](https://apizone.suunto.com/how-to-workout-upload)

**Apple and Google**
- [Apple WorkoutKit](https://developer.apple.com/documentation/workoutkit)
- [WWDC23: Build custom workouts with WorkoutKit](https://developer.apple.com/videos/play/wwdc2023-10016)
- [Health Connect: exercise routes](https://developer.android.com/health-and-fitness/health-connect/features/exercise-routes)
- [Health Connect: training plans](https://developer.android.com/health-and-fitness/health-connect/features/training-plans)
- [Google Health API release notes (Fitbit shutdown dates)](https://developers.google.com/health/release-notes)

**Runners and the market**
- [Frandsen et al., BJSM 2025: single-session spikes](https://pure.au.dk/portal/en/publications/how-much-running-is-too-much-identifying-high-risk-running-sessio/)
- [Utrecht "Start to Run" dropout cohort](https://dspace.library.uu.nl/handle/1874/392417)
- [Runna revamps beginner plans](https://itbrief.co.uk/story/runna-revamps-beginner-plans-with-flexible-guidance)
- [Strava acquires Runna](https://the5krunner.com/2025/04/17/strava-acquires-runna-training-app/)
- [Runstreet: best running apps 2026](https://www.runstreet.com/blog/best-running-apps)
- [Sahha: aggregator comparison (Terra/ROOK/Thryve)](https://sahha.ai/compare/terra-alternatives/)
