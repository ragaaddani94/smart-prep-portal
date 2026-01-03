// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animation (Simple)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .tip-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
});

// Logo animation on hover
const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', () => {
    logo.style.transform = "scale(1.05)";
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = "scale(1)";
});

// Dynamic Data Fetching
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function renderJobs(jobs) {
    const container = document.getElementById('jobs-container');
    if (!container || !jobs) return;

    container.innerHTML = jobs.map(job => `
        <div class="tip-item">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h4>${job.title}</h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${job.posted}</span>
            </div>
            <p><strong>${job.company}</strong> | ${job.location}</p>
            <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-muted);">${job.type}</p>
            <a href="${job.link}" target="_blank" style="display: inline-block; margin-top: 1rem; color: var(--primary); font-weight: 600; text-decoration: none;">Apply Now →</a>
        </div>
    `).join('');

    // Apply animations to new items
    container.querySelectorAll('.tip-item').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(el);
    });
}

function renderTech(updates) {
    const container = document.getElementById('tech-container');
    if (!container || !updates) return;

    container.innerHTML = updates.map(update => `
        <div class="tip-item" style="border-left-color: var(--accent);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h4>${update.title}</h4>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${update.date}</span>
            </div>
            <p>${update.description}</p>
            <a href="${update.link}" target="_blank" style="display: inline-block; margin-top: 1rem; color: var(--accent); font-weight: 600; text-decoration: none;">Read More →</a>
        </div>
    `).join('');

    // Apply animations to new items
    container.querySelectorAll('.tip-item').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(el);
    });
}

// Initialize Dynamic Content
async function init() {
    const [jobs, tech] = await Promise.all([
        fetchData('jobs.json'),
        fetchData('tech-updates.json')
    ]);

    if (jobs) renderJobs(jobs);
    if (tech) renderTech(tech);
}

document.addEventListener('DOMContentLoaded', init);
