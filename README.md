# 📝 Blog - Projeto Front-end com React + Vite

Este é um projeto de front-end para um **Blog**, desenvolvido com [React](https://react.dev/) e [Vite](https://vitejs.dev/) para garantir um ambiente de desenvolvimento rápido e moderno. O objetivo é servir como uma interface simples e funcional para exibição de postagens, com foco em performance e boa estrutura de código.

> 🚀 Deploy realizado com sucesso na [Netlify](https://www.netlify.com/).

---

## 📌 Índice

- [🔍 Sobre o Projeto](#-sobre-o-projeto)

- [🎯 Objetivo](#-objetivo)

- [⚙️ Tecnologias Utilizadas](#-tecnologias-utilizadas)

- [📦 Requisitos](#-requisitos)

- [📥 Instalação e Execução](#-instalação-e-execução)

- [🏗️ Build para Produção](#️-build-para-produção)

- [🌐 Deploy](#-deploy)

---

## 🔍 Sobre o Projeto

Este projeto foi criado como parte de um exercício prático de desenvolvimento front-end. Ele simula um blog simples onde usuários podem visualizar postagens obtidas da API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

**Funcionalidades principais:**

- Listagem paginada de posts

- Visualização detalhada de posts em modal

- Design responsivo com Tailwind CSS

- Paginação intuitiva

- Animações e transições suaves

- Paleta de cores moderna personalizável

- Deploy contínuo com Netlify

---

## 🎯 Objetivo

Este projeto tem como objetivo principal:

1. Demonstrar boas práticas de desenvolvimento com React e Vite

2. Criar uma interface moderna e responsiva usando Tailwind CSS

3. Implementar consumo de API externa (JSONPlaceholder)

4. Mostrar funcionalidades essenciais como paginação e modais

5. Servir como base para projetos mais complexos

6. Exemplificar o fluxo completo de desenvolvimento até deploy

---

## ⚙️ Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de UI

- [Vite](https://vitejs.dev/) - Ferramenta de desenvolvimento front-end rápida

- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário

- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- [Netlify](https://www.netlify.com/) - Plataforma de deploy e hospedagem

- [Git](https://git-scm.com/) - Controle de versão

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API de dados fictícios

---

## 📦 Requisitos

Antes de rodar o projeto localmente, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: 18.x ou superior)

- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

- [Git](https://git-scm.com/) (para clonar o repositório)

---

## 📥 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

```bash

# Clone o repositório

git clone https://github.com/Daniel-leite064/front-eng.git

# Acesse a pasta do projeto

cd front-eng

# Instale as dependências

npm install

# ou

yarn install

# Inicie o servidor de desenvolvimento

npm run dev

# ou

yarn dev

```

Após executar estes comandos, o servidor de desenvolvimento será iniciado e o aplicativo estará disponível em:

[http://localhost:5173](http://localhost:5173)

---

## 🏗️ Build para Produção

Para criar uma versão otimizada para produção, execute o seguinte comando:

```bash

npm run build

# ou

yarn build

```

Este comando irá:

1. Otimizar os assets (imagens, CSS, JS)

2. Minificar os arquivos JavaScript e CSS

3. Realizar tree-shaking para remover código não utilizado

4. Gerar arquivos estáticos na pasta `dist/`

Após o build, você pode pré-visualizar a versão de produção localmente com:

```bash

npm run preview

# ou

yarn preview

```

O aplicativo estará disponível em:

[http://localhost:4173](http://localhost:4173)

---

## 🌐 Deploy

O deploy deste projeto foi realizado na [Netlify](https://www.netlify.com/). Para refazer o deploy ou implantar em seu próprio ambiente:

### Passos para Deploy no Netlify

1. Faça login no [Netlify](https://app.netlify.com/)

2. Selecione "Add new site" > "Import an existing project"

3. Conecte seu repositório do GitHub/GitLab

4. Configure as opções de build:

- **Build command:** `npm run build`

- **Publish directory:** `dist`

5. Clique em "Deploy site"

### Configuração Adicional (opcional)

Adicione um arquivo `netlify.toml` na raiz do projeto para configurações avançadas:

```toml

[build]

command = "npm run build"

publish = "dist"

[[redirects]]

from = "/*"

to = "/index.html"

status = 200

```

Após o deploy, seu site estará disponível em um URL do Netlify (ex: `https://seu-site.netlify.app`).