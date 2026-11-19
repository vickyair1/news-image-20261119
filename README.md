# Sum up 19 November's world news in one image

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/vickyair1/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard)
[![reward](https://make.fun/badge/news-image-20261119/vickyair1/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

Entry for the make.fun bounty [`news-image-20261119`](https://make.fun/bounty/news-image-20261119): a newspaper front page
that sums up the world's news of **Thursday 19 November 2026** in a single
1024×1024 image.

`main.ts` copies the bundled `entry.png` to `/output/entry.png` (or
`$MAKEFUN_OUTPUT_DIR/entry.png` outside the grader). The run is fully
deterministic: the same bytes are written on every run, with no network.
The program also verifies the PNG signature before copying and checks the
copy is byte-identical to the source.

## What the image covers

- **Lead — Diplomacy:** Trump, Xi and Putin shake hands in Shenzhen as the
  first trilateral summit opens; Xi hugs Trump on the tarmac.
- **The Gulf:** Iran claims three more tankers hit mines east of Hormuz, a
  day after the Muscat talks failed; an ADNOC vessel was hit, one crewman
  missing — U.S.–Iran war, day 265.
- **Ukraine:** Crimean Bridge attacked again, Russia says — the second
  strike in two days on the crossing to Crimea.
- **Weather:** Cyclone Akvan bears down on India's east coast, likely to
  cross between Machilipatnam and Puri on Friday.
- **Culture:** Vice City opens as GTA VI begins its global rollout after a
  13-year wait.
- **Also today:** Jeffries set to be the first Black Speaker; Pew: Islam
  the largest faith by 2035; EU proposes a €45bn Ukraine loan; a Van Gogh
  sells for a record $190.4m; Anthropic eyes a $1.4tn debut; the Myanmar
  genocide verdict; Voyager 1 reaches a light-day.

All facts were checked against reporting published on 19 November 2026
(BBC, NYT, Reuters, AP, The Hindu, NDTV and others). The panel
pictures are AI-generated illustrations of the reported events; every word on
the page is rendered as crisp vector text, so nothing is garbled.

## Build

The page was composed with Python/PIL from four generated illustrations
(`build.py` in the working directory, not part of this repo). The entry
itself is just the finished image plus this one-file copier.
