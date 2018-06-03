let b = document.querySelector( `#conteudo` )
let c = document.querySelector( `.projetos` )
let d = document.querySelector( `.fale-conosco` )
let e = document.querySelector( `.trabalho` )
let f = document.querySelector( `.seguranca` )
let g = document.querySelector( `.baixar` )
let list = [b,c,d,e,f,g]
list.map((a)=>{ a.setAttribute( `style`, `opacity:0` )})
// Efeito scroll, rolagem da página, pega a barra na esquerda e muda ela para ficar fixa
const Scroll = () =>{
	list.map((x) => {// Arrow function `ES6`, calcula a posição para que mostre o efeito
		  if(window.pageYOffset + ((window.innerHeight * 3) / 3.5) > x.offsetTop) {
				x.setAttribute( `style`, `opacity:1;transition-duration:1s;transform: translateX(0px)` )
			}else{
				x.setAttribute( `style`, `opacity:0;transition-duration:1s` )
			}
	})
}
// Ativa a nossa função
setTimeout(
	window.addEventListener( `scroll`, Scroll ),700
)
const sobre = () => {
  window.scroll({ // Função nativa dos browsers
	  top: document.querySelector( `#conteudo` ).offsetTop, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
   });
}
document.querySelector( `#to` ).addEventListener( `click`, sobre );
// Função de rolagem suave
const go = (elemento) => {// Arrow function levando um parâmetro que será um seletor como o de css
  let vivo = document.querySelector(elemento)// Pegará esse seletor e retornará um elemento vivo
  window.scroll({ // Função nativa dos browsers
	  top: vivo.offsetTop, // Captura a quantidade precisa de px do elemento em cada tela diferente fiii
	  left: 0,// Obrigatório, nao queremos movimentos horizontais
	  behavior: 'smooth' // Unico efeito, dá a instrução ao browser que ele movaaaa uhuuull caraaai
  });// terminouuu fiii, só isso, c n vai precisar exporrtar mais 5000mil instruçoes de dados da porra do jquery
} 

