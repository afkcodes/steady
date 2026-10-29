#!/bin/zsh
# usage: ./render-all.sh <prefix> <theme> id:stage ...
cd ${0:A:h}; PRE=$1; TH=$2; shift 2
for x in "$@"; do ID=${x%%:*}; ST=${x##*:}; ./solo.sh $ID $PRE-$ID-$ST $ST $TH 1 >/dev/null 2>&1; echo "$PRE-$ID-$ST"; done
