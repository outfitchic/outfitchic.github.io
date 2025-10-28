// App State Management
class FashionBlogApp {
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
            case 'profile':
                this.loadProfileContent();
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

    // Load profile section content
    loadProfileContent() {
        // Profile content is static, no dynamic loading needed
    }

    // Get sample articles data
    getSampleArticles() {
        return [
            {
                image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop&auto=format",
                category: "Fashion",
                title: "Paris Fashion Week Highlights",
                description: "The most stunning looks from the fashion capital",
                author: "Chiara",
                date: "16/1/2025",
                likes: "1,892",
                readTime: "4 min"
            },
            {
                image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&auto=format",
                category: "Beauty",
                title: "Winter Skincare Routine",
                description: "Essential products for glowing skin in cold weather",
                author: "Chiara",
                date: "16/1/2025",
                likes: "2,156",
                readTime: "6 min"
            },
            {
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop&auto=format",
                category: "Lifestyle",
                title: "Cozy Home Decor Ideas",
                description: "Create a warm and inviting space this season",
                author: "Chiara",
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
                        <div class="overlay-icon">
                            <i data-lucide="wrench"></i>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="author-section">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&auto=format" alt="${article.author}" class="author-avatar">
                        <div class="author-info">
                            <h3 class="author-name">${article.author}</h3>
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
        const sections = ['home', 'categories', 'saved', 'profile'];
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
    // Initialize the fashion blog app
    window.fashionBlogApp = new FashionBlogApp();
    
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
    module.exports = FashionBlogApp;
}