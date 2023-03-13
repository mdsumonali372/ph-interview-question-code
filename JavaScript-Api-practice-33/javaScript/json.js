const user = { id: 1, name: 'Gorib Aamir', job: 'Actor' }
//  javaScript object notation 



const stringify = JSON.stringify(user)
console.log(user);
console.log(stringify);

/* { id: 1, name: 'Gorib Aamir', job: 'Actor' }
{"id":1,"name":"Gorib Aamir","job":"Actor"} */

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};

console.log(shop);
const shopJson = JSON.stringify(shop)
console.log(shopJson);
const shopObj = JSON.parse(shopJson)
console.log(shopObj);