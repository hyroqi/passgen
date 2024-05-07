const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passEl1 = document.getElementById("pass-1")
let passEl2 = document.getElementById("pass-2")

let pass1 = ""
let pass2 = ""

function randompass(){
    for(let i = 0; i < 13; ++i){
        pass1 += characters[Math.floor(Math.random() * characters.length)]
        pass2 += characters[Math.floor(Math.random() * characters.length)]
    }
    passEl1.textContent = pass1
    passEl2.textContent = pass2
    pass1 = ""
    pass2 = ""
    }
