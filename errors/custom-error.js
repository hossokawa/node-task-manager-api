class CustomAPIErr extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
  }
}

const createCustomErr = (msg, statusCode) => {
  return new CustomAPIErr(msg, statusCode);
};

module.exports = { createCustomErr, CustomAPIErr };
