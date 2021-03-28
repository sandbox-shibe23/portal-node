import {readLineEffect} from "./lib/readline";
import type {AppOptions, CommandArgs} from "./index";

export async function go (value:CommandArgs, appOptions: AppOptions){
  if (!value.label) {
    throw new Error(`Invalid Label. ${value.label}`)
  }

  let result = {
    isMatch: false,
    line: ''
  }
  await readLineEffect(appOptions.PORTAL_FILE, (line, rl) => {
    const matchText = line.match(new RegExp(`^${value.label}`)) || []
    if (matchText.length > 0) {
      result.isMatch = true
      result.line = line
      rl.close()
    }
  })

  if (result.isMatch) {
    const [_, path] = result.line.split(' ')
    // shell側にpathとexitコードを渡す
    console.log(path)
    process.exit(2)
  }else{
    console.log(`Does not Match ${value.label}`)
  }
}
