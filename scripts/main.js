const goodsList = new GoodsList();
goodsList.fetchGoods();
const shoppingCart = new ShoppingCart();


window.onload = () => {
    shoppingCart.render();
};

const app = new Vue();
console.log(app);

