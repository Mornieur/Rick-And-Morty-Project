import { useInfiniteQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import { CharacterTypes } from './types';

const CHARACTER_DATA_QUERY = gql`
  query ($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        species
        status
        image
        type
        gender
        origin {
          name
          dimension
        }
        location {
          name
          dimension
        }
        episode {
          id
          name
          air_date
        }
      }
    }
  }
`;

const useCharacterData = () => {
  return useInfiniteQuery(
    ['characterData'],
    async ({ pageParam = 0 }) => {
      const data = await request(
        'https://rickandmortyapi.com/graphql',
        CHARACTER_DATA_QUERY,
        { page: pageParam }
      );
      console.log('pageParam', pageParam);
      const characterData = data as {
        characters: { results: CharacterTypes[] };
      };
      return characterData.characters.results;
    },
    {
      getNextPageParam: (_, allPagesArr) => {
        return allPagesArr.length + 1;
      },
    }
  );
};

export default useCharacterData;
