var speech = " I am a good person. I don't snore at night.";
// speech[2]= "q";
// console.log(speech);
var count = 0;
for(var i = 0; i< speech.length; i++){
    var char = speech[i];
//    if(char == " ")
if(char == " " && speech [i-1] !=" "){
       count++;
   }
}
console.log(count);