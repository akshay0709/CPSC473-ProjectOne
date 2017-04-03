(function(window) {
    'use strict';
    var FORM_SELECTOR = '[boss-data-feedback="form"]';
    var SERVER_URL = '  http://localhost:3002/feedbackData';
    var App = window.App;
    var Boss = App.Boss;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var DataStore = new DataStore(SERVER_URL)
    var myBoss = new Boss(DataStore);
    window.myBoss = myBoss;
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myBoss.createFeedback.bind(myBoss));
})(window);
