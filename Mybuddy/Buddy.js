"use strict";
exports.__esModule = true;
exports.Buddy = void 0;
var Buddy = /** @class */ (function () {
    function Buddy(traineeList) {
        this.traineeList = traineeList;
        this.length = traineeList.length;
    }
    Buddy.prototype.findTrainee = function (name, d2) {
        var result = [];
        if (typeof d2 == 'undefined') {
            if (typeof name == 'string' || name instanceof String) {
                for (var _i = 0, _a = this.traineeList; _i < _a.length; _i++) {
                    var t_1 = _a[_i];
                    if (t_1.traineeName == name) {
                        result.push(t_1);
                    }
                }
            }
            else {
                for (var _b = 0, _c = this.traineeList; _b < _c.length; _b++) {
                    var t_2 = _c[_b];
                    if (t_2.dob.valueOf() > name.valueOf()) {
                        result.push(t_2);
                    }
                }
            }
        }
        else {
            for (var _d = 0, _e = this.traineeList; _d < _e.length; _d++) {
                var t = _e[_d];
                if (t.dob.valueOf() >= name.valueOf() &&
                    t.dob.valueOf() <= d2.valueOf()) {
                    result.push(t);
                }
            }
        }
        return result;
    };
    return Buddy;
}());
exports.Buddy = Buddy;
