import { request, gql } from 'graphql-request';
import { CharacterTypes } from './types';
import { useQuery } from '@tanstack/react-query';

type CharacterResponse = {
  character: CharacterTypes;
};

const CHARACTER_DATA_QUERY = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      species
      status
      image
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
        }
      }
      created
    }
  }
`;

const useProfileQuery = (characterId: string) => {
  return useQuery<CharacterTypes>(['characterData', characterId], async () => {
    const variables = {
      id: characterId,
    };
    const data = await request<CharacterResponse>(
      'https://rickandmortyapi.com/graphql',
      CHARACTER_DATA_QUERY,
      variables
    );
    return data.character;
  });
};

export default useProfileQuery;
