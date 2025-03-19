// Write your solution in this file!
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = "not bob";  // No `var`, `let`, or `const` so it becomes global
}
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";  // Reassigning `bestCustomer`
}

const returnFirstTwoDrivers= function(drivers) {
    return drivers.slice(0, 2);
}
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob"; // Implicitly global
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Reassigns the global variable
}

const leastFavoriteCustomer = "some customer";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "another customer"; // Should fail
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(array0fDrivers, driverFunction) {
    return driverFunction(array0fDrivers);
}
