const { CustomAPIErr } = require("../errors/custom-error");

const handleError = (err, req, res, next) => {
  if (err instanceof CustomAPIErr) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong, try again later" });
};

module.exports = handleError;
