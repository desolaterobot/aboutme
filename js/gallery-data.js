/* ============================================
   GALLERY DATA: categorized image collections
   ============================================ */
const GALLERY = [
    {
        id: 'posters',
        folder: 'posters',
        title: 'Posters',
        description: 'Alternate movie posters and album covers.',
        images: [
            { file: 'after hours albumm cover.png', label: 'The Weeknd: After Hours (album cover)' },
            { file: 'amine-limbo-alt-album-cover.png', label: 'Aminé: Limbo (alternate album cover)' },
            { file: 'ariana grande positions album cover.png', label: 'Ariana Grande: Positions (album cover)' },
            { file: 'bad genius movie poster.png', label: 'Bad Genius (movie poster)' },
            { file: 'eternals movie poster.png', label: 'Eternals (movie poster)' },
            { file: 'fight club moie poster.png', label: 'Fight Club (movie poster)' },
            { file: 'peacemaker comic poster.png', label: 'Peacemaker (comic poster)' },
            { file: 'shame movie poster.png', label: 'Shame (movie poster)' },
            { file: 'wholelottared album cover.png', label: 'Playboi Carti: Whole Lotta Red (album cover)' },
        ],
    },
    {
        id: 'eternal-grid',
        folder: 'eternal-grid',
        title: 'Eternal Grid',
        description: 'Posters and assets from my biggest project: a top-down shooter game.',
        images: [
            { file: 'black and white poster.png', label: 'Black and white poster' },
            { file: 'bring back outrun poster.png', label: 'Bring Back Outrun poster' },
            { file: 'nowhere to go poster.png', label: 'Nowhere To Go poster' },
            { file: 'alt-banner.png', label: 'Alternate banner' },
            { file: 'binary-sun-wallpaper.png', label: 'Binary Sun wallpaper' },
            { file: 'game icon.png', label: 'Game icon' },
            { file: 'itchio-site-banner.png', label: 'Itch.io site banner' },
            { file: 'itchio-site-thumbnail.png', label: 'Itch.io site thumbnail' },
            { file: 'mosaic-wallpaper.png', label: 'Mosaic wallpaper' },
            { file: 'scrapped logo design.png', label: 'Scrapped logo design' },
            { file: 'square mosaic of characters.png', label: 'Square mosaic of characters' },
            { file: 'vhs tape themed poster.png', label: 'VHS tape themed poster' },
            { file: 'video thumbnail.png', label: 'Video thumbnail' },
        ],
    },
    {
        id: 'other-graphics',
        folder: 'other graphics',
        title: 'Other Graphics',
        description: 'Miscellaneous graphics I made.',
        images: [
            { file: 'alert sign.png', label: 'Alert sign' },
            { file: 'circular typograph.png', label: 'Circular typograph' },
            { file: 'corvette dashboard.png', label: 'Corvette dashboard' },
            { file: 'helium atom.png', label: 'Helium atom' },
            { file: 'lazer icon.png', label: 'Lazer icon' },
            { file: 'logo.png', label: 'Logo' },
            { file: 'retro run grid.png', label: 'Retro run grid' },
            { file: 'squiggle graphic blue.png', label: 'Squiggle graphic (blue)' },
            { file: 'what will your next dream be.png', label: '"What will your next dream be?"' },
        ],
    },
];

/* ============================================
   RENDERER
   ============================================ */
function renderGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    GALLERY.forEach((category) => {
        // Category section
        const section = document.createElement('div');
        section.className = 'gallery-section';
        section.id = `cat-${category.id}`;

        const heading = document.createElement('h2');
        heading.className = 'gallery-category-title';
        heading.textContent = category.title;
        section.appendChild(heading);

        const desc = document.createElement('p');
        desc.className = 'gallery-category-desc';
        desc.textContent = category.description;
        section.appendChild(desc);

        // Image grid
        const grid = document.createElement('div');
        grid.className = 'gallery-grid';

        category.images.forEach((img) => {
            const card = document.createElement('div');
            card.className = 'gallery-card';

            const imageEl = document.createElement('img');
            imageEl.className = 'gallery-img';
            imageEl.src = `gallery/${encodeURIComponent(category.folder)}/${encodeURIComponent(img.file)}`;
            imageEl.alt = img.label;
            imageEl.loading = 'lazy';

            const caption = document.createElement('p');
            caption.className = 'gallery-caption';
            caption.textContent = img.label;

            card.appendChild(imageEl);
            card.appendChild(caption);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

document.addEventListener('DOMContentLoaded', renderGallery);