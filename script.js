document.addEventListener('DOMContentLoaded', function(){
  const aumentaFonteBotao document.getElementByID('aumentar-fonte');
  const diminuiFonteBotao document.getElementByID('diminuir-fonte');
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

  let tamanhoAtualFonte = 1;
  aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

  diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

  botaoDeAcessibilidade.addEventListener('click', function (){
 botaoDeAcessibilidade.classList.toggle('rotacao-botao');
 opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
})
  
})
