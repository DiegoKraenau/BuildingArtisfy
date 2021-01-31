const {asClass,asFunction,createContainer,asValue} = require("awilix");

//App Start
const Startup = require("./startup");
const Server = require("./server");
const config = require("../config/environments");
const Router = require("./routes");


//Routes
const StudentRoutes = require("./routes/student.route");

//Controller
const {StudentController} = require('./controllers');

//Services
const {StudentService} = require('../services');

//Business
const {StudentBusiness} = require('../domain');

//Repository 
const {StudentRepository} = require('../dal/repository')

//db
const db = require('../dal/models');


const container=createContainer();

container 
    .register({
        app: asClass(Startup).singleton(),
        server: asClass(Server).singleton(),
        config: asValue(config),
        router: asFunction(Router).singleton()

    })
    .register({
        //Routes
        studentRoutes: asFunction(StudentRoutes).singleton()
    })
    .register({
        //Controllers
        studentController: asClass(StudentController).singleton()
    })
    .register({
        //Services
        studentService: asClass(StudentService).singleton()
    })
    .register({
        //Business
        studentBusiness: asClass(StudentBusiness).singleton()
    })
    .register({
        studentRepository: asClass(StudentRepository).singleton()
    })
    .register({
        db : asValue(db)
    });


module.exports = container;


