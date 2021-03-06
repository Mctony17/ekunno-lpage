export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'ekunno',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Mike Ekunno - Landing Page' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    loading: {
        color: 'green',
        height: '8px'
    },

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    pwa: {
        meta: {
            title: 'Ekunno Landing Page',
            author: 'CodeMat',
        },
        manifest: {
            name: 'ME',
            short_name: 'ME',
            lang: 'en',
            description: 'Mike Ekunno site ',
            start_url: '/',
            display: 'standalone',
            theme_color: '#F1F3F1',
            background_color: '#000',
            orientation: 'portrait',
            icons: ['./static/icon.png'],
            useWebmanifestExtension: false
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}