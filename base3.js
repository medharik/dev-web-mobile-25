let i=0;
console.log("message 1",i,u,v);
let  x =9;// HOISTING (REMONTEE)
let s="ali"+x+i;//"ali9"+0 => "ali90"
 s="ali"+(x+i);//ali9
 s=12+4*5+"2";//12+20+"2"=>322
 s=(12+4)*5+"2";// 802
s="ali12"*2;//le nombre 24

console.log("s est ",s);
{
    var   u=9;
    x++;//x=10
    let y=3;
    var v=10;
    console.log("message 2",i,x,v);
    //i=0
    v=++i*4;// <=> i+1 ensuite * 4 , v=4
    
    console.log("message 3",i,x,v);//i=1,x=10,v=4

}

// { console.log('g',g);
{
    let age =20;
    let j=1;
    var g=9;
    if(age=0 && ++j==2){
        console.log('age 1',age,j);
    }
    console.log('age 2',age,j);

    if(age>18 && j++>=3 ){
        console.log('majeur',age,j);

    }else {
        console.log('mineur',age,j);
    }
}