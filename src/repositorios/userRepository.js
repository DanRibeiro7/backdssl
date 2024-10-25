const CrudRepository = require('../lib/crudRepository');
const User = require('../models/User');

class UserRepository extends CrudRepository {
    constructor(){
        super(user);
    }
}
module.exports = new UserRepository();
