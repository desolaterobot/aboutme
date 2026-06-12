/* ============================================
   DATA LAYER: single source of truth
   ============================================ */

const PROJECTS = [
    {
        id: 'unitygame',
        img: 'assets/eternal.png',
        title: 'Eternal Grid',
        text: 'A 80s-aesthetic-inspired top-down endless arcade shooter game. Made in Unity in the C# programming language, all illustrations and artwork made by me.',
        href: 'https://desolaterobot.itch.io/eternal-grid',
        label: 'Visit Site',
    },
    {
        id: 'substracker',
        img: 'assets/substracker.png',
        title: 'Substracker',
        text: 'An Android app that can track subscriptions and daily expenses, made in Flutter in the Dart language.',
        href: 'https://play.google.com/store/apps/details?id=com.desolate.substracker',
        label: 'Download App',
    },
    {
        id: 'thoth',
        img: 'assets/thoth.png',
        title: 'ThothCrypt',
        text: 'A program that allows encryption of entire folders just by using a single password. Made in Python, used the TKinter for GUI and Fernet for encryption.',
        href: 'https://github.com/desolaterobot/thoth',
        label: 'Download On GitHub',
    },
];

const CONTACTS = [
    {
        img: 'logos/email.png',
        alt: 'Email',
        label: 'Email',
        href: 'mailto:dimasrizkyk@gmail.com',
    },
    {
        img: 'logos/linkedin.png',
        alt: 'LinkedIn',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/dimas-rizky-2113b0275/',
    },
    {
        img: 'logos/github.png',
        alt: 'GitHub',
        label: 'GitHub',
        href: 'https://github.com/desolaterobot',
    },
];

/* ============================================
   RENDERERS: build DOM from data
   ============================================ */

/**
 * Build a single project card DOM element from a project object.
 * @param {object} project
 * @returns {HTMLDivElement}
 */
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.id = project.id;

    const header = document.createElement('div');
    header.className = 'card-header';

    const img = document.createElement('img');
    img.src = project.img;
    img.className = 'cropCircle';
    img.alt = project.title;

    const title = document.createElement('p');
    title.className = 'card-title';
    title.textContent = project.title;

    header.appendChild(img);
    header.appendChild(title);

    const text = document.createElement('p');
    text.className = 'card-text';
    text.textContent = project.text;

    const link = document.createElement('a');
    link.href = project.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const btn = document.createElement('button');
    btn.className = 'projectButton';
    const btnLabel = document.createElement('p');
    btnLabel.textContent = project.label;
    btn.appendChild(btnLabel);
    link.appendChild(btn);

    card.appendChild(header);
    card.appendChild(text);
    card.appendChild(link);

    return card;
}

/**
 * Build a single contact button DOM element from a contact object.
 * @param {object} contact
 * @returns {HTMLButtonElement}
 */
function createContactButton(contact) {
    const btn = document.createElement('button');
    btn.className = 'contact-button';
    btn.title = contact.label;

    const img = document.createElement('img');
    img.src = contact.img;
    img.width = 35;
    img.height = 35;
    img.alt = contact.alt;

    const label = document.createElement('p');
    label.textContent = contact.label;

    btn.appendChild(img);
    btn.appendChild(label);

    btn.addEventListener('click', () => {
        window.location.href = contact.href;
    });

    return btn;
}

/* ============================================
   INIT: wire everything up on DOM ready
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    // --- Render project cards ---
    const projectSelect = document.querySelector('.project-select');
    if (projectSelect) {
        // Clear any static children, then render from data
        projectSelect.innerHTML = '';
        PROJECTS.forEach((p) => {
            projectSelect.appendChild(createProjectCard(p));
        });
    }

    // --- Render contact buttons ---
    const contactRow = document.querySelector('.contact-button-row');
    if (contactRow) {
        contactRow.innerHTML = '';
        CONTACTS.forEach((c) => {
            contactRow.appendChild(createContactButton(c));
        });
    }
});