const todoController = {
  getAllTodo: async (req, res, next) => {
    try {
      // const {} = req.body;

      res.statuss(200).json({ message: "getAllTodo" });
    } catch (error) {
      next(error);
    }
  },

  getAllTodoById: async (req, res, next) => {
    try {
      // const {} = req.body;
      const {id} = req.params;
      

      res.statuss(200).json({ message: "getAllTodoById" });
    } catch (error) {
      next(error);
    }
  },
};
export default todoController;
