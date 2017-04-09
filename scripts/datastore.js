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
        $.post(this.serverUrl, val, function(serverResponse) {});
    };

    DataStore.prototype.get = function(key, cb) {
        $.get(this.serverUrl + '/' + key, function(serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };
    DataStore.prototype.getAll = function(callback) {
        $.get(this.serverUrl, function(serverResponse) {
            callback(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function(key) {
        $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
        });
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
