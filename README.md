# Random Card Generator

A Full Stack course project for 4Geeks Academy, built from the official [vanillajs-hello](https://github.com/4GeeksAcademy/vanillajs-hello) starter repository.

## Run locally

Requires Node.js 20 or later.

```sh
npm install
npm start
```

Open the address displayed in the terminal. Run `npm run build` to create the production build and `npm run preview` to preview it locally.

## Features

- A random card on page load, with one of four suits and one of thirteen values: 2–10, J, Q, K and A.
- Red hearts and diamonds; black spades and clubs.
- A button to draw a new card.
- Automatic draws every 10 seconds, with an option to turn them off.
- A single size slider from 70% to 160%, preserving the card's 13:18 aspect ratio.
- A responsive layout and keyboard-accessible controls.

Each draw is independent, so the same card can appear again. On narrow screens, the card fits the available width while maintaining its aspect ratio.

## Project structure

- `src/index.html`: page structure and controls.
- `src/style.css`: card appearance and layout.
- `src/card.js`: suits, values and random selection.
- `src/app.js`: DOM updates, event handlers and timer.

The generator uses `Math.floor(Math.random() * array.length)` to choose a valid index from each array. Initialization runs in `window.onload`, as suggested in the exercise. All interface text, card names and source comments are in English.

## Exercise requirements

The project generates a card on page load using the four standard suits and thirteen values, without jokers. It also implements the optional draw button, ten-second timer and size adjustment. The original separate width and height inputs have been replaced with one proportional size slider.

[Course assignment](https://learn.4geeks.com/es/syllabus/spain-fs-pt-139/project/random-card-es#readme).
# card_generator
# card_generator
