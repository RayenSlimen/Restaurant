function verif() {
	if(document.f.nom.value == "") {alert("Veuillez taper votre nom et prenom ");return false;}
	if(document.f.num.value =="") {alert("veuillez taper vote num"); return false;}
	var v =1
	var taille = document.f.cin.value.length;
	for(i=0;i<taille;++i)
	{if(document.f.num.value.charAt(i) < "0" || document.f.num.value.charAt(i) > "9" || taille !=8) v=-1;}
	if(v==-1) {alert("le numero  est incorrect!");return false;}
	taille=document.f.list.options.length;
	var n =0;
	for(i=0;i<taille;i++) {if(document.f.list[i].selected){n+=1};}
	if(n>2) {alert("Veuillez selectionner au maximum 2 choix!");return false ; }
	}