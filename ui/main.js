// console.log('Loaded!');
// var element = document.getElementById('main-text');
// element.innerHTML = 'MANU';

// var img = document.getElementById('madi');

// var marginLeft = 0;
// function moveRight(){
//     marginLeft +=1;
//     img.style.marginLeft =  marginLeft + 'px';
// }
// img.onclick = function(){
    
//     var interval = setInterval(moveRight, 50);
//      //img.style.marginLeft = "100px";
// };

//counte code
var counter = 0;
 var button = document.getElementById('counter');
 
 button.onclick = function(){
     
     counter = counter++;
     var span = document.getElementById('count');
     span.innerHTML = counter.toString();
 }
 
