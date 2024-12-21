const {ajout_debut}= require('./splice.js');
describe("tester la fonction ajout_debut",()=>{
    test('tab=[1,2] et nombre =3 => [3,1,2]', () => { 
        expect(ajout_debut([1,2],3)).toEqual([3,1,2]);
       
        });
       test('tab=[-1,0,19] et nombre =30 => [30,-1,0,19]', () => { 
        expect(ajout_debut([-1,0,19],30)).toEqual( [30,-1,0,19]);
       
        });

})