import { request, gql } from 'graphql-request';
import { Location } from './types';
import { useQuery } from '@tanstack/react-query';

type LocationResponse = {
  location: Location;
};

const LOCATION_DATA_QUERY = gql`
  query GetLocation($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        image
      }
      url
      created
    }
  }
`;

const useLocationQuery = (locationId: string) => {
  return useQuery<Location>(['locationData', locationId], async () => {
    const variables = {
      id: locationId,
    };
    const data = await request<LocationResponse>(
      'https://rickandmortyapi.com/graphql',
      LOCATION_DATA_QUERY,
      variables
    );
    return data.location;
  });
};

export default useLocationQuery;
