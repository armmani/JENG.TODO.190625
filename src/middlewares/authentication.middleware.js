const authenticate = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
      if(!authorization && authorization.startsWith("Bearer")) {
        createError(401, "unauthorize")
      } 
    const accessToken = authorization.split(" ")[1];
  } catch (error) {
    next(error);
  }
};
