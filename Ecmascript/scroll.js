let a = document.querySelector( `footer` )
let b = document.querySelector( `section` )
// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
const Scroll = () => // Arrow function `ES6`
		b.setAttribute( `style`, `opacity:1` )
		a.setAttribute( `style`, `opacity:1` )

// Ativa a nossa função
window.addEventListener( `scroll`, Scroll );

