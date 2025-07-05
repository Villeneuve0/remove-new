// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeImageGallery();
    initializeTreatmentOptions();
    initializeQuantityControls();
    initializeTabs();
    initializeLocationModal();
    initializeBuyButton();
    initializeDeliveryDates();
});

// Image Gallery functionality
function initializeImageGallery() {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const imageCounter = document.getElementById('image-counter');
    
    let currentImageIndex = 0;
    const images = [
        'imagens/produto-1.png',
        'imagens/produto-2.png',
        'imagens/produto-3.png',
        'imagens/produto-4.png'
    ];
    
    // Thumbnail click handlers
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            setActiveImage(index);
        });
    });
    
    // Navigation arrows
    prevBtn.addEventListener('click', () => {
        const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
        setActiveImage(newIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
        setActiveImage(newIndex);
    });
    
    function setActiveImage(index) {
        currentImageIndex = index;
        mainImage.src = images[index];
        imageCounter.textContent = `${index + 1}/${images.length}`;
        
        // Update thumbnail active state
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }
}

// Treatment options functionality
function initializeTreatmentOptions() {
    const treatmentOptions = document.querySelectorAll('.treatment-option');
    const originalPriceMain = document.getElementById('original-price');
    const discountBadgeMain = document.getElementById('discount-badge');
    const currentPriceMain = document.getElementById('current-price-main');
    const installmentValue = document.getElementById('installment-value');
    
    const treatmentData = {
        '30-dias': {
            originalPrice: 'R$ 299,00',
            currentPrice: 'R$ 197,00',
            discount: '34% OFF',
            installment: 'em 12x R$ 19,78'
        },
        '90-dias': {
            originalPrice: 'R$ 497,00',
            currentPrice: 'R$ 297,00',
            discount: '40% OFF',
            installment: 'em 12x R$ 29,82'
        },
        '150-dias': {
            originalPrice: 'R$ 697,00',
            currentPrice: 'R$ 397,00',
            discount: '43% OFF',
            installment: 'em 12x R$ 39,86'
        },
        '12-meses': {
            originalPrice: 'R$ 1.197,00',
            currentPrice: 'R$ 697,00',
            discount: '42% OFF',
            installment: 'em 12x R$ 58,08'
        }
    };
    
    treatmentOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            treatmentOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Update main price section
            const treatmentId = option.dataset.treatment;
            const data = treatmentData[treatmentId];
            
            if (data) {
                originalPriceMain.textContent = data.originalPrice;
                discountBadgeMain.textContent = data.discount;
                currentPriceMain.textContent = data.currentPrice;
                installmentValue.textContent = data.installment;
            }
        });
    });
}

// Quantity controls
function initializeQuantityControls() {
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const quantityDisplay = document.getElementById('quantity');
    
    let quantity = 1;
    
    decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });
    
    increaseBtn.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });
}

// Tabs functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Location modal functionality
function initializeLocationModal() {
    const locationBtn = document.getElementById('location-btn');
    const modal = document.getElementById('location-modal');
    const closeModal = document.getElementById('close-modal');
    const submitLocation = document.getElementById('submit-location');
    const locationInput = document.getElementById('location-input');
    const locationResult = document.getElementById('location-result');
    const currentLocationDisplay = document.getElementById('current-location-display');
    const currentLocationSpan = document.getElementById('current-location');
    
    let currentLocation = 'Detectando localização...';
    
    // Detect user location on page load
    detectUserLocation();
    
    // Open modal
    locationBtn.addEventListener('click', () => {
        modal.classList.add('active');
        locationInput.focus();
        currentLocationDisplay.textContent = `Localização atual: ${currentLocation}`;
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        clearModalForm();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            clearModalForm();
        }
    });
    
    // Submit location
    submitLocation.addEventListener('click', handleLocationSubmit);
    
    // Handle Enter key
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLocationSubmit();
        }
    });
    
    function handleLocationSubmit() {
        const location = locationInput.value.trim();
        if (location) {
            locationResult.textContent = `Enviando para: ${location}`;
            locationResult.classList.add('animate');
            
            setTimeout(() => {
                currentLocation = location;
                currentLocationSpan.textContent = location;
                modal.classList.remove('active');
                clearModalForm();
            }, 1500);
        } else {
            alert('Por favor, informe sua cidade.');
        }
    }
    
    function clearModalForm() {
        locationInput.value = '';
        locationResult.textContent = '';
        locationResult.classList.remove('animate');
        currentLocationDisplay.textContent = '';
    }
    
    async function detectUserLocation() {
        try {
            // Try geolocation first
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        try {
                            const { latitude, longitude } = position.coords;
                            const response = await fetch(
                                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
                            );
                            const data = await response.json();
                            
                            if (data.city) {
                                currentLocation = data.city;
                                currentLocationSpan.textContent = currentLocation;
                                return;
                            }
                        } catch (error) {
                            console.error('Error with reverse geocoding:', error);
                        }
                        
                        // Fallback to IP location
                        await getLocationByIP();
                    },
                    async (error) => {
                        console.error('Geolocation error:', error);
                        // Fallback to IP location
                        await getLocationByIP();
                    },
                    {
                        timeout: 10000,
                        enableHighAccuracy: false,
                        maximumAge: 300000
                    }
                );
            } else {
                // Fallback to IP location
                await getLocationByIP();
            }
        } catch (error) {
            console.error('Error detecting location:', error);
            currentLocation = 'São Paulo';
            currentLocationSpan.textContent = currentLocation;
        }
    }
    
    async function getLocationByIP() {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            if (data.city) {
                currentLocation = data.city;
                currentLocationSpan.textContent = currentLocation;
            } else {
                currentLocation = 'São Paulo';
                currentLocationSpan.textContent = currentLocation;
            }
        } catch (error) {
            console.error('Error getting location by IP:', error);
            currentLocation = 'São Paulo';
            currentLocationSpan.textContent = currentLocation;
        }
    }
}

// Buy button functionality
function initializeBuyButton() {
    const buyButton = document.getElementById('buy-now-btn');
    
    const treatmentUrls = {
        '30-dias': 'https://seguro.payt.com.br/a/P8zo0012i1k9qoyV',
        '90-dias': 'https://seguro.payt.com.br/a/2n1eDD0RhgBqxeKd',
        '150-dias': 'https://seguro.payt.com.br/a/r93vqNPksRMpxoYg',
        '12-meses': 'https://seguro.payt.com.br/a/4Lvbjqa1T7bw4vzV'
    };
    
    buyButton.addEventListener('click', () => {
        const activeOption = document.querySelector('.treatment-option.active');
        if (activeOption) {
            const treatmentId = activeOption.dataset.treatment;
            const url = treatmentUrls[treatmentId];
            if (url) {
                window.open(url, '_blank');
            }
        }
    });
}

// Initialize delivery dates
function initializeDeliveryDates() {
    const freeDeliveryElement = document.getElementById('free-delivery');
    const fastDeliveryElement = document.getElementById('fast-delivery');
    
    const deliveryDates = calculateDeliveryDates();
    
    freeDeliveryElement.textContent = `Chegará grátis entre ${deliveryDates.freeStart} e ${deliveryDates.freeEnd}`;
    fastDeliveryElement.textContent = `Chegará entre ${deliveryDates.fastStart} e ${deliveryDates.fastEnd}`;
}

function calculateDeliveryDates() {
    const today = new Date();
    
    // Fast delivery: 3-4 days from today
    const fastDeliveryStart = new Date(today);
    fastDeliveryStart.setDate(today.getDate() + 3);
    
    const fastDeliveryEnd = new Date(today);
    fastDeliveryEnd.setDate(today.getDate() + 4);
    
    // Free delivery: 7-8 days from today
    const freeDeliveryStart = new Date(today);
    freeDeliveryStart.setDate(today.getDate() + 7);
    
    const freeDeliveryEnd = new Date(today);
    freeDeliveryEnd.setDate(today.getDate() + 8);
    
    // Format dates as DD/MMM
    const formatDate = (date) => {
        const day = date.getDate();
        const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 
                       'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        const month = months[date.getMonth()];
        return `${day}/${month}`;
    };
    
    return {
        fastStart: formatDate(fastDeliveryStart),
        fastEnd: formatDate(fastDeliveryEnd),
        freeStart: formatDate(freeDeliveryStart),
        freeEnd: formatDate(freeDeliveryEnd)
    };
}