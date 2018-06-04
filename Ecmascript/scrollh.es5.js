var b = document.querySelector( '#conteudo' )
var c = document.querySelector( '.projetos' )
var d = document.querySelector( '.fale-conosco' )
var e = document.querySelector( '.trabalho' )
var f = document.querySelector( '.seguranca' )
var g = document.querySelector( '.baixar' )
var list = [b,c,d,e,f,g]
for (a;a >= a.length;a++) {
	list[a].setAttribute( 'style', 'opacity:0' )
}
// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
function Scroll(){
	list.map(function (x) {// Arrow function 'ES6', calcula a posição para que mostre o efeito
		  if(window.pageYOffset + ((window.innerHeight * 3) / 3.5) > x.offsetTop) {
				x.setAttribute( 'style', 'opacity:1;transition-duration:1s;transform: translateX(0px)' )
			}else{
				x.setAttribute( 'style', 'opacity:0;transition-duration:1s' )
			}
	})
}
// Ativa a nossa função
setTimeout(
	window.addEventListener( 'scroll', Scroll ),700
)
function sobre() {
  window.scroll({ // Função nativa dos browsers
	  top: document.querySelector( '#conteudo' ).offsetTop, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
   });
}
document.querySelector( '#to' ).addEventListener( 'click', sobre );
// Função de rolagem suave
function go (elemento) {// Arrow function levando um parâmetro que será um sevaror como o de css
  var vivo = document.querySelector(elemento)// Pegará esse sevaror e retornará um elemento vivo
  window.scroll({ // Função nativa dos browsers
	  top: vivo.offsetTop, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
  });// terminouuu fiii, só isso, c n vai precisar exporrtar mais 5000mil instruçoes de dados da porra do jquery
} 