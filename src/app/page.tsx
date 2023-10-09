'use client';

import { NextPage } from 'next';
import useCharacterData from '@/services/GET/useCharactersQuery';
import { Card } from '@/components/Card';
import * as S from '../styles/characters/styles';
import { Search } from '@/components/SearchComponent';
import { useState } from 'react';
import RickAndMortyLogo from '../../public/Rick-And-Morty-Logo.png';
import { Loading } from '@/global/components/Loading';
import InfiniteScroll from '@/components/InfiniteScroll';

const Characters: NextPage = () => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useCharacterData();

  const [characterContent, setCharacterContent] = useState({
    value: '',
  });

  const onHandleSearch = (value: string) => {
    setCharacterContent({
      ...characterContent,
      value: value,
    });
  };

  const filteredCharacters = data?.pages
    .flat()
    .filter((character) =>
      character.name
        .toLowerCase()
        .includes(characterContent.value.toLowerCase())
    );

  const showLoadingError =
    characterContent.value.length > 0 && filteredCharacters?.length === 0;

  return (
    <S.Container>
      <S.RickAndMortyLogo
        src={RickAndMortyLogo.src}
        alt="rick and morty logo"
        width={300}
        height={300}
      />
      <Search
        value={characterContent.value}
        onChange={(value) => onHandleSearch(value)}
      />
      <S.CardsContainer>
        {data?.pages
          .flat()
          .filter((character) =>
            character.name
              .toLowerCase()
              .includes(characterContent.value.toLowerCase())
          )
          .map((character) => (
            <S.CardLink key={character.id} href={`/consult?id=${character.id}`}>
              <Card {...character} />
            </S.CardLink>
          ))}
        {isLoading && <Loading />}
        {showLoadingError && <Loading label="No results found" />}
        <InfiniteScroll loadMore={() => fetchNextPage()} />
      </S.CardsContainer>
    </S.Container>
  );
};

export default Characters;
