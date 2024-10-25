class User{
    static tableName='u';

    constructor(id,name,email){
        this.id=id;
        this.name = name;
        this.email = email;

    }
}
module.exports = User;