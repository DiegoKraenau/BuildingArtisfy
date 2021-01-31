const cors = require("cors");
const bodyParser = require("body-parser");
const {Router} = require("express");

module.exports = function({studentRoutes}){
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(bodyParser.json());
    
    apiRoute.use('/students', studentRoutes);

    router.use('/api',apiRoute);

    return router;
    
}