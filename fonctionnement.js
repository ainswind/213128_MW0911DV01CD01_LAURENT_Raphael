let num =Math.floor(Math.random()*100)+1;
prompt("vous avez 10 tentives");
let msg = "entrer un nombre entre 1 et 100";
let essais=0;
 function Devine(){
while(essais<10){

  choix = prompt(msg);
  

  if (choix<num){
    alert("plus");
    
     essais++;
        
  
  }else if (choix>num){
    alert("moins" );
       
       essais++; 
 
  }else{
    alert("gagne");
    location.reload();

  }
   if (essais ==10) {
    alert("perdu"+" le nombre était "+num);
    location.reload();
}

}
}