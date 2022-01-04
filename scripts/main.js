"use strict";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
// Set the background color of the scene
renderer.setClearColor("#e6e6e6", 1);
// Setting up responsive canvas
window.addEventListener('resize', function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    // Since camera is a perspective camera, we need to update the camera's projection matrix
    camera.updateProjectionMatrix();
});
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//  Mesh info
//  What is a mesh?
//  A mesh is a 3D object that is made up of vertices, faces, and edges.
const cube = new THREE.Mesh(geometry, material);
// Add cube into the scene
scene.add(cube);
// Camera info
// What is a camera?
// A camera is a device that can be used to view a scene.
camera.position.z = 5;
// Lets animate the cube
function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.1;
    // //  or
    cube.rotateX(0.1);
    cube.rotateY(0.1);
    // Render the scene
    renderer.render(scene, camera);
}
animate();
