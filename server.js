// 
import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
//servir arquivos estaticos
app.use(express.static("uploads"))

routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
