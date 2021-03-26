import {hasMatchedTextInReadLines} from "./lib/readline";
import type {AppOptions, CommandArgs} from "./index";

export async function go (value:CommandArgs, appOptions: AppOptions){
  const { isMatch, line } = await hasMatchedTextInReadLines(appOptions.PORTAL_FILE, (line) => {
    return line.match(new RegExp(`^${value.label}`)) || []
  })
  if (isMatch){
    const [_, path] = line.split(' ')
    // shell側にpathとexitコードを渡す
    console.log(path)
    process.exit(2)
  }else {
    console.log(`Does not Match ${value.label}`)
  }
}
