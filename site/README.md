# A Walk Through Your Life

A premium single-page birthday website built with HTML, CSS, and JavaScript.

## What is included

- Elegant hero section with sequential typed lines
- Chapter structure for childhood moments, timeline, emotional messages, affirmations, favorites, and more
- Interactive photo lightbox and video modal
- Glassmorphism cards, soft gradients, and warm design
- Music player with rotating vinyl animation
- Cursor sparkle particles and scroll progress bar
- Dark/light theme toggle, customizable letter, and final surprise animation

## How to use

1. Open `site/index.html` in your browser, or serve the `site` folder with a local server.
2. Replace placeholder image URLs in `site/script.js` with your own photos.
3. Customize the letter text inside `site/index.html` at the `#letter-paper` element.
4. Update `memoryItems`, `timelineItems`, `affirmationText`, and `finalText` in `site/script.js`.
5. Replace the audio source in `site/script.js` with your favorite song or audio file.

## Local preview

From the `site` folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

## Notes

- The site is fully responsive and mobile-friendly.
- All content is easy to replace and personalize.
- Use `assets/` to store local images and audio if you prefer not to rely on remote URLs.
