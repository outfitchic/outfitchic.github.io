// Semplice navigazione articoli - SOLO QUESTO!

// Articoli completi
const ARTICLES = {
    'article-1': {
        title: 'Milan Fashion Week: I Look Più Iconici',
        date: '15 Ottobre 2024', 
        readTime: '5 min di lettura',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop&auto=format',
        content: `
            <h2>Le Tendenze Dominanti</h2>
            <p>La Milano Fashion Week 2024 ha regalato momenti indimenticabili, con designer che hanno saputo ridefinire l'eleganza contemporanea attraverso collezioni audaci e sofisticate.</p>
            
            <p>Questa edizione è stata caratterizzata da un ritorno alle forme architettoniche, con capi che esaltano la silhouette femminile attraverso tagli precisi e materiali innovativi.</p>
            
            <h3>Colori e Tessuti</h3>
            <ul>
                <li><strong>Neutri Eleganti:</strong> Beige, grigi perla e neri profondi hanno dominato le passerelle</li>
                <li><strong>Tessuti Tecnici:</strong> Materiali high-tech che uniscono comfort e lusso</li>
                <li><strong>Texture Ricche:</strong> Velluto, seta e pelle trattata in modo innovativo</li>
            </ul>
            
            <h2>I Designer da Non Perdere</h2>
            <p>Alcuni nomi hanno saputo distinguersi con proposte particolarmente innovative, mescolando tradizione italiana e visione futuristica.</p>
            
            <h3>Punti Salienti delle Collezioni</h3>
            <p>Le passerelle hanno mostrato una precisa direzione verso capi versatili che possono easily transition dal daywear all'evening wear, dimostrando come la moda contemporanea sia sempre più orientata alla sostenibilità e alla praticità.</p>
            
            <blockquote>
                "La moda non è solo about estetica, ma about empowerment e self-expression"
            </blockquote>
            
            <h2>Come Integrare Queste Tendenze</h2>
            <p>Per chi desidera catturare lo spirito della Milano Fashion Week nel proprio guardaroba, le chiavi sono:</p>
            <ol>
                <li><strong>Investire in capi strutturati</strong> che esaltano la figura</li>
                <li><strong>Scegliere tessuti di qualità</strong> che durano nel tempo</li>
                <li><strong>Mixare textures</strong> per creare look interessanti</li>
                <li><strong>Focus sui dettagli</strong> come bottoni, cuciture e proporzioni</li>
            </ol>
        `
    },
    'article-2': {
        title: 'Spring Beauty Trends 2025: Le Novità Più Attese',
        date: '20 Novembre 2024',
        readTime: '6 min di lettura',
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=400&fit=crop&auto=format',
        content: `
            <h2>Il Ritorno della Naturalità</h2>
            <p>Il 2025 si preannuncia come un anno rivoluzionario per il mondo della bellezza, con trend che abbattono le barriere tradizionali e abbracciano una nuova concezione di self-care e personal expression.</p>
            
            <p>Dopo anni di makeup elaborato, il 2025 segna il trionfo del "skinimalism" - una bellezza che esalta la pelle naturale senza nasconderla, ma valorizzandola attraverso tecniche minimaliste e prodotti skin-care first.</p>
            
            <h3>Focus sulla Pelle</h3>
            <ul>
                <li><strong>Glow naturale:</strong> Prodotti che migliorano l'aspetto della pelle dall'interno</li>
                <li><strong>Tonalità adattive:</strong> Foundation che si adattano al colorito naturale</li>
                <li><strong>Texture leggere:</strong> Formule che non appesantiscono e permettono alla pelle di respirare</li>
            </ul>
            
            <h2>Colori Trend 2025</h2>
            <p>Le tonalità primaverili di quest'anno sono ispirate alla natura e ai paesaggi mediterranei, con palette che spaziano dai toni tierra ai pastelli più delicati.</p>
            
            <h3>Palette Principali</h3>
            <p><strong>Terracotta Warm:</strong> Perfetto per un look naturale e caldo</p>
            <p><strong>Rose Dust:</strong> Rosa polvere per un tocco romantico e delicato</p>
            <p><strong>Ocean Blue:</strong> Blu oceano per look audaci e fresh</p>
            <p><strong>Forest Green:</strong> Verde foresta per un tocco di originalità</p>
            
            <blockquote>
                "La bellezza del futuro è sostenibile, inclusiva e tecnologicamente avanzata"
            </blockquote>
        `
    },
    'article-3': {
        title: 'Minimalist Wardrobe Essentials: Building a Capsule Wardrobe',
        date: '25 Ottobre 2024',
        readTime: '7 min di lettura',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop&auto=format',
        content: `
            <h2>La Filosofia Minimalista</h2>
            <p>Costruire un guardaroba minimalista significa scegliere pezzi iconici e versatili che possono essere combinati in modi multipli, creando infinite possibilità senza sovrabbondanza.</p>
            
            <p>Il minimalismo nell'abbigliamento non è about possedere meno oggetti, ma di possedere oggetti migliori - pezzi che rappresentano davvero il tuo stile e che durano nel tempo.</p>
            
            <h3>Colori Essenziali</h3>
            <ul>
                <li><strong>Nero:</strong> Classico e versatile, base di ogni guardaroba</li>
                <li><strong>Bianco:</strong> Fresh e moderno, perfetto per look puliti</li>
                <li><strong>Grigio:</strong> Neutro e elegante, facile da abbinare</li>
                <li><strong>Beige:</strong> Sofisticato e timeless</li>
            </ul>
            
            <h2>Investimenti Fondamentali</h2>
            <p>Un guardaroba capsule efficace si basa su pezzi di alta qualità che servono come base per la maggior parte dei tuoi outfit.</p>
            
            <h3>Must-Have Essential</h3>
            <p>La chiave del successo è scegliere capi che possono essere dressed up o down, che sono comodi ma eleganti, e che ti fanno sentire sicura di te stessa.</p>
            
            <blockquote>
                "Il minimalismo nell'abbigliamento è l'arte di fare di meno per ottenere di più"
            </blockquote>
        `
    }
};

// Funzione per mostrare articoli
function navigateToArticle(articleId) {
    console.log('Article clicked:', articleId);
    
    const article = ARTICLES[articleId];
    if (!article) {
        alert('Articolo non trovato!');
        return;
    }
    
    // Nascondi sezione articoli
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.style.display = 'none';
    }
    
    // Crea contenitore articolo
    let articleContainer = document.getElementById('article-view');
    if (!articleContainer) {
        articleContainer = document.createElement('div');
        articleContainer.id = 'article-view';
        articleContainer.style.cssText = 'display:block; padding:20px; max-width:800px; margin:0 auto;';
        document.body.appendChild(articleContainer);
    }
    
    // Mostra contenuto articolo
    articleContainer.innerHTML = `
        <button onclick="hideArticleContent()" style="padding:12px 20px; margin-bottom:20px; background:#333; color:white; border:none; border-radius:8px; cursor:pointer;">
            ← Torna agli Articoli
        </button>
        
        <article style="background:white; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1); overflow:hidden;">
            <header style="padding:30px; border-bottom:1px solid #eee;">
                <h1 style="margin:0 0 10px 0; font-size:2rem; color:#333;">${article.title}</h1>
                <p style="margin:0; color:#666; font-size:14px;">${article.date} • ${article.readTime}</p>
                <img src="${article.image}" alt="Article" style="width:100%; height:300px; object-fit:cover; margin-top:15px; border-radius:8px;">
            </header>
            <div style="padding:30px;">
                ${article.content}
            </div>
        </article>
    `;
    
    window.scrollTo(0, 0);
}

// Funzione per nascondere articoli
function hideArticleContent() {
    const homeSection = document.getElementById('home');
    const articleContainer = document.getElementById('article-view');
    
    if (homeSection) {
        homeSection.style.display = 'block';
    }
    
    if (articleContainer) {
        articleContainer.style.display = 'none';
    }
    
    window.scrollTo(0, 0);
}

// Test se il JavaScript carica
console.log('Simple navigation script loaded!');
