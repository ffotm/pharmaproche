document.getElementById('file-input').addEventListener('change', function(event) {
    const img = document.getElementById("image-preview");
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
            img.style.display = 'block';
            img.onload = function() {
                const canvas = document.getElementById("highlight-canvas");
                canvas.width = img.width;
                canvas.height = img.height;
            };
        };
        reader.readAsDataURL(file);
    }
});

const medicines = [{
        id: 1,
        name: "Paracetamol",
        arabicName: "باراسيتاموم",
        price: 150,
        category: "مسكن الالم",
        inStock: true,
        prescription: false
    },
    {
        id: 2,
        name: "Amoxicillin",
        arabicName: "أموكسيسيلين",
        price: 200,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 3,
        name: "Vitamin D3",
        arabicName: "فيتامين د٣",
        price: 750,
        category: "فيتامينات",
        inStock: true,
        prescription: false
    },
    {
        id: 4,
        name: "Omeprazole",
        arabicName: "أوميبرازول",
        price: 550,
        category: "تسهيل الهضم",
        inStock: false,
        prescription: true
    },
    {
        id: 5,
        name: "Cetirizine",
        arabicName: "سيتريزين",
        price: 300,
        category: "الحساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 6,
        name: "Ibuprofen",
        arabicName: "ايبوبروفي",
        price: 200,
        category: "مسكن الالم",
        inStock: true,
        prescription: false
    }, {
        id: 7,
        name: "Metformin",
        arabicName: "ميتفورمين",
        price: 300,
        category: "علاج السكري",
        inStock: true,
        prescription: true
    },
    {
        id: 9,
        name: "Loratadine",
        arabicName: "لوراتادين",
        price: 120,
        category: "مضاد حساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 10,
        name: "Salbutamol",
        arabicName: "سالبوتامول",
        price: 200,
        category: "علاج الربو",
        inStock: true,
        prescription: false
    }, {
        id: 11,
        name: "Losartan",
        arabicName: "لوسارتان",
        price: 300,
        category: "علاج ضغط الدم",
        inStock: true,
        prescription: true
    },
    {
        id: 12,
        name: "Aspirin",
        arabicName: "أسبرين",
        price: 100,
        category: "مميع للدم",
        inStock: true,
        prescription: false
    },
    {
        id: 13,
        name: "Gaviscon",
        arabicName: "جافيسكون",
        price: 210,
        category: "مضاد حموضة",
        inStock: true,
        prescription: false
    },
    {
        id: 14,
        name: "Augmentin",
        arabicName: "أوجمنتين",
        price: 450,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 15,
        name: "Efferalgan",
        arabicName: "إيفيرالغان",
        price: 130,
        category: "مسكن وخافض للحرارة",
        inStock: true,
        prescription: false
    },
    {
        id: 16,
        name: "Doliprane",
        arabicName: "دوليبران",
        price: 150,
        category: "مسكن وخافض للحرارة",
        inStock: true,
        prescription: false

    },




    {
        id: 17,
        name: "Nurofen",
        arabicName: "نيروفين",
        price: 220,
        category: "مسكن ومضاد التهاب",
        inStock: true,
        prescription: false
    },
    {
        id: 18,
        name: "Spiramycin",
        arabicName: "سبيراميسين",
        price: 450,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 19,
        name: "Fucidin",
        arabicName: "فيوسيدين",
        price: 280,
        category: "مضاد حيوي موضعي",
        inStock: true,
        prescription: true
    },
    {
        id: 20,
        name: "Ciprofloxacin",
        arabicName: "سيبروفلوكساسين",
        price: 400,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 21,
        name: "Euphylline",
        arabicName: "إيوفيللين",
        price: 320,
        category: "موسع للقصبات",
        inStock: true,
        prescription: true
    },
    {
        id: 22,
        name: "Rennie",
        arabicName: "ريني",
        price: 180,
        category: "مضاد حموضة",
        inStock: true,
        prescription: false
    }, {
        id: 23,
        name: "Smecta",
        arabicName: "سميكتا",
        price: 160,
        category: "مضاد إسهال",
        inStock: true,
        prescription: false
    },
    {
        id: 24,
        name: "Maalox",
        arabicName: "مالوكس",
        price: 200,
        category: "مضاد حموضة",
        inStock: true,
        prescription: false
    },
    {
        id: 25,
        name: "Flagyl",
        arabicName: "فلاجيل",
        price: 250,
        category: "مضاد طفيليات وبكتيريا",
        inStock: true,
        prescription: true
    },
    {
        id: 26,
        name: "Aerius",
        arabicName: "أيريوس",
        price: 270,
        category: "مضاد حساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 27,
        name: "Zyrtec",
        arabicName: "زيرتيك",
        price: 260,
        category: "مضاد حساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 28,
        name: "Telfast",
        arabicName: "تلفاست",
        price: 280,
        category: "مضاد حساسية",
        inStock: true,
        prescription: false
    },
    {
        id: 29,
        name: "Tramal",
        arabicName: "ترامال",
        price: 500,
        category: "مسكن قوي",
        inStock: true,
        prescription: true
    },
    {
        id: 30,
        name: "Morphine",
        arabicName: "مورفين",
        price: 1000,
        category: "مسكن أفيوني",
        inStock: true,
        prescription: true
    },
    {
        id: 31,
        name: "Dafalgan",
        arabicName: "دافالغن",
        price: 180,
        category: "مسكن وخافض للحرارة",
        inStock: true,
        prescription: false
    },
    {
        id: 32,
        name: "Solupred",
        arabicName: "سولوبريد",
        price: 340,
        category: "كورتيكوستيرويد",
        inStock: true,
        prescription: true
    }, {
        id: 33,
        name: "Amoxil",
        arabicName: "أموكسيل",
        price: 200,
        category: "مضاد حيوي",
        inStock: true,
        prescription: true
    },
    {
        id: 34,
        name: "Xanax",
        arabicName: "زانكس",
        price: 600,
        category: "مهدئ للقلق",
        inStock: true,
        prescription: true
    },
    {
        id: 35,
        name: "Lexomil",
        arabicName: "ليكسوميل",
        price: 550,
        category: "مهدئ للقلق",
        inStock: true,
        prescription: true
    }, {
        id: 36,
        name: "Spasfon",
        arabicName: "سباسفون",
        price: 180,
        category: "مضاد تقلصات",
        inStock: true,
        prescription: false
    },
    {
        id: 37,
        name: "Celestene",
        arabicName: "سيليستين",
        price: 270,
        category: "كورتيكوستيرويد",
        inStock: true,
        prescription: true
    },

];

let cart = new Map();

function updateCartSummary() {
    const itemCount = document.getElementById('itemCount');
    const totalPrice = document.getElementById('totalPrice');
    const confirmBtn = document.getElementById('confirmBtn');
    let bottomBar = document.getElementById("bottombar");
    const totalItems = Array.from(cart.values()).reduce((sum, qty) => sum + qty, 0);
    bottomBar.style.display = totalItems > 0 ? "flex" : "none";

    let total = 0,
        count = 0;

    cart.forEach((quantity, medicine) => {
        count += quantity;
        total += medicine.price * quantity;
    });

    itemCount.textContent = count;
    totalPrice.textContent = `${total} DA`;
    confirmBtn.disabled = count === 0;
}

function goToCart() {
    sessionStorage.setItem("cartData", JSON.stringify(Array.from(cart.entries())));
    window.location.href = "confirmation/cart.html"; // Redirect to cart page
}

function toggleMedicineInCart(medicine, card) {
    if (!medicine.inStock) {
        alert("لا يوجد");
        return;
    }

    if (!cart.has(medicine)) {
        cart.set(medicine, 1);
        card.classList.add('selected');
    }

    updateCartSummary();
}


function updateQuantity(medicine, change, card) {
    if (cart.has(medicine)) {
        let newQuantity = cart.get(medicine) + change;

        if (newQuantity <= 0) {
            cart.delete(medicine);
            card.classList.remove('selected');
        } else {
            cart.set(medicine, newQuantity);
        }
    } else if (change > 0) {
        cart.set(medicine, 1);
        card.classList.add('selected');
    }

    // Update the quantity inside the card
    const quantitySpan = card.querySelector('.quantity');
    quantitySpan.textContent = cart.get(medicine) || 0;

    // Show or hide the "-" button based on quantity
    const minusButton = card.querySelector('.minus');
    minusButton.style.display = cart.get(medicine) > 0 ? 'inline-block' : 'none';

    updateCartSummary();
}

function scanImage() {
    let input = document.getElementById('file-input').files[0];
    if (!input) {
        alert("Please upload an image.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function() {
        Tesseract.recognize(reader.result, 'ara+eng', {
            logger: m => console.log(m)
        }).then(({ data }) => {
            let detectedMeds = data.words
                .map(word => word.text.trim())
                .filter(word => medicines.some(med => med.name.toLowerCase() === word.toLowerCase() || med.arabicName === word));

            displayScannedMeds(detectedMeds);
        }).catch(err => console.error("OCR Error:", err));
    };

    reader.readAsDataURL(input);
}

function displayScannedMeds(extractedMeds) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) {
        console.error("error");
        return;
    }

    productsGrid.innerHTML = '';

    if (extractedMeds.length === 0) {
        productsGrid.innerHTML = `<p class="text-muted">لم يتم العثور على أي أدوية.</p>`;
        return;
    }

    extractedMeds.forEach(medName => {
        const medicine = medicines.find(m => m.name.toLowerCase() === medName.toLowerCase() || m.arabicName === medName);

        if (medicine) {
            productsGrid.innerHTML += `
 <div class="product-card ${cart.has(medicine) ? 'selected' : ''}" data-id="${medicine.id}">
                    <div class="cart-quantity">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity">${cart.get(medicine) || 1}</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <div class="product-header">
                        <div class="product-title">
                            <div class="product-name">${medicine.name}</div>
                            <div class="product-name-ar">${medicine.arabicName}</div>
                        </div>
                    </div>
                    <div>
                        <span class="badge ${medicine.prescription ? 'badge-prescription' : 'badge-otc'}">
                            ${medicine.prescription ? 'وصفة طبية مطلوبة' : 'دون وصفة طبية'}
                        </span>
                    </div>
                    <div class="product-category p-2">الصنف: ${medicine.category}</div>
                    <div class="product-footer">
                        <div class="product-price">${medicine.price}</div>
                        <span class="badge ${medicine.inStock ? 'badge-stock' : 'badge-out'}">
                            ${medicine.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>
                


            `;
        } else {
            productsGrid.innerHTML += `
                <div class="product-card m-2 unavailable">
                    <div class="product-header">
                        <div class="product-title">
                            <div class="product-name">${medName}</div>
                            <div class="product-name-ar">غير متوفر</div>
                        </div>
                    </div>
                    <div class="product-footer">
                        <span class="badge badge-out">Not Available</span>
                    </div>
                </div>
            `;
        }
    })
    document.querySelectorAll('.product-card').forEach(card => {
        const medicine = medicines.find(m => m.id == card.dataset.id);

        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('quantity-btn')) {
                toggleMedicineInCart(medicine, card);
            }
        });

        card.querySelector('.minus').addEventListener('click', (e) => {
            e.stopPropagation();
            updateQuantity(medicine, -1, card);
        });

        card.querySelector('.plus').addEventListener('click', (e) => {
            e.stopPropagation();
            updateQuantity(medicine, +1, card);
        });
    });
}






/*const LANG = {
    AR: 'ar',
    EN: 'en'
};

const MESSAGES = {
    [LANG.AR]: {
        noWordsFound: 'لم يتم العثور على كلمات',
        uploadPrompt: 'الرجاء تحميل صورة'
    },
    [LANG.EN]: {
        noWordsFound: 'No words found',
        uploadPrompt: 'Please upload an image'
    }
};

// Medicine Data
const medicines = [
    { id: 1, name: "Paracetamol", arabicName: "باراسيتامول", price: "150da", category: "Pain Relief", inStock: true, prescription: false },
    { id: 2, name: "Amoxicillin", arabicName: "أموكسيسيلين", price: "2000da", category: "Antibiotics", inStock: true, prescription: true },
    { id: 3, name: "Vitamin D3", arabicName: "فيتامين د٣", price: "750da", category: "Vitamins", inStock: true, prescription: false },
    { id: 4, name: "Omeprazole", arabicName: "أوميبرازول", price: "550da", category: "Digestive Health", inStock: false, prescription: true },
    { id: 5, name: "Cetirizine", arabicName: "سيتريزين", price: "300da", category: "Allergy", inStock: true, prescription: false },
    { id: 6, name: "Ibuprofen", arabicName: "ايبوبروفين", price: "150da", category: "Pain Relief", inStock: true, prescription: false }
];

// Generate keywords from medicine names and Arabic names
const keywords = [
    ...medicines.map(med => med.name.toLowerCase()),
    ...medicines.map(med => med.arabicName)
];

// Image Processing Class
class ImageProcessor {
    constructor(keywords) {
        this.keywords = keywords;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const fileInput = document.getElementById('file-input');
        if (fileInput) {
            fileInput.addEventListener('change', this.handleFileUpload.bind(this));
        }
    }

    async handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const imageUrl = await this.loadImage(file);
            await this.setupImagePreview(imageUrl);
        } catch (error) {
            console.error('Error handling file upload:', error);
        }
    }

    loadImage(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    async setupImagePreview(imageUrl) {
        const img = document.getElementById('image-preview');
        if (!img) return;

        img.src = imageUrl;
        img.style.display = 'block';

        await new Promise(resolve => {
            img.onload = () => {
                this.setupCanvas(img);
                resolve();
            };
        });
    }

    setupCanvas(img) {
        const canvas = document.getElementById('highlight-canvas');
        if (!canvas) return;

        canvas.width = img.width;
        canvas.height = img.height;
        this.matchCanvasToImage(img, canvas);
    }

    matchCanvasToImage(img, canvas) {
        canvas.style.position = 'absolute';
        canvas.style.top = `${img.offsetTop}px`;
        canvas.style.left = `${img.offsetLeft}px`;
        canvas.style.width = `${img.width}px`;
        canvas.style.height = `${img.height}px`;
    }

    async scanImage() {
        const fileInput = document.getElementById('file-input');
        const file = fileInput ? .files[0];

        if (!file) {
            alert(MESSAGES[document.documentElement.lang].uploadPrompt);
            return;
        }

        try {
            const imageUrl = await this.loadImage(file);
            const { data } = await Tesseract.recognize(imageUrl, 'ara+eng', {
                logger: m => console.log(m)
            });

            const detectedWords = this.processWords(data.words);
            this.displayDetectedWords(detectedWords);
            this.highlightWords(data.words);

            return detectedWords;
        } catch (error) {
            console.error('OCR Error:', error);
            return [];
        }
    }

    processWords(words) {
        return words
            .map(word => word.text.trim())
            .filter(word => this.keywords.includes(word.toLowerCase()) ||
                this.keywords.includes(word));
    }

    displayDetectedWords(detectedWords) {
        const outputList = document.getElementById('highlighted-words-list');
        if (!outputList) return;

        outputList.innerHTML = detectedWords.length === 0 ?
            `<li>${MESSAGES[document.documentElement.lang].noWordsFound}</li>` :
            detectedWords.map(word => `<li>${word}</li>`).join('');
    }

    highlightWords(words) {
        const img = document.getElementById('image-preview');
        const canvas = document.getElementById('highlight-canvas');
        const ctx = canvas ? .getContext('2d');

        if (!ctx || !img) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const scaleX = img.naturalWidth / words[0].page.width;
        const scaleY = img.naturalHeight / words[0].page.height;

        words.forEach(word => {
            if (this.keywords.includes(word.text.toLowerCase()) ||
                this.keywords.includes(word.text)) {
                this.drawHighlight(ctx, word, scaleX, scaleY);
            }
        });
    }

    drawHighlight(ctx, word, scaleX, scaleY) {
        const { x0, y0, x1, y1 } = word.bbox;
        const width = (x1 - x0) * scaleX;
        const height = (y1 - y0) * scaleY;
        const x = x0 * scaleX;
        const y = y0 * scaleY;

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
        ctx.fillRect(x, y, width, height);
    }
}

// Medicine Display Class
class MedicineDisplay {
    constructor(medicines) {
        this.medicines = medicines;
    }

    displayScannedMeds(extractedMeds) {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;

        productsGrid.innerHTML = extractedMeds
            .map(medName => this.createMedicineCard(medName))
            .join('');
    }

    createMedicineCard(medName) {
        const medicine = this.medicines.find(m =>
            m.name.toLowerCase() === medName.toLowerCase() ||
            m.arabicName === medName
        );

        return medicine ?
            this.createAvailableMedicineCard(medicine) :
            this.createUnavailableMedicineCard(medName);
    }

    createAvailableMedicineCard(medicine) {
        return `
            <div class="product-card m-2 ${medicine.inStock ? 'available' : 'unavailable'}">
                <div class="product-header">
                    <div class="product-title">
                        <div class="product-name">${medicine.name}</div>
                        <div class="product-name-ar">${medicine.arabicName}</div>
                    </div>
                </div>
                <div>
                    <span class="badge ${medicine.prescription ? 'badge-prescription' : 'badge-otc'}">
                        ${medicine.prescription ? 'Prescription Required' : 'Over the Counter'}
                    </span>
                </div>
                <div class="product-category p-2">Category: ${medicine.category}</div>
                <div class="product-footer">
                    <div class="product-price">${medicine.price}</div>
                    <span class="badge ${medicine.inStock ? 'badge-stock' : 'badge-out'}">
                        ${medicine.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>
            </div>
        `;
    }

    createUnavailableMedicineCard(medName) {
        return `
            <div class="product-card m-2 unavailable">
                <div class="product-header">
                    <div class="product-title">
                        <div class="product-name">${medName}</div>
                        <div class="product-name-ar">غير متوفر</div>
                    </div>
                </div>
                <div class="product-footer">
                    <span class="badge badge-out">Not Available</span>
                </div>
            </div>
        `;
    }
}

// Language Toggle Function
function toggleLanguage() {
    const button = document.querySelector('.eng');
    const isArabic = document.documentElement.lang === LANG.AR;

    document.documentElement.lang = isArabic ? LANG.EN : LANG.AR;
    button.textContent = isArabic ? 'العربية' : 'English';
    button.dir = isArabic ? 'rtl' : 'ltr';
}

// Initialize
const imageProcessor = new ImageProcessor(keywords);
const medicineDisplay = new MedicineDisplay(medicines);*/








/*const keywords = ["lorem", "ipsum"];

document.getElementById('file-input').addEventListener('change', function(event) {
    const img = document.getElementById("image-preview");
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('image-preview').src = e.target.result;
            document.getElementById('image-preview').style.display = 'block'; // image
            img.onload = function() {
                const canvas = document.getElementById("highlight-canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                matchCanvasToImage();
            };
        };
        reader.readAsDataURL(file);
    }
});

function scanImage() {
    let input = document.getElementById('file-input').files[0];
    if (!input) {
        alert("Please upload an image.");
        return;
    }


    let reader = new FileReader();
    reader.onload = function() {
        Tesseract.recognize(reader.result, 'ara+eng', {
            logger: m => console.log(m)
        }).then(({ data }) => {

            let detectedWords = data.words
                .map(word => word.text.trim())
                .filter(word => keywords.includes(word.toLowerCase()));
            displayDetectedWords(detectedWords);
            highlightWords(data.words);
        }).catch(err => console.error("OCR Error:", err));
    };

    reader.readAsDataURL(input);
}

function displayDetectedWords(detectedWords) {
    let outputList = document.getElementById("highlighted-words-list");
    outputList.innerHTML = "";

    if (detectedWords.length === 0) {
        outputList.innerHTML = "<li>لم يتم العثور على كلماة</li>";
    } else {
        detectedWords.forEach(word => {
            let li = document.createElement("li");
            li.textContent = word;
            outputList.appendChild(li);
        });
    }

}

function highlightWords(words) {
    const img = document.getElementById("image-preview");
    const canvas = document.getElementById("highlight-canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        console.error("Canvas context not found.");
        return;
    }





    canvas.style.position = "absolute";
    canvas.style.top = img.offsetTop + "px";
    canvas.style.left = img.offsetLeft + "px";
    canvas.style.width = img.width + "px";
    canvas.style.height = img.height + "px";

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    words.forEach(word => {
        if (keywords.includes(word.text.toLowerCase())) {
            const { x0, y0, x1, y1 } = word.bbox;

            let scaleX = img.naturalWidth / word.page.width;
            let scaleY = img.naturalHeight / word.page.height;

            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.strokeRect(x0 * scaleX, y0 * scaleY, (x1 - x0) * scaleX, (y1 - y0) * scaleY);
            ctx.fillStyle = "rgba(255, 0, 0, 0.3)"; // Semi-transparent red
            ctx.fillRect(x0 * scaleX, y0 * scaleY, (x1 - x0) * scaleX, (y1 - y0) * scaleY);
        }
    });
}




function toggleLanguage() {
    const button = document.querySelector('.eng');
    const isArabic = document.documentElement.lang === 'ar';

    document.documentElement.lang = isArabic ? 'en' : 'ar';
    button.textContent = isArabic ? 'العربية' : 'English';
    button.dir = isArabic ? 'rtl' : 'ltr';
}


const medicines = [
    { id: 1, name: "Paracetamol", arabicName: "باراسيتامول", price: "150da", category: "Pain Relief", inStock: true, prescription: false },
    { id: 2, name: "Amoxicillin", arabicName: "أموكسيسيلين", price: "2000da", category: "Antibiotics", inStock: true, prescription: true },
    { id: 3, name: "Vitamin D3", arabicName: "فيتامين د٣", price: "750da", category: "Vitamins", inStock: true, prescription: false },
    { id: 4, name: "Omeprazole", arabicName: "أوميبرازول", price: "550da", category: "Digestive Health", inStock: false, prescription: true },
    { id: 5, name: "Cetirizine", arabicName: "سيتريزين", price: "300da", category: "Allergy", inStock: true, prescription: false },
    { id: 6, name: "Ibuprofen", arabicName: "ايبوبروفين", price: "150da", category: "Pain Relief", inStock: true, prescription: false }
];

function displayScannedMeds(extractedMeds) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    extractedMeds.forEach(medName => {
        const medicine = medicines.find(m => m.name.toLowerCase() === medName.toLowerCase() || m.arabicName === medName);

        if (medicine) {
            productsGrid.innerHTML += `
                <div class="product-card m-2 ${medicine.inStock ? 'available' : 'unavailable'}">
                    <div class="product-header">
                        <div class="product-title">
                            <div class="product-name">${medicine.name}</div>
                            <div class="product-name-ar">${medicine.arabicName}</div>
                        </div>
                    </div>
                    <div>
                        <span class="badge ${medicine.prescription ? 'badge-prescription' : 'badge-otc'}">
                            ${medicine.prescription ? 'Prescription Required' : 'Over the Counter'}
                        </span>
                    </div>
                    <div class="product-category p-2">Category: ${medicine.category}</div>
                    <div class="product-footer">
                        <div class="product-price">${medicine.price}</div>
                        <span class="badge ${medicine.inStock ? 'badge-stock' : 'badge-out'}">
                            ${medicine.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>
                </div>
            `;
        } else {
            productsGrid.innerHTML += `
                <div class="product-card m-2 unavailable">
                    <div class="product-header">
                        <div class="product-title">
                            <div class="product-name">${medName}</div>
                            <div class="product-name-ar">غير متوفر</div>
                        </div>
                    </div>
                    <div class="product-footer">
                        <span class="badge badge-out">Not Available</span>
                    </div>
                </div>
            `;
        }
    });
}

// Example: Scanned medicines list (simulated result from OCR)
const scannedMeds = ["Paracetamol", "Omeprazole", "Vitamin D3", "Aspirin"];
displayScannedMeds(scannedMeds);*/