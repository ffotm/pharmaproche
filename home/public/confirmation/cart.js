let selectedPaymentType = null; // Store selected payment method
let chronicIllnessSelected = false;

// ✅ Load Cart Function
function loadCart() {
    const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const confirmBtn = document.getElementById("confirm-btn");

    let total = 0;
    cartItemsContainer.innerHTML = '';

    if (cartData.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-message">Your cart is empty.</p>';
        confirmBtn.disabled = true; // Disable confirm if cart is empty
        cartTotal.textContent = '0.00';
        return;
    }

    cartData.forEach(([medicine, quantity], index) => {
        const itemTotal = medicine.price * quantity;
        total += itemTotal;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div>
                    <h3>${medicine.name}</h3>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <div>
                    دج ${itemTotal.toFixed(2)}
                    <button class="delete-btn" onclick="removeFromCart(${index})">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.755 20.283 4 8h16l-1.755 12.283A2 2 0 0 1 16.265 22h-8.53a2 2 0 0 1-1.98-1.717zM21 4h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z"/></svg>
                    </button>
                </div>
            </div>
        `;
    });

    cartTotal.textContent = total.toFixed(2);
    confirmBtn.disabled = false; // Enable confirm button when items exist
}

function goToConfirmation() {
    // Get total price from cart
    const total = document.getElementById("cart-total").textContent;

    // Save cart data & total price before switching pages
    sessionStorage.setItem("cartData", JSON.stringify(getCartData()));
    sessionStorage.setItem("totalPrice", total);

    // Hide cart page, show card selection page
    document.getElementById('cart-page').classList.remove('active');
    document.getElementById('confirmation-page').classList.add('active');
    document.getElementById('card-selection').classList.add('active'); // Show card selection
}



// ✅ Function to retrieve cart data
function getCartData() {
    return JSON.parse(sessionStorage.getItem("cartData")) || [];
}

// ✅ Update Quantity Function
function updateQuantity(index, change) {
    let cartData = getCartData();
    cartData[index][1] += change; // Update quantity

    if (cartData[index][1] <= 0) {
        cartData.splice(index, 1); // Remove item if quantity reaches 0
    }

    sessionStorage.setItem("cartData", JSON.stringify(cartData));
    loadCart(); // Refresh the cart display
}

// ✅ Remove from Cart Function
function removeFromCart(index) {
    let cartData = getCartData();
    cartData.splice(index, 1); // Remove item completely
    sessionStorage.setItem("cartData", JSON.stringify(cartData));
    loadCart(); // Refresh cart
}

function toggleCouponSection() {
    const couponSection = document.getElementById('coupon-section');
    const checkbox = document.getElementById('chronic-illness');
    if (checkbox.checked) {
        couponSection.classList.add('active');
    } else {
        couponSection.classList.remove('active');
    }
}

// ✅ Handle Payment Selection
function selectCard(type) {
    document.getElementById('card-selection').classList.remove('active');

    if (type === 'military') {
        document.getElementById('military-validation').classList.add('active');
    } else if (type === 'shifa') {
        document.getElementById('shifa-validation').classList.add('active');
    } else {
        goToPaymentMethods(); // ID card goes directly to payment
    }
}

// ✅ Military Validation
function validateMilitary() {
    document.getElementById('military-validation').classList.remove('active');
    goToPaymentMethods();
}

// ✅ Shifa Validation
function validateShifa() {
    document.getElementById('shifa-validation').classList.remove('active');
    goToPaymentMethods();
}


function goToPaymentMethods() {
    // Retrieve total price
    const total = sessionStorage.getItem("totalPrice") || "0.00";

    // Update the UI
    document.getElementById("payment-total").textContent = `المبلغ الاجمالي: دج ${total}`;

    // Show the payment section
    document.getElementById('payment-methods').classList.add('active');
}

function selectPaymentMethod(method) {
    // Remove selected class from all options
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });

    // Add selected class to clicked option
    event.currentTarget.classList.add('selected');

    // Hide all forms
    document.querySelectorAll('.payment-form').forEach(form => {
        form.classList.remove('active');
    });

    // Show selected form
    document.getElementById(`${method}-form`).classList.add('active');
}

function processPayment() {

    const button = event.target;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Payment Successful';
        button.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';

        // Show success message
        setTimeout(() => {
            alert('Payment processed successfully! Thank you for your payment.');
            // Reset form if needed
            resetForms();
        }, 1000);
    }, 2000);
}

function generateCashSlip() {
    const button = event.target;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Slip Generated';
        button.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';

        // Show success message
        setTimeout(() => {
            alert('Cash payment slip has been generated. Please proceed to the counter.');
            resetForms();
        }, 1000);
    }, 1500);
}

function verifyInsurance() {

    const button = event.target;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Insurance Verified';
        button.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';

        // Show success message
        setTimeout(() => {
            alert('Insurance verified successfully! Your coverage has been applied.');
            resetForms();
        }, 1000);
    }, 2000);
}

function resetForms() {
    // Reset all input fields
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    // Reset all buttons
    document.querySelectorAll('button').forEach(btn => {
        if (btn.innerHTML.includes('Successful') ||
            btn.innerHTML.includes('Generated') ||
            btn.innerHTML.includes('Verified')) {
            btn.innerHTML = btn.getAttribute('data-original-text') || 'Submit';
            btn.style.background = 'linear-gradient(135deg, #164A41, #4D774E)';
            btn.disabled = false;
        }
    });

    // Hide all payment forms
    document.querySelectorAll('.payment-form').forEach(form => {
        form.classList.remove('active');
    });

    // Remove selected class from payment options
    document.querySelectorAll('.payment-option').forEach(option => {
        option.classList.remove('selected');
    });
}

// Add event listeners for input validation
document.addEventListener('DOMContentLoaded', function() {
    // Credit card number formatting
    const cardNumberInput = document.querySelector('input[placeholder="1234 5678 9012 3456"]');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
            let newValue = '';
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    newValue += ' ';
                }
                newValue += value[i];
            }
            e.target.value = newValue.substring(0, 19);
        });
    }

    // Expiry date formatting
    const expiryInput = document.querySelector('input[placeholder="MM/YY"]');
    if (expiryInput) {
        expiryInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }

    // CVV validation
    const cvvInput = document.querySelector('input[placeholder="123"]');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
        });
    }
});

// ✅ Ensure cart loads when the page is ready
document.addEventListener("DOMContentLoaded", loadCart);