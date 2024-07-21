// Get a reference to the form element
const form = document.querySelector('form');
import { createUser, updateUser, findUser, deleteUser } from "./manageDb.js";
import { getAuth, onAuthStateChanged } from "./firebase-init.js"

document.addEventListener('DOMContentLoaded', function () {


    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log("state changed  uid", uid)
            // ...
        } else {
            // User is signed out
            console.log("onAuth user is signed out")
        }
    });

    const logineduser = auth.currentUser;

    if (logineduser !== null) {
        console.log("logined user", logineduser);
        logineduser.providerData.forEach((profile) => {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
        });
    }

    // Function to handle form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get values from form inputs
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const emailAddress = document.getElementById('emailAddress').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const password = document.getElementById('password').value;
        const cnfpassword = document.getElementById('cnfpassword').value;
        const birthdayDate = document.getElementById('birthdayDate').value;
        const address = document.getElementById('address').value;
        const country = document.querySelector('.select.form-control-lg').value;
        const state = document.getElementById('inputState').value;
        const district = document.querySelector('.select.form-control-lg').value;
        const pin = document.getElementById('pin').value;
        const occupation = document.querySelector('.select.form-control-lg').value;
        const organisation = document.getElementById('organisation').value;
        const organisationAddress = document.getElementById('organisation-address').value;
        const ongcCode = document.getElementById('ongc-code').value;
        const bankName = document.getElementById('organisation-address').value;
        const accountNo = document.getElementById('organisation-address').value;
        const branchAddress = document.getElementById('organisation-address').value;

        // Get selected gender
        let gender;
        if (document.getElementById('femaleGender').checked) {
            gender = 'Female';
        } else if (document.getElementById('maleGender').checked) {
            gender = 'Male';
        } else if (document.getElementById('otherGender').checked) {
            gender = 'Other';
        }

        // Prepare data object with form values
        const formData = {
            firstName,
            lastName,
            emailAddress,
            phoneNumber,
            password,
            cnfpassword,
            birthdayDate,
            address,
            country,
            state,
            district,
            pin,
            occupation,
            organisation,
            organisationAddress,
            ongcCode,
            bankName,
            accountNo,
            branchAddress,
            gender
        };

        // Log the form data to console (for testing)
        console.log('Form Data:', formData);

        // Here you can further process the formData, send it to a server, etc.
    });

});

