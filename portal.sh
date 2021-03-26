#!/bin/bash
function portal () {
  OUTPUT=`node dist/index.js $@`
  if [ $? -eq 2 ]
    then cd "$OUTPUT"
    else echo "$OUTPUT"
  fi
}
