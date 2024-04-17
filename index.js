
// Wrong Code

// let passwordInput = document.querySelector(".pass-field input");
// let eyeIcon = document.querySelector(".pass-field i");
// let requirementList = document.querySelectorAll(".requirement-list li");

// const requirements = [
//     { regex: / .{8,}/, index: 0 }, // 8 Characters
//     { regex: / [0-9]/, index: 1 }, // One Number
//     { regex: / [a - z]/, index: 2 }, // one Lowercase 
//     { regex: / [^A-Za-z0-9]/, index: 3 }, // One Special Character
//     { regex: / [A-Z]/, index: 4 } // One Uppercase
// ]


// // Validation Check
// passwordInput.addEventListener("keyup", (e) => {
//     requirements.forEach(item => {
//         const isValid = item.regex.test(e.target.value);
//         const requirementItem = requirementList[item.index];

//         if(isValid) {
//             requirementItem.classList.add("valid");
//             requirementItem.firstElementChild.className = "ri-check-line";
//         } else {
//             requirementItem.classList.remove("valid");
//             requirementItem.firstElementChild.className = "ri-circle-fill";
//         }
//     });
// });

// // Show Password Section
// eyeIcon.addEventListener("click", () => {
//     passwordInput.type = passwordInput.type === "password" ? "text" : "password";

//     eyeIcon.className = `ri-eye${passwordInput.type === "password" ? "-close" : "-2"}-line`
// });

// Right Code

const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// An array of password requirements with corresponding 
// regular expressions and index of the requirement list item
const requirements = [
    { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
    { regex: /[0-9]/, index: 1 }, // At least one number
    { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Check if the password matches the requirement regex
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating class and icon of requirement item if requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "ri-check-line";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "ri-circle-fill";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon.className = `ri-eye${passwordInput.type === "password" ? "-close" : "-2"}-line`;
});