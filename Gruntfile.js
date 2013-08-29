/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    compass: {                  // Task
        dist: {                   // Target
            options: {              // Target options
                require: 'susy',
                sassDir: 'sass',
                cssDir: 'stylesheets',
                environment: 'production'
            }
        },
        dev: {                    // Another target
            options: {
                require: 'susy',
                sassDir: 'sass',
                cssDir: 'stylesheets'
            }
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');


  // Default task.
  grunt.registerTask('default', ['compass:dist']);

};
