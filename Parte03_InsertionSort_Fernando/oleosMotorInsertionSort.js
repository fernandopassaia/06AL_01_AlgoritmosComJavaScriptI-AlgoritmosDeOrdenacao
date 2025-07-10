const oleosMotor = require('./oleosMotor');

function insertionSort(oleosMotor){
    for(let indice =0; indice < oleosMotor.length; indice++){
        let atual = indice;
        // atual maior do que zero - assim quando estiver no indice 0 ele não vai tentar -1
        // vai comparar se o preco do livro ATUAL é menor que o do livro ANTERIOR
        // se preco do livro atual for MENOR que livro anterior, ele vai ENTRAR e trocar eles de lugar
        while(atual > 0 && oleosMotor[atual].preco < oleosMotor[atual - 1].preco){
            let oleoAtual = oleosMotor[atual];
            let oleoAnterior = oleosMotor[atual - 1];

            oleosMotor[atual] = oleoAnterior;
            oleosMotor[atual - 1] = oleoAtual;

            atual--;
}
    }
    console.log(oleosMotor);
};

insertionSort(oleosMotor);