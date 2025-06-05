function cloner(obj) {
    let functions = [];
    for (const key in obj) {
        if ((typeof obj[key] === 'function')){
           const functionClone = obj[key].bind({});
           functions.push({functionClone, key});
        }
    }
    const cloneObj = JSON.parse(JSON.stringify(obj));
    for (const func of functions) {
        cloneObj[func.key] = func.functionClone;
    }
    console.log(cloneObj)
    return cloneObj


    throw new Error('OMG!!!');

}

const clone = cloner({id: 111, name: 'vasya', greeting() {console.log('Holla')}, foo() {console.log('bar')}});
clone.foo();