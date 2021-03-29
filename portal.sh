#!/bin/bash
function pt () {
  OUTPUT=`portal $@`
  if [ $? -eq 2 ]
    then cd "$OUTPUT"
    else echo "$OUTPUT"
  fi
}
