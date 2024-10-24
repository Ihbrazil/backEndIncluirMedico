import pool from "./conexao.js";

export async function cadastraMedico(nome, email, telefone, descricao) {
    const conexao = await pool.getConnection();
 
    const resposta = await conexao.query("INSERT INTO medicos (nome, telefone, email, descricao) VALUES (?, ?, ?, ?)", [nome, telefone, email, descricao]);

    conexao.release();
 
    return resposta;
 }