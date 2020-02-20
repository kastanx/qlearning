"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrameBuffer = /** @class */ (function () {
    function FrameBuffer() {
        var _this = this;
        this.add = function (state, action) {
            _this.buffer.push({ state: state, action: action });
        };
        this.clear = function () {
            _this.buffer = [];
        };
    }
    return FrameBuffer;
}());
exports.FrameBuffer = FrameBuffer;
//# sourceMappingURL=FrameBuffer.js.map