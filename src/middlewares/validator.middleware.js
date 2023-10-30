export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      params: req.params,
    });
    next();
  } catch (error) {
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};
