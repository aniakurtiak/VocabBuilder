import styled from 'styled-components';
import { ReactComponent as SearchSvg } from '../../icons/search.svg';

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: center;
    margin-bottom: 0;
  }

`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 15px;
  padding: 12px 24px;
  width: 343px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  background: ${({ theme }) => theme.white1};

  &::placeholder {
    color: ${({ theme }) => theme.black};
  }

  &:hover {
    outline: none;
    border-color: ${({ theme }) => theme.green};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.green};
  }

  @media screen and (min-width: 768px) {
    width: 274px;
  }
`;

export const SearchIcon = styled(SearchSvg)`
  position: absolute;
  right: 24px;
  top: 14px;
`;
