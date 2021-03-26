import {exec} from "child_process";
import {promises as fs} from "fs";
import * as os from "os";
import * as path from "path";
import {add} from "./add";
import {go} from "./go";

const [, , command, label, dir] = process.argv
type Command = string | null;

// TODO: Windows対応
const filePath = process.platform == 'win32'
  ? path.join(process.env.APPDATA!, 'Portal', 'portal.dat')
  : path.join(os.homedir(), '.portal');

export interface CommandArgs {
  label: string | null,
  dir: string | null
}

const commandArgs: CommandArgs = {
  label,
  dir
}

export interface AppOptions {
  PORTAL_FILE: string
}

const appOptions = {
  PORTAL_FILE: filePath
}

async function main (command: Command, commandArgs: CommandArgs, appOptions: AppOptions) {
  if (!command) {
    return showAllCommands()
  }
  switch (command) {
    case 'go':
      go(commandArgs, appOptions)
      break;
    case 'add':
      add(commandArgs, appOptions)
      break;
  }
}

async function readOrCreateFile(appOptions: AppOptions):Promise<Buffer | void> {
  try {
    return await fs.readFile(appOptions.PORTAL_FILE)
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('portal file does not exist. create...')
      return await fs.writeFile(appOptions.PORTAL_FILE, '', { flag: 'w' }).catch((err) => {
        console.log('writeFileError', err)
      })
    }
  }

}

function showAllCommands(){
  console.log("portal go     [label]")
  console.log("portal add    [label] [dir]")
  console.log("portal remove [label]")
  console.log("portal list")
}

main(command, commandArgs, appOptions)
