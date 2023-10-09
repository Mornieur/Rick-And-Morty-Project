import * as S from './styles';
import { TfiSearch } from 'react-icons/tfi';
import { FC } from 'react';

interface SearchProps {
  onChange: (value: string) => void;
  value: string;
}

export const Search: FC<SearchProps> = ({ onChange }) => {
  return (
    <S.Container>
      <S.SearchInput
        data-testid="search-input"
        placeholder="Search for a character..."
        onChange={(e) => onChange(e.target.value)}
      />
      <TfiSearch />
    </S.Container>
  );
};
