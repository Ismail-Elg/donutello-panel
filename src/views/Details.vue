<script setup>


</script>

<template>
    <div id="app"></div>
  </template>
  
  <script>
  import * as THREE from 'three'

  
  export default {
    name: 'ThreeJsComponent',

    mounted () {
      // Set up a new Three.js scene
      const scene = new THREE.Scene()
  
      // Set up a new Three.js camera
      const camera = new THREE.PerspectiveCamera(
        75, // field of view
        window.innerWidth / window.innerHeight, // aspect ratio
        0.1, // near clipping plane
        1000 // far clipping plane
      )
  
      // Set the position of the camera
      camera.position.z = 5
  
      // Set up a new Three.js renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true })
  
      // Set the size of the renderer
      renderer.setSize(window.innerWidth, window.innerHeight)
  
      // Add the renderer to the DOM
      document.getElementById('app').appendChild(renderer.domElement)
  
      // Set up a new Three.js cube
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
      const cube = new THREE.Mesh(geometry, material)
  
      // Add the cube to the scene
      scene.add(cube)
  
      // Animate the cube
      function animate () {
        requestAnimationFrame(animate)
  
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
  
        renderer.render(scene, camera)
      }
  
      animate()
    },
    unmounted () {
      window.location.reload()
    }
 
}

  </script>
  