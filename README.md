# Kim John Portfolio V3 – Review Candidate

Created from the approved Portfolio V3 plan, dated 2026-10-08. **Preview/review candidate, not a deployed public release.**

## What is included

- Responsive premium portfolio homepage with editorial hero, project previews, services, AI capability section and interactive four-step workflow.
- Six project case studies (SchoolPulse, SmartHouse Budget, SofiCanteen, SafeOrbit, VELO, Project NERO), plus redesigned Harbor Bean website sample.
- User-supplied screenshots optimized to WebP; short real VELO gameplay preview with poster image.
- Existing NERO public video URL preserved.
- Technical VA sample, QA sample, résumé webpage, and contact/GitHub links.
- Café demo with real Pexels-stock photography via Pexels CDN, responsive layouts and working category filters.

## View it

From this folder, run `python3 -m http.server 8000`. Open `http://localhost:8000/` in your browser. From the root of the ZIP, do not open project files from inside the archive; extract it first.

## Publication caution

1. Existing public GitHub Pages site **has not been changed**. Test this release candidate before replacing repository files.
2. Harbor Bean café photos are remote Pexels CDN URLs because this workspace had no direct Internet download access. Check every coffee photo and download/host an optimized licensed copy before final publication. See `docs/PHOTO_CREDITS.md`.
3. Uploaded SafeOrbit shared-location images containing exact coordinates were **not** included in the public asset folder. Only the GPS-off screen is included.
4. All financial and school values are sample/demo records, not real financial or student records. SofiCanteen screenshots show initial setup with no data.
5. Harbor Bean is fictional; prices are fictional and there is no checkout/reservation backend. Contact button opens the developer's email.
6. Project NERO is private; the public demo is linked, and planned functionality is not claimed to exist.
7. Links to live PWA demos should be checked for privacy/login requirements before promotion.

## Release checks

- [ ] Confirm Pexels photos load in an online browser, replace with self-hosted optimized files.
- [ ] Run desktop/mobile visual QA and keyboard checks.
- [ ] Verify external demo links and opening behavior.
- [ ] Confirm copy, résumé and public contact details.
- [ ] Compare project status language against current builds.
- [ ] Confirm no real/private location or school/household data.
- [ ] Approve candidate and publish to GitHub Pages with rollback path.

## V3.0.1 mobile QA repair (2026-10-08)

- Corrected oversized SchoolPulse hero preview by resetting its image height and using contain-fit responsive scaling.
- Repaired mobile case-study navigation; compact `← Projects` button replaces the two overlapping desktop links on narrow screens. Contact remains accessible in the footer.
- Changed `Your role:` to `My role:` across all six case studies.
- Updated NERO Tech Channel links to `https://www.youtube.com/@NEROTechChannel` per the channel screenshot supplied by the owner.
- Existing demo content and sensitive-asset protections were retained; public GitHub Pages site not changed.
- Browser rendering checks performed on locally inlined pages; external stock-photo URLs still require an online check.

## V3.2 Cinematic Motion Review Candidate (2026-10-09)

Built from the V3.0.1 mobile-fixed baseline. The public GitHub Pages site **was not modified**.

### Added

- First-visit KJ cinematic reveal (1.18s desktop; 0.87s mobile), skip button, session-only replay prevention, bypass on deep links and reduced-motion preferences.
- Staggered hero entrance for desktop and mobile, including SchoolPulse browser frame reveal.
- Project and section scroll reveals, reading progress and refined navigation feedback.
- Hover-only desktop pointer glow and gentle magnetic hero buttons; no touch-device imitation.
- Animated AI workflow node rail synchronized to the existing user-controlled, keyboard-operable four stages.
- Separate Harbor Bean warm editorial entrance, filtered-menu transition, and conservative desktop photographic parallax.
- Progressive-enhancement CSS: page content stays visible without JavaScript. Observer safeguard checks onscreen content on scrolling.
- Case-study content entrances while preserving V3.0.1 responsive header adjustments and accurate project media.

### Mobile preview (Termux)

```bash
termux-setup-storage
pkg install python unzip -y
mkdir -p ~/portfolio-v32
unzip -o ~/storage/downloads/portfolio_v3_2_cinematic_motion_review.zip -d ~/portfolio-v32
cd ~/portfolio-v32/portfolio-v3-release
python -m http.server 8002
```

Open `http://127.0.0.1:8002/` in your phone browser. Use **8002** to avoid conflict with earlier previews. Close with Ctrl+C.

### Pending human acceptance

- Browser automation could not navigate to local pages in the author's current sandbox (navigation blocked by environment policy). Static syntax, local-link, baseline preservation and ZIP tests are completed separately. This is **not yet a browser-certified release**.
- Test first entry, repeat entry, reduced motion, mobile navigation, project details, photos, VELO playback, AI Workflow Lab, and Harbor Bean menu on the user's actual phone and on desktop.
- Café stock photography still loads from Pexels URLs; test with an internet connection and replace with optimized self-hosted photos before publishing.


## V3.3 - Resume and Cisco training integration (review candidate)
- Added `assets/css/v33.css` and `assets/js/v33.js` (local, no CDN), and home-page sections `#experience` and `#credentials`.
- Added privacy-reviewed certificate image previews only. Source Cisco PDFs and certificate IDs are **NOT** included.
- Added 3 downloadable, text-selectable résumé PDFs and 3 editable DOCX counterparts under `downloads/`.
- Updated résumé webpage, mobile-friendly view/download links, and the navigation. V3.2 motion effects remain intact.
- Employment dates/details are based on supplied career résumés; latest vessel dates should be reconfirmed before applying.
- Marine engineering studies are documented as 2014-2017. Graduation/degree conferral is not established; no unverified degree claim is used.
- Only city/country-level location and the previously public contact email are shown; passport, seaman's book and private residential information are excluded.
- Portfolio not deployed to production; test on Android/Termux and Steam Deck before release.
