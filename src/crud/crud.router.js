const router = require("express").Router();
const Services = require("./crud.services");

router.get("/users", Services.getAll);
router.post("/users", Services.createOne);

router.get("/users/:id", Services.getOne);

module.exports = router;
