---
permalink: /arisbarmitzvah/
title: "You are invited to Ari's bar mitzvah!"
description: "We look forward to receiving your response"
---

<style>
html,
body {
  min-height: 100%;
  background-color: #dce8f5;
  background-image: url("/background.png?v=blue-1");
}

body {
  min-height: 100vh;
  min-height: 100dvh;
}

.rsvp-form {
  display: block;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: clamp(1.5rem, 5vw, 3rem);
  border: 1px solid #b8c7d9;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 0.5rem 2rem rgba(11, 31, 58, 0.12);
  color: #0b1f3a;
  box-sizing: border-box;
}

.rsvp-form h2 {
  margin: 0 0 2rem;
  color: #72acde;
  font-size: clamp(1.6rem, 5vw, 2.25rem);
  line-height: 1.2;
  text-align: center;
}

.rsvp-question {
  margin: 0 0 1.75rem;
  padding: 0;
  border: 0;
}

.rsvp-question legend,
.rsvp-question label:not(.radio-option) {
  display: block;
  margin-bottom: 0.55rem;
  color: #0b1f3a;
  font-weight: 600;
}

.required-marker {
  color: #a23a3a;
}

.radio-option {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0.65rem 0;
  cursor: pointer;
}

.radio-option input {
  width: 1.1rem;
  height: 1.1rem;
  margin: 0;
  accent-color: #0b1f3a;
}

.rsvp-form input[type="number"],
.rsvp-form textarea {
  display: block;
  width: 100%;
  padding: 0.75rem 0.85rem;
  border: 1px solid #8da3ba;
  border-radius: 0.35rem;
  background: #f9fbfd;
  color: #17283d;
  box-sizing: border-box;
  font: inherit;
}

.rsvp-form textarea {
  min-height: 7rem;
  resize: vertical;
}

.rsvp-form input:focus,
.rsvp-form textarea:focus {
  outline: 3px solid #b9d3ec;
  border-color: #0b1f3a;
}

.rsvp-submit {
  display: block;
  min-width: 8rem;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  border: 1px solid #72acde;
  border-radius: 0.35rem;
  background: #72acde;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
}

.rsvp-submit:focus-visible {
  outline: 3px solid #8fb7df;
  outline-offset: 2px;
}

.rsvp-submit:disabled {
  cursor: wait;
  opacity: 0.65;
}

.rsvp-submit.is-submitting::before {
  display: inline-block;
  width: 0.9em;
  height: 0.9em;
  margin-right: 0.55rem;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: #fff;
  border-radius: 50%;
  content: "";
  vertical-align: -0.1em;
  animation: rsvp-spinner 0.75s linear infinite;
}

.rsvp-submission-status {
  margin: 0.75rem 0 0;
  color: #526b86;
  text-align: center;
}

.rsvp-bird-flight {
  position: fixed;
  top: 35vh;
  left: 0;
  z-index: 1000;
  width: clamp(8rem, 24vw, 12rem);
  aspect-ratio: 1;
  pointer-events: none;
  animation: rsvp-bird-flight 3.2s ease-in-out infinite;
}

.rsvp-bird-flight[hidden] {
  display: none;
}

.rsvp-bird-flight::before {
  position: absolute;
  inset: 25%;
  border-radius: 50%;
  background: rgba(114, 172, 222, 0.22);
  content: "";
  animation: rsvp-bird-pulse 1s ease-in-out infinite;
}

.rsvp-bird-frame {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  animation: rsvp-bird-flap 0.45s steps(1, end) infinite;
}

.rsvp-bird-frame:nth-child(2) { animation-delay: -0.3s; }
.rsvp-bird-frame:nth-child(3) { animation-delay: -0.15s; }

@keyframes rsvp-spinner {
  to {
    transform: rotate(360deg);
  }
}

@keyframes rsvp-bird-flight {
  0% { transform: translate3d(-13rem, 4vh, 0) rotate(-4deg); }
  25% { transform: translate3d(25vw, -2vh, 0) rotate(2deg); }
  50% { transform: translate3d(50vw, 2vh, 0) rotate(-2deg); }
  75% { transform: translate3d(75vw, -3vh, 0) rotate(2deg); }
  100% { transform: translate3d(calc(100vw + 13rem), 1vh, 0) rotate(-3deg); }
}

@keyframes rsvp-bird-flap {
  0%, 32% { opacity: 1; }
  33%, 100% { opacity: 0; }
}

@keyframes rsvp-bird-pulse {
  0%, 100% { opacity: 0.35; transform: scale(0.75); }
  50% { opacity: 0.8; transform: scale(1.25); }
}

@media (prefers-reduced-motion: reduce) {
  .rsvp-submit.is-submitting::before {
    animation: none;
  }

  .rsvp-bird-flight {
    top: 40vh;
    left: 50%;
    animation: none;
    transform: translateX(-50%);
  }

  .rsvp-bird-flight::before,
  .rsvp-bird-frame {
    animation: none;
  }

  .rsvp-bird-frame:nth-child(2) { opacity: 1; }
}

.rsvp-error {
  margin: 0 0 1rem;
  color: #a23a3a;
  text-align: center;
}

.rsvp-confirmation {
  max-width: 640px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  border: 1px solid #b8c7d9;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.96);
  color: #0b1f3a;
  text-align: center;
  box-sizing: border-box;
}

.rsvp-confirmation h2 {
  margin-top: 0;
}

.invitation-tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tab-panel + .invitation-tabs {
  margin-top: 1.5rem;
}

.invitation-tabs button {
  flex: 0 0 8rem;
  padding: 0.65rem 1.25rem;
  border: 1px solid #72acde;
  border-radius: 0.35rem;
  background: #fff;
  color: #72acde;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
}

.invitation-tabs button[aria-selected="true"] {
  background: #72acde;
  color: #fff;
}

.invitation-tabs button:focus-visible {
  outline: 3px solid #8fb7df;
  outline-offset: 2px;
}

.tab-panel[hidden] {
  display: none;
}

@media (max-width: 767px) {
  .tab-panel {
    touch-action: pan-y;
  }
}

@media (hover: hover) and (pointer: fine) {
  .rsvp-submit:not(:disabled):hover {
    background: #dce8f5;
    color: #72acde;
  }

  .invitation-tabs button:hover {
    background: #dce8f5;
  }

  .invitation-tabs button[aria-selected="true"]:hover {
    background: #dce8f5;
    color: #72acde;
  }
}

.markdown-body img.invitation-image {
  display: block;
  width: min(100%, 565px);
  max-width: 565px;
  height: auto;
  margin: 0 auto;
  border: 0;
}

@media (min-width: 768px) {
  .markdown-body img.invitation-image {
    width: auto;
    max-width: min(100%, 565px);
    max-height: calc(100vh - 7.5rem);
    max-height: calc(100dvh - 7.5rem);
    object-fit: contain;
  }
}
</style>

  <div class="invitation-tabs" role="tablist" aria-label="Invitation pages">
    <button id="invitation-tab" type="button" role="tab" aria-selected="true" aria-controls="invitation-panel">
      Invitation
    </button>
    <button id="rsvp-tab" type="button" role="tab" aria-selected="false" aria-controls="rsvp-panel" tabindex="-1">
      RSVP
    </button>
  </div>

  <section id="invitation-panel" class="tab-panel" role="tabpanel" aria-labelledby="invitation-tab">
    <img
      class="invitation-image"
      src="/bar-mitzvah-invitation.png"
      width="1054"
      height="1492"
      alt="Invitation to Ari's bar mitzvah">
  </section>

  <section id="rsvp-panel" class="tab-panel" role="tabpanel" aria-labelledby="rsvp-tab" hidden>
    <form
      id="rsvp-form"
      class="rsvp-form"
      action="https://script.google.com/macros/s/AKfycbyVmAYGAu6Wr3tbgkmXmgNlRjU_TaUYdrW-ZJPViwaNaqM40fPieA21tfIakd3AFumQ/exec"
      method="post"
      target="rsvp-response-frame">
      <h2>RSVP to Ari's bar mitzvah</h2>

      <fieldset class="rsvp-question">
        <legend>Can you attend? <span class="required-marker" aria-hidden="true">*</span></legend>
        <label class="radio-option">
          <input type="radio" name="attendance" value="Yes" required>
          <span>Yes, I'll be there</span>
        </label>
        <label class="radio-option">
          <input type="radio" name="attendance" value="No" required>
          <span>No, can't make it</span>
        </label>
      </fieldset>

      <div id="attendance-details" hidden>
        <div class="rsvp-question">
          <label for="guest-count">How many people will attend Shabbat lunch? <span class="required-marker" aria-hidden="true">*</span></label>
          <input id="guest-count" type="number" name="guestCount" min="0" step="1" inputmode="numeric">
        </div>

        <div class="rsvp-question">
          <label for="guest-names">What are the names of the guests? <span class="required-marker" aria-hidden="true">*</span></label>
          <textarea id="guest-names" name="guestNames"></textarea>
        </div>

      </div>

      <div class="rsvp-question">
        <label for="host-message">Leave a message for your hosts</label>
        <textarea id="host-message" name="message"></textarea>
      </div>

      <p id="rsvp-error" class="rsvp-error" role="alert" tabindex="-1" hidden>
        We couldn't submit your RSVP. Please try again.
      </p>
      <button class="rsvp-submit" type="submit">Submit</button>
      <p id="rsvp-submission-status" class="rsvp-submission-status" role="status" aria-live="polite" hidden>
        Please wait while we save your RSVP.
      </p>
      <div id="rsvp-bird-flight" class="rsvp-bird-flight" aria-hidden="true" hidden>
        <img class="rsvp-bird-frame" src="/rsvp-bird-wings-up.png" alt="">
        <img class="rsvp-bird-frame" src="/rsvp-bird-wings-out.png" alt="">
        <img class="rsvp-bird-frame" src="/rsvp-bird-wings-down.png" alt="">
      </div>
    </form>

    <div id="rsvp-confirmation" class="rsvp-confirmation" role="status" tabindex="-1" hidden>
      <h2>Thank you!</h2>
      <p>Your RSVP has been submitted.</p>
    </div>

    <iframe id="rsvp-response-frame" name="rsvp-response-frame" title="RSVP submission response" hidden></iframe>
  </section>

  <div class="invitation-tabs" role="tablist" aria-label="Invitation pages">
    <button type="button" role="tab" aria-selected="true" aria-controls="invitation-panel">
      Invitation
    </button>
    <button type="button" role="tab" aria-selected="false" aria-controls="rsvp-panel" tabindex="-1">
      RSVP
    </button>
  </div>

  <script>
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    const rsvpForm = document.getElementById('rsvp-form');
    const rsvpConfirmation = document.getElementById('rsvp-confirmation');
    const rsvpResponseFrame = document.getElementById('rsvp-response-frame');
    const rsvpSubmitButton = rsvpForm.querySelector('.rsvp-submit');
    const rsvpError = document.getElementById('rsvp-error');
    const rsvpSubmissionStatus = document.getElementById('rsvp-submission-status');
    const rsvpBirdFlight = document.getElementById('rsvp-bird-flight');
    const attendanceOptions = rsvpForm.querySelectorAll('input[name="attendance"]');
    const attendanceDetails = document.getElementById('attendance-details');
    const guestCount = document.getElementById('guest-count');
    const guestNames = document.getElementById('guest-names');
    let rsvpSubmitted = false;
    let rsvpSubmissionTimeout;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartedOnControl = false;

    const selectPanel = (selectedPanelId) => {
      tabs.forEach((item) => {
        const selected = item.getAttribute('aria-controls') === selectedPanelId;
        item.setAttribute('aria-selected', selected);
        item.tabIndex = selected ? 0 : -1;
      });

      tabPanels.forEach((panel) => {
        panel.hidden = panel.id !== selectedPanelId;
      });

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        selectPanel(tab.getAttribute('aria-controls'));
      });
    });

    tabPanels.forEach((panel) => {
      panel.addEventListener('touchstart', (event) => {
        if (event.touches.length !== 1) return;

        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchStartedOnControl = Boolean(event.target.closest('input, textarea, button, select, a'));
      }, { passive: true });

      panel.addEventListener('touchend', (event) => {
        if (touchStartedOnControl
          || !window.matchMedia('(max-width: 767px)').matches
          || event.changedTouches.length !== 1) return;

        const horizontalDistance = event.changedTouches[0].clientX - touchStartX;
        const verticalDistance = event.changedTouches[0].clientY - touchStartY;
        const isHorizontalSwipe = Math.abs(horizontalDistance) >= 60
          && Math.abs(horizontalDistance) > Math.abs(verticalDistance) * 1.5;

        if (!isHorizontalSwipe) return;

        selectPanel(horizontalDistance < 0 ? 'rsvp-panel' : 'invitation-panel');
      }, { passive: true });
    });

    const showSubmissionError = () => {
      rsvpSubmitted = false;
      rsvpSubmitButton.disabled = false;
      rsvpSubmitButton.classList.remove('is-submitting');
      rsvpSubmitButton.textContent = 'Submit';
      rsvpForm.setAttribute('aria-busy', 'false');
      rsvpSubmissionStatus.hidden = true;
      rsvpBirdFlight.hidden = true;
      rsvpError.hidden = false;
      rsvpError.focus();
    };

    const updateAttendanceDetails = () => {
      const selectedAttendance = rsvpForm.querySelector('input[name="attendance"]:checked');
      const attending = selectedAttendance && selectedAttendance.value === 'Yes';

      attendanceDetails.hidden = !attending;
      guestCount.required = attending;
      guestNames.required = attending;

      if (attending) {
        if (guestCount.value === '0') guestCount.value = '';
      } else {
        guestCount.value = '0';
        guestNames.value = '';
      }
    };

    attendanceOptions.forEach((option) => {
      option.addEventListener('change', updateAttendanceDetails);
    });
    updateAttendanceDetails();

    rsvpForm.addEventListener('submit', () => {
      rsvpSubmitted = true;
      rsvpError.hidden = true;
      rsvpSubmitButton.disabled = true;
      rsvpSubmitButton.classList.add('is-submitting');
      rsvpSubmitButton.textContent = 'Submitting RSVP…';
      rsvpForm.setAttribute('aria-busy', 'true');
      rsvpSubmissionStatus.hidden = false;
      rsvpBirdFlight.hidden = false;

      clearTimeout(rsvpSubmissionTimeout);
      rsvpSubmissionTimeout = setTimeout(showSubmissionError, 15000);
    });

    window.addEventListener('message', (event) => {
      const responseType = event.data && event.data.type;
      let responseCameFromGoogle = false;

      try {
        const responseHostname = new URL(event.origin).hostname;
        responseCameFromGoogle = responseHostname === 'script.google.com'
          || responseHostname === 'script.googleusercontent.com'
          || responseHostname.endsWith('-script.googleusercontent.com');
      } catch (error) {
        responseCameFromGoogle = false;
      }

      if (!rsvpSubmitted
        || !responseCameFromGoogle
        || !['rsvp-success', 'rsvp-error'].includes(responseType)) return;

      clearTimeout(rsvpSubmissionTimeout);

      if (responseType === 'rsvp-error') {
        showSubmissionError();
        return;
      }

      rsvpSubmitted = false;
      rsvpForm.setAttribute('aria-busy', 'false');
      rsvpSubmissionStatus.hidden = true;
      rsvpBirdFlight.hidden = true;
      rsvpForm.hidden = true;
      rsvpConfirmation.hidden = false;
      rsvpConfirmation.focus();
    });
  </script>
