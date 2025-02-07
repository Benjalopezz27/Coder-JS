
let productos = [
    {id: 1, name: "Fernet 750cc", price: 12000, stock: 12},
    {id: 2, name: "Smirnoff 750cc", price: 10000, stock: 12},
    {id: 3, name: "Quilmes 344cc", price: 1400, stock: 24},
    {id: 4, name: "Aperol 700cc", price: 9500, stock: 6}
];


localStorage.clear();
let productosJSON = JSON.stringify(productos);
localStorage.setItem("productos", productosJSON);

const Producto = function(name, price, stock) {
    this.id = productos.length + 1;
    this.name = name;
    this.price = price;
    this.stock = stock;
}


async function createProductWithAPI(name, price, stock) {
    const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: name,
            price: price,
            description: 'Producto agregado desde el proyecto',
            category: 'bebidas' 
            
        })
    })
    if (response) {
        const newProduct = await response.json();
        console.log("Producto creado en la API: ", newProduct)
        return newProduct;
    } else {
        console.error("Error al crear producto en la API:", response.statusText)
    }

}

async function createProduct() {
    let name, price, stock;

    const { value: formValues } = await Swal.fire({
        title: "Agregar Producto",
        html: `
            <input autocomplete="off" placeholder="Nombre del Producto" id="swal-input1" class="swal2-input">
            <input autocomplete="off" placeholder="Precio del producto" id="swal-input2" class="swal2-input">
            <input autocomplete="off" placeholder=" Stock del producto" id="swal-input3" class="swal2-input">
        `,
        focusConfirm: false,
        preConfirm: () => {
            if (document.getElementById("swal-input1").value == "" || document.getElementById("swal-input2").value == "" || isNaN(document.getElementById("swal-input2").value) || document.getElementById("swal-input3").value == "" || isNaN(document.getElementById("swal-input3").value)) {
                Swal.showValidationMessage(`Por favor llene todos los campos`)
            } else {
                return [
                    name = document.getElementById("swal-input1").value,
                    price = parseFloat(document.getElementById("swal-input2").value),
                    stock = document.getElementById("swal-input3").value
                ];
            }
        }
    });

    if (formValues) {

        const newProductAPI = await createProductWithAPI(name, price, stock)

        const newProduct = new Producto(name, price, stock);
        productos.push(newProduct);

        localStorage.setItem(newProduct.id, JSON.stringify(newProduct));

        cargarProductos();

        Swal.fire({
            title: "Producto agregado con éxito",
            text: `El producto ha sido agregado correctamente a la tienda.`,
            icon: "success"
        });
    }
}

function cargarProductos() {
    const tableProducts = document.getElementById('productTableBody');
    tableProducts.innerHTML = '';

    for (const x of productos) {
        const productRow = document.createElement("tr");
        productRow.innerHTML = `
            <th scope="row">${x.id}</th>
            <td>${x.name}</td>
            <td>$${x.price}</td>
            <td>${x.stock}</td>
            <td>
                <button class="deleteBtn btn btn-danger" data-id="${x.id}">
                    <span class="material-icons">delete</span>
                </button>
                <button class="editBtn btn btn-primary" data-id="${x.id}"><span class="material-icons">edit</span></button>
                <button class="btn btn-secondary" onclick="agregarAlCarrito(${x.id})"><span class="material-icons">shopping_cart</span></button>
            </td>`;

        tableProducts.appendChild(productRow);
    }

    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = button.getAttribute('data-id');
            deleteProduct(productId);
        });
    });

    const editButtons = document.querySelectorAll('.editBtn');
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = button.getAttribute('data-id');
            editProduct(productId);
        });
    });
}

function deleteProduct(id) {
    Swal.fire({
        title: '¿Estas seguro?',
        text: "¡No podras revertir esta accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
           
            productos = productos.filter(product => product.id != id)
            localStorage.removeItem(id)
            cargarProductos()

            Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado correctamente.',
                'success'
            )
        }
    })
}

function editProduct(id) {
    const product = productos.find(product => product.id == id);

    if (!product) {
        Swal.fire("Producto no encontrado");
        return;
    }

    const { value: formValues } = Swal.fire({
        title: "Editar Producto",
        html: `
            <input autocomplete="off" placeholder="Nombre del Producto" id="swal-input1" class="swal2-input" value="${product.name}">
            <input autocomplete="off" placeholder="Precio del producto" id="swal-input2" class="swal2-input" value="${product.price}">
            <input autocomplete="off" placeholder=" Stock del producto" id="swal-input3" class="swal2-input" value="${product.stock}">
        `,
        focusConfirm: false,
        preConfirm: () => {
            const newName = document.getElementById("swal-input1").value;
            const newPrice = parseFloat(document.getElementById("swal-input2").value);
            const newStock = document.getElementById("swal-input3").value;

            if (newName === "" || isNaN(newPrice) || newStock === "" || isNaN(newStock)) {
                Swal.showValidationMessage(`Por favor llene todos los campos correctamente.`);
            } else {
                product.name = newName;
                product.price = newPrice;
                product.stock = newStock;

                localStorage.setItem(product.id, JSON.stringify(product));
                const updatedProductIndex = productos.findIndex(p => p.id === id);
                productos[updatedProductIndex] = product;
                cargarProductos();
                Swal.fire("Producto actualizado con éxito")
            }
        }
    });
}
