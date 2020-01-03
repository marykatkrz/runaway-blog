// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false;
library.add(faInstagram);
library.add(faBars);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Quattrocento',
    href: 'https://fonts.googleapis.com/css?family=Dancing+Script'
  })
}
