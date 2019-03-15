function mudacor(){
	var selecao = document.getElementById('selecao');
	var itemSelecionado = selecao.options[selecao.selectedIndex].id;


	switch(itemSelecionado)
	{
		case 'preto':
		document.getElementById('cor').style.backgroundColor = 'black'
		break;

		case 'cinza':
		document.getElementById('cor').style.backgroundColor = 'gray'
		break;

		case 'laranja':
		document.getElementById('cor').style.backgroundColor = 'orange'
		break;

		case 'roxo':
		document.getElementById('cor').style.backgroundColor = 'purple'
		break;
	}


}