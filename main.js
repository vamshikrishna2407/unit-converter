// Select input field
const input = document.querySelector("#input");

// Select unit selections
const unit = document.querySelector("#unit");
const unitSearch = document.querySelector("#unitSearch");

// Select precision and notation controls
const precisionSelect = document.querySelector("#precision");
const notationSelect = document.querySelector("#notation");

// Unit search functionality
const allUnits = [
    {value: 'lbs', label: 'Pounds', category: 'Weight'},
    {value: 'grams', label: 'Grams', category: 'Weight'},
    {value: 'kilograms', label: 'Kilograms', category: 'Weight'},
    {value: 'ounces', label: 'Ounces', category: 'Weight'},
    {value: 'meters', label: 'Meters', category: 'Length'},
    {value: 'miles', label: 'Miles', category: 'Length'},
    {value: 'inches', label: 'Inches', category: 'Length'},
    {value: 'feet', label: 'Feet', category: 'Length'},
    {value: 'centimeters', label: 'Centimeters', category: 'Length'},
    {value: 'kilometers', label: 'Kilometers', category: 'Length'},
    {value: 'celsius', label: 'Celsius', category: 'Temperature'},
    {value: 'fahrenheit', label: 'Fahrenheit', category: 'Temperature'},
    {value: 'kelvin', label: 'Kelvin', category: 'Temperature'},
    {value: 'liters', label: 'Liters', category: 'Volume'},
    {value: 'gallons', label: 'Gallons', category: 'Volume'},
    {value: 'milliliters', label: 'Milliliters', category: 'Volume'},
    {value: 'cups', label: 'Cups', category: 'Volume'},
    {value: 'square-meters', label: 'Square Meters', category: 'Area'},
    {value: 'square-feet', label: 'Square Feet', category: 'Area'},
    {value: 'acres', label: 'Acres', category: 'Area'},
    {value: 'seconds', label: 'Seconds', category: 'Time'},
    {value: 'minutes', label: 'Minutes', category: 'Time'},
    {value: 'hours', label: 'Hours', category: 'Time'},
    {value: 'days', label: 'Days', category: 'Time'},
    {value: 'mph', label: 'Miles per Hour', category: 'Speed'},
    {value: 'kmh', label: 'Kilometers per Hour', category: 'Speed'},
    {value: 'mps', label: 'Meters per Second', category: 'Speed'},
    {value: 'knots', label: 'Knots', category: 'Speed'},
    {value: 'psi', label: 'PSI', category: 'Pressure'},
    {value: 'bar', label: 'Bar', category: 'Pressure'},
    {value: 'atm', label: 'Atmosphere', category: 'Pressure'},
    {value: 'pascal', label: 'Pascal', category: 'Pressure'}
];

unitSearch.addEventListener('input', debounce(() => {
    const searchTerm = unitSearch.value.toLowerCase().trim();
    
    if (!searchTerm) {
        unitSearch.removeAttribute('title');
        return;
    }
    
    const filteredUnits = allUnits.filter(unit => 
        unit.value.toLowerCase().includes(searchTerm) || 
        unit.label.toLowerCase().includes(searchTerm) ||
        unit.category.toLowerCase().includes(searchTerm)
    );
    
    // If there's an exact match, select it
    const exactMatch = filteredUnits.find(unit => 
        unit.value.toLowerCase() === searchTerm || 
        unit.label.toLowerCase() === searchTerm
    );
    
    if (exactMatch) {
        unit.value = exactMatch.value;
        unitSearch.value = '';
        unitSearch.removeAttribute('title');
        if (input.value && !isNaN(input.value)) {
            convert();
        }
        return;
    }
    
    // Show suggestions tooltip
    if (filteredUnits.length > 0) {
        const suggestions = filteredUnits.slice(0, 5).map(u => u.label).join(', ');
        unitSearch.setAttribute('title', `Suggestions: ${suggestions}`);
        
        // Auto-complete if only one match
        if (filteredUnits.length === 1) {
            unit.value = filteredUnits[0].value;
            unitSearch.value = filteredUnits[0].label;
            if (input.value && !isNaN(input.value)) {
                convert();
            }
        }
    } else {
        unitSearch.setAttribute('title', 'No units found');
    }
}, 300));

// Formatting helper function
const formatNumber = (value) => {
    const precision = parseInt(precisionSelect.value);
    const notation = notationSelect.value;
    
    if (isNaN(value) || !isFinite(value)) {
        return 'Invalid';
    }
    
    if (notation === 'scientific') {
        return value.toExponential(precision);
    } else {
        return value.toFixed(precision);
    }
};

// Debounce function for performance
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

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
        case "seconds":
            convertSeconds(numValue);
            break;
        case "minutes":
            convertMinutes(numValue);
            break;
        case "hours":
            convertHours(numValue);
            break;
        case "days":
            convertDays(numValue);
            break;
        case "mph":
            convertMph(numValue);
            break;
        case "kmh":
            convertKmh(numValue);
            break;
        case "mps":
            convertMps(numValue);
            break;
        case "knots":
            convertKnots(numValue);
            break;
        case "psi":
            convertPsi(numValue);
            break;
        case "bar":
            convertBar(numValue);
            break;
        case "atm":
            convertAtm(numValue);
            break;
        case "pascal":
            convertPascal(numValue);
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

    card1.querySelector('.value').textContent= formatNumber(value * 453.592);
    card2.querySelector('.value').textContent= formatNumber(value * 0.453592);
    card3.querySelector('.value').textContent= formatNumber(value * 16);
    
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
let favoriteConversions = JSON.parse(localStorage.getItem('favoriteConversions')) || [];

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

const addToFavorites = () => {
    const value = input.value;
    const unitValue = unit.value;
    
    if (!value || isNaN(value)) {
        alert('Please enter a valid number first');
        return;
    }
    
    const favoriteItem = {
        input: `${value} ${unitValue}`,
        unit: unitValue,
        value: value,
        timestamp: new Date().toLocaleString()
    };
    
    // Check if already in favorites
    const exists = favoriteConversions.some(fav => 
        fav.input === favoriteItem.input && fav.unit === favoriteItem.unit
    );
    
    if (exists) {
        alert('This conversion is already in your favorites!');
        return;
    }
    
    favoriteConversions.unshift(favoriteItem);
    
    // Keep only last 20 favorites
    if (favoriteConversions.length > 20) {
        favoriteConversions = favoriteConversions.slice(0, 20);
    }
    
    localStorage.setItem('favoriteConversions', JSON.stringify(favoriteConversions));
    updateFavoritesDisplay();
    alert('Added to favorites!');
};

const updateFavoritesDisplay = () => {
    const favoritesList = document.getElementById('favoritesList');
    const favoritesSection = document.getElementById('favorites');
    
    if (favoriteConversions.length === 0) {
        favoritesSection.style.display = 'none';
        return;
    }
    
    favoritesSection.style.display = 'block';
    favoritesList.innerHTML = '';
    
    favoriteConversions.forEach((item, index) => {
        const favoriteCard = document.createElement('div');
        favoriteCard.className = 'col-md-4 mb-3';
        favoriteCard.innerHTML = `
            <div class="card bg-warning">
                <div class="card-body">
                    <h6 class="card-title text-dark">${item.input}</h6>
                    <small class="text-muted">${item.timestamp}</small>
                    <div class="mt-2">
                        <button class="btn btn-sm btn-dark mr-2" onclick="loadFavorite('${item.value}', '${item.unit}')">
                            🔄 Load
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="removeFavorite(${index})">
                            🗑️ Remove
                        </button>
                    </div>
                </div>
            </div>
        `;
        favoritesList.appendChild(favoriteCard);
    });
};

const loadFavorite = (value, unit) => {
    input.value = value;
    document.getElementById('unit').value = unit;
    convert();
};

const removeFavorite = (index) => {
    favoriteConversions.splice(index, 1);
    localStorage.setItem('favoriteConversions', JSON.stringify(favoriteConversions));
    updateFavoritesDisplay();
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
    updateFavoritesDisplay();
});

// Add event listeners for precision changes
precisionSelect.addEventListener('change', () => {
    if (input.value && !isNaN(input.value)) {
        convert();
    }
});

notationSelect.addEventListener('change', () => {
    if (input.value && !isNaN(input.value)) {
        convert();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl+H for help
    if (e.ctrlKey && e.key === 'h') {
        e.preventDefault();
        showHelp();
    }
    
    // Ctrl+C for copy first result
    if (e.ctrlKey && e.key === 'c' && !window.getSelection().toString()) {
        e.preventDefault();
        copyToClipboard(1);
    }
    
    // Ctrl+D for clear history
    if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        clearHistory();
    }
    
    // Ctrl+F for add to favorites
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        addToFavorites();
    }
    
    // Escape to clear input
    if (e.key === 'Escape') {
        input.value = '';
        document.getElementById('output').style.display = 'none';
    }
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

// Time Conversions
const convertSeconds = value => {
    card1.querySelector('h4').textContent="Minutes:"
    card2.querySelector('h4').textContent="Hours:"
    card3.querySelector('h4').textContent="Days:"
    card4.querySelector('h4').textContent="Weeks:"

    card1.querySelector('.value').textContent= formatNumber(value / 60);
    card2.querySelector('.value').textContent= formatNumber(value / 3600);
    card3.querySelector('.value').textContent= formatNumber(value / 86400);
    card4.querySelector('.value').textContent= formatNumber(value / 604800);
    
    card4.style.display = 'block';
}

const convertMinutes = value => {
    card1.querySelector('h4').textContent="Seconds:"
    card2.querySelector('h4').textContent="Hours:"
    card3.querySelector('h4').textContent="Days:"
    card4.querySelector('h4').textContent="Weeks:"

    card1.querySelector('.value').textContent= formatNumber(value * 60);
    card2.querySelector('.value').textContent= formatNumber(value / 60);
    card3.querySelector('.value').textContent= formatNumber(value / 1440);
    card4.querySelector('.value').textContent= formatNumber(value / 10080);
    
    card4.style.display = 'block';
}

const convertHours = value => {
    card1.querySelector('h4').textContent="Seconds:"
    card2.querySelector('h4').textContent="Minutes:"
    card3.querySelector('h4').textContent="Days:"
    card4.querySelector('h4').textContent="Weeks:"

    card1.querySelector('.value').textContent= formatNumber(value * 3600);
    card2.querySelector('.value').textContent= formatNumber(value * 60);
    card3.querySelector('.value').textContent= formatNumber(value / 24);
    card4.querySelector('.value').textContent= formatNumber(value / 168);
    
    card4.style.display = 'block';
}

const convertDays = value => {
    card1.querySelector('h4').textContent="Seconds:"
    card2.querySelector('h4').textContent="Minutes:"
    card3.querySelector('h4').textContent="Hours:"
    card4.querySelector('h4').textContent="Weeks:"

    card1.querySelector('.value').textContent= formatNumber(value * 86400);
    card2.querySelector('.value').textContent= formatNumber(value * 1440);
    card3.querySelector('.value').textContent= formatNumber(value * 24);
    card4.querySelector('.value').textContent= formatNumber(value / 7);
    
    card4.style.display = 'block';
}

// Speed Conversions
const convertMph = value => {
    card1.querySelector('h4').textContent="Km/h:"
    card2.querySelector('h4').textContent="m/s:"
    card3.querySelector('h4').textContent="Knots:"
    card4.querySelector('h4').textContent="ft/s:"

    card1.querySelector('.value').textContent= formatNumber(value * 1.60934);
    card2.querySelector('.value').textContent= formatNumber(value * 0.44704);
    card3.querySelector('.value').textContent= formatNumber(value * 0.868976);
    card4.querySelector('.value').textContent= formatNumber(value * 1.46667);
    
    card4.style.display = 'block';
}

const convertKmh = value => {
    card1.querySelector('h4').textContent="mph:"
    card2.querySelector('h4').textContent="m/s:"
    card3.querySelector('h4').textContent="Knots:"
    card4.querySelector('h4').textContent="ft/s:"

    card1.querySelector('.value').textContent= formatNumber(value * 0.621371);
    card2.querySelector('.value').textContent= formatNumber(value * 0.277778);
    card3.querySelector('.value').textContent= formatNumber(value * 0.539957);
    card4.querySelector('.value').textContent= formatNumber(value * 0.911344);
    
    card4.style.display = 'block';
}

const convertMps = value => {
    card1.querySelector('h4').textContent="mph:"
    card2.querySelector('h4').textContent="Km/h:"
    card3.querySelector('h4').textContent="Knots:"
    card4.querySelector('h4').textContent="ft/s:"

    card1.querySelector('.value').textContent= formatNumber(value * 2.23694);
    card2.querySelector('.value').textContent= formatNumber(value * 3.6);
    card3.querySelector('.value').textContent= formatNumber(value * 1.94384);
    card4.querySelector('.value').textContent= formatNumber(value * 3.28084);
    
    card4.style.display = 'block';
}

const convertKnots = value => {
    card1.querySelector('h4').textContent="mph:"
    card2.querySelector('h4').textContent="Km/h:"
    card3.querySelector('h4').textContent="m/s:"
    card4.querySelector('h4').textContent="ft/s:"

    card1.querySelector('.value').textContent= formatNumber(value * 1.15078);
    card2.querySelector('.value').textContent= formatNumber(value * 1.852);
    card3.querySelector('.value').textContent= formatNumber(value * 0.514444);
    card4.querySelector('.value').textContent= formatNumber(value * 1.68781);
    
    card4.style.display = 'block';
}

// Pressure Conversions
const convertPsi = value => {
    card1.querySelector('h4').textContent="Bar:"
    card2.querySelector('h4').textContent="Atm:"
    card3.querySelector('h4').textContent="Pascal:"
    card4.querySelector('h4').textContent="kPa:"

    card1.querySelector('.value').textContent= formatNumber(value * 0.0689476);
    card2.querySelector('.value').textContent= formatNumber(value * 0.068046);
    card3.querySelector('.value').textContent= formatNumber(value * 6894.76);
    card4.querySelector('.value').textContent= formatNumber(value * 6.89476);
    
    card4.style.display = 'block';
}

const convertBar = value => {
    card1.querySelector('h4').textContent="PSI:"
    card2.querySelector('h4').textContent="Atm:"
    card3.querySelector('h4').textContent="Pascal:"
    card4.querySelector('h4').textContent="kPa:"

    card1.querySelector('.value').textContent= formatNumber(value * 14.5038);
    card2.querySelector('.value').textContent= formatNumber(value * 0.986923);
    card3.querySelector('.value').textContent= formatNumber(value * 100000);
    card4.querySelector('.value').textContent= formatNumber(value * 100);
    
    card4.style.display = 'block';
}

const convertAtm = value => {
    card1.querySelector('h4').textContent="PSI:"
    card2.querySelector('h4').textContent="Bar:"
    card3.querySelector('h4').textContent="Pascal:"
    card4.querySelector('h4').textContent="kPa:"

    card1.querySelector('.value').textContent= formatNumber(value * 14.6959);
    card2.querySelector('.value').textContent= formatNumber(value * 1.01325);
    card3.querySelector('.value').textContent= formatNumber(value * 101325);
    card4.querySelector('.value').textContent= formatNumber(value * 101.325);
    
    card4.style.display = 'block';
}

const convertPascal = value => {
    card1.querySelector('h4').textContent="PSI:"
    card2.querySelector('h4').textContent="Bar:"
    card3.querySelector('h4').textContent="Atm:"
    card4.querySelector('h4').textContent="kPa:"

    card1.querySelector('.value').textContent= formatNumber(value * 0.000145038);
    card2.querySelector('.value').textContent= formatNumber(value * 0.00001);
    card3.querySelector('.value').textContent= formatNumber(value * 0.00000986923);
    card4.querySelector('.value').textContent= formatNumber(value * 0.001);
    
    card4.style.display = 'block';
}