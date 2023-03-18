const form = document.getElementById('form-exercicio');

form.addEventListener('submit', function(e){
    
    e.preventDefault();

    const comparador1 = document.getElementById('numero1').value;
    const comparador2 = document.getElementById('numero2').value;
    const comparacao = `O valor B: ${comparador2} é maior que A: ${comparador1}`;

    if (parseInt(comparador1) < parseInt(comparador2)) {
        alert(comparacao);
    }
    else {
        alert("O valor A é maior que B, tente novamente.");
    }
    
    
})

