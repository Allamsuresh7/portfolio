// Dynamic Theme Toggle
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add Projects Dynamically
const projects = [
    { 
        title: 'Bank Simulation', 
        description: 'A banking system using advanced Java and Java-fullstack.', 
        image: 'bank.jpg'
    },
    { 
        title: 'Ecommerce Website', 
        description: 'A Swiggy API JSON data fetch example.', 
        image: 'Swiggy.jpg'
    },
    { 
        title: 'Movie Website', 
        description: 'A simple Netflix-like page with movies.', 
        image: 'Movies.jpg'
    },
    { 
        title: 'Calculator', 
        description: 'A simple calculator using JavaScript, CSS, and HTML.', 
        image: 'calculator.jpg'
    }
];

const projectGrid = document.getElementById('projectGrid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    projectGrid.appendChild(projectCard);
});

// Get references to buttons and content sections
const educationBtn = document.getElementById('educationBtn');
const certificatesBtn = document.getElementById('certificatesBtn');
const interestsBtn = document.getElementById('interestsBtn');

const educationDetails = document.getElementById('educationDetails');
const certificateDetails = document.getElementById('certificateDetails');
const interestsDetails = document.getElementById('interestsDetails');

// Utility function to hide all sections
function hideAllDetails() {
    educationDetails.classList.add('hidden');
    certificateDetails.classList.add('hidden');
    interestsDetails.classList.add('hidden');
}

// Add click event listeners
educationBtn.addEventListener('click', () => {
    hideAllDetails(); // Hide other sections
    educationDetails.classList.toggle('hidden'); // Toggle education section
});

certificatesBtn.addEventListener('click', () => {
    hideAllDetails(); // Hide other sections
    certificateDetails.classList.toggle('hidden'); // Toggle certificates section
});

interestsBtn.addEventListener('click', () => {
    hideAllDetails(); // Hide other sections
    interestsDetails.classList.toggle('hidden'); // Toggle interests section
});


// Get references to the skill cards and details section
const frontendCard = document.getElementById('frontendCard');
const backendCard = document.getElementById('backendCard');
const databaseCard = document.getElementById('databaseCard');
const skillDetails = document.getElementById('skillDetails');
const skillTitle = document.getElementById('skillTitle');
const skillContent = document.getElementById('skillContent');

// Skill Data for Dynamic Display
const skillsData = {
    frontend: {
        title: 'Frontend Development',
        details: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'ReactJS'],
        image: 'frontend.jpg',
        color: '#ff6b6b'
    },
    backend: {
        title: 'Backend Development',
        details: ['Java', 'Core Java', 'Servlet', 'JSP', 'JDBC'],
        image: 'backend.jpg',
        color: '#4ecdc4'
    },
    database: {
        title: 'Database Technologies',
        details: ['MySQL', 'MongoDB'],
        image: 'database.jpg',
        color: '#1a535c'
    }
};

// Utility function to display skill details
function displaySkill(skill) {
    const { title, details, image, color } = skillsData[skill];
    skillTitle.textContent = title;
    skillContent.innerHTML = `
        <ul>${details.map(item => `<li>${item}</li>`).join('')}</ul>
        <img src="${image}" alt="${title}" class="skill-image">
    `;
    skillDetails.style.borderColor = color; // Change border color dynamically
    skillDetails.classList.remove('hidden');
}

// Add event listeners to the skill cards
frontendCard.addEventListener('click', () => displaySkill('frontend'));
backendCard.addEventListener('click', () => displaySkill('backend'));
databaseCard.addEventListener('click', () => displaySkill('database'));


// Get references to buttons and elements
const viewContactButton = document.getElementById('viewContact');
const contactDetails = document.getElementById('contactDetails');
const viewResumeButton = document.getElementById('viewResume');
const resumeModal = document.getElementById('resumeModal');
const closeModal = document.querySelector('.close');

// Function to show the resume modal
viewResumeButton.addEventListener('click', () => {
    resumeModal.classList.remove('hidden');
});

// Function to close the modal
closeModal.addEventListener('click', () => {
    resumeModal.classList.add('hidden');
});

// Function to display contact details
viewContactButton.addEventListener('click', () => {
    contactDetails.classList.toggle('hidden');
});

// Hide modal if clicked outside content area
window.addEventListener('click', (event) => {
    if (event.target === resumeModal) {
        resumeModal.classList.add('hidden');
    }
});


// Function to show the resume modal on button click
viewResumeButton.addEventListener('click', () => {
    resumeModal.style.display = 'flex'; // Show the modal when button is clicked
});

// Function to close the modal
closeModal.addEventListener('click', () => {
    resumeModal.style.display = 'none'; // Hide the modal on close button click
});

// Hide modal if clicked outside the content area
window.addEventListener('click', (event) => {
    if (event.target === resumeModal) {
        resumeModal.style.display = 'none'; // Hide the modal if clicked outside of modal content
    }
});