document.querySelectorAll('[data-news-gallery]').forEach((gallery) => {
  const tabs = Array.from(gallery.querySelectorAll('[role="tab"]'));
  const slides = Array.from(gallery.querySelectorAll('[role="tabpanel"]'));
  const position = gallery.querySelector('[data-news-position]');
  const photoPanel = gallery.querySelector('.news-gallery');
  const newsList = gallery.querySelector('.news-list');
  let current = 0;

  function syncNewsListHeight() {
    if (!photoPanel || !newsList) return;
    const height = photoPanel.getBoundingClientRect().height;
    if (height <= 0) return;
    newsList.style.maxHeight = 'none';
    newsList.style.height = `${height}px`;
  }

  if (photoPanel && newsList) {
    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(syncNewsListHeight);
      resizeObserver.observe(photoPanel);
    } else {
      window.addEventListener('resize', syncNewsListHeight);
    }
    syncNewsListHeight();
  }

  function selectNews(index, moveFocus = false) {
    current = (index + tabs.length) % tabs.length;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === current));
      tab.tabIndex = i === current ? 0 : -1;
      slides[i].hidden = i !== current;
    });
    if (position) position.textContent = String(current + 1).padStart(2, '0');
    requestAnimationFrame(syncNewsListHeight);
    if (moveFocus) tabs[current].focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectNews(index));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowDown') next = index + 1;
      if (event.key === 'ArrowUp') next = index - 1;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectNews(next, true);
    });
  });

  gallery.querySelectorAll('[data-news-step]').forEach((button) => {
    button.addEventListener('click', () => selectNews(current + Number(button.dataset.newsStep)));
  });
});