var before
var opp, after
let intBefore
function  clickedBut(num){
    document.getElementById('ans').value+=num
    
}
function operation(opp){
    this.opp=opp
    before=document.getElementById('ans').value
    intBefore = parseInt(before)
    document.getElementById('ans').value=""
    document.getElementById('hist').value=before+" "+opp
 //  console.log(before)
  
}
function answer(){
    var ans
    var after=document.getElementById('ans').value
    this.after=after
    let intAfter =parseInt(after)
    console.log('type = '+typeof(intBefore))
    if (opp=="/") {
    ans = intBefore / intAfter
    history ("/")
    }else if (opp =="*"){
        ans = intBefore*intAfter
        history ("x")
    }
    else if (opp =="+"){
        ans = intBefore+intAfter
        history("+")
    }
     else if (opp =="-"){
        ans = intBefore-intAfter
        history ("-")
    }
   document.getElementById('ans').value="= "+ans
    }
function history(oppHis){
document.getElementById('hist').value=""
   document.getElementById('hist').value=intBefore+" "+oppHis+" "+after
    
}


function clearAll(){
document.getElementById('hist').value= ""
document.getElementById('ans').value= ""
console.log("clear")
}
