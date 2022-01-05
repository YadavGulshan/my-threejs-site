const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

// Camera info
// What is a camera?
// A camera is a device that can be used to view a scene.
camera.position.z = 10;

renderer.setSize(window.innerWidth, window.innerHeight);

// Set the background color of the scene
// renderer.setClearColor("#000000", 1);

// document.body.appendChild(renderer.domElement);
// set this threejs object as a background of the html page
document.getElementById('left').appendChild(renderer.domElement);

// Setting up responsive canvas
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    // Since camera is a perspective camera, we need to update the camera's projection matrix
    camera.updateProjectionMatrix();
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// A circle geometry
const geometry = new THREE.CircleGeometry(1, 6);


const material = new THREE.MeshLambertMaterial({ color: '#16EFFF' });

//  Mesh info
//  What is a mesh?
//  A mesh is a 3D object that is made up of vertices, faces, and edges.
// const mesh = new THREE.Mesh(geometry, material);
var meshX = -10
for (var i = 0; i < 100; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 1.5) * 10
    mesh.position.y = (Math.random() - 0.5) * 10
    mesh.position.z = (Math.random() - 0.5) * 10


    // Random rotation
    mesh.rotation.x = Math.random() * 2 * Math.PI;
    mesh.rotation.y = Math.random() * 2 * Math.PI;
    mesh.rotation.z = Math.random() * 2 * Math.PI;

    scene.add(mesh);
    meshX += 1;
}


// Add mesh into the scene
// scene.add(mesh);
// scene.add(meshX);



// Lights with random positions 
const light = new THREE.PointLight('#16EFFF', 1, 100);
light.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10);
scene.add(light);

const light2 = new THREE.PointLight('#fffff', 1, 100);
light2.position.set(0, 0, 5);
scene.add(light2)

const light3 = new THREE.PointLight('#fffff', 1, 100);
light3.position.set(0, 5, 10);
scene.add(light3)


// Lets animate the cube
const animate = () => {
    // Request animation frame
    // This is a method that is provided by the browser
    // It will call the animate function again at the next frame
    // This is how we keep the animation running
    // The browser will call the animate function 60 times per second
    requestAnimationFrame(animate);

    // mesh.rotateX(0.1)
    // mesh.rotateY(0.1)
    // Render the scene
    renderer.render(scene, camera);

    // Bounce all the meshes in the scene
    scene.children.forEach(child => {
        child.rotation.y += 0.01;
        child.rotation.x += 0.01;
    })

}



function onMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Checks all intersection between the ray and the objects with or without the descendants. 
    // Intersections are returned sorted by distance, closest first. 
    // Intersections are of the same form as those returned by .intersectObject.
    var intersects = raycaster.intersectObjects(scene.children, true);
    for (var i = 0; i < intersects.length; i++) {
        this.tl = new TimelineMax();
        this.tl.to(intersects[i].object.scale, 1, { x: Math.floor(Math.random() * 2) - 1, ease: Expo.easeOut })
        this.tl.to(intersects[i].object.scale, .5, { x: .5, ease: Expo.easeOut })
        this.tl.to(intersects[i].object.position, .5, { x: Math.floor(Math.random() * 2) - 1, ease: Expo.easeOut })
        this.tl.to(intersects[i].object.rotation, .5, { y: Math.PI * 1, ease: Expo.easeOut }, "=-1.5")
    }

    // Rotate the camera according to the mouse position
    // camera.rotation.x = -mouse.y * Math.PI / 2;
    // camera.rotation.y = -mouse.x * Math.PI / 2;

    // change color of the cube
    mesh.material.color.set(Math.random() * 0xffffff);
}

window.addEventListener('mousemove', onMouseMove)
animate();