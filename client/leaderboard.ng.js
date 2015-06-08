/**
 * Created by Tally on 02/06/2015.
 */

angular.module('LeaderBoard',[
    'angular-meteor',
    'ngMaterial',
    'ui.router',
    'ngAnimate'
])

.controller ('leaderBoardCtrl', function ($scope, $meteor){

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

    $scope.selectedPlayer = undefined;

    $scope.addPoints = function () {
        if ($scope.selectedPlayer) {
            $scope.selectedPlayer.score +=5;
        }
    };

    $scope.isSelected = function (player) {
        return $scope.selectedPlayer && $scope.selectedPlayer._id === player._id;
    };

    $scope.selectPlayer = function (player){
        $scope.selectedPlayer = $scope.$meteorObject (Players, player._id) ;
    };
    
});



