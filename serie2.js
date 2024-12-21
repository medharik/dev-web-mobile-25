// creer une fonction qui supprimer tous les 
// nombre <0 dans un tableau de notes , a la fin retourne la note moyenne
// notes=[-1,19,11,-3];=> moyenne=15
// notes=[-10,10,10,16,-90];=> moyenne=12
const moyenne=(notes)=>{
const notesPoitives=notes.filter(e=> e>=0);
let somme=0;
for (let i = 0; i < notesPoitives.length; i++) {
    
    somme+=notesPoitives[i];
}
return somme/notesPoitives.length;
}
module.exports={moyenne};