(function(window) {
    'use strict';
    var App = window.App || {};

    function DataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverUrl = url;
    }
    DataStore.prototype.add = function(key, val) {
        $.post(this.serverUrl, val, function(serverResponse) {
        });
    };

    DataStore.prototype.get = function(key) {
        return this.data[key];
    };

    DataStore.prototype.getAll = function() {
        return this.data;
    };

    DataStore.prototype.remove = function(key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
