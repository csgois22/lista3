function mudacor(corEscolhida){
	switch(corEscolhida)
	{
		case 'azul':
		document.getElementById('cor').style.backgroundColor = 'blue'
		break;

		case 'vermelho':
		document.getElementById('cor').style.backgroundColor = 'red'
		break;

		case 'amarelo':
		document.getElementById('cor').style.backgroundColor = 'yellow'
		break;

		case 'verde':
		document.getElementById('cor').style.backgroundColor = 'green'
		break;
	}


}