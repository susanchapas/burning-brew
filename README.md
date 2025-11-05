# burning-brew
coffee that defies expectations

## Development

Serve the site locally with auto-reload:

```bash
npm install
npm start
# then open http://127.0.0.1:8080
```

## Build (minify JS/CSS)

This project uses `esbuild` to minify the site assets into `dist/`.

```bash
npm run build
```

The build command will create `dist/js/scripts.min.js` and `dist/css/styles.min.css`.

## Notes

- `npm start` runs `live-server` for auto-reload during development.
- `npm run build` creates a small `dist/` directory with minified assets.
