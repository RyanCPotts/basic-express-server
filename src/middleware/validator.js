
const queryValidator = (req, res, next) => {
  const { name } = req.query;
  if (name) {

    next();
  } else {

    res.status(400).json({ error: "Name property missing in query string" });
  }
};

module.exports = {queryValidator};
