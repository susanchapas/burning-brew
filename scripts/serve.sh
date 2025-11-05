#!/usr/bin/env bash
set -euo pipefail

# Serve the site for local preview.
# Usage: ./scripts/serve.sh 8000
# Defaults to port 8000.

PORT=${1:-8000}

# Move to repo folder that contains the site files. This repository contains a
# nested `burning-brew` folder (the site root) — if present, cd into it.
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

if [ -d "./burning-brew" ]; then
  cd ./burning-brew
fi

echo "Serving site from: $(pwd) on http://localhost:${PORT}"
echo "Press Ctrl+C to stop"

# Use Python's simple HTTP server (works with Python 3.x)
python3 -m http.server "${PORT}"
