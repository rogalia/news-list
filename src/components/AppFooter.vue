<template>
  <footer class="footer">
    <div class="container container--flex container--block-mobile">
      <div>
        Copyright 2025 Test. All rights reserved.
      </div>

      <div class="footer__right">
        <div class="footer__contact">
          <Mail class="footer__contact-img" />
          <a href="mailto:info@test.com">
            info@test.com
          </a>
        </div>

        <div class="footer__contact">
          <Phone class="footer__contact-img" />
          <a href="tel:+380953908751">
            +380 95 390 87 51
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Mail from '@/assets/svg/mail.svg';
import Phone from '@/assets/svg/phone.svg';
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 32px 0;
  box-shadow: 0 -4px 10px 0 #00000012;
  font-family: Lato, sans-serif;
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  background: var(--color-background);
}

.footer__right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.footer__contact {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-primary-text);
}

@media (width <= 1200px) {
  .footer {
    font-size: 12px;
    padding: 24px 0;
  }
}

@media (width <= 768px) {
  .footer {
    text-align: center;
  }

  .footer__right {
    flex-wrap: wrap;
    gap: 10px;
    margin: 16px 0 0;
  }

  .footer__contact {
    width: 100%;
    justify-content: center;
  }
}
</style>
