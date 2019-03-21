//Класс товара
class GoodItem {
    constructor(id = null, name = 'Название отсутствует', price = 'Цена договорная', description = 'Описание отсутствует', picture = 'noImage.jpg') {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.picture = picture;
    }
    render() {
        let html = `<div id="goodItem" class="goods__goodItem">
                        <img class="goodItem__picture" src = "img/${this.picture}" alt = "${this.name}" />
                        <div class="goodItem__description">
                            <h2 class="description__name">${this.name}</h2>
                            <p class="description__text">${this.description}</p>
                            <span class="description__price">Стоймость: ${this.price}</span>
                            <input class="description__button" type="button" name="addToShoppingCart" value="В корзину" onclick="shoppingCart.addToShoppingCart(${this.id})" />
                        </div>
                    </div>`;
        return html;
    }
}

// Класс всех товаров
class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        let goodsPromise = get('JSON/goods.json');
        goodsPromise.then(parcedGoods => {
            this.goods = parcedGoods;
            this.render();
        });
        goodsPromise.catch(err => new Error('Error'));
         
    }

    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodItem(good.id, good.name, good.price, good.description, good.picture);
            listHtml += goodItem.render();
        })
        document.querySelector('#goods').innerHTML = listHtml;
    }
}

/*------------PROMISIES-----------------*/

function get(url) {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.onload = () => {
            if (xhttp.status == 200) {
                resolve(JSON.parse(xhttp.response));
            } else {
                reject(xhttp.statusText);
            }
        };
        xhttp.onerror = () => {
            reject(xhttp.statusText);
        };
        xhttp.send();
    });
}

