const manageSpinner = (isLoading) => {
    const spinner = document.getElementById("spinner");
    if (!spinner) return;

    if (isLoading) {
        spinner.classList.remove("hidden");
    } else {
        spinner.classList.add("hidden");
    }
};
function showLoginMessage() {
    alert("Please login first!");
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Hero image parallax
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

console.log('Smart Krishi Bazar website loaded successfully! 🥬🍎');


function scrollToAbout() {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });
}


const displayProducts = (products) => {
    const productsContainer = document.getElementById("productsContainer");

    productsContainer.innerHTML = "";

    products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";

        div.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.alt}">
                <div class="product-badge">${product.badge}</div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">${product.price.current}</span>
                    ${product.price.original
                ? `<span class="original-price">${product.price.original}</span>`
                : ""
            }
                </div>
                <button class="btn btn-primary" onclick="showLoginMessage()">
                    Add to Cart
                </button>
            </div>
        `;

        productsContainer.appendChild(div);
    });
};


const loadProducts = () => {
    manageSpinner(true);
    fetch("View/data.json")
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            displayProducts(data.products);
        })
        .catch(error => {
            console.error("Error loading products:", error);
            document.getElementById("productsContainer").innerHTML = "<p>Error loading products.</p>";
        })
        .finally(() => {
            manageSpinner(false);
        });
};


document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});