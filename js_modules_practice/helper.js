function choice(items) {
    let totalItems = items.length;
    let rand = Math.random();
    let randomIndex = Math.floor(rand * totalItems);
    let randomItem = items[randomIndex];

    return randomItem;
}


function remove(items, item) {
    if (items.includes(item)) {
        let value = item;
        items = items.filter(elem => elem !== value);
        return items;
    } else {
        return undefined;
    }
}

export default choice;
export {
    remove
};