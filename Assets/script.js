var saveButton = $("#save");
var messageText = $("#text-input");
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var taskArea = $("#task-area");
var booking = $("#booking-yeah");

var alertButtonEl = $('#alert-btn');






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

alertButtonEl.on('click', function () {
    alert('Seize the day!');
  });


saveButton.on("click", renderLastRegistered);









