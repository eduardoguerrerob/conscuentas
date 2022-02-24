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
        const chartsModel = new JSONModel();

        function onInit() {
            paramModel.loadData("./localService/mockdata/params.json", "false");
            this.getView().setModel(paramModel, "paramModel");

            chartsModel.loadData("./localService/mockdata/chartOfAccount.json", "false");
            this.getView().setModel(chartsModel, "chartsModel");
        }

        function onValidateStep1(oEvent){
            const name = this.getView().byId("inp1").getValue();
            const description = this.getView().byId("txa1").getValue();
            if( name != '' && name != undefined && description != '' && description != undefined){
                // actualizar paramModel
                paramModel.setProperty("/employeeName", name);
                paramModel.setProperty("/description", description);

                const steps = this.getView().byId("CreateProductWizard").getSteps();
                steps[0].setValidated(true);
            }
            else{
                // paramModel.setProperty("/employeeName", "");
                // paramModel.setProperty("/description", "");
                const steps = this.getView().byId("CreateProductWizard").getSteps();
                steps[0].setValidated(false);
            }
        }

        function onValidateChart(){

        }

        const Main = Controller.extend("egb.cuentasui5.controller.Main", {});
        Main.prototype.onInit = onInit;
        Main.prototype.onValidateStep1 = onValidateStep1;
        Main.prototype.onValidateChart = onValidateChart;

        return Main
    });
