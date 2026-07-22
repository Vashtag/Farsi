# Farsi Fun — project notes

A single-page Persian learning web app for a specific learner (Nicole).
Core files: `index.html` (app + logic + styles), `words.js` (vocabulary +
categories), `audio/`, `images/`.

## Vocabulary (`words.js`)
- `words` is the ordered vocabulary array; `CATS_MAP` holds each word's
  categories. **They must stay index-aligned** (same length; entry `i` in
  `CATS_MAP` describes `words[i]`). Append to both when adding words.
- Each word: `{fa, en, translit, emoji, audio, image, cats}`. Keep `translit`
  unique. Photos live in `images/<slug>.png|jpg`; `emoji` is the fallback.
- Categories surfaced in the UI: greetings, food, cooking, travel, animals,
  body, clothes, home, nature.

## Conventions when adding new words (follow every time)
1. **Add sentences that use the new words.** The lesson runner adds
   "complete the sentence" steps to a lesson when one of that lesson's words
   appears as a blank in a sentence (see `SENTENCES` and `lessonSentences()`
   in `index.html`). Each new word should appear as a blank in at least one
   sentence so it gets reinforced in learning mode. Sentences are phonetic
   (transliteration), each with a `blanks:[{fa,translit,en}, …]` list; a
   blank's `translit` must be an exact substring of the sentence `translit`
   (and its `fa` a substring of the sentence `fa`).
2. **New words must NOT be unlocked yet.** Words unlock through the release
   progression (`RELEASE_BASE` prefix, then `RELEASE_BATCH` at a time as the
   learner masters what's released). The `travel` category is always-unlocked
   only for the *original* vocabulary, capped by `TRAVEL_ALWAYS_MAX` in
   `isReleased()` — so newly added words (any category) stay gated until the
   learner reaches them. If you bump the word count, do not raise that cap.

## Release / unlock model (`index.html`)
- `isReleased(i)`: released if `i < state.releasedCount` (starts at
  `RELEASE_BASE`), or an original travel word (`i < TRAVEL_ALWAYS_MAX`).
- Lessons are derived in groups of `LESSON_SIZE` from `words`; journey nodes
  lock until their words are released.

## Verifying changes
- Chromium + Playwright are preinstalled (`/opt/pw-browsers/chromium`,
  `NODE_PATH=/opt/node22/lib/node_modules`). Load `index.html` over `file://`
  to smoke-test; the manifest `fetch()` CORS errors on `file://` are expected
  and unrelated to app logic.
