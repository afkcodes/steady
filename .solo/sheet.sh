#!/bin/zsh
# usage: .solo/sheet.sh <out-name> img1 img2 ... (paths relative to renders/) — 3 across
cd ${0:A:h}/..; OUT=$1; shift
H=".solo/sheet-$OUT.html"
{ print -r -- '<!doctype html><html><body style="margin:0;background:#555;display:grid;grid-template-columns:repeat(3,390px);gap:6px;width:1182px">'
  for f in "$@"; do print -r -- "<img src=\"../renders/$f\" style=\"width:390px;display:block\">"; done
  print -r -- '</body></html>'; } > $H
python3 ~/.claude/skills/design-unslopped/scripts/render.py $H renders/sheet-$OUT.png --width 1182 >/dev/null 2>&1; echo renders/sheet-$OUT.png
