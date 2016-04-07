module.exports = function (grunt) { // eslint-disable-line
  grunt.initConfig({
    babel: {
      scripts: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.js',
          dest: 'build/'
        }]
      }
    },
    clean: {
      files: ['build/**/*.js']
    },
    eslint: {
      files: ['src/**/*.js']
    },
    webpack: {
      scripts: {
        entry: './src/index.js',
        output: {
          path: 'build/',
          filename: 'bundle.js',
          libraryTarget: 'var',
          library: 'Gooz'
        },
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['es2015'],
                plugins: [
                  'add-module-exports'
                ]
              }
            }
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['eslint', 'babel', 'webpack']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['clean', 'eslint', 'babel', 'webpack']);
};
