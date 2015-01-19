'use strict';
/*
 * GET users listing.
 */

exports.index = function(View){
  return function(req, res) {
    View.find({}, function(error, views) {
      res.render('show', {
        title: 'Views',
        views: views
      })
    })
  }
};

exports.addView = function(View) {
  return function(req, res) {
    var view = new View(req.body);
    view.save(function(error, view) {
      if (error || !view) {
        res.json({ error : error });
      } else {
        res.json({ succcess: true});
      }
    });
  };
};

