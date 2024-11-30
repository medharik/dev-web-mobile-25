//exercice 1 : 
//notes=[12,3,13,10,5];
const notes=[12,3,13,10,5];
const noteReussi=notes.filter(e=> e>=10);
console.log('les notes > 10',noteReussi);
const prenoms=["ALI","alaa","john","sami","reda","Rim","ima"];
// les prenoms ayant une longueur <=3
const p3= prenoms.filter(e=> e.length<=3);
console.log(p3);
// les prenoms contenant la lettre i
const searchedMc='I';
const pi=prenoms.filter(e=>e.toUpperCase().includes(searchedMc.toUpperCase()));
console.log(pi);
// exercice 2 :
const produits=[
    {id:1,libelle:'hp',prix: 4000,qteStock:10 },
    {id:2,libelle:'dell',prix: 5000,qteStock:0},
    {id:3,libelle:'lenovo',prix: 6000,qteStock:100},
    {id:4,libelle:'acer',prix: 7000,qteStock:0}
];
// les produits en rupture de stock
const produitsRupture=produits.filter((e,i,ar) => {
    if(e.qteStock==0) {
        ar[i].qteStock=5
        return true;
    }else 
    return e.qteStock==0;
} );
console.log('les produits en rupture de stock sont : ',produitsRupture);
const produit5500=produits.filter(e=> e.prix>=5500);
console.log('les produits sont : ',produits);
console.log('les produits dont le prix >= 5500: ',produit5500);

const pe=produits.filter(e=>e.libelle.toLowerCase().includes('e') && e.prix>=6000);
console.log('les produits dont le libelle contient e et ayant un prix >=6000',pe)