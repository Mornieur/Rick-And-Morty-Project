import * as S from './styles';
import { Modal } from '../../global/components/Modal';
import { Carousel } from '../Carousel';
import { NameBox } from '@/app/consult/styles';
import { ReactNode } from 'react';

interface ModalInformationProps {
  info: string;
  nameBox: string;
  children: ReactNode;
  isModalOpen: boolean;
  onCloseModal: () => void;
}

export const ModalInformation: React.FC<ModalInformationProps> = ({
  info = '',
  nameBox = '',
  isModalOpen,
  onCloseModal,
  children,
}) => {
  return (
    <>
      <S.ModalInformation isModalOpen={isModalOpen}>
        <Modal
          setCloseModal={onCloseModal}
          closeButton
          backgroundColor="#233329"
          maxWidth="700px"
        >
          <S.EpisodeContainer>
            <NameBox>{nameBox}</NameBox>
            <S.Info>{info}</S.Info>
            <Carousel>{children}</Carousel>
          </S.EpisodeContainer>
        </Modal>
      </S.ModalInformation>
    </>
  );
};
