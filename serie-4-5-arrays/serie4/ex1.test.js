const {motAvecLettre,trieParLongueur}=require("./ex1.js");
test('test 1 de la fonction motAvecLettre', () => { 

expect(motAvecLettre("je suis content","e")).toEqual(["je","content"]);

 })
test('test 2 de la fonction motAvecLettre', () => { 

expect(motAvecLettre("je suis content","s")).toEqual(["suis"]);

 });
 test("test de la fonction trieParLongueur ",()=>{
    expect(trieParLongueur(["samir","ali","hicham"])).toEqual(["hicham","samir","ali"]);
 })
