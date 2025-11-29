let dobInput = document.getElementById("dob-input");
dobInput.max = new Date().toISOString().split("T")[0];

const paragraph = document.getElementById("paragraph");
const calculateAgeBtn = document.getElementById("calculate-age-btn");

calculateAgeBtn.addEventListener('click', calculateAge);


function calculateAge(){
    let birthDate = new Date(dobInput.value);
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1; // +1 bcos of the 0 starting point when referring to months 
    let birthDay = birthDate.getDate();


    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();


    let userAge, userAgePlusMonth, userAgePlusDay;


    userAge = currentYear - birthYear;
    
    
    if (currentMonth >= birthMonth){
        userAgePlusMonth = currentMonth - birthMonth
    }

    else {
        userAge--;
        userAgePlusMonth = 12 - (Math.abs(currentMonth - birthMonth));
    }

    if (currentDay >= birthDay) {
        userAgePlusDay = currentDay - birthDay;
    }

    else {
        userAgePlusMonth --;
        userAgePlusDay = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
    }
    
    if (userAgePlusMonth < 0) {
        userAgePlusMonth = 11;
        userAge--;
    }

    yearOrYears = userAge === 1? "year": "years"
    monthOrMonths = userAgePlusMonth === 1? "month": "months"
    dayOrDays = userAgePlusDay === 1? "day": "days"

    console.log(userAge, userAgePlusMonth, userAgePlusDay)

    paragraph.innerHTML = `You are <span class="highlight-text">${userAge}</span> ${yearOrYears} <span class="highlight-text">${userAgePlusMonth}</span> ${monthOrMonths} <span class="highlight-text">${userAgePlusDay}</span> ${dayOrDays} old.`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}



