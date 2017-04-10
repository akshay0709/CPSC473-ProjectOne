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

    DataStore.prototype.getFeedback = function(key, cb) {
        $.get(this.serverUrl + '/?bossName=' + key, function(serverResponse) {
            //console.log(serverResponse);
            cb(serverResponse);
            $("#comments").empty();
            var length = serverResponse.length;
            var filteredFeedback;
            for (var i = 0; i < length; ++i) {
                filteredFeedback = serverResponse[i];
                $('#comments').prepend("<div class='bg-success feedbackdata'><h3>Boss Name: <i><b>" + filteredFeedback.bossName + "</b></i></h3><h4>Rating :<i><b>" + filteredFeedback.rating + "</b></i></h4><h4>Department: <i><b>" + filteredFeedback.bossDepartment + "</b></i></h4><p><i><b>" + filteredFeedback.bossFeedback + "</b></i></p><span class='clickableThumbsUp' name='clickableUp' id='" + filteredFeedback.id + "'><i class='fa fa-thumbs-up' aria-hidden='true'>" + filteredFeedback.upvotes + "</i></span>                                                            <span class='clickableThumbsDown' name='clickableDown' id='" + filteredFeedback.id + "'><i class='fa fa-thumbs-down' aria-hidden='true'>" + filteredFeedback.downvotes + "</i></span></div>");
            }
        });
    };

    DataStore.prototype.get = function(key, cb) {
        $.ajax({
            url: this.serverUrl + '/' + key,
            type: 'GET',
            async: false,
            success: function(response) {
                cb(response);
            }
        });
    };

    DataStore.prototype.getAll = function(callback) {
        $.get(this.serverUrl, function(serverResponse) {
            callback(serverResponse);
        });
    };

    DataStore.prototype.updateUpvotes = function(id, newdata) {
        $.ajax({
            url: this.serverUrl + '/' + id,
            type: 'PUT',
            data: newdata,
            async: false,
            success: function(response) {}
        });
    };

    DataStore.prototype.remove = function(key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
