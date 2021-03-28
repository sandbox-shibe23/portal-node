import {AppOptions, CommandArgs} from "./index";
import * as fs from "fs/promises";

export async function remove(value:CommandArgs, appOptions: AppOptions){
  if (!value.label) {
    throw new Error(`Invalid label. ${value.label}`)
  }
  const buffer = await fs.readFile(appOptions.PORTAL_FILE)
  let lines = buffer.toString().split('\n')
  const matchedIndex = lines.findIndex((line) => {
    return line.match(new RegExp(`^${value.label} `))
  })
  if (matchedIndex < 0){
    console.log('No matched label.')
    return
  }
  lines.splice(matchedIndex, 1)
  await fs.writeFile(appOptions.PORTAL_FILE, Buffer.from(lines.join('\n')))
  console.log(`Removed ${value.label}`)
}
