const a=Object.freeze([-1,3,8,-4,5]); // => [[1,3,8,4,5]]
const copie=[...a];

for (const i in copie) {
   if (copie[i]<0) {
    copie[i]*=-1;
   }
}
console.log('a  ',a);
console.log('copie',copie);
