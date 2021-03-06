var Query = require('../lib/query');
var assert = require('assert');
var seed = require('./fixtures/seed');
var db = seed.db;
require('mocha');
var expectedSQL = "SELECT `users`.`id` AS users_id, `users`.`name` AS users_name FROM `users` WHERE `users`.`type` IS NULL";
var expectedValues = [];

describe('Select Query', function () {
  describe('isNull', function () {

    it('should generate the proper SQL', function () {
      var query = new Query(db.model('User'));
      query
        .select('name')
        .where('type')
        .isNull();

      assert.equal(expectedSQL, query.toString());
      assert.deepEqual(expectedValues, query.values());

    });

  });
});

