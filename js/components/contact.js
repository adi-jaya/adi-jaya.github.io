export function renderContact() {
  const contactEl = document.getElementById('contact');
  const footerEl = document.getElementById('footer');

  if (contactEl) {
    contactEl.innerHTML = `
      <div class="container fade-in">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Mari berdiskusi mengenai proyek, arsitektur sistem, atau peluang kolaborasi.</p>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:2.5rem;">
          <div>
            <h3 style="font-size:1.4rem; margin-bottom:1rem;">Contact Information</h3>
            <p style="color:var(--text-secondary); margin-bottom:1.5rem; line-height:1.6;">
              Saya selalu terbuka untuk berdiskusi mengenai arsitektur perangkat lunak, konsultasi teknis, atau peluang karir dan proyek baru.
            </p>
            <div style="display:flex; flex-direction:column; gap:1.25rem;" class="mono">
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span class="badge badge-cyan" style="min-width:70px; justify-content:center;">Email</span>
                <a href="mailto:adijaya@example.com" style="color:var(--text-primary); text-decoration:none; transition:color var(--transition-fast);" onmouseover="this.style.color='var(--accent-cyan)'" onmouseout="this.style.color='var(--text-primary)'">adijaya@example.com</a>
              </div>
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span class="badge badge-cyan" style="min-width:70px; justify-content:center;">GitHub</span>
                <a href="https://github.com/adi-jaya" target="_blank" rel="noopener noreferrer" style="color:var(--text-primary); text-decoration:none; transition:color var(--transition-fast);" onmouseover="this.style.color='var(--accent-cyan)'" onmouseout="this.style.color='var(--text-primary)'">github.com/adi-jaya</a>
              </div>
              <div style="display:flex; align-items:center; gap:0.75rem;">
                <span class="badge badge-cyan" style="min-width:70px; justify-content:center;">Status</span>
                <span style="color:var(--text-secondary); font-size:0.9rem; display:inline-flex; align-items:center; gap:0.4rem;">
                  <span class="pulse-dot"></span> Open for contracts & consulting
                </span>
              </div>
            </div>
          </div>

          <div class="card">
            <form id="contact-form" novalidate>
              <div style="margin-bottom:1.25rem;">
                <label for="contact-name" style="display:block; font-size:0.9rem; font-weight:500; margin-bottom:0.4rem;">Nama Lengkap</label>
                <input type="text" id="contact-name" required placeholder="Nama Anda" style="width:100%; background:var(--bg-main); color:var(--text-primary); border:1px solid var(--border-color); padding:0.75rem 1rem; border-radius:var(--radius-sm); font-family:inherit; transition:border-color var(--transition-fast); outline:none;" onfocus="this.style.borderColor='var(--accent-cyan)'" onblur="this.style.borderColor='var(--border-color)'">
              </div>
              <div style="margin-bottom:1.25rem;">
                <label for="contact-email" style="display:block; font-size:0.9rem; font-weight:500; margin-bottom:0.4rem;">Alamat Email</label>
                <input type="email" id="contact-email" required placeholder="email@domain.com" style="width:100%; background:var(--bg-main); color:var(--text-primary); border:1px solid var(--border-color); padding:0.75rem 1rem; border-radius:var(--radius-sm); font-family:inherit; transition:border-color var(--transition-fast); outline:none;" onfocus="this.style.borderColor='var(--accent-cyan)'" onblur="this.style.borderColor='var(--border-color)'">
              </div>
              <div style="margin-bottom:1.5rem;">
                <label for="contact-message" style="display:block; font-size:0.9rem; font-weight:500; margin-bottom:0.4rem;">Pesan</label>
                <textarea id="contact-message" required rows="4" placeholder="Tuliskan pesan Anda di sini..." style="width:100%; background:var(--bg-main); color:var(--text-primary); border:1px solid var(--border-color); padding:0.75rem 1rem; border-radius:var(--radius-sm); font-family:inherit; resize:vertical; transition:border-color var(--transition-fast); outline:none;" onfocus="this.style.borderColor='var(--accent-cyan)'" onblur="this.style.borderColor='var(--border-color)'"></textarea>
              </div>

              <div id="contact-feedback" style="display:none; margin-bottom:1.25rem; padding:0.75rem 1rem; border-radius:var(--radius-sm); font-size:0.875rem;"></div>

              <button type="submit" id="contact-submit" class="btn btn-primary" style="width:100%; justify-content:center;">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    `;

    const formEl = document.getElementById('contact-form');
    const feedbackEl = document.getElementById('contact-feedback');
    const submitBtn = document.getElementById('contact-submit');

    if (formEl) {
      formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameVal = document.getElementById('contact-name').value.trim();
        const emailVal = document.getElementById('contact-email').value.trim();
        const messageVal = document.getElementById('contact-message').value.trim();

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nameVal) {
          showFeedback('Harap masukkan nama Anda.', 'error');
          return;
        }

        if (!emailVal || !emailRegex.test(emailVal)) {
          showFeedback('Harap masukkan alamat email yang valid.', 'error');
          return;
        }

        if (!messageVal) {
          showFeedback('Harap tuliskan pesan Anda.', 'error');
          return;
        }

        // Processing / interactive feedback
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.innerHTML = '<span>Sending...</span>';
        feedbackEl.style.display = 'none';

        setTimeout(() => {
          showFeedback('Terima kasih! Pesan Anda telah berhasil terkirim.', 'success');
          formEl.reset();
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.innerHTML = '<span>Send Message</span>';
        }, 800);
      });
    }

    function showFeedback(msg, type) {
      if (!feedbackEl) return;
      feedbackEl.style.display = 'block';
      feedbackEl.textContent = msg;
      if (type === 'error') {
        feedbackEl.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
        feedbackEl.style.border = '1px solid #ef4444';
        feedbackEl.style.color = '#f87171';
      } else {
        feedbackEl.style.backgroundColor = 'rgba(34, 197, 94, 0.15)';
        feedbackEl.style.border = '1px solid var(--status-green)';
        feedbackEl.style.color = 'var(--status-green)';
      }
    }
  }

  if (footerEl) {
    footerEl.innerHTML = `
      <div class="container" style="padding:2rem 0; text-align:center; color:var(--text-muted); font-size:0.875rem;">
        <p>© 2026 Adi Jaya. Built with Vanilla HTML/CSS/JS — Hosted on GitHub Pages.</p>
      </div>
    `;
  }
}
