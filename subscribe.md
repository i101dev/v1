---
layout: page
title: Subscribe
description: Get notified when Syndicate Protocol launches
---

# SUBSCRIBE

<div class="subscribe-intro">

Stay informed. Get early access updates, development news, and launch notifications.

**No spam. No selling your data. Just intel.**

</div>

<div class="email-form">
  <form id="subscribe-form" class="form-container">
    <input type="email" id="email-input" placeholder="ENTER EMAIL" class="email-input" required />
    <button type="submit" id="submit-btn" class="submit-btn">SUBSCRIBE</button>
  </form>
  <p id="form-message" class="message"></p>
</div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const API_URL = 'https://api.yourdomain.com/subscribe'

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
.subscribe-intro {
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;
  font-family: 'Courier New', monospace;
}

.subscribe-intro p {
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
}

.email-form {
  max-width: 500px;
  margin: 2rem auto;
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
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: var(--vp-c-bg-soft);
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
}

.message.success {
  color: #4ade80;
}

.message.error {
  color: #f87171;
}
</style>
