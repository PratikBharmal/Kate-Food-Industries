(function ($) {
    "use strict";

    $(document).ready(function ($) {

        // testimonial sliders
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    loop: true
                }
            }
        });

        // homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                600: {
                    items: 1,
                    nav: true,
                    loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });

        // logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 4,
                    nav: false,
                    loop: true
                }
            }
        });

        // count down
        if ($('.time-countdown').length) {
            $('.time-countdown').each(function () {
                var $this = $(this), finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function (event) {
                    var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'));
                });
            });
        }

        // projects filters isotop
        $(".product-filters li").on('click', function () {

            $(".product-filters li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');

            $(".product-lists").isotope({
                filter: selector,
            });

        });

        // isotop inner
        $(".product-lists").isotope();

        // magnific popup
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // light box
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });

        // homepage slides animations
        $(".homepage-slider").on("translate.owl.carousel", function () {
            $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css({ 'opacity': '0' });
            $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.1s' });
            $(".hero-btns").removeClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.5s' });
        });

        $(".homepage-slider").on("translated.owl.carousel", function () {
            $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css({ 'opacity': '0' });
            $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.1s' });
            $(".hero-btns").addClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.5s' });
        });



        // stikcy js
        $("#sticker").sticky({
            topSpacing: 0
        });

        //mean menu
        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });

        // search form
        $(".search-bar-icon").on("click", function () {
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function () {
            $(".search-area").removeClass("search-active");
        });

    });


    jQuery(window).on("load", function () {
        jQuery(".loader").fadeOut(1000);
    });


    // Browse more product button
    // $(document).ready(function () {
    //     // Hide all products initially
    //     $(".single-product-item").hide();

    //     // Show only the first 4 products
    //     $(".single-product-item").slice(0, 8).show();

    //     // Set up the click event for the "Browse More Products" button
    //     $(".btn-primary").on("click", function (e) {
    //         e.preventDefault();
    //         // Find hidden products and show the next 4
    //         $(".single-product-item:hidden").slice(0, 8).slideDown();

    //         // If there are no more hidden products, hide the button
    //         if ($(".single-product-item:hidden").length == 0) {
    //             $('#load-more').on('click', function (e) {
    //                 e.preventDefault();
    //                 if ($('.single-product-item:hidden').length > 0) {
    //                     showNextProducts();
    //                 } else {
    //                     $('#allProductsToast').toast('show');
    //                 }
    //             });

    //             showNextProducts();
    //         }
    //     });
    // });

    $(document).ready(function () {
        // Set the date we're counting down to from the data attribute
        $('.time-countdown').each(function () {
            var $this = $(this), finalDate = $this.data('countdown');
            $this.countdown(finalDate, function (event) {
                $this.html(event.strftime(''
                    + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> '
                    + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  '
                    + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  '
                    + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'));
            });
        });
    });

    // Function to smoothly scroll to the top with custom speed
    function smoothScrollToTop(duration) {
        const start = window.scrollY;
        const startTime = performance.now();

        function scrollStep(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is between 0 and 1
            const easing = 1 - Math.pow(1 - progress, 3); // Ease out cubic function
            window.scrollTo(0, start * (1 - easing));

            if (elapsedTime < duration) {
                requestAnimationFrame(scrollStep);
            } else {
                window.scrollTo(0, 0); // Ensure we end exactly at the top
            }
        }

        requestAnimationFrame(scrollStep);
    }

    // Get the button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Adjust scroll position as needed
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });

    // Scroll to top functionality with custom duration
    scrollToTopBtn.addEventListener('click', () => {
        const duration = 2000; // Duration in milliseconds, adjust as needed
        smoothScrollToTop(duration);
    });


    //  Contact Form validations 

    function validateName() {
        const name = document.getElementById('name');
        const nameValue = name.value.trim();
        const error = document.getElementById('name-error');

        if (!nameValue || !/^[a-zA-Z\s]+$/.test(nameValue)) {
            error.textContent = "Please enter a valid name without numbers or special characters.";
            name.classList.add('input-error');
            return false;
        } else {
            error.textContent = "";
            name.classList.remove('input-error');
            return true;
        }
    }

    function validateEmail() {
        const email = document.getElementById('email');
        const emailValue = email.value.trim();
        const error = document.getElementById('email-error');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailValue || !emailPattern.test(emailValue)) {
            error.textContent = "Please enter a valid email address.";
            email.classList.add('input-error');
            return false;
        } else {
            error.textContent = "";
            email.classList.remove('input-error');
            return true;
        }
    }

    function validatePhone() {
        const phone = document.getElementById('phone');
        const phoneValue = phone.value.trim();
        const error = document.getElementById('phone-error');

        if (!phoneValue || !/^\d{10}$/.test(phoneValue)) {
            error.textContent = "Please enter a valid 10-digit phone number.";
            phone.classList.add('input-error');
            return false;
        } else {
            error.textContent = "";
            phone.classList.remove('input-error');
            return true;
        }
    }

    function validateSubject() {
        const subject = document.getElementById('subject');
        const subjectValue = subject.value.trim();
        const error = document.getElementById('subject-error');

        if (!subjectValue || subjectValue.length < 3) {
            error.textContent = "Subject must be at least 3 characters long.";
            subject.classList.add('input-error');
            return false;
        } else {
            error.textContent = "";
            subject.classList.remove('input-error');
            return true;
        }
    }

    function validateMessage() {
        const message = document.getElementById('message');
        const messageValue = message.value.trim();
        const error = document.getElementById('message-error');

        if (!messageValue || messageValue.length < 2) {
            error.textContent = "Message must be at least 2 characters long.";
            message.classList.add('input-error');
            return false;
        } else {
            error.textContent = "";
            message.classList.remove('input-error');
            return true;
        }
    }

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isPhoneValid || !isSubjectValid || !isMessageValid) {
            alert("Please fill in all the fields correctly.");
            return false;
        }

        return true;
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('name').addEventListener('input', validateName);
        document.getElementById('email').addEventListener('input', validateEmail);
        document.getElementById('phone').addEventListener('input', validatePhone);
        document.getElementById('subject').addEventListener('input', validateSubject);
        document.getElementById('message').addEventListener('input', validateMessage);

        document.getElementById('contact-form').addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.preventDefault(); // Prevent form submission
            }
        });
    });

    // add to cart functionality enable

    document.addEventListener('DOMContentLoaded', () => {
        const shippingCost = 40;

        // Event listeners for "Add to Cart" buttons
        document.querySelectorAll('.cart-btn').forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault();

                const productElement = button.closest('.product') || button.closest('.single-product-content');

                if (productElement) {
                    const productName = productElement.querySelector('h3')?.textContent || 'Unknown Product';
                    const productPrice = parseInt(productElement.querySelector('.product-price, .single-product-pricing')?.textContent.replace(/[\D]/g, '') || '0');
                    const productImage = productElement.querySelector('img')?.src || '';
                    const quantity = parseFloat(productElement.querySelector('.quantityInput').value) || 1;

                    addToCart(productName, productPrice, productImage, quantity);
                } else {
                    console.error('Product container not found.');
                }
            });
        });

        // New feature: Show product details on click
        document.querySelectorAll('.product h3').forEach(productName => {
            productName.addEventListener('click', () => {
                const productElement = productName.closest('.product');
                const productTitle = productElement.querySelector('h3').textContent;
                const productDescription = `This is a description for the product: ${productTitle}`; // Customize this based on your actual product details
                const productImage = productElement.querySelector('img').src;

                showProductDetails(productTitle, productDescription, productImage);
            });
        });


        // add to cart product popup
        const addToCart = (name, price, image, quantity) => {
            // Retrieve cart from localStorage or initialize an empty array
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
            // Check if the product already exists in the cart
            const isProductInCart = cart.some(product => product.name === name);
        
            // Select the success popup element
            const successPopup = document.getElementById('success-popup');
        
            if (isProductInCart) {
                // If product is already in the cart, show a different popup message
                successPopup.innerHTML = `
                    <div class="popup-content">
                        <i class="fas fa-info-circle"></i> 
                        <p>Already in Cart</p>
                    </div>`;
                successPopup.classList.add('show');
        
                // Hide the popup after 1 second
                setTimeout(() => {
                    successPopup.classList.remove('show');
                }, 1000);
            } else {
                // If product is not in the cart, add it to the cart
                cart.push({ name, price, image, quantity });
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
        
                // Show success popup for adding the product
                successPopup.innerHTML = `
                    <div class="popup-content">
                        <i class="fas fa-check-circle"></i> 
                        <p>Added to Cart </p>
                    </div>`;
                successPopup.classList.add('show');
        
                // Hide the popup after 1 second and redirect to the cart page
                setTimeout(() => {
                    successPopup.classList.remove('show');
                    // window.location.href = 'shopping-cart.html';
                }, 1000);
            }
        };
        

        const updateCartCount = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const count = cart.length;
        
            // Update the desktop cart icon count (non-mobile)
            const desktopCartIcon = document.querySelector('.mobile-hide .fa-shopping-cart');
            if (desktopCartIcon) {
                if (count === 0) {
                    desktopCartIcon.setAttribute('data-count', ''); // Hide the count for desktop if cart is empty
                } else {
                    desktopCartIcon.setAttribute('data-count', count); // Update count for desktop if cart has items
                }
            }
        
            // Handle the mobile cart icon count
            const mobileCartIcon = document.querySelector('.mobile-show .fa-shopping-cart');
            if (mobileCartIcon) {
                if (count === 0) {
                    mobileCartIcon.setAttribute('data-count', ''); // Hide the count for mobile if cart is empty
                } else {
                    mobileCartIcon.setAttribute('data-count', count); // Update count for mobile if cart has items
                }
            }
        };
        

        const loadCartItems = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartTableBody = document.querySelector('.cart-table tbody');

            cartTableBody.innerHTML = '';
            cart.forEach((item, index) => {
                const row = document.createElement('tr');
                row.classList.add('table-body-row');
                row.innerHTML = `
                    <td class="product-remove"><a href="#" data-index="${index}" class="remove-item"><i class="far fa-window-close"></i></a></td>
                    <td class="product-image"><img src="${item.image}" alt=""></td>
                    <td class="product-name">${item.name}</td>
                    <td class="product-price">Rs. ${item.price}</td>
                    <td class="product-quantity">
                        <div class="quantity-selector">
                            <button class="qty-btn decreaseQty" data-index="${index}">-</button>
                            <input type="number" value="${item.quantity}" min="1" step="1" class="quantityInput" data-index="${index}">
                            <button class="qty-btn increaseQty" data-index="${index}">+</button>
                        </div>
                    </td>
                    <td class="product-total">Rs. ${(item.price * (item.quantity))}</td>
                `;
                cartTableBody.appendChild(row);
            });

            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', removeItem);
            });

            document.querySelectorAll('.quantityInput').forEach(input => {
                input.addEventListener('change', updateQuantity);
            });

            document.querySelectorAll('.decreaseQty').forEach(button => {
                button.addEventListener('click', () => adjustQuantity(button, -1));
            });

            document.querySelectorAll('.increaseQty').forEach(button => {
                button.addEventListener('click', () => adjustQuantity(button, 1));
            });

            updateTotal();
        };

        const removeItem = event => {
            event.preventDefault();
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const index = event.currentTarget.getAttribute('data-index');

            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartItems();
            updateCartCount();
        };

        const updateQuantity = event => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const index = event.currentTarget.getAttribute('data-index');
            const quantity = parseFloat(event.currentTarget.value);

            if (quantity > 0) {
                cart[index].quantity = quantity;
            } else {
                cart.splice(index, 1);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartItems();
            updateCartCount();
        };

        const adjustQuantity = (button, step) => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const index = button.getAttribute('data-index');
            const currentInput = document.querySelector(`.quantityInput[data-index="${index}"]`);
            let quantity = parseFloat(currentInput.value);

            quantity = Math.max(1, (quantity + step)); // Ensure quantity doesn't go below 0.25
            cart[index].quantity = quantity;

            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartItems();
            updateCartCount();
        };

        const updateTotal = () => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity)), 0);
            const shipping = subtotal > 0 && subtotal < 500 ? shippingCost : 0;
            const total = subtotal + shipping;

            document.getElementById('subtotal').textContent = `Rs. ${subtotal}`;
            document.getElementById('shipping').textContent = `Rs. ${shipping}`;
            document.getElementById('total').textContent = `Rs. ${total}`;
        };

        const showPopup = message => {
            const popup = document.createElement('div');
            popup.className = 'toast-popup';
            popup.textContent = message;

            document.body.appendChild(popup);
            setTimeout(() => document.body.removeChild(popup), 3000);
        };

        const showProductDetails = (title, description, image) => {
            // Display product details in a modal or a section
            const modalContent = `
                <div class="product-modal">
                    <h3>${title}</h3>
                    <img src="${image}" alt="${title}">
                    <p>${description}</p>
                    <button class="close-modal">Close</button>
                </div>
            `;
            const modal = document.createElement('div');
            modal.classList.add('modal-overlay');
            modal.innerHTML = modalContent;
            document.body.appendChild(modal);

            document.querySelector('.close-modal').addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        };

        if (window.location.pathname.includes('cart.html')) {
            loadCartItems();
        }

        document.getElementById('reset-cart')?.addEventListener('click', () => {
            localStorage.removeItem('cart');
            loadCartItems();
            updateCartCount();
            updateTotal();
        });

        updateCartCount();

        // Checkout page logic
        if (window.location.pathname.includes('checkout.html')) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const orderDetailsBody = document.querySelector('.order-details-body');
            let subtotal = 0;

            cart.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>Rs. ${(item.price * (item.quantity))}</td>
                `;
                orderDetailsBody.appendChild(row);
                subtotal += (item.price * (item.quantity));
            });

            const shipping = subtotal > 0 && subtotal < 500 ? shippingCost : 0;
            const total = subtotal + shipping;

            document.getElementById('subtotal').textContent = `Rs. ${subtotal}`;
            document.getElementById('shipping').textContent = `Rs. ${shipping}`;
            document.getElementById('total').textContent = `Rs. ${total}`;

            localStorage.removeItem('cart');
        }

        // Single product details
        const productName = new URLSearchParams(window.location.search).get('product');
        if (productName) {
            showProductDetails(productName, "Detailed description of the product.", "path/to/image.jpg"); // Customize based on actual product details
        }
    });
    // Quantity functionality
    document.querySelectorAll('.decreaseQty').forEach(function (button) {
        button.addEventListener('click', function () {
            var input = this.nextElementSibling; // The input field
            var currentValue = parseFloat(input.value);

            if (currentValue > parseFloat(input.min)) {
                input.value = (currentValue - parseFloat(input.step)); // Decrease value
            }
        });
    });

    document.querySelectorAll('.increaseQty').forEach(function (button) {
        button.addEventListener('click', function () {
            var input = this.previousElementSibling; // The input field
            var currentValue = parseFloat(input.value);

            input.value = (currentValue + parseFloat(input.step)); // Increase value
        });
    });


  //gallery animation js  

    document.addEventListener("DOMContentLoaded", function () {
        const newsItems = document.querySelectorAll(".latest-news-bg");
        const newsSections = document.querySelectorAll(".single-latest-news");
      
        // Intersection Observer for Elegant Fade-In Effect
        let observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("active");
              }
            });
          },
          { threshold: 0.2 }
        );
      
        newsItems.forEach((item) => observer.observe(item));
      
        // Scroll Event for Subtle Zoom-Out Effect when Centered
        window.addEventListener("scroll", function () {
          const windowHeight = window.innerHeight;
      
          newsSections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top > windowHeight * 0.3 && rect.top < windowHeight * 0.7) {
              section.classList.add("center");
            } else {
              section.classList.remove("center");
            }
          });
        });
      });

    //   Team animation JS is added
    // document.addEventListener("DOMContentLoaded", function () {
    //     const teamItems = document.querySelectorAll(".single-team-item");

    //     // 👀 Fade-in Effect on Scroll (Optimized with requestAnimationFrame)
    //     function revealOnScroll() {
    //         requestAnimationFrame(() => {
    //             teamItems.forEach(item => {
    //                 const position = item.getBoundingClientRect().top;
    //                 const windowHeight = window.innerHeight;
    //                 if (position < windowHeight - 50) {
    //                     item.classList.add("visible");
    //                 }
    //             });
    //         });
    //     }

    //     window.addEventListener("scroll", revealOnScroll);
    //     revealOnScroll(); // Trigger on load

    //     // 🔄 Shuffle Animation (Improved)
    //     function shuffleTeam() {
    //         const container = document.querySelector(".team-container");
    //         const items = Array.from(container.children);

    //         // Add fade-out effect
    //         items.forEach(item => item.classList.add("shuffle-hidden"));

    //         setTimeout(() => {
    //             // Shuffle the array
    //             const shuffledItems = [...items].sort(() => Math.random() - 0.5);

    //             // Re-append in shuffled order without removing innerHTML
    //             shuffledItems.forEach(item => container.appendChild(item));

    //             // Fade-in after shuffle
    //             setTimeout(() => {
    //                 shuffledItems.forEach(item => item.classList.remove("shuffle-hidden"));
    //             }, 200);
    //         }, 500);
    //     }

    //     // 🔄 Shuffle every 3 seconds
    //     setInterval(shuffleTeam, 3000);
    // });

// stock is not available popup for user start
 // Function to load the popup from popup.html
//  function loadPopup() {
//     fetch('popup.html')
//         .then(response => response.text())
//         .then(html => {
//             document.getElementById('popup-container').innerHTML = html;

//             // Display the popup
//             document.getElementById('popup-banner').style.display = 'block';

//             // Close button functionality
//             document.getElementById('close-btn').addEventListener('click', () => {
//                 document.getElementById('popup-banner').style.display = 'none';
//             });
//         })
//         .catch(error => console.error('Error loading popup:', error));
// }

// Show the popup on every page load
window.onload = loadPopup;

}(jQuery));