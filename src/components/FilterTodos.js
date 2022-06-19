import { Select } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import todoListFilterState from '../recoil/atoms/todoListFilterState';

export default function FilterTodos() {
  const [filter, setFilter] = useRecoilState(todoListFilterState)
  const updateFilter = ({ target: { value } }) => {
    setFilter(value)
  }

  return (
    <Select value={filter} onChange={updateFilter} color="black" bg="tomato" borderColor="white">
      <option value='Show All'>All</option>
      <option value='Show Completed'>Show Completed</option>
      <option value='Show Uncompleted'>Show Uncompleted</option>
    </Select>

  )
}
