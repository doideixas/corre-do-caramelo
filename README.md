# Corre do Caramelo!

[Jogar no navegador](https://doideixas.github.io/corre-do-caramelo/)

Jogo 3D para celular e computador, baseado no protótipo enviado pelo usuário e na direção de arte aprovada. A moto acelera automaticamente; o jogador desvia de obstáculos, usa uma buzina com sustos engraçados e conclui entregas para ganhar moedas e mais tempo.

## Controles

No celular, deslize sobre a rua ou segure os botões de direção. Segure FREIO para parar. Toque em BIBI para buzinar e em ENTREGAR quando chegar ao local marcado.

No computador: setas esquerda/direita ou A/D para pilotar; seta para baixo ou S para frear; espaço para buzinar; E ou Enter para entregar; P ou Esc para pausar; M para controlar o som.

A buzina não causa dano. O caramelo tem cinco reações cômicas e depois volta à perseguição. Pedestres recebem passagem; não há colisão da moto com a Dona Lurdes. A bola pode entrar na pista, mas a turma da pelada fica na calçada. Frear perto do vendedor de picolé recupera a integridade da moto e concede mais tempo. Recorde salvo neste navegador.

## Conteúdo

Modelos 3D estilizados construídos no código, com motoboy e caramelo seguindo a paleta e características das artes aprovadas; caminhão de lixo, lixeira, Dona Lurdes, turma da pelada, Seu Nilo, carrinho de feira, perua, Mingau e obra. As ilustrações completas também aparecem no álbum do bairro. Os modelos são uma adaptação simplificada para tempo real, não arquivos esculpidos a partir das ilustrações.

## Publicação

O diretório `dist/` contém o jogo completo em arquivos estáticos. Faça upload de **todo o conteúdo de dist**, mantendo a pasta `artes/`, para o caminho desejado da hospedagem. O `index.html` deve ficar na raiz do caminho publicado. Pode ser hospedado em uma subpasta e não depende de APIs, banco de dados, chaves ou CDNs externas. Os arquivos JavaScript e CSS recebem nomes com versão para evitar que o navegador carregue uma versão antiga. Recomenda-se servir por HTTP/HTTPS. O pacote também usa script clássico para permitir abrir o HTML extraído no computador, sujeito ao suporte do navegador local a WebGL e arquivos locais.

O destino original doideixas.com foi bloqueado pela rede. A pedido do usuário, o projeto também foi preparado para GitHub Pages: publique a pasta `docs/` da branch `codex/game`. Para atualizar o jogo, rode `pnpm build`, depois `node prepare-pages.mjs` e envie as alterações dessa pasta. A forma de upload para o painel de doideixas.com ainda não pôde ser verificada.

## Desenvolvimento

Node.js e pnpm. Instale com `pnpm install`, gere com `pnpm build` e abra a prévia com `pnpm preview` em http://127.0.0.1:4173. Caso o gerenciador solicite autorização do build de esbuild, permita apenas o pacote esbuild da instalação oficial. Valide tipos com `pnpm check`, regras com `pnpm test` e modelos com `node check-models.mjs`.

O código inicial de regras, sons e parte da simulação/cenário veio do ZIP enviado pelo usuário. Arte conceitual gerada na conversa; dependências abertas React e Three.js. As bibliotecas têm licenças MIT.
