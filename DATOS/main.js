document.body.classList.remove('container');

const lights = document.querySelector('.fireflies');
if (lights) {
  for (let i = 0; i < 28; i++) {
    const light = document.createElement('i');
    light.style.cssText = `--x:${(i * 37 + 7) % 100}%;--y:${(i * 23 + 12) % 100}%;--time:${5 + i % 6}s;--delay:-${i % 9}s`;
    lights.appendChild(light);
  }
}

const music = document.querySelector('audio');
const note = document.querySelector('.sound-note');
if (music) {
  music.volume = 0.55;
  const playMusic = () => music.play().catch(() => {
    if (note && !music.error) note.hidden = false;
  });
  music.addEventListener('playing', () => {
    if (note) note.hidden = true;
  });
  music.addEventListener('error', () => {
    if (note) {
      note.textContent = 'No se pudo cargar la música.';
      note.hidden = false;
    }
  });
  document.addEventListener('pointerdown', () => {
    if (music.paused) playMusic();
  });
  document.addEventListener('keydown', (event) => {
    if ((event.key === 'Enter' || event.key === ' ') && music.paused) playMusic();
  });
  playMusic();
}
