//const t=[1,2,3,1,10];
//  const reste= t.splice(3,2);
//  //t=[1,2,3]
//   console.log(t,reste);
//   // ajouter 3, elements a la fin du tableau 
//   const rest1=t.splice(3,0,12,16,6);
// console.log(t,rest1);//[ 1, 2, 3, 12, 16, 6 ]
// //remplacer  2,3,12 par 5,6 et 7
// const rest2=t.splice(1,3,5,6,7,99);
// console.log(t,rest2);
// //ajout du nombre 88 au debut du tableau
// t.splice(0,0,88);
const ajout_debut = (tab,nombre)=>{

    tab.splice(0,0,nombre);
    return tab;
}
//tab=[1,2] et nombre =3 => [3,1,2]
//tab=[-1,0,19] et nombre =30 => [30,-1,0,19]
module.exports={ajout_debut}

