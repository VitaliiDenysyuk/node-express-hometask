const _users = [];
getUsersData = () => {
    return _users;
}
addUserData = (user, done) => {
    if (user &&
        user.name) {
        let userInDatabase = _users.find((value) => (
            value.name == user.name ||
            (user._id ? value._id == user._id : false)
        ))

        if (!userInDatabase) {
            if (!user._id) {
                user._id = "" + Date.now();
            }
            _users.push(user);
            done(false, user);
        } else {
            done("Error: such user present in database already(name or id)!")
        }

    } else {
        done("Error: 'name' is absent!!!");
    }
}

findUserByIdData = (id, done) => {
    if (id) {
        let userInDatabase = _users.find((value) => (value._id === id))
        console.log(userInDatabase);
        if (!userInDatabase) {
            done(false, {});
        } else {
            done(false, userInDatabase)
        }

    } else {
        done("Error!!!");
    }
}

changeUserData = (id, user, done) => {
    if (id) {
        let userInDatabaseIndex = _users.findIndex((value) => (value._id === id))
        let userInDatabase = _users[userInDatabaseIndex];
        console.log(userInDatabase);

        if (!userInDatabase) {
            done(`Error: User by id ${id} is not found!`);
        } else {
            if (user &&
                user._id &&
                user._id !== id) {
                done(`Error: You cannot change id!`);
            }
            if (user &&
                user.name &&
                user.name !== userInDatabase.name) {
                //check maybe new name is present in database already

                let usersInDatabaseWithNewName = _users.find((value) => (
                    value.name == user.name));
                if (usersInDatabaseWithNewName) {
                    return done(`Error: you cannot change user name to ${user.name}`
                        + ` because such user present in database id = ${usersInDatabaseWithNewName._id}!`)

                }
            }
            Object.assign(_users[userInDatabaseIndex], user);
            done(false, _users[userInDatabaseIndex])
        }

    } else {
        done("Error!!!");
    }
}

deleteUserByIdData = (id, done) => {
    if (id) {
        let userInDatabaseIndex = _users.findIndex((value) => (value._id == id))
        if (userInDatabaseIndex === -1) {
            return done(`Error: user with id ${id} absent in database`);
        }
        let userInDatabase;
        if (userInDatabaseIndex == _users.length - 1) {
            userInDatabase = _users.pop();
        } else {
            // don't move all array, replace last element
            userInDatabase = _users[userInDatabaseIndex];
            _users[userInDatabaseIndex] = _users.pop();
        }
        done(false, userInDatabase)
    } else {
        done("Error!!!");
    }
}

module.exports = {
    getUsersData,
    addUserData,
    findUserByIdData,
    changeUserData,
    deleteUserByIdData
}