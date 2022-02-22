document.getElementById('french-lilac').onclick = frenchLilac;
document.getElementById('mountbatten-pink').onclick = mountbattenPink; 
document.getElementById('silver-metallic').onclick = silverMetallic;
document.getElementById('reset').onclick = reset;

function frenchLilac() {
    document.querySelector('body').style.backgroundColor = '#8d5a97ff';
    document.querySelector('body').style.color = 'white';
}

function mountbattenPink() {
    document.querySelector('body').style.backgroundColor = '#907f9fff';
    document.querySelector('body').style.color = 'white';
}

function silverMetallic() {
    document.querySelector('body').style.backgroundColor = '#a4a5aeff';
    document.querySelector('body').style.color = 'white';
}

function reset() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black'
}