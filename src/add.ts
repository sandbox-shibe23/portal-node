import type {AppOptions, CommandArgs} from "./index";
import {hasMatchedTextInReadLines, writeFileEffect} from "./lib/readline";

export async function add(value:CommandArgs, appOptions: AppOptions){
  const {isMatch} = await hasMatchedTextInReadLines(appOptions.PORTAL_FILE, (line) => {
    return line.match(new RegExp(`^${value.label}`)) || []
  })
  if (!isMatch) {
    writeFileEffect(appOptions.PORTAL_FILE, value)
  }else{
    console.log(`${value.label} is already exists.`)
  }
}

