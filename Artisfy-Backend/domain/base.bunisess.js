const mapper = require('automapper-js');

class BaseBusiness{

    constructor(EntityRepository,EntityToMap){
            this._EntityRepository = EntityRepository;
            this._EntityToMap = EntityToMap;
    }

    async getAll(){
        const entities = await this._EntityRepository.getAll();
        return entities.map(entity=>mapper(this._EntityToMap,entity.toJSON()));
    }


    async get(id){
        const entity = await this._EntityRepository.get(id);
        if(!entity) return null;
        return mapper(this._EntityToMap,entity.toJSON());
    }

    async create(entity){
        entity = mapper(this._EntityToMap,entity);
        const createdEntity = await this._EntityRepository.create(entity);
        return mapper(this._EntityToMap,createdEntity);
    }

    async update(id,entity){
        entity.id = id;
        entity = mapper(this._EntityToMap,entity);
        const updatedEntity = await this._EntityRepository.update(id,entity);
        return mapper(this._EntityToMap,updatedEntity);
    }

    async delete(id){
        const deletedEntity = await this._EntityRepository.delete(id);
        return deletedEntity;
    }


}

module.exports = BaseBusiness;