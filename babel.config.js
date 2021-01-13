module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    {
      visitor: {
        Identifier: (path, state) => {
          console.log(state.file.opts.filename);
        },
      },
    },
  ],
};
