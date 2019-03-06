import {PerspectiveCamera, Scene, WebGLRenderer} from "three";
import * as C from './config';

export {scene, camera, render};

var scene = new Scene();
var camera = new PerspectiveCamera(C.CAMERA_FOV, C.CAMERA_ASPECT, C.CAMERA_NEAR, C.CAMERA_FAR);
var renderer = new WebGLRenderer();
renderer.setSize(C.RENDER_WIDTH, C.RENDER_HEIGHT);
C.RENDER_ELEMENT.appendChild(renderer.domElement);

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
