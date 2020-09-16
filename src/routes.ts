import * as express from "express";
import { checkJwt } from "./checkJwt";

import CatCtrl from "./controllers/cat";
import UserCtrl from "./controllers/user";

function setRoutes(app): void {
  const router = express.Router();
  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();

  // Cats
  router.route("/cats").get([checkJwt],catCtrl.getAll);
  router.route("/cats/count").get([checkJwt],catCtrl.count);
  router.route("/cat").post([checkJwt],catCtrl.insert);
  router.route("/cat/:id").get([checkJwt],catCtrl.get);
  router.route("/cat/:id").put([checkJwt],catCtrl.update);
  router.route("/cat/:id").delete([checkJwt],catCtrl.delete);

  // Users
  router.route("/login").post(userCtrl.login);
  router.route("/users").get([checkJwt], userCtrl.getAll);
  router.route("/users/count").get([checkJwt],userCtrl.count);
  router.route("/user").post([checkJwt],userCtrl.insert);
  router.route("/user/:id").get([checkJwt],userCtrl.get);
  router.route("/user/:id").put([checkJwt],userCtrl.update);
  router.route("/user/:id").delete([checkJwt],userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use("/api", router);
}

export default setRoutes;
