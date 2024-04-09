document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("tax-form");

    function calculateTax(grossIncome, extraIncome, ageGroup, deduction) {
        return 0; // Placeholder value
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Get input values
        const grossIncome = parseFloat(document.getElementById("gross-income").value);
        const extraIncome = parseFloat(document.getElementById("extra-income").value);
        const ageGroup = document.getElementById("age-group").value;
        const deduction = parseFloat(document.getElementById("deduction").value);

        // Validate inputs
        if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deduction)) {
            alert("Please enter valid numeric values.");
            return;
        }

        // Calculate tax
        const taxAmount = calculateTax(grossIncome, extraIncome, ageGroup, deduction);
        const overallIncome = grossIncome + extraIncome - deduction;

        // Create popup content
        const popupContent = `
            <div class="popup-content">
                <h2>Popup Message</h2>
                <p>Your overall income will be: </p>
                <p>${overallIncome}</p>
                <p>After tax deduction</p>
                <button id="close-btn">Close</button>
            </div>        `;

        // Create popup element
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = popupContent;

        // Append popup to the form
        form.appendChild(popup);

    
        

        // Display the popup
       popup.style.display = "block";// Add event listener to close button
        const closeButton = popup.querySelector("close-btn");
        if (closeButton) {
            closeButton.addEventListener("click", function() {
                popup.style.display = "none";
            
            });
        }
    }

    form.addEventListener("submit", handleSubmit);
});
