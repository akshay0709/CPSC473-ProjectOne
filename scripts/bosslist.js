(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    var allComments;

    function BossList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    BossList.prototype.getAllComments = function(DataStore) {
        DataStore.getAll(function(s) {
            allComments = s;
            allComments.forEach(function(item) {
                $('#comments').prepend("<div class='bg-success feedbackdata'><h3>Boss Name: <i><b>" + item.bossName + "</b></i></h3><h4>Rating :<i><b>" + item.rating + "</b></i></h4><h4>Department: <i><b>" + item.bossDepartment + "</b></i></h4><p><i><b>" + item.bossFeedback + "</b></i></p><span class='clickableThumbsUp' name='clickableUp' id='" + item.id + "'><i class='fa fa-thumbs-up' aria-hidden='true'>" + item.upvotes + "</i></span>                                                            <span class='clickableThumbsDown' name='clickableDown' id='" + item.id + "'><i class='fa fa-thumbs-down' aria-hidden='true'>" + item.downvotes + "</i></span></div>");
            });
        });
    };

    App.BossList = BossList;
    window.App = App;
})(window);
