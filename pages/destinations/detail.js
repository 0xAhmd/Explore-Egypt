// Destination data
const destinationData = {
    'cairo': {
        image: '../../assets/destinations/cairo-destination.jpg',
        heroImage: '../../assets/destinations/cairo-destination.jpg',
        title: 'Cairo',
        subtitle: 'Capital City | 50+ Attractions',
        description: 'The bustling capital of Egypt, home to ancient pyramids, vibrant markets, and rich Islamic heritage. Explore the Egyptian Museum, Khan el-Khalili bazaar, and historic mosques. Cairo is a city where ancient history meets modern life, offering visitors an unforgettable experience of Egyptian culture, cuisine, and architecture.',
        highlights: ['Pyramids of Giza', 'Egyptian Museum', 'Islamic Cairo', 'Khan el-Khalili'],
        info: {
            title: 'Key Attractions',
            items: ['Great Pyramid of Giza', 'The Sphinx', 'Egyptian Museum in Tahrir', 'Khan el-Khalili Bazaar', 'Al-Azhar Mosque', 'Citadel of Saladin', 'Coptic Cairo', 'Mokattam Hills', 'Nile Corniche']
        }
    },
    'luxor': {
        image: '../../assets/destinations/luxor-destination.jpg',
        heroImage: '../../assets/destinations/luxor-destination.jpg',
        title: 'Luxor',
        subtitle: 'Ancient Thebes | 40+ Attractions',
        description: 'Known as the world\'s greatest open-air museum, Luxor is home to magnificent temples, royal tombs, and ancient monuments that tell the story of pharaonic Egypt. This ancient city on the east bank of the Nile was once the capital of ancient Egypt and remains one of the most important archaeological sites in the world.',
        highlights: ['Valley of the Kings', 'Karnak Temple', 'Luxor Temple', 'Temple of Hatshepsut'],
        info: {
            title: 'Key Attractions',
            items: ['Valley of the Kings', 'Karnak Temple Complex', 'Luxor Temple', 'Temple of Hatshepsut', 'Valley of the Queens', 'Colossi of Memnon', 'Luxor Museum', 'Deir el-Medina', 'Ramesseum']
        }
    },
    'aswan': {
        image: '../../assets/destinations/aswan-destination.jpg',
        heroImage: '../../assets/destinations/aswan-destination.jpg',
        title: 'Aswan',
        subtitle: 'Nubian City | 25+ Attractions',
        description: 'A peaceful city on the Nile with stunning natural beauty, Nubian culture, and remarkable temples including Abu Simbel and Philae Temple. Aswan offers a more relaxed pace than Cairo or Luxor, with beautiful scenery, friendly locals, and some of Egypt\'s most impressive ancient sites.',
        highlights: ['Abu Simbel Temples', 'Philae Temple', 'Nubian Villages', 'High Dam'],
        info: {
            title: 'Key Attractions',
            items: ['Abu Simbel Temples', 'Philae Temple', 'Aswan High Dam', 'Nubian Villages', 'Unfinished Obelisk', 'Nubia Museum', 'Elephantine Island', 'Kitchener\'s Island', 'Aswan Botanical Garden']
        }
    },
    'alexandria': {
        image: '../../assets/destinations/alexandria-destination.jpg',
        heroImage: '../../assets/destinations/alexandria-destination.jpg',
        title: 'Alexandria',
        subtitle: 'Mediterranean Pearl | 30+ Attractions',
        description: 'Egypt\'s second-largest city, a Mediterranean gem with Greco-Roman history, beautiful coastlines, and the legendary Library of Alexandria. Founded by Alexander the Great, this coastal city offers a unique blend of Egyptian, Greek, and Roman influences, making it a fascinating destination for history and culture enthusiasts.',
        highlights: ['Qaitbay Citadel', 'Bibliotheca Alexandrina', 'Catacombs of Kom el Shoqafa', 'Montaza Palace'],
        info: {
            title: 'Key Attractions',
            items: ['Qaitbay Citadel', 'Bibliotheca Alexandrina', 'Catacombs of Kom el Shoqafa', 'Montaza Palace', 'Pompey\'s Pillar', 'Alexandria National Museum', 'Corniche', 'Stanley Bridge', 'Royal Jewelry Museum']
        }
    },
    'redsea': {
        image: '../../assets/destinations/redsea-destination.jpg',
        heroImage: '../../assets/destinations/redsea-destination.jpg',
        title: 'Red Sea',
        subtitle: 'Diving Paradise | 20+ Attractions',
        description: 'World-renowned for its crystal-clear waters, vibrant coral reefs, and exceptional diving and snorkeling opportunities. Perfect for beach lovers and water sports enthusiasts. The Red Sea coast offers some of the world\'s best diving sites, luxury resorts, and stunning desert landscapes.',
        highlights: ['Sharm el-Sheikh', 'Hurghada', 'Dahab', 'Coral Reefs'],
        info: {
            title: 'Popular Resorts',
            items: ['Sharm el-Sheikh', 'Hurghada', 'Dahab', 'Marsa Alam', 'El Gouna', 'Taba', 'Ras Sudr', 'Soma Bay', 'Makadi Bay']
        }
    },
    'sinai': {
        image: '../../assets/destinations/sinai-destination.jpg',
        heroImage: '../../assets/destinations/sinai-destination.jpg',
        title: 'Sinai Peninsula',
        subtitle: 'Sacred Mountains | 15+ Attractions',
        description: 'A land of dramatic desert landscapes, sacred mountains, and Bedouin culture. Home to Mount Sinai and St. Catherine\'s Monastery. The Sinai Peninsula offers a unique combination of religious significance, natural beauty, and cultural experiences that make it a must-visit destination.',
        highlights: ['Mount Sinai', 'St. Catherine\'s Monastery', 'Colored Canyon', 'Bedouin Culture'],
        info: {
            title: 'Key Attractions',
            items: ['Mount Sinai', 'St. Catherine\'s Monastery', 'Colored Canyon', 'Blue Hole (Dahab)', 'Ras Mohammed National Park', 'Bedouin Camps', 'Serabit el-Khadim', 'Wadi Feiran', 'Crystal Mountain']
        }
    },
    'giza-plateau': {
        image: '../../assets/destinations/giza-destination.jpg',
        heroImage: '../../assets/destinations/giza-destination.jpg',
        title: 'Giza Plateau',
        subtitle: 'Ancient Wonder of the World',
        description: 'Stand in awe before the last remaining wonder of the ancient world. The Great Pyramid of Giza, the Sphinx, and the surrounding complex represent the pinnacle of ancient Egyptian engineering and artistry. This iconic site has captivated visitors for thousands of years and continues to inspire wonder today.',
        highlights: ['Great Pyramid', 'The Sphinx', 'Solar Boat Museum', 'Sound and Light Show'],
        info: {
            title: 'What to See',
            items: ['Great Pyramid of Khufu', 'Pyramid of Khafre', 'Pyramid of Menkaure', 'The Great Sphinx', 'Solar Boat Museum', 'Sound and Light Show', 'Camel Rides', 'Pyramid Complex', 'Valley Temple']
        }
    },
    'nile-river': {
        image: '../../assets/destinations/nile-destination.jpg',
        heroImage: '../../assets/destinations/nile-destination.jpg',
        title: 'Nile River',
        subtitle: 'Lifeblood of Egypt',
        description: 'Experience Egypt from the lifeblood of the nation. Cruise along the Nile to witness ancient temples, traditional villages, and breathtaking landscapes that have inspired travelers for millennia. The Nile River has been central to Egyptian civilization for over 5,000 years and remains the country\'s most important natural resource.',
        highlights: ['Nile Cruises', 'Feluccas', 'Riverside Temples', 'Sunset Views'],
        info: {
            title: 'Nile Experiences',
            items: ['Luxury Nile Cruises', 'Traditional Felucca Sailing', 'Riverside Temple Visits', 'Sunset and Sunrise Views', 'Riverside Villages', 'Bird Watching', 'Fishing', 'Nile Islands', 'Riverside Restaurants']
        }
    },
    'grand-egyptian-museum': {
        image: '../../assets/destinations/grand-egyptian-museum.jpg',
        heroImage: '../../assets/destinations/grand-egyptian-museum.jpg',
        title: 'Grand Egyptian Museum',
        subtitle: 'World\'s Largest Archaeological Museum',
        description: 'Experience the magnificent Grand Egyptian Museum, the world\'s largest museum dedicated to a single civilization. Located near the Pyramids of Giza, this architectural marvel houses over 100,000 artifacts, including the complete collection from King Tutankhamun\'s tomb. Discover Egypt\'s rich history spanning from the Predynastic Period to the Roman era in this state-of-the-art facility.',
        highlights: ['King Tutankhamun Collection', '100,000+ Artifacts', 'Colossal Statue of Ramses II', '52-foot Waziri Papyrus'],
        info: {
            title: 'Museum Highlights',
            items: ['Complete Tutankhamun Collection', 'Over 100,000 artifacts', 'Colossal Statue of Ramses II', '52-foot Waziri Papyrus', 'Modern Architecture', 'Interactive Exhibits', 'Near Giza Pyramids', 'Conservation Labs', 'Educational Programs']
        }
    }
};

// Get destination from URL parameter
function getDestinationFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('destination');
}

// Load destination data
function loadDestination() {
    const destinationKey = getDestinationFromURL();
    
    if (!destinationKey || !destinationData[destinationKey]) {
        // Default to Cairo if invalid destination
        displayDestination('cairo');
        return;
    }
    
    displayDestination(destinationKey);
}

// Display destination information
function displayDestination(key) {
    const data = destinationData[key];
    
    if (!data) return;
    
    // Update page title
    document.title = `${data.title} - Discover Egypt`;
    
    // Update hero section
    const hero = document.getElementById('detailHero');
    hero.style.backgroundImage = `url(${data.heroImage})`;
    
    // Update hero content
    document.getElementById('detailTitle').textContent = data.title;
    document.getElementById('detailSubtitle').textContent = data.subtitle;
    
    // Update main image
    const detailImage = document.getElementById('detailImage');
    detailImage.src = data.image;
    detailImage.alt = data.title;
    
    // Update description
    document.getElementById('detailDescription').textContent = data.description;
    
    // Update highlights
    const highlightsContainer = document.getElementById('detailHighlights');
    highlightsContainer.innerHTML = '';
    data.highlights.forEach(highlight => {
        const badge = document.createElement('span');
        badge.className = 'detail-highlight-badge';
        badge.textContent = highlight;
        highlightsContainer.appendChild(badge);
    });
    
    // Update info box
    if (data.info) {
        document.getElementById('detailInfoTitle').textContent = data.info.title;
        const infoList = document.getElementById('detailInfoList');
        infoList.innerHTML = '';
        data.info.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            infoList.appendChild(listItem);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadDestination();
});

