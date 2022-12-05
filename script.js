//variables for the datepicker

var datePicker = document.getElementById('datePicker');
var choseDate = document.getElementById('choseDate');

// variables for printing values
var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDays = document.getElementById('ageDays');
var ageHours = document.getElementById('ageHours');
var ageMinutes = document.getElementById('ageMinutes');
var ageSeconds = document.getElementById('ageSeconds');
// var ageMiliSeconds = document.getElementById('ageMiliSeconds');


datePicker.addEventListener('change', function () {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var selectedDate = new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-US', options);
    choseDate.innerHTML = "DOB IS : " + DOB;

    var MiliSeconds_Btw_DOB = Date.parse(DOB);
    var MiliSeconds_Btw_Now = Date.now();
    var age_in_MiliSeconds = MiliSeconds_Btw_Now - MiliSeconds_Btw_DOB;

    // console.log(age_in_MiliSeconds);

    var miliSeconds = age_in_MiliSeconds;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = day * 365;

    //Now start the calculations

    var years = Math.round(miliSeconds / year);
    var months = years * 12;
    var days = years*365;
    var hours = Math.round(miliSeconds / hour);
    var minutes = Math.round(miliSeconds / minute);
    var seconds = Math.round(miliSeconds / second);

    //Now we will print the value in the boxes 

     ageYear.innerHTML = years;
     ageMonth.innerHTML = months;
     ageDays.innerHTML = days;
     ageHours.innerHTML = hours;
     ageMinutes.innerHTML = minutes;
     ageSeconds.innerHTML = seconds; 
    //  ageMiliSeconds.innerHTML = miliSeconds;

    document.querySelector('.age-calc').classList.add('expand');


})

