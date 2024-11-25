Imersão API

Este é um projeto de backend desenvolvido em Node.js que permite o gerenciamento de posts, incluindo funcionalidades para listar, criar e atualizar posts. O banco de dados utilizado é o MongoDB, e a arquitetura do código segue o padrão MVC (Model-View-Controller). Além de utilizar o **Google Gemini 1.5-flash**, para análise de imagens e geração de descrições automatizadas e contextuais.
Este é o meu primeiro projeto de backend, desenvolvido durante uma introdução promovida pela Alura.

Estrutura do Projeto

```plaintext
src/
├── config/           # Configurações do banco de dados
├── controllers/      # Controladores da aplicação
├── models/           # Modelos de interação com o banco de dados
├── routes/           # Rotas da aplicação
├── services/         # Serviços de integração com Gemini
└── uploads/          # Diretório para uploads
```

---
Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **MongoDB**: Banco de dados NoSQL.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **MongoDB Driver**: Para comunicação com o banco de dados MongoDB.
- **Gemini**: Para criar as descrições das imagens

---

Configuração do Projeto
1. **Variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do projeto com a seguinte configuração:

   ```env
   STRING_CONEXAO=mongodb+srv://seu_usuario:senha@seu_cluster.mongodb.net/nome_banco
   GEMINI_API_KEY = ***
   ```
