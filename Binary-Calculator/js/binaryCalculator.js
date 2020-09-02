function dis(val) 
         { 
             document.getElementById("res").innerHTML+=val 
         } 
function clr() 
         { 
             document.getElementById("res").innerHTML = "" 
         } 
function solve()
{
    res.innerHTML = Math.floor(eval(res.innerHTML.replace(/\d+/g, function(str) {return parseInt(str, 2)}))).toString(2);
}