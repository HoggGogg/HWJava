// function foobar(users) {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// foobar([
//     {id: 1, name: 'kokos', age: 41},
//     {id: 2, name: 'abrikos', age: 18},
//     {id: 3, name: 'ananas', age: 35},
//     {id: 4, name: 'persik', age: 24},
//     {id: 5, name: 'dynia', age: 21},
// ]);

let foobar = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

foobar([
    {id: 1, name: 'kokos', age: 41},
    {id: 2, name: 'abrikos', age: 18},
    {id: 3, name: 'ananas', age: 35},
    {id: 4, name: 'persik', age: 24},
    {id: 5, name: 'dynia', age: 21},
]);