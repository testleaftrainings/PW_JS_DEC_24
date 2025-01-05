//type alias -->creating custom type of data
var empDetails = "123";
function LaunchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launch chromeBrowser");
    }
    else {
        console.log("Edge browser");
    }
}
LaunchBrowser("edge");
var rectangle = {
    height: 12,
    width: 10
};
console.log(rectangle.height);
var circle = {
    height: 0,
    width: 0,
    radius: 12
};
console.log(circle.radius);
var userProfile = {
    username: "Admin",
    userId: 123,
    name: "Charan",
    empId: 345,
    active: true
};
console.log(userProfile.empId);
