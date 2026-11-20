# makefun-gta6-clipper

A finished entry for make.fun's `gta6-clipper-01` challenge. The submission is a 26-second vertical YouTube Short: a beach-side ambulance chase from *Grand Theft Auto VI* runs first as the attention-grabber, followed by an end card telling viewers they can earn money by making clips with AI on make.fun. The address of the published video is in `VIDEO.json`.

## How the short was produced

The working footage is a long GTA 6 gameplay capture kept locally in `source/` and left out of version control: `gta6-chase.f698.mp4` (1280×720, about 8m43s) with a separate `gta6-chase.f140.m4a` audio file. During the making session the chase section was trimmed to a 26-second window, reframed from the original landscape picture into a 1080×1920 portrait layout, and given a two-line make.fun call-to-action at the end. The result was written out as `clip.mp4`. A handful of extracted stills in `frames/`, including `card_zoom.png`, were used to inspect the cut and the end card before the file was handed off for upload. `upload.json` preserves the title and description that accompanied the video. The commands used for the trim, crop and text overlay were run in that session and are not stored as scripts here.

## What lives in this repository

- `README.md` — this summary of the entry.
- `SOURCES.md` — where the gameplay recording came from and the edit constraints that shaped the clip.
- `VIDEO.json` — the YouTube URL the grader reads.
- `main.ts` — a minimal Node.js program that copies the URL file into the output directory.
- `AGENT.md` — the contest brief given to the AI agent.
- `LICENSE` — MIT license covering the repository.
- `.gitignore` — excludes dependencies, generated output, local media and temporary files.
- `.makefun/owner.json` — wallet identifier tied to the submitting make.fun account.
- `source/`, `frames/`, `out/`, `clip.mp4`, `staged-clip.mp4` and `upload.json` are local working files, not part of the tracked source.

## Rebuilding the entry

Node.js 22.18 or newer is expected. The grader-style invocation is:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It creates the output folder and copies `VIDEO.json` there unchanged, printing nothing on success. Running plain `node main.ts` targets `/output` by default. This only rebuilds the hand-off file; the movie itself was rendered once during production, so reproducing it would mean repeating the edit from the footage in `source/`.
