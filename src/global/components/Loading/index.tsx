'use client';

import * as S from './styles';
import { motion, MotionConfig } from 'framer-motion';
import rickLoading from '../../../../public/rick-loading.png';
import Image from 'next/image';

interface ILoading {
  [key: string]: any;
  label?: string;
  background?: string;
}

export const Loading = ({ label, background }: ILoading) => {
  return (
    <S.MainContainer>
      <S.Container background={background}>
        <S.LoadingContainer role="loading-container">
          <MotionConfig reducedMotion="user">
            <div className="rick-container">
              <motion.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 360, 360, 0],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Image src={rickLoading} alt="logo" width={100} height={100} />
              </motion.div>
            </div>
            <article>
              <h4>{label}</h4>

              {label && (
                <section>
                  <motion.div
                    role="animated-element-1"
                    animate={{
                      x: 50,
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      ease: [0, 0.71, 0.2, 1.01],
                      duration: 0.3,
                      delay: 0.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                  >
                    .
                  </motion.div>
                  <motion.div
                    role="animated-element-2"
                    animate={{
                      x: 50,
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      ease: [0, 0.71, 0.2, 1.01],
                      duration: 0.3,
                      delay: 0.4,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                  >
                    .
                  </motion.div>
                  <motion.div
                    role="animated-element-3"
                    animate={{
                      x: 50,
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      ease: [0, 0.71, 0.2, 1.01],
                      duration: 0.3,
                      delay: 0.3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                  >
                    .
                  </motion.div>
                </section>
              )}
            </article>
          </MotionConfig>
        </S.LoadingContainer>
      </S.Container>
    </S.MainContainer>
  );
};
