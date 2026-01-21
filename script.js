const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        // Clear all
        if (value === "C") {
            currentInput = "";
            display.value = "";
        }

        // Erase last character
        else if (value === "⌫") {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        }

        // Percentage
        else if (value === "%") {
            if (currentInput !== "") {
                currentInput = (parseFloat(currentInput) / 100).toString();
                display.value = currentInput;
            }
        }

        // Calculate result
        else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
                currentInput = "";
            }
        }

        // Numbers, operators, dot
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});