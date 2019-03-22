function cadastrar() {
	let name= document.getElementById('login').value;
	let password = document.getElementById('password').value;
	let confirmPassword = document.getElementById('confirmPassword').value;

	if (name =="" || password =="" || confirmPassword =="") 
	{
		alert('É preciso preencher todos os campos para prosseguir o cadastro');
	}

	else{
		if (password.length >= 6 && password.length <=10 && password == confirmPassword) 
		{
			alert("Usuário cadastrado com sucesso");
			}
			else{
				alert('password invalida');
				}
			}
	}
