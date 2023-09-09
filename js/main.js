$(document).ready(function() {
    const masks = {
        telefone: '(00) 0 0000-0000',
        email: "A",
        cpf: '000.000.000-00',
        cep: '00000-000'
    };

    const validationRules = {
        nome: { required: true },
        email: { required: true, email: true },
        telefone: { required: true },
        cpf: { required: true },
        endereco: { required: true },
        cep: { required: true }
    };

    const validationMessages = {
        nome: 'Por favor, digite seu nome completo',
        email: 'Por favor, digite seu email',
        telefone: 'Por favor, digite seu telefone',
        cpf: 'Por favor, digite o seu CPF',
        endereco: 'Por favor, digite seu endereço',
        cep: 'Por favor, digite seu CEP'
    };

    Object.keys(masks).forEach(key => {
        if (key === 'email') {
            $('#' + key).mask(masks[key], {
                translation: {
                    "A": { pattern: /[a-z@\-.+]/, recursive: true }
                }
            });
        } else {
            $('#' + key).mask(masks[key]);
        }
    });

    $('form').validate({
        rules: validationRules,
        messages: validationMessages,
        submitHandler: function(form) {
            console.log(form);
            alert("Formulario enviado");
            $('form')[0].reset(); // Adicionado para limpar o formulário após o envio
        },
        invalidHandler: function(event, validator) {
            const invalidFields = validator.numberOfInvalids();
            console.log(invalidFields);
            if (invalidFields) {
                alert(`Existem ${invalidFields} campos incorretos`);
            }
        }
    });
});
