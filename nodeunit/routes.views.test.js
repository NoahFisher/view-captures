'use strict';

var viewsRoutes = require('../routes/view.js');

exports.testAddView = function(test) {
  var view = {
    uuid: "newuser123",
    url: "/products/1234-product",
  }

  var req = {
    body: {
      view: view
    }
  }

  var View = function(obj) {
    this.data = obj;
    this.save = function(callback) {
      test.equals(obj, req.body);
      callback(null, this);
    }
  }

  var fn = viewsRoutes.addView(View);

  var res = {
    json: function(obj) {
      test.equals(req.body, obj.view.data);

      test.done();
    }
  }

  fn(req, res);
}
