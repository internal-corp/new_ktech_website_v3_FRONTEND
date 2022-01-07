//get elements

var costImageMobile=document.getElementsByClassName('imageM')[0];
var costImageDesktop=document.getElementsByClassName('imageD')[0];
var menu=document.getElementsByClassName('menu')[0];
var close=document.getElementsByClassName('close')[0];
var mainLinks=document.getElementsByClassName('main-links')[0];
var suscribeBtn=document.getElementsByClassName('suscribeBtn')[0];
var modal=document.getElementsByClassName('modal')[0];



// // function to verify if mobile is true

// function checkScreen(){
//     var width= window.innerWidth;
//     var mobile=false;
//     if(width<=750){
//         mobile=true;
//         // console.log(mobile)
//         return mobile;
//     }
//     else{
//         // console.log(mobile)
//         return mobile;
//     }
// }

// //function to hide header link if mobile is true
// function mobileMenu(){
//     if(checkScreen()){
//         menu.style.display="block";
//         mainLinks.style.display="none";
//         suscribeBtn.style.display="none";
//         return;
//     }
//     else if(!checkScreen()){
//         menu.style.display="none";
//         mainLinks.style.display="block";
//         suscribeBtn.style.display="block";
//         modal.style.display="none"
//         return;
//     }
// }

// //function to change cost image position for mobile friendly
// function Cost(){
//     if(checkScreen()){
//         costImageMobile.style.display="block";
//         costImageDesktop.style.display="none";
//         return;
//     }
//     else if(!checkScreen()){
//         costImageMobile.style.display="none";
//         costImageDesktop.style.display="block";
//         return;
//     }
// }

// // listen window to check if mobile is true
// window.addEventListener('load',()=>{
//     window.addEventListener('resize',()=>{
//         checkScreen();
//         mobileMenu()
//         Cost();
//     });
//     checkScreen();
//     mobileMenu()
//     Cost();
// })

//listen click to menu icon
menu.addEventListener('click',()=>{
    modal.style.display="block"
})
// //listen click to close icon
close.addEventListener('click',()=>{
    modal.style.display="none"
})
// //listen outside click to close menu
// modal.addEventListener('click',(e)=>{
//     if(e.target==modal){
//         modal.style.display="none"
//     }
// })