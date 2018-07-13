[{
    id: 341314131241,
    name: 'Andrew',
    room: 'Office 1'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        var user = this.getUser(id);

        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }

    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }

    isNameTaken (name, room) {
        var user = this.users.filter(user => (name === user.name && room === user.room))[0];
        return user ? true : false;
    }
}

module.exports = { Users };

//class Person {

//    constructor(name, age) {
//        this.name = name;
//        this.age = age;
//    }

//    getUserDescription() {
//        return `${this.name} is ${this.age} year(s) old.`;
//    }
//}

//var me = new Person('Andrew', 25);
//console.log('my name is: ', me.name);
//console.log('my age is: ', me.age);
//console.log(getUserDescription());