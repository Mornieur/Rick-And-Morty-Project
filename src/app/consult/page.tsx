'use client';

import { Modal } from '@/global/components/Modal';
import * as S from './styles';
import useProfileQuery from '@/services/GET/useProfileQuery';
import { useSearchParams } from 'next/navigation';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useState } from 'react';
import { ModalInformation } from '@/components/ModalInformation';
import { CharacterTypes, Episode } from '@/services/GET/types';
import { Loading } from '@/global/components/Loading';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Skeleton } from '@/global/components/Skeleton';

const Consult: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const { data: character, isLoading, isError } = useProfileQuery(id || '');

  const [selectedData, setSelectedData] = useState<Episode | null>(null);
  const [selectedLocationData, setSelectedLocationData] =
    useState<CharacterTypes | null>(null);

  const handleDataClick = (episode: Episode) => {
    setSelectedData(episode);
  };

  const handleLocationClick = (loc: any | null) => {
    setSelectedLocationData(loc);
  };
  return (
    <S.Container>
      <S.BackButton onClick={() => window.history.back()}>
        <MdOutlineKeyboardBackspace size={40} />
      </S.BackButton>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Loading label="No results found" />
      ) : character ? (
        <>
          {selectedData && (
            <ModalInformation
              onCloseModal={() => setSelectedData(null)}
              isModalOpen={!!selectedData}
              info="CHARACTERS"
              nameBox={`${selectedData?.name} - ${selectedData?.episode}`}
            >
              {selectedData?.characters?.map((char) => (
                <S.CharactersEpisode
                  key={char.id}
                  src={char.image}
                  alt={char.name}
                  width={170}
                  height={170}
                />
              ))}
            </ModalInformation>
          )}
          {selectedLocationData && (
            <ModalInformation
              onCloseModal={() => setSelectedLocationData(null)}
              isModalOpen={!!selectedLocationData}
              info="LOCALIZATION"
              nameBox={selectedLocationData?.name}
            >
              {selectedData?.characters?.map((char) =>
                !isLoading ? (
                  <Skeleton variant="circular" height="170" key={char.id} />
                ) : (
                  <S.CharactersEpisode
                    key={char.id}
                    src={char.image}
                    alt={char.name}
                    width={170}
                    height={170}
                  />
                )
              )}
            </ModalInformation>
          )}

          <Modal closeButton={false} backgroundColor="#8CC084" maxWidth="500px">
            <S.HeaderProfile>
              <S.CharacterImage
                src={character.image}
                alt="character image"
                width={120}
                height={120}
              />
              <S.HeaderInformation>
                <S.NameBox>{character?.name}</S.NameBox>
                <S.StatusBox>{character?.status}</S.StatusBox>
              </S.HeaderInformation>
            </S.HeaderProfile>
            <S.Information>
              <S.Title>Type:</S.Title>
              <S.Description>
                {character.type === '' ? <p>-</p> : character.type}
              </S.Description>
              <S.Title>Gender:</S.Title>
              <S.Description>
                {character.gender === '' ? <p>-</p> : character.gender}
              </S.Description>
              <S.Title>Origin:</S.Title>
              <S.Description
                onClick={() => handleLocationClick(character.origin)}
              >
                {character.origin.name === '' ? (
                  <p>-</p>
                ) : (
                  character.origin.name
                )}
              </S.Description>
              <S.Title>Dimension:</S.Title>
              <S.Description>
                {character.location.name === '' ? (
                  <p>-</p>
                ) : (
                  character.location.name
                )}
              </S.Description>
            </S.Information>
          </Modal>
          <Modal closeButton={false} backgroundColor="#8CC084" maxWidth="500px">
            <S.HeaderEpisodes>
              <S.NameBox>EPISODES</S.NameBox>
            </S.HeaderEpisodes>

            <S.Episodes>
              {character.episode.map((ep, index) => (
                <S.Description
                  onClick={() => handleDataClick(ep)}
                  key={ep.id || index}
                >
                  {ep.name}
                  <BiRightArrowAlt className="arrowIcon" size={20} />
                </S.Description>
              ))}
            </S.Episodes>
          </Modal>
          {isLoading && <Loading />}
          {isError && <Loading label="No results found" />}
        </>
      ) : null}
    </S.Container>
  );
};

export default Consult;
