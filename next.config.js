

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      'react-native-webview$': 'react-native-web-webview',
    }
    config.module.rules.push({
      test: /postMock.html$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }
    })
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
   
    return config
  },
}
