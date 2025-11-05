#!/usr/bin/env bash
set -euo pipefail

# Merge 'about' into 'master' safely and push to origin.
# Usage: run from repository (this script uses repo root relative path).

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

# Ensure we're in a git repo
if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Not a git repository: $REPO_ROOT"
  exit 1
fi

# Check working tree is clean
if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree is not clean. Commit or stash your changes before merging."
  git status --porcelain
  exit 1
fi

# Fetch origin
echo "Fetching origin..."
git fetch origin

# Checkout master and update
echo "Checking out master and pulling latest..."
git checkout master
# Try fast-forward pull
if ! git pull --ff-only origin master; then
  echo "Could not fast-forward pull master from origin. Resolve this manually before merging."
  exit 1
fi

# Merge about
echo "Merging 'about' into 'master'..."
if git merge --no-ff about -m "Merge branch 'about' into master"; then
  echo "Merge succeeded. Pushing to origin..."
  git push origin master
  echo "Merge and push complete."
  exit 0
else
  echo "Merge failed (conflicts). Please resolve conflicts manually." >&2
  exit 1
fi
