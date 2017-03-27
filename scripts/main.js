(function(window) {
    'use strict';
    var FORM_SELECTOR = '[boss-data-feedback="form"]';
    var App = window.App;
    var Boss = App.Boss;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myBoss = new Boss('ncc-1701', new DataStore());
    window.myBoss = myBoss;
    var formHandler = new FormHandler(FORM_SELECTOR);
      formHandler.addSubmitHandler(myBoss.createFeedback.bind(myBoss));
    console.log(formHandler);
})(window);
