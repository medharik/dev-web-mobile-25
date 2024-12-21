const {moyenne} =require('./serie2.js');

test('[-1,19,11,-9]', () => { 
 expect(moyenne([-1,19,11,-9])).toEqual(15);

 })

test('notes=[-10,10,10,16,-90];=> moyenne=12', () => { 
 expect(moyenne([-10,10,10,16,-90])).toEqual(12);

 })