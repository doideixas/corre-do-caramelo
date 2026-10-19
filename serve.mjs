import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('dist');
const mime = { '.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.json':'application/json','.txt':'text/plain; charset=utf-8' };
http.createServer(async(req,res)=>{
 try {
  const path = resolve(root, '.' + decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if(path!==root && !path.startsWith(root+sep)){res.writeHead(403).end();return;}
  const file=(await stat(path)).isDirectory()?resolve(path,'index.html'):path;
  res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'}).end(await readFile(file));
 }catch{res.writeHead(404).end('Arquivo não encontrado');}
}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
