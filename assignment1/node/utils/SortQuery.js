var _ = require('lodash');

var getKeyValue = (obj) => obj.match(/^([^:]+)|(a|d)?$/gi);

var getList = (query) => {
  var list = [];
  if(query) {
    _.each(query.split(','), (value) => {
      var sort = getKeyValue(value);
      list.push([sort[0], sort[1] === 'a' ? 'ASC' : 'DESC']);
    });
  }
  return list;
}

module.exports = {
  getList: getList
};
