// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create modal HTML structure
    const modalHTML = `
        <div class="modal-overlay" id="cardModal">
            <div class="modal-container">
                <button class="modal-close" id="modalClose">&times;</button>
                <img class="modal-image" id="modalImage" src="" alt="">
                <div class="modal-content">
                    <h2 class="modal-title" id="modalTitle"></h2>
                    <p class="modal-subtitle" id="modalSubtitle"></p>
                    <p class="modal-description" id="modalDescription"></p>
                    <div class="modal-highlights" id="modalHighlights"></div>
                    <div class="modal-details" id="modalDetails"></div>
                </div>
            </div>
        </div>
    `;

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('cardModal');
    const modalClose = document.getElementById('modalClose');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalHighlights = document.getElementById('modalHighlights');
    const modalDetails = document.getElementById('modalDetails');

    // Card data mapping
    const cardData = {
        // Popular Destinations from index.html
        'cairo': {
            image: 'https://images.unsplash.com/photo-1710211288826-b7df3ab71588?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Cairo',
            subtitle: 'Capital City | 50+ Attractions',
            description: 'The bustling capital of Egypt, home to ancient pyramids, vibrant markets, and rich Islamic heritage. Explore the Egyptian Museum, Khan el-Khalili bazaar, and historic mosques.',
            highlights: ['Pyramids of Giza', 'Egyptian Museum', 'Islamic Cairo', 'Khan el-Khalili'],
            details: {
                title: 'Key Attractions',
                items: ['Great Pyramid of Giza', 'The Sphinx', 'Egyptian Museum in Tahrir', 'Khan el-Khalili Bazaar', 'Al-Azhar Mosque', 'Citadel of Saladin', 'Coptic Cairo']
            }
        },
        'luxor': {
            image: 'https://images.unsplash.com/photo-1587975844610-40f1ad10d07e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Luxor',
            subtitle: 'Ancient Thebes | 40+ Attractions',
            description: 'Known as the world\'s greatest open-air museum, Luxor is home to magnificent temples, royal tombs, and ancient monuments that tell the story of pharaonic Egypt.',
            highlights: ['Valley of the Kings', 'Karnak Temple', 'Luxor Temple', 'Temple of Hatshepsut'],
            details: {
                title: 'Key Attractions',
                items: ['Valley of the Kings', 'Karnak Temple Complex', 'Luxor Temple', 'Temple of Hatshepsut', 'Valley of the Queens', 'Colossi of Memnon', 'Luxor Museum']
            }
        },
        'aswan': {
            image: 'https://images.unsplash.com/photo-1644517270263-4112379d97ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Aswan',
            subtitle: 'Nubian City | 25+ Attractions',
            description: 'A peaceful city on the Nile with stunning natural beauty, Nubian culture, and remarkable temples including Abu Simbel and Philae Temple.',
            highlights: ['Abu Simbel Temples', 'Philae Temple', 'Nubian Villages', 'High Dam'],
            details: {
                title: 'Key Attractions',
                items: ['Abu Simbel Temples', 'Philae Temple', 'Aswan High Dam', 'Nubian Villages', 'Unfinished Obelisk', 'Nubia Museum', 'Elephantine Island']
            }
        },
        'redsea': {
            image: 'https://images.unsplash.com/photo-1568575621216-ca74d9a8c687?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Red Sea',
            subtitle: 'Diving Paradise | 20+ Attractions',
            description: 'World-renowned for its crystal-clear waters, vibrant coral reefs, and exceptional diving and snorkeling opportunities. Perfect for beach lovers and water sports enthusiasts.',
            highlights: ['Sharm el-Sheikh', 'Hurghada', 'Dahab', 'Coral Reefs'],
            details: {
                title: 'Popular Resorts',
                items: ['Sharm el-Sheikh', 'Hurghada', 'Dahab', 'Marsa Alam', 'El Gouna', 'Taba', 'Ras Sudr']
            }
        },
        'sinai': {
            image: 'https://images.unsplash.com/photo-1661270288617-f3168c7a18be?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Sinai Peninsula',
            subtitle: 'Sacred Mountains | 15+ Attractions',
            description: 'A land of dramatic desert landscapes, sacred mountains, and Bedouin culture. Home to Mount Sinai and St. Catherine\'s Monastery.',
            highlights: ['Mount Sinai', 'St. Catherine\'s Monastery', 'Colored Canyon', 'Bedouin Culture'],
            details: {
                title: 'Key Attractions',
                items: ['Mount Sinai', 'St. Catherine\'s Monastery', 'Colored Canyon', 'Blue Hole (Dahab)', 'Ras Mohammed National Park', 'Bedouin Camps', 'Serabit el-Khadim']
            }
        },
        // Must-See Attractions from index.html
        'pyramids-giza': {
            image: 'https://images.unsplash.com/photo-1541769740-098e80269166?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Pyramids of Giza',
            subtitle: 'Last Remaining Wonder of the Ancient World',
            description: 'The Pyramids of Giza are the most iconic symbols of ancient Egypt. Built over 4,500 years ago, the Great Pyramid of Khufu is the largest and oldest of the three pyramids, standing as a testament to ancient engineering brilliance.',
            highlights: ['Great Pyramid of Khufu', 'Pyramid of Khafre', 'Pyramid of Menkaure', 'The Great Sphinx'],
            details: {
                title: 'Fascinating Facts',
                items: ['Built around 2580-2560 BC', 'Great Pyramid originally 146.6 meters tall', 'Over 2.3 million stone blocks used', 'Aligned with cardinal directions', 'UNESCO World Heritage Site since 1979']
            }
        },
        'karnak-temple': {
            image: 'https://images.unsplash.com/photo-1663601896596-ee0f9daac04c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Karnak Temple',
            subtitle: 'World\'s Largest Religious Complex',
            description: 'The Karnak Temple Complex is a vast collection of temples, chapels, pylons, and other buildings. It is the largest religious site ever constructed and was built over 2,000 years.',
            highlights: ['Great Hypostyle Hall', 'Sacred Lake', 'Obelisks', 'Temple of Amun'],
            details: {
                title: 'Key Features',
                items: ['134 massive columns in Hypostyle Hall', 'Built over 2,000 years', 'Covers 200 acres', 'Dedicated to Amun, Mut, and Khonsu', 'Sound and Light Show available']
            }
        },
        'edfu-temple': {
            image: 'https://images.unsplash.com/photo-1557640047-75c97a5f1ea4?q=80&w=895&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Edfu Temple',
            subtitle: 'Temple of Horus',
            description: 'The Temple of Edfu is one of the best-preserved temples in Egypt. Dedicated to the falcon god Horus, it was built during the Ptolemaic period and stands as a magnificent example of ancient Egyptian architecture.',
            highlights: ['Temple of Horus', 'Ptolemaic Architecture', 'Well Preserved', 'Reliefs and Inscriptions'],
            details: {
                title: 'Key Features',
                items: ['Built 237-57 BC', 'Dedicated to Horus', 'One of best-preserved temples', '36-meter high pylon', 'Beautiful reliefs and hieroglyphs']
            }
        },
        'al-azhar-mosque': {
            image: 'https://images.unsplash.com/photo-1760973519064-fc146406c871?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Al-Azhar Mosque',
            subtitle: 'One of the Oldest Universities in the World',
            description: 'Al-Azhar Mosque is one of the most important religious and educational institutions in the Islamic world. Founded in 970 AD, it houses Al-Azhar University, one of the oldest universities in the world.',
            highlights: ['Founded 970 AD', 'Al-Azhar University', 'Islamic Architecture', 'Religious Center'],
            details: {
                title: 'Historical Significance',
                items: ['Founded by Fatimid Caliphate', 'One of oldest universities', 'Center of Islamic learning', 'Beautiful Fatimid architecture', 'Located in Islamic Cairo']
            }
        },
        // Experience Egypt
        'egyptian-cuisine': {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutwoFAMGiBYYudVaVljI_EJWD6Njbiil3AsA520cEIspyPs7y8ZnjxVe3uP-BN_KBZIMoJg&s=10',
            title: 'Egyptian Cuisine',
            subtitle: 'A Culinary Journey Through Time',
            description: 'Experience the rich flavors of Egyptian cuisine, a blend of Mediterranean, Middle Eastern, and African influences. From traditional street food to elaborate feasts, discover dishes that have been enjoyed for thousands of years.',
            highlights: ['Koshari', 'Ful Medames', 'Molokhia', 'Mahshi'],
            details: {
                title: 'Must-Try Dishes',
                items: ['Koshari - National dish with rice, lentils, pasta', 'Ful Medames - Fava beans breakfast', 'Molokhia - Green soup with chicken', 'Mahshi - Stuffed vegetables', 'Shawarma and Kofta', 'Baklava and Basbousa']
            }
        },
        'traditions-culture': {
            image: 'https://unitedguidestravel.com/wp-content/uploads/2023/03/ramadan-in-egypt-celebrations-800x500.jpg',
            title: 'Traditions & Culture',
            subtitle: 'Rich Heritage and Customs',
            description: 'Discover Egypt\'s vibrant traditions and cultural heritage. From ancient customs to modern celebrations, experience the warmth and hospitality of Egyptian people and their rich cultural tapestry.',
            highlights: ['Ramadan Celebrations', 'Traditional Music', 'Folk Dances', 'Handicrafts'],
            details: {
                title: 'Cultural Highlights',
                items: ['Ramadan and Eid celebrations', 'Traditional Tanoura dance', 'Nubian music and culture', 'Handmade crafts and souvenirs', 'Traditional weddings', 'Religious festivals']
            }
        },
        'events-festivals': {
            image: 'https://www.egypttoday.com/siteimages/Larg/20251102125800580.jpg',
            title: 'Events & Festivals',
            subtitle: 'Celebrations Throughout the Year',
            description: 'Join in Egypt\'s vibrant calendar of events and festivals. From religious celebrations to cultural festivals, music events, and traditional gatherings, there\'s always something happening in Egypt.',
            highlights: ['Ramadan', 'Eid Celebrations', 'Cairo International Film Festival', 'Sham el-Nessim'],
            details: {
                title: 'Major Events',
                items: ['Ramadan - Holy month of fasting', 'Eid al-Fitr and Eid al-Adha', 'Sham el-Nessim - Spring festival', 'Cairo International Film Festival', 'Abu Simbel Sun Festival', 'Luxor African Film Festival']
            }
        },
        // Additional destinations
        'alexandria': {
            image: '../../assets/destinations/alexandria-destination.jpg',
            title: 'Alexandria',
            subtitle: 'Mediterranean Pearl | 30+ Attractions',
            description: 'Egypt\'s second-largest city, a Mediterranean gem with Greco-Roman history, beautiful coastlines, and the legendary Library of Alexandria.',
            highlights: ['Qaitbay Citadel', 'Bibliotheca Alexandrina', 'Catacombs of Kom el Shoqafa', 'Montaza Palace'],
            details: {
                title: 'Key Attractions',
                items: ['Qaitbay Citadel', 'Bibliotheca Alexandrina', 'Catacombs of Kom el Shoqafa', 'Montaza Palace', 'Pompey\'s Pillar', 'Alexandria National Museum', 'Corniche']
            }
        },
        'giza-plateau': {
            image: '../../assets/destinations/giza-destination.jpg',
            title: 'Giza Plateau',
            subtitle: 'Ancient Wonder of the World',
            description: 'Stand in awe before the last remaining wonder of the ancient world. The Great Pyramid of Giza, the Sphinx, and the surrounding complex represent the pinnacle of ancient Egyptian engineering and artistry.',
            highlights: ['Great Pyramid', 'The Sphinx', 'Solar Boat Museum', 'Sound and Light Show'],
            details: {
                title: 'What to See',
                items: ['Great Pyramid of Khufu', 'Pyramid of Khafre', 'Pyramid of Menkaure', 'The Great Sphinx', 'Solar Boat Museum', 'Sound and Light Show', 'Camel Rides']
            }
        },
        'nile-river': {
            image: '../../assets/destinations/nile-destination.jpg',
            title: 'Nile River',
            subtitle: 'Lifeblood of Egypt',
            description: 'Experience Egypt from the lifeblood of the nation. Cruise along the Nile to witness ancient temples, traditional villages, and breathtaking landscapes that have inspired travelers for millennia.',
            highlights: ['Nile Cruises', 'Feluccas', 'Riverside Temples', 'Sunset Views'],
            details: {
                title: 'Nile Experiences',
                items: ['Luxury Nile Cruises', 'Traditional Felucca Sailing', 'Riverside Temple Visits', 'Sunset and Sunrise Views', 'Riverside Villages', 'Bird Watching', 'Fishing']
            }
        },
        'grand-egyptian-museum': {
            image: '../../assets/destinations/grand-egyptian-museum.jpg',
            title: 'Grand Egyptian Museum',
            subtitle: 'World\'s Largest Archaeological Museum',
            description: 'Experience the magnificent Grand Egyptian Museum, the world\'s largest museum dedicated to a single civilization. Located near the Pyramids of Giza, this architectural marvel houses over 100,000 artifacts, including the complete collection from King Tutankhamun\'s tomb.',
            highlights: ['King Tutankhamun Collection', '100,000+ Artifacts', 'Colossal Statue of Ramses II', '52-foot Waziri Papyrus'],
            details: {
                title: 'Museum Highlights',
                items: ['Complete Tutankhamun Collection', 'Over 100,000 artifacts', 'Colossal Statue of Ramses II', '52-foot Waziri Papyrus', 'Modern Architecture', 'Interactive Exhibits', 'Near Giza Pyramids']
            }
        }
    };

    // Function to open modal
    function openModal(data) {
        modalImage.src = data.image;
        modalImage.alt = data.title;
        modalTitle.textContent = data.title;
        modalSubtitle.textContent = data.subtitle || '';
        modalDescription.textContent = data.description;

        // Clear and populate highlights
        modalHighlights.innerHTML = '';
        if (data.highlights && data.highlights.length > 0) {
            data.highlights.forEach(highlight => {
                const badge = document.createElement('span');
                badge.className = 'modal-highlight-badge';
                badge.textContent = highlight;
                modalHighlights.appendChild(badge);
            });
        }

        // Clear and populate details
        modalDetails.innerHTML = '';
        if (data.details) {
            const detailsTitle = document.createElement('h4');
            detailsTitle.textContent = data.details.title;
            modalDetails.appendChild(detailsTitle);

            const detailsList = document.createElement('ul');
            if (data.details.items && data.details.items.length > 0) {
                data.details.items.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item;
                    detailsList.appendChild(listItem);
                });
            }
            modalDetails.appendChild(detailsList);
        }

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close modal on close button click
    modalClose.addEventListener('click', closeModal);

    // Close modal on overlay click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Make all cards clickable
    function makeCardsClickable() {
        // Find all cards
        const cards = document.querySelectorAll('.card, .destination-card, .attraction-card, .featured-card, .main-destination-card');

        cards.forEach(card => {
            // Skip if already has click handler
            if (card.dataset.modalAttached) return;
            card.dataset.modalAttached = 'true';

            card.addEventListener('click', function(e) {
                // Don't trigger if clicking on a link inside the card
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }

                // Get card identifier
                const cardTitle = card.querySelector('h3, h4, .card-body');
                let cardKey = '';

                if (cardTitle) {
                    const titleText = cardTitle.textContent.trim().toLowerCase();
                    // Map title to card key
                    if (titleText.includes('cairo')) cardKey = 'cairo';
                    else if (titleText.includes('luxor')) cardKey = 'luxor';
                    else if (titleText.includes('aswan')) cardKey = 'aswan';
                    else if (titleText.includes('red sea')) cardKey = 'redsea';
                    else if (titleText.includes('sinai')) cardKey = 'sinai';
                    else if (titleText.includes('pyramid') || titleText.includes('giza')) {
                        if (card.classList.contains('featured-card') || titleText.includes('plateau')) {
                            cardKey = 'giza-plateau';
                        } else {
                            cardKey = 'pyramids-giza';
                        }
                    }
                    else if (titleText.includes('karnak')) cardKey = 'karnak-temple';
                    else if (titleText.includes('edfu')) cardKey = 'edfu-temple';
                    else if (titleText.includes('azhar')) cardKey = 'al-azhar-mosque';
                    else if (titleText.includes('cuisine')) cardKey = 'egyptian-cuisine';
                    else if (titleText.includes('tradition') || titleText.includes('culture')) cardKey = 'traditions-culture';
                    else if (titleText.includes('event') || titleText.includes('festival')) cardKey = 'events-festivals';
                    else if (titleText.includes('alexandria')) cardKey = 'alexandria';
                    else if (titleText.includes('nile')) cardKey = 'nile-river';
                    else if (titleText.includes('grand egyptian') || titleText.includes('museum')) {
                        if (titleText.includes('grand')) {
                            cardKey = 'grand-egyptian-museum';
                        }
                    }
                }

                // Check for data attribute
                if (card.dataset.cardKey) {
                    cardKey = card.dataset.cardKey;
                }

                // Get image from card
                const cardImage = card.querySelector('img');
                let imageSrc = '';
                if (cardImage) {
                    imageSrc = cardImage.src;
                }

                // If we have a card key, use the data
                if (cardKey && cardData[cardKey]) {
                    const data = { ...cardData[cardKey] };
                    if (imageSrc && !data.image.startsWith('http') && !data.image.startsWith('../../')) {
                        data.image = imageSrc;
                    }
                    openModal(data);
                } else {
                    // Fallback: create basic modal from card content
                    const title = card.querySelector('h3, h4')?.textContent || card.querySelector('.card-body')?.textContent || 'Card Details';
                    const description = card.querySelector('p')?.textContent || 'Click to learn more about this destination.';
                    
                    openModal({
                        image: imageSrc || 'https://images.unsplash.com/photo-1597500993730-613ee0eab73b?q=80&w=870&auto=format&fit=crop',
                        title: title,
                        subtitle: '',
                        description: description,
                        highlights: [],
                        details: null
                    });
                }
            });
        });
    }

    // Initialize on page load
    makeCardsClickable();

    // Re-initialize when new content is added (for dynamic content)
    const observer = new MutationObserver(function(mutations) {
        makeCardsClickable();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

