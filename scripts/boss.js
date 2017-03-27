(function(window) {
    'use strict';
    var App = window.App || {};

    function Boss(BossId, db) {
        this.BossId = BossId;
        this.db = db;
    }


    Boss.prototype.createFeedback = function(order) {
        console.log('Adding Feedback for ' + order.bossName);
        this.db.add(order.bossName, order);
    };

    // Boss.prototype.deliverOrder = function(customerId) {
    //     console.log('Delivering order for ' + customerId);
    //     this.db.remove(customerId);
    // };
    //
    // Boss.prototype.printFeedback = function() {
    //     var customerIdArray = Object.keys(this.db.getAll());
    //     // console.log('Boss #' + this.BossId + ' has pending orders:');
    //     customerIdArray.forEach(function(id) {
    //         console.log(this.db.get(id));
    //
    //     }.bind(this));
    //
    // };

    //Additional function to return all of the objects (used for QUnit testing)
    Boss.prototype.getAllBoss = function() {
        var bossArray = Object(this.db.getAll());
        return bossArray;


    };



    App.Boss = Boss;
    window.App = App;
})(window);
