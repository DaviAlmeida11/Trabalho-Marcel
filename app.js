/**************************************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel por calcular validar media escolares
 * Autor:  Davi 
 * Data: 05/08/2025
 * versão: 1.0
 *****************************************************************************************************************************************************************************/

const validarJuros = require('./modulo/media')

const calcularJuros = require('./modulo/media')

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('digite o seu nome : ', function (nome1) {
    let nomeCliente = String(nome1).toUpperCase()

    entradaDeDados.question('digite o nome do Produto : ', function (nomeProduto1) {
        let nomeDoProduto = String(nomeProduto1).toUpperCase()

        entradaDeDados.question('Digite o valor do capital: ', function (capital1) {
            let capital = Number(capital1)

            entradaDeDados.question('Digite a taxa de juros : ', function (taxa1) {
                let taxa = Number(taxa1)

                entradaDeDados.question('Digite o tempo  : ', function (tempo1) {
                    let tempo = Number(tempo1)

                    entradaDeDados.question('Digite o período : ', function (periodo1) {
                        let periodo = periodo1


                        let resultado = calcularJuros.calcularJuros(capital, taxa, tempo, periodo);
                        console.log(`
                    ******************* Space.Davi *******************
                    
                    Muito obrigado por realizar a sua compra conosco Sr(a) ${nome1},
                    
                    A compra do produto ${nomeProduto1} tem um valor de: R$ ${resultado}.
                    
                    Muito obrigado por escolher a Space.Davi.
                    
                    ******************************************************
                    `)



                    })
                })

            })
        })
    })
})
