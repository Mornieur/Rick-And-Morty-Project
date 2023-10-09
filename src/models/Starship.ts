import * as THREE from 'three';

export class StarsShip {
  starGeometry = new THREE.BufferGeometry();
  startMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
  });
  startVertices: number[] = [];
  starsMesh: THREE.Points;
  scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.starsMesh = new THREE.Points(this.starGeometry, this.startMaterial);
  }

  load() {
    for (let i = 0; i < 14000; i++) {
      const x = (Math.random() - 0.5) * 4000;
      const y = (Math.random() - 0.5) * 4000;
      const z = (Math.random() - 0.5) * 4000;

      this.startVertices.push(x, y, z);
    }

    this.starGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(this.startVertices, 3)
    );

    this.scene.add(this.starsMesh);
  }
}
