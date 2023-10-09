import React, { FC, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

interface Props {
  loadMore: () => void;
}

const InfiniteScroll: FC<Props> = ({ loadMore }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const target = entities[0];

      if (target.isIntersecting) {
        loadMore();
      }
    },
    [loadMore]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return <EmptyDiv ref={containerRef}></EmptyDiv>;
};

export default InfiniteScroll;

const EmptyDiv = styled.div`
  opacity: 0;
`;
