const BaseService = require('./base.service');

class StudentService extends BaseService{
    
    constructor({studentBusiness}){
        super(studentBusiness)
    }

    async getAllPlus(){
        const entities = await this._entityBunisess.getAllPlus();
        return entities;
    }

    async login(user){
        const token = await this._entityBunisess.login(user);
        return token;
    }

    async verifyUser(user){
        const token = await this._entityBunisess.verifyUser(user);
        return token;
    }

}

module.exports = StudentService;