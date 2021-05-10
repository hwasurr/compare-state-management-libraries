import { useAtom } from 'jotai';
import { Todo } from '../interface/todo';
import { removeTodoAtom } from './atoms/toDoAtom';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo: { id, title } }: TodoItemProps): React.ReactElement {
  const [, removeTodo] = useAtom(removeTodoAtom);

  return (
    <li key={id}>
      {`${id}. ${title}`}
      <button type="button" onClick={() => removeTodo(id)}>
        done
      </button>
    </li>
  );
}

export default TodoItem;
