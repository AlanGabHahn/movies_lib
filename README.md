# 🎬 Projeto de Filmes com React e API do TMDB  

Este projeto é um catálogo de filmes desenvolvido com React, utilizando a API do TMDB para obter informações sobre os filmes. O projeto usa **React Router** para navegação e **React Hooks** para gerenciamento de estado.

## 🚀 Tecnologias Utilizadas  

- [React](https://react.dev/)  
- [React Router](https://reactrouter.com/)  
- [React Hooks](https://react.dev/reference/react)  
- [Vite](https://vitejs.dev/)  
- [TMDB API](https://www.themoviedb.org/documentation/api)  

## 📦 Instalação e Uso  

### 🔧 Pré-requisitos  

- Node.js instalado ([Baixe aqui](https://nodejs.org/))  
- Conta e chave de API no [TMDB](https://www.themoviedb.org/)  

### 📥 Clonar o Repositório  

```bash
git clone https://github.com/AlanGabHahn/movies_lib.git
cd movies-lib
```

## 📌 Configuração do Ambiente  

Crie um arquivo `.env` na raiz do projeto e configure as variáveis conforme o modelo abaixo:

```env
    VITE_API_KEY=api_key=SUA_CHAVE_AQUI
    VITE_API=https://api.themoviedb.org/3/movie/
    VITE_SEARCH=https://api.themoviedb.org/3/search/movie
    VITE_IMG=https://image.tmdb.org/t/p/w500/
```

## 🔹 Substitua SUA_CHAVE_AQUI pela sua chave de API do TMDB.

## 📦 Instalar Dependências

```bash
    npm install
```

## ▶️ Rodar o Projeto

```bash
    npm run dev
```

O projeto estará disponível em http://localhost:5173/ ou na porta definida pelo Vite.

### 🛠 Funcionalidades
✅ Listagem de filmes populares
✅ Busca de filmes pelo nome
✅ Exibição de detalhes de cada filme
✅ Navegação entre páginas com React Router

### 📄 Licença
Este projeto é open-source e está sob a licença MIT.