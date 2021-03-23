import * as readline from 'readline'
import * as fs from "fs";
import type {AppOptions, CommandArgs} from "./index";

export function add(value:CommandArgs, appOptions: AppOptions){
  const rs = fs.createReadStream(appOptions.PORTAL_FILE)
  const rl = readline.createInterface({
    input: rs
  })

  let isEmpty = true

  rl.on('line', (lineString: string)=>{
    const result = lineString.match(new RegExp(`^${value.label}`)) || []

    if (result.length > 0) {
      console.log('This label is already exist.')
      isEmpty = false
      return
    }
  }).on('close', () => {
    if(isEmpty){
      fs.appendFile(appOptions.PORTAL_FILE, `${value.label} ${value.dir}\n`, () => {
        console.log(`Append ${value.label} ${value.dir}`)
        process.exit(0)
      })
    }
  })
}

