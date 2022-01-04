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

// Raycaster to detect mouse position
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


const geometry = new THREE.BoxGeometry(1, 0.5, 1);
const material = new THREE.MeshLambertMaterial({ color: '#673AB7' });

//  Mesh info
//  What is a mesh?
//  A mesh is a 3D object that is made up of vertices, faces, and edges.
var meshX = -10;
for(var i =0;i<25;i++){
    var mesh = new THREE.Mesh(geometry, material);
    // Random position
    mesh.position.x = (Math.random() - 0.5) * 20;
    mesh.position.y = (Math.random() - 0.5) * 20;
    mesh.position.z = (Math.random() - 0.5) * 20;

    // Random rotation
    // mesh.rotation.x = Math.random() * 2 * Math.PI;
    // mesh.rotation.y = Math.random() * 2 * Math.PI;
    // mesh.rotation.z = Math.random() * 2 * Math.PI;

    scene.add(mesh);
    meshX+=1;
}
// const mesh = new THREE.Mesh(geometry, material);

// Add mesh into the scene
// Add the meshX as a 3d object into the scene
// scene.add(meshX);

// Camera info
// What is a camera?
// A camera is a device that can be used to view a scene.
camera.position.z = 5;

// Adding lights
const light = new THREE.PointLight(0xFFFFFF, 1, 1000);
light.position.set(0, 0, 0);
scene.add(light);

const light2 = new THREE.PointLight(0xFFFFFF, 2, 1000);
light.position.set(0, 0, 25);
scene.add(light2);


const light3 = new THREE.PointLight(0xFFFFFF, 3, 1000);
light.position.set(0, 0, 25);
scene.add(light3);


// Lets animate the cube
function animate() {
    // Request animation frame
    // This is a method that is provided by the browser
    // It will call the animate function again at the next frame
    // This is how we keep the animation running
    // The browser will call the animate function 60 times per second
    requestAnimationFrame(animate);


    // Render the scene
    renderer.render(scene, camera);
}
function onMouseMove(this: any, event: MouseEvent){
    event.preventDefault();

    // Update the mouse variable
    mouse.x = (event.clientX/window.innerWidth)*2-1;
    mouse.y = (event.clientY/window.innerHeight)*2+1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    for(var i =0;i<intersects.length;i++){
        // this.tl = ;
        this.tl.to(intersects[i].object.position, 1, {x:0, y:0, z:0});
    }

}
window.addEventListener('mousemove', onMouseMove);
animate();
