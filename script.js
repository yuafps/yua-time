const scene = document.getElementById('scene');
const clockShell = document.getElementById('clockShell');
const hourRotator = document.getElementById('hourRotator');
const minuteRotator = document.getElementById('minuteRotator');
const menuItems = [...document.querySelectorAll('.menu-item')];
const characterFigures = [...document.querySelectorAll('.character-figure')];
const floatingWindow = document.getElementById('floatingWindow');
const windowHandle = document.getElementById('windowHandle');
const windowClose = document.getElementById('windowClose');
const windowTitle = document.getElementById('windowTitle');
const subpageButtons = [...document.querySelectorAll('.subpage-button')];
const contentEyebrow = document.getElementById('contentEyebrow');
const contentHeading = document.getElementById('contentHeading');
const contentBody = document.getElementById('contentBody');
const pageIndex = document.getElementById('pageIndex');
const puzzleCount = document.getElementById('puzzleCount');
const puzzlePiece = document.getElementById('puzzlePiece');
const secretMenuItem = document.getElementById('secretMenuItem');
const collectToast = document.getElementById('collectToast');

const gearzUrl = 'https://gearz.gg/yuafps';
const creditUrl = 'https://github.com/girlglock';

const listHtml = items => `<ul class="profile-list">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;

const keyValueHtml = rows => `
  <div class="info-grid">
    ${rows.map(([label, value, note = '']) => `
      <div class="info-row">
        <span class="info-label">${label}</span>
        <span class="info-value">${value}${note ? `<small>${note}</small>` : ''}</span>
      </div>
    `).join('')}
  </div>`;

const keyboardSpecHtml = rows => `
  <div class="spec-grid">
    ${rows.map(([label, value]) => `
      <div class="spec-row"><span>${label}</span><strong>${value}</strong></div>
    `).join('')}
  </div>`;

const linkButton = (label, url) => `<a class="profile-link-button" href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;

const windowSections = [
  {
    sizeClass: 'window-size-about',
    pages: [
      {
        label: 'About',
        eyebrow: 'INVESTIGATION FILE',
        heading: "HELLO, I'M YUA",
        html: `
          <div class="profile-intro">
            <img class="profile-avatar" src="assets/yua-avatar.png" alt="Yua profile picture">
            <div class="profile-copy">
              <p class="profile-pronouns">PROGRAMMING STUDENT <span class="status-dot" aria-hidden="true"></span> 同種同目標</p>
              <p>I am an aspiring programming student in university trying a bit of everything. I like to imagine and build things that are a little unusual.</p>
            </div>
          </div>`
      },
      {
        label: 'Interests',
        eyebrow: 'PROFILE FILE',
        heading: 'WHAT I AM INTO',
        html: listHtml([
          'Website design',
          'Game development',
          'Peripherals such as custom keyboards, IEMs and mice',
          'Billiards / cue sports',
          'Movement shooters and Trackmania'
        ])
      },
      {
        label: 'Past site',
        eyebrow: 'PROFILE FILE',
        heading: 'MY PAST SITE',
        html: `<p>Before this V2, I built a window 7 desktop style site as my BIO with draggable windows with the 7.css framework.</p><div class="action-row">${linkButton('OPEN YUADESKTOP.COM', 'http://yuadesktop.com/')}</div>`
      }
    ]
  },
  {
    sizeClass: 'window-size-dev',
    pages: [
      {
        label: 'Stories',
        eyebrow: 'INSPIRATION',
        heading: 'STORY RICH GAMES',
        html: `<p>I am a big fan of story rich games such as Cyberpunk 2077, Firewatch and more. Since I am also into audio, I pay a lot of attention to the OST and soundtrack of a game, it adds a lot for the experience.</p>`
      },
      {
        label: 'Games',
        eyebrow: 'INSPIRATION',
        heading: 'GAMES THAT MAKE ME WANT TO BUILD',
        html: `<p>Everything Upgrade Tree and UpgradeX by Sapian (ASAP) on Roblox are two games that really inspire me. Roblox might not be the best platform(you know why), but I genuinely think they are great. Seeing a young developer make something with that much depth makes me want to try building something like it even more.</p>`
      },
      {
        label: 'Music',
        eyebrow: 'INSPIRATION',
        heading: 'MUSIC / SOUNDTRACKS',
        html: listHtml([
          'Simon Viklund - PAYDAY 2',
          'Christopher Larkin - Hollow Knight',
          'The Genshin Impact music team'
        ]) + `<p class="section-lead">Genshin Impact has a huge production budget behind it, but that does not take away from how good the music and soundtrack work can be. Great game music is one of the things that makes me want to care about audio in my own projects.</p>`
      }
    ]
  },
  {
    sizeClass: 'window-size-gear',
    pages: [
      {
        label: 'Main gear',
        eyebrow: 'GEAR FILE',
        heading: 'PERIPHERALS',
        html: `<p class="section-lead">I have built a lot of custom keyboards and also spend a lot of time with audio, mice and other peripherals.</p>${keyValueHtml([
          ['Mouse', 'G-Wolves LYCAN 8K - Grey', 'main mouse'],
          ['Mouse', 'Finalmouse FrostLord', 'in rotation'],
          ['Mousepad', 'GLSSWRKS Polarity - Black', 'main pad'],
          ['Keyboard', 'Venom 60 HE', 'main gaming keyboard'],
          ['Keyboard', 'Mode Envoy', 'daily work keyboard'],
          ['IEM', 'Lucid IEMS by tekkusai']
        ])}`
      },
      {
        label: 'Venom 60 HE',
        eyebrow: 'KEYBOARD SPECS',
        heading: 'VENOM 60 HE',
        html: keyboardSpecHtml([
          ['Case', 'Geonworks Frog Mini Leggera Acrylic'],
          ['PCB', 'Geonworks Venom 60HE'],
          ['Mount', 'FKM 70A KeySnap'],
          ['Plate', 'Aluminum plate'],
          ['Switches', 'Polar Ice Shine'],
          ['Spacebar', 'TTC Horse'],
          ['Stabilizers', 'TypePlus'],
          ['Keycaps', 'Royal Cadet'],
          ['Mods', 'Half plate foam']
        ])
      },
      {
        label: 'Mode Envoy',
        eyebrow: 'KEYBOARD SPECS',
        heading: 'MODE ENVOY',
        html: keyboardSpecHtml([
          ['Use', 'Daily work keyboard'],
          ['Case', 'PC case'],
          ['Plate', 'CF plate'],
          ['Switches', 'SWK Ghost Dragon'],
          ['Stabilizers', 'FourWrap'],
          ['Mount', 'Solid Block Mount'],
          ['Keycaps', 'KKB Retro Light Remix']
        ])
      },
      {
        label: 'Gearz',
        eyebrow: 'GEAR FILE',
        heading: 'GEARZ PROFILE',
        html: `<p>Here is all my peripherals I have.</p><div class="action-row">${linkButton('OPEN GEARZ PROFILE', gearzUrl)}</div>`
      }
    ]
  },
  {
    sizeClass: 'window-size-gaming',
    pages: [
      {
        label: 'Goal',
        eyebrow: 'GOALS',
        heading: 'CREATE THINGS I ENJOY',
        html: `<p>I want to create things that make me happy. I do not need every project to be perfect or praised. I think what matters is that I try, learn and enjoy the process.</p>`
      },
      {
        label: 'Dream game',
        eyebrow: 'GOALS',
        heading: 'DREAM GAME TO DEVELOP',
        html: `<p>I would love to make a very long, extensive and complex incremental game inspired by games like Cookie Clicker and Upload Labs, with long term progression, automation, upgrades and prestige systems.</p>`
      },
      {
        label: 'Process',
        eyebrow: 'GOALS',
        heading: 'KEEP EXPERIMENTING',
        html: `<p>I want to keep trying different areas of programming and game development instead of forcing myself into one direction too early. Every small project is another chance to learn what I enjoy making.</p>`
      }
    ]
  },
  {
    sizeClass: 'window-size-pool',
    pages: [
      {
        label: 'Current site',
        eyebrow: 'PROJECTS',
        heading: 'YUA PORTFOLIO V2',
        html: `<p>This site is one of my experiments in making a portfolio feel less like a normal scrolling webpage. My first shot at making something "unsual", there is also fragment that is floating around the page(If you havent notice yet....)</p>`
      },
      {
        label: 'Direction',
        eyebrow: 'PROJECTS',
        heading: 'WHAT I LIKE TO BUILD',
        html: `<p>I like projects where I can take a simple idea and give it a strong identity. That might be a strange website(like this), and something that allow me to experiment while I learn.</p>`
      }
    ]
  },
  {
    sizeClass: 'window-size-secret',
    pages: [
      {
        label: 'Imposter syndrome',
        eyebrow: 'DEEP DOWN...',
        heading: 'IMPOSTER SYNDROME',
        html: `<p>Deep down, I am fucking terrified to try. Building my first site took a lot of encouragement. It is not that I do not know how to build things it is seeing the projects other people make and feeling like mine look bad next to them. Sometimes it feels like everyone else has an innate talent for designing and making things that I just do not have.</p>`
      },
      {
        label: 'Perfection',
        eyebrow: 'DEEP DOWN...',
        heading: 'PERFECTION',
        html: `<p>I want to make everything perfect, even when I know that is not really possible. I know is contradicting, but sometimes that ends up backfiring. I spend too much time chasing the version in my head instead of accepting that something can be unfinished, imperfect, and still worth making.</p>`
      },
      {
        label: 'Tutorial hell',
        eyebrow: 'DEEP DOWN...',
        heading: 'TUTORIAL HELL',
        html: `<p>It is not hard for me to look up how to do something, but for the life of me I cannot remember how to do everything afterwards..</p>`
      },
      {
        label: 'Am I behind?',
        eyebrow: 'DEEP DOWN...',
        heading: 'AM I BEHIND?',
        html: `<p>I know that one of my biggest inspirations comes from a young developer, and sometimes that makes me feel like I am already far behind. I catch myself comparing where I am now with what someone else has already managed to build, instead of remembering that I am still learning and making my own way through it.</p><div class="action-row"><button class="profile-link-button danger-button" type="button" data-action="reset-puzzle">RESET FRAGMENTS</button></div>`
      }
    ]
  }
];

const PUZZLE_STORAGE_KEY = 'yuaProfoV2PuzzlePiecesV5';
const PUZZLE_TOTAL = 5;
// About p1, Inspiration p3, Gear p4, Goals p1, Projects p2.
const PUZZLE_SUBPAGES = [0, 2, 3, 0, 1];
const WINDOW_SIZE_CLASSES = windowSections.map(section => section.sizeClass);
let currentPageIndex = -1;
let currentSubpageIndex = 0;
let currentCharacterIndex = 0;
let characterTimer = null;
let toastTimer = null;
let collectedPieces = loadPuzzleState();

function loadPuzzleState() {
  try {
    const saved = JSON.parse(localStorage.getItem(PUZZLE_STORAGE_KEY) || '[]');
    const valid = saved.filter(value => Number.isInteger(value) && value >= 0 && value < PUZZLE_TOTAL);
    return new Set(valid);
  } catch {
    return new Set();
  }
}

function savePuzzleState() {
  try {
    localStorage.setItem(PUZZLE_STORAGE_KEY, JSON.stringify([...collectedPieces]));
  } catch {
  }
}

function clearPuzzleState() {
  collectedPieces = new Set();
  try {
    localStorage.removeItem(PUZZLE_STORAGE_KEY);
  } catch {
  }
}

function setCharacter(index) {
  const nextIndex = Math.max(0, Math.min(index, characterFigures.length - 1));
  if (nextIndex === currentCharacterIndex) return;

  clearTimeout(characterTimer);
  const oldFigure = characterFigures[currentCharacterIndex];
  const nextFigure = characterFigures[nextIndex];

  characterFigures.forEach((figure, figureIndex) => {
    if (figureIndex !== currentCharacterIndex && figureIndex !== nextIndex) {
      figure.classList.remove('is-active', 'is-entering', 'is-exiting');
    }
  });

  oldFigure.classList.remove('is-entering', 'is-active');
  oldFigure.classList.add('is-exiting');

  nextFigure.classList.remove('is-exiting', 'is-active');
  nextFigure.classList.add('is-entering');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      nextFigure.classList.add('is-active');
      nextFigure.classList.remove('is-entering');
    });
  });

  currentCharacterIndex = nextIndex;
  characterTimer = setTimeout(() => {
    oldFigure.classList.remove('is-exiting');
  }, 720);
}

let previousRawHourAngle = null;
let unwrappedHourAngle = 0;
let pendingPointer = null;
let clockAnimationFrame = null;

function pointerAngleFromClock(clientX, clientY) {
  const rect = clockShell.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const degrees = Math.atan2(clientY - centerY, clientX - centerX) * 180 / Math.PI + 90;
  return (degrees + 360) % 360;
}

function shortestAngleDelta(from, to) {
  return ((to - from + 540) % 360) - 180;
}

function renderClockHands(rawHourAngle) {
  if (previousRawHourAngle === null) {
    previousRawHourAngle = rawHourAngle;
    unwrappedHourAngle = rawHourAngle;
  } else {
    unwrappedHourAngle += shortestAngleDelta(previousRawHourAngle, rawHourAngle);
    previousRawHourAngle = rawHourAngle;
  }

  /*
     The hour hand is the driver. One full hour-hand revolution is 12 hours,
     so the minute hand makes 12 revolutions. Because unwrappedHourAngle keeps
     direction across 12 o'clock, moving the cursor backwards winds the minute
     hand backwards smoothly too.
  */
  const minuteAngle = unwrappedHourAngle * 12;

  hourRotator.style.transform = `translate(-50%, -50%) rotate(${unwrappedHourAngle}deg)`;
  minuteRotator.style.transform = `translate(-50%, -50%) rotate(${minuteAngle}deg)`;
}

function updateClockFromPointer(clientX, clientY) {
  renderClockHands(pointerAngleFromClock(clientX, clientY));
}

function scheduleClockPointerUpdate(clientX, clientY) {
  pendingPointer = { clientX, clientY };
  if (clockAnimationFrame !== null) return;

  clockAnimationFrame = requestAnimationFrame(() => {
    clockAnimationFrame = null;
    if (!pendingPointer) return;
    const { clientX: x, clientY: y } = pendingPointer;
    pendingPointer = null;
    updateClockFromPointer(x, y);
  });
}

scene.addEventListener('pointermove', event => {
  scheduleClockPointerUpdate(event.clientX, event.clientY);
});

function updatePuzzleDisplay() {
  puzzleCount.textContent = `${collectedPieces.size}/${PUZZLE_TOTAL}`;
  const complete = collectedPieces.size === PUZZLE_TOTAL;
  secretMenuItem.classList.toggle('unlocked', complete);
  secretMenuItem.setAttribute('aria-hidden', complete ? 'false' : 'true');
  secretMenuItem.tabIndex = complete ? 0 : -1;
  updatePuzzlePiece();
}

function updatePuzzlePiece() {
  puzzlePiece.className = 'puzzle-piece';
  floatingWindow.classList.remove('fragment-visible', 'fragment-in-banner');

  const isPuzzleSection = currentPageIndex >= 0 && currentPageIndex < PUZZLE_TOTAL;
  const isHiddenPage = isPuzzleSection && currentSubpageIndex === PUZZLE_SUBPAGES[currentPageIndex];
  const isCollected = isPuzzleSection && collectedPieces.has(currentPageIndex);

  if (!isPuzzleSection || !isHiddenPage || isCollected || !floatingWindow.classList.contains('is-open')) {
    puzzlePiece.setAttribute('aria-hidden', 'true');
    puzzlePiece.tabIndex = -1;
    return;
  }

  puzzlePiece.classList.add(`piece-pos-${currentPageIndex}`, 'is-visible');
  floatingWindow.classList.add('fragment-visible');

  if (currentPageIndex === 2 && currentSubpageIndex === 3) {
    floatingWindow.classList.add('fragment-in-banner');
  }

  puzzlePiece.setAttribute('aria-hidden', 'false');
  puzzlePiece.setAttribute('aria-label', `Collect hidden puzzle piece ${currentPageIndex + 1} of ${PUZZLE_TOTAL}`);
  puzzlePiece.tabIndex = 0;
}

function showToast(message) {
  clearTimeout(toastTimer);
  collectToast.textContent = message;
  collectToast.classList.add('is-visible');
  toastTimer = setTimeout(() => {
    collectToast.classList.remove('is-visible');
  }, 2100);
}

function collectCurrentPiece() {
  if (currentPageIndex < 0 || currentPageIndex >= PUZZLE_TOTAL || collectedPieces.has(currentPageIndex)) return;

  collectedPieces.add(currentPageIndex);
  savePuzzleState();
  puzzlePiece.classList.add('is-collected');
  puzzleCount.textContent = `${collectedPieces.size}/${PUZZLE_TOTAL}`;
  showToast(`FRAGMENT FOUND ${collectedPieces.size}/${PUZZLE_TOTAL} ACQUIRED`);
  setTimeout(updatePuzzleDisplay, 300);
}

puzzlePiece.addEventListener('click', collectCurrentPiece);

function applyWindowSize() {
  WINDOW_SIZE_CLASSES.forEach(className => floatingWindow.classList.remove(className));
  if (currentPageIndex >= 0 && windowSections[currentPageIndex]) {
    floatingWindow.classList.add(windowSections[currentPageIndex].sizeClass);
  }
}

function renderSubpage() {
  const section = windowSections[currentPageIndex];
  if (!section) return;

  currentSubpageIndex = Math.min(currentSubpageIndex, section.pages.length - 1);
  const data = section.pages[currentSubpageIndex];
  contentEyebrow.textContent = `${data.eyebrow} / PAGE ${currentSubpageIndex + 1}`;
  contentHeading.textContent = data.heading;
  contentBody.innerHTML = data.html;
  pageIndex.textContent = `${String(currentPageIndex + 1).padStart(3, '0')}-${currentSubpageIndex + 1}`;

  subpageButtons.forEach((button, index) => {
    const pageData = section.pages[index];
    const available = Boolean(pageData);
    button.hidden = !available;
    button.disabled = !available;
    button.tabIndex = available ? 0 : -1;

    if (!available) {
      button.classList.remove('active');
      button.removeAttribute('aria-current');
      button.removeAttribute('title');
      return;
    }

    const active = index === currentSubpageIndex;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
    button.setAttribute('aria-label', `Open ${pageData.label}`);
    button.title = pageData.label;
  });

  updatePuzzlePiece();
}

function openPage(index) {
  if (index === 5 && collectedPieces.size !== PUZZLE_TOTAL) return;

  currentPageIndex = index;
  currentSubpageIndex = 0;
  menuItems.forEach(button => button.classList.remove('active'));
  const item = menuItems[index];
  item.classList.add('active');
  windowTitle.textContent = item.dataset.title;
  setCharacter(index);
  applyWindowSize();
  renderSubpage();
  floatingWindow.classList.add('is-open');
  updatePuzzlePiece();
}

function resetPuzzleHunt() {
  clearPuzzleState();
  updatePuzzleDisplay();
  openPage(0);
  showToast('FRAGMENTS RESET - DEEP DOWN LOCKED');
}

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => openPage(index));
});

subpageButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const section = windowSections[currentPageIndex];
    if (!section || !section.pages[index]) return;
    currentSubpageIndex = index;
    renderSubpage();
  });
});

contentBody.addEventListener('click', event => {
  const resetButton = event.target.closest('[data-action="reset-puzzle"]');
  if (resetButton) resetPuzzleHunt();
});

windowClose.addEventListener('click', () => {
  floatingWindow.classList.remove('is-open');
  menuItems.forEach(button => button.classList.remove('active'));
  currentPageIndex = -1;
  currentSubpageIndex = 0;
  setCharacter(0);
  updatePuzzlePiece();
});

let dragState = null;

windowHandle.addEventListener('pointerdown', event => {
  if (event.target.closest('button')) return;
  const rect = floatingWindow.getBoundingClientRect();
  dragState = {
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top
  };
  windowHandle.setPointerCapture(event.pointerId);
});

windowHandle.addEventListener('pointermove', event => {
  if (!dragState || window.innerWidth <= 780) return;
  const maxX = window.innerWidth - floatingWindow.offsetWidth;
  const maxY = window.innerHeight - floatingWindow.offsetHeight;
  const x = Math.min(Math.max(0, event.clientX - dragState.offsetX), Math.max(0, maxX));
  const y = Math.min(Math.max(0, event.clientY - dragState.offsetY), Math.max(0, maxY));
  floatingWindow.style.left = `${x}px`;
  floatingWindow.style.top = `${y}px`;
  floatingWindow.style.transform = 'none';
});

windowHandle.addEventListener('pointerup', event => {
  if (!dragState) return;
  dragState = null;
  windowHandle.releasePointerCapture(event.pointerId);
});

updatePuzzleDisplay();
updateClockFromPointer(window.innerWidth * 0.72, window.innerHeight * 0.30);
