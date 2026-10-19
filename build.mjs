import { build } from 'esbuild';
import { mkdir, cp, writeFile, readFile, readdir, unlink } from 'node:fs/promises';
import {createHash} from 'node:crypto';
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
const result=await build({ entryPoints: ['src/main.tsx'], bundle: true, minify: true, sourcemap: false, target: ['es2020'], outfile: 'dist/game.js', external:['./artes/*'], legalComments: 'eof',write:false });
for(const file of await readdir('dist'))if(/^game(?:\.[a-f0-9]{10})?\.(js|css)$/.test(file))await unlink('dist/'+file);
let html=await readFile('index.html','utf8');
for(const output of result.outputFiles){
 const ext=output.path.endsWith('.css')?'css':'js';
 const hash=createHash('sha256').update(output.contents).digest('hex').slice(0,10);
 const name=`game.${hash}.${ext}`;await writeFile('dist/'+name,output.contents);html=html.replace('./game.'+ext,'./'+name);
}
await writeFile('dist/index.html',html);
const pkg = JSON.parse(await readFile('node_modules/three/package.json', 'utf8'));
await writeFile('dist/THIRD-PARTY.txt', `Three.js ${pkg.version} — MIT license; React and React DOM — MIT license.\n`);
console.log('Jogo pronto em dist/ — arquivos estáticos, sem servidor de aplicação.');
