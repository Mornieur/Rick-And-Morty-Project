import * as S from './styles';
import { ReactNode, Children, useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface CarouselProps {
  children: ReactNode;
  isInteractive?: boolean;
  hideButtonsWhenSingleSlide?: boolean;
}

const SLIDE_SCROLL = 184;

export const Carousel: React.FC<CarouselProps> = ({
  children,
  hideButtonsWhenSingleSlide,
}) => {
  const childrenArray = Children.toArray(children);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += SLIDE_SCROLL;
    }
  };

  const prevSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= SLIDE_SCROLL;
    }
  };

  return (
    <S.Container>
      {hideButtonsWhenSingleSlide ? null : (
        <S.Button aria-label="back" onClick={prevSlide}>
          <IoIosArrowBack size={40} />
        </S.Button>
      )}

      <S.Content>
        <S.DataItems ref={scrollRef}>
          {childrenArray.map((child, index) => (
            <S.Slide key={index}>{child}</S.Slide>
          ))}
        </S.DataItems>
      </S.Content>

      {hideButtonsWhenSingleSlide ? null : (
        <S.Button aria-label="forward" onClick={nextSlide}>
          <IoIosArrowForward size={40} />
        </S.Button>
      )}
    </S.Container>
  );
};
