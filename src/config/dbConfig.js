import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;
// Envolve o código de conexão em um bloco try-catch para capturar possíveis erros durante a conexão. Se ocorrer um erro, o código dentro do bloco catch será executado.
    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        //Chama o método connect() da instância do cliente para estabelecer a conexão com o banco de dados. A palavra-chave await indica que a execução da função será pausada até que a conexão seja estabelecida ou ocorra um erro.
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}
//O código acima cria uma função que serve como uma ponte para conectar seu programa a um banco de dados MongoDB. Essa função tenta estabelecer uma conexão e, se tudo der certo, permite que você faça diversas operações no banco, como adicionar, buscar, atualizar ou excluir dados.