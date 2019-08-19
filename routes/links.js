const {messageBuilder} = require('../helper/utils');
module.exports = {
  links: function(req, res) {
    const text = req.query.text;
    const msg = messageBuilder(text);
    res.send(msg);
  },
};
