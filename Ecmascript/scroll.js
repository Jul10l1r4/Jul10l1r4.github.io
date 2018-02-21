let a = document.querySelector( `footer` )
let b = document.querySelector( `section` )
// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
const Scroll = () => {// Arrow function `ES6`, calcula a posição para que mostre o efeito
    if(window.pageYOffset + ((window.innerHeight * 3) / 4) > b.offsetTop) {
			b.setAttribute( `style`, `opacity:1;transition-duration:2s` )
			a.setAttribute( `style`, `opacity:1;transition-duration:4s;` )
		}else{
			b.setAttribute( `style`, `opacity:0` )
			a.setAttribute( `style`, `opacity:0` )
		}
}
// Ativa a nossa função
window.addEventListener( `scroll`, Scroll );
const sobre = () -> {
  window.scroll({ // Função nativa dos browsers
	  top: document.querySelector( `#sobre` ).getBoundingClientRect().top, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
   });
}
window.addEventListener( `click`, sobre );
