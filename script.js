function calcular() {
    var x2 = document.getElementById('x2')
    var x = document.getElementById('x')
    var n = document.getElementById('n')

    if(x2.value.length == 0 || x.value.length == 0 || n.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        var a = Number(x2.value)
        var b = Number(x.value)
        var c = Number(n.value)
            
    }
    res.innerHTML = `O resultado da equação do 2° grau é ${b*b-4*a*c}!!`
}