/* Product Data */
const products = [
    /* French Fries */
    { id: 1, name: "XLF Fries", category: "french-fries", description: "Extra long and crispy fries perfect for restaurants", price: "₹180/kg", tags: ["Crispy", "Restaurant Grade"], image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: true, rank: 1 },
    { id: 2, name: "Crinkle Fries", category: "french-fries", description: "Wavy cut fries with maximum crispiness", price: "₹160/kg", tags: ["Crinkle Cut", "Crispy"], image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: true, rank: 3 },
    { id: 3, name: "Skin on Fries", category: "french-fries", description: "Rustic fries with skin for authentic taste", price: "₹170/kg", tags: ["Rustic", "Skin On"], image: "https://images.unsplash.com/photo-1585109642175-6c6d6f8e7f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 4, name: "Flavory Fries", category: "french-fries", description: "Seasoned fries with special HyFun flavors", price: "₹190/kg", tags: ["Seasoned", "Flavored"], image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 5, name: "Super Crispy Fries", category: "french-fries", description: "Ultra crispy fries that stay crunchy longer", price: "₹200/kg", tags: ["Extra Crispy", "Long Lasting"], image: "https://images.unsplash.com/photo-1629115916087-7c5b5a0e6f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: true, topSelling: false },
    
    /* Potato Wedges */
    { id: 6, name: "Classic Wedges", category: "potato-wedges", description: "Traditional potato wedges with perfect seasoning", price: "₹175/kg", tags: ["Classic", "Seasoned"], image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 7, name: "Lime 'n' Mint Wedges", category: "potato-wedges", description: "Zesty wedges with lime and mint flavor", price: "₹195/kg", tags: ["Zesty", "Refreshing"], image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 8, name: "Spicy Wedges", category: "potato-wedges", description: "Hot and spicy wedges for flavor lovers", price: "₹185/kg", tags: ["Spicy", "Bold"], image: "https://images.unsplash.com/photo-1629115916087-7c5b5a0e6f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 9, name: "Hash Brown Round", category: "potato-wedges", description: "Round hash browns perfect for breakfast", price: "₹220/kg", tags: ["Breakfast", "Round"], image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: true, rank: 5 },
    
    /* Veggie Specialties */
    { id: 10, name: "Veggie Stix", category: "veggie", description: "Mixed vegetable sticks for healthy snacking", price: "₹240/kg", tags: ["Healthy", "Mixed Veg"], image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 11, name: "Crispy Veggie Bites", category: "veggie", description: "Bite-sized veggie snacks with crispy coating", price: "₹260/kg", tags: ["Bite-sized", "Crispy"], image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 12, name: "Cheesy Paneer Patty", category: "veggie", description: "Paneer patties with cheese filling", price: "₹280/kg", tags: ["Cheesy", "Paneer"], image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: true, rank: 4 },
    { id: 13, name: "Mozzarella Cheese Stix", category: "veggie", description: "Mozzarella cheese sticks with crispy coating", price: "₹300/kg", tags: ["Cheesy", "Mozzarella"], image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: true, topSelling: false },
    
    /* Indian Ethnic */
    { id: 14, name: "Sabudana Patty", category: "indian", description: "Traditional sabudana patties for fasting", price: "₹250/kg", tags: ["Traditional", "Fasting"], image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 15, name: "Mumbai Aloo Vada", category: "indian", description: "Mumbai style potato vada with spices", price: "₹230/kg", tags: ["Mumbai Style", "Spicy"], image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 16, name: "Hara Bhara Kebab", category: "indian", description: "Green kebabs made with spinach and peas", price: "₹270/kg", tags: ["Green", "Healthy"], image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: true, topSelling: false },
    
    /* Baked Snacks */
    { id: 17, name: "Veg Paradise Pizza", category: "baked", description: "Vegetable pizza with exotic toppings", price: "₹320/kg", tags: ["Pizza", "Vegetable"], image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 18, name: "Tandoori Paneer Pizza", category: "baked", description: "Paneer pizza with tandoori flavor", price: "₹350/kg", tags: ["Tandoori", "Paneer"], image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: true, rank: 2 },
    { id: 19, name: "Mexicano Puffets", category: "baked", description: "Mexican style stuffed puffs", price: "₹290/kg", tags: ["Mexican", "Stuffed"], image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: false, topSelling: false },
    { id: 20, name: "Apple Crumble Pie Puffets", category: "baked", description: "Apple crumble filled puff pastry", price: "₹310/kg", tags: ["Apple", "Dessert"], image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", unic: true, topSelling: false },
];

/* Mobile Navigation Toggle */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

/* Close mobile menu when clicking on a link */
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

/* Populate Products Grid */
function populateProducts() {
    const productsGrid = document.querySelector('#productsGrid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

/* Populate Top Selling Products */
function populateTopSelling() {
    const topSellingContainer = document.querySelector('.top-selling-cards');
    topSellingContainer.innerHTML = '';
    
    /* Get top selling products (with rank) */
    const topSellingProducts = products.filter(product => product.topSelling).sort((a, b) => a.rank - b.rank);
    
    topSellingProducts.forEach(product => {
        const topSellingCard = document.createElement('div');
        topSellingCard.className = 'top-selling-card';
        
        topSellingCard.innerHTML = `
            <div class="top-selling-badge">#${product.rank} Seller</div>
            <div class="top-selling-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="top-selling-details">
                <div class="top-selling-rank">
                    ${getRankStars(product.rank)}
                </div>
                <h3 class="top-selling-title">${product.name}</h3>
                <div class="top-selling-stats">
                    <span>${product.category.replace('-', ' ').toUpperCase()}</span>
                    <span>${product.price}</span>
                </div>
                <p class="product-description">${product.description}</p>
                <button class="btn-add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        topSellingContainer.appendChild(topSellingCard);
    });
}

/* Populate Unic Products */
function populateUnicProducts() {
    const unicGrid = document.querySelector('#unicGrid');
    unicGrid.innerHTML = '';
    
    /* Get unic products */
    const unicProducts = products.filter(product => product.unic);
    
    unicProducts.forEach(product => {
        const productCard = createProductCard(product, true);
        unicGrid.appendChild(productCard);
    });
}

/* Create Product Card */
function createProductCard(product, isUnic = false) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-category', product.category);
    productCard.setAttribute('data-id', product.id);
    
    let badgeHTML = '';
    if (isUnic) {
        badgeHTML = `<div class="product-badge badge-unic">UNIC</div>`;
    } else if (product.topSelling) {
        badgeHTML = `<div class="product-badge badge-top">TOP SELLER</div>`;
    }
    
    productCard.innerHTML = `
        ${badgeHTML}
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
            <span class="product-category">${product.category.replace('-', ' ').toUpperCase()}</span>
            <h3 class="product-title">
                ${product.name}
                <span class="product-price">${product.price}</span>
            </h3>
            <p class="product-description">${product.description}</p>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="product-tag">${tag}</span>`).join('')}
            </div>
            <button class="btn-add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    
    return productCard;
}

/* Get Rank Stars */
function getRankStars(rank) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= 6 - rank) {
            stars += '<i class="fas fa-star rank-icon"></i>';
        } else {
            stars += '<i class="far fa-star rank-icon"></i>';
        }
    }
    return stars;
}

/* Filter Products */
function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.classList.remove('hidden');
            card.style.animation = 'productAppear 0.5s ease';
        } else {
            card.classList.add('hidden');
        }
    });
    
    /* Update active filter button */
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
    
    /* Scroll to products section */
    if (category !== 'all') {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
}

/* Scroll Navigation Highlighting */
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/* Initialize everything when DOM is loaded */
document.addEventListener('DOMContentLoaded', () => {
    populateProducts();
    populateTopSelling();
    populateUnicProducts();
    
    /* Add active class to current nav link on click */
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    /* Filter button click events */
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    /* Footer category links */
    document.querySelectorAll('.footer-column a[data-filter]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
    
    /* Add to cart button events */
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            const product = products.find(p => p.id == productId);
            
            /* Show cart notification */
            const cartNotification = document.getElementById('cartNotification');
            cartNotification.classList.add('show');
            
            setTimeout(() => {
                cartNotification.classList.remove('show');
            }, 3000);
            
            /* Animation for button */
            e.target.innerHTML = '<i class="fas fa-check"></i> Added!';
            e.target.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                e.target.innerHTML = 'Add to Cart';
                e.target.style.backgroundColor = '';
            }, 1500);
        }
    });
    
    /* Simple scroll animation implementation */
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.product-card, .top-selling-card, .section-header, .about-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
        
        /* Highlight nav on scroll */
        highlightNavOnScroll();
    };
    
    /* Set initial state for animated elements */
    document.querySelectorAll('.product-card, .top-selling-card, .section-header, .about-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});