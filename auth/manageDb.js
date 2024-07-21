import { getDatabase, ref, set, get, child, update ,remove} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { app } from "./firebase-init.js"

// console.log("managedb");
const database = getDatabase(app);
const usersRef = ref(database, 'users');
// const EmployeeRef = ref(database, 'employee'); // yeh root hai

// create 
async function createUser(userName, userEmail, userPhone, userPassword) {
    const newUserRef = child(usersRef, userName); // yeh child ref
    try {
        await set(newUserRef, {
            username: userName,
            email: userEmail,
            phone: userPhone,
            password: userPassword
        });
    } catch (error) {
        console.error("Error creating user:", error);
    }

}

// update 
async function updateUser(username, newEmail) {
    const userRef = child(usersRef, username);
    await update(userRef, {
        email: newEmail
    });
}

// find
function findUser(userName, userPassword) {
    // console.log("username",userName);
    const specificUserRef = child(usersRef, userName);
    get(specificUserRef).then((snapshot) => {
        if (snapshot.exists()) {
            if (snapshot.val().password === userPassword) {
                return true;
                console.log("Password is correct");
            }
            else {
                console.log("Password is incorrect");
                return false;
            }

            console.log(snapshot.val());
        } else {
            console.log("No data available for this user");
        }
    }).catch((error) => {
        console.error("Error getting specific user data:", error);
    });
    
}

// delete 
async function deleteUser(userName) {
    const userRef = child(usersRef, userName);
    try {
        await remove(userRef);
        console.log("User deleted successfully");
    } catch (error) {
        console.log("Error deleting user",error)
    }
    
}


export { createUser, updateUser, findUser,deleteUser };

