<h1 align="center">
    🧠<br>QuizMaster
</h1>

## 📑 Índice

- [Descrição](#descricao)
- [Tecnologias Utilizadas](#tecnologias)
- [Como Executar](#como-executar)
- [Funcionalidades](#funcionalidade)

<a name="descricao"></a>
## 📚 Descrição

Este projeto é um quiz online em que o usuário pode selecionar entre diversas categorias de perguntas, responder a um conjunto aleatório de questões e acompanhar sua pontuação ao final do quiz. A aplicação utiliza React Router para navegação entre as páginas, gerencia estado com hooks do React, e apresenta uma interface estilizada com Bootstrap e CSS personalizado.

---

<a name="tecnologias"></a>
## 🛠 Tecnologias Utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
</p>

---

<a name="como-executar"></a>
## 💻 Como Executar

### 📦 Pré-requisitos

Verifique se você possui o **Node.js** e o **npm** instalados:

```bash
node -v
npm -v
```

Caso não tenha, instale em: [https://nodejs.org/](https://nodejs.org/)

---

### 🧰 Instalação

1. **Clone o repositório**:

```bash
git clone https://github.com/m4ite/quiz-react-app.git
cd quiz-react-app
```

2. **Instale as dependências**:

```bash
npm install
```

3. **Correção de conflitos de dependências**:

```bash
npm install --legacy-peer-deps
```

```bash
npm install bootstrap
```

---

### ▶️ Executando o Projeto

Para inciar o servidor:

```bash
npm start
```

---

<a name="funcionalidade"></a>
## 🚧 Funcionalidades

- Seleção de categorias para o quiz
- Exibição de perguntas com múltiplas alternativas
- Controle de respostas e cálculo da pontuação automaticamente
- Página de resultados com estatísticas de acertos, erros e percentual final
- Navegação entre as páginas com React Router

