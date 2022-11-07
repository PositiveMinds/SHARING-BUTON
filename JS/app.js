// let overlay=document.querySelector(".overlay");
// let homeBtn=document.querySelector(".home_btn");

// homeBtn.addEventListener("click",()=>{
//     overlay.classList.toggle("overlay");
// })

let overlay=document.querySelector(".overlay");
let homeBtn=document.querySelector(".home_btn");

let screenIcons=document.querySelector(".screenIcons");

overlay.addEventListener("click",()=>{
    overlay.classList.toggle("overlay");
})

screenIcons.addEventListener("dblclick",()=>{
  overlay.classList.toggle("overlay");
})



let sharecard = document.querySelector(".share-card");
let shareBtn = document.querySelector(".share-btn");
let itemShareCard = document.querySelector(".itemShareCard");
let content=document.querySelector(".content");

shareBtn.addEventListener("click",()=>{

  sharecard.classList.toggle("itemShareCard");
    
})



const CurrentTym = new Date();
document.getElementById("CurrentTym").innerHTML = CurrentTym;

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + '<br>';
  var dateTime = date+' '+time;
  
  var DayDate=today.getDate() + ' ' + (today.getMonth()+1);
  
  var DayName = today.getDay();

  var time = today.getHours() + ":" + today.getMinutes();


  document.getElementById("clock").innerHTML=time;
  
  document.getElementById("CurrentTym").innerHTML=time;
  
  document.getElementById("DayDate").innerHTML=DayDate;
  
  document.getElementById("DayName").innerHTML=daylist[day];
  

