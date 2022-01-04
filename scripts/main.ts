// import gsap from "gsap";
// import THREE from "three";

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
})
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 0.5, 1);
const material = new THREE.MeshLambertMaterial({ color: 0xFFCC00 });

//  Mesh info
//  What is a mesh?
//  A mesh is a 3D object that is made up of vertices, faces, and edges.
const mesh = new THREE.Mesh(geometry, material);

// Add mesh into the scene
scene.add(mesh);

// Camera info
// What is a camera?
// A camera is a device that can be used to view a scene.
camera.position.z = 5;

// Adding lights
const light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(10, 10, 10);
scene.add(light);


// Lets animate the cube
function animate() {
    // Request animation frame
    // This is a method that is provided by the browser
    // It will call the animate function again at the next frame
    // This is how we keep the animation running
    // The browser will call the animate function 60 times per second

    requestAnimationFrame(animate);
    mesh.rotateX(0.1);
    mesh.rotateY(0.1);
    // Render the scene
    renderer.render(scene, camera);
}

this.t1 = TimelineMax({ repeat: -1 });
// t1.to(mesh.scale,1,{x:1.5, y:1.5, z:1.5, ease: "power1.inOut"});
// t1.duration()
animate();
