window.onload = function() {
    console.log('pagina carregada');
    let botaoCopiar = document.getElementById("botao__copiar");
    botaoCopiar.style.display = 'none';    

    // pela o element <div> pelo id e faz o deixa não vizivel
    let painelMensagemCriptografada = document.getElementById("painel__mensagem__criptografada");
    painelMensagemCriptografada.style.display = 'none';
}

function criptografar() {
    
    //let texto armazena o conteúdo do textarea
    let texto = document.querySelector('textarea').value;   
    let testEntradaValida = /^[a-z\n\s]+$/.test(texto);
    
    if (testEntradaValida == true) {       
        let textoCriptografado = [];
        let alertaLetra = document.getElementById('alerta__letra');
        alertaLetra.style.color = '#0D0A6D';

        //criar for loop para iterar sobre os caracteres da variavel 'texto'
        for (var i = 0; i < texto.length; i++) {
            
            //texto[i] retorna uma letra da variavel texto a cada iteração
            let letra = texto[i];
            if(letra=="e") {
                textoCriptografado.push('enter');
            }
            else if(letra=="i") {
                textoCriptografado.push('imes');
            }
            else if(letra=='a') {
                textoCriptografado.push('ai');
            }
            else if (letra=='o') {
                textoCriptografado.push('ober');
            }
            else if (letra=='u') {
                textoCriptografado.push('ufat');
            }
            else {
                textoCriptografado.push(letra);
            }             
        }
        
        //converte lista para string
        //ex. ['um', 'dois', 'tres'] => 'umdoistres'
        let stringCriptografado = textoCriptografado.join('');
        
        //pega o elemento por id, que é um <div>
        let painelDireitoMensagem = document.getElementById('painel__direito__mensagem');
        
        //se estiver visivel, deixa nao visivel
        painelDireitoMensagem.style.display = 'none';
        
        //pega o elemento <p> pelo id, e atribui a string criptografada para o elemento <p>
        let mensagemCriptografada = document.getElementById('mensagem__criptografada');
        mensagemCriptografada.innerText = stringCriptografado; 
        
        //pega o elemento <button> pelo id e deixa visivel
        let botaoCopiar = document.getElementById("botao__copiar");
        botaoCopiar.style.display = 'block';

        // pela o element <div> pelo id e faz o deixa vizivel
        let painelMensagemCriptografada = document.getElementById("painel__mensagem__criptografada");
        painelMensagemCriptografada.style.display = 'block';
        
    }
    else {
        let alertaLetra = document.getElementById('alerta__letra');
        alertaLetra.style.color = 'red';        
    }          
}

function descriptografar() {

    let testEntradaValida = checkEntradaValida(); 
    
    if (testEntradaValida == true) {               
        let textoCriptografado = document.querySelector('textarea').value;
        textoCriptografado = textoCriptografado.replace(/enter/g,'e');
        textoCriptografado = textoCriptografado.replace(/imes/g,'i');
        textoCriptografado = textoCriptografado.replace(/ai/g,'a');
        textoCriptografado = textoCriptografado.replace(/ober/g,'o');
        textoCriptografado = textoCriptografado.replace(/ufat/g,'u');
        
        let mensagemCriptografada = document.getElementById('mensagem__criptografada');
        mensagemCriptografada.innerText = textoCriptografado;

        //pega o elemento <button> pelo id, verifica se esta escondido, se estiver, deixa ele visivel
        let botaoCopiar = document.getElementById('botao__copiar');
        if (botaoCopiar.style.display == 'none') {
            botaoCopiar.style.display = 'block';   
        }

        let painelDireitoMensagem = document.getElementById('painel__direito__mensagem');
        painelDireitoMensagem.style.display = 'none';

        // pega o element <div> pelo id e faz o deixar visivel
        let painelMensagemCriptografada = document.getElementById("painel__mensagem__criptografada");
        painelMensagemCriptografada.style.display = 'block';

        let alertaLetra = document.getElementById('alerta__letra');
        alertaLetra.style.color = '#0D0A6D';
    }
    else {
        let alertaLetra = document.getElementById('alerta__letra');
        alertaLetra.style.color = 'red'; 
    }    
}

function copiarTextoCriptografado() {
    let textoCriptografado = document.getElementById('mensagem__criptografada');
    navigator.clipboard.writeText(textoCriptografado.innerText);
}

function checkEntradaValida () {
    // Testa se a entrada é válida
    // Retorna True se entrada for válida ou False se inválida
    let texto = document.querySelector('textarea').value;    
    let testEntradaValida = /^[a-z\n\s]+$/.test(texto);
    return testEntradaValida;
}
