$(document).ready(function() {
    $('#CPF').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#CEP').mask('00000-000');
});

$('#form-cadastrado').submit(function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    $(this)[0].reset();
});
