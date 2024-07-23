
// Get references to each button by their IDs
var upcomingEventsBtn = document.getElementById('upcomingEventsBtn');
var enrolledEventsBtn = document.getElementById('enrolledEventsBtn');
var completedEventsBtn = document.getElementById('completedEventsBtn');
var courseAssessmentBtn = document.getElementById('courseAssessmentBtn');
var profileBtn = document.getElementById('profileBtn');
var changePasswordBtn = document.getElementById('changePasswordBtn');
var logoutBtn = document.getElementById('logoutBtn');

// Add onclick event listeners to each button
upcomingEventsBtn.onclick = function() {
    showTable('upcomingEvents');
};

enrolledEventsBtn.onclick = function() {
    showTable('enrolledEvents');
};

completedEventsBtn.onclick = function() {
    showTable('completedEvents');
};

courseAssessmentBtn.onclick = function() {
    showTable('courseAssessment');
};

profileBtn.onclick = function() {
    showTable('profile');
};

// Example of a button without an action, like Change Password and Logout
changePasswordBtn.onclick = function() {
    // Add code for Change Password action
    console.log('Change Password clicked');
};

logoutBtn.onclick = function() {
    // Add code for Logout action
    console.log('Logout clicked');
};



function showTable(tableId) {
    // Get all tables
    var tables = document.querySelectorAll('.table');

    // Remove 'table-active' class from all tables
    tables.forEach(function(table) {
        table.classList.remove('table-active');
    });

    // Add 'table-active' class to the selected table
    var selectedTable = document.getElementById(tableId);
    if (selectedTable) {
        selectedTable.classList.add('table-active');
    }
}