function addToLocalStorage(arrayName, objToAdd) {
    const lsItem = localStorage.getItem(arrayName);
    if (!lsItem){
        throw new Error('тере ис ноу сач арраи');
    }

        const array = JSON.parse(lsItem);
    if (typeof objToAdd === 'object'){
            array.push(objToAdd);
    }
    const jsonArray = JSON.stringify(array);
    localStorage.setItem(arrayName, jsonArray);
}
addToLocalStorage('sessionsList', {})