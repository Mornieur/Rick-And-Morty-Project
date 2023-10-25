import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class Galaxy {
  camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  orbitControls?: OrbitControls;
  light = new THREE.DirectionalLight(0xffffff, 1);
  lightUp = new THREE.DirectionalLight(0xffffff, 1);

  constructor() {
    this.build();
  }

  private create3dSpace = () => {
    let orbitControl = new OrbitControls(this.camera, this.renderer.domElement);

    orbitControl.enabled = false;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.light.position.set(1, 0, 1);
    this.lightUp.position.set(0, 1, 0);
  };

  private build() {
    this.scene.add(this.light);
    this.scene.add(this.lightUp);

    this.camera.position.z = 6;
    this.camera.rotation.x = 1.4;

    this.create3dSpace();

    addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }
}
