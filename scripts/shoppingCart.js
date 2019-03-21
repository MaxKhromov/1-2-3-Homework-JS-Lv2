class ShoppingCart extends GoodItem {
    constructor() {
        super();
        this.cartGoods = [];
    }
    render() {
        this.countCartPrice();
        //countCartCalories();

        let htmlCart = `<i class="fas fa-shopping-cart"></i>
                (${this.cartGoods.length}) 
                (${this.price} рублей)`;       
        document.querySelector('#cart').innerHTML = htmlCart;
    }

    clearShoppingCart() {
        this.cartGoods = [];
        this.render();
    }

    addToShoppingCart(goodItemId) {
        let goodItemIndex = goodsList.goods.find(good => {
            return good.id === goodItemId;
        });
        this.cartGoods.push(goodItemIndex);
        this.render();
    }

    countCartPrice() {
        this.price = 0;
        this.cartGoods.forEach(good => {
            this.price += +good.price;
        });
    }
}


