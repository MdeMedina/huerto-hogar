// Karma configuration
module.exports = function(config) {
  config.set({
    // Base path que será usada para resolver archivos y patrones
    basePath: '',

    // Frameworks a usar
    // Frameworks a usar
    frameworks: ['jasmine', 'webpack'],

    // Lista de archivos / patrones a cargar en el navegador
    files: [
      'src/setupTests.js',
      'src/**/*.spec.js',
      'src/**/*.test.js'
    ],

// Lista de archivos / patrones a excluir
    exclude: [
    ],

    // Preprocesar archivos antes de servirlos al navegador
    preprocessors: {
      'src/**/*.spec.js': ['webpack', 'sourcemap'],
      'src/**/*.test.js': ['webpack', 'sourcemap'],
      'src/**/*.js': ['webpack', 'sourcemap'],
      'src/**/*.jsx': ['webpack', 'sourcemap']
    },

    // Configuración de Webpack
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx']
      }
    },

    webpackMiddleware: {
      stats: 'errors-only'
    },

    // Reportes de resultados
    reporters: ['progress', 'coverage'],

    // Configuración de cobertura
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // Puerto del servidor web
    port: 9876,

    // Colores en el output
    colors: true,

    // Nivel de logging
    logLevel: config.LOG_INFO,

    // Observar cambios en archivos
    autoWatch: true,

    // Navegadores a usar
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    singleRun: false,

    // Concurrency level - cuántos navegadores ejecutar en paralelo
    concurrency: Infinity
  })
}