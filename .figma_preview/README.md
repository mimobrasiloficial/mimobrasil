# Inventário local — Arquivo Figma "Sem título" (MIMO)

fileKey: `hOYTA6wFixdgxlNrEONDNE` · Página: `0:1` ("Page 1") · 19 frames de 1440px

## Conteúdo desta pasta

- `metadata_page1.xml` — árvore completa de metadados (todos os nós, nomes, posições, tamanhos)
- `*.png` — renderizações PNG full-page de 13 telas (referência visual; algumas telas de checkout faltam)
- `assets/` — amostras de assets originais verificadas:
  - `logo_oficial.png` — logo oficial 4167×4167
  - `inicio_foto1.jpeg` — foto 1200×896
  - `produto_bombons_morango.jpeg` — foto de produto 1264×848
  - `sobre_foto1.jpeg` — foto 1152×928

## Telas com preview PNG

inicio, loja, produto (Bombons), criacao, sobre, carrinho, checkout (Dados),
login, favoritos, conta, club (Seu carinho rende), club_convite, cadastro

## Telas SEM preview (pendente — rate limit do plano Starter)

- Checkout • Entrega (`9:43001`)
- Checkout • Pagamento (`9:43179`)
- Checkout • Confirmação (`9:43339`)
- Início • Cabeçalho após rolagem (`9:43720`) — variante de estado, 960px
- Produto • Barra Meio Amargo 70% (`9:41496`) e Caixa Pronta Amor (`9:41326`) — têm estrutura idêntica à de Bombons

## Assets

Todas as imagens são raster fills (JPEG/PNG) extraíveis via `download_assets`;
ícones são SVG extraíveis. URLs de asset são temporárias — serão baixadas
por tela durante a implementação via `get_design_channels`/`download_assets`
(que geram URLs novas a cada chamada). Estimativa: ~70–110 imagens únicas
(compartilhadas entre telas) + ~15 SVGs de ícones + logo.

## Design tokens identificados

- Fontes: EB Garamond (display), Montserrat (UI) — Google Fonts
- Cores: #FFFDF5 (creme), #522F1E (marrom escuro), #CB9F77 (dourado), #E8D0BA (bege)
