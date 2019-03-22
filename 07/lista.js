function enviar() 
{
	let nameOne = document.getElementById('nameOne').value;
	let nameTwo = document.getElementById('nameTwo').value;
	let nameThree = document.getElementById('nameThree').value;
	let nameFor = document.getElementById('nameFor').value;
	let nameFive = document.getElementById('nameFive').value;

	let array = new Array();
	array.push(nameOne, nameTwo, nameThree, nameFor, nameFive);
	
	nameOne = document.getElementById('nameOne').value = array[4];
	nameTwo = document.getElementById('nameTwo').value = array[3];
	nameThree = document.getElementById('nameThree').value = array[2];
	nameFor = document.getElementById('nameFor').value = array[1];
	nameFive = document.getElementById('nameFive').value = array[0];

}