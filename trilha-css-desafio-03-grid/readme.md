# YouTube Interface Layout - CSS Grid

Este projeto é a recriação da interface da página inicial do **YouTube** com base em um Style Guide / exportação de Design System (Figma).

## 🚀 Requisito Chave

- **CSS Grid Exclusivo:** Todo o posicionamento e alinhamento de elementos (cabeçalho, barra lateral, cards e detalhes dos vídeos) foi construído utilizando **apenas CSS Grid**, sem qualquer utilização de Flexbox (`display: flex`).

## 📁 Estrutura do Projeto

- `index.html`: Estrutura semântica HTML5 contendo Header, Sidebar e Main Content com os cards de vídeo.
- `styles.css`: Regras de estilo construídas com CSS Grid (`grid-template-columns`, `grid-template-rows`, `grid-template-areas`, `place-items`, `gap`).
- `README.md`: Documentação explicativa sobre o projeto.

## 🛠️ Especificações Técnicas do Layout

1. **Grid da Página:**
   - Dimensões do container base: `1440px` de largura por `1024px` de altura.
   - Áreas nomeadas (`grid-template-areas`): `header`, `sidebar` e `content`.
2. **Header (Menu Superior):**
   - Altura: `56px`.
   - Divisão em 3 colunas Grid: Ícones à esquerda (`146px`), Campo de busca ao centro (`1fr`), Ícones de ação e perfil à direita (`130px`).
3. **Sidebar (Menu Lateral):**
   - Largura: `218px`.
   - Itens de menu dispostos em linhas auto-dimensionadas com espaçamento vertical de `22px`.
4. **Grade de Vídeos:**
   - 4 colunas fixas de `282px`.
   - Cards com padding de `16px`, thumbnail de `250px × 140.29px` e área de detalhes interna também estruturada em Grid.

## 💻 Como Visualizar

Basta abrir o arquivo `index.html` em qualquer navegador web moderno.