// 3d-cube.js

const scene = new THREE.Scene();


// camera
const canvasHeight = window.innerHeight * 0.3;
const canvasWidth = window.innerWidth * 0.3;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;


const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setClearColor(0x000000, 0); //white
// renderer.setClearColor(0x000000, 1); //black
// renderer.setClearColor(0xFF5733, 1);

renderer.setSize(canvasWidth, canvasHeight);
// renderer.setSize(600, 600);
// renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("scene-container").appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();
const edges = new THREE.EdgesGeometry(geometry);

const materials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),    // Red
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),    // Green
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),    // Blue
    new THREE.MeshBasicMaterial({ color: 0xffff00 }),    // Yellow
    new THREE.MeshBasicMaterial({ color: 0xff00ff }),    // Magenta
    new THREE.MeshBasicMaterial({ color: 0x00ffff })     // Cyan
];
const cube = new THREE.Mesh(geometry, materials);
const wireframe = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x000000 })); // Black wireframe
cube.add(wireframe); // Add the wireframe as a child of the cube
// const cube = new THREE.LineSegments(edges, material); 
scene.add(cube);

cube.scale.set(1, 1, 1);

// Set up animation
const animate = () => {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
