//importa o express
const { Router } = require("express");
//instancia o Router
const routes = Router();

//importa cada arquivo de rota:
const usersRoutes = require("./users.routes");
const foodsRoutes = require("./foods.routes");
const ingredientsRoutes = require("./ingredients.routes");
const sessionsRoutes = require("./sessions.routes");


//define o endereco para uso de cada rota
routes.use("/users", usersRoutes);
routes.use("/foods", foodsRoutes);
routes.use("/ingredients", ingredientsRoutes);
routes.use("/sessions", sessionsRoutes);

module.exports = routes;