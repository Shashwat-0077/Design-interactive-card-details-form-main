const submit = document.querySelector(".submit-btn");
const lightGrey = "hsl(270, 3%, 87%)";

const cardholder_name = document.querySelector("#name");
const cardholder_number = document.querySelector("#number-inp");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");

const cardholder_name_e = document.querySelector(".name.error-message");
const cardholder_number_e = document.querySelector(".number-inp.error-message");
const expire_date_e = document.querySelector(".exp-inp.error-message");
const cvc_e = document.querySelector(".cvc.error-message");

const isEmpty = (value) => {
    if (value.replace(/\s/g, "").length == 0) {
        return true;
    } else {
        return false;
    }
};

const validateName = function (value) {
    if (isEmpty(value)) {
        cardholder_name_e.innerHTML = "Can't be blank";
        cardholder_name.style.borderColor = "red";
        cardholder_name_e.style.display = "block";
        return false;
    } else {
        cardholder_name.style.borderColor = lightGrey;
        cardholder_name_e.style.display = "none";
        return true;
    }
};

const validateNumber = function (value) {
    if (isEmpty(value)) {
        cardholder_number_e.innerHTML = "Can't be blank";
        cardholder_number_e.style.display = "block";
        cardholder_number.style.borderColor = "red";
        return false;
    }

    let isValid = true;
    for (char of value) {
        switch (char) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case " ":
                break;
            default:
                isValid = false;
                break;
        }
    }

    if (!isValid) {
        cardholder_number_e.innerHTML = "Wrong format , numbers only";
        cardholder_number_e.style.display = "block";
        cardholder_number.style.borderColor = "red";
        return false;
    } else {
        cardholder_number_e.style.display = "none";
        cardholder_number.style.borderColor = lightGrey;
        return true;
    }
};

const validateMonthAndYear = function (monthValue, yearValue) {
    let isMonthValid = true;
    let isYearValid = true;

    if (isEmpty(monthValue)) {
        isMonthValid = false;
    }
    if (isEmpty(yearValue)) {
        isYearValid = false;
    }

    const monthVal = parseInt(monthValue);
    const yearVal = parseInt(yearValue);
    const currentYear = parseInt(`${new Date().getFullYear()}`.substring(2, 4));

    if (monthVal < 0 || 12 < monthVal) {
        isMonthValid = false;
    }
    if (yearVal < currentYear) {
        isYearValid = false;
    }

    if (isEmpty(monthValue) || isEmpty(yearValue)) {
        expire_date_e.innerHTML = "Can't be blank";
        expire_date_e.style.display = "block";
    } else if (monthVal <= 0 || 13 <= monthVal) {
        expire_date_e.innerHTML = "Invalid month";
        expire_date_e.style.display = "block";
    } else if (yearVal < currentYear) {
        expire_date_e.innerHTML = "Card Expired";
        expire_date_e.style.display = "block";
    } else {
        expire_date_e.style.display = "none";
    }

    if (isMonthValid) {
        month.style.borderColor = lightGrey;
    } else {
        month.style.borderColor = "red";
    }

    if (isYearValid) {
        year.style.borderColor = lightGrey;
    } else {
        year.style.borderColor = "red";
    }

    if (isMonthValid && isYearValid) {
        return true;
    } else {
        return false;
    }
};

const validateCVC = function (value) {
    if (isEmpty(value)) {
        cvc.style.borderColor = "red";
        cvc_e.innerHTML = "Can't be blank";
        cvc_e.style.display = "block";
        return false;
    } else {
        cvc.style.borderColor = lightGrey;
        cvc_e.style.display = "none";
        return false;
    }
};

submit.addEventListener("click", (e) => {
    e.preventDefault();

    let isNameValid = validateName(cardholder_name.value);
    let isNumValid = validateNumber(cardholder_number.value);
    let isExpValid = validateMonthAndYear(month.value, year.value);
    let isCVCValid = validateCVC(cvc.value);

    if (isNameValid && isNumValid && isExpValid && isCVCValid) {
    }
});
