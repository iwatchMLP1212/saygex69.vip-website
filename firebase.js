import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxIK75MI5dveu7bKC3NftH6qerrFHtwg",
  authDomain: "saygex69.firebaseapp.com",
  projectId: "saygex69",
  storageBucket: "saygex69.appspot.com",
  messagingSenderId: "71095943069",
  appId: "1:71095943069:web:67ec16db02ae9cf5d0b974"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Handle sign-up form submission
document.getElementById('signup-form')?.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload

  const email = document.getElementById('input-email').value;
  const password = document.getElementById('input-password').value;
  const reenteredPassword = document.getElementById('input-reenter-password')?.value;
  const errorMessage = document.getElementById('signup-error-message');

  // Passwords must match
  if (password !== reenteredPassword) {
    errorMessage.textContent = "Passwords do not match!";
    return;
  }

  // Create a new user using Firebase Auth
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      alert('User registered successfully!');
    })
    .catch((error) => {
      // Handle errors
      const errorMsg = error.message;
      errorMessage.textContent = errorMsg;
    });
});

// Handle sign-in form submission
document.getElementById('login-form')?.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload

  const email = document.getElementById('input-email').value;
  const password = document.getElementById('input-password').value;
  const rememberMe = document.getElementById('remember-me-btn').checked;
  const errorMessage = document.getElementById('signin-error-message');

  // Sign in using Firebase Auth
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      alert('User signed in successfully!');
      if (rememberMe) {
        const encodedEmail = encodeBase64(email);
        localStorage.setItem('dXNlckVtYWls', encodedEmail);
      }
    })
    .catch((error) => {
      // Handle errors
      const errorMsg = error.message;
      errorMessage.textContent = errorMsg;
    });
});

// Function to encode Base64
function encodeBase64(str) {
  return btoa(str); // btoa() encodes a string to Base64
}

// Function to decode Base64
function decodeBase64(encodedStr) {
  return atob(encodedStr); // atob() decodes a Base64 encoded string
}

async function check_service(user_id, bought_service) {
  try {
    console.log("Checking service for user ID:", user_id, "and bought service:", bought_service);

    const userBoughtServiceRef = collection(db, 'user-bought-service');
    const q = query(userBoughtServiceRef, where('user_id', '==', user_id), where('bought_service', '==', bought_service));

    // Log the query details
    // console.log("Constructed Query:", q);

    const querySnapshot = await getDocs(q);
    // console.log("QuerySnapshot size:", querySnapshot.size);

    if (querySnapshot.empty) {
      // console.log('No matching documents found.');
      return false;
    } else {
      querySnapshot.forEach((doc) => {
        console.log("Document data:", doc.data());
      });
      // console.log('Service has been purchased.');
      return true;
    }
  } catch (error) {
    console.error('Error checking service:', error.message);
    return false;
  }
}

if (localStorage.getItem('Ym91Z2h0X3NlcnZpY2U=') === null) {
  console.log('localStorage for bought service has not been created!');
  localStorage.setItem('Ym91Z2h0X3NlcnZpY2U=', 'bWllbnBoaQ==')
};

// const userId = decodeBase64(localStorage.getItem('dXNlckVtYWls')).trim();
//   const service = 'sieuden'.trim();

//   check_service(userId, service).then((result) => {
//     if (result) {
//       console.log('The user has already bought sieuden.');
//       localStorage.setItem('Ym91Z2h0X3NlcnZpY2U=', 'c2lldWRlbg==')
//     } else {
//       console.log('The user has not bought sieuden.');
//     }
//   }).catch((error) => {
//     console.error("Error in check_service function:", error.message);
//   });