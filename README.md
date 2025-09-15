# Pokédex

Aplicação desenvolvida em **React + TypeScript**, com foco em boas práticas de arquitetura de front-end, componentização e consumo de API.  
A interface consome dados da [PokéAPI](https://pokeapi.co/) e permite **listar, buscar e visualizar detalhes de Pokémons**.

## Tecnologias e Ferramentas

- **React 19** com **TypeScript**
- **Redux Toolkit** para gerenciamento de estado global
- **React Router DOM v7** para navegação
- **Ant Design** para componentes de UI
- **Axios** para requisições HTTP
- **Jest + Testing Library** para testes
- **Prettier + ESLint** para padronização de código
- **PokéAPI** como fonte de dados

## Estrutura do Projeto

src/
├── api/ # Comunicação com API (axios + endpoints)
├── components/ # Componentes reutilizáveis (Card, Tags, Stats etc.)
├── pages/ # Páginas principais (Home e Details)
├── store/ # Redux Toolkit (slices + store)
├── types/ # Definições de tipos TypeScript
├── constants/ # Mapas de cores e constantes globais
└── tests/ # Testes unitários e de integração

## Decisões de Arquitetura

- **Redux Toolkit** para organizar e centralizar fluxos de dados.  
- **Ant Design** para acelerar desenvolvimento de UI.  
- **Separação em camadas**:  
  - `api` → comunicação com PokéAPI  
  - `store` → gerenciamento de estado  
  - `components` → UI desacoplada  
  - `pages` → telas principais  
- **Skeletons** no lugar de spinners para melhor UX.  
- **Mapeamento de cores** dos tipos de Pokémon em `constants/`.  
- **Testes** iniciados com Jest + RTL (Home e Details).  
  > ⚠️ Alguns testes ainda precisam de ajustes por dependências externas (AntD e React Router).


## Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
npm install

npm start
Build de produção
bash

npm run build
Testes
bash

npm test

Funcionalidades
Home

Lista de Pokémons com paginação

Busca por nome (com fallback para lista inicial)

Skeletons durante carregamento

Detalhes

Informações completas (imagem, tipos, habilidades, peso, altura, stats)

Barras visuais para atributos

Tratamento de erro (Pokémon inexistente)