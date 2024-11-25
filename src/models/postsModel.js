import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// **Importante:** Certifique-se de que o arquivo dbconfig.js tenha a extensão .js

// Conecta ao banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts
export async function getTodosPosts(){
    // Obtém o banco de dados "imersao" da conexão
    const db = conexao.db("imersao");
    //Obtém a coleção "post" do banco de dados
    const colecao = db.collection("post");
    //Busca todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}

//Função assíncrona para criar um post
export async function criarPost(novoPost) {
    // Obtém o banco de dados "imersao" da conexão
    const db = conexao.db("imersao");
    //Obtém a coleção "post" do banco de dados
    const colecao = db.collection("post");
    //Insere o documento "novoPost" na coleção "post"
    return colecao.insertOne(novoPost)
    
}

//Função assíncrona para atualizar um post
export async function atualizarPost(id, novoPost) {
    // Obtém o banco de dados "imersao" da conexão
    const db = conexao.db("imersao");
    //Obtém a coleção "post" do banco de dados
    const colecao = db.collection("post");
    //guarda no objeto o id do post que deve ser atualizado
    const objID = ObjectId.createFromHexString(id);
    //
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
    
}

