function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let Clients = [

    new Client(1, 'vasya', 'ivanov', 'Banana@deneg.net', '+380998765432', [{title: 'potato', price: 8}, {title: 'tomato', price: 4}]),
    new Client(2, 'petya', 'runas', 'Banana@deneg.net', '+380998765432', [{title: 'milk', price: 22}, {title: 'tomato', price: 4}]),
    new Client(3, 'kostya', 'flipov', 'Banana@deneg.net', '+380998765432', [{title: 'box', price: 2}, {title: 'tomato', price: 4}]),
    new Client(4, 'ira', 'ivanova', 'Banana@deneg.net', '+380998765432', [{title: 'table', price: 443}, {title: 'tomato', price: 4}]),
    new Client(5, 'garen', 'wex', 'Banana@deneg.net', '+380998765432', [{title: 'tv', price: 17999}, {title: 'tomato', price: 4}]),
    new Client(6, 'lux', 'wex', 'Banana@deneg.net', '+380998765432', [{title: 'usbHub', price: 299}, {title: 'tomato', price: 4}]),
    new Client(7, 'darius', 'retu', 'Banana@deneg.net', '+380998765432', [{title: 'pen', price: 15}, {title: 'tomato', price: 4}]),

];

console.log(Clients);