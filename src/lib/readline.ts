import * as readline from 'readline'
import * as fs from "fs";
import {CommandArgs} from "../index";

export function readLineEffect(path:string, callback: (line: string, rl:readline.Interface | null) => void): Promise<void> {
  return new Promise( (resolve) => {
    const rs = fs.createReadStream(path)
    const rl = readline.createInterface({
      input: rs
    })
    rl.on('line', (line: string)=>{
      callback(line, rl)
    }).on('close', () => {
      resolve()
    })
  })
}

export function writeFileEffect(path:string, value: CommandArgs) {
  fs.appendFile(path, `${value.label} ${value.dir}\n`, () => {
    console.log(`Append ${value.label} ${value.dir}`)
    process.exit(0)
  })
}
