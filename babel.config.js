module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '#atoms': './src/components/atoms',
          '#molecules': './src/components/molecules',
          '#organisms': './src/components/organisms',
          '#templates': './src/components/templates',
          '#screens': './src/screens',
          '#navigators': './src/navigators',
          '#slices': './src/redux/slices',
          '#icons': './src/assets/icons',
          '#constants': './src/constants',
          '#redux': './src/redux',
          '#hooks': './src/hooks',
          '#utils': './src/utils',
        },
        extensions: [".js", ".jsx", ".es", ".es6", ".mjs", ".ts", ".tsx"]
      },
    ],
  ],
};
