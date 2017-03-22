module.exports = {
  generate: (code, message, res) => {
    var error = new Error(JSON.stringify(message));
    res.status(code).send({ error: message }).end();

    throw error;
  }
};
