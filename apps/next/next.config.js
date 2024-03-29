/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')
const { withTamagui } = require('@tamagui/next-plugin')
const { join } = require('path')

const boolVals = {
  true: true,
  false: false,
}

const disableExtraction =
  boolVals[process.env.DISABLE_EXTRACTION] ?? process.env.NODE_ENV === 'development'

const plugins = [
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: process.env.ANALYZE === 'true',
  }),
  withTamagui({
    themeBuilder: {
      input: '../../packages/ui/src/themes/theme.ts',
      output: '../../packages/ui/src/themes/theme-generated.ts',
    },
    config: '../../packages/ui/src/tamagui.config.ts',
    components: ['tamagui', '@my/ui'],
    importsWhitelist: ['constants.js', 'colors.js'],
    outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    logTimings: true,
    disableExtraction,
    shouldExtract: (path) => {
      if (path.includes(join('packages', 'app'))) {
        return true
      }
    },
    excludeReactNativeWebExports: [
      'VirtualizedList',
      'Switch',
      'ProgressBar',
      'Picker',
      'CheckBox',
      'Touchable',
      'FlatList',
      'Animated',
      'Modal',
    ],
  }),
  (nextConfig) => {
    return {
      webpack: (webpackConfig, options) => {
        webpackConfig.resolve.alias = {
          ...webpackConfig.resolve.alias,
          'react-native-svg': '@tamagui/react-native-svg',
        }
        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(webpackConfig, options)
        }
        return webpackConfig
      },
    }
  },
]

module.exports = () => {
  /** @type {import('next').NextConfig} */
  let config = {
    images: {
      remotePatterns: [
        {
          hostname: 'ui-avatars.com',
        },
        {
          hostname: 'localhost',
        },
        {
          hostname: '192.168.0.23',
        },
      ],
    },

    modularizeImports: {
      '@tamagui/lucide-icons': {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },

    transpilePackages: [
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
      'expo-image-picker',
      'expo-web-browser',
      'react-native-gesture-handler',
    ],
    /*
       A few notes before enabling app directory:

       - Usage of app directory for production apps is discouraged.
       - Solito doesn't support app dir at the moment - You'll have to remove Solito.
       - The `/app` in this starter has the same routes as the `/pages` directory. You should probably remove `/pages` after enabling this.
      */
    experimental: {
      scrollRestoration: true,
      // optimizeCss: true,
    },
    redirects: async () => [
      // we have /onboarding on native but don't have a standalone page for /onboarding on web
      // it's included as a sidebar of auth pages, so we just redirect the user there
      {
        source: '/onboarding',
        destination: '/sign-in',
        permanent: false,
      },
    ],
  }

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    }
  }

  return config
}
