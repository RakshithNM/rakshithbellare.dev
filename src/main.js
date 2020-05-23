// Import main css
import '~/assets/style/index.scss'

require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// Import config
import config from '../gridsome.config'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  let copyRightNotice = `\u00a9 rakshithbellare, ${ new Date().getFullYear() }. All rights reservered`;

  head.meta.push(
    {
      key: 'keywords',
      name: 'keywords',
      content: 'HTML5, CSS, Javascript, ExpressJS, API, VueJS'
    },
    {
      name: 'author',
      content: 'Rakshith Bellare'
    },
    {
      name: 'description',
      content: config.siteDescription
    },
    {
      name: 'copyright',
      content: copyRightNotice
    },
    {
      property: "og:type",
      content: 'article'
    },
    {
      property: "og:description",
      content: config.siteDescription
    },
    {
      property: "og:image",
      content: 'https://github.com/RakshithNM.png'
    },
    {
      property: "og:site_name",
      content: config.siteName
    },
    {
      name: "twitter:card",
      content: "summary"
    },
    {
      name: "twitter:creator",
      content: "@rakshithbellare"
    },
  );

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
