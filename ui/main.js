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
 
 var button = document.getElementById('counter');
 
 
 button.onclick = function(){
     var request = new XMLHttpRequest();
     
     request.onreadystatechange = function(){
         if(request.readyState === XMLHttpRequest.DONE){
             if(request.status == 200){
                 var counter = request.responseText;                
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
             }
         }
         
     };
     
     
     request.open('GET', 'http://manunandhanmn.imad.hasura-app.io/counter', true);
     request.send(null);
     
     
 };
 
 //Add Name

 var submit = document.getElementById('submit_btn');
 submit.onclick = function(){
      var nameInput = document.getElementById('name');
      var name = nameInput.value;
     var request = new XMLHttpRequest();
     
     request.onreadystatechange = function(){
         
         if(request.readyState === XMLHttpRequest.DONE){
             if(request.status == 200){
                  var names = request.responseText;
                  names = JSON.parse(names);
                  var list = '';
                  for (var i = 0; i < names.length; i++){
                  list += '<li>' + names[i] + '</li>';
                  }
     
                  var ul = document.getElementById('namelist');
                  ul.innerHTML = list;
             }
         }
         
     };
     
     
     request.open('GET', 'http://manunandhanmn.imad.hasura-app.io/submit-name?name=' + name, true);
     request.send(null);
     
     
    
 };
 
 
 
 
 
