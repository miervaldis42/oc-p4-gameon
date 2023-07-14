// Default form data
const defaultFormData = [
  {
    subject: "firstName",
    value: null,
    valid: false,
  },
  {
    subject: "lastName",
    value: null,
    valid: false,
  },
  {
    subject: "email",
    value: null,
    valid: false,
  },
  {
    subject: "birthDate",
    value: null,
    valid: false,
  },
  {
    subject: "quantity",
    value: 0,
    valid: false,
  },
  {
    subject: "location",
    value: null,
    valid: false,
  },
  {
    subject: "useTerms",
    value: false,
    valid: false,
  },
  {
    subject: "newsletter",
    value: false,
    valid: true,
  },
];

// By default, form uses the default form data
let formData = JSON.parse(JSON.stringify(defaultFormData));

/***** Names *****/
// Names need at least 2 characters whom at least 1 uppercase or lowercase letter or a number or a hyphen
const nameRegex = /^[a-z0-9\-àçéèîïôù]{2,}/i;

/***** First Name *****/
let firstNameObject = formData.filter(
  (element) => element.subject === "firstName"
)[0];

let firstNameInput = document.getElementById(firstNameObject.subject);
let firstNameInputError = document.querySelector(
  `#${firstNameObject.subject}Error`
);

firstNameInput.value = null;

firstNameInput.addEventListener("focusout", () => {
  if (
    firstNameInput.value.length >= 2 &&
    nameRegex.test(firstNameInput.value)
  ) {
    firstNameObject.value = firstNameInput.value;
    firstNameObject.valid = true;

    firstNameInput.classList.remove("data-error");
    firstNameInputError.style.display = "none";
  } else {
    firstNameObject.value = null;
    firstNameObject.valid = false;

    firstNameInput.classList.add("data-error");
    firstNameInputError.style.display = "block";
  }
});

/***** Last Name *****/
let lastNameObject = formData.filter(
  (element) => element.subject === "lastName"
)[0];

let lastNameInput = document.getElementById(lastNameObject.subject);
let lastNameInputError = document.querySelector(
  `#${lastNameObject.subject}Error`
);

lastNameInput.addEventListener("focusout", () => {
  if (lastNameInput.value.length >= 2 && nameRegex.test(lastNameInput.value)) {
    lastNameObject.value = lastNameInput.value;
    lastNameObject.valid = true;

    lastNameInput.classList.remove("data-error");
    lastNameInputError.style.display = "none";
  } else {
    lastNameObject.value = null;
    lastNameObject.valid = false;

    lastNameInput.classList.add("data-error");
    lastNameInputError.style.display = "block";
  }
});

/***** E-mail *****/
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

let emailObject = formData.filter((element) => element.subject === "email")[0];

let emailInput = document.getElementById(emailObject.subject);
let emailInputError = document.getElementById(`${emailObject.subject}Error`);

emailInput.addEventListener("focusout", () => {
  if (
    emailInput.value.trim().length >= 5 &&
    emailRegex.test(emailInput.value)
  ) {
    emailObject.value = emailInput.value.toLowerCase();
    emailObject.valid = true;

    emailInput.classList.remove("data-error");
    emailInputError.style.display = "none";
  } else {
    emailObject.value = null;
    emailObject.valid = false;

    emailInput.classList.add("data-error");
    emailInputError.style.display = "block";
  }
});

/***** Birth date *****/
let birthDateObject = formData.filter(
  (element) => element.subject === "birthDate"
)[0];

let birthDateInput = document.getElementById(birthDateObject.subject);
const birthDateInputError = document.getElementById(
  `${birthDateObject.subject}Error`
);

birthDateInput.addEventListener("focusout", () => {
  // Check if the entered Date is a valid date && if the user is 8 years old or above
  const oneYear = 365 * 1000 * 60 * 60 * 24;
  const today = new Date();
  const birthdate = new Date(birthDateInput.value);

  const age = Math.floor((today - birthdate) / oneYear);

  if (
    new Date(birthDateInput.value) !== "Invalid Date" &&
    !isNaN(new Date(birthDateInput.value)) &&
    age >= 8
  ) {
    birthDateObject.value = birthDateInput.value;
    birthDateObject.valid = true;

    birthDateInput.classList.remove("data-error");
    birthDateInputError.style.display = "none";
  } else if (
    birthDateInput.value === null ||
    birthDateInput.value.length === 0
  ) {
    // Check if the birthDate input has a proper value

    birthDateObject.value = null;
    birthDateObject.valid = false;

    birthDateInput.value = null;

    birthDateInput.classList.add("data-error");
    birthDateInputError.style.display = "block";
  } else {
    birthDateObject.value = null;
    birthDateObject.valid = false;

    birthDateInput.value = null;

    birthDateInput.classList.add("data-error");
    birthDateInputError.style.display = "block";
  }
});

/***** Previous Tournaments *****/
let quantityObject = formData.filter(
  (element) => element.subject === "quantity"
)[0];
let quantityInput = document.getElementById(quantityObject.subject);

quantityInput.addEventListener("focusout", () => {
  if (quantityInput.value.length === 0) {
    quantityObject.value = 0;

    quantityInput.value = 0;
  } else {
    quantityObject.value = Number(quantityInput.value);
  }

  quantityObject.valid = true;
});

/***** Current Tournament *****/
let locationObject = formData.filter(
  (element) => element.subject === "location"
)[0];

const locationInputs = document.querySelectorAll(
  `input[name=${locationObject.subject}]`
);
const locationInputError = document.getElementById(
  `${locationObject.subject}Error`
);

// Apply an eventListener on each radio inputs
locationInputs.forEach((l) =>
  l.addEventListener("click", () => {
    locationObject.value = l.value;
    locationObject.valid = true;

    locationInputError.style.display = "none";
  })
);

/***** Checkbox Section *****/

/**
 * @description Check if the checkbox is checked or not
 *
 * @param {HTMLInputElement} input - Checkbox HTML element
 * @param {Object} object - formData object
 */
function checkTheStateOfCheckBox(input, object) {
  if (input.checked) {
    object.value = true;
    object.valid = true;
  } else {
    object.value = false;
    object.valid = false;
  }
}

/***** Terms of Use *****/
let useTermsObject = formData.filter(
  (element) => element.subject === "useTerms"
)[0];

const useTermsInput = document.getElementById("checkbox1");
const useTermsInputError = document.querySelector(
  `#${useTermsObject.subject}Error`
);

useTermsInput.addEventListener("click", () => {
  checkTheStateOfCheckBox(useTermsInput, useTermsObject);

  useTermsInputError.style.display = useTermsObject.valid ? "none" : "block";
});

/***** Newsletter Consent *****/
const newsletterInput = document.getElementById("checkbox2");
let newsletterObject = formData.filter(
  (element) => element.subject === "newsletter"
)[0];

newsletterInput.addEventListener("click", () => {
  checkTheStateOfCheckBox(newsletterInput, newsletterObject);
});

/*****📮 Submit *****/
const form = document.querySelector("form");
const successfulSubmissionContent = document.querySelector(
  "#successfulSubmission"
);

function submitParticipationToTournament(event) {
  event.preventDefault();

  // Previous Tournaments
  if (quantityInput.value.length === 0 || quantityInput.value === undefined) {
    quantityInput.value = 0;

    quantityObject.value = 0;
    quantityObject.valid = true;
  }

  // Go through all values of the formData once gain to check if an input is invalid
  formData.forEach((inputEntry) => {
    const input = document.getElementById(inputEntry.subject);
    const errorMessage = document.getElementById(`${inputEntry.subject}Error`);

    if (!inputEntry.valid && errorMessage !== null) {
      if (
        inputEntry.subject === "location" ||
        inputEntry.subject === "useTerms" ||
        inputEntry.subject === "newsletter"
      ) {
      } else {
        input.classList.add("data-error");
      }

      errorMessage.style.display = "block";
    }
  });

  // Display successful message if everything is valid
  if (formData.every((inputEntry) => inputEntry.valid)) {
    // Reset form to original data
    form.reset();
    formData = JSON.parse(JSON.stringify(defaultFormData));

    form.style.display = "none";
    successfulSubmissionContent.style.display = "flex";
  }
}
