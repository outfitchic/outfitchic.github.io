# Outfitchic - Clone Sito Web

Un clone perfettamente funzionante del sito e-commerce e blog di moda Outfitchic, creato con HTML, CSS e JavaScript moderni.

## 🌟 Caratteristiche

### Pagine Principali
- **Homepage** (`index.html`) - Hero section con immagine di sfondo, sezioni trend e blog
- **Blog** (`blog.html`) - Articoli di moda con sidebar, categorie e paginazione
- **Pagina Prodotto** (`product.html`) - Dettagli prodotto con galleria immagini, selezione varianti e accordion

### Design System
- **Palette Colori**: Bianco/Grigio con accento rosa fucsia (#E2638E)
- **Tipografia**: Montserrat per titoli, Lato per testo corpo
- **Layout**: Responsive design mobile-first
- **Componenti**: Card moderne con ombre e animazioni

### Funzionalità Interattive

#### Homepage
- ✅ Header responsive con logo e navigazione
- ✅ Hero section con overlay e call-to-action
- ✅ Carosello scrollabile di prodotti e blog posts
- ✅ Sezione blog con grid di articoli
- ✅ Footer completo con newsletter

#### Pagina Blog
- ✅ Layout a due colonne (sidebar + contenuto)
- ✅ Barra di ricerca funzionale
- ✅ Categorie con icone e stato attivo
- ✅ Articoli "I più letti" con miniature
- ✅ Griglia di articoli con tag colorati
- ✅ Paginazione con numeri e frecce

#### Pagina Prodotto
- ✅ Breadcrumbs navigativi
- ✅ Galleria immagini con miniature cliccabili
- ✅ Selezione colore con 3 opzioni
- ✅ Selezione taglia con 4 opzioni (S, M, L, XL)
- ✅ Accordion per informazioni prodotto (Descrizione, Dettagli, Guida Taglie, Recensioni)
- ✅ Pulsanti "Aggiungi al Carrello" e "Wishlist"
- ✅ Sezione prodotti correlati

### Interazioni JavaScript
- 🎯 Galleria immagini interattiva
- 🎯 Accordion espandibili/contraibili
- 🎯 Selezione colore e taglia
- 🎯 Paginazione funzionale
- 🎯 Form newsletter con validazione
- 🎯 Animazioni hover su card
- 🎯 Wishlist con feedback visivo
- 🎯 Notifiche toast per azioni utente
- 🎯 Lazy loading delle immagini
- 🎯 Scroll smooth

### Responsive Design
- 📱 **Mobile** (< 768px): Layout a colonna singola, menu hamburger, card ridimensionate
- 💻 **Tablet** (768-1024px): Layout a due colonne ottimizzato
- 🖥️ **Desktop** (> 1024px): Layout completo con tutte le funzionalità

## 🚀 Tecnologie Utilizzate

- **HTML5**: Struttura semantica e accessibile
- **CSS3**: 
  - Custom Properties (CSS Variables)
  - Flexbox e CSS Grid
  - Animazioni e transizioni
  - Media queries responsive
- **JavaScript (ES6+)**:
  - Event listeners e DOM manipulation
  - Intersection Observer API
  - Smooth scrolling
  - Form validation
- **Font**: Google Fonts (Montserrat + Lato)
- **Immagini**: Unsplash API per foto di alta qualità

## 📁 Struttura File

```
outfitchic-clone/
├── index.html          # Homepage
├── blog.html           # Pagina Blog
├── product.html        # Pagina Prodotto
├── styles.css          # Stili completi
├── script.js           # JavaScript interattivo
└── README.md           # Documentazione
```

## 🎨 Design Highlights

### Colori Principali
- **Primary**: #E2638E (Rosa fucsia)
- **Neutri**: #FFFFFF, #F8F9FA, #374151, #111827
- **Semantic**: #10B981 (Success), #F59E0B (Warning), #EF4444 (Error)

### Tipografia
- **H1**: 56px, Bold
- **H2**: 40px, Bold  
- **H3**: 24px, SemiBold
- **Body**: 16px, Regular
- **Small**: 14px, Regular

### Spacing System
- xs: 8px, sm: 16px, md: 24px, lg: 32px
- xl: 48px, xxl: 64px, xxxl: 96px

## 🛠️ Setup e Utilizzo

1. **Clona o scarica** i file nella tua directory
2. **Apri `index.html`** in un browser moderno
3. **Naviga** tra le pagine usando il menu
4. **Testa le interazioni** su desktop e mobile

### Browser Supportati
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 🎯 Funzionalità Avanzate

### Performance
- **Lazy Loading**: Immagini caricate solo quando visibili
- **Intersection Observer**: Animazioni basate su scroll
- **CSS Animations**: Hardware-accelerated transforms

### UX/UI
- **Hover Effects**: Card con elevazione e zoom immagini
- **Loading States**: Feedback visivo per azioni utente
- **Notifications**: Toast messages per conferme
- **Form Validation**: Validazione email in tempo reale

### Accessibility
- **Semantic HTML**: Struttura accessibile per screen readers
- **Focus Management**: Focus indicators visibili
- **Keyboard Navigation**: Supporto completo tastiera
- **ARIA Labels**: Attributi per migliorare l'accessibilità

## 📱 Mobile Experience

- **Touch-Friendly**: Dimensioni minime 48px per elementi interattivi
- **Swipe Gestures**: Supporto per gesti touch su mobile
- **Optimized Images**: Immagini responsive per diverse densità
- **Simplified Navigation**: Menu ottimizzato per schermi piccoli

## 🔧 Personalizzazione

### Colori
Modifica le CSS custom properties in `:root`:
```css
:root {
    --primary-500: #E2638E;    /* Colore accento principale */
    --neutral-900: #111827;    /* Colore testo principale */
}
```

### Font
Cambia i font family:
```css
:root {
    --font-heading: 'Montserrat', sans-serif;
    --font-body: 'Lato', sans-serif;
}
```

### Layout
Modifica spacing e breakpoints per adattare il design alle tue esigenze.

## 📊 Metrica Qualità

- ✅ **HTML5**: Valid markup
- ✅ **CSS3**: Modern CSS features
- ✅ **JavaScript**: ES6+ sintassi
- ✅ **Performance**: Lazy loading, animazioni ottimizzate
- ✅ **SEO**: Meta tags e semantic HTML
- ✅ **Accessibility**: ARIA labels, focus management

---

**Creato con ❤️ utilizzando tecnologie web moderne**