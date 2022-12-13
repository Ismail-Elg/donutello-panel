<script setup>


</script>

<template>
    <div id="app"></div>
</template>
  
<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


export default {
    name: 'ThreeJsComponent',

    mounted() {
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
        camera.position.x = 0
        camera.position.y = 2
        camera.position.z = 3


        // Set up a new Three.js renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true })

        // Set the size of the renderer
        renderer.setSize(window.innerWidth, window.innerHeight)

        // Add the renderer to the DOM
        document.getElementById('app').appendChild(renderer.domElement)

        let donut = null;
        const loader = new GLTFLoader()
        loader.load(
            '../models/donut.glb',
            function (gltf) {
                donut = gltf.scene;

                const doughMaterial = new THREE.MeshStandardMaterial({
                    color: 0xE5BA73,
                    metalness: 0,
                    roughness: 1,
                });

                const cartMaterial = new THREE.MeshStandardMaterial({
                    color: 0xFFFFFF,
                    metalness: 0,
                    roughness: 1,
                });

                const glazeMaterial = new THREE.MeshStandardMaterial({
                    color: 0xFF577F,
                    metalness: 0,
                    roughness: 1,
                });

                donut.children[0].material = doughMaterial;
                donut.children[1].visible = false;
                donut.children[2].material = glazeMaterial;
                donut.children[3].material = new THREE.MeshStandardMaterial({
                    color: 0xFFFFFF,
                    metalness: 0,
                    roughness: 1,
                });
                donut.children[4].material = new THREE.MeshStandardMaterial({
                    color: 0xFF577F,
                    metalness: 0,
                    roughness: 1,
                });
                donut.children[5].material = new THREE.MeshStandardMaterial({
                    color: 0xFFFFFF,
                    metalness: 0,
                    roughness: 1,
                });
                donut.children[6].material = new THREE.MeshStandardMaterial({
                    color: 0xFFFFFF,
                    metalness: 0,
                    roughness: 1,
                });
                donut.children[7].material = new THREE.MeshStandardMaterial({
                    color: 0xFFFFFF,
                    metalness: 0,
                    roughness: 1,
                });
                donut.children[8].material = new THREE.MeshStandardMaterial({
                    color: 0xFFFFFF,
                    metalness: 0,
                    roughness: 1,
                });
                donut.children[9].material = new THREE.MeshStandardMaterial({
                    color: 0xFFFFFF,
                    metalness: 0,
                    roughness: 1,
                });


                console.log(window.location.href)
                const id = window.location.href.split('/donuts/')[1]

                const url = 'https://salmon-puffer-tie.cyclic.app/api/v1/donuts/' + id;



                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.donut)
                        if (data.donut.glaze == 0) {
                            donut.children[2].visible = false;
                        }
                        else if (data.donut.glaze == 1) {
                            donut.children[2].visible = true;
                            donut.children[2].material.color.setHex(0x3C2317);
                        }
                        else if (data.donut.glaze == 2) {
                            donut.children[2].visible = true;
                            donut.children[2].material.color.setHex(0xFF577F);

                        }
                        else if (data.donut.glaze == 3) {
                            donut.children[2].visible = true;
                            donut.children[2].material.color.setHex(0x8CE0C8);

                        }
                        else if (data.donut.glaze == 4) {
                            donut.children[2].visible = true;
                            donut.children[2].material.color.setHex(0xF23F00);
                        }

                        //the same but for pattern now
                        if (data.donut.pattern.type == 0) {
                            donut.children[5].visible = false;

                        }
                        else if (data.donut.pattern.type == 1) {
                            donut.children[5].visible = true;
                        }

                        //same for pattern color
                        if (data.donut.pattern.color == 0) {
                            donut.children[5].material.color.setHex(0x3C2317);
                        }
                        else if (data.donut.pattern.color == 1) {
                            donut.children[5].material.color.setHex(0xFF577F);
                        }
                        else if (data.donut.pattern.color == 2) {
                            donut.children[5].material.color.setHex(0x3C2317);
                        }
                        else if (data.donut.pattern.color == 3) {
                            donut.children[5].material.color.setHex(0x1f7e4d);
                        }
                        else if (data.donut.pattern.color == 4) {
                            donut.children[5].material.color.setHex(0xf7d56e);
                        }
                        else if (data.donut.pattern.color == 5) {
                            donut.children[5].material.color.setHex(0x3ab0ff);

                        }
                        else if (data.donut.pattern.color == 6) {
                            donut.children[5].material.color.setHex(0xf3f3f3);
                        }

                        //same for topping
                        if (data.donut.topping.type == 0) {
                            donut.children[3].visible = false;
                            donut.children[4].visible = false;
                            donut.children[6].visible = false;

                        }
                        else if (data.donut.topping.type == 1) {
                            donut.children[3].visible = true;
                            donut.children[4].visible = false;
                            donut.children[6].visible = false;

                        }
                        else if (data.donut.topping.type == 2) {
                            donut.children[3].visible = false;
                            donut.children[4].visible = true;
                            donut.children[6].visible = false;


                        }
                        else if (data.donut.topping.type == 3) {
                            donut.children[3].visible = false;
                            donut.children[4].visible = false;
                            donut.children[6].visible = true;


                        }
                        if (data.donut.topping.color == 0) {
                            donut.children[4].material.color.setHex(0x000000);

                        }
                        else if (data.donut.topping.color == 1) {
                            donut.children[4].material.color.setHex(0xFF577F);

                        }
                        else if (data.donut.topping.color == 2) {
                            donut.children[4].material.color.setHex(0x3C2317);

                        }
                        else if (data.donut.topping.color == 3) {
                            donut.children[4].material.color.setHex(0x1f7e4d);

                        }
                        else if (data.donut.topping.color == 4) {
                            donut.children[4].material.color.setHex(0xf7d56e);

                        }
                        else if (data.donut.topping.color == 5) {
                            donut.children[4].material.color.setHex(0x3ab0ff);

                        }
                        else if (data.donut.topping.color == 6) {
                            donut.children[4].material.color.setHex(0xf3f3f3);

                        }

                        //same for logo
                        if (data.donut.logo.type == 0) {
                            donut.children[7].visible = false;
                            donut.children[8].visible = false;
                            donut.children[9].visible = false;

                        }
                        else if (data.donut.logo.type == 1) {
                            donut.children[7].visible = true;
                            donut.children[8].visible = false;
                            donut.children[9].visible = false;

                        }
                        else if (data.donut.logo.type == 2) {
                            donut.children[7].visible = false;
                            donut.children[8].visible = true;
                            donut.children[9].visible = false;

                        }
                        else if (data.donut.logo.type == 3) {
                            donut.children[7].visible = false;
                            donut.children[8].visible = false;
                            donut.children[9].visible = true;

                        }
                    })

                scene.add(donut)
            },
            undefined,
            function (error) {
                console.error(error)
            }
        )

        const light = new THREE.DirectionalLight(0xffffff, 1)
        light.position.set(0, 0, 1)
        scene.add(light)

        //light all around
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
        scene.add(ambientLight)

        //orbt controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.05
        //auto rotate
        controls.autoRotate = true

        // Animate the cube
        function animate() {
            requestAnimationFrame(animate)


            renderer.render(scene, camera)

            if (donut) {
                donut.rotation.y += 0.001
            }
        }

        animate()
    },
    unmounted() {
        window.location.reload()
    }

}

</script>
  