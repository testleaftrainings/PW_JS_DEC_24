var DashboardPage = /** @class */ (function () {
    function DashboardPage() {
    }
    DashboardPage.prototype.open = function () {
        console.log("Opening the Dashboard Page");
    };
    DashboardPage.prototype.close = function () {
        console.log("Closing the Dashboard page");
    };
    return DashboardPage;
}());
var dashboard = new DashboardPage();
dashboard.open();
dashboard.close();
