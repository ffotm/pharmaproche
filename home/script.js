// إضافة مكتبة Leaflet للخرائط
document.write('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />');
document.write('<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>');
/*
// Enhanced pharmacy data
const pharmacies = [
    {
        id: '1',
        name: 'صيدلية المركز',
        address: '123 شارع ديدوش مراد، الجزائر',
        location: { lat: 36.7538, lng: 3.0588 },
        isOpen: true,
        phone: '+213 21 23 45 67',
        openHours: '24/7',
        services: ['أدوية عامة', 'وصفات طبية', 'استشارات صيدلانية'],
        rating: 4.5
    },
    {
        id: '2',
        name: 'صيدلية الميناء',
        address: '45 شارع زيغود يوسف، الجزائر',
        location: { lat: 36.7558, lng: 3.0608 },
        isOpen: false,
        phone: '+213 21 34 56 78',
        openHours: '8:00 - 20:00',
        services: ['أدوية مزمنة', 'التطعيمات', 'قياس ضغط الدم'],
        rating: 4.2
    }
];

let map, userMarker;
let activeInfoWindow = null;

// Initialize map
function initMap() {
    map = L.map('map').setView([36.7538, 3.0588], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add pharmacy markers
    addPharmacyMarkers();
    
    // Initialize geolocation
    initGeolocation();
}

// Add pharmacy markers to map
function addPharmacyMarkers() {
    pharmacies.forEach(pharmacy => {
        const marker = L.marker([pharmacy.location.lat, pharmacy.location.lng])
            .addTo(map)
            .bindPopup(createPharmacyPopup(pharmacy));
            
        marker.on('click', () => {
            map.setView([pharmacy.location.lat, pharmacy.location.lng], 15);
            showPharmacyDetails(pharmacy);
        });
    });
}

// Create pharmacy popup content
function createPharmacyPopup(pharmacy) {
    return `
        <div class="pharmacy-popup">
            <h3>${pharmacy.name}</h3>
            <p><strong>العنوان:</strong> ${pharmacy.address}</p>
            <p><strong>الهاتف:</strong> ${pharmacy.phone}</p>
            <p><strong>ساعات العمل:</strong> ${pharmacy.openHours}</p>
            <p class="${pharmacy.isOpen ? 'status-open' : 'status-closed'}">
                ${pharmacy.isOpen ? 'مفتوح الآن' : 'مغلق'}
            </p>
            <div class="pharmacy-actions">
                <button class="pharmacy-action-btn" onclick="navigateTo('prescription', '${pharmacy.id}')">
                    طلب بوصفة طبية
                </button>
                <button class="pharmacy-action-btn" onclick="navigateTo('otc', '${pharmacy.id}')">
                    طلب بدون وصفة
                </button>
            </div>
        </div>
    `;
}

// Initialize geolocation
function initGeolocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            
            // Add user marker
            if (userMarker) {
                userMarker.setLatLng([latitude, longitude]);
            } else {
                userMarker = L.marker([latitude, longitude], {
                    icon: L.divIcon({
                        className: 'user-location-marker',
                        html: '<div class="pulse"></div>'
                    })
                }).addTo(map);
            }
            
            map.setView([latitude, longitude], 15);
            findNearbyPharmacies(latitude, longitude);
        }, error => {
            console.error("Error getting location:", error);
            alert("يرجى تفعيل خدمة تحديد الموقع للعثور على الصيدليات القريبة");
        });
    }
}

// Search pharmacies
function searchPharmacies() {
    const searchQuery = document.getElementById('pharmacy-search').value.toLowerCase();
    
    const results = pharmacies.filter(pharmacy => 
        pharmacy.name.toLowerCase().includes(searchQuery) ||
        pharmacy.address.toLowerCase().includes(searchQuery)
    );
    
    displaySearchResults(results);
}

// Navigate to prescription/OTC pages
function navigateTo(type, pharmacyId) {
    const baseUrl = type === 'prescription' ? 'prescription.html' : 'otc.html';
    window.location.href = `${baseUrl}?pharmacy=${pharmacyId}`;
}

// Display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
    results.forEach(pharmacy => {
        resultsContainer.innerHTML += `
            <div class="pharmacy-card">
                <h4>${pharmacy.name}</h4>
                <p>${pharmacy.address}</p>
                <span class="pharmacy-status ${pharmacy.isOpen ? 'status-open' : 'status-closed'}">
                    ${pharmacy.isOpen ? 'مفتوح الآن' : 'مغلق'}
                </span>
                <div class="pharmacy-actions">
                    <button class="pharmacy-action-btn" onclick="showOnMap(${pharmacy.location.lat}, ${pharmacy.location.lng})">
                        عرض على الخريطة
                    </button>
                </div>
            </div>
        `;
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    document.getElementById('search-btn').addEventListener('click', searchPharmacies);
    document.getElementById('pharmacy-search').addEventListener('input', searchPharmacies);
});

// إضافة مكتبة Leaflet للخرائط
document.write('<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />');
document.write('<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>');

document.addEventListener("DOMContentLoaded", () => {
    initMap();
    document.getElementById("search-btn").addEventListener("click", searchPharmacies);
    document.getElementById("pharmacy-search").addEventListener("input", searchPharmacies);
    document.querySelector(".language-switch").addEventListener("click", toggleLanguage);
});



/*const translations = {
    ar: {
        home: "الرئيسية",
        pharmacies: "الصيدليات",
        medicines: "الأدوية",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",
        findPharmacy: "اعثر على أقرب صيدلية إليك",
        getMedicine: "احصل على الأدوية التي تحتاجها بسهولة وأمان",
        startNow: "ابدأ الآن",
        searchPlaceholder: "ابحث عن صيدلية...",
        locateMe: "حدد موقعك"
    },
    en: {
        home: "Home",
        pharmacies: "Pharmacies",
        medicines: "Medicines",
        contact: "Contact Us",
        login: "Login",
        findPharmacy: "Find the nearest pharmacy",
        getMedicine: "Get the medicine you need easily and safely",
        startNow: "Start Now",
        searchPlaceholder: "Search for a pharmacy...",
        locateMe: "Locate Me"
    }
};

let currentLang = "ar"; // اللغة الافتراضية

function toggleLanguage() {
    currentLang = currentLang === "ar" ? "en" : "ar";
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

    // تحديث النصوص في الصفحة
    document.querySelector(".nav-links a:nth-child(1)").textContent = translations[currentLang].home;
    document.querySelector(".nav-links a:nth-child(2)").textContent = translations[currentLang].pharmacies;
    document.querySelector(".nav-links a:nth-child(3)").textContent = translations[currentLang].medicines;
    document.querySelector(".nav-links a:nth-child(4)").textContent = translations[currentLang].contact;
    document.querySelector(".login-button").textContent = translations[currentLang].login;
    document.querySelector(".hero h1").textContent = translations[currentLang].findPharmacy;
    document.querySelector(".hero p").textContent = translations[currentLang].getMedicine;
    document.querySelector(".hero button").textContent = translations[currentLang].startNow;
    document.getElementById("pharmacy-search").placeholder = translations[currentLang].searchPlaceholder;
    document.querySelector(".location-btn").textContent = translations[currentLang].locateMe;

    // تغيير نص زر التبديل
    document.querySelector(".language-switch").textContent = currentLang === "ar" ? "English" : "العربية";
}



// Enhanced translations object
const translations = {
    ar: {
        // Navigation
        home: "الرئيسية",
        pharmacies: "الصيدليات",
        medicines: "الأدوية",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",
        
        // Hero Section
        findPharmacy: "اعثر على أقرب صيدلية إليك",
        getMedicine: "احصل على الأدوية التي تحتاجها بسهولة وأمان",
        startNow: "ابدأ الآن",
        
        // Features Section
        findNearestPharmacy: "البحث عن أقرب صيدلية",
        findNearestPharmacyDesc: "اعثر على الصيدليات القريبة منك بسهولة وسرعة",
        orderMedicine: "طلب الأدوية",
        orderMedicineDesc: "قم بتحميل الوصفة الطبية أو البحث عن الدواء المطلوب",
        trackOrders: "متابعة الطلبات",
        trackOrdersDesc: "تتبع حالة طلبك وتأكيد التوافر",
        
        // Search Section
        searchPlaceholder: "ابحث عن صيدلية...",
        locateMe: "حدد موقعك",
        searchResults: "نتائج البحث",
        open: "مفتوح الآن",
        closed: "مغلق",
        showOnMap: "عرض على الخريطة",
        
        // Footer
        quickLinks: "روابط سريعة",
        services: "خدماتنا",
        contactUs: "تواصل معنا",
        searchPharmacy: "البحث عن صيدلية",
        orderMedicines: "طلب دواء",
        delivery: "التوصيل",
        phone: "هاتف",
        email: "البريد الإلكتروني"
    },
    en: {
        // Navigation
        home: "Home",
        pharmacies: "Pharmacies",
        medicines: "Medicines",
        contact: "Contact Us",
        login: "Login",
        
        // Hero Section
        findPharmacy: "Find the Nearest Pharmacy",
        getMedicine: "Get the medicine you need easily and safely",
        startNow: "Start Now",
        
        // Features Section
        findNearestPharmacy: "Find Nearest Pharmacy",
        findNearestPharmacyDesc: "Locate nearby pharmacies quickly and easily",
        orderMedicine: "Order Medicine",
        orderMedicineDesc: "Upload prescription or search for required medicine",
        trackOrders: "Track Orders",
        trackOrdersDesc: "Track your order status and confirm availability",
        
        // Search Section
        searchPlaceholder: "Search for a pharmacy...",
        locateMe: "Locate Me",
        searchResults: "Search Results",
        open: "Open Now",
        closed: "Closed",
        showOnMap: "Show on Map",
        
        // Footer
        quickLinks: "Quick Links",
        services: "Services",
        contactUs: "Contact Us",
        searchPharmacy: "Search Pharmacy",
        orderMedicines: "Order Medicines",
        delivery: "Delivery",
        phone: "Phone",
        email: "Email"
    }
};

// Enhanced toggle language function
function toggleLanguage() {
    currentLang = currentLang === "ar" ? "en" : "ar";
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
    
    // Update all text content
    updatePageContent();
    
    // Update search section text
    updateSearchSection();
    
    // Update button text
    document.querySelector(".language-switch").textContent = 
        currentLang === "ar" ? "English" : "العربية";
}

function updatePageContent() {
    // Update navigation
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll("[data-translate-placeholder]").forEach(element => {
        const key = element.getAttribute("data-translate-placeholder");
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
}

// Enhanced search functionality
function initializeSearch() {
    const searchInput = document.getElementById('pharmacy-search');
    const searchResults = document.getElementById('search-results');
    let debounceTimer;

    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = searchInput.value.toLowerCase();
            const filteredPharmacies = pharmacies.filter(pharmacy =>
                pharmacy.name.toLowerCase().includes(query) ||
                pharmacy.address.toLowerCase().includes(query)
            );
            displaySearchResults(filteredPharmacies);
        }, 300);
    });
}

function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                ${translations[currentLang].noResults || 'No pharmacies found'}
            </div>
        `;
        return;
    }
    
    results.forEach(pharmacy => {
        resultsContainer.innerHTML += `
            <div class="pharmacy-card">
                <h4>${pharmacy.name}</h4>
                <p>${pharmacy.address}</p>
                <span class="pharmacy-status ${pharmacy.isOpen ? 'status-open' : 'status-closed'}">
                    ${pharmacy.isOpen ? translations[currentLang].open : translations[currentLang].closed}
                </span>
                <div class="pharmacy-actions">
                    <button class="pharmacy-action-btn" onclick="showOnMap(${pharmacy.location.lat}, ${pharmacy.location.lng})">
                        ${translations[currentLang].showOnMap}
                    </button>
                </div>
            </div>
        `;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    initMap();
    initializeSearch();
    updatePageContent();
});*/


// Enhanced pharmacy data with more locations
const pharmacies = [{
        id: '1',
        name: 'صيدلية المركز',
        address: '123 شارع ديدوش مراد، الجزائر',
        location: { lat: 36.7538, lng: 3.0588 },
        isOpen: true,
        phone: '+213 21 23 45 67',
        openHours: '24/7',
        services: ['أدوية عامة', 'وصفات طبية', 'استشارات صيدلانية'],
    },
    {
        id: '2',
        name: 'صيدلية الميناء',
        address: '45 شارع زيغود يوسف، الجزائر',
        location: { lat: 36.7558, lng: 3.0608 },
        isOpen: false,
        phone: '+213 21 34 56 78',
        openHours: '8:00 - 20:00',
        services: ['أدوية مزمنة', 'التطعيمات', 'قياس ضغط الدم'],
    },
    {
        id: '3',
        name: 'صيدلية الشفاء',
        address: '78 شارع الاستقلال، الجزائر',
        location: { lat: 36.7500, lng: 3.0550 },
        isOpen: true,
        phone: '+213 21 45 67 89',
        openHours: '7:00 - 23:00',
        services: ['أدوية مزمنة', 'مستحضرات تجميل', 'قياس السكر'],
    },
    {
        id: '4',
        name: 'صيدلية النور',
        address: '12 شارع العربي بن مهيدي، الجزائر',
        location: { lat: 36.7520, lng: 3.0530 },
        isOpen: true,
        phone: '+213 21 56 78 90',
        openHours: '8:00 - 22:00',
        services: ['أدوية عامة', 'مكملات غذائية', 'استشارات صحية'],
    }
];

let map, userMarker;
let markers = [];
let activeInfoWindow = null;
let currentLang = "ar"; // اللغة الافتراضية

// Initialize map
function initMap() {
    // If the map element doesn't exist yet, wait and try again
    if (!document.getElementById('map')) {
        setTimeout(initMap, 100);
        return;
    }

    map = L.map('map').setView([36.7538, 3.0588], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add pharmacy markers
    addPharmacyMarkers();

    // Initialize search field
    initializeSearch();

    // Add search results container if it doesn't exist
    if (!document.getElementById('search-results')) {
        const searchSection = document.querySelector('.search-section .container');
        const resultsDiv = document.createElement('div');
        resultsDiv.id = 'search-results';
        resultsDiv.className = 'search-results-container';
        searchSection.appendChild(resultsDiv);
    }
}

// Add pharmacy markers to map
function addPharmacyMarkers() {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Custom pharmacy icon
    const pharmacyIcon = L.divIcon({
        className: 'pharmacy-marker',
        html: `<div class="marker-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#008037" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    pharmacies.forEach(pharmacy => {
        const marker = L.marker([pharmacy.location.lat, pharmacy.location.lng], {
            icon: pharmacyIcon
        }).addTo(map);

        marker.bindPopup(createPharmacyPopup(pharmacy));
        marker.pharmacyId = pharmacy.id;

        marker.on('click', () => {
            map.setView([pharmacy.location.lat, pharmacy.location.lng], 15);
        });

        markers.push(marker);
    });
}

// إنشاء محتوى النافذة المنبثقة للصيدلية
function createPharmacyPopup(pharmacy) {
    const openStatusText = currentLang === 'ar' ? 'مفتوح الآن' : 'Open Now';
    const closedStatusText = currentLang === 'ar' ? 'مغلق' : 'Closed';
    const addressLabel = currentLang === 'ar' ? 'العنوان:' : 'Address:';
    const phoneLabel = currentLang === 'ar' ? 'الهاتف:' : 'Phone:';
    const hoursLabel = currentLang === 'ar' ? 'ساعات العمل:' : 'Hours:';
    const prescriptionBtn = currentLang === 'ar' ? 'طلب بوصفة طبية' : 'Prescription Order';
    const otcBtn = currentLang === 'ar' ? 'طلب بدون وصفة' : 'OTC Order';

    return `
        <div class="pharmacy-popup" dir="${currentLang === 'ar' ? 'rtl' : 'ltr'}">
            <h3>${pharmacy.name}</h3>
            <div class="rating">
            ${'★'.repeat(Math.floor(pharmacy.rating))}${'☆'.repeat(5 - Math.floor(pharmacy.rating))}
            <span>${pharmacy.rating}</span>
            </div>
            <p><strong>${addressLabel}</strong> ${pharmacy.address}</p>
            <p><strong>${phoneLabel}</strong> ${pharmacy.phone}</p>
            <p><strong>${hoursLabel}</strong> ${pharmacy.openHours}</p>
            <p class="pharmacy-status ${pharmacy.isOpen ? 'status-open' : 'status-closed'}">
            ${pharmacy.isOpen ? openStatusText : closedStatusText}
            </p>
            <div class="services-tags">
            ${pharmacy.services.map(service => `<span class="service-tag">${service}</span>`).join('')}
            </div>
           <div class="pharmacy-actions">
    <!-- Prescription button -->
    <button class="pharmacy-action-btn" onclick="window.location.href='ordonnance.html?pharmacyId=${pharmacy.id}'">
        ${prescriptionBtn}
    </button>
    
    <!-- OTC Button: store data and navigate -->
    <button class="pharmacy-action-btn orderWithoutPrescriptionBtn" 
            data-pharmacy-name= "${encodeURIComponent(pharmacy.name)}"
            data-location="ض" 
            onclick="storeDataAndNavigate(this)">
        ${otcBtn}
    </button>
</div>
        </div>
        `;
}

function storeDataAndNavigate(button) {
    const pharmacyName = button.getAttribute("data-pharmacy-name");
    const location = button.getAttribute("data-location");

    // Check the value of the pharmacy name in the console before storing it
    console.log("Pharmacy Name before storing:", pharmacyName);
    console.log("Location before storing:", location);

    // Store the values in sessionStorage
    sessionStorage.setItem("pharmacyName", pharmacyName);
    sessionStorage.setItem("pharmacyLocation", location);
 // Navigate to med.html
    window.location.href = "med.html";
    
}
// Initialize geolocation
function initGeolocation() {
    if ("geolocation" in navigator) {
        // Show loading indicator
        showLoadingIndicator();
        
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            
            // Add user marker with pulsing effect
            if (userMarker) {
                userMarker.setLatLng([latitude, longitude]);
            } else {
                const pulsingIcon = L.divIcon({
                    className: 'user-location-marker',
                    html: '<div class="pulse"></div><div class="pulse-inner"></div>',
                    iconSize: [20, 20],
                    iconAnchor: [10, 10]
                });
                
                userMarker = L.marker([latitude, longitude], {
                    icon: pulsingIcon
                }).addTo(map);
                
                userMarker.bindPopup(
                    currentLang === 'ar' ? 'موقعك الحالي' : 'Your Current Location'
                );
            }
            
            // Center map on user location
            map.setView([latitude, longitude], 15);
            
            // Find and highlight nearby pharmacies
            findNearbyPharmacies(latitude, longitude);
            
            // Hide loading indicator
            hideLoadingIndicator();
        }, error => {
            console.error("Error getting location:", error);
            alert(currentLang === 'ar' 
                ? "يرجى تفعيل خدمة تحديد الموقع للعثور على الصيدليات القريبة" 
                : "Please enable location services to find nearby pharmacies");
            
            // Hide loading indicator
            hideLoadingIndicator();
        });
    } else {
        alert(currentLang === 'ar'
            ? "متصفحك لا يدعم خدمة تحديد الموقع"
            : "Your browser doesn't support geolocation");
    }
}

// Find nearby pharmacies
function findNearbyPharmacies(lat, lng) {
    // Calculate distances and sort pharmacies
    const pharmaciesWithDistance = pharmacies.map(pharmacy => {
        const distance = calculateDistance(
            lat, lng, 
            pharmacy.location.lat, pharmacy.location.lng
        );
        return { ...pharmacy, distance };
    });
    
    // Sort by distance
    pharmaciesWithDistance.sort((a, b) => a.distance - b.distance);
    
    // Display results
    displaySearchResults(pharmaciesWithDistance);
    
    // Highlight the markers
    highlightNearbyMarkers(pharmaciesWithDistance.slice(0, 3));
}

// Calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Highlight nearby markers
function highlightNearbyMarkers(nearbyPharmacies) {
    // Reset all markers
    markers.forEach(marker => {
        marker.getElement().classList.remove('highlighted-marker');
    });
    
    // Highlight nearby markers
    markers.forEach(marker => {
        const pharmacyId = marker.pharmacyId;
        if (nearbyPharmacies.some(p => p.id === pharmacyId)) {
            marker.getElement().classList.add('highlighted-marker');
        }
    });
}

// Enhanced search initialization
function initializeSearch() {
    const searchInput = document.getElementById('pharmacy-search');
    if (!searchInput) return;
    
    let debounceTimer;

    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = searchInput.value.toLowerCase();
            if (query.length < 2) return;
            
            const filteredPharmacies = pharmacies.filter(pharmacy =>
                pharmacy.name.toLowerCase().includes(query) ||
                pharmacy.address.toLowerCase().includes(query) ||
                pharmacy.services.some(service => service.toLowerCase().includes(query))
            );
            
            displaySearchResults(filteredPharmacies);
            
            // If we have results, zoom to fit all filtered pharmacies
            if (filteredPharmacies.length > 0) {
                zoomToPharmacies(filteredPharmacies);
            }
        }, 300);
    });
    
    // Add search button click event
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            if (query.length < 2) return;
            
            const filteredPharmacies = pharmacies.filter(pharmacy =>
                pharmacy.name.toLowerCase().includes(query) ||
                pharmacy.address.toLowerCase().includes(query) ||
                pharmacy.services.some(service => service.toLowerCase().includes(query))
            );
            
            displaySearchResults(filteredPharmacies);
            
            // If we have results, zoom to fit all filtered pharmacies
            if (filteredPharmacies.length > 0) {
                zoomToPharmacies(filteredPharmacies);
            }
        });
    }
    
    // Add location button click event
    const locationBtn = document.querySelector('.location-btn');
    if (locationBtn) {
        locationBtn.addEventListener('click', initGeolocation);
    }
}

// Zoom map to fit pharmacies
function zoomToPharmacies(pharmaciesToShow) {
    if (pharmaciesToShow.length === 0) return;
    
    if (pharmaciesToShow.length === 1) {
        // If only one pharmacy, center on it
        const pharmacy = pharmaciesToShow[0];
        map.setView([pharmacy.location.lat, pharmacy.location.lng], 16);
        
        // Find and open the popup for this pharmacy
        markers.forEach(marker => {
            if (marker.pharmacyId === pharmacy.id) {
                marker.openPopup();
            }
        });
        
        return;
    }
    
    // Create bounds object
    const bounds = L.latLngBounds();
    
    // Add all pharmacy locations to bounds
    pharmaciesToShow.forEach(pharmacy => {
        bounds.extend([pharmacy.location.lat, pharmacy.location.lng]);
    });
    
    // Add user location to bounds if available
    if (userMarker) {
        bounds.extend(userMarker.getLatLng());
    }
    
    // Fit map to bounds with padding
    map.fitBounds(bounds, { padding: [50, 50] });
}

// Display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('search-results');
    if (!resultsContainer) return;
    
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = results.length > 0 ? 'block' : 'none';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                ${currentLang === 'ar' ? 'لا توجد نتائج' : 'No results found'}
            </div>
        `;
        return;
    }
    
    results.forEach(pharmacy => {
        const distance = pharmacy.distance ? 
            (pharmacy.distance < 1 ? 
                `${(pharmacy.distance * 1000).toFixed(0)} ${currentLang === 'ar' ? 'متر' : 'm'}` : 
                `${pharmacy.distance.toFixed(1)} ${currentLang === 'ar' ? 'كم' : 'km'}`) : 
            '';
        
        resultsContainer.innerHTML += `
            <div class="pharmacy-card" data-pharmacy-id="${pharmacy.id}">
                <div class="pharmacy-card-header">
                    <h4>${pharmacy.name}</h4>
                    <span class="pharmacy-status ${pharmacy.isOpen ? 'status-open' : 'status-closed'}">
                        ${pharmacy.isOpen ? 
                            (currentLang === 'ar' ? 'مفتوح الآن' : 'Open Now') : 
                            (currentLang === 'ar' ? 'مغلق' : 'Closed')}
                    </span>
                </div>
                <p>${pharmacy.address}</p>
                ${distance ? `<p class="distance"><i class="location-icon"></i>${distance}</p>` : ''}
                <div class="pharmacy-actions">
                    <button class="pharmacy-action-btn" onclick="showOnMap('${pharmacy.id}')">
                        ${currentLang === 'ar' ? 'عرض على الخريطة' : 'Show on Map'}
                    </button>
                </div>
            </div>
        `;
    });
    
    // Add click event to pharmacy cards
    document.querySelectorAll('.pharmacy-card').forEach(card => {
        card.addEventListener('click', () => {
            const pharmacyId = card.dataset.pharmacyId;
            showOnMap(pharmacyId);
        });
    });
}

// Show pharmacy on map
function showOnMap(pharmacyId) {
    const pharmacy = pharmacies.find(p => p.id === pharmacyId);
    if (!pharmacy) return;
    
    // Center map on pharmacy
    map.setView([pharmacy.location.lat, pharmacy.location.lng], 16);
    
    // Find and open the popup for this pharmacy
    markers.forEach(marker => {
        if (marker.pharmacyId === pharmacyId) {
            marker.openPopup();
        }
    });
    
    // Highlight the card
    document.querySelectorAll('.pharmacy-card').forEach(card => {
        card.classList.remove('active');
        if (card.dataset.pharmacyId === pharmacyId) {
            card.classList.add('active');
            // Scroll card into view if needed
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
}

// Show loading indicator
function showLoadingIndicator() {
    // Create loading indicator if it doesn't exist
    if (!document.getElementById('loading-indicator')) {
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'loading-indicator';
        loadingDiv.innerHTML = `
            <div class="loading-spinner"></div>
            <p>${currentLang === 'ar' ? 'جاري تحديد موقعك...' : 'Finding your location...'}</p>
        `;
        document.body.appendChild(loadingDiv);
    }
    
    document.getElementById('loading-indicator').style.display = 'flex';
}

// Hide loading indicator
function hideLoadingIndicator() {
    const indicator = document.getElementById('loading-indicator');
    if (indicator) {
        indicator.style.display = 'none';
    }
}

// Navigate to prescription/OTC pages
function navigateTo(type, pharmacyId) {
    const baseUrl = type === 'prescription' ? 'prescription.html' : 'otc.html';
     window.location.href = `${baseUrl}?pharmacy=${pharmacyId}&location=${encodeURIComponent(location)}`;

}
orderWithoutPrescriptionBtn.onclick = function () {
    const pharmacyId = pharmacy.id; // Get the pharmacy ID dynamically
    const location = "الرياض"; // You can dynamically assign this location based on the button or context
    navigateTo('otc', pharmacyId, location);
};

// Translations
const translations = {
    ar: {
        home: "الرئيسية",
        pharmacies: "الصيدليات",
        medicines: "الأدوية",
        contact: "اتصل بنا",
        login: "تسجيل الدخول",
        findPharmacy: "اعثر على أقرب صيدلية إليك",
        getMedicine: "احصل على الأدوية التي تحتاجها بسهولة وأمان",
        startNow: "ابدأ الآن",
        findNearestPharmacy: "البحث عن أقرب صيدلية",
        findNearestPharmacyDesc: "اعثر على الصيدليات القريبة منك بسهولة وسرعة",
        orderMedicine: "طلب الأدوية",
        orderMedicineDesc: "قم بتحميل الوصفة الطبية أو البحث عن الدواء المطلوب",
        trackOrders: "متابعة الطلبات",
        trackOrdersDesc: "تتبع حالة طلبك وتأكيد التوافر",
        searchPlaceholder: "ابحث عن أقرب صيدلية...",
        locateMe: "🔍 استخدم موقعي",
        searchResults: "نتائج البحث",
        open: "مفتوح الآن",
        closed: "مغلق",
        showOnMap: "عرض على الخريطة",
        noResults: "لا توجد نتائج",
        yourLocation: "موقعك الحالي"
    },
    en: {
        home: "Home",
        pharmacies: "Pharmacies",
        medicines: "Medicines",
        contact: "Contact Us",
        login: "Login",
        findPharmacy: "Find the Nearest Pharmacy",
        getMedicine: "Get the medicine you need easily and safely",
        startNow: "Start Now",
        findNearestPharmacy: "Find Nearest Pharmacy",
        findNearestPharmacyDesc: "Locate nearby pharmacies quickly and easily",
        orderMedicine: "Order Medicine",
        orderMedicineDesc: "Upload prescription or search for required medicine",
        trackOrders: "Track Orders",
        trackOrdersDesc: "Track your order status and confirm availability",
        searchPlaceholder: "Search for the nearest pharmacy...",
        locateMe: "🔍 Use My Location",
        searchResults: "Search Results",
        open: "Open Now",
        closed: "Closed",
        showOnMap: "Show on Map",
        noResults: "No results found",
        yourLocation: "Your Current Location"
    }
};

// Toggle language function
function toggleLanguage() {
    currentLang = currentLang === "ar" ? "en" : "ar";
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
    
    // Update all text content
    updatePageContent();
    
    // Update map popups by rebuilding markers
    addPharmacyMarkers();
    
    // Update button text
    const langButton = document.querySelector(".language-switch");
    if (langButton) {
        langButton.textContent = currentLang === "ar" ? "English" : "العربية";
    }
}

function updatePageContent() {
    // Update elements with data-translate attribute
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll("[data-translate-placeholder]").forEach(element => {
        const key = element.getAttribute("data-translate-placeholder");
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
    
    // Update specific elements
    const searchInput = document.getElementById('pharmacy-search');
    if (searchInput) {
        searchInput.placeholder = translations[currentLang].searchPlaceholder;
    }
    
    const locationBtn = document.querySelector('.location-btn');
    if (locationBtn) {
        locationBtn.textContent = translations[currentLang].locateMe;
    }
    
    // Update user marker popup if it exists
    if (userMarker) {
        userMarker.setPopupContent(translations[currentLang].yourLocation);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Wait a moment to ensure map container is available
    setTimeout(() => {
        initMap();
        
        // Add data-translate attributes if they don't exist
        const navLinks = document.querySelectorAll('.nav-links a');
        const translationKeys = ['home', 'pharmacies', 'medicines', 'contact'];
        
        navLinks.forEach((link, index) => {
            if (index < translationKeys.length) {
                link.setAttribute('data-translate', translationKeys[index]);
            }
        });
        
        const loginButton = document.querySelector('.login-button');
        if (loginButton) {
            loginButton.setAttribute('data-translate', 'login');
        }
        
        const heroH1 = document.querySelector('.hero h1');
        if (heroH1) {
            heroH1.setAttribute('data-translate', 'findPharmacy');
        }
        
        const heroP = document.querySelector('.hero p');
        if (heroP) {
            heroP.setAttribute('data-translate', 'getMedicine');
        }
        
        const heroButton = document.querySelector('.hero button');
        if (heroButton) {
            heroButton.setAttribute('data-translate', 'startNow');
        }
        
        // Update all translated content
        updatePageContent();
    }, 500);
});
document.getElementById("orderWithoutPrescriptionBtn").addEventListener("click", function() {
    var pharmacyLocation = "Pharmacy Name or Location"; // You can replace this with dynamic data
    localStorage.setItem('selectedPharmacyLocation', pharmacyLocation);
});
// Add necessary CSS for new elements
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced search results styles */
        .search-results-container {
            margin-top: 15px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            max-height: 300px;
            overflow-y: auto;
            display: none;
        }
        
        .pharmacy-card {
            padding: 15px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        
        .pharmacy-card:last-child {
            border-bottom: none;
        }
        
        .pharmacy-card:hover {
            background-color: #f5f5f5;
        }
        
        .pharmacy-card.active {
            background-color: #e6f4ea;
            border-right: 4px solid #008037;
        }
        
        .pharmacy-card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
        }
        
        .pharmacy-card h4 {
            margin: 0;
            font-size: 1.1rem;
            color: #333;
        }
        
        .pharmacy-card p {
            margin: 5px 0;
            color: #666;
        }
        
        .distance {
            display: flex;
            align-items: center;
            color: #008037;
            font-weight: 500;
        }
        
        .location-icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23008037'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E");
            background-size: contain;
            margin-right: 5px;
        }
        
        .no-results {
            padding: 20px;
            text-align: center;
            color: #666;
        }
        
        /* Map marker enhancements */
        .pharmacy-marker {
            transition: transform 0.2s;
        }
        
        .highlighted-marker {
            transform: scale(1.3);
            z-index: 1000 !important;
        }
        
        .marker-icon {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        /* User location marker */
        .user-location-marker {
            position: relative;
        }
        
        .pulse {
            width: 20px;
            height: 20px;
            background: rgba(0, 128, 55, 0.3);
            border-radius: 50%;
            position: absolute;
            animation: pulse 2s infinite;
        }
        
        .pulse-inner {
            width: 10px;
            height: 10px;
            background: rgb(0, 128, 55);
            border-radius: 50%;
            position: absolute;
            top: 5px;
            left: 5px;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(3);
                opacity: 0;
            }
        }
        
        /* Loading indicator */
        #loading-indicator {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255,255,255,0.8);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }
        
        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #008037;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Popup enhancements */
        .pharmacy-popup {
            min-width: 250px;
        }
        
        .pharmacy-popup h3 {
            margin-top: 0;
            margin-bottom: 5px;
            color: #008037;
        }
        
        .pharmacy-popup .rating {
            color: #ffc107;
            margin-bottom: 10px;
        }
        
        .pharmacy-popup .rating span {
            color: #666;
            margin-left: 5px;
        }
        
        .services-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin: 10px 0;
        }
        
        .service-tag {
            background: #e6f4ea;
            color: #008037;
            padding: 2px 8px;
            border-radius: 15px;
            font-size: 0.9rem;
        }`;
});