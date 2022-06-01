let n1 = prompt("Digite um numero")
let n2 = prompt("Digite outro numero")
let codigo = prompt("Digite a opção desejada")

switch(parseInt(codigo)){
    case 1:
    let conta = parseInt(n1)+parseInt(n2)
    console.log("o resultado da sua operação foi "+conta)
        break
    case 2:
    let conta1 = parseInt(n1)-parseInt(n2)
    console.log("o resultado da sua operação foi "+conta1)
        break
    case 3:
    let  conta2 = parseInt(n1)*parseInt(n2)
    console.log("o resultado da sua operação foi "+conta2)
        break
    case 4:
    let  conta3 = parseInt(n1)/parseInt(n2)
    console.log("o resultado da sua operação foi "+conta3)
        break 
    default:
        console.log("opção invalida")       
}

