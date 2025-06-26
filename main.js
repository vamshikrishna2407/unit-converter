// Select input field
const input = document.querySelector("#input");

// Select unit selections
const unit = document.querySelector("#unit");

const convert = () => {
    // Get value of user input and units
    const value = input.value;
    const unitValue = unit.value;
    const output = document.querySelector("#output");

    // Input validation
    if (value === "" || isNaN(value)) {
        output.style.display = "none";
        return;
    }

    // Show output when there is a valid value
    output.style.display = "block";

    // Parse value as float for calculations
    const numValue = parseFloat(value);

    // check unit type
    switch(unitValue) {
        case "lbs":
            convertLbs(numValue);
            break;
        case "grams":
            convertGrams(numValue);
            break;
        case "kilograms":
            convertKilograms(numValue);
            break;
        case "ounces":
            convertOunces(numValue);
            break;
        case "meters":
            convertMeters(numValue);
            break;
        case "miles":
            convertMiles(numValue);
            break;
        case "inches":
            convertInches(numValue);
            break;
        case "feet":
            convertFeet(numValue);
            break;
        case "centimeters":
            convertCentimeters(numValue);
            break;
        case "kilometers":
            convertKilometers(numValue);
            break;
        case "celsius":
            convertCelsius(numValue);
            break;
        case "fahrenheit":
            convertFahrenheit(numValue);
            break;
        case "kelvin":
            convertKelvin(numValue);
            break;
        case "liters":
            convertLiters(numValue);
            break;
        case "gallons":
            convertGallons(numValue);
            break;
        case "milliliters":
            convertMilliliters(numValue);
            break;
        case "cups":
            convertCups(numValue);
            break;
        case "square-meters":
            convertSquareMeters(numValue);
            break;
        case "square-feet":
            convertSquareFeet(numValue);
            break;
        case "acres":
            convertAcres(numValue);
            break;
        default:
            output.style.display = "none";
    }
    
    // Add to history if conversion was successful
    if (output.style.display === "block") {
        // Get the first conversion result to add to history
        const firstCard = document.querySelector('#card-1');
        if (firstCard && firstCard.querySelector('.value')) {
            const outputValue = firstCard.querySelector('.value').textContent;
            const outputUnit = firstCard.querySelector('h4').textContent.replace(':', '');
            addToHistory(value, unitValue, outputValue, outputUnit);
        }
    }
}  

const card1 = document.querySelector("#card-1");
const card2 = document.querySelector("#card-2");
const card3 = document.querySelector("#card-3");
const card4 = document.querySelector("#card-4");

// Copy to clipboard functionality
const copyToClipboard = (cardNumber) => {
    const card = document.querySelector(`#card-${cardNumber}`);
    const value = card.querySelector('.value').textContent;
    const unit = card.querySelector('h4').textContent;
    const textToCopy = `${value} ${unit}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = card.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ Copied!';
        copyBtn.style.background = 'rgba(76, 175, 80, 0.8)';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = 'rgba(255,255,255,0.2)';
        }, 2000);
    }).catch(() => {
        alert('Failed to copy to clipboard');
    });
}

const convertLbs = value => {
    card1.querySelector('h4').textContent="Grams:"
    card2.querySelector('h4').textContent="Kilograms:"
    card3.querySelector('h4').textContent="Ounces:"

    card1.querySelector('.value').textContent= (value * 453.592).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.453592).toFixed(6);
    card3.querySelector('.value').textContent= (value * 16).toFixed(6);
    
    // Hide card 4 for weight conversions
    card4.style.display = 'none';
}

const convertGrams = value => {
    card1.querySelector('h4').textContent="Kilograms:"
    card2.querySelector('h4').textContent="Ounces:"
    card3.querySelector('h4').textContent="Lbs:"

    card1.querySelector('.value').textContent= (value / 1000).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.035274).toFixed(6);
    card3.querySelector('.value').textContent= (value * 0.00220462).toFixed(6);
    
    // Hide card 4 for weight conversions
    card4.style.display = 'none';
}

const convertKilograms = value => {
    card1.querySelector('h4').textContent="Grams:"
    card2.querySelector('h4').textContent="Lbs:"
    card3.querySelector('h4').textContent="Ounces:"

    card1.querySelector('.value').textContent= (value * 1000).toFixed(6);
    card2.querySelector('.value').textContent= (value * 2.20462).toFixed(6);
    card3.querySelector('.value').textContent= (value * 35.274).toFixed(6);
    
    // Hide card 4 for weight conversions
    card4.style.display = 'none';
}

const convertOunces = value => {
    card1.querySelector('h4').textContent="Grams:"
    card2.querySelector('h4').textContent="Kilograms:"
    card3.querySelector('h4').textContent="Lbs:"

    card1.querySelector('.value').textContent= (value * 28.3495).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.0283495).toFixed(6);
    card3.querySelector('.value').textContent= (value * 0.0625).toFixed(6);
    
    // Hide card 4 for weight conversions
    card4.style.display = 'none';
}

const convertMeters = value => {
    card1.querySelector('h4').textContent="Kilometers:"
    card2.querySelector('h4').textContent="Miles:"
    card3.querySelector('h4').textContent="Inches:"

    card1.querySelector('.value').textContent= (value / 1000).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.000621371).toFixed(6);
    card3.querySelector('.value').textContent= (value * 39.3701).toFixed(6);
    
    // Hide card 4 for length conversions
    card4.style.display = 'none';
}

const convertMiles = value => {
    card1.querySelector('h4').textContent="Kilometers:"
    card2.querySelector('h4').textContent="Meters:"
    card3.querySelector('h4').textContent="Inches:"

    card1.querySelector('.value').textContent= (value * 1.60934).toFixed(6);
    card2.querySelector('.value').textContent= (value * 1609.34).toFixed(6);
    card3.querySelector('.value').textContent= (value * 63360).toFixed(6);
    
    // Hide card 4 for length conversions
    card4.style.display = 'none';
}

const convertInches = value => {
    card1.querySelector('h4').textContent="Centimeters:"
    card2.querySelector('h4').textContent="Meters:"
    card3.querySelector('h4').textContent="Miles:"

    card1.querySelector('.value').textContent= (value * 2.54).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.0254).toFixed(6);
    card3.querySelector('.value').textContent= (value * 0.0000157828).toFixed(6);
    
    // Hide card 4 for length conversions
    card4.style.display = 'none';
}

// Catch user input event and unit change
input.addEventListener("input", convert);
unit.addEventListener("input", convert);

// Conversion history functionality
let conversionHistory = JSON.parse(localStorage.getItem('conversionHistory')) || [];

const addToHistory = (inputValue, inputUnit, outputValue, outputUnit) => {
    const historyItem = {
        input: `${inputValue} ${inputUnit}`,
        output: `${outputValue} ${outputUnit}`,
        timestamp: new Date().toLocaleString()
    };
    
    conversionHistory.unshift(historyItem);
    
    // Keep only last 10 conversions
    if (conversionHistory.length > 10) {
        conversionHistory = conversionHistory.slice(0, 10);
    }
    
    localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory));
    updateHistoryDisplay();
};

const updateHistoryDisplay = () => {
    const historyList = document.getElementById('historyList');
    const historySection = document.getElementById('history');
    
    if (conversionHistory.length === 0) {
        historySection.style.display = 'none';
        return;
    }
    
    historySection.style.display = 'block';
    historyList.innerHTML = '';
    
    conversionHistory.forEach((item, index) => {
        const historyCard = document.createElement('div');
        historyCard.className = 'col-md-6 mb-3';
        historyCard.innerHTML = `
            <div class="card bg-secondary">
                <div class="card-body">
                    <h6 class="card-title">${item.input} → ${item.output}</h6>
                    <small class="text-muted">${item.timestamp}</small>
                    <button class="btn btn-sm btn-outline-light float-right" onclick="copyHistoryItem('${item.output}')">
                        📋 Copy
                    </button>
                </div>
            </div>
        `;
        historyList.appendChild(historyCard);
    });
};

const copyHistoryItem = (value) => {
    navigator.clipboard.writeText(value).then(() => {
        alert('Copied to clipboard!');
    });
};

const clearHistory = () => {
    conversionHistory = [];
    localStorage.removeItem('conversionHistory');
    updateHistoryDisplay();
};

// Theme toggle functionality
let isDarkMode = localStorage.getItem('darkMode') === 'true';

const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    applyTheme();
};

const applyTheme = () => {
    const body = document.body;
    const themeBtn = document.querySelector('button[onclick="toggleTheme()"]');
    
    if (isDarkMode) {
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        themeBtn.textContent = '☀️ Light Mode';
    } else {
        body.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
        themeBtn.textContent = '🌙 Dark Mode';
    }
};

const showHelp = () => {
    $('#helpModal').modal('show');
};

// Initialize theme and history on page load
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    updateHistoryDisplay();
});

// Additional Length Conversions
const convertFeet = value => {
    card1.querySelector('h4').textContent="Meters:"
    card2.querySelector('h4').textContent="Inches:"
    card3.querySelector('h4').textContent="Centimeters:"

    card1.querySelector('.value').textContent= (value * 0.3048).toFixed(6);
    card2.querySelector('.value').textContent= (value * 12).toFixed(6);
    card3.querySelector('.value').textContent= (value * 30.48).toFixed(6);
    
    card4.style.display = 'none';
}

const convertCentimeters = value => {
    card1.querySelector('h4').textContent="Meters:"
    card2.querySelector('h4').textContent="Inches:"
    card3.querySelector('h4').textContent="Feet:"

    card1.querySelector('.value').textContent= (value / 100).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.393701).toFixed(6);
    card3.querySelector('.value').textContent= (value * 0.0328084).toFixed(6);
    
    card4.style.display = 'none';
}

const convertKilometers = value => {
    card1.querySelector('h4').textContent="Meters:"
    card2.querySelector('h4').textContent="Miles:"
    card3.querySelector('h4').textContent="Feet:"

    card1.querySelector('.value').textContent= (value * 1000).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.621371).toFixed(6);
    card3.querySelector('.value').textContent= (value * 3280.84).toFixed(6);
    
    card4.style.display = 'none';
}

// Temperature Conversions
const convertCelsius = value => {
    card1.querySelector('h4').textContent="Fahrenheit:"
    card2.querySelector('h4').textContent="Kelvin:"
    card3.querySelector('h4').textContent="Rankine:"

    card1.querySelector('.value').textContent= ((value * 9/5) + 32).toFixed(6);
    card2.querySelector('.value').textContent= (parseFloat(value) + 273.15).toFixed(6);
    card3.querySelector('.value').textContent= ((parseFloat(value) + 273.15) * 9/5).toFixed(6);
    
    card4.style.display = 'none';
}

const convertFahrenheit = value => {
    card1.querySelector('h4').textContent="Celsius:"
    card2.querySelector('h4').textContent="Kelvin:"
    card3.querySelector('h4').textContent="Rankine:"

    card1.querySelector('.value').textContent= ((value - 32) * 5/9).toFixed(6);
    card2.querySelector('.value').textContent= (((value - 32) * 5/9) + 273.15).toFixed(6);
    card3.querySelector('.value').textContent= (parseFloat(value) + 459.67).toFixed(6);
    
    card4.style.display = 'none';
}

const convertKelvin = value => {
    card1.querySelector('h4').textContent="Celsius:"
    card2.querySelector('h4').textContent="Fahrenheit:"
    card3.querySelector('h4').textContent="Rankine:"

    card1.querySelector('.value').textContent= (value - 273.15).toFixed(6);
    card2.querySelector('.value').textContent= (((value - 273.15) * 9/5) + 32).toFixed(6);
    card3.querySelector('.value').textContent= (value * 9/5).toFixed(6);
    
    card4.style.display = 'none';
}

// Volume Conversions
const convertLiters = value => {
    card1.querySelector('h4').textContent="Gallons (US):"
    card2.querySelector('h4').textContent="Milliliters:"
    card3.querySelector('h4').textContent="Cups (US):"
    card4.querySelector('h4').textContent="Fluid Ounces:"

    card1.querySelector('.value').textContent= (value * 0.264172).toFixed(6);
    card2.querySelector('.value').textContent= (value * 1000).toFixed(6);
    card3.querySelector('.value').textContent= (value * 4.22675).toFixed(6);
    card4.querySelector('.value').textContent= (value * 33.814).toFixed(6);
    
    card4.style.display = 'block';
}

const convertGallons = value => {
    card1.querySelector('h4').textContent="Liters:"
    card2.querySelector('h4').textContent="Milliliters:"
    card3.querySelector('h4').textContent="Cups (US):"
    card4.querySelector('h4').textContent="Fluid Ounces:"

    card1.querySelector('.value').textContent= (value * 3.78541).toFixed(6);
    card2.querySelector('.value').textContent= (value * 3785.41).toFixed(6);
    card3.querySelector('.value').textContent= (value * 16).toFixed(6);
    card4.querySelector('.value').textContent= (value * 128).toFixed(6);
    
    card4.style.display = 'block';
}

const convertMilliliters = value => {
    card1.querySelector('h4').textContent="Liters:"
    card2.querySelector('h4').textContent="Gallons (US):"
    card3.querySelector('h4').textContent="Cups (US):"
    card4.querySelector('h4').textContent="Fluid Ounces:"

    card1.querySelector('.value').textContent= (value / 1000).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.000264172).toFixed(6);
    card3.querySelector('.value').textContent= (value * 0.00422675).toFixed(6);
    card4.querySelector('.value').textContent= (value * 0.033814).toFixed(6);
    
    card4.style.display = 'block';
}

const convertCups = value => {
    card1.querySelector('h4').textContent="Liters:"
    card2.querySelector('h4').textContent="Gallons (US):"
    card3.querySelector('h4').textContent="Milliliters:"
    card4.querySelector('h4').textContent="Fluid Ounces:"

    card1.querySelector('.value').textContent= (value * 0.236588).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.0625).toFixed(6);
    card3.querySelector('.value').textContent= (value * 236.588).toFixed(6);
    card4.querySelector('.value').textContent= (value * 8).toFixed(6);
    
    card4.style.display = 'block';
}

// Area Conversions
const convertSquareMeters = value => {
    card1.querySelector('h4').textContent="Square Feet:"
    card2.querySelector('h4').textContent="Acres:"
    card3.querySelector('h4').textContent="Square Inches:"
    card4.querySelector('h4').textContent="Hectares:"

    card1.querySelector('.value').textContent= (value * 10.7639).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.000247105).toFixed(6);
    card3.querySelector('.value').textContent= (value * 1550).toFixed(6);
    card4.querySelector('.value').textContent= (value * 0.0001).toFixed(6);
    
    card4.style.display = 'block';
}

const convertSquareFeet = value => {
    card1.querySelector('h4').textContent="Square Meters:"
    card2.querySelector('h4').textContent="Acres:"
    card3.querySelector('h4').textContent="Square Inches:"
    card4.querySelector('h4').textContent="Square Yards:"

    card1.querySelector('.value').textContent= (value * 0.092903).toFixed(6);
    card2.querySelector('.value').textContent= (value * 0.0000229568).toFixed(6);
    card3.querySelector('.value').textContent= (value * 144).toFixed(6);
    card4.querySelector('.value').textContent= (value * 0.111111).toFixed(6);
    
    card4.style.display = 'block';
}

const convertAcres = value => {
    card1.querySelector('h4').textContent="Square Meters:"
    card2.querySelector('h4').textContent="Square Feet:"
    card3.querySelector('h4').textContent="Hectares:"
    card4.querySelector('h4').textContent="Square Miles:"

    card1.querySelector('.value').textContent= (value * 4046.86).toFixed(6);
    card2.querySelector('.value').textContent= (value * 43560).toFixed(6);
    card3.querySelector('.value').textContent= (value * 0.404686).toFixed(6);
    card4.querySelector('.value').textContent= (value * 0.0015625).toFixed(6);
    
    card4.style.display = 'block';
}