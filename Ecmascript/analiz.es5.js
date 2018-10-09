fetch('https://api.ipstack.com/check?access_key=a90225a004c8374ec393a04b0601325e').then(function (resposta) {
		return resposta.text() // Transformando a resposta em texto
	}).then(function(text) {
			return inf(text)
	})
function inf(dat) {
	var buff = JSON.parse(dat)
	var ip = buff.ip
	var country = buff.country_name
	var city = buff.city
	var region = buff.region_code
	var data = '<strong>Detalhes importantes</strong>\nEntraram no site em '+window.location.pathname+' de '+country+' '+city+'/'+region+' no ip '+ip+', se liga, nos detalhes: '+navigator.userAgent}
	return ir(data)
}
function ir (dat) {
	var text = encodeURIComponent(dat)
	fetch('https://api.telegram.org/bot540137695:AAFO9tHLngrkve3mHN7QHdzmWyJs_O8-x3k/sendMessage?chat_id=469669662&text='+text+'&parse_mode=html')
}
function enviar(nome, email, mensagem, lugar) {

	var nom = document.querySelector(nome).value
	var emai = document.querySelector(email).value
	var mensage = document.querySelector(mensagem).value


	var compos = encodeURIComponent('<strong>Nova mensagem enviada</strong>Nome: <strong>'+nom+'</strong>\rEmail: <strong>'+emai+'</strong> \rMensagem: <strong>'+mensage+'</strong>')
	fetch('https://api.telegram.org/bot540137695:AAFO9tHLngrkve3mHN7QHdzmWyJs_O8-x3k/sendMessage?chat_id=469669662&text='+compos+'&parse_mode=html').then((resposta) => {
	return resposta.text()
		.then((text) => {
			var t = JSON.parse(text);
			var uhul = t.ok === false
				? 'Oops, infelizmente houve um erro'
				: 'Mensagem enviada ^^';
			var pure = document.querySelector(lugar).innerHTML
			document.querySelector(lugar).setAttribute("style", "animation-name:sair;animation-duration:0.6s")
			setTimeout(function(){
				document.querySelector(lugar).innerHTML = "<div class='tcenter cbranco' id='mensagem'><span class='msg'>"+uhul+"</span><h2>formas de contato <i class='fas fa-pencil-alt'></i></h2><p style='text-align:center'>Acesse meu github: <a href='https://github.com/Jul10l1r4/' target='_blank'>Jul10l1r4</a><br/>Conheça meu git principal ❤: <a href='https://notabug.org/Jul10l1r4/' target='_blank'>Jul10l1r4</a>.<br/></p><h2></h2><address>Fale comigo no telegram <i class='fab fa-telegram'></i> <a href='https://web.telegram.org/#/im?p=@Jul10l1r4' target='_blank'>@jul10l1r4</a>.<br/>Mande-me um email <i class='fas fa-envelope'></i> <a href='mailto:jul10l1r4@ufrn.edu.br' target='_blank'>jul10l1r4@ufrn.edu.br</a>.</address></div>"
				},600)
		})
	})
}
