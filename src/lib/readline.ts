import * as readline from 'readline'
import * as fs from "fs";
import {CommandArgs} from "../index";

// const matcher = new RegExp(`^${value.label}`)

export function hasMatchedTextInReadLines(path:string, matcher: (line) => RegExpMatchArray): Promise<boolean> {
  return new Promise<boolean>( (resolve) => {
    const rs = fs.createReadStream(path)
    const rl = readline.createInterface({
      input: rs
    })
    let isMatch = false
    rl.on('line', (line: string)=>{
      const result = matcher(line)
      if (result.length > 0) {
        isMatch = true
        rl.close()
      }
    }).on('close', () => {
      return resolve(isMatch)
    })
  })
}

export function writeFileEffect(path:string, value: CommandArgs) {
  fs.appendFile(path, `${value.label} ${value.dir}\n`, () => {
    console.log(`Append ${value.label} ${value.dir}`)
    process.exit(0)
  })
}
