import express from 'express';
import cors from "cors";

import { cadastraMedico } from './servico/cadastroMedico.js';
import { validaUsuario } from './validacao/valida.js';

const app = new express();

app.use(cors());
app.use(express.json());

app.post("/medicos", async (req, res) => {
    const nome = req.body.nome;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const descricao = req.body.descricao;

    const usuarioValido = validaUsuario(nome, email, telefone);

    if (usuarioValido.status) {
        await cadastraMedico(nome, telefone, email, descricao);
        res.status(204).end();
    } else {
        res.status(400).send({mensagem: usuarioValido.mensagem});
    }
});

app.listen(9000, async () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});