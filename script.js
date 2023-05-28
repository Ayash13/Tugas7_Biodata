document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");

    navbarLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetSection = document.querySelector(link.getAttribute("href"));

            sections.forEach(function (section) {
                if (section === targetSection) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });

            navbarLinks.forEach(function (navLink) {
                navLink.classList.remove("active");
            });

            link.classList.add("active");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const address = document.getElementById('address').value;
        const education = document.getElementById('education').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
        const selectedHobbies = Array.from(hobbies).map(hobby => hobby.value);

        // Set modal content with entered values
        document.getElementById('enteredName').textContent = 'Nama: ' + name;
        document.getElementById('enteredAge').textContent = 'Umur: ' + age;
        document.getElementById('enteredAddress').textContent = 'Alamat: ' + address;
        document.getElementById('enteredEducation').textContent = 'Pendidikan: ' + education;
        document.getElementById('enteredGender').textContent = 'Jenis Kelamin: ' + gender;
        document.getElementById('enteredHobbies').textContent = 'Hobi: ' + selectedHobbies.join(', ');

        // Display the modal
        modal.style.display = 'block';
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
});
