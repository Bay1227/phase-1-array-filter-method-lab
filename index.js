// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter (el => el.charAt(0).toUpperCase() + el.slice(1) === name);
}
function fuzzyMatch(drivers, letters) {
    return drivers.filter (name => name.startsWith(letters));
}
function  matchName(drivers, match) {
    return drivers.filter(obj => obj.name === match);
}