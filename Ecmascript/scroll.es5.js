/* jS ES5 | Jul10l1r4.github.io
 * Codado no VI <3
 */
var b = document.querySelector( 'section' )
b.setAttribute( 'style', 'opacity:0;transition-duration:0.1s' )
// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
function Scroll(){
    if(window.pageYOffset + ((window.innerHeight * 3) / 4) > b.offsetTop) {
			b.setAttribute( 'style', 'opacity:1;transition-duration:2s' )
		}else{
			b.setAttribute( 'style', 'opacity:0;transition-duration:2s' )
		}
}
// Ativa a nossa função
setInterval(
	window.addEventListener( 'scroll', Scroll ), 800
)

function sobre() {
  window.scroll({ // Função nativa dos browsers
	  top: document.querySelector( '#conteudo' ).offsetTop, // Captura a quantidade precisa de px do elemento em cada
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
   });
}
document.querySelector( '#to' ).addEventListener( 'click', sobre );

// Função de rolagem suave
function go (elemento) {// Arrow function levando um parâmetro que será um seletor como o de css
  var vivo = document.querySelector(elemento)// Pegará esse seletor e retornará um elemento vivo
  window.scroll({ // Função nativa dos browsers
	  top: vivo.offsetTop, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
  });// terminouuu fiii, só isso, c n vai precisar exporrtar mais 5000mil instruçoes de dados da porra do jquery
}
