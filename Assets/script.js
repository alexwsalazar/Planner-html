var saveButton = $("#save");
var messageText = $("#text-input");
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var taskArea = $("#task-area");
var booking = $("#booking-yeah");
var alertButtonEl = $('#alert-btn');
var saveButton2 = $("#save2");
var booking2 = $("#booking-yeah2");
var saveButton3 = $("#save3");
var booking3 = $("#booking-yeah3");
var saveButton4 = $("#save4");
var booking4 = $("#booking-yeah4");
var saveButton5 = $("#save5");
var booking5 = $("#booking-yeah5");
var saveButton6 = $("#save6");
var booking6 = $("#booking-yeah6");
var saveButton7 = $("#save7");
var booking7 = $("#booking-yeah7");
var saveButton8 = $("#save8");
var booking8 = $("#booking-yeah8");
var saveButton9 = $("#save9");
var booking9 = $("#booking-yeah9");

saveButton.on("click", renderLastRegistered);
saveButton2.on("click", renderLastRegistered2);
saveButton3.on("click", renderLastRegistered3);
saveButton4.on("click", renderLastRegistered4);
saveButton5.on("click", renderLastRegistered5);
saveButton6.on("click", renderLastRegistered6);
saveButton7.on("click", renderLastRegistered7);
saveButton8.on("click", renderLastRegistered8);
saveButton9.on("click", renderLastRegistered9);

// this funtion handles input of task
function renderLastRegistered(event){
    event.preventDefault();
    var task = $('input[name="text-input"]').val();
    if(!task){
        console.log('no task created');
        return;
    }
    booking.append('<li>' + task + '</li>');
    $('input[name="text-input"]').val('');
};



function renderLastRegistered2(event){
    event.preventDefault();
    var task2 = $('input[name="text-input2"]').val();
    if(!task2){
        console.log('no task created');
        return;
    }
    booking2.append('<li>' + task2 + '</li>');
    $('input[name="text-input2"]').val('');
};




function renderLastRegistered3(event){
    event.preventDefault();
    var task3 = $('input[name="text-input3"]').val();
    if(!task3){
        console.log('no task created');
        return;
    }
    booking3.append('<li>' + task3 + '</li>');
    $('input[name="text-input3"]').val('');
};



function renderLastRegistered4(event){
    event.preventDefault();
    var task4 = $('input[name="text-input4"]').val();
    if(!task4){
        console.log('no task created');
        return;
    
    }
    booking4.append('<li>'+ task4 + '<li>');
    $('input[name="text-input4"]').val('');
};


function renderLastRegistered5(event){
    event.preventDefault();
    var task5 = $('input[name="text-input5"]').val();
    if(!task5){
        console.log('no task created');
        return;
    
    }
    booking5.append('<li>'+ task5 + '<li>');
    $('input[name="text-input5"]').val('');
};

function renderLastRegistered6(event){
    event.preventDefault();
    var task6 = $('input[name="text-input6"]').val();
    if(!task6){
        console.log('no task created');
        return;
    
    }
    booking6.append('<li>'+ task6 + '<li>');
    $('input[name="text-input6"]').val('');
};


function renderLastRegistered7(event){
    event.preventDefault();
    var task7 = $('input[name="text-input7"]').val();
    if(!task7){
        console.log('no task created');
        return;
    
    }
    booking7.append('<li>'+ task7 + '<li>');
    $('input[name="text-input7"]').val('');
};

function renderLastRegistered8(event){
    event.preventDefault();
    var task8 = $('input[name="text-input8"]').val();
    if(!task8){
        console.log('no task created');
        return;
    
    }
    booking8.append('<li>'+ task8 + '<li>');
    $('input[name="text-input8"]').val('');
};

function renderLastRegistered9(event){
    event.preventDefault();
    var task9 = $('input[name="text-input9"]').val();
    if(!task9){
        console.log('no task created');
        return;
    
    }
    booking9.append('<li>'+ task9 + '<li>');
    $('input[name="text-input9"]').val('');
};

alertButtonEl.on('click', function () {
    alert('Seize the day!');
  });
