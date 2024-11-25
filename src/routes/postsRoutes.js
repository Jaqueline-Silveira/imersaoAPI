import express from "express";
import multer from "multer";
import cors from "cors";
import {listarPosts , postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js";

//objeto de opções p/ CORS
const corsOptions = {
  //link que se quer conectar
  origin: "http://localhost:8000",
  //Status Code
  optionsSuccessStatus: 200
}

//Configurações especificas do Windows de arquivos para salvar a imagem na pasta criada pelo multer
// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo por simplicidade
      cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
    }
  });

//Passa um objeto de configuração para o Multer. A propriedade dest especifica o diretório onde os arquivos enviados serão armazenados. Neste caso, os arquivos serão salvos na pasta ./uploads relativa ao diretório onde o script está sendo executado.//
// Cria uma instância do middleware Multer
const upload = multer({ storage: storage });

const routes = (app) => {
     // Permite que o servidor interprete corpos de requisições no formato JSON
    app.use(express.json());
    // Permite configurar o compartilhamento de recursos entre diferentes origens; Chama a configuração realizada acima.
    app.use(cors(corsOptions));
    //Rota para buscar um post (.get), e um controler para lista 
    app.get("/posts", listarPosts);
    //Rota para criar um post (.post) e um controler para criar
    app.post("/posts", postarNovoPost);
    //Rota para criar/carregar um arquivo
    app.post("/upload", upload.single("imagem"), uploadImagem)
    //rota para atualizar o post com a imagem
    app.put("/upload/:id", atualizarNovoPost)
}

export default routes;

// .post para criar/enviar uma informação, são os mesmos parametros e rotas
// .get para pegar uma informação
// .put para atualizar as informaçoes no post e para usar o gemini