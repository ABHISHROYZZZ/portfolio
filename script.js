// Add parallax effect to background shapes
document.addEventListener('DOMContentLoaded', function() {
    const background = document.querySelector('.background-3d');
    const shapes = document.querySelectorAll('.floating-shape');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = xAxis * speed;
            const y = yAxis * speed;
            
            shape.style.transform = `translate(${x}px, ${y}px) translateZ(${-50 - index * 10}px)`;
        });
    });
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
    name: "Data Engineer",
    skills: [
        "Apache Spark", "Apache Kafka", "Hadoop", "ETL/ELT", 
        "SQL/NoSQL", "AWS/Azure/GCP", "Snowflake", "Docker/Kubernetes",
        "Python", "Scala", "Airflow", "Git/CI-CD"
    ],
    projects: [
        {
            name: "Real-time Data Pipeline",
            description: "Built a scalable real-time data pipeline using Kafka, Spark Streaming, and Cassandra to process 100k+ events per second.",
            technologies: ["Kafka", "Spark", "Cassandra"]
        },
        {
            name: "Cloud Data Warehouse",
            description: "Designed and implemented a cloud-native data warehouse on Snowflake, reducing query times by 70% and costs by 40%.",
            technologies: ["Snowflake", "AWS", "dbt"]
        },
        {
            name: "ML Feature Store",
            description: "Developed a feature store for machine learning models, enabling consistent feature engineering across 15+ models.",
            technologies: ["Feast", "Redis", "Python"]
        }
    ],
    experience: [
        {
            position: "Senior Data Engineer",
            company: "Tech Solutions Inc.",
            period: "2022 - Present",
            description: "Led the migration of legacy data systems to cloud-native architecture, improving data processing speed by 300%."
        },
        {
            position: "Data Engineer",
            company: "Data Insights Co.",
            period: "2020 - 2022",
            description: "Developed and maintained ETL pipelines processing 5TB+ of data daily."
        },
        {
            position: "Junior Data Analyst",
            company: "Analytics First Ltd.",
            period: "2019 - 2020",
            description: "Analyzed customer behavior data to support marketing campaigns."
        }
    ],
    certifications: [
        {
            name: "AWS Certified Data Analytics",
            issuer: "Amazon Web Services",
            date: "Jan 2023"
        },
        {
            name: "Google Professional Data Engineer",
            issuer: "Google Cloud Platform",
            date: "Mar 2022"
        },
        {
            name: "Databricks Lakehouse Fundamentals",
            issuer: "Databricks Academy",
            date: "Jun 2022"
        },
        {
            name: "Apache Spark Developer",
            issuer: "Databricks Academy",
            date: "Sep 2021"
        }
    ],
    approach: "I combine technical excellence with business acumen to deliver data systems that drive real value. I thrive in dynamic environments where I can leverage cutting-edge technologies to solve meaningful problems."
};

// Function to generate AI responses
function generateResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return `Hello! I'm here to tell you about the portfolio owner. You can ask me about their skills, projects, experience, certifications, or approach to data engineering!`;
    }
    
    // About/name
    if (message.includes('name') || message.includes('who are you')) {
        return `I'm an AI assistant representing the portfolio owner, a skilled Data Engineer. They specialize in building robust data infrastructure and transforming complex data challenges into elegant solutions.`;
    }
    
    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('tool')) {
        return `The portfolio owner has expertise in: ${knowledgeBase.skills.join(', ')}. They're particularly skilled in Apache Spark, Python, and cloud technologies like AWS and Azure.`;
    }
    
    // Projects
    if (message.includes('project') || message.includes('work')) {
        const project = knowledgeBase.projects[Math.floor(Math.random() * knowledgeBase.projects.length)];
        return `One of their featured projects is "${project.name}": ${project.description} Technologies used include ${project.technologies.join(', ')}. You can view detailed information about this project by clicking on the project card in the portfolio.`;
    }
    
    // Experience
    if (message.includes('experience') || message.includes('background') || message.includes('career')) {
        const exp = knowledgeBase.experience[0]; // Most recent experience
        return `They currently work as a ${exp.position} at ${exp.company} (${exp.period}). ${exp.description}`;
    }
    
    // Certifications
    if (message.includes('certification') || message.includes('certificate')) {
        const cert = knowledgeBase.certifications[Math.floor(Math.random() * knowledgeBase.certifications.length)];
        return `They are certified in "${cert.name}" from ${cert.issuer}, issued in ${cert.date}. You can view all their certifications in the dedicated section of the portfolio.`;
    }
    
    // Approach/philosophy
    if (message.includes('approach') || message.includes('philosophy') || message.includes('method')) {
        return knowledgeBase.approach;
    }
    
    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
        return `You can reach the portfolio owner via email at youremail@example.com or connect with them on LinkedIn at linkedin.com/in/yourprofile.`;
    }
    
    // Default response
    const responses = [
        "That's an interesting question! The portfolio owner is a data engineering specialist with expertise in building scalable data pipelines.",
        "I'd be happy to tell you more about their work! They focus on transforming raw data into actionable insights.",
        "They have extensive experience in cloud data solutions and real-time processing systems. Is there a specific aspect you'd like to know more about?",
        "As a data engineer, they're passionate about creating efficient, reliable data infrastructure. What would you like to know about their approach?",
        "You can find detailed information about their projects, skills, and experience by exploring the different sections of this portfolio."
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
            addMessage("Hi there! I'm the portfolio assistant. Ask me anything about the portfolio owner's skills, projects, experience, or certifications!");
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
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'translateY(-10px) translateZ(30px) rotateX(5deg) scale(1.02)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});