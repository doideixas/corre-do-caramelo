import {build} from 'esbuild';
import {spawnSync} from 'node:child_process';
await build({entryPoints:['src/lib/bairro.test.ts'],bundle:true,platform:'node',format:'esm',outfile:'.checks/bairro.test.mjs',packages:'external'});
const run=spawnSync(process.execPath,['--test','.checks/bairro.test.mjs'],{stdio:'inherit'});process.exitCode=run.status;
