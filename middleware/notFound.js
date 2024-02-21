const notFound = (req, res) => res.status(404).send("Unknown route");

module.exports = notFound;
