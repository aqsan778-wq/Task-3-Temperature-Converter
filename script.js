// =========================================
// GET HTML ELEMENTS
// =========================================

const temperatureInput = document.getElementById("temperature");

const unitSelect = document.getElementById("unit");

const convertBtn = document.getElementById("convertBtn");

const errorMessage = document.getElementById("errorMessage");

const celsiusResult = document.getElementById("celsiusResult");

const fahrenheitResult = document.getElementById("fahrenheitResult");

const kelvinResult = document.getElementById("kelvinResult");


// =========================================
// CONVERT BUTTON
// =========================================

convertBtn.addEventListener("click", function () {

    const inputValue = temperatureInput.value.trim();

    const selectedUnit = unitSelect.value;


    // Clear old error

    errorMessage.style.display = "none";

    errorMessage.textContent = "";


    // Clear previous results

    celsiusResult.textContent = "--";

    fahrenheitResult.textContent = "--";

    kelvinResult.textContent = "--";


    // =====================================
    // VALIDATE EMPTY INPUT
    // =====================================

    if (inputValue === "") {

        showError("Please enter a temperature value.");

        return;
    }


    // =====================================
    // VALIDATE NUMBER
    // =====================================

    const temperature = Number(inputValue);


    if (!Number.isFinite(temperature)) {

        showError("Please enter a valid numeric temperature.");

        return;
    }


    // =====================================
    // CONVERT INPUT TO CELSIUS
    // =====================================

    let celsius;


    if (selectedUnit === "C") {

        celsius = temperature;

    } else if (selectedUnit === "F") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (selectedUnit === "K") {

        celsius = temperature - 273.15;
    }


    // =====================================
    // ABSOLUTE ZERO VALIDATION
    // =====================================

    if (celsius < -273.15) {

        showError(
            "Temperature cannot be below absolute zero (-273.15 °C)."
        );

        return;
    }


    // =====================================
    // CONVERT TO ALL UNITS
    // =====================================

    const fahrenheit = (celsius * 9 / 5) + 32;

    const kelvin = celsius + 273.15;


    // =====================================
    // DISPLAY RESULTS
    // =====================================

    celsiusResult.textContent =
        formatNumber(celsius) + " °C";


    fahrenheitResult.textContent =
        formatNumber(fahrenheit) + " °F";


    kelvinResult.textContent =
        formatNumber(kelvin) + " K";
});


// =========================================
// ERROR FUNCTION
// =========================================

function showError(message) {

    errorMessage.textContent = message;

    errorMessage.style.display = "block";
}


// =========================================
// FORMAT NUMBERS
// =========================================

function formatNumber(number) {

    return Number(number.toFixed(2));
}


// =========================================
// ENTER KEY SUPPORT
// =========================================

temperatureInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        convertBtn.click();
    }
});