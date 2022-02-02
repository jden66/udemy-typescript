"use strict";
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    // solution1. add parameter 'this' of Department type.
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    return Department;
}());
var accounting = new Department("accounting");
accounting.describe();
// solution2. add property name of accountingCopy
var accountingCopy = { name: "dummy", describe: accounting.describe };
// this.name >> undefined. Because this.name's this is accountingCopy.
// accountingCopy hasn't name property.
accountingCopy.describe();
//# sourceMappingURL=app.js.map