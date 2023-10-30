import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export class SpaceShip {
  scene: THREE.Scene;
  rickMesh?: THREE.Group;
  loader: GLTFLoader;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.loader = new GLTFLoader();
  }

  update() {
    if (this.rickMesh) {
      this.rickMesh.rotation.y += 0.005;
    }
  }

  adjustPositionForResponsiveness() {
    if (!this.rickMesh) return;

    const width = window.innerWidth;
    if (width <= 768) {
      this.rickMesh.position.set(30, -100, 10);
    } else {
      this.rickMesh.position.set(80, -100, 10);
    }
  }

  load(callback: () => void) {
    this.loader.load('/space-ship.glb', (gltf) => {
      this.rickMesh = gltf.scene;

      if (this.rickMesh) {
        this.rickMesh.scale.set(5, 5, 5);
        this.rickMesh.position.set(130, -100, 10);
        this.rickMesh.rotation.y = Math.PI;
        this.rickMesh.rotation.x = Math.PI / 5;
        this.scene.add(this.rickMesh);
        callback();
      }
    });
  }
}
