
const UserRepository = require('../repositorios/userRepository');
class UserService {
    getAllUsers(){
        return userRepository.findAll();
    }
    getUserById(id){
        return userRepository.create(userData);

    }
    updateUser(id,userData){

    return userRepository.update(id,userData);
} 
deleteUser(id){
    return userRepository.delete(id);
}
}
module.exports = new UserService();