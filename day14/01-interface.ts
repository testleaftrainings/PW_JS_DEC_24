interface PageActions {
    open(): void;
    close(): void;
}

class DashboardPage implements PageActions {
    open(): void {
        console.log("Opening the Dashboard Page");
        
    }
    close(): void {
        console.log("Closing the Dashboard page");
        
    }

}

const dashboard = new DashboardPage();
dashboard.open();
dashboard.close();