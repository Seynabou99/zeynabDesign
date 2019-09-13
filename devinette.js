/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 9
var solution = Math.floor(Math.random() * 9) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// initialisation
var proposition=-solution;
var essai=0;

var essaiMax=3; //nombre maximum d'essai

 
loopWhile:
do {             
            proposition = Number(prompt("Entrez un nombre entre 1 et 9:"));

            if (proposition<solution)
            {
                console.log(proposition+" est trop petit.");
            }
            else if (proposition>solution)
            {
                console.log(proposition+" est trop grand.");
            }
            else if (Number.isNaN(proposition)||proposition<1||proposition>9){
                alert("Attention ! Veuillez entrer un nombre.");
                            
            }
            else if (proposition<1||proposition>9){
                alert("Attention ! Veuillez entrer un nombre compris entre 1 et 9.");
            }

    essai++;
        
    
} while(essai<essaiMax &&  proposition!==solution);

if(proposition===solution)
{
   console.log("Bravo ! La solution était "+solution+".");
}

else
{
     console.log("Perdu ... La solution était "+solution+".");
} 