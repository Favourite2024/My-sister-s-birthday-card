const root = document.documentElement;
const beginButton = document.getElementById('begin');
const hero = document.getElementById('hero');
const main = document.getElementById('main');
const themeToggle = document.getElementById('toggle-theme');
const musicToggle = document.getElementById('toggle-music');
const progressBar = document.getElementById('progress-bar');
const childhoodGallery = document.getElementById('childhood-gallery');
const timeline = document.getElementById('timeline');
const emotionalLines = document.getElementById('emotional-lines');
const affirmations = document.getElementById('affirmations');
const memoryCards = document.getElementById('memory-cards');
const playPause = document.getElementById('play-pause');
const audio = document.getElementById('audio');
const vinyl = document.getElementById('vinyl');
const musicStatus = document.getElementById('music-status');
const masonry = document.getElementById('masonry');
const lightbox = document.getElementById('lightbox');
const lbClose = document.getElementById('lb-close');
const lbImg = document.getElementById('lb-img');
const videoList = document.getElementById('video-list');
const videoModal = document.getElementById('video-modal');
const videoClose = document.getElementById('video-close');
const videoPlayer = document.getElementById('video-player');
const envelope = document.getElementById('envelope');
const finalMessages = document.getElementById('final-messages');
const reveal = document.getElementById('reveal');
const balloons = document.getElementById('balloons');
const cursorCanvas = document.getElementById('cursor-particles');
const loader = document.getElementById('loader');

const childhoodPhotos = [
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80', alt: 'Childhood memory 1' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80', alt: 'Childhood memory 2' },
  { src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=80' , alt: 'Childhood memory 3' }
];

const timelineItems = [
  { text: 'Every year added another reason to admire you.', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80' },
  { text: 'You grew stronger without losing your kindness.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80' },
  { text: 'You carried people without asking for applause.', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80' },
  { text: 'You became someone we\'re all proud of.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80' }
];

const emotionalText = [
  "You may never realize this...",
  "But you've been one of the safest places in my life.",
  "Thank you for believing in me.",
  "Thank you for cheering me on.",
  "Thank you for correcting me with love.",
  "Thank you for making me laugh.",
  "Thank you for showing me what strength looks like.",
  "If I had to choose my sister again...",
  "I'd still choose you."
];

const affirmationText = [
  "You don't always see how beautiful your heart is.",
  "You don't always see how deeply you're loved.",
  "You don't always see how much your smile changes the atmosphere.",
  "But we do."
];

const memoryItems = [
  { title: 'Favorite songs', content: 'Soft piano, warm voices, and the soundtrack of our evenings.' },
  { title: 'Favorite food', content: 'Comforting family recipes, shared dinners, and the sweet smell of cake.' },
  { title: 'Favorite movie', content: 'Stories that feel like a gentle hug and make us dream together.' },
  { title: 'Favorite quote', content: '“You are braver than you believe, stronger than you seem, and smarter than you think.”' },
  { title: 'Funny habits', content: 'Your perfect morning ritual and the way you dance while cooking.' },
  { title: 'Dreams', content: 'More late night plans, quiet travels, and the kindness you want to share.' },
  { title: 'Hobbies', content: 'Creating beauty everywhere, collecting moments, and always learning.' },
  { title: 'Places she loves', content: 'Warm cafes, quiet beaches, and family gatherings that feel like home.' },
  { title: 'Things that make her laugh', content: 'Inside jokes, silly voices, and the joy of being together.' }
];

const galleryPhotos = [
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80', alt: 'Photo memory 1' },
  { src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80', alt: 'Photo memory 2' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80', alt: 'Photo memory 3' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80', alt: 'Photo memory 4' },
  { src: 'https://images.unsplash.com/photo-1465188162913-8fbcd101ebb9?auto=format&fit=crop&w=900&q=80', alt: 'Photo memory 5' }
];

const videoCards = [
  { title: 'Family memory', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { title: 'A quiet moment', src: 'https://www.w3schools.com/html/movie.mp4' }
];

const finalText = [
  'Happy Birthday.',
  'The world became brighter the day you were born.',
  'Thank you for being an amazing sister.',
  'I love you endlessly.',
  'Happy Birthday ❤️'
];

const particles = [];
const cursorCtx = cursorCanvas.getContext('2d');
let isDark = false;
let musicEnabled = false;
let themePref = localStorage.getItem('birthday-theme');
let audioLoaded = false;

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function initTheme() {
  if (themePref) {
    setTheme(themePref);
    isDark = themePref === 'dark';
  } else {
    setTheme('light');
  }
}

function buildGallery() {
  childhoodPhotos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    childhoodGallery.appendChild(img);
  });

  galleryPhotos.forEach(photo => {
    const btn = document.createElement('button');
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    btn.appendChild(img);
    btn.addEventListener('click', () => {
      lbImg.src = photo.src;
      lbImg.alt = photo.alt;
      lightbox.classList.remove('hidden');
    });
    masonry.appendChild(btn);
  });

  timelineItems.forEach((item, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'timeline-item';
    wrapper.innerHTML = `
      <div class="timeline-card">
        <p>${item.text}</p>
      </div>
      <img src="${item.image}" alt="Timeline stage ${index + 1}">
    `;
    timeline.appendChild(wrapper);
  });

  emotionalText.forEach(text => {
    const p = document.createElement('p');
    p.textContent = text;
    emotionalLines.appendChild(p);
  });

  affirmationText.forEach(text => {
    const card = document.createElement('article');
    card.className = 'card';
    card.textContent = text;
    affirmations.appendChild(card);
  });

  memoryItems.forEach(item => {
    const card = document.createElement('section');
    card.className = 'memory-card';
    card.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
    memoryCards.appendChild(card);
  });

  videoCards.forEach(video => {
    const card = document.createElement('article');
    card.className = 'video-card';
    card.innerHTML = `
      <h3>${video.title}</h3>
      <button type="button">Watch</button>
    `;
    card.querySelector('button').addEventListener('click', () => {
      videoPlayer.src = video.src;
      videoModal.classList.remove('hidden');
      videoPlayer.play();
    });
    videoList.appendChild(card);
  });
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = Math.min((scrollTop / height) * 100, 100);
  progressBar.style.width = `${progress}%`;
}

function fadeInOnScroll() {
  const sections = document.querySelectorAll('.gallery img, .masonry img, .timeline-item, .card, .memory-card, .emotional p');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));
}

function initLightbox() {
  lbClose.addEventListener('click', () => lightbox.classList.add('hidden'));
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.classList.add('hidden');
    }
  });
}

function initVideoModal() {
  videoClose.addEventListener('click', closeVideo);
  videoModal.addEventListener('click', (event) => {
    if (event.target === videoModal) closeVideo();
  });
}

function closeVideo() {
  videoModal.classList.add('hidden');
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
}

function initEnvelope() {
  envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
  });
}

function initMusic() {
  playPause.addEventListener('click', () => {
    if (!audioLoaded) {
      audio.src = 'https://cdn.pixabay.com/audio/2022/03/15/audio_0f38bfae74.mp3';
      audioLoaded = true;
    }
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', () => {
    playPause.textContent = 'Pause';
    musicStatus.textContent = 'Playing';
    vinyl.classList.add('playing');
  });

  audio.addEventListener('pause', () => {
    playPause.textContent = 'Play';
    musicStatus.textContent = 'Paused';
    vinyl.classList.remove('playing');
  });
}

function initThemeToggle() {
  themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    const theme = isDark ? 'dark' : 'light';
    setTheme(theme);
    localStorage.setItem('birthday-theme', theme);
  });
}

function initMusicToggle() {
  musicToggle.addEventListener('click', () => {
    musicEnabled = !musicEnabled;
    musicToggle.textContent = musicEnabled ? '🔇' : '🔊';
    audio.muted = !musicEnabled;
  });
}

function buildFinalMessage() {
  finalText.forEach((message, index) => {
    const p = document.createElement('p');
    p.textContent = message;
    finalMessages.appendChild(p);
    setTimeout(() => p.classList.add('visible'), 600 + index * 500);
  });
}

function createConfetti() {
  for (let i = 0; i < 40; i += 1) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 90 + 5}%`;
    balloon.style.background = `hsl(${Math.random() * 40 + 10}, 80%, 70%)`;
    balloon.style.animationDelay = `${Math.random() * 2}s`;
    balloon.style.animationDuration = `${Math.random() * 6 + 7}s`;
    balloons.appendChild(balloon);
    setTimeout(() => balloon.remove(), 10000);
  }
}

function initCursorParticles() {
  const rect = cursorCanvas.getBoundingClientRect();
  cursorCanvas.width = rect.width * window.devicePixelRatio;
  cursorCanvas.height = rect.height * window.devicePixelRatio;
  cursorCtx.scale(window.devicePixelRatio, window.devicePixelRatio);

  window.addEventListener('resize', () => {
    const rect = cursorCanvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    cursorCanvas.width = rect.width * dpr;
    cursorCanvas.height = rect.height * dpr;
    cursorCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  });

  window.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    particles.push({ x, y, alpha: 1, size: Math.random() * 3 + 2 });
  });

  function animateParticles() {
    cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);
    particles.forEach((particle, index) => {
      particle.alpha -= 0.02;
      particle.y -= 0.6;
      particle.x += (Math.random() - 0.5) * 0.8;
      cursorCtx.fillStyle = `rgba(255, 235, 220, ${particle.alpha})`;
      cursorCtx.beginPath();
      cursorCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      cursorCtx.fill();
      if (particle.alpha <= 0) particles.splice(index, 1);
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

function setUpListeners() {
  window.addEventListener('scroll', updateScrollProgress);
  beginButton.addEventListener('click', () => {
    document.getElementById('chapter1').scrollIntoView({ behavior: 'smooth' });
  });

  envelope.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') event.preventDefault();
  });

  reveal.addEventListener('click', () => {
    buildFinalMessage();
    createConfetti();
    if (!audioLoaded) {
      audio.src = 'https://cdn.pixabay.com/audio/2022/03/15/audio_0f38bfae74.mp3';
      audioLoaded = true;
    }
    audio.play();
  });
}

function initPage() {
  initTheme();
  buildGallery();
  fadeInOnScroll();
  initLightbox();
  initVideoModal();
  initEnvelope();
  initMusic();
  initThemeToggle();
  initMusicToggle();
  setUpListeners();
  initCursorParticles();
  setTimeout(() => loader.classList.add('hidden'), 900);
}

initPage();
