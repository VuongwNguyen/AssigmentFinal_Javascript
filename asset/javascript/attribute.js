const dsSPNode = document.querySelector('.product-grid');
const imageLoad = [
    'asset/images/ao-font-hinh-gau.jpg',
    'asset/images/ao-gile-nam.jpg',
    'asset/images/chan-vay-caro.jpg',
    'asset/images/dam-suong-kieu-moi.jpg',
    'asset/images/qvuong_removebg.png',
    'asset/images/set-dan-cong-so.jpg',
    'asset/images/set-dui-thoi-trang.jpg',
    'asset/images/tuxedo-and-blazer.jpg',
    'asset/images/vest-nam.jpg',
    'asset/images/banner1.jpg',
    'asset/images/banner2.jpg',
    'asset/images/banner3.jpg',
    'asset/images/banner4.jpg',
    'asset/images/banner5.jpg',
    'asset/images/banner6.jpg',
    'asset/images/banner7.jpg',
    '',
    '',
    '',
]
imageLoad.forEach(function load(image, index) {
    image = new Image();
    imageLoad[index].src = image;

});

var productsMock = [{
        name: "Chân Váy Caro",
        description: "",
        price: "100000",
        size: "XL,X,L",
        color: "Xám Caro",
        sex: "Nữ",
        image: "asset/images/chan-vay-caro.jpg",
        quantity: 0,
        images: [
            'asset/images/ao-font-hinh-gau.jpg',
            'asset/images/ao-gile-nam.jpg',
            'asset/images/chan-vay-caro.jpg',
        ]
    },
    {
        name: "Đầm Suông Kiểu Mới",
        description: "",
        price: "150000",
        size: "XL,X,L",
        color: "Màu Hồng, Pastels",
        sex: "Nữ",
        image: "asset/images/dam-suong-kieu-moi.jpg",
        quantity: 0
    },
    {
        name: "Thời Trang Phong Cách",
        description: "",
        price: "250000",
        size: "XL,X,L",
        color: "Xanh Rêu",
        sex: "Nữ",
        image: "asset/images/set-dui-thoi-trang.jpg",
        quantity: 0
    },
    {
        name: "Đồ Bộ Dân Công Sở",
        description: "",
        price: "258000",
        size: "XL,X,L",
        color: "Trắng, Đen",
        sex: "Nữ",
        image: "asset/images/set-dan-cong-so.jpg",
        quantity: 0
    },
    {
        name: "Áo Font Hình Gấu",
        description: "",
        price: "35000",
        size: "XL,L,M",
        color: "Hoạ Tiết Gấu, Mèo, Cún",
        sex: "Nam",
        image: "asset/images/ao-font-hinh-gau.jpg",
        quantity: 0
    },
    {
        name: "Áo Giles Len Nam",
        description: "",
        price: "200000",
        size: "XL,X,L",
        color: "Xanh Đen, Xanh Trắng",
        sex: "Nam, Nữ",
        image: "asset/images/ao-gile-nam.jpg",
        quantity: 0
    },
    {
        name: "Tuxedo And Blaze",
        description: "",
        price: "290000",
        size: "XL,X,L",
        color: "Trắng, Đen, Kem",
        sex: "Nam",
        image: "asset/images/tuxedo-and-blazer.jpg",
        quantity: 0
    },
    {
        name: "Vest Nam",
        description: "",
        price: "500000",
        size: "XL,X,M",
        color: "Đen",
        sex: "Nam",
        image: "asset/images/vest-nam.jpg",
        quantity: 0
    },

]

productsMock.forEach(function(product, index) {
    dsSPNode.innerHTML +=
        `
        <div class="product" onmouseover="onmouseoverPD(this)" onmouseleave="onmouseleavePD(this)">
                <div class="product-header">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="select-container">
                        <button id="addToCart" onclick="addToCart(${index})"><i class="fa-solid fa-cart-plus"></i></button>
                        <button><i class="fa-regular fa-bookmark"></i></button>
                    </div>
                </div>
                <div class="product-footer">
                    <h2>${product.name}</h2>
                    <p >
                        Mô Tả: ${product.description}<br/>
                        Giới Tính: ${product.sex}<br/>
                        Kích Cỡ: ${product.size}<br/>
                        Màu Sắc: ${product.color}<br/>
                    </p>
                    <span>${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ</span>
                </div>
        </div>
        `
})

function onmouseoverPD(newThis) {
    newThis.querySelector('.product-header .select-container').style.display = 'block'
}

function onmouseleavePD(newThis) {
    newThis.querySelector('.product-header .select-container').style.display = 'none'
}

var index = 0;

function imageBanner() {

    var imgs = [
        'asset/images/banner5.jpg',
        'asset/images/banner6.jpg',
        'asset/images/banner7.jpg',
        'asset/images/banner4.jpg',
    ]
    document.getElementById('image').src = imgs[index]
    index++;
    if (index == 4) {
        index = 0;
    }
}
setInterval(imageBanner, 2000)

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown) => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        dropdown.addEventListener('mouseenter', () => {
            dropdownContent.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdownContent.style.display = 'none';
        });
    });
});

var addToCartButton = document.querySelectorAll('.addToCart');
addToCartButton.forEach(function(button) {
    button.addEventListener("click", );
});

function addToCart(index) {
    productsMock[index].quantity += 1
}

function theCart() {
    var cartList = document.getElementById("cartList");
    var totalPrice = document.getElementById("totalPrice");

    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    var total = 0;
    productsMock.forEach(function(product) {
        if (product.quantity > 0) {
            var listItem = document.createElement("div");
            listItem.classList.add("cart-item");
            listItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    ${product.name} - ${product.price}VNĐ - SL:${product.quantity}
                `;
            cartList.appendChild(listItem);

            total += parseFloat(product.price * product.quantity);
        }
    });
    totalPrice.textContent = `Tạm Tính: ${total}VNĐ`;
}

var Cart = []

function goToPurchase(index) {
    productsMock.forEach(function(product) {
        if (product.quantity > 0) {
            Cart.push(product);
        }
    });
    localStorage.clear();

    localStorage.setItem('cart', JSON.stringify(Cart));
    Cart = [];

    var newWindow = window.open('cart.html', '_blank');
}


function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours + ' ';
    document.getElementById('minutes').textContent = minutes + ' ';
    document.getElementById('seconds').textContent = seconds + ' ';
}
setInterval(updateClock, 1000);
updateClock();


var divcolor = document.querySelectorAll('.divider-color');

function onClickRandomColor() {
    for (let i = 0; i < divcolor.length; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        divcolor[i].style.backgroundColor = `rgba(${red},${green},${blue},1)`;
        document.querySelector('.clock-title').style.color = `rgba(${red},${green},${blue},1)`;
    }
}
setInterval(onClickRandomColor, 2000)

function logout() {
    open("index.html");
    close();
}
window.addEventListener("scroll", load);

function load() {
    const element = document.querySelectorAll(".product")
    element.forEach((element) => {
        if (isElementInViewport(element)) {
            element.style.opacity = 1;
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}