import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectSelectedCategory,
} from '../../redux/selectors';
import Select from 'react-select';
import {
    CategoriesWrapper,
  RadioBtnWrapper,
  RadioInput,
  RadioLabel,
  selectStyles,
} from '../Categories/Categories.styled';
import { setCategory, setVerbType } from '../../redux/filters/filtersSlice';

export const Categories = () => {
  const categories = useSelector(selectCategories);
  const selectedCategory = useSelector(selectSelectedCategory);
  const dispatch = useDispatch();

  const handleCategoryChange = selectedOption => {
    dispatch(setCategory(selectedOption));
  };

  const handleVerbTypeChange = event => {
    dispatch(setVerbType(event.target.value));
  };

  return (
    <CategoriesWrapper>
      <Select
        styles={selectStyles}
        options={categories}
        value={selectedCategory}
        onChange={handleCategoryChange}
        placeholder="Categories"
      />
      {selectedCategory.value === 'Verb' && (
        <RadioBtnWrapper>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="verbType"
              value="regular"
              onChange={handleVerbTypeChange}
            />{' '}
            Regular
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="verbType"
              value="irregular"
              onChange={handleVerbTypeChange}
            />{' '}
            Irregular
          </RadioLabel>
        </RadioBtnWrapper>
      )}
    </CategoriesWrapper>
  );
};
