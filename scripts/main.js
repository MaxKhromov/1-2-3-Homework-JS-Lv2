const goodsList = new GoodsList();
goodsList.fetchGoods();
const shoppingCart = new ShoppingCart();


window.onload = () => {
    shoppingCart.render();
};

