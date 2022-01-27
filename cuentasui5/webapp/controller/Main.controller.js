sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        function onInit() {
        }

        const Main = Controller.extend("egb.cuentasui5.controller.Main", {});
        Main.prototype.onInit = onInit;

        return Main
    });
