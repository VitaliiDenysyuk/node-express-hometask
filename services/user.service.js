const { 
    getUsersData,
    addUserData,
    findUserByIdData,
    deleteUserByIdData } = require('../repositories/user.repository');

getListUsers = () => {
    return getUsersData();
}

addUser = (user, done) => {
    if (user) {
        addUserData(user, done);
    } else {
        done("Error in body request");
    }
}

findUserById = (id, done) => {
    if (id) {
        findUserByIdData(id, done);
    } else {
        done("Error in id");
    }
}

deleteUserById = (id, done) => {
    if (id) {
        deleteUserByIdData(id, done);
    } else {
        done("Error in id");
    }
}

changeUserById = (id, user, done) => {
    if (user) {
        changeUserData(id, user, done);
    } else {
        done("Error in body request");
    }
}

module.exports = {
    getListUsers,
    addUser,
    findUserById,
    changeUserById,
    deleteUserById    
}