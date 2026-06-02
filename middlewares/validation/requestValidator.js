const validate = (schema, target = 'body') => {
  return (req, res, next) => {
    const data = req[target];
    const { error, value } = schema.validate(data, {
      abortEarly: false,
      allowUnknown: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: error.details.map((item) => ({
          field: item.path.join('.'),
          message: item.message
        }))
      });
    }

    req[target] = value;
    return next();
  };
};

module.exports = { validate };
