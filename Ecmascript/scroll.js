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
// verfifica o browser, pq se for no cu do cacete do chrome vai ser bugadão, entao é melhor ne ter
let c = document.querySelector( `#down` )
if (navigator.userAgent.indexOf("Chrome") > -1){
	document.querySelector( `#down` ).setAttribute( `style`, `display:none` )
}
