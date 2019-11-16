
function makeBold() {
    var ban = document.getElementById("getText");
    console.log(ban)
    ban.style.fontWeight = 'bold';
}
function makeItalic() {
    var ita= document.getElementById("getText");
    console.log(ita)
    ita.style.fontStyle= 'Italic';
}
function underlinetext() {
    var line= document.getElementById("getText");
    console.log(line)
line.style.textDecoration = 'underline';
}

function choixtaille(Size){
var small= document.getElementById("getText");
var medium= document.getElementById("getText");
var big= document.getElementById("getText");
small.style.fontSize= '20px'; 
}

/*function choixtaille(){
    var medium= document.getElementById("getText");
    medium.style.fontSize='30px' ;  
    }
function choixtaille(){
     var big= document.getElementById("getText");
     big.style.fontSize='40px' ;  
        }*/

