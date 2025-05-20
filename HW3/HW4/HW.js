let products = [
{
     title: `milk`,
     price: 22,
     image: `https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Glass-and-bottle-of-milk-fe0997a.jpg`,
},

{
    title: `juice`,
    price: 27,
    image: `https://cibo.ph/wp-content/uploads/2021/12/SPREMUTA-DARANCIA.jpg`,
},

{
    title: `tomato`,
    price: 47,
    image: `https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/56eed5e80f08811100d9aaee_2023-03-05_13-32-26_front.main.jpg`,
},

{
    title: `tea`,
    price: 15,
    image: `https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/3/15/tea.jpg?w=1120&h=583`,
},
];

for (const product of products) {
    document.write(`
    <div class=”product-card”>
    <h3 class=”product-title”>${product.title}. Price – ${product.price}</h3>
    <img src=”${product.image}” alt=”” class=”product-image”>
    </div>
    `)
}