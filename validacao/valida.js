function validaNome(nome) {
    const regexNome = /^[a-zA-ZÀ-ÿ\s\-']+$/;

    const isValid = nome.length >= 2 && regexNome.test(nome);
    return isValid;
}

function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValid = regexEmail.test(email);
    return isValid;
}

function validaTelefone(telefone) {
    const regexTelefone = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;
    // telefone brasileiro com DDD e com exatos 15 dígitos (sem o código do país +55)
    const isValid = regexTelefone.test(telefone)
    return isValid;
}

export function validaUsuario(nome, email, telefone) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);
    const telefoneValido = validaTelefone(telefone);

    const usuarioValido = nomeValido && emailValido && telefoneValido;

    if(usuarioValido)   {
        return {status: true, mensagem: ''};
    } else if (!nomeValido)
        {
            return {status: false, mensagem: 'Nome inválido'};
        } else if (!emailValido)
            {
                return {status: false, mensagem: 'Email inválido'};
            } else if (!telefoneValido)
                {
                    return {status: false, mensagem: 'Telefone inválido'};
                }
}