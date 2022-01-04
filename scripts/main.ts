import * as Three from 'three';
var scene = new Three.Scene();
var camera = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new Three.WebGLRenderer();


renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new Three.BoxGeometry(1, 1, 1);
