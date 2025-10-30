// ===== JAVASCRIPT FOR OUTFITCHIC WEBSITE =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initImageGallery();
    initAccordion();
    initSizeColorSelection();
    initPagination();
    initNewsletterForm();
    initSearch();
    initWishlistButtons();
    initProductCardHover();
});

// ===== IMAGE GALLERY (Product Page) =====
function initImageGallery() {
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (!mainImage || thumbnails.length === 0) return;
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image
            const newImageSrc = this.dataset.image;
            mainImage.src = newImageSrc;
        });
    });
}

// ===== ACCORDION FUNCTIONALITY =====
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
}

// ===== SIZE AND COLOR SELECTION =====
function initSizeColorSelection() {
    // Size selection
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected from all size options
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected to clicked option
            this.classList.add('selected');
        });
    });
    
    // Color selection
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected from all color options
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected to clicked option
            this.classList.add('selected');
            
            // Update selected color text
            const colorName = this.dataset.color;
            const colorLabel = document.querySelector('.selected-value');
            if (colorLabel) {
                colorLabel.textContent = colorName;
            }
        });
    });
}

// ===== PAGINATION =====
function initPagination() {
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    
    paginationNumbers.forEach(number => {
        number.addEventListener('click', function() {
            // Remove active from all numbers
            paginationNumbers.forEach(num => num.classList.remove('active'));
            // Add active to clicked number
            this.classList.add('active');
        });
    });
    
    // Handle pagination arrows (demo functionality)
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const currentActive = document.querySelector('.pagination-number.active');
            const currentNumber = parseInt(currentActive.textContent);
            
            if (this.classList.contains('pagination-prev') && currentNumber > 1) {
                // Go to previous page
                const prevNumber = document.querySelector(`[data-page="${currentNumber - 1}"]`);
                if (prevNumber) {
                    paginationNumbers.forEach(num => num.classList.remove('active'));
                    prevNumber.classList.add('active');
                }
            } else if (this.classList.contains('pagination-next')) {
                // Go to next page (demo - just increment for demo)
                if (currentNumber < 8) {
                    const nextNumber = document.querySelector(`[data-page="${currentNumber + 1}"]`);
                    if (nextNumber) {
                        paginationNumbers.forEach(num => num.classList.remove('active'));
                        nextNumber.classList.add('active');
                    }
                }
            }
        });
    });
}

// ===== NEWSLETTER FORM =====
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-form .btn-primary');
    
    if (!newsletterForm || !newsletterInput || !newsletterBtn) return;
    
    newsletterBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const email = newsletterInput.value.trim();
        
        if (!isValidEmail(email)) {
            showNotification('Inserisci un indirizzo email valido', 'error');
            return;
        }
        
        // Simulate newsletter subscription
        this.textContent = 'Iscrivendo...';
        this.disabled = true;
        
        setTimeout(() => {
            showNotification('Iscrizione completata! Controlla la tua email.', 'success');
            newsletterInput.value = '';
            this.textContent = 'Iscriviti';
            this.disabled = false;
        }, 1500);
    });
}

// ===== SEARCH FUNCTIONALITY =====
function initSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    performSearch(searchTerm);
                }
            }
        });
    });
}

// ===== WISHLIST BUTTONS =====
function initWishlistButtons() {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn, .btn-secondary');
    
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add to wishlist animation
            const icon = this.querySelector('svg');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.color = 'var(--primary-500)';
                
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                    icon.style.color = '';
                }, 200);
            }
            
            showNotification('Prodotto aggiunto alla wishlist!', 'success');
        });
    });
}

// ===== PRODUCT CARD HOVER EFFECTS =====
function initProductCardHover() {
    const productCards = document.querySelectorAll('.card, .blog-article, .article-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== ADD TO CART FUNCTIONALITY =====
function initAddToCart() {
    const addToCartBtn = document.querySelector('.btn-primary');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const productTitle = document.querySelector('.product-title')?.textContent || 'Prodotto';
            const selectedSize = document.querySelector('.size-option.selected')?.dataset.size || 'M';
            const selectedColor = document.querySelector('.color-option.selected')?.dataset.color || 'Rosa Antico';
            
            this.textContent = 'Aggiungendo...';
            this.disabled = true;
            
            setTimeout(() => {
                showNotification(`${productTitle} (Taglia ${selectedSize}, ${selectedColor}) aggiunto al carrello!`, 'success');
                this.textContent = 'Aggiungi al Carrello';
                this.disabled = false;
            }, 1000);
        });
    }
}

// ===== UTILITY FUNCTIONS =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function performSearch(searchTerm) {
    showNotification(`Ricerca per "${searchTerm}" avviata...`, 'info');
    
    // Simulate search results
    setTimeout(() => {
        showNotification(`Trovati ${Math.floor(Math.random() * 20) + 5} risultati per "${searchTerm}"`, 'success');
    }, 1000);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        max-width: 400px;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        ${type === 'success' ? 'background: #D1FAE5; color: #065F46; border: 1px solid #A7F3D0;' : ''}
        ${type === 'error' ? 'background: #FEE2E2; color: #991B1B; border: 1px solid #FECACA;' : ''}
        ${type === 'info' ? 'background: #DBEAFE; color: #1E40AF; border: 1px solid #93C5FD;' : ''}
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto close after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== LOADING ANIMATIONS =====
function initLoadingAnimations() {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card, .blog-article, .article-card, .related-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ===== MOBILE MENU (if needed) =====
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('nav-open');
            this.classList.toggle('active');
        });
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== RESPONSIVE BEHAVIOR =====
function handleResize() {
    // Adjust layout for different screen sizes
    const width = window.innerWidth;
    
    if (width <= 768) {
        // Mobile adjustments
        document.body.classList.add('mobile');
        document.body.classList.remove('desktop', 'tablet');
    } else if (width <= 1024) {
        // Tablet adjustments
        document.body.classList.add('tablet');
        document.body.classList.remove('desktop', 'mobile');
    } else {
        // Desktop
        document.body.classList.add('desktop');
        document.body.classList.remove('mobile', 'tablet');
    }
}

// ===== EVENT LISTENERS =====
window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleScroll);

// Handle scroll effects
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}

// Initialize functions
handleResize();
initSmoothScrolling();
initLoadingAnimations();
initLazyLoading();
initMobileMenu();

// Add header scroll styles
const style = document.createElement('style');
style.textContent = `
    .header-scrolled {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: inherit;
        opacity: 0.7;
        transition: opacity 0.2s;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    @media (max-width: 768px) {
        .nav-open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            gap: 16px;
        }
        
        .mobile-menu-btn {
            display: block;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--neutral-700);
        }
    }
`;
document.head.appendChild(style);

// ===== PRELOADER (Optional) =====
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }
});

// Initialize Add to Cart functionality
document.addEventListener('DOMContentLoaded', function() {
    initAddToCart();
});

// ===== CONSOLE LOG FOR DEBUGGING =====
console.log('Outfitchic website loaded successfully!');
console.log('Features initialized:', {
    imageGallery: !!document.querySelector('#mainProductImage'),
    accordion: !!document.querySelector('.accordion'),
    sizeColorSelection: !!document.querySelector('.size-option'),
    pagination: !!document.querySelector('.pagination'),
    newsletterForm: !!document.querySelector('.newsletter-form')
});