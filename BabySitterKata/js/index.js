

$(document).ready(function(){
    runProgram();
});

function runProgram(){
   
}



function returnTime(time){
    return time;
}

function calculateWage() {
    debugger;
    let startBedWage = Number(document.getElementById("start_wage").value);
    let bedMidWage = Number(document.getElementById("mid_wage").value);
    let midEndWage = Number(document.getElementById("end_wage").value);

    let startValue = Number(returnTime(document.getElementById("start_time").value));
    let endTimeValue = Number(returnTime(document.getElementById("end_time").value));
    let BedTimeValue = Number(returnTime(document.getElementById("bed_time").value));
    let MidTimeValue = Number(returnTime(document.getElementById("midnight_time").value));
 
    
    let validateHours = startValue > endTimeValue || startValue > BedTimeValue || startValue > MidTimeValue;
    let areHoursNullOrEmpty = startValue === 0 || endTimeValue === 0 || BedTimeValue === 0 || MidTimeValue === 0 || startBedWage === 0 || bedMidWage === 0 || midEndWage ===0;

    if(validateHours ){
        return alert("Sorry, Please make sure that your hourly time-line is correct");
    }

    if(areHoursNullOrEmpty){
        return alert("Sorry, Please Select all times and wages.");
    }
    if (validateHours) {
        return alert("Sorry, Please make sure that your hourly time-line is correct");
    }
    let totalstartBedWage = ((BedTimeValue - startValue) * startBedWage);
    let totalbedMidWage = ((MidTimeValue - BedTimeValue)*bedMidWage);
    let totalmidEndWage = ((endTimeValue - MidTimeValue) * midEndWage);

    let totalWage = totalstartBedWage + totalbedMidWage + totalmidEndWage;
    if (totalWage != 0) {
        return alert("Total Wage Per Night $" + totalWage);
    }

}


function clearValues(){
    document.getElementById("start_time").selectedIndex = 0;
    document.getElementById("end_time").selectedIndex = 0;
    document.getElementById("bed_time").selectedIndex = 0;
    document.getElementById("midnight_time").selectedIndex = 0;
    document.getElementById("start_wage").value = '';
    document.getElementById("mid_wage").value = '';
    document.getElementById("end_wage").value = '';
}