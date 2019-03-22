function check() {
    let string = document.getElementById('string').value;
    let inverted = string.split('').reverse().join('');
    
    if (string == inverted) {
        alert('A palavra É um palíndromo!');
    } else {
        alert('A palavra NÃO É um palíndromo!');
    }
}