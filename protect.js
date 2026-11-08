/* Light deterrents against casual image saving: no right-click menu, drag-out, or long-press save on images.
   (A browser has to receive the images to show them, so this stops casual copying, not determined copying.) */
(function () {
  const isImage = t => t && t.closest && t.closest('img, picture, svg, canvas, .profile-wrap, .hero-name');
  document.addEventListener('contextmenu', e => { if (isImage(e.target)) e.preventDefault(); });
  document.addEventListener('dragstart', e => { if (isImage(e.target)) e.preventDefault(); });
})();
