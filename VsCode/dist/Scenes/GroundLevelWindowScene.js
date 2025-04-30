var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { GroundLevelWindowData01, GroundLevelWindowData02, GroundLevelWindowData03 } from "../MenuData/GroundLevelWindowData";
import { SceneObjectBase } from "../SceneObjectBase";
var GroundLevelWindowScene = (function (_super) {
    __extends(GroundLevelWindowScene, _super);
    function GroundLevelWindowScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroundLevelWindowScene.prototype.SceneSpsificStartUp = function () {
        this.SceneName = "GroundLevelWindowScene";
    };
    GroundLevelWindowScene.prototype.BuildMenuItems = function () {
        var menuItem01 = this.BuildMenuItem(GroundLevelWindowData01);
        var menuItem02 = this.BuildMenuItem(GroundLevelWindowData02);
        var menuItem03 = this.BuildMenuItem(GroundLevelWindowData03);
        return [menuItem01, menuItem02, menuItem03];
    };
    GroundLevelWindowScene.prototype.SceneSpesificMain = function () {
        console.log("You approach a window");
        this.DrawThings();
    };
    GroundLevelWindowScene.prototype.DrawThings = function () {
        var canvas = document.getElementById('gameCanvas');
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'red';
            ctx.fillRect(100, 100, 200, 150);
        }
    };
    return GroundLevelWindowScene;
}(SceneObjectBase));
export { GroundLevelWindowScene };
//# sourceMappingURL=GroundLevelWindowScene.js.map