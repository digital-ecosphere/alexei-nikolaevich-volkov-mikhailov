(() => {
  const toggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.primary-nav');

  if (toggle && navigation) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      navigation.classList.toggle('open', !isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('open');
      }
    });
  }

})();

(() => {
  const searchInput = document.querySelector('#publication-search');
  const typeFilter = document.querySelector('#publication-filter');
  const cards = [...document.querySelectorAll('.publication-card')];
  const visibleCount = document.querySelector('#publication-visible-count');
  const emptyState = document.querySelector('#publication-empty');

  if (!searchInput || !typeFilter || !cards.length) return;

  const updatePublications = () => {
    const query = searchInput.value.trim().toLowerCase();
    const selectedType = typeFilter.value;
    let shown = 0;

    cards.forEach((card) => {
      const matchesType = selectedType === 'all' || card.dataset.kind === selectedType;
      const matchesSearch = !query || (card.dataset.search || '').includes(query);
      const show = matchesType && matchesSearch;
      card.hidden = !show;
      if (show) shown += 1;
    });

    document.querySelectorAll('.publication-year-group').forEach((group) => {
      group.hidden = !group.querySelector('.publication-card:not([hidden])');
    });

    document.querySelectorAll('[data-publication-section]').forEach((section) => {
      const kind = section.dataset.publicationSection;
      const hasVisible = !!section.querySelector('.publication-card:not([hidden])');
      section.hidden = !hasVisible;
      const heading = document.querySelector(`[data-section-heading="${kind}"]`);
      if (heading) heading.hidden = !hasVisible;
    });

    if (visibleCount) visibleCount.textContent = String(shown);
    if (emptyState) emptyState.hidden = shown !== 0;
  };

  searchInput.addEventListener('input', updatePublications);
  typeFilter.addEventListener('change', updatePublications);
})();


(() => {
  const initRecordFilter = ({ searchSelector, filterSelector, cardSelector, countSelector, emptySelector, kindKey }) => {
    const searchInput = document.querySelector(searchSelector);
    const typeFilter = document.querySelector(filterSelector);
    const cards = [...document.querySelectorAll(cardSelector)];
    const visibleCount = document.querySelector(countSelector);
    const emptyState = document.querySelector(emptySelector);

    if (!searchInput || !typeFilter || !cards.length) return;

    const updateRecords = () => {
      const query = searchInput.value.trim().toLowerCase();
      const selectedType = typeFilter.value;
      let shown = 0;

      cards.forEach((card) => {
        const cardKind = card.dataset[kindKey] || '';
        const cardTags = (card.dataset.editorTags || cardKind).split(/\s+/).filter(Boolean);
        const matchesType = selectedType === 'all' || cardKind === selectedType || cardTags.includes(selectedType);
        const matchesSearch = !query || (card.dataset.search || '').includes(query);
        const show = matchesType && matchesSearch;
        card.hidden = !show;
        if (show) shown += 1;
      });

      if (visibleCount) visibleCount.textContent = String(shown);
      if (emptyState) emptyState.hidden = shown !== 0;

      if (kindKey === 'editorKind') {
        document.querySelectorAll('[data-editor-section]').forEach((section) => {
          section.hidden = !section.querySelector('.editor-record-card:not([hidden])');
        });

        const publicationHeading = document.querySelector('[data-editor-publication-heading]');
        if (publicationHeading) {
          publicationHeading.hidden = !cards.some((card) => card.dataset.editorKind === 'publication' && !card.hidden);
        }
      }
    };

    searchInput.addEventListener('input', updateRecords);
    typeFilter.addEventListener('change', updateRecords);
  };

  initRecordFilter({
    searchSelector: '#review-search',
    filterSelector: '#review-filter',
    cardSelector: '.review-record-card',
    countSelector: '#review-visible-count',
    emptySelector: '#review-empty',
    kindKey: 'reviewKind'
  });

  initRecordFilter({
    searchSelector: '#editor-search',
    filterSelector: '#editor-filter',
    cardSelector: '.editor-record-card',
    countSelector: '#editor-visible-count',
    emptySelector: '#editor-empty',
    kindKey: 'editorKind'
  });
})();

/* BEGIN CURATED SUNGLASSES GALLERY */
(() => {
  const grid = document.querySelector('#gallery-grid');
  const searchInput = document.querySelector('#gallery-search');
  const filter = document.querySelector('#gallery-filter');
  const count = document.querySelector('#gallery-visible-count');
  const empty = document.querySelector('#gallery-empty');
  const dialog = document.querySelector('#gallery-lightbox');

  if (!grid || !searchInput || !filter) return;

  const cards = [...grid.querySelectorAll('.gallery-card')];
  const openButtons = cards.map((card) => card.querySelector('.gallery-open'));
  let activeIndex = 0;

  const visibleCards = () => cards.filter((card) => !card.hidden);

  const updateGallery = () => {
    const query = searchInput.value.trim().toLowerCase();
    const category = filter.value;
    let shown = 0;

    cards.forEach((card) => {
      const matchesCategory = category === 'all' || card.dataset.galleryCategory === category;
      const matchesQuery = !query || (card.dataset.search || '').includes(query);
      card.hidden = !(matchesCategory && matchesQuery);
      if (!card.hidden) shown += 1;
    });

    if (count) count.textContent = String(shown);
    if (empty) empty.hidden = shown !== 0;
  };

  searchInput.addEventListener('input', updateGallery);
  filter.addEventListener('change', updateGallery);

  if (!dialog || typeof dialog.showModal !== 'function') return;

  const lightboxImage = dialog.querySelector('#gallery-lightbox-image');
  const title = dialog.querySelector('#gallery-lightbox-title');
  const counter = dialog.querySelector('#gallery-lightbox-counter');
  const closeButton = dialog.querySelector('.gallery-lightbox-close');
  const previousButton = dialog.querySelector('.gallery-lightbox-prev');
  const nextButton = dialog.querySelector('.gallery-lightbox-next');

  const showImage = (index) => {
    const visible = visibleCards();
    if (!visible.length) return;
    activeIndex = (index + visible.length) % visible.length;
    const card = visible[activeIndex];
    const image = card.querySelector('img');
    const label = card.querySelector('.gallery-overlay span');
    lightboxImage.src = image.dataset.fullSrc;
    lightboxImage.alt = image.alt;
    title.textContent = label ? label.textContent : image.alt;
    counter.textContent = `${activeIndex + 1} of ${visible.length}`;
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const visible = visibleCards();
      const card = button.closest('.gallery-card');
      const index = visible.indexOf(card);
      showImage(index < 0 ? 0 : index);
      dialog.showModal();
    });
  });

  closeButton?.addEventListener('click', () => dialog.close());
  previousButton?.addEventListener('click', () => showImage(activeIndex - 1));
  nextButton?.addEventListener('click', () => showImage(activeIndex + 1));

  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showImage(activeIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showImage(activeIndex + 1);
    }
  });
})();
/* END CURATED SUNGLASSES GALLERY */

/* BEGIN SOCIAL NETWORK DIRECTORY */
(() => {
  const searchInput = document.querySelector('#social-search');
  const filter = document.querySelector('#social-filter');
  const cards = [...document.querySelectorAll('.social-card')];
  const count = document.querySelector('#social-visible-count');
  const empty = document.querySelector('#social-empty');

  if (!searchInput || !filter || !cards.length) return;

  const updateSocialProfiles = () => {
    const query = searchInput.value.trim().toLowerCase();
    const selected = filter.value;
    let shown = 0;

    cards.forEach((card) => {
      const tags = (card.dataset.socialTags || '').split(/\s+/).filter(Boolean);
      const status = card.dataset.socialStatus || '';
      const matchesFilter = selected === 'all' || selected === status || tags.includes(selected);
      const matchesSearch = !query || (card.dataset.search || '').includes(query);
      card.hidden = !(matchesFilter && matchesSearch);
      if (!card.hidden) shown += 1;
    });

    document.querySelectorAll('[data-social-section]').forEach((section) => {
      const key = section.dataset.socialSection;
      const hasVisible = !!section.querySelector('.social-card:not([hidden])');
      section.hidden = !hasVisible;
      const heading = document.querySelector(`[data-social-heading="${key}"]`);
      if (heading) heading.hidden = !hasVisible;
    });

    if (count) count.textContent = String(shown);
    if (empty) empty.hidden = shown !== 0;
  };

  searchInput.addEventListener('input', updateSocialProfiles);
  filter.addEventListener('change', updateSocialProfiles);
})();
/* END SOCIAL NETWORK DIRECTORY */
