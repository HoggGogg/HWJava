function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(9, 'Ignat', 'Prokofiev', 'Banana@uzu.net', '+380994563454'),
    new User(4, 'Venyamin', 'Dubogolov', 'Arbuz@uzu.net', '+380994563455'),
    new User(7, 'Galan', 'Amuraev', 'Shashlik@uzu.net', '+380994563456'),
    new User(2, 'Ira', 'Prokofieva', 'Banana2@uzu.net', '+380994563457'),
    new User(5, 'Fedya', 'Prokofiev', 'Banana3@uzu.net', '+380994563458'),
    new User(6, 'Kristyna', 'Pistoletova', 'Frashmak@uzu.net', '+380994563459'),
    new User(3, 'Monya', 'Jujuvavna', 'Tuilet@uzu.net', '+380994563450'),
    new User(8, 'Jostar', 'Jotaro', 'Bizzar@uzu.net', '+380994563451'),
    new User(1, 'Kira', 'Ananasova', 'Ananas@uzu.net', '+380994563452'),
    new User(10, 'Boris', 'Borisov', 'BorisVkvadrate@uzu.net', '+380994563453'),
];

function sorter(user1, user2) {
    return user1.id - user2.id;
}

console.log(users.sort(sorter));