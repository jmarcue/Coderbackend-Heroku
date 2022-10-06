import dotenv from 'dotenv';
import minimist from 'minimist';

dotenv.config();

const defPort = process.env.PORT || 8080;
const defMode = 'FORK';

console.log(process.argv.slice(2));

const { port } = minimist(process.argv.slice(2), { alias: { "p": "port" }, default: { "port":  defPort} });
const { mode } = minimist(process.argv.slice(2), { alias: { "m": "mode" }, default: { "mode":  defMode} });

export const serverConfig = {
  MONGO_ATLAS: process.env.MONGO_ATLAS || "",
  MONGO_LOCAL: process.env.MONGO_LOCAL || "",
  PORT: port,
  MODE: mode
};