// App State Management
class OutfitChicApp {
    constructor() {
        this.currentSection = 'home';
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.initializeLucideIcons();
        this.setupNavigation();
        this.setupFilters();
        this.loadContent();
        this.addEventListeners();
    }

    // Initialize Lucide icons
    initializeLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Navigation setup
    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = item.dataset.section;
                this.navigateToSection(section);
            });
        });
    }

    // Navigate to specific section
    navigateToSection(sectionName) {
        if (sectionName === this.currentSection) return;

        // Update navigation active state
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Update content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionName).classList.add('active');

        this.currentSection = sectionName;
        this.initializeLucideIcons(); // Re-initialize icons for new content

        // Load section-specific content
        this.loadSectionContent(sectionName);
    }

    // Setup filter functionality
    setupFilters() {
        const filterPills = document.querySelectorAll('.filter-pill');
        filterPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                const category = pill.dataset.category;
                this.setActiveFilter(category);
            });
        });
    }

    // Set active filter
    setActiveFilter(category) {
        this.currentFilter = category;

        // Update filter pill states
        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        // Filter articles
        this.filterArticles(category);
    }

    // Filter articles by category
    filterArticles(category) {
        const articles = document.querySelectorAll('.article-card');
        
        articles.forEach(article => {
            if (category === 'all') {
                article.style.display = 'block';
                article.style.animation = 'slideUp 0.3s ease-out';
            } else {
                const categoryTag = article.querySelector('.category-tag');
                if (categoryTag && categoryTag.textContent.toLowerCase() === category) {
                    article.style.display = 'block';
                    article.style.animation = 'slideUp 0.3s ease-out';
                } else {
                    article.style.display = 'none';
                }
            }
        });
    }

    // Load content for each section
    loadSectionContent(section) {
        switch(section) {
            case 'categories':
                this.loadCategoriesContent();
                break;
            case 'saved':
                this.loadSavedContent();
                break;
            case 'shop':
                this.loadShopContent();
                break;
        }
    }

    // Load categories section content
    loadCategoriesContent() {
        const container = document.querySelector('#categories .articles-container');
        if (container && container.children.length === 0) {
            // Add sample articles for categories section
            const sampleArticles = this.getSampleArticles();
            container.innerHTML = sampleArticles.map(article => this.createArticleHTML(article)).join('');
            this.initializeLucideIcons();
        }
    }

    // Load saved section content
    loadSavedContent() {
        const container = document.querySelector('#saved .articles-container');
        if (container) {
            // Add saved indicator
            const savedCard = container.querySelector('.saved-card');
            if (savedCard) {
                const bookmarkIcon = savedCard.querySelector('.stat-item.saved i');
                if (bookmarkIcon) {
                    bookmarkIcon.style.color = 'var(--accent-primary)';
                }
            }
        }
    }

    // Load shop section content
    loadShopContent() {
        const container = document.querySelector('#shop .products-container');
        if (container && container.children.length === 0) {
            // Add Zalando-style products
            const products = this.getShopProducts();
            container.innerHTML = products.map(product => this.createProductHTML(product)).join('');
            this.initializeLucideIcons();
            this.setupProductInteractions();
        }
    }

    // Get shop products data
    getShopProducts() {
        return [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&auto=format",
                brand: "Zara",
                name: "Abito elegante nero",
                price: 89.99,
                originalPrice: 129.99,
                discount: 30
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&auto=format",
                brand: "Nike",
                name: "Air Force 1 White",
                price: 149.99,
                originalPrice: null,
                discount: null
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format",
                brand: "H&M",
                name: "Jeans skinny blu",
                price: 39.99,
                originalPrice: 59.99,
                discount: 33
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&auto=format",
                brand: "Gucci",
                name: "Borsa tote in pelle",
                price: 1899.99,
                originalPrice: null,
                discount: null
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format",
                brand: "Uniqlo",
                name: "Felpa oversize grigia",
                price: 24.99,
                originalPrice: null,
                discount: null
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1566479179817-c7eae0f5e4e2?w=400&h=400&fit=crop&auto=format",
                brand: "Adidas",
                name: "T-shirt essentials",
                price: 19.99,
                originalPrice: 29.99,
                discount: 33
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1595751865450-3e9bc53e0b46?w=400&h=400&fit=crop&auto=format",
                brand: "Mango",
                name: "Cappotto lunghissimo",
                price: 159.99,
                originalPrice: 229.99,
                discount: 30
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
                brand: "Levi's",
                name: "Jeans 501 Original",
                price: 89.99,
                originalPrice: 129.99,
                discount: 31
            },
            {
                id: 9,
                image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop&auto=format",
                brand: "Converse",
                name: "Chuck Taylor All Star",
                price: 79.99,
                originalPrice: null,
                discount: null
            },
            {
                id: 10,
                image: "https://images.unsplash.com/photo-1580831408527-17e9e544e4b1?w=400&h=400&fit=crop&auto=format",
                brand: "Cos",
                name: "Trench coat beige",
                price: 199.99,
                originalPrice: 299.99,
                discount: 33
            },
            {
                id: 11,
                image: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?w=400&h=400&fit=crop&auto=format",
                brand: "Pandora",
                name: "Bracelet argento",
                price: 59.99,
                originalPrice: 79.99,
                discount: 25
            },
            {
                id: 12,
                image: "https://images.unsplash.com/photo-1549298916-11ae07e8c5ef?w=400&h=400&fit=crop&auto=format",
                brand: "Puma",
                name: "Sneakers RS-X",
                price: 129.99,
                originalPrice: null,
                discount: null
            }
        ];
    }

    // Create product HTML
    createProductHTML(product) {
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <button class="product-wishlist" data-product-id="${product.id}">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="price-current">€${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="price-original">€${product.originalPrice.toFixed(2)}</span>` : ''}
                        ${product.discount ? `<span class="price-discount">-${product.discount}%</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="btn-add-cart" data-product-id="${product.id}">
                            <i data-lucide="shopping-cart"></i>
                            <span>Aggiungi al carrello</span>
                        </button>
                        <button class="btn-quick-view" data-product-id="${product.id}">
                            <i data-lucide="eye"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Setup product interactions
    setupProductInteractions() {
        // Wishlist toggle
        document.querySelectorAll('.product-wishlist').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = button.dataset.productId;
                button.classList.toggle('active');
                
                // Show feedback
                const isActive = button.classList.contains('active');
                const icon = button.querySelector('i');
                if (isActive) {
                    // Brief animation feedback
                    button.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        button.style.transform = 'scale(1)';
                    }, 150);
                }
                
                console.log(`Product ${productId} ${isActive ? 'added to' : 'removed from'} wishlist`);
            });
        });

        // Add to cart
        document.querySelectorAll('.btn-add-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = button.dataset.productId;
                this.addToCart(productId, button);
            });
        });

        // Quick view (placeholder)
        document.querySelectorAll('.btn-quick-view').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = button.dataset.productId;
                console.log(`Quick view for product ${productId}`);
                // Here you would open a product detail modal
                this.showProductQuickView(productId);
            });
        });
    }

    // Add product to cart
    addToCart(productId, button) {
        // Update button state
        button.classList.add('added');
        button.innerHTML = `
            <i data-lucide="check"></i>
            <span>Aggiunto!</span>
        `;

        // Update cart badge
        this.updateCartBadge();

        // Reset button after 2 seconds
        setTimeout(() => {
            button.classList.remove('added');
            button.innerHTML = `
                <i data-lucide="shopping-cart"></i>
                <span>Aggiungi al carrello</span>
            `;
            this.initializeLucideIcons();
        }, 2000);

        console.log(`Product ${productId} added to cart`);
    }

    // Update cart badge
    updateCartBadge() {
        const cartButton = document.querySelector('[data-section="shop"]');
        let badge = cartButton.querySelector('.cart-badge');
        
        if (!badge) {
            badge = document.createElement('div');
            badge.className = 'cart-badge';
            cartButton.appendChild(badge);
        }
        
        // Simulate cart count (in a real app, this would come from state)
        const currentCount = parseInt(badge.textContent) || 0;
        const newCount = currentCount + 1;
        badge.textContent = newCount;
        
        // Animate badge
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = 'pulse 0.6s ease-out';
        }, 10);
    }

    // Show product quick view (placeholder)
    showProductQuickView(productId) {
        // Placeholder for product detail modal
        console.log(`Opening quick view for product ${productId}`);
        // Here you would typically open a modal or navigate to product page
        alert(`Anteprima prodotto ${productId} - In una versione completa, qui si aprirebbe un modal con i dettagli del prodotto!`);
    }

    // Get sample articles data
    getSampleArticles() {
        return [
            {
                image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&auto=format",
                category: "Fashion",
                title: "Paris Fashion Week Highlights",
                description: "The most stunning looks from the fashion capital",

                date: "16/1/2025",
                likes: "1,892",
                readTime: "4 min"
            },
            {
                image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&auto=format",
                category: "Beauty",
                title: "Winter Skincare Routine",
                description: "Essential products for glowing skin in cold weather",

                date: "16/1/2025",
                likes: "2,156",
                readTime: "6 min"
            },
            {
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop&auto=format",
                category: "Lifestyle",
                title: "Cozy Home Decor Ideas",
                description: "Create a warm and inviting space this season",

                date: "15/1/2025",
                likes: "3,421",
                readTime: "8 min"
            }
        ];
    }

    // Create article HTML
    createArticleHTML(article) {
        return `
            <article class="article-card">
                <div class="card-image">
                    <img src="${article.image}" alt="${article.title}">
                    <div class="image-overlay">
                    </div>
                </div>
                <div class="card-content">
                    <div class="author-section">
                        <div class="author-info">
                            <span class="publish-date">${article.date}</span>
                        </div>
                        <span class="category-tag">${article.category}</span>
                    </div>
                    <h2 class="article-title">${article.title}</h2>
                    <p class="article-description">${article.description}</p>
                    <div class="article-stats">
                        <div class="stat-item">
                            <i data-lucide="heart"></i>
                            <span>${article.likes}</span>
                        </div>
                        <div class="stat-item">
                            <i data-lucide="clock"></i>
                            <span>${article.readTime}</span>
                        </div>
                        <div class="stat-item">
                            <i data-lucide="bookmark"></i>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }

    // Load initial content
    loadContent() {
        // Set initial active filter
        this.setActiveFilter('all');
    }

    // Add event listeners
    addEventListeners() {
        // Add touch feedback for better mobile experience
        document.addEventListener('touchstart', () => {}, {passive: true});
        
        // Handle window resize for responsive behavior
        window.addEventListener('resize', this.handleResize.bind(this));
        
        // Add keyboard navigation support
        document.addEventListener('keydown', this.handleKeyboard.bind(this));
    }

    // Handle window resize
    handleResize() {
        // Re-initialize icons on resize to ensure proper rendering
        setTimeout(() => {
            this.initializeLucideIcons();
        }, 100);
    }

    // Handle keyboard navigation
    handleKeyboard(e) {
        const sections = ['home', 'categories', 'saved', 'shop'];
        const currentIndex = sections.indexOf(this.currentSection);

        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                if (currentIndex > 0) {
                    this.navigateToSection(sections[currentIndex - 1]);
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (currentIndex < sections.length - 1) {
                    this.navigateToSection(sections[currentIndex + 1]);
                }
                break;
        }
    }

    // Utility method to show loading state
    showLoading() {
        const loadingHTML = `
            <div class="loading-container" style="text-align: center; padding: 2rem;">
                <div style="width: 40px; height: 40px; border: 3px solid var(--border-primary); border-top: 3px solid var(--accent-primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1rem;"></div>
                <p style="color: var(--text-secondary);">Caricamento...</p>
            </div>
        `;
        return loadingHTML;
    }

    // Utility method to hide loading state
    hideLoading() {
        const loadingContainer = document.querySelector('.loading-container');
        if (loadingContainer) {
            loadingContainer.remove();
        }
    }
}

// Add CSS animation for loading spinner
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the OutfitChic app
    window.outfitChicApp = new OutfitChicApp();
    
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for card animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.1s';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all article cards
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.article-card').forEach(card => {
            cardObserver.observe(card);
        });
    });
    
    // Add service worker registration for PWA capabilities (optional)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Uncomment below lines if you want to add PWA capabilities
            // navigator.serviceWorker.register('/sw.js')
            //     .then(registration => console.log('SW registered'))
            //     .catch(error => console.log('SW registration failed'));
        });
    }
});

// Add global error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e.error);
});

// Add unhandled promise rejection handling
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OutfitChicApp;
}