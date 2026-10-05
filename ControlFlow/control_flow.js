let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited aaccess granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "susbscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "susbscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Caregory:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

let role = "Employee";
let accessStatusDietary;
switch (role) {
    case "Employee":
        accessStatusDietary = "You are authorized to have access to \"Dietary Services\"";
        break;
    case "Enrolled Member":
        accessStatusDietary = "You are authorized to have access to \"Dietary Services\" and one-on-one interaction with dietician";
        break;
    case "Subscriber":
        accessStatusDietary = "You have partial access to facilitate \"Dietary Services\" only";
        break;
    case "Non-Subscriber":
        accessStatusDietary = "You need to enroll or at least subscribe first to avail this facility";
        break;
    default:
        accessStatusDietary = "Unknown role. Access denied";
}
console.log("Your access message:", accessStatusDietary);