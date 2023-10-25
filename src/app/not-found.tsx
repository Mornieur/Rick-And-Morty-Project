'use client';

import { useRouter } from 'next/navigation';
import * as S from '../styles/error/styles';
import Error404 from '../../public/error404.png';
import { useEffect } from 'react';
import { Galaxy } from '@/models/Galaxy';
import { StarsShip } from '@/models/Starship';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página 404',
  description: 'Página não encontrada',
};

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const galaxy = new Galaxy();

    const scene = galaxy.scene;
    const camera = galaxy.camera;
    const renderer = galaxy.renderer;

    const starshipModel = new StarsShip(scene);

    starshipModel.load();

    new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      starshipModel.starsMesh.rotation.x += 0.0005;
    };

    animate();
  }, []);
  return (
    <S.Container>
      <S.ErrorImage src={Error404.src} alt="imagem de erro" />
      <p>Página não encontrada...</p>

      <S.HomeButton
        type="button"
        onClick={() => {
          router.push('/');
          router.refresh();
        }}
      >
        Explore the Galaxy
      </S.HomeButton>
    </S.Container>
  );
}
