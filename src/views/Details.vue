<template>
    <div id="app">
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    name: 'app',
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        cube: null,
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // Create the camera
        this.camera = new THREE.PerspectiveCamera(
          75,
          this.$refs.canvas.clientWidth / this.$refs.canvas.clientHeight,
          0.1,
          1000
        );
  
        // Create the scene
        this.scene = new THREE.Scene();
  
      }
    }
    }
    </script>
  