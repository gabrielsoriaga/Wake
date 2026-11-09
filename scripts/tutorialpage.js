// Initialize title, descriptions
const stepNumber = document.querySelector(".tutorial-desc .step-number");
const stepTitle = document.querySelector(".tutorial-desc h2");
const stepDesc = document.querySelector(".tutorial-desc .desc");
const imgStep = document.querySelector(".image p")

// Initialize object list
const stepContent = {
    "1": { // Key
        title: "SET YOUR STANCE",
        description: "Float on your back with the board across the rope. Bring your knees toward your chest, keep both arms straight, and hold the handle low."
    },
    "2": {
        title: "LET THE PULL WORK",
        description: "When the line tightens, stay compact and resist the urge to pull yourself up. The cable or boat provides all the force you need."
    },
    "3": {
        title: "STAND SLOWLY",
        description: "Wait until the board is planing on top of the water, then rise gradually. Turn your lead hip toward the direction of travel.."
    },
    "4": {
        title: "FIND YOUR EDGE",
        description: "Shift gently onto your heels to move toward your back and onto your toes to move toward your front. Start with small changes."
    },
    "5": {
        title: "CROSS THE WAKE",
        description: "Shift gently onto your heels to move toward your back and onto your toes to move toward your front. Start with small changes."
    },
    "6": {
        title: "FINISH SAFELY",
        description: "Release the handle, sit back into the water, and let the board slow naturally. Raise one arm so the crew can see you."
    }
};

function toggleStep(event) {
    const clickedStep = event.currentTarget;

    // Initialize every step inside step count p class, and initialize to step
    // Remove active from each step
    document.querySelectorAll(".step-count p").forEach((step) => {
        step.classList.remove("active");
    });

    // When the step is clicked, enable as active
    clickedStep.classList.add("active");

    // Take clicked steps number from data set
    const clickedSteps = event.currentTarget.dataset.step;
    const content = stepContent[clickedSteps];

    stepNumber.textContent = `STEP ${clickedSteps}`;
    stepTitle.textContent = content.title;
    stepDesc.textContent = content.description;
    imgStep.textContent = `STEP ${clickedSteps}/6`;

}

