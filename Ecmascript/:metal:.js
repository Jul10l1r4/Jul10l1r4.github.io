/* Licença GNU GPLv3
-> Criado por: @jul10l1r4
-> Página: jul10l1r4.github.io/
*/
// Image galeria foda-see jquery
const vai = ( a, b ) => {// passando valores com poucos como letras.. menos dados a alocar
	// Ele pegará o elemento a que será levada na função e colocará no src, do box ja existente
	document.getElementById ( 'default' ).src = a
	// Pegará nosso box e transformará em block, no caso visível
	document.getElementById ( 'bloco' ).style.display = 'block'
	//faz o bloco ser fixo
	document.getElementById ( 'bloco' ).style.position = 'fixed'
	// pegará o valor do texto levado como b, e transferir para o caption, o que causará aquela legenda
	let captionText = document.getElementById( 'caption' )
	// Isto far com que dentro de nossa variável ele insira a descrição como eu já tinha dito
	captionText.innerHTML = b
}

// Scroll, ao topo ^^
// Puta que pariu! esse código só isso vai rodarrr coisas que precisaria de toda uma LIBBBB
const go = (elemento) => {// Arrow function levando um parâmetro que será um seletor como o de css
  let vivo = document.querySelector(elemento)// Pegará esse seletor e retornará um elemento vivo
  window.scroll({ // Função nativa dos browsers
	  top: vivo.offsetTop, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
  });// terminouuu fiii, só isso, c n vai precisar exporrtar mais 5000mil instruçoes de dados da porra do jquery
} 

// ESTILIZAÇÃO do BOTÃO de subir
// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
const Scroll = () => {// Arrow function `ES6`
	if ( window.pageYOffset > 180 ) {// Se a página estiver descida 180pxeis ela faz o código abaixo
		let top = document.querySelector( `.tutop` )
		top.setAttribute( `style`, `animation-name:totop;animation-duration:0.5s` )
		setTimeout(function(){					
			top.setAttribute( `class`, `totop` )
		}  , 500)
	}else {
		let top = document.querySelector( `.totop` )
		top.setAttribute( `style`, `animation-name:tutop;animation-duration:0.5s` )
		setTimeout(function(){		
			top.setAttribute( `class`, `tutop` )
		}  , 500)
	}
}
// Ativa a nossa função
window.addEventListener( `scroll`, Scroll );
