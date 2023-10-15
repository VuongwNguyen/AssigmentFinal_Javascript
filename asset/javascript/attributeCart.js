var productsRetrieved = [];
productsRetrieved = JSON.parse(localStorage.getItem('cart'));
if (productsRetrieved.length > 0) {
    document.getElementById('flag-product').style.display = 'none';
}

function populateProductTable(data) {
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = '';

    data.forEach((product, index) => {
        const row = tableBody.insertRow();
        const nameCell = row.insertCell(0);
        const priceCell = row.insertCell(1);
        const quantityCell = row.insertCell(2);
        const totalCell = row.insertCell(3);
        const actionCell = row.insertCell(4);

        nameCell.innerHTML += `<div class="product-name"><img  src="${product.image}" alt="${product.name}"> <p>${product.name}</p></div>`;
        priceCell.textContent = product.price + "VNĐ";

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.style.width = "fit-content";
        quantityInput.value = product.quantity;
        quantityInput.addEventListener('change', () => {
            if (parseInt(quantityInput.value) == -1) {
                quantityInput.value = 0;
            }
            product.quantity = parseInt(quantityInput.value);
            totalCell.textContent = product.price * product.quantity;
            total()
        });
        quantityCell.appendChild(quantityInput);

        totalCell.textContent = product.price * product.quantity + "VNĐ";

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.height = "50px"
        deleteButton.style.width = "70px";
        deleteButton.addEventListener('click', () => {
            var confirmDelete = window.confirm(`Xác Nhận Xoá Sản Phẩm"${product.name}" `)
            if (confirmDelete) {
                data.splice(index, 1);
            }
            populateProductTable(data);
            total();

        });
        actionCell.style.textAlign = "center";
        actionCell.appendChild(deleteButton);
    });
}

populateProductTable(productsRetrieved);

function total() {
    var totalTamTinh = 0;
    var totalTax = 0;
    var totalTong = 0;
    productsRetrieved.forEach(function(product) {
        totalTamTinh += product.quantity * product.price;
        totalTax += totalTamTinh * (2 / 100);
        totalTong = totalTamTinh + totalTax;
    });
    document.getElementById("totalTamTinh").textContent = `Tạm Tính: ${totalTamTinh}VNĐ`;
    document.getElementById("totalTax").textContent = `Phí Dịch Vụ(2%): ${totalTax}VNĐ`;
    document.getElementById("totalTong").textContent = `Tổng Tiền: ${totalTong.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}VNĐ`;
}
total();


function checkOut() {
    if (productsRetrieved.length < 1) {
        alert("Không Có Sản Phẩm Nào !");
    } else {
        var confirmCheckOut = window.confirm("Xác Nhận Thanh Toán Hệ Thống Tự động, Xoá Các Sản Phẩm Có Số Lượng Là 0");
        if (confirmCheckOut) {
            productsRetrieved.forEach(function(product, index) {
                if (product.quantity < 1) {
                    productsRetrieved.splice(index, 1);
                }
            });
            alert("Đã Xoá Sản Phẩm Có Số Lượng Là 0!")
            window.open("loginAndRegister.html");
            window.close();
        } {}
    }
    populateProductTable(productsRetrieved);
    total()
}