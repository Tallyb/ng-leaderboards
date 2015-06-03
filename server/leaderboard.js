/**
 * Created by Tally on 02/06/2015.
 */
Meteor.startup(function () {
    if (Players.find().count() === 0) {
        var names = ["Ada Lovelace", "Grace Hopper", "Marie Curie",
            "Carl Friedrich Gauss", "Nikola Tesla", "Claude Shannon"];
        _.each(names, function (name) {
            Players.insert({
                name: name,
                score: Math.floor(Random.fraction() * 10) * 5
            });
        });
    }
});