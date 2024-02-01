<script setup>
import Image from "../../atoms/image/Image.vue"
import './footer.scss'

defineProps({
  title: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: {
    type: Object,
  },
})
</script>

<template>
  <footer>
    <div class="wrapper-footer-image">
      <Image class="footer-image" :alt="image.alt" :url="image.url"/>
    </div>
    <section class="container footer-wrapper d-flex flex-column align-items-center">
      <h2 class="footer-title title-section">{{ title }}</h2>
      <div class="footer-contact d-flex flex-column align-items-center">
        <p class="footer-contact-emmail">{{ email }}</p>
        <p class="footer-contact-phone">{{ phone }}</p>
      </div>
      <div class="footer-social d-flex justify-content-around w-100">
        <a href="https://www.linkedin.com/in/danaheimann/" class="p-3" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin" size="2x"/>
        </a>
        <a href="https://flickr.com/photos/danaheimann/" class="p-3" target="_blank">
          <font-awesome-icon icon="fa-brands fa-flickr" size="2x"/>
        </a>
        <a href="https://www.instagram.com/the.memory.archive/" class="p-3" target="_blank">
          <font-awesome-icon icon="fa-brands fa-instagram" size="2x"/>
        </a>
<!--        <a href="https://dribbble.com/danaheimann" class="p-3">-->
<!--          <font-awesome-icon icon="fa-brands fa-dribbble" size="2x"/>-->
<!--        </a>-->
        <a href="https://www.behance.net/danaheimann" class="p-3" target="_blank">
          <font-awesome-icon icon="fa-brands fa-behance" size="2x"/>
        </a>
        <a href="https://github.com/danaheimann" class="p-3" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" size="2x"/>
        </a>
      </div>
            <div class="footer-logo">
              <svg width="238" height="229" viewBox="0 0 238 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M234.481 134.77C233.785 132.839 232.939 130.965 231.951 129.166C210.984 91.3561 191.75 52.321 169.467 15.275C165.078 7.9774 157.795 3.39669 149.362 2.27678C142.805 1.39526 136.137 2.63207 130.335 5.80631C127.397 7.44414 124.789 9.61139 122.643 12.1983C121.213 13.9246 120.189 16.779 118.019 13.3829C116.845 11.5514 110.829 6.00846 108.4 4.94111C99.6514 1.09622 89.9028 1.96547 81.5184 6.25913C73.2718 10.4962 67.4541 20.8058 62.1588 28.1762C45.0177 52.0501 28.0425 76.0574 9.99455 99.2561C6.49264 103.756 1.12845 109.578 2.12032 115.675C2.99478 121.06 7.46832 125.422 13.0754 125.418C20.731 125.147 25.7835 117.543 30.6821 112.509L48.7301 93.9396C52.7583 89.7955 58.8512 83.169 65.3692 85.2107C68.2031 86.0962 70.2638 88.6352 71.2961 91.4087C74.0612 98.8276 71.6767 106.707 69.199 113.827C65.5797 124.239 61.9982 134.662 58.4544 145.096C54.3817 157.075 50.1956 169.155 47.5236 181.535C46.7625 185.053 46.1512 188.812 47.3657 192.188C50.0094 199.551 60.507 199.106 64.7052 193.543C68.4986 188.517 69.9237 180.799 71.9277 174.925C76.4417 161.68 80.2148 148.124 86.1337 135.405C88.6558 129.979 91.6274 124.181 95.7933 119.823C102.408 112.905 107.08 118.873 107.396 126.797C107.993 141.713 108.486 156.629 108.878 171.545C109.258 185.796 108.356 200.578 109.748 214.748C110.384 221.173 113.679 226.877 120.764 226.999C129.922 227.128 131.958 218.241 132.015 210.762C132.128 195.916 133.088 181.098 133.711 166.289C134.201 154.589 133.93 143.163 133.557 131.487C133.411 126.854 134.282 119.386 137.747 115.861C146.897 106.562 153.459 130.153 155.253 135.17C159.755 147.756 164.333 160.322 169.22 172.77C172.151 180.245 174.649 190.155 181.333 195.289C188.017 200.424 194.268 193.3 194.288 186.625C194.288 183.274 193.284 180.015 192.264 176.817C187.967 163.117 183.673 149.414 179.382 135.708C176.483 126.461 168.09 109.978 177.88 102.042C181.333 99.248 186.612 99.6685 190.381 102.042C195.446 105.215 197.915 110.989 200.907 115.913C204.551 121.949 208.239 127.978 212.243 133.804C216.749 140.381 220.744 151.924 230.303 149.749C237.489 148.083 236.61 140.681 234.481 134.77Z" fill="#C2A0AC" stroke="#602941" stroke-width="4" stroke-miterlimit="10"/>
                <path d="M57.7939 66.1198C62.3613 60.7147 67.44 55.762 72.9594 51.3306C91.89 36.141 124.703 20.8181 162.981 51.4155C168.508 55.8654 173.672 60.7486 178.421 66.0188C167.742 78.6369 117.784 132.025 57.7939 66.1198Z" fill="white" stroke="#602941" stroke-width="4" stroke-miterlimit="10"/>
                <path d="M146.586 59.7372C144.965 52.4612 140.614 46.082 134.427 41.9116C128.241 37.7412 120.69 36.0967 113.326 37.3163C105.963 38.5359 99.3473 42.5268 94.8403 48.4683C90.3332 54.4098 88.2773 61.8502 89.0953 69.2592C89.9133 76.6682 93.543 83.4825 99.238 88.3007C104.933 93.1189 112.26 95.5747 119.713 95.1629C127.165 94.7511 134.177 91.5032 139.305 86.087C144.432 80.6708 147.287 73.4982 147.282 66.0443C147.285 63.9226 147.052 61.8072 146.586 59.7372Z" fill="#D9FCC6" stroke="#602941" stroke-width="4" stroke-miterlimit="10"/>
                <path d="M129.289 66.6368C129.285 69.2174 128.386 71.7169 126.745 73.71C125.103 75.703 122.821 77.0662 120.286 77.5676C117.751 78.069 115.121 77.6775 112.843 76.4598C110.564 75.2421 108.779 73.2734 107.791 70.889C106.803 68.5046 106.672 65.8519 107.423 63.3824C108.173 60.913 109.757 58.7795 111.905 57.3452C114.053 55.9109 116.632 55.2645 119.204 55.516C121.776 55.7676 124.181 56.9014 126.01 58.7247C127.051 59.7629 127.877 60.9963 128.439 62.3541C129.002 63.7119 129.291 65.1673 129.289 66.6368Z" fill="#602941"/>
                <path d="M119.324 33.7599V20.2766" stroke="#602941" stroke-width="4" stroke-miterlimit="10"/>
                <path d="M178.585 65.7398L188.131 56.2064" stroke="#602941" stroke-width="4" stroke-miterlimit="10"/>
                <path d="M57.6399 65.7438L48.0815 56.2226" stroke="#602941" stroke-width="4" stroke-miterlimit="10"/>
                <path d="M82.8139 44.6958L77.061 32.498" stroke="#602941" stroke-width="4" stroke-miterlimit="10"/>
                <path d="M152.464 43.0143L158.363 30.8893" stroke="#602941" stroke-width="4" stroke-miterlimit="10"/>
              </svg>
            </div>
      <div class="footer-copyright">
        © DANA HEIMANN 2024
      </div>
    </section>
  </footer>
</template>


