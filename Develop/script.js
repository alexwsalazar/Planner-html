var saveButton = $("#save");

var messageText = $('.col-10 textarea');


var alertButtonEl = $('#alert-btn');




renderLastRegistered();
console.log(renderLastRegistered);
// function displayMessage(type, message){
//  messageText.textContent = message;
//  messageText.setAttribute('class', type);
// }

function renderLastRegistered(){
    var task = localStorage.getItem('task',);
    
    messageText.textContent = task;
    
};

alertButtonEl.on('click', function () {
    alert('Hello World');
  });


saveButton.on("click", function(){
    var task = document.getElementsByClassName('.col-10 textarea').value;
    localStorage.setItem("task", task);
});








