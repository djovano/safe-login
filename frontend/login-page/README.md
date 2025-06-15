# SafeLogin

Um sistema simples e seguro de autenticação com **React + Node.js + JWT**, com:

- Controle de acesso
- Criptografia de senhas com `bcrypt`
- Autenticação com tokens `JWT`
- Validação de entradas
- Tratamento de erros
- Integração frontend/backend

---

##  Estrutura de Pastas

SafeLogin/
├── frontend/ → Interface feita em React
└── backend/ → API Node.js com Express e autenticação JWT

## Como Rodar o Projeto

 Backend

cd backend
npm install
Crie um arquivo .env com o seguinte conteúdo:

JWT_SECRET=meu_token_seguro_123

 Este segredo será usado para assinar tokens JWT. Mantenha-o seguro.

💻 Frontend

cd ../frontend
npm install

Para rodar o backend:

cd backend
npx nodemon index.js

Para rodar o fronend:

cd frontend
npm start

## Funcionalidades
Tela de login com TailwindCSS

Login com email e senha (armazenados com hash bcrypt)

Retorno de token JWT ao autenticar

Validação de campos obrigatórios

Mensagens de erro amigáveis

Rota privada protegida por token no backend

## Tecnologias
Frontend

React

Tailwind CSS

Backend

Node.js

Express

JWT (jsonwebtoken)

Bcrypt (bcrypt)

Dotenv

CORS
