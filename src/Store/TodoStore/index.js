
import { writable } from 'svelte/store';

const createStore = () => {
    const { subscribe, update, set } = writable([]);

    return {
        subscribe,
        set,

        patch: updatedTodos =>
            update(list => ({ ...list, ...updatedTodos })),

        remove: todoToRemove =>
            update(list => {
                list.splice(list.indexOf(todoToRemove), 1)
                return list;
            }),
        
        add: newTodo => update(list => ({...list, newTodo})),
    };
};

export const TodoStore = createStore();
