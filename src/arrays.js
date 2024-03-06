const nomes = ['Maria', 'Joao', 'Pedro', 'Caio', 'Jeymison'];
const notas = [2, 8, 4, 6, 9];
const alunos = [];

for (let i = 0; i < nomes.length; i++) {
    alunos.push({ nome: nomes[i], nota: notas[i] });
}

function filtroAlunos(alunosAprovados) {
    return alunosAprovados.filter(aluno => aluno.nota >= 6).map(aluno => ({ nome: aluno.nome, nota: aluno.nota }));
}

const alunosAprovados = filtroAlunos(alunos);
console.log("Alunos aprovados são:");
alunosAprovados.forEach(aluno => console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`));
