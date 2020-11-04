// Load Grunt
module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Tasks
      sass: { // Begin Sass Plugin
        dist: {
          options: {
            sourcemap: false,
            compress: false,
            yuicompress: false,
            style: 'expanded',
          },
          files: {
            'css/style.css' : 'src/sass/main.scss'
          }
        },
      },
     

      postcss: {
        options: {
          processors: [
            require('autoprefixer')({browsers: ['last 8 versions', 'ie 9']})
          ]
        },
        src: 'css/style.css'
            
      },

      cssmin: { // Begin CSS Minify Plugin
        target: {
          files: [{
            expand: true,
            cwd: 'css',
            src: ['*.css', '!*.min.css'],
            dest: 'css',
            ext: '.min.css'
      }]
        }
      },

     
      watch: { // Compile everything into one task with Watch Plugin
        css: {
          files: '**/*.scss',
          tasks: ['sass','cssmin']
        }
      }
    });
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Register Grunt tasks
    grunt.registerTask('default', ['watch']);
  };