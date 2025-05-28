// function foobar(text) {
//     document.write(`
//     <ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>
// `)
// }
// foobar('hello okten');

let foobar = (text) => {
    return document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>
`)
}

foobar('Hi Okten');