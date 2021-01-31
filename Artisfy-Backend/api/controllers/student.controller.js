const bcrypt = require('bcryptjs');

class StudentController {

    constructor({studentService}){
        this._studentService = studentService;
    }

    async getUsers(req,res){
        const users = await this._studentService.getAllPlus();

        //DTO Simulated
        users.map(e=>{
            delete e["id"];
            delete e["password"];
            return e;
        })

        
        res.send(users)
    }

    async createUser(req,res){
        const {body} = req;
        body.password = bcrypt.hashSync(req.body.password,10);
        const user = await this._studentService.create(body);
        res.send(user)
    }


    async login(req,res){
        const {body} = req;
        const token = await this._studentService.login(body);
        res.send(token)
    }

    async verifyUser(req,res){
        const {body} = req;
        const token = await this._studentService.verifyUser(body);
        res.send(token);
    }


    

}

module.exports = StudentController;