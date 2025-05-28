// function foobar(arrayOfPrimitives) {
//     document.write(`<ul>`)
//     for (const item of arrayOfPrimitives) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`)
// }
// foobar([123,3523,345,55,9786,2, 'qwerty', false, true]);

let foobar = (arrayOfPrimitives) => {
    document.write(`<ul>`)
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}

foobar([123,3523,345,55,9786,2, 'qwerty', false, true]);