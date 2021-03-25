import * as readline from 'readline'
import * as fs from "fs";
import {CommandArgs} from "../index";

// const matcher = new RegExp(`^${value.label}`)
interface ReadLineResult {
  isMatch: boolean;
  line: string;
}

export function hasMatchedTextInReadLines(path:string, matcher: (line: string) => RegExpMatchArray): Promise<ReadLineResult> {
  return new Promise( (resolve) => {
    const rs = fs.createReadStream(path)
    const rl = readline.createInterface({
      input: rs
    })
    let isMatch = false
    rl.on('line', (line: string)=>{
      const result = matcher(line)
      if (result.length > 0) {
        isMatch = true
        return resolve({
          isMatch,
          line
        })
        rl.close()
      }
    }).on('close', () => {
      resolve({
        isMatch: false,
        line: ''
      })
    })
  })
}

export function writeFileEffect(path:string, value: CommandArgs) {
  fs.appendFile(path, `${value.label} ${value.dir}\n`, () => {
    console.log(`Append ${value.label} ${value.dir}`)
    process.exit(0)
  })
}
