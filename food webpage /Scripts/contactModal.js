const modalHTML = `
    <div id="contact-modal" class="modal">
        <div class="contact-modal-content">
            <div class="contact-modal-header">
                <h2>Contact Us</h2>
                <span class="close-modal-button" id="close-contact-modal">&times;</span>
            </div>
            <form>
                <!-- Name Input -->
                <div class="form-group">
                    <input type="text" id="name" name="name" class="form-input" placeholder=" ">
                    <label for="name" class="floating-label">Your Name</label>
                </div>

                <!-- Email Input -->
                <div class="form-group">
                    <input type="email" id="email" name="email" class="form-input" placeholder=" ">
                    <label for="email" class="floating-label">Your Email</label>
                </div>

                <!-- Phone Number Input -->
                <div class="form-group">
                    <input type="tel" id="phone" name="phone" class="form-input" placeholder=" ">
                    <label for="phone" class="floating-label">Your Phone Number <span id="sub-text"> (optional)</span></label>
                </div>

                <!-- Preferred Contact Buttons -->
                <div class="form-group contact-method">
                    <label id="prefer-label">Preferred Contact Method</label>
                    <div class="contact-radio">
                        <input type="radio" id="contact-email" name="preferred-contact" value="email" checked>
                        <label for="contact-email">Email</label>
                    </div>
                    <div class="contact-radio">
                        <input type="radio" id="contact-phone" name="preferred-contact" value="phone">
                        <label for="contact-phone">Phone</label>
                    </div>
                </div>

                <!-- Message Text Field -->
                <div class="form-group">
                    <textarea id="message" name="message" class="form-input" placeholder=" "></textarea>
                    <label for="message" class="floating-label">Your Message</label>
                </div>

                <!-- Submit Button -->
                <button type="submit" class="submit-button">Submit</button>
            </form>
        </div>
    </div>
    `;

document.body.insertAdjacentHTML('beforeend', modalHTML);

const modal = document.getElementById('contact-modal');
const overlay = document.getElementById('contact-modal-overlay');
const openBtn = document.getElementById('open-contact-modal-button');
const closeBtn = document.getElementById('close-contact-modal');

// Handle opening/closing
openBtn.addEventListener('click', function () {
    modal.style.display = 'block';
    overlay.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
    }
 }

// For form animations:
document.querySelectorAll('.form-input').forEach(input => {
    const label = input.nextElementSibling;
    const toggleLabel = () => {
        if (input.value.trim()) {
            label.classList.add('focused');
        } else {
            label.classList.remove('focused');
        }
    };
    toggleLabel();
    input.addEventListener('input', toggleLabel);
    input.addEventListener('blur', toggleLabel);
});