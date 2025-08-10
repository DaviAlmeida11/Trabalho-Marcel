/**************************************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel por calcular validar media escolares
 * Autor:  Davi 
 * Data: 05/08/2025
 * versão: 1.0
 *****************************************************************************************************************************************************************************/





function calcularJuros(capital1, taxa1, tempo1, periodo1, nome1, nomeProduto1) {
    let capital = Number(capital1)
    let taxa = Number(taxa1) 
    let tempo = Number(tempo1)
    let periodo = Number(periodo1)
    let nome = String(nome1)
    let nomeProduto = String(nomeProduto1)


    let resultado = capital * taxa * tempo * periodo;
    return resultado.toFixed(2)

}

    function validarJuros(capital1, taxa1, tempo1, periodo1, nome1, nomeProduto1) {
    let capital = Number(capital1)
    let taxa = Number(taxa1)
    let tempo = Number(tempo1)
    let periodo = Number(periodo1)
    let nome = String(nome1)
    let nomeProduto = String(nomeProduto1)

        if (isNaN(capital1) || isNaN(taxa1) || isNaN(tempo1) || isNaN(periodo1)) {
            console.log('Erro, coloque números validos!')
            return false
    
        } else if (capital1 == '' || taxa1 == '' || tempo1 == '' || periodo1 == '' || nome1 == '' || nomeProduto1 == '') {
            console.log('Error')
            return null
    
        } else if (!isNaN(nome1) || !isNaN(nomeProduto1)) {
            console.log('Erro: não pode colocar números em nome e nome do produto !')
            return null
    
    
        } else if (taxa < 0 || taxa > 10) {
            console.log('O resultado foi inserido incorretamente! ')
            return null

        }
        return true
            
              
    
        }
          


module.exports = {
   validarJuros,
   calcularJuros
}






