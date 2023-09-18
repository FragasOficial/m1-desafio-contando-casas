function contarPalavras(texto){
    let contador = 0;
    let dentroDaPalavra = false;
    
    for (let i = 0; i < texto.length; i++){
       const caractere = texto[i];
       
       if (caractere >= 'a' && caractere <= 'z'){
        if (!dentroDaPalavra){
            contador++;
            dentroDaPalavra = true;
        }
       } else {
        dentroDaPalavra = false;
       }
    }
    return contador;
}

console.log(contarPalavras("sss.aasd.sss")); //saída: 3
console.log(contarPalavras("sssaasdsSs")); // saída: 2;
console.log(contarPalavras("sssa1asdss")); // saída: 2;
