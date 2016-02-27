# LearnNode

A Beginner tutotial fro Node.JS. Contains Descriptive code and step by step tutorial to learn Node and start building app around it.

#Install Node JS

To install Node JS head over to https://nodejs.org/en/ and follow the instructions given on that site.

#What is Node

As per Node.JS org
"Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. "
Benefit of using NodeJS is you can use JavaScript not only in browser but also on your server. It will be One Language for Client and Server.

#Hello World

To start with we will go through Hello World example first. Go to the HelloWorld folder and check out the files there.

#Tcp Connection
#Express

#Starter Grunt File
```
module.exports = function(grunt) {
  // Do grunt-related things in here
grunt.initConfig({
	watch: {
	  scripts: {
	    files: ['src/*.js'],
	    tasks: ['concat']
	  },
	  css:{
	  	files: ['dist/css/*.css'],
	  	tasks: ['concat']
	  }
},
  concat: {
    js: {
      src: ['src/*.js'],
      dest: 'build/built.js',
    },
    css: {
      src: ['dist/css/*.css'],
      dest: 'build/built.css',
    }
  },
  compass: {                  // Task
    dist: {                   // Target
      options: {              // Target options
        sassDir: 'scss',
        cssDir: 'dist/css',
        environment: 'production',
        watch :'true'
      }
    }
},
cssmin: {
  target: {
    files: {
      'dist/output.min.css': ['build/built.css']
    }
  }
},
uglify: {
    my_target: {
      options: {
        sourceMap: true,
        sourceMapName: 'dist/sourcemap.map'
      },
      files: {
        'dist/output.min.js': ['build/built.js']
      }
    }
  }
});
 
grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['compass']);
};
```
