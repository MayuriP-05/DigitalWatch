document.addEventListener('DOMContentLoaded', () => {
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let globe = document.querySelector('.globe');
let dropDownMenu = document.querySelector('#dropDownMenu');
let partsOfTheDayBox = document.querySelector('.partsOfTheDayBox');
let designLogo = document.querySelector('.designLogo');
let clockDesign = document.querySelector('.clockDesign');
let analogclock = document.querySelector('#analog-clock');
let dropDownMenu2= document.querySelector('#dropDownMenu2');

let selectedValue ="Asia/Kolkata";

function clockRunning(){
    // const timeZone = document.getElementById('timeZone').value;
    const timing = new Date().toLocaleTimeString('en-GB', {
        timeZone:selectedValue,
        hour12: false,
      });

    let  [nowHour,nowMinute,nowSecond] = timing.split(':');


    // let nowHour = new Date().getHours(); 
    // let nowMinute = new Date().getMinutes();
    // let nowSecond = new Date().getSeconds();
 
    nowSecond = parseInt(nowSecond);
    nowHour = parseInt(nowHour);
    

    hour.style.transform = `rotate(${30*(nowHour%12) + (nowMinute/2)}deg)`
     minute.style.transform = `rotate(${6*nowMinute }deg)`
      second.style.transform = `rotate(${6*nowSecond}deg)`
  
      
  if(nowHour>=7 && nowHour<12) partsOfTheDayBox.style.backgroundImage=`url(./images/morning.jpeg)`;
  else if (nowHour>=12 && nowHour<17) partsOfTheDayBox.style.backgroundImage=`url(./images/afternoon.webp)`
  else if (nowHour>=17 && nowHour<22) partsOfTheDayBox.style.backgroundImage=`url(./images/eveing.jpeg)`
  else  partsOfTheDayBox.style.backgroundImage=`url(./images/night.jpeg)`



}

globe.addEventListener('click', () => {
  dropDownMenu.classList.toggle('hidden');
  
});
designLogo.addEventListener('click',()=>{
   clockDesign.classList.toggle('hidden');
 
})





dropDownMenu.addEventListener('click',(e)=>{
const selectedOption =e.target;
if(selectedOption.tagName === 'LI'){
selectedValue=selectedOption.getAttribute('data-value');

}


});
dropDownMenu2.addEventListener('click',(e)=>{
  const selectedOption =e.target;
  if(selectedOption.tagName === 'LI'){
  const selectedClock=selectedOption.getAttribute('data-value');
  analogclock.style.backgroundImage=`url(./images/clock-design-${selectedClock}.png)`;
  console.log(selectedClock);
  
  }
  
  
  })

setInterval(clockRunning,1000)
  
clockRunning();


});


 

