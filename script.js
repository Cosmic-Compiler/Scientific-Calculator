// Function to append value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    // Avoid appending multiple operators at once
    if (value === '.' && display.value.includes('.')) {
        return;  // Prevent multiple decimal points in the same number
    }
    display.value += value;
}

// Function to handle backspace (delete the last character)
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);  // Removes the last character
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression
function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace multiplication and division symbols with JavaScript's syntax
        let expression = display.value.replace('×', '*').replace('÷', '/');
        
        // Check for division by zero before evaluating the expression
        if (/\/0/.test(expression)) {
            display.value = 'Error';  // Show "Error" if there's division by zero
            return;
        }
        
        // Evaluate the expression
        const result = eval(expression);

        // Check for invalid results (NaN or Infinity)
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            display.value = 'Error';  // Show error if result is Infinity or NaN
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = 'Error';  // Show error if there is an invalid expression
    }
}
