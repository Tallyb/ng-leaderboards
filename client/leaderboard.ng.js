/**
 * Created by Tally on 02/06/2015.
 */

angular.module('LeaderBoard',[
    'angular-meteor',
    'ngMaterial',
    'ui.router',
    'ngAnimate'
])

.controller ('leaderBoardCtrl', function ($scope){

    /*
    Template.leaderboard.helpers({
        players: function () {
            return Players.find({}, { sort: { score: -1, name: 1 } });
        },
        selectedName: function () {
            var player = Players.findOne(Session.get("selectedPlayer"));
            return player && player.name;
        }
    });
    */

    $scope.players = $scope.$meteorCollection(function (){
        return Players.find({}, { sort: { score: -1, name: 1 } });
    });
    $scope.selectedName = function () {
        var player = Players.findOne(Session.get("selectedPlayer"));
        return player && player.name;
    };

    /*
     Template.leaderboard.events({
     'click .inc': function () {
     Players.update(Session.get("selectedPlayer"), {$inc: {score: 5}});
     }
     });

     Template.player.helpers({
     selected: function () {
     return Session.equals("selectedPlayer", this._id) ? "selected" : '';
     }
     });

     Template.player.events({
     'click': function () {
     Session.set("selectedPlayer", this._id);
     }
     });
     */

    $scope.addPoints = function () {
        _.find ($scope.players, function (e){
            return e._id === Session.get("selectedPlayer");
        }).score+=5;
    };

    $scope.selected = function (player) {
        return Session.equals("selectedPlayer", player._id) ? "selected" : '';
    };

    $scope.selectPlayer = function (player){
         Session.set("selectedPlayer", player._id);
    };
    
});



