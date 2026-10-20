/**
 * Monky Farm - Master Front-end Controller (Vanilla JS)
 * Complete interactive logic for Portfolio showcase, Lightbox, Color copy,
 * Custom Video Player, Typography tester, Contact validation & Scroll animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // State Management
  const state = {
    currentFilter: 'all',
    activeModalIndex: 0,
    filteredItems: [...PORTFOLIO_DATA],
    selectedService: 'Branding & Identity'
  };

  /* ==========================================================================
     01. READING PROGRESS & HEADER SCROLL
     ========================================================================== */
  const readingProgress = document.getElementById('readingProgress');
  const siteHeader = document.getElementById('siteHeader');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPos = window.scrollY;

    // Update progress bar
    if (readingProgress && totalHeight > 0) {
      const progressPercent = Math.min(100, Math.max(0, (scrollPos / totalHeight) * 100));
      readingProgress.style.width = `${progressPercent}%`;
    }

    // Header styling
    if (siteHeader) {
      if (scrollPos > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollPos > 450) {
        backToTopBtn.classList.add('is-shown');
      } else {
        backToTopBtn.classList.remove('is-shown');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     02. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = (open) => {
    const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('is-open');
    if (isOpen) {
      mobileDrawer.classList.add('is-open');
      mobileDrawerOverlay.classList.add('is-active');
      mobileToggle.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('is-open');
      mobileDrawerOverlay.classList.remove('is-active');
      mobileToggle.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }
  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', () => toggleMobileMenu(false));
  }
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  /* ==========================================================================
     03. PORTFOLIO SHOWCASE RENDERING & CATEGORY FILTERING
     ========================================================================== */
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  const renderPortfolioGrid = () => {
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';

    if (state.filteredItems.length === 0) {
      portfolioGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <p style="color: var(--c-text-tertiary); font-size: 1.1rem;">Chưa có sản phẩm nào thuộc danh mục này.</p>
        </div>
      `;
      return;
    }

    state.filteredItems.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'portfolio-card reveal-item is-revealed';
      card.dataset.id = item.id;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Xem chi tiết ${item.title}`);

      card.innerHTML = `
        <div class="card-image-wrap ${item.isSvg ? 'is-svg-wrap' : ''}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="card-hover-overlay">
            <span class="zoom-icon-pill">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
              Xem chi tiết
            </span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-meta-top">
            <span class="card-category-tag">${item.categoryLabel}</span>
            <span class="card-specs-pill">${item.tag}</span>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.desc}</p>
          <div class="card-footer">
            <span>${item.specs}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      portfolioGrid.appendChild(card);
    });
  };

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      state.currentFilter = filter;

      if (filter === 'all') {
        state.filteredItems = [...PORTFOLIO_DATA];
      } else {
        state.filteredItems = PORTFOLIO_DATA.filter(item => item.category === filter);
      }

      renderPortfolioGrid();
    });
  });

  // Initial Portfolio Render
  renderPortfolioGrid();

  /* ==========================================================================
     04. LIGHTBOX MODAL WITH FULLSCREEN ZOOM & ARROWS
     ========================================================================== */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxSpecs = document.getElementById('lightboxSpecs');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxConcept = document.getElementById('lightboxConcept');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  const openLightbox = (index) => {
    if (!state.filteredItems[index]) return;
    state.activeModalIndex = index;
    const item = state.filteredItems[index];

    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxCategory.textContent = item.categoryLabel;
    lightboxTag.textContent = item.tag;
    lightboxTitle.textContent = item.title;
    lightboxSpecs.textContent = item.specs;
    lightboxDesc.textContent = item.desc;
    lightboxConcept.textContent = item.concept;

    lightboxModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightboxModal.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  const stepLightbox = (direction) => {
    const total = state.filteredItems.length;
    if (total <= 1) return;
    state.activeModalIndex = (state.activeModalIndex + direction + total) % total;
    openLightbox(state.activeModalIndex);
  };

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', () => stepLightbox(-1));
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', () => stepLightbox(1));

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  /* ==========================================================================
     05. COLOR SWATCH LAB & COPY-TO-CLIPBOARD
     ========================================================================== */
  const colorSwatchGrid = document.getElementById('colorSwatchGrid');

  if (colorSwatchGrid && typeof BRAND_COLORS !== 'undefined') {
    colorSwatchGrid.innerHTML = '';
    BRAND_COLORS.forEach(color => {
      const swatchCard = document.createElement('div');
      swatchCard.className = 'color-swatch-card hover-lift';
      swatchCard.setAttribute('title', `Nhấp để sao chép mã màu ${color.name}`);

      swatchCard.innerHTML = `
        <div class="swatch-color-box" style="background-color: ${color.hex}; border-bottom: 1px solid rgba(0,0,0,0.06);">
          <span class="swatch-copy-hint">Copy HEX</span>
        </div>
        <div class="swatch-info">
          <h4 class="swatch-name" style="color: ${color.hex === '#FFFFFF' ? '#151D16' : color.hex};">${color.name}</h4>
          <p class="swatch-vn">${color.vietnamese} · ${color.role}</p>
          <div class="swatch-codes">
            <div class="swatch-code-row" data-copy="${color.hex}">
              <span class="code-label">HEX</span>
              <span>${color.hex}</span>
            </div>
            <div class="swatch-code-row" data-copy="${color.rgb}">
              <span class="code-label">RGB</span>
              <span>${color.rgb}</span>
            </div>
            <div class="swatch-code-row" data-copy="${color.cmyk}">
              <span class="code-label">CMYK</span>
              <span>${color.cmyk}</span>
            </div>
          </div>
        </div>
      `;

      // Copy HEX on card click
      swatchCard.addEventListener('click', () => {
        copyToClipboard(color.hex, `Đã sao chép mã màu HEX: ${color.hex}`);
      });

      // Individual code copy
      const rows = swatchCard.querySelectorAll('.swatch-code-row');
      rows.forEach(row => {
        row.addEventListener('click', (e) => {
          e.stopPropagation();
          const val = row.dataset.copy;
          const label = row.querySelector('.code-label').textContent;
          copyToClipboard(val, `Đã sao chép mã ${label}: ${val}`);
        });
      });

      colorSwatchGrid.appendChild(swatchCard);
    });
  }

  /* ==========================================================================
     06. TYPOGRAPHY INTERACTIVE TESTER
     ========================================================================== */
  const fontSizeSlider = document.getElementById('fontSizeSlider');
  const fontSizeDisplay = document.getElementById('fontSizeDisplay');
  const editableSpecimens = document.querySelectorAll('.specimen-editable-text');

  if (fontSizeSlider && fontSizeDisplay) {
    fontSizeSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      fontSizeDisplay.textContent = `${val}px`;
      editableSpecimens.forEach(el => {
        el.style.fontSize = `${val}px`;
      });
    });
  }

  /* ==========================================================================
     07. VIDEO SHOWREEL CUSTOM PLAYER
     ========================================================================== */
  const showreelVideo = document.getElementById('showreelVideo');
  const videoPlayBtn = document.getElementById('videoPlayBtn');
  const videoBigOverlay = document.getElementById('videoBigOverlay');
  const videoProgressFill = document.getElementById('videoProgressFill');
  const videoProgressBarWrap = document.getElementById('videoProgressBarWrap');
  const videoTimeDisplay = document.getElementById('videoTimeDisplay');
  const videoMuteBtn = document.getElementById('videoMuteBtn');
  const videoFullscreenBtn = document.getElementById('videoFullscreenBtn');
  const videoCinemaWrapper = document.getElementById('videoCinemaWrapper');

  const formatVideoTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const updatePlayUI = (isPlaying) => {
    if (isPlaying) {
      if (videoPlayBtn) videoPlayBtn.innerHTML = '&#10074;&#10074;';
      if (videoBigOverlay) videoBigOverlay.classList.add('is-hidden');
      if (videoCinemaWrapper) {
        videoCinemaWrapper.classList.remove('is-paused');
        videoCinemaWrapper.classList.add('is-playing');
      }
    } else {
      if (videoPlayBtn) videoPlayBtn.innerHTML = '&#9658;';
      if (videoBigOverlay) videoBigOverlay.classList.remove('is-hidden');
      if (videoCinemaWrapper) {
        videoCinemaWrapper.classList.add('is-paused');
        videoCinemaWrapper.classList.remove('is-playing');
      }
    }
  };

  const updateMuteUI = () => {
    if (!videoMuteBtn || !showreelVideo) return;
    videoMuteBtn.innerHTML = showreelVideo.muted
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
  };

  const toggleVideoPlay = () => {
    if (!showreelVideo) return;
    if (showreelVideo.paused || showreelVideo.ended) {
      const playPromise = showreelVideo.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          updatePlayUI(true);
        }).catch(err => {
          console.warn("Unmuted autoplay restricted or blocked, attempting muted:", err);
          showreelVideo.muted = true;
          updateMuteUI();
          showreelVideo.play().then(() => {
            updatePlayUI(true);
          }).catch(e => {
            console.error("Playback failed completely:", e);
          });
        });
      }
    } else {
      showreelVideo.pause();
      updatePlayUI(false);
    }
  };

  if (videoPlayBtn) {
    videoPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleVideoPlay();
    });
  }

  if (videoBigOverlay) {
    videoBigOverlay.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleVideoPlay();
    });
  }

  if (showreelVideo) {
    // Clicking video element toggles playback
    showreelVideo.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleVideoPlay();
    });

    // Native event synchronization
    showreelVideo.addEventListener('play', () => updatePlayUI(true));
    showreelVideo.addEventListener('playing', () => updatePlayUI(true));
    showreelVideo.addEventListener('pause', () => updatePlayUI(false));
    showreelVideo.addEventListener('ended', () => {
      updatePlayUI(false);
      showreelVideo.currentTime = 0;
    });

    showreelVideo.addEventListener('loadedmetadata', () => {
      if (videoTimeDisplay) {
        videoTimeDisplay.textContent = `0:00 / ${formatVideoTime(showreelVideo.duration || 50)}`;
      }
    });

    showreelVideo.addEventListener('timeupdate', () => {
      const current = showreelVideo.currentTime;
      const duration = showreelVideo.duration || 50;
      const percent = duration > 0 ? (current / duration) * 100 : 0;
      if (videoProgressFill) videoProgressFill.style.width = `${percent}%`;
      if (videoTimeDisplay) {
        videoTimeDisplay.textContent = `${formatVideoTime(current)} / ${formatVideoTime(duration)}`;
      }
    });

    if (videoProgressBarWrap) {
      videoProgressBarWrap.addEventListener('click', (e) => {
        e.stopPropagation();
        const rect = videoProgressBarWrap.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        showreelVideo.currentTime = pos * (showreelVideo.duration || 50);
      });
    }

    if (videoMuteBtn) {
      videoMuteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showreelVideo.muted = !showreelVideo.muted;
        updateMuteUI();
      });
    }

    if (videoFullscreenBtn) {
      videoFullscreenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!document.fullscreenElement) {
          if (videoCinemaWrapper && videoCinemaWrapper.requestFullscreen) {
            videoCinemaWrapper.requestFullscreen().catch(() => {
              if (showreelVideo.requestFullscreen) showreelVideo.requestFullscreen();
            });
          } else if (showreelVideo.requestFullscreen) {
            showreelVideo.requestFullscreen();
          } else if (showreelVideo.webkitEnterFullscreen) {
            showreelVideo.webkitEnterFullscreen();
          }
        } else {
          document.exitFullscreen();
        }
      });
    }
  }

  /* ==========================================================================
     08. TESTIMONIALS RENDERING
     ========================================================================== */
  const testimonialsGrid = document.getElementById('testimonialsGrid');
  if (testimonialsGrid && typeof TESTIMONIALS_DATA !== 'undefined') {
    testimonialsGrid.innerHTML = '';
    TESTIMONIALS_DATA.forEach(t => {
      const card = document.createElement('div');
      card.className = 'testimonial-card reveal-item is-revealed';
      card.innerHTML = `
        <div class="quote-mark">&ldquo;</div>
        <p class="testimonial-quote">${t.quote}</p>
        <div class="testimonial-author-block">
          <div class="author-avatar">${t.avatarText}</div>
          <div class="author-details">
            <h5>${t.author}</h5>
            <p>${t.title}</p>
            <p style="color: var(--c-primary); font-weight: 600; font-size: 0.76rem;">${t.organization}</p>
          </div>
        </div>
      `;
      testimonialsGrid.appendChild(card);
    });
  }

  /* ==========================================================================
     09. CONTACT FORM INTERACTIVE VALIDATION
     ========================================================================== */
  const contactForm = document.getElementById('contactForm');
  const servicePillBtns = document.querySelectorAll('.service-pill-btn');

  servicePillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      servicePillBtns.forEach(b => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');
      state.selectedService = btn.dataset.service;
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');

      // Simple validation
      if (!nameInput.value.trim()) {
        nameInput.classList.add('has-error');
        isValid = false;
      } else {
        nameInput.classList.remove('has-error');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('has-error');
        isValid = false;
      } else {
        emailInput.classList.remove('has-error');
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('has-error');
        isValid = false;
      } else {
        messageInput.classList.remove('has-error');
      }

      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const origText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="spin-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
          </svg>
          Đang gửi...
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
          contactForm.reset();
          showToast(`Cảm ơn ${nameInput.value}! Lời nhắn của bạn đã được gửi tới các Nhà sáng lập Monky Farm. Chúng tôi sẽ phản hồi trong 24h.`);
        }, 1200);
      }
    });

    // Clear error on input
    ['contactName', 'contactEmail', 'contactMessage'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => el.classList.remove('has-error'));
      }
    });
  }

  /* ==========================================================================
     10. CLIPBOARD & TOAST NOTIFICATION HELPERS
     ========================================================================== */
  const toastContainer = document.getElementById('toastContainer');

  const showToast = (message) => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">✓</div>
      <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Trigger reveal
    requestAnimationFrame(() => {
      toast.classList.add('is-visible');
    });

    // Auto remove after 3.5s
    setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  };

  const copyToClipboard = (text, successMsg) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  };

  const fallbackCopy = (text, successMsg) => {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(successMsg);
  };

  /* ==========================================================================
     11. INTERSECTION OBSERVER FOR SCROLL REVEAL
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-item');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // Smooth scroll for anchor navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
