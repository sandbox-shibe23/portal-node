import type {AppOptions, CommandArgs} from "./index";
import {readLineEffect, writeFileEffect} from "./lib/readline";

export async function add(value:CommandArgs, appOptions: AppOptions){
  if (!value.label || !value.dir) {
    throw new Error(`Invalid Parameters. ${value.label} ${value.dir}`)
  }

  let isMatch = false
  await readLineEffect(appOptions.PORTAL_FILE, (line, rl) => {
    const matchText = line.match(new RegExp(`^${value.label}`)) || []
    if (matchText.length > 0) {
      isMatch = true
      rl.close()
    }
  })
  if (!isMatch) {
    writeFileEffect(appOptions.PORTAL_FILE, value)
  }else{
    console.log(`${value.label} is already exists.`)
  }
}

