import {createApp} from 'vue'
import App from './App.vue'
import router from './router'


import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";


import {
    faCircleRight
} from "@fortawesome/free-regular-svg-icons";

import {
    faQuoteRight,
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";

import {
    faLinkedin,
    faTwitter,
    faInstagram,
    faDribbble,
    faBehance,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faQuoteRight,
    faQuoteLeft,
    faCircleRight,
    faLinkedin,
    faTwitter,
    faInstagram,
    faDribbble,
    faBehance,
    faGithub
);


createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
