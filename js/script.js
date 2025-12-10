console.log("Script loaded");

document.querySelectorAll(".nav-link").forEach(link => {
    if (link.href === window.location.href) link.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("product-list");
    if (!container) {
        console.log("No product-list found");
        return;
    }

    const products = [
        { name: "ручки", price: 100, img: "images/pens.jpg" },
        { name: "для души", price: 200, img: "images/deer.jpg" },
        { name: "помогатор", price: 300, img: "images/rock.jpg" },
        { name: "для души 2", price: 400, img: "images/nurofen.jpg" },
        { name: "земля", price: 500, img: "images/earth.jpg" },
        { name: "помогатор (новый)", price: 600, img: "images/rock.jpg" },
    ];

    console.log("Rendering products:", products);

    products.forEach(item => {
        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.price} ₽</p>
                    </div>
                </div>
            </div>
        `;
    });
});

