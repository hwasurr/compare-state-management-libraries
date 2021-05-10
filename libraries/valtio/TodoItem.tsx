import { Todo } from '../interface/todo';
import { _removeTodo } from './proxies/todoProxy';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo: { id, title } }: TodoItemProps): React.ReactElement {

  return (
    <li key={id}>
      {`${id}. ${title}`}
      <button type="button" onClick={() => _removeTodo(id)}>
        done
      </button>
    </li>
  );
}

export default TodoItem;
