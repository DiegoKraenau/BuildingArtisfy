const BaseRepository = require("./base.repository");
const bcrypt = require('bcryptjs');
const moment = require("moment");
const jwt = require('jwt-simple');

class StudentRepository extends BaseRepository {

    constructor({ db }) {
        super(db, "Student")
    }

    async getAllPlus() {
        return await this._db[this._entity].findAll({
            include: ["cars", "classrooms"]
        });
    }

    async login(user) {
        const userBd = await this._db[this._entity].findOne({
            where: {
                email: user.email
            }
        });

        const createToken = (userBd) =>{
            const payload = {
                id: userBd.id,
                createdAt: moment().unix(),
                expiredAt: moment().add(20,'seconds').unix()
            }
            return jwt.encode(payload,'secret phrase')
        }


        if(userBd){
            const samePassword = bcrypt.compareSync(user.password,userBd.password);
            if(samePassword){
                return ({token: createToken(userBd)})
            }else{
                return ({error:'Password incorrect'})
            }
        }else{
            return ({error:'User not found'})
        }
    }

    async verifyUser(user){
        const userBd = await this._db[this._entity].findOne({
            where: {
                email: user.email
            }
        });


        const createToken = (userBd) =>{
            const payload = {
                id: userBd.id,
                createdAt: moment().unix(),
                expiredAt: moment().add(20,'seconds').unix()
            }
            return jwt.encode(payload,'secret phrase')
        }

        if(userBd){
            return ({token: createToken(userBd)})
     
        }else{
            var newUser=this._db[this._entity].create(user)
            return ({token: createToken(newUser)})
        }
    }

}

module.exports = StudentRepository;