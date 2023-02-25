module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    // proxy: "http://localhost:1412/"
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'GPI "Jalan Suci"';
      return args;
    });
  }
}