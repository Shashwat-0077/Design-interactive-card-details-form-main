function cc_format(value) {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }
    if (parts.length > 0) {
        return parts.join(" ");
    } else {
        return value;
    }
}

cardholder_number.addEventListener("input", (e) => {
    cardholder_number.value = cc_format(cardholder_number.value);
});

const card_number = document.querySelector(".card-number");
const card_name = document.querySelector(".name");
const card_month = document.querySelector(".month");
const card_year = document.querySelector(".year");
const card_cvc = document.querySelector(".cvc-number");

cardholder_number.addEventListener("change", (e) => {
    card_number.innerHTML = cardholder_number.value;
});

cardholder_name.addEventListener("change", (e) => {
    if (cardholder_name.value.length > 20) {
        card_name.innerHTML = cardholder_name.value.substring(0, 20) + "...";
    } else {
        card_name.innerHTML = cardholder_name.value || "Jane Appleseed";
    }
});

month.addEventListener("input", (e) => {
    if (month.value.length > 2) {
        month.value = month.value.substring(0, 2);
    }
});

month.addEventListener("change", (e) => {
    if (parseInt(month.value) > 12) {
        month.value = 12;
    } else if (parseInt(month.value) <= 0) {
        month.value = "01";
    }

    if (month.value.length == 1) {
        month.value = `0${month.value}`;
    }

    card_month.innerHTML = month.value || "00";
});

year.addEventListener("input", (e) => {
    if (year.value.length > 4) {
        year.value = year.value.substring(0, 4);
    }
});

year.addEventListener("change", (e) => {
    card_year.innerHTML = year.value || "00";
});

cvc.addEventListener("input", (e) => {
    if (cvc.value.length > 4) {
        cvc.value = cvc.value.substring(0, 4);
    }
});

cvc.addEventListener("change", (e) => {
    card_cvc.innerHTML = cvc.value || "000";
});
