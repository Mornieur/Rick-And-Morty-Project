import * as S from './styles';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
  maxWidth: string;
  backgroundColor: string;
  children: React.ReactNode;
  closeButton: boolean;
  setCloseModal?: () => void;
}

export const Modal = ({
  maxWidth,
  backgroundColor,
  children,
  closeButton = false,
  setCloseModal,
}: ModalProps) => {
  return (
    <S.Container backgroundColor={backgroundColor} maxWidth={maxWidth}>
      {closeButton && setCloseModal && (
        <S.CloseButton onClick={setCloseModal}>
          <AiOutlineClose size={40} />
        </S.CloseButton>
      )}

      {children}
    </S.Container>
  );
};
