const aboutModalHTML = `
    <div id="about-modal" class="about-modal">
        <div class="about-modal-content">
            <div class="about-modal-header">
                <h2>Welcome to AZFoodReviews!</h2>
                <span class="close-modal-button" id="close-about-modal">&times;</span>
            </div>
            <h3>About Us</h3>
            <p>
                At AZFoodReviews, we are passionate about exploring the vibrant 
                culinary scene of Tucson, Arizona. Whether you're craving brunch, 
                a fine dining experience, or local hidden gems, we've got you covered!
            </p>
            <div class="about-table">
                <table>
                    <thead>
                        <tr>
                            <th class="table-section-head">Our Demographic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="td-left">New Arizonans</td>
                            <td>Curious about dining options in their area</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td class="td-left">Tourists</td>
                            <td>Who wish to build upon their travel experience</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td class="td-left">Locals</td>
                            <td>who desire to learn more about locations less commonly heard of</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td class="td-left">All ages and genders are welcome!</td>
                            <td>Price ranges are separated in our casual and fine dining pages!</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr><td>&nbsp;</td></tr>
                        <tr><td>&nbsp;</td></tr>
                    </tbody>

                    <thead>
                        <tr>
                            <th class="table-section-head">What We Do</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="td-left">Honest Reviews</td>
                            <td>We provide genuine, unbiased reviews to help you make dining decisions.</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td class="td-left">Diverse Dining Options</td>
                            <td>Explore casual cafes, fine dining, and everything in between.</td>
                        </tr>
                        <tr><td>&nbsp;</td></tr>
                        <tr>
                            <td class="td-left">Local Favorites</td>
                            <td>
                                Celebrate the culture of Tucson, Arizona by featuring local gems 
                                and community-driven restaurants.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                Whether you're a die-hard foodie, a curious tourist, or a 
                local looking to expand your palate, AZFoodReviews is your 
                trusted guide to discovering the best of Tucson's culinary 
                offerings. Join us as we explore the city's rich food 
                scene, savoring every bite and celebrating the joy of gathering 
                around the table. Together, we'll turn meals into unforgettable 
                memories.
            </p>
            <p>Bon appétit, The AZFoodReviews Team</p>
        </div>
    </div>
    <div id="about-modal-overlay" class="modal-overlay"></div>
`;

document.body.insertAdjacentHTML('beforeend', aboutModalHTML);

const aboutModal = document.getElementById('about-modal');
const aboutOverlay = document.getElementById('about-modal-overlay');
const aboutOpenBtn = document.getElementById('open-about-modal-button');
const aboutCloseBtn = document.getElementById('close-about-modal');

// Handle opening/closing
if (aboutOpenBtn) {
    aboutOpenBtn.addEventListener('click', function () {
        aboutModal.style.display = 'block';
        aboutOverlay.style.display = 'block';
    });
}

if (aboutCloseBtn) {
    aboutCloseBtn.addEventListener('click', function () {
        aboutModal.style.display = 'none';
        aboutOverlay.style.display = 'none';
    });
}

if (aboutOverlay) {
    aboutOverlay.addEventListener('click', function () {
        aboutModal.style.display = 'none';
        aboutOverlay.style.display = 'none';
    });
}

window.onclick = function(event) {
    if (event.target === aboutModal) {
        aboutModal.style.display = 'none';
        aboutOverlay.style.display = 'none';
    }
};
