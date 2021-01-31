const BaseBusiness = require("./base.bunisess");
const Student = require("./models/student");
const mapper = require('automapper-js');

class StudentBusiness extends BaseBusiness{
    constructor({studentRepository}){
        super(studentRepository,Student)
    }

    async getAllPlus(){
        const entities = await this._EntityRepository.getAllPlus();
        return entities.map(entity=>mapper(this._EntityToMap,entity.toJSON()));
    }

    async login(user){
        const token = await this._EntityRepository.login(user);
        return token;
    }

    async verifyUser(user){
        const token = await this._EntityRepository.verifyUser(user);
        return token;
    }
}

module.exports = StudentBusiness;