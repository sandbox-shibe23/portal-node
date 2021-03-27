import {readLineEffect} from "./lib/readline";
import {AppOptions} from "./index";

export async function list(appOptions: AppOptions){
  await readLineEffect(appOptions.PORTAL_FILE, (line, _) => {
    console.log(line)
  })
}
