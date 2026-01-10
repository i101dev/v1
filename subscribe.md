---
layout: page
title: Subscribe
description: Get notified when Syndicate Protocol launches
---

<div class="subscribe-page">

<div class="subscribe-header">
  <h1>INTEL NETWORK</h1>
  <p class="tagline">Information is power. Get it first.</p>
</div>

<div class="subscribe-content">

<div class="subscribe-intro">
Join the network. Receive classified briefings on development progress, early access opportunities, and launch intel.
</div>

<div class="email-form">
  <form id="subscribe-form" class="form-container">
    <input type="email" id="email-input" placeholder="ENTER EMAIL" class="email-input" required />
    <button type="submit" id="submit-btn" class="submit-btn">SUBSCRIBE</button>
  </form>
  <p id="form-message" class="message"></p>
</div>

<div class="benefits">
  <div class="benefit">
    <span class="benefit-icon">📡</span>
    <span class="benefit-text">Development updates & patch notes</span>
  </div>
  <div class="benefit">
    <span class="benefit-icon">🎯</span>
    <span class="benefit-text">Early access to playtests</span>
  </div>
  <div class="benefit">
    <span class="benefit-icon">🔐</span>
    <span class="benefit-text">No spam. No selling data. Just intel.</span>
  </div>
</div>

</div>

</div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const API_URL = 'https://api.syndicateprotocol.app/subscribe'

  const form = document.getElementById('subscribe-form')
  const input = document.getElementById('email-input')
  const btn = document.getElementById('submit-btn')
  const msg = document.getElementById('form-message')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = input.value.trim()
    if (!email) return

    btn.disabled = true
    btn.textContent = 'TRANSMITTING...'
    msg.textContent = ''
    msg.className = 'message'

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        msg.textContent = 'SUBSCRIBED'
        msg.className = 'message success'
        input.value = ''
      } else {
        msg.textContent = data.error || 'FAILED'
        msg.className = 'message error'
      }
    } catch {
      msg.textContent = 'NETWORK ERROR'
      msg.className = 'message error'
    }

    btn.disabled = false
    btn.textContent = 'SUBSCRIBE'
  })
})
</script>

<style>
.subscribe-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.subscribe-header {
  text-align: center;
  margin-bottom: 3rem;
}

.subscribe-header h1 {
  font-family: 'Courier New', monospace;
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.15em;
  color: #ff6b35;
  margin-bottom: 0.5rem;
}

.subscribe-header .tagline {
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  color: var(--vp-c-text-2);
  letter-spacing: 0.05em;
}

.subscribe-content {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 2rem;
}

.subscribe-intro {
  text-align: center;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.email-form {
  margin-bottom: 2rem;
}

.form-container {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.email-input {
  flex: 1;
  min-width: 200px;
  padding: 0.75rem 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.2s;
}

.email-input:focus {
  border-color: #ff6b35;
}

.email-input::placeholder {
  color: var(--vp-c-text-3);
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #ff6b35;
  color: #000;
  border: none;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background: #ff8c5a;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.message {
  margin-top: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  min-height: 1.5rem;
  text-align: center;
}

.message.success {
  color: #4ade80;
}

.message.error {
  color: #f87171;
}

.benefits {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1.5rem;
}

.benefit {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.benefit-icon {
  font-size: 1.25rem;
}

.benefit-text {
  letter-spacing: 0.02em;
}
</style>
