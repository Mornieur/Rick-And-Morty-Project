'use client';

import { FC } from 'react';
import * as S from './style';

interface ISkeleton extends IStyled {}

export type IStyled = {
  height: string;
  total?: number;
  variant?: IVariant;
  animation?: 'wave' | 'pulse';
  className?: string;
  width?: string;
  flexDirection?: IDirection;
  padding?: string;
};

export type IContainer = {
  flexDirection: IDirection;
  padding?: string;
};

type IDirection = 'column' | 'row';
export type IVariant = 'circular' | 'rectangular' | 'rounded';

export const Skeleton: FC<ISkeleton> = ({
  variant = 'rounded',
  animation = 'pulse',

  ...rest
}) => {
  return (
    <S.Container
      padding={rest.padding}
      className={rest.className}
      flexDirection={rest.flexDirection ?? 'column'}
      data-testid={rest.flexDirection === 'row' ? 'row-direction' : undefined}
    >
      {Array.from({ length: rest.total ?? 1 }, (_, index) => (
        <S.Cube
          key={index}
          data-test-class="skeleton-cube"
          variant={variant}
          animation={animation}
          {...rest}
          data-testid={
            variant === 'circular' && index === 0
              ? 'circular'
              : animation === 'wave' && index === 0
              ? 'wave-animation'
              : undefined
          }
        />
      ))}
    </S.Container>
  );
};
