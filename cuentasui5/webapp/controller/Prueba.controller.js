import { spawn, spawnSync } from "child_process";
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], 

/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.m.MessageToast} MessageToast 
 */
function(Controller, MessageToast) {
    'use strict';

    // return Controller.extend("egb.cuentasui5.controller.Prueba", {
    //     onInit: function() {},
    //     onShowTable: function() {}
    // })


    function onInit() {
    }

    function onShowTable() {
    }

    const Prueba = Controller.extend("egb.cuentasui5.controller.Prueba", {});

    Prueba.prototype.onInit = onInit;
    Prueba.prototype.onShowTable = onShowTable;

    return Prueba;
    
});