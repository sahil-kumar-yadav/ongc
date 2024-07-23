import { 
    getDatabase, ref, set, get, onValue, query, orderByChild, child, update, remove 
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { app, getAuth, onAuthStateChanged } from "./firebase-init.js";

// Initialize Firebase Authentication and Database
const auth = getAuth();
const database = getDatabase(app);
const usersRef = ref(database, 'users');
const coursesRef = ref(database, 'Forthcoming Events');

// Functions to handle events for the authenticated user
async function setEvent(type) {
    const user = auth.currentUser;
    if (!user) return;

    const uid = user.uid;
    const EventsRef = child(usersRef, `/${uid}/events/${type}`);

    const sampleEvents = {
        event1: createEventObject(1, type, 'CS101', '3 days', 'New York', 100, 20),
        event2: createEventObject(2, type, 'CS102', '2 days', 'San Francisco', 150, 15)
    };

    try {
        await set(EventsRef, sampleEvents);
        console.log(`Success in setting ${type} event`);
    } catch (error) {
        console.error(`Error setting ${type} event`, error);
    }
}

function createEventObject(SrNo, type, CourseCode, Duration, Venue, FeesPerParticipant, SeatsAvailable) {
    return {
        SrNo,
        ProgramTopicScheduleURL: `http://example.com/${type}/${SrNo}`,
        CourseCode,
        Duration,
        Venue,
        FeesPerParticipant,
        SeatsAvailable
    };
}

async function getEvent(type) {
    const user = auth.currentUser;
    if (!user) return;

    const uid = user.uid;
    const EventsRef = child(usersRef, `/${uid}/events/${type}`);

    try {
        const snapshot = await get(EventsRef);
        if (snapshot.exists()) {
            console.log(`Snapshot for ${type}:`, snapshot.val());
            return snapshot.val();
        } else {
            console.log(`No data available for ${type}`);
        }
    } catch (error) {
        console.error(`Error getting ${type} snapshot`, error);
    }
}

// Handle Authentication State
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const uid = user.uid;
        console.log("User signed in:", uid);

        upcomingEvents = await getEvent("upcomingEvents");
        enrolledEvents = await getEvent("enrolledEvents");
        completedEvents = await getEvent("completedEvents");

        console.log("Upcoming events:", upcomingEvents);
        console.log("Enrolled events:", enrolledEvents);
        console.log("Completed events:", completedEvents);
    } else {
        console.log("User signed out");
    }
});

// Functions for managing "Forthcoming Events" without login
async function createForthcomingEvent(courseData) {
    const newCourseRef = child(coursesRef, "course" + courseData.SrNo);
    try {
        await set(newCourseRef, courseData);
        console.log("Forthcoming event created successfully");
    } catch (error) {
        console.error("Error creating forthcoming event:", error);
    }
}

function getForthcomingEvent() {
    const serialRef = query(coursesRef, orderByChild('SrNo'));
    onValue(serialRef, (snapshot) => {
        const tableData = snapshot.val();
        setTableData("fouthcommingEvents",tableData);
    }, {
        onlyOnce: true
    });
}

getForthcomingEvent();
// Function to delete user data
async function deleteUser(uid) {
    const userRef = child(usersRef, uid);
    try {
        await remove(userRef);
        console.log("User deleted successfully");
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

// Function to set table data
function setTableData(tableId,tableData) {
    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = ''; // Clear existing data
    const dataArray = Object.values(tableData);
    dataArray.forEach((data) => {
        let newRow = tbody.insertRow();
        newRow.innerHTML = `
            <td>${data.SrNo}</td>
            <td><a href="${data.ProgramTopicScheduleURL}">${data.ProgramTopicScheduleURL}</a></td>
            <td>${data.CourseCode}</td>
            <td>${data.Duration}</td>
            <td>${data.Venue}</td>
            <td>${data.FeesPerParticipant}</td>
            <td>${data.SeatsAvailable}</td>
        `;
    });
}

// Event listeners for search and filter
document.getElementById('searchInput').addEventListener('keyup', function () {
    filterTable('searchInput', 0);
});

document.getElementById('filterEvents').addEventListener('change', function () {
    filterTable('filterEvents', 2);
});

function filterTable(inputId, column) {
    let input = document.getElementById(inputId);
    let filter = input.value.toUpperCase();
    const table = document.querySelector("#eventsTable tbody");
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[column];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toUpperCase().indexOf(filter) > -1 ? "" : "none";
        }
    }
}

export { createForthcomingEvent, getForthcomingEvent, deleteUser, setEvent, getEvent };

