---
permalink: /arisbarmitzvah/
title: "You are invited to Ari's bar mitzvah!"
description: "Please RSVP using this form."
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

.rsvp-submit:hover {
  background: #dce8f5;
  color: #72acde;
}

.rsvp-submit:focus-visible {
  outline: 3px solid #8fb7df;
  outline-offset: 2px;
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

.invitation-tabs button:hover {
  background: #dce8f5;
}

.invitation-tabs button[aria-selected="true"]:hover {
  background: #dce8f5;
  color: #72acde;
}

.invitation-tabs button:focus-visible {
  outline: 3px solid #8fb7df;
  outline-offset: 2px;
}

.tab-panel[hidden] {
  display: none;
}

.markdown-body img.invitation-image {
  display: block;
  width: min(100%, 565px);
  max-width: 565px;
  height: auto;
  margin: 0 auto;
  border: 0;
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
      action="https://docs.google.com/forms/d/e/1FAIpQLSeMjFT1dZQsF2rbU44gXQ65m5xb-rm59m5NhOqRh_4zgDl1Lg/formResponse"
      method="post"
      target="rsvp-response-frame">
      <h2>RSVP to Ari's bar mitzvah</h2>

      <fieldset class="rsvp-question">
        <legend>Can you attend? <span class="required-marker" aria-hidden="true">*</span></legend>
        <label class="radio-option">
          <input type="radio" name="entry.877086558" value="Yes,  I'll be there" required>
          <span>Yes, I'll be there</span>
        </label>
        <label class="radio-option">
          <input type="radio" name="entry.877086558" value="Sorry, can't make it" required>
          <span>Sorry, can't make it</span>
        </label>
      </fieldset>

      <div class="rsvp-question">
        <label for="guest-count">How many people will attend? <span class="required-marker" aria-hidden="true">*</span></label>
        <input id="guest-count" type="number" name="entry.439420570" min="0" step="1" inputmode="numeric" required>
      </div>

      <div class="rsvp-question">
        <label for="guest-names">What are the names of the guests? <span class="required-marker" aria-hidden="true">*</span></label>
        <textarea id="guest-names" name="entry.1498135098" required></textarea>
      </div>

      <div class="rsvp-question">
        <label for="host-message">Leave a message for your hosts</label>
        <textarea id="host-message" name="entry.2606285"></textarea>
      </div>

      <button class="rsvp-submit" type="submit">Submit</button>
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
    let rsvpSubmitted = false;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const selectedPanelId = tab.getAttribute('aria-controls');

        tabs.forEach((item) => {
          const selected = item.getAttribute('aria-controls') === selectedPanelId;
          item.setAttribute('aria-selected', selected);
          item.tabIndex = selected ? 0 : -1;
        });

        tabPanels.forEach((panel) => {
          panel.hidden = panel.id !== selectedPanelId;
        });
      });
    });

    rsvpForm.addEventListener('submit', () => {
      rsvpSubmitted = true;
    });

    rsvpResponseFrame.addEventListener('load', () => {
      if (!rsvpSubmitted) return;

      rsvpForm.hidden = true;
      rsvpConfirmation.hidden = false;
      rsvpConfirmation.focus();
    });
  </script>
