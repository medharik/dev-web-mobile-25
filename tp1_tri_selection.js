const a= [3,0,5,-1,7];
//b est tableau IMMUABLE 
const b=Object.freeze(a);
// A EST AUSSI IMMUABLE 
//creer une copie du tableau a 
const copie=[...a];
   
    // trouver le min a partir de position (index) : d
  
    for (const d in copie) {
        
        let min=a[d];
        let  position_min=d;
        //trouver le min a partir de la position :d
        for (let i = d; i < a.length-1; i++) {
 
            if (min>copie[i]) {
                min=copie[i];
                position_min=i;
            }
            
           }

           //permuter la case se trouvant dans d avec celle se trouvant  dans  position_min
           let t=copie[d];
           copie[d]=copie[position_min];
           copie[position_min]=t;
           
           console.log(`min a partir de la position ${d} est ${min}`,'trouve dans la position ',position_min)
        }

        console.log('tableau A trie est ',a);
        console.log('tableau B trie est ',b);
        console.log('tableau Copie trie est ',copie);




