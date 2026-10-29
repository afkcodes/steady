#!/bin/zsh
# Render one screen at 390 with the skill's render.py.
# usage: ./solo.sh <screen> <out-name> [stage=3] [theme=light] [full=1]
DIR=${0:A:h}; cd $DIR
ID=$1; OUT=$2; ST=${3:-3}; TH=${4:-light}; FULL=${5:-1}
FULLJS=$([[ $FULL == 1 ]] && echo true || echo false)
P=".solo/$OUT.html"
print -r -- "<!doctype html><html><head><meta charset=utf-8><link href=\"https://fonts.googleapis.com/css2?family=Anybody:ital,wdth,wght@0,50..150,400..900;1,50..150,400..900&family=Hanken+Grotesk:wght@400;500;600&display=swap\" rel=\"stylesheet\"><link rel=stylesheet href=style.css><style>body{margin:0}</style></head><body><div id=app></div><script>window.SOLO={screen:'$ID',stage:$ST,theme:'$TH',full:$FULLJS}</script><script src=bundle.js></script></body></html>" > $P
DARK=$([[ $TH == dark ]] && echo --dark)
python3 ~/.claude/skills/design-unslopped/scripts/render.py $P renders/$OUT.png --width 390 --slices $DARK 2>&1 | tail -n +1
