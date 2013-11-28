module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'js/*.js'
        ],
        dest: 'js/build/allexamples.js'
      }
    },
    removelogging: {
      dist: {
        src: "js/build/allexamples.js",
        dest: "js/build/allexamples.js"
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      files: { 
            src: 'js/build/allexamples.js',  // source files mask
            dest: 'js/build/',    // destination folder
            expand: true,    // allow dynamic building
            flatten: true,   // remove all unnecessary nesting
            ext: '.min.js'   // replace .js to .min.js
        }
    },
    less: {
      development: {
        files: {
          "css/style.css": "less/style.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-remove-logging');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['concat', 'removelogging', 'uglify', 'less']);
  //grunt.registerTask('default', ['uglify']);
};