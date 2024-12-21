const tn=[1,-3,4,5,4,70,10];
const email="test.ax@gmail.com";
console.log(' rechercher l indice de  4',tn.indexOf(4));
console.log(' rechercher du dernier  indice de  4',tn.lastIndexOf(4));
console.log('test includes',tn.includes(4));
console.log('test includes',email.includes('@gmail.cOM'.toLowerCase()));
console.log('find 4 ',tn.find((v,index) => {
  if(index>=3 && v%2===0) return true; 
}));
console.log('prmeier element <0',tn.findIndex(v=>v<0));

console.log('filter ',tn.filter(v=> v%9===0)[0]);
const users=[
    {id: 1, prenom:'ali',age: 19},
    {id: 2, prenom:'rim',age: 10},
    {id: 3, prenom:'Aicha',age: 28},
    {id: 4, prenom:'alaa',age: 8},
];
    
    const userMajeur=users.filter((v)=> v.age>18);
    const userSauf3=users.filter(v=> v.id!==3);
const majeurEtCommenceParA=users.filter(v=> v.prenom.toUpperCase().startsWith('A') && v.age>18 );
    console.log('les users majeurs sont ',userMajeur);
    console.log('les users sauf id = 3  sont ',userSauf3);
    console.log('les users ayant un prenim qui commence par a et majeurs',majeurEtCommenceParA)
// iteration 
email.split("@").forEach((v,i,ar)=> {
    ar[1]=ar[1].toUpperCase();
    console.log('iteration',v,i,ar);
});
for (const i in users) {
    console.log('for in',i,users[i]); 
}
const ali= {id: 2, prenom:'ali',age: 10};

console.log(ali.prenom,ali['prenom']);

for (const i in  ali) {
    console.log('for in',i,ali[i]); 
}
for (const element of tn) {
    console.log(element);    
}
// map 
const ages=[12,14,19,20];

const agesDouble=ages.map(v => v*2);
const majeurs=ages.map(v=> (v>18) ? "Majeur":"Mineur" );
console.log('exemple 1 de MAP',agesDouble);
console.log('exemple 2 de MAP',majeurs);

const students=[
    {id: 1, prenom:'ali',age: 19},
    {id: 2, prenom:'rim',age: 10},
    {id: 3, prenom:'Aicha',age: 28},
    {id: 4, prenom:'alaa',age: 8},
];

const studentAge=students.map(v=> v.age);
const studentFirstName=students.map(v=> ` <li> ${v.prenom}</li>`);

console.log('exemple 3 de MAP',studentFirstName);
// sort 
const ages2=[12,90,5,20];
console.log('exemple 1 sort ',ages2.sort((a,b)=> a-b));
console.log('exemple 2 sort ',students.sort((a,b)=> b.prenom.length-a.prenom.length));
sortedStudents=students.sort((a,b)=>a.prenom.localeCompare(b.prenom));
const prices=[2,1,6,1];
console.log('exemple 1 reduce ',students.reduce((s,c)=> s+c.age,0))/students.length;
