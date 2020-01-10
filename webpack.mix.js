const mix = require('laravel-mix');

mix.webpackConfig({
   module: {
      rules: [
         {
            test: /\.pug$/,
            oneOf: [
               {
                  resourceQuery: /^\?vue/,
                  use: ['pug-plain-loader']
               },
               {
                  use: ['raw-loader', 'pug-plain-loader']
               }
            ]
         }
      ]
   }
});

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
