import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { toggle, crear, edit, remove, toggleAll, deleteCompleted } from './todos.actions';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Tanos'),
    new Todo('Comprar un BMW')
];

const _todoReducer = createReducer(
    initialState,
    on(crear, (state, { text }) => [...state, new Todo(text)]),
    on(toggle, (state, { id }) => {
        return state.map( todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        });
    }),
    on(edit, (state, { id, text }) => {
        return state.map( todo => {
            if (todo.id === id) {
                return { ...todo, text }
            }
            return todo;
        });
    }),
    on(remove, (state, { id }) => {
        return state.filter(todo => todo.id !== id);
    }),
    on(toggleAll, (state, { completed }) => state.map(todo => {
        return { ...todo, completed };
    })),
    on(deleteCompleted, state => state.filter(todo => !todo.completed))
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}