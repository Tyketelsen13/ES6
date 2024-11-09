const items = [];
export const addItems = (items) => {
items.push(items); // add items
console.log('ADDED ITEM: ${items}');
};

export const removeItems = (items) => {
    let isRemoved = false;
    for (let i = 0; i < items.length; i++) {
        if (items[i] === 'item')
        {
            isRemoved = true;
            items.splice(i, 1);
            i--; // remove
        }
    }
    if (isRemoved) {
        console.log('REMOVED ITEM: item');
    } else {
        console.log('No item found to remove.');
    }
};
export const listItems = () => {
    console.log('CURRENT ITEMS: ${items.join(', ')}');
    for ( const item of items) {
        console.log(`*${item}`);
    }
};