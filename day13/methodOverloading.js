var ElementAction = /** @class */ (function () {
    function ElementAction() {
    }
    ElementAction.prototype.clickEle = function (locatorValue, forceClick) {
        if (forceClick == true) {
            console.log("Do force Click");
        }
        else {
            console.log("Click normally");
        }
    };
    return ElementAction;
}());
new ElementAction().clickEle("a");
new ElementAction().clickEle("a", true);
