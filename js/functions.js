$(document).ready(function(){

    $('.gossip').click(function(e){

        e.preventDefault()

        $('.conteudo').empty()

        $('.conteudo').load('src/gossip/view/gossip.html')
})
    $('.link1').click(function(e){

        e.preventDefault()

        $('.conteudo').empty()

        $('.conteudo').load('src/gossip/view/1.html')
    })
    $('.link2').click(function(e){

        e.preventDefault()

        $('.conteudo').empty()

        $('.conteudo').load('src/gossip/view/2.html')
    })
    $('.link3').click(function(e){

        e.preventDefault()

        $('.conteudo').empty()

        $('.conteudo').load('src/gossip/view/3.html')
    })
    $('.link4').click(function(e){

        e.preventDefault()

        $('.conteudo').empty()

        $('.conteudo').load('src/gossip/view/4.html')
    })
})