import type {AppOptions, CommandArgs} from "./index";
import {hasMatchedTextInReadLines, writeFileEffect} from "./lib/readline";

export async function add(value:CommandArgs, appOptions: AppOptions){
  const hasLabel = await hasMatchedTextInReadLines(appOptions.PORTAL_FILE, (line) => {
    return line.match(new RegExp(`^${value.label}`)) || []
  })
  if (!hasLabel) {
    writeFileEffect(appOptions.PORTAL_FILE, value)
  }else{
    console.log(`${value.label} is already exists.`)
  }
}

