import { createMachine } from "xstate";
import { Todo } from "../../interface/todo";

export type TodoContext = {
  todos: Todo[];
}

export const todoMachnie = createMachine<TodoContext>({
  id: 'todolist',
  initial: Symbol('todolist'),
  states: {
    todos: {
      on: { ADD: 'asdf' }
    }
    // 상태
    // 로딩상태
    // 로딩완료상태
    // 실패상태
  }
})