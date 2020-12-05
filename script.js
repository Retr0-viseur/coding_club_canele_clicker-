var nbetoile = 0;
var nebuleuse = 1;
var prix = 25;
var button;


function compteur() {
    nbetoile = Number(document.getElementById('clic').innerHTML);
    nbetoile += nebuleuse;
    document.getElementById('clic').innerHTML = nbetoile;
    

    if (nbetoile>=prix){
        button=document.getElementById('b_nebuleuse');
        button.disabled = false;
    }
}
function four(){
    nebuleuse++;
    nbetoile -= prix;
    document.getElementById('clic').innerHTML = nbetoile;
    prix *= 1.6;
    if (nbetoile<prix){
        button=document.getElementById('b_nebuleuse');
        button.disabled = true;
    }
}
