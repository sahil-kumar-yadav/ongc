import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "./firebase-init.js"

const auth = getAuth();


// login sign up
document.addEventListener('DOMContentLoaded', function () {
    // Selecting the forms

    const prism = document.querySelector('.rec-prism');
    const showLoginPage = document.querySelector('#show-signin')
    const showSignUpPage = document.querySelector('#show-signup')
    const showForgotPass = document.querySelector('#show-forgetpass')
    const showThankYouPage = document.querySelector('.show-ThankYou');
    const signInForm = document.querySelector('.face-front form');
    const forgotPasswordForm = document.querySelector('.face-back form');
    const signUpForm = document.querySelector('.face-right form');



    function showSignup() {
        prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
    }
    function showLogin() {
        prism.style.transform = "translateZ(-100px)";
    }
    function showForgotPassword() {
        prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
    }

    function showThankYou() {
        prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
    }

    showLoginPage.addEventListener('click', showLogin);
    showSignUpPage.addEventListener('click', showSignup);
    showForgotPass.addEventListener('click', showForgotPassword);


    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // console.log("state changed  uid",uid)
            // ...
        } else {
            // User is signed out
            // console.log("user is signed out")
        }
    });

    const logineduser = auth.currentUser;

    if (logineduser !== null) {
        logineduser.providerData.forEach((profile) => {
            // console.log("Sign-in provider: " + profile.providerId);
            // console.log("  Provider-specific UID: " + profile.uid);
            // console.log("  Name: " + profile.displayName);
            // console.log("  Email: " + profile.email);
            // console.log("  Photo URL: " + profile.photoURL);
        });
    }

    // Event listener for Sign In form submission
    signInForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const email = signInForm.querySelector('input[name="email"]').value;
        const password = signInForm.querySelector('input[name="password"]').value;

        // Perform any validation here (e.g., check for empty fields)

        // Example of submitting data to a backend or redirecting
        // Replace this with your actual logic

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // console.log('Email:', email);
                // console.log('Password:', password);
                // const user = userCredential.user;
                // console.log("User loged In Successfully ", user);
                showThankYou();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log("Error while login ", errorCode, errorMessage);
            });

        signInForm.reset(); // Reset the form after submission
    });

    // Event listener for Forgot Password form submission
    forgotPasswordForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const email = forgotPasswordForm.querySelector('input[name="email"]').value;

        // Perform any validation here (e.g., validate email format)

        // Example of submitting data to a backend or redirecting
        // Replace this with your actual logic
        console.log('Email:', email);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                console.log("password reset mail send");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(" Error in sending password reset mail", errorCode, errorMessage);

            });
        forgotPasswordForm.reset(); // Reset the form after submission
    });

    // Event listener for Sign Up form submission
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const email = signUpForm.querySelector('input[name="email"]').value;
        const password = signUpForm.querySelector('input[name="password"]').value;
        const password2 = signUpForm.querySelector('input[name="password2"]').value;

        // Perform validation (e.g., check password match)

        // console.log('Email:', email);
        // console.log('Password:', password);
        // console.log('Re-entered Password:', password2);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("user created successful ", user)
                showThankYou();
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error ", errorCode, errorMessage)
                // ..
            });
        signUpForm.reset(); // Reset the form after submission
    });


    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });


});




