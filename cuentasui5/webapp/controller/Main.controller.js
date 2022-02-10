sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (Controller, JSONModel) {
        "use strict";

        const paramModel = new JSONModel();

        function onInit() {
            paramModel.loadData("./localService/mockdata/params.json", "false");
            this.getView().setModel(paramModel, "paramModel");
        }

        function onValidateStep1(oEvent){
            const name = this.getView().byId("inp1").getValue();
            if( name != '' && name != undefined){
                // actualizar paramModel
                paramModel.setProperty("/employeeName", name);
                const steps = this.getView().byId("CreateProductWizard").getSteps();
                steps[0].setValidated(true);
            }
            else{
                paramModel.setProperty("/employeeName", "");
                const steps = this.getView().byId("CreateProductWizard").getSteps();
                steps[0].setValidated(false);
            }
        }

        const Main = Controller.extend("egb.cuentasui5.controller.Main", {});
        Main.prototype.onInit = onInit;
        Main.prototype.onValidateStep1 = onValidateStep1;

        return Main
    });
