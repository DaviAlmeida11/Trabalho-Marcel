/**************************************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel por calcular validar media escolares
 * Autor:  Davi 
 * Data: 05/08/2025
 * versão: 1.0
 *****************************************************************************************************************************************************************************/





function calcularJuros(capital1, taxa1, tempo1, periodo1, nome1, nomeProduto1) {
    let capital = Number(capital1)
    let taxa = Number(taxa1) / 100
    let tempo = Number(tempo1)
    let periodo = Number(periodo1)
    let nome = String(nome1)
    let nomeDoProduto = String(nomeProduto1)

}

    function validarJuros(validarJuros1){
        if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || isNaN(periodo)) {
            console.log('Erro, coloque números validos!')
    
    
        } else if (capital1 == '' || taxa1 == '' || tempo1 == '' || periodo1 == '') {
            console.log('Error')
            return null
    
        } else if (!isNaN(nome1) || !isNaN(nomeProduto1)) {
            console.log('Erro: não pode colocar números neste campo!')
            return null
    
    
        } else if (taxa < 0 || taxa > 10) {
            console.log('O resultado foi inserido incorretamente! ')
            return null

        }
            if(resultado != undefined){
                return resultado
             }else{
                return false
             }
            
              
    
        }
          


module.exports = {
    calcularJuros,
    validarJuros
}






