const NotaDoAluno1 = 8
const NotaDoAluno2 = 4
const NotaDoAluno3 = 7

const media = (NotaDoAluno1 + NotaDoAluno2 + NotaDoAluno3) / 3

console.log(media)

if (media >= 7){
    console.log(`A Turma foi Aprovada com a Média de ${media}`)
}
else{
    console.log(`Parabéns, Vocês Foram Reprovados com média de ${media}`)
}