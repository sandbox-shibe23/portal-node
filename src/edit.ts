import {AppOptions, CommandArgs} from "./index";
import * as fs from "fs/promises";

export async function edit(value:CommandArgs, appOptions: AppOptions){
  if (!value.label || !value.dir) {
    throw new Error(`Invalid Parameters. ${value.label} ${value.dir}`)
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
  lines[matchedIndex] = `${value.label} ${value.dir}`
  await fs.writeFile(appOptions.PORTAL_FILE, Buffer.from(lines.join('\n')))
  console.log(`Edited ${value.label} ${value.dir}`)
}
