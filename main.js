$(document).ready(function() {
    $('#form').submit(function(event) {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        var tarefaNova = $('#nova-tarefa').val(); // Obtém o valor do campo de texto

        if (tarefaNova !== ' ') { // Verifica se o campo não está vazio
            $('#lista-tarefas').append('<li>' + tarefaNova + '</li>'); // Adiciona a nova tarefa à lista

            $('#nova-tarefa').val(''); // Limpa o campo de texto após adicionar a tarefa
        }
    });

    $(document).on('click', '#lista-tarefas li', function() { // ao clicar na tarefa será riscada automaticamente
        $(this).toggleClass('completed');
    });
});
