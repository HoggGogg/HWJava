// function foobar(text,counter) {
//     document.write('<ul>')
//     for (let i = 0; i < counter; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>')
// }
// foobar('okten', 50);


let foobar = (text, counter) => {
    document.write('<ul>');
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};


foobar('okten', 55);