#!/bin/zsh
# Inline src/ into one self-contained index.html, plus a bundle for single-screen renders.
DIR=${0:A:h}; cd $DIR
FONTS='<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anybody:ital,wdth,wght@0,50..150,400..900;1,50..150,400..900&family=Hanken+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">'
JS_FILES=(src/icons.js src/data.js src/ui.js src/screens-a.js src/screens-b.js src/screens-c.js)
mkdir -p .solo
{
  for f in $JS_FILES; do cat $f; echo; done
  echo "const SCORES = \`$(cat src/scores.html 2>/dev/null)\`;"
  cat src/app.js
  echo 'render(); if (!window.SOLO && document.fonts) document.fonts.ready.then(render);'
} > .solo/bundle.js
cat src/styles.css src/board.css > .solo/style.css
{
  print -r -- '<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Steady · running app prototype</title>'
  print -r -- $FONTS
  echo "<style>"; cat .solo/style.css; echo "</style>"
  echo '</head><body><div id="app"></div><script>'
  cat .solo/bundle.js
  echo "</script></body></html>"
} > index.html
echo "built index.html ($(wc -c < index.html | tr -d ' ') bytes)"
