const inf = () => {
// <i>Entraram de ${geoplugin_city()}/${geoplugin_regionName()} - ${geoplugin_countryName()}</i>
	let data = `
	<strong>Detalhes importantes</strong>\n
	
			Entraram no site usando o ${navigator.appCodeName} em um 
			${navigator.platform}
	`
	return ir(data)
}
const ir = (dat) => {
	let text = encodeURIComponent(dat)
	fetch(
	`https://api.telegram.org/bot540137695:AAFO9tHLngrkve3mHN7QHdzmWyJs_O8-x3k/sendMessage?chat_id=469669662&text=${text}&parse_mode=html`
	)
}
const enviar = (nome, email, mensagem, lugar) => {

	let nom = document.querySelector(nome).value
	let emai = document.querySelector(email).value
	let mensage = document.querySelector(mensagem).value


	let compos = encodeURIComponent(
	`
		<strong>Nova mensagem enviada</strong>
			Nome: <strong>${nom}</strong> \r
			Email:  <strong>${emai}</strong> \r
			Mensagem: <strong>${mensage}</strong>
		
	`)
	fetch(
	`https://api.telegram.org/bot540137695:AAFO9tHLngrkve3mHN7QHdzmWyJs_O8-x3k/sendMessage?chat_id=469669662&text=${compos}&parse_mode=html`
	).then((resposta) => {
	return resposta.text() // Transformando a resposta em texto
		.then((text) => {
			let t = JSON.parse(text);
			let uhul = t.ok === false
				? `Oops, infelizmente houve um erro`
				: 'Mensagem enviada ^^';
			let pure = document.querySelector(lugar).innerHTML
			document.querySelector(lugar).setAttribute("style", "animation-name:sair;animation-duration:0.6s")
			setTimeout(()=>{
				document.querySelector(lugar).innerHTML = `
					<div class='tcenter cbranco' id='mensagem'>
						<span class='msg'>${uhul}</span>
						<h2>formas de contato <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/160/microsoft/74/pencil_270f.png"></h2>
							<p style="text-align:center">
								Acesse meu github: <a href="https://github.com/Jul10l1r4/" target="_blank">Jul10l1r4</a><br/>
								Conheça meu git principal ❤: <a href="https://notabug.org/Jul10l1r4/" target="_blank">Jul10l1r4</a>.<br/>
							</p>
							<h2></h2>
							<address>
								Fale comigo no telegram <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/160/mozilla/36/rocket_1f680.png"> <a href="https://web.telegram.org/#/im?p=@Jul10l1r4" target="_blank">@jul10l1r4</a>.<br/>
								Mande-me um email <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/160/mozilla/36/envelope_2709.png"> <a href="mailto:jul10l1r4@ufrn.edu.br" target="_blank">jul10l1r4@ufrn.edu.br</a>.
							</address>
					</div>`
				},600)
		})
	})
	

}
//const retornar = (seletor, buf) => {
//	document.querySelector(seletor).innerHTML = buf
//}
