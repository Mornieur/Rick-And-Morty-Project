'use client';

import { useRouter } from 'next/navigation';
import * as S from '../styles/error/styles';
import Error404 from '../../public/error404.png';
import { useEffect, useState } from 'react';
import { Galaxy } from '@/models/Galaxy';
import { StarsShip } from '@/models/Starship';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Metadata } from 'next';
import { RickModel } from '@/models/RickModel';

export const metadata: Metadata = {
  title: 'Página 404',
  description: 'Página não encontrada',
};

export default function NotFound() {
  const [showGalaxyOnly, setShowGalaxyOnly] = useState(false);

  useEffect(() => {
    const galaxy = new Galaxy();
    const scene = galaxy.scene;
    const camera = galaxy.camera;
    const renderer = galaxy.renderer;

    const starshipModel = new StarsShip(scene);
    starshipModel.load();

    const rickModel = new RickModel(scene);

    rickModel.load(() => {
      rickModel.adjustPositionForResponsiveness();
      new OrbitControls(camera, renderer.domElement);

      const animate = () => {
        requestAnimationFrame(animate);
        rickModel.update();
        renderer.render(scene, camera);
        starshipModel.starsMesh.rotation.x += 0.0005;
      };

      animate();
    });

    function handleResize() {
      rickModel.adjustPositionForResponsiveness();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Container>
      {!showGalaxyOnly && (
        <>
          <S.ErrorImage src={Error404.src} alt="imagem de erro" />
          <p>Page not found...</p>

          <S.HomeButton type="button" onClick={() => setShowGalaxyOnly(true)}>
            Explore the Galaxy
          </S.HomeButton>
        </>
      )}
    </S.Container>
  );
}
