var esoThemeScroll = () => {
  document.body.style.backgroundPosition = `left calc(100% - ${window.scrollY / 30}px)`;
}
document.body.addEventListener('scroll', esoThemeScroll);
