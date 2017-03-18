module.exports = {
  generate: (code, message) => {
    var error = new Error(JSON.stringify(message));
    error.statusCode = code;

    return error;
  }
};
