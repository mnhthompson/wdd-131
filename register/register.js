document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
    const addButton = document.getElementById("add");
    const participantsFieldset = document.querySelector(".participants");
    const form = document.querySelector("form");
    const summary = document.getElementById("summary");

    // Function to create a new participant section
    function participantTemplate(count) {
        return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" required>
            </div>

            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}">
            </div>

            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" required>
            </div>

            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}">
            </div>

            <div class="item">
                <p>Grade</p>
                <select name="grade${count}" id="grade${count}">
                    <option selected value="" disabled></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
        `;
    }

    // Event listener for the Add Participant button
    addButton.addEventListener("click", () => {
        participantCount++;
        participantsFieldset.insertAdjacentHTML("beforeend", participantTemplate(participantCount));
    });

    // Function to calculate the total fees
    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, fee) => total + Number(fee.value || 0), 0);
    }

    // Function to generate the success message
    function successTemplate(info) {
        return `Thank you ${info.adultName} for registering. You have registered ${info.participants} participants and owe $${info.fees} in fees.`;
    }

    // Event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const adultName = document.getElementById("adult_name").value;
        const fees = totalFees();

        // Hide the form and show the summary
        form.style.display = "none";
        summary.innerHTML = successTemplate({ adultName, participants: participantCount, fees });
        summary.style.display = "block";
    });
});
