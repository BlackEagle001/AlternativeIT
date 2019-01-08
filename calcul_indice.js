function test(choix) {
	var n = choix.length;
	var total = 50;
	var flag = false;
	
	for (i = 0; i < n; i++) {
		if (choix[i].checked==true){
			total = total + Number(choix[i].value);
			flag = true;
		}
	}
	if(total < 0) 	{ total = 0;}
	if(total > 100)	{total = 100;}
	
	if(!flag)	{return -1;}
	else		{return total;}
}
	function afficher(x) {
	var color;
	
	if ( x >= 0 ){
		if (x < 25) {color = "red";}
		else if (x < 50) {color = "orange";}
		else if (x < 75) {color = "inherit";}
		else {color = "green";}
		document.getElementById('score').innerHTML = "Votre indice de liberté est de <span style=\"color:" + color + "\">" + x + "</span> pourcents.";
	}else{
		document.getElementById('score').innerHTML = "Vous n'avez sélectionné aucun service.";
		
	}
}