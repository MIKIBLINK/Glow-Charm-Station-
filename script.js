// Function to show a custom message box instead of alert()
// (Removed duplicate declaration to avoid redeclaration error)

// Translations object with complete Khmer translations
const translations = {
    'en': {
        'page-title': 'Glow & Charm Station',
        'site-title': 'Glow & Charm Station',
        'nav-services': 'Services',
        'nav-about': 'About Us',
        'nav-book': 'Book a Visit',
        'nav-services-mobile': 'Services',
        'nav-about-mobile': 'About Us',
        'nav-book-mobile': 'Book a Visit',
        'hero-heading': 'Discover Your Radiance',
        'hero-subheading': 'Your journey to beauty and wellness begins here. We\'re dedicated to helping you feel your best, inside and out.',
        'hero-cta': 'Book an Appointment',
        'services-heading': 'Our Services',
        'service-title-1': 'Set A',
        'service-desc-1': 'Customized treatments designed to rejuvenate, cleanse, and nourish your skin, leaving you with a healthy, vibrant glow.',
        'service-title-2': 'Set B',
        'service-desc-2': 'Indulge in a range of relaxing massages and body treatments that melt away stress and revitalize your spirit.',
        'service-title-3': 'Set VIP (Meso)',
        'service-desc-3': 'Experience a targeted facial treatment using mesotherapy to deliver vitamins and nutrients directly to your skin.',
        'service-title-4': 'Set VVIP (BB Meso)',
        'service-desc-4': 'A premium BB mesotherapy treatment that provides a semi-permanent foundation effect, evening out skin tone and texture for a flawless look.',
        'about-heading': 'About Us',
        'doctor-name-1': 'Mrs. Rachana',
        'doctor-title-1': 'Founder & Head Aesthetician',
        'doctor-bio-1': 'A certified aesthetician with over 15 years of experience in the beauty and wellness industry. Her passion for helping people feel confident and beautiful led her to found Glow & Charm Station.',
        'doctor-name-2': 'Mrs. Dalica',
        'doctor-title-2': 'Senior Beauty Specialist',
        'doctor-bio-2': 'With a focus on advanced treatments, Mrs. Dalica brings her extensive knowledge of innovative skincare to our team. She is committed to staying up-to-date with the latest techniques to provide exceptional results.',
        'about-text-1': 'At Glow & Charm Station, our passion is to empower you to look and feel your best. We believe that true beauty comes from a combination of professional care, premium products, and a serene, welcoming environment.',
        'about-text-2': 'Our team of certified specialists is dedicated to providing personalized treatments that cater to your unique needs. From the moment you step through our doors, you\'ll be treated with the utmost care and professionalism.',
        'about-text-3': 'We\'re more than just a clinic; we\'re your partner in wellness and beauty. Come and experience the difference.',
        'contact-heading': 'Book an Appointment',
        'label-name': 'Full Name',
        'label-phone': 'Phone Number',
        'label-service': 'Choose a Service',
        'option-default': '--Please choose a service--',
        'label-date': 'Date',
        'label-time': 'Time',
        'label-message': 'Special Requests (Optional)',
        'book-button': 'Book Appointment',
        'confirmation-heading': 'Booking Confirmed!',
        'confirmation-subheading': 'Thank you for booking with us. We look forward to seeing you.',
        'details-heading': 'Your Booking Details:',
        'details-name-label': 'Name:',
        'details-service-label': 'Service:',
        'details-date-label': 'Date:',
        'details-time-label': 'Time:',
        'book-again-button': 'Book Another Appointment',
        'footer-text': '&copy; 2026 Glow & Charm Station. All rights reserved.',
        'error-message-generic': 'An error occurred. Please try again later.',
        'error-message-fields': 'Please fill in all required fields.'
    },
    'km': {
        'page-title': 'Glow & Charm Station',
        'site-title': 'Glow & Charm Station',
        'nav-services': 'សេវាកម្ម',
        'nav-about': 'អំពីយើង',
        'nav-book': 'កក់ការណាត់ជួប',
        'nav-services-mobile': 'សេវាកម្ម',
        'nav-about-mobile': 'អំពីយើង',
        'nav-book-mobile': 'កក់ការណាត់ជួប',
        'hero-heading': 'ស្វែងរកភាពភ្លឺថ្លារបស់អ្នក',
        'hero-subheading': 'ដំណើរឆ្ពោះទៅរកភាពស្រស់ស្អាត និងសុខភាពរបស់អ្នកចាប់ផ្តើមនៅទីនេះ។ យើងប្តេជ្ញាជួយអ្នកឱ្យមានអារម្មណ៍ល្អបំផុតទាំងខាងក្នុង និងខាងក្រៅ។',
        'hero-cta': 'កក់ការណាត់ជួប',
        'services-heading': 'សេវាកម្មរបស់យើង',
        'service-title-1': 'Set A',
        'service-desc-1': 'ការព្យាបាលតាមតម្រូវការដែលរចនាឡើងដើម្បីធ្វើឱ្យស្បែករបស់អ្នកមានភាពស្រស់ថ្លា សម្អាត និងបំប៉ន ទុកឱ្យអ្នកមានភាពភ្លឺថ្លា និងមានសុខភាពល្អ។',
        'service-title-2': 'Set B',
        'service-desc-2': 'រីករាយនឹងការម៉ាស្សាបន្ធូរអារម្មណ៍ និងការព្យាបាលរាងកាយជាច្រើនប្រភេទដែលបំបាត់ភាពតានតឹង និងធ្វើឱ្យស្មារតីរបស់អ្នករស់ឡើងវិញ។',
        'service-title-3': 'Set VIP (Meso)',
        'service-desc-3': 'ទទួលយកបទពិសោធន៍ការព្យាបាលផ្ទៃមុខដោយប្រើមេសូដើម្បីផ្តល់វីតាមីន និងសារធាតុចិញ្ចឹមដោយផ្ទាល់ទៅស្បែករបស់អ្នក។',
        'service-title-4': 'Set VVIP (BB Meso)',
        'service-desc-4': 'ការព្យាបាលមេសូ BB កម្រិតខ្ពស់ដែលផ្តល់នូវប្រសិទ្ធិភាពគ្រឹះពាក់កណ្តាលអចិន្ត្រៃយ៍ ធ្វើឱ្យពណ៌ស្បែកនិងផ្ទៃស្បែកស្មើគ្នាដើម្បីឱ្យមើលទៅគ្មានកំហុស។',
        'about-heading': 'អំពីយើង',
        'doctor-name-1': 'អ្នកគ្រូពេទ្យ រចនា',
        'doctor-title-1': 'ស្ថាបនិក និងអ្នកជំនាញផ្នែកថែរក្សាសម្រស់',
        'doctor-bio-1': 'អ្នកជំនាញថែរក្សាសម្រស់ដែលមានបទពិសោធន៍ជាង ១៥ ឆ្នាំក្នុងវិស័យសម្រស់ និងសុខភាព។ ចំណង់ចំណូលចិត្តរបស់គាត់ក្នុងការជួយមនុស្សឱ្យមានទំនុកចិត្តនិងស្រស់ស្អាតបានជំរុញឱ្យគាត់បង្កើត Glow & Charm Station។',
        'doctor-name-2': 'អ្នកគ្រូពេទ្យ ដាលីកា',
        'doctor-title-2': 'អ្នកជំនាញសម្រស់ជាន់ខ្ពស់',
        'doctor-bio-2': 'ជាមួយនឹងការផ្តោតលើការព្យាបាលកម្រិតខ្ពស់ អ្នកគ្រូពេទ្យ ដាលីកា នាំមកនូវចំណេះដឹងទូលំទូលាយរបស់គាត់អំពីការថែរក្សាស្បែកប្រកបដោយភាពច្នៃប្រឌិតដល់ក្រុមរបស់យើង។ គាត់ប្តេជ្ញាចិត្តក្នុងការធ្វើបច្ចុប្បន្នភាពជាមួយបច្ចេកទេសចុងក្រោយបំផុតដើម្បីផ្តល់លទ្ធផលល្អបំផុត។',
        'about-text-1': 'នៅ Glow & Charm Station ចំណង់ចំណូលចិត្តរបស់យើងគឺដើម្បីផ្តល់អំណាចឱ្យអ្នកមើលទៅនិងមានអារម្មណ៍ល្អបំផុត។ យើងជឿថាភាពស្រស់ស្អាតពិតប្រាកដមកពីការរួមបញ្ចូលគ្នានៃការថែទាំប្រកបដោយវិជ្ជាជីវៈ ផលិតផលពិសេស និងបរិយាកាសស្ងប់ស្ងាត់ និងស្វាគមន៍។',
        'about-text-2': 'ក្រុមអ្នកជំនាញដែលមានការទទួលស្គាល់របស់យើងប្តេជ្ញាផ្តល់ការព្យាបាលផ្ទាល់ខ្លួនដែលបំពេញតម្រូវការពិសេសរបស់អ្នក។ ចាប់ពីពេលដែលអ្នកបោះជំហានចូលទ្វាររបស់យើង អ្នកនឹងត្រូវបានទទួលការព្យាបាលដោយការយកចិត្តទុកដាក់និងវិជ្ជាជីវៈខ្ពស់បំផុត។',
        'about-text-3': 'យើងមិនត្រឹមតែជាគ្លីនិកប៉ុណ្ណោះទេ យើងជាដៃគូរបស់អ្នកក្នុងសុខភាពនិងសម្រស់។ សូមមកទទួលបទពិសោធន៍ភាពខុសគ្នា។',
        'contact-heading': 'កក់ការណាត់ជួប',
        'label-name': 'ឈ្មោះពេញ',
        'label-phone': 'លេខទូរស័ព្ទ',
        'label-service': 'ជ្រើសរើសសេវាកម្ម',
        'option-default': '--សូមជ្រើសរើសសេវាកម្ម--',
        'label-date': 'កាលបរិច្ឆេទ',
        'label-time': 'ម៉ោង',
        'label-message': 'សំណូមពរពិសេស (ស្រេចតែចិត្ត)',
        'book-button': 'កក់ការណាត់ជួប',
        'confirmation-heading': 'ការកក់បានបញ្ជាក់!',
        'confirmation-subheading': 'សូមអរគុណសម្រាប់ការកក់ជាមួយយើង។ យើងទន្ទឹងរង់ចាំជួបអ្នក។',
        'details-heading': 'ព័ត៌មានលម្អិតនៃការកក់របស់អ្នក:',
        'details-name-label': 'ឈ្មោះ:',
        'details-service-label': 'សេវាកម្ម:',
        'details-date-label': 'កាលបរិច្ឆេទ:',
        'details-time-label': 'ម៉ោង:',
        'book-again-button': 'កក់ការណាត់ជួបម្តងទៀត',
        'footer-text': '© ២០២៦ Glow & Charm Station. រក្សាសិទ្ធិគ្រប់យ៉ាង។',
        'error-message-generic': 'មានកំហុសកើតឡើង។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ។',
        'error-message-fields': 'សូមបំពេញគ្រប់វាលដែលតម្រូវ។'
    }
};

// --- Bot Credentials (Filled in) ---
const BOT_TOKEN = '8253130135:AAFmkbY5VA84n-vECGZeiDIRH7YhdIjm3wI';
const CHAT_ID = '5711509401';

// Function to show a custom message box instead of alert()
const showMessageBox = (message, type) => {
    const msgBox = document.getElementById('message-box');
    msgBox.textContent = message;
    msgBox.classList.remove('hidden');

    if (type === 'success') {
        msgBox.style.backgroundColor = '#10B981'; // Green
    } else if (type === 'error') {
        msgBox.style.backgroundColor = '#EF4444'; // Red
    }

    msgBox.classList.add('show');
    setTimeout(() => {
        msgBox.classList.remove('show');
        setTimeout(() => {
            msgBox.classList.add('hidden');
        }, 500);
    }, 3000);
};

// Script for dark mode, language toggle, and form submission
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langKmBtn = document.getElementById('lang-km');
    const langEnBtn = document.getElementById('lang-en');
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const bookingForm = document.getElementById('booking-form');
    const contactSection = document.getElementById('contact');
    const confirmationSection = document.getElementById('booking-confirmation-page');

    // --- Dark Mode Toggle ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggleBtn.setAttribute('aria-pressed', 'true');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleBtn.setAttribute('aria-pressed', 'false');
    }

    themeToggleBtn.addEventListener('click', () => {
        const isPressed = themeToggleBtn.getAttribute('aria-pressed') === 'true';
        if (isPressed) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.setAttribute('aria-pressed', 'false');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.setAttribute('aria-pressed', 'true');
        }
    });

    // --- Language Toggle ---
    const updateContent = (lang) => {
        const elements = document.querySelectorAll('[id]');
        elements.forEach(element => {
            const key = element.id;
            if (translations[lang] && translations[lang][key]) {
                // Check if it's a specific type of element that needs different handling
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translations[lang][key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Special handling for the footer to preserve HTML entity
        document.getElementById('footer-text').innerHTML = translations[lang]['footer-text'];
    };

    langKmBtn.addEventListener('click', () => {
        updateContent('km');
        document.body.classList.add('khmer-font');
        document.body.classList.remove('en-font');
    });

    langEnBtn.addEventListener('click', () => {
        updateContent('en');
        document.body.classList.add('en-font');
        document.body.classList.remove('khmer-font');
    });

    // Set initial language to English
    updateContent('en');
    document.body.classList.add('en-font');

    // --- Mobile Menu Toggle ---
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- API and Form Submission Logic (Updated) ---
    const submitBooking = async (bookingData) => {
        const currentLang = document.body.classList.contains('khmer-font') ? 'km' : 'en';

        // Construct the message text for Telegram
        const text = `🎉 *New Booking Received!* 🎉
        
*Name:* ${bookingData.name}
*Phone:* ${bookingData.phone}
*Service:* ${bookingData.service}
*Date:* ${bookingData.date}
*Time:* ${bookingData.time}
*Special Requests:* ${bookingData.message || 'None'}`;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'Markdown'
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.description || 'Failed to submit booking.');
            }

            // Populate confirmation page with form data
            document.getElementById('details-name').textContent = bookingData.name;
            document.getElementById('details-service').textContent = bookingData.service;
            document.getElementById('details-date').textContent = bookingData.date;
            document.getElementById('details-time').textContent = bookingData.time;

            // Hide contact form and show confirmation
            contactSection.classList.add('hidden');
            confirmationSection.classList.remove('hidden');

            showMessageBox('Booking successful!', 'success');
        } catch (error) {
            console.error('Booking error:', error);
            showMessageBox(translations[currentLang]['error-message-generic'], 'error');
        }
    };

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const serviceSelect = document.getElementById('service');
        const service = serviceSelect.options[serviceSelect.selectedIndex].text;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const message = document.getElementById('message').value;

        if (!name || !phone || serviceSelect.value === "" || !date || !time) {
            const currentLang = document.body.classList.contains('khmer-font') ? 'km' : 'en';
            showMessageBox(translations[currentLang]['error-message-fields'], 'error');
            return;
        }

        const bookingData = {
            name,
            phone,
            service,
            date,
            time,
            message,
        };

        submitBooking(bookingData);
    });

    // Handle mobile menu links to close the menu after clicking
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
