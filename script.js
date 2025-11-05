// Add parallax effect to background shapes
// Enhanced 3D parallax effect with more realistic depth
document.addEventListener('DOMContentLoaded', function() {
    const background = document.querySelector('.background-3d');
    const shapes = document.querySelectorAll('.floating-shape');
    const body = document.querySelector('body');
    
    // Enhanced mouse move effect with smoother transitions
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    
    // Add subtle 3D tilt effect to the entire page
    document.addEventListener('mousemove', (e) => {
        targetX = (window.innerWidth / 2 - e.pageX) / 25;
        targetY = (window.innerHeight / 2 - e.pageY) / 25;
        
        // Apply subtle 3D tilt to the entire page
        const tiltX = (e.clientY / window.innerHeight - 0.5) * 5;
        const tiltY = (e.clientX / window.innerWidth - 0.5) * -5;
        
        body.style.perspective = '1000px';
        body.style.transformStyle = 'preserve-3d';
        body.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
    
    // Smooth animation loop
    function animate() {
        // Smooth interpolation for more natural movement
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = currentX * speed;
            const y = currentY * speed;
            
            // Add subtle scaling effect based on position
            const scale = 1 + Math.abs(x + y) * 0.001;
            
            shape.style.transform = `translate(${x}px, ${y}px) translateZ(${-50 - index * 10}px) scale(${scale})`;
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}));

// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// AI Assistant Chat Functionality
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Knowledge base for the AI assistant
const knowledgeBase = {
    name: "Abhishek Kumar",
    skills: [
        "Python", "JavaScript", "Java", "C/C++", "ReactJS", "Flutter", 
        "TensorFlow", "OpenCV", "Deep Learning", "MySQL", "Firebase", "MongoDB",
        "Git", "Node.js", "AWS", "Docker", "HTML/CSS", "UI/UX"
    ],
    projects: [
        {
            name: "3D AR/VR Skin Cancer Detection & Alzheimer Detection App",
            description: "Developed deep learning-based models integrated with Android and React interfaces for real-time medical image analysis.",
            technologies: ["Deep Learning", "Android", "React", "TensorFlow"]
        },
        {
            name: "Online Banking Application & Employee Time Tracker",
            description: "Engineered a secure Java-based web application using JSP, Servlets, and MySQL; implemented time-tracking analytics and database connectivity.",
            technologies: ["Java", "JSP/Servlets", "MySQL"]
        },
        {
            name: "Product Recommendation System for E-Commerce Platform",
            description: "ML-based product recommendation system for e-commerce platforms using CNN and Wavelet. Published in IEEE.",
            technologies: ["Machine Learning", "CNN", "Wavelet"]
        }
    ],
    experience: [
        {
            position: "Technical Consultant Engineer",
            company: "Genpact",
            period: "2025 - Present",
            description: "Working on client-driven technology consulting and implementation projects involving automation, system optimization, and data integration."
        },
        {
            position: "Data Science Engineer",
            company: "NRSC, ISRO Hyderabad",
            description: "Led end-to-end data analysis pipelines with preprocessing, feature engineering, and visualization using Matplotlib and Seaborn."
        },
        {
            position: "Web Development Engineer",
            company: "Nexus Info Service Limited, Coimbatore",
            description: "Optimized websites for SEO and performance, achieving a 55% faster load time."
        }
    ],
    certifications: [
        {
            name: "AWS Academy: Cloud Foundations",
            issuer: "Amazon Web Services",
            date: "2024"
        },
        {
            name: "AWS Academy: Machine Learning Foundations",
            issuer: "Amazon Web Services",
            date: "2024"
        },
        {
            name: "CCNA: Introduction to Networks",
            issuer: "Cisco Networking Academy",
            date: "2023"
        },
        {
            name: "CCNA: Cybersecurity Essentials",
            issuer: "Cisco Networking Academy",
            date: "2023"
        }
    ],
    achievements: [
        "National-Level Hackathon Winner: Led and won multiple hackathons across India, including IIT Roorkee Productathon-AI (Rank 3rd nationally among 800+ participants)",
        "Selected participant, Amazon Machine Learning School",
        "Led workshops and hackathons as part of Google Developer Student Club",
        "Recognized for leadership and technical excellence in over 10+ hackathon projects"
    ],
    education: [
        {
            degree: "B.Tech in Computer Science and Design (AIML)",
            institution: "Vel Tech University, Chennai, India",
            period: "2021-2025",
            details: "Current CGPA: 9.0"
        },
        {
            degree: "12th (BSEB)",
            institution: "Hasanpur College, Bihar, India",
            details: "Scored 63% in Boards"
        }
    ],
    approach: "I combine technical excellence with creative problem-solving to deliver impactful technology solutions. I thrive in dynamic environments where I can leverage cutting-edge technologies to solve meaningful problems."
};

// Function to generate AI responses
function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return `Hello! I'm here to tell you about Abhishek Kumar. You can ask me about his skills, projects, experience, certifications, or approach to software engineering!`;
    }
    
    // About/name
    if (message.includes('name') || message.includes('who are you')) {
        return `I'm an AI assistant representing Abhishek Kumar, a skilled Computer Science and AI/ML Engineering student. He specializes in creating innovative solutions through code and has won multiple hackathons including ranking 3rd nationally at IIT Roorkee Productathon-AI.`;
    }
    
    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('tool') || message.includes('programming')) {
        return `Abhishek has expertise in: ${knowledgeBase.skills.join(', ')}. He's particularly skilled in Python, TensorFlow, and cloud technologies like AWS.`;
    }
    
    // Projects
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
        const project = knowledgeBase.projects[Math.floor(Math.random() * knowledgeBase.projects.length)];
        return `One of his featured projects is "${project.name}": ${project.description} Technologies used include ${project.technologies.join(', ')}. You can view detailed information about this project by clicking on the project card in the portfolio.`;
    }
    
    // Experience
    if (message.includes('experience') || message.includes('background') || message.includes('career') || message.includes('work')) {
        const exp = knowledgeBase.experience[0]; // Most recent experience
        return `He currently works as a ${exp.position} at ${exp.company} (${exp.period || 'Current'}). ${exp.description}`;
    }
    
    // Certifications
    if (message.includes('certification') || message.includes('certificate')) {
        const cert = knowledgeBase.certifications[Math.floor(Math.random() * knowledgeBase.certifications.length)];
        return `He is certified in "${cert.name}" from ${cert.issuer}, issued in ${cert.date}. You can view all his certifications in the dedicated section of the portfolio.`;
    }
    
    // Education
    if (message.includes('education') || message.includes('study') || message.includes('university') || message.includes('college')) {
        const edu = knowledgeBase.education[0]; // Current education
        return `He is currently pursuing ${edu.degree} at ${edu.institution} (${edu.period}). ${edu.details}`;
    }
    
    // Achievements
    if (message.includes('achievement') || message.includes('award') || message.includes('hackathon') || message.includes('accomplishment')) {
        const achievement = knowledgeBase.achievements[Math.floor(Math.random() * knowledgeBase.achievements.length)];
        return achievement;
    }
    
    // Approach/philosophy
    if (message.includes('approach') || message.includes('philosophy') || message.includes('method')) {
        return knowledgeBase.approach;
    }
    
    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
        return `You can reach Abhishek Kumar via email at abhkumar2709@gmail.com or phone at +91 7004312630. You can also connect with him on LinkedIn at linkedin.com/in/abhishek-kumar-a62182208.`;
    }
    
    // Default response
    const responses = [
        "That's an interesting question! Abhishek Kumar is a Computer Science and AI/ML Engineering student with expertise in creating innovative technology solutions.",
        "I'd be happy to tell you more about his work! He focuses on combining technical excellence with creative problem-solving.",
        "He has extensive experience in full-stack development, AI/ML projects, and cloud technologies. Is there a specific aspect you'd like to know more about?",
        "As a tech enthusiast, he's passionate about AR/VR, deep learning, and innovative tech solutions. What would you like to know about his approach?",
        "You can find detailed information about his projects, skills, and experience by exploring the different sections of this portfolio."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

// Function to add a message to the chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    
    // Scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        // Add user message
        addMessage(message, true);
        
        // Clear input
        userInput.value = '';
        
        // Simulate AI thinking
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response);
        }, 1000);
    }
}

// Event listeners
sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Initialize with a welcome message
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (chatMessages) {
            addMessage("Hi there! I'm the portfolio assistant. Ask me anything about Abhishek Kumar's skills, projects, experience, or certifications!");
        }
    }, 1000);
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Project card click effect
// Enhanced 3D click effect with more realistic physics
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        // Enhanced 3D press effect
        this.style.transform = 'translateY(-5px) translateZ(40px) rotateX(8deg) rotateY(5deg) scale(0.98)';
        this.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        setTimeout(() => {
            this.style.transform = '';
            this.style.transition = '';
        }, 300);
    });
    
    // Add hover effect for more realistic 3D feel
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

