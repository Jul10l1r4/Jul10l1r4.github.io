const send = () => {
	let name = encodeURIComponent(document.querySelector(` [name='name'] `).value)
	let email = encodeURIComponent(document.querySelector(` [name='email'] `).value)
	let message = encodeURIComponent(document.querySelector(` [name='message']`).value)
	let dest = encodeURIComponent(document.querySelector(` [name='dest']`).value)
	fetch(
		`https://api-email.000webhostapp.com/?name=${name}?email=${email}?message=${email}?message=${message}?dest=${dest}`
			).then(function(resposta) {
		return resposta
			.text() // Transformando a resposta em texto
			.then((text) => {
				   alert("text");
			});
	});
}
