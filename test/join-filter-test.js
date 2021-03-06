var api = require('../'),
    assert = require('assert'),
    DataTable = api.internal.DataTable;


describe('mapshaper-join-filter.js', function() {

  describe('getJoinFilter()', function() {
    var records = [
      {fips: '41', area: 500},
      {fips: '41', area: 300},
      {fips: '51', area: 500},
      {fips: '51', area: 450},
      {fips: '51', area: 150}
    ];
    var data = new DataTable(records);

    it('isMin()', function() {
      var f = api.internal.getJoinFilter(data, 'isMin(area)');
      assert.deepEqual(f([0, 1, 2, 3, 4]), [4]);
    })

    it('isMax()', function() {
      var f = api.internal.getJoinFilter(data, 'isMax(area)');
      assert.deepEqual(f([0, 1, 2, 3, 4]), [0, 2]);
    })

    it('isMode()', function() {
      var f = api.internal.getJoinFilter(data, 'isMode(fips)');
      assert.deepEqual(f([1, 2, 3, 4]), [2, 3, 4])
    })
  })


  });