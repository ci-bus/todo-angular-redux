import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Create todo',
    props<{ text: string }>()
);


export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{ id: number }>()
);

export const remove = createAction(
    '[TODO] Delete todo',
    props<{ id: number }>()
);

export const edit = createAction(
    '[TODO] Edit todo',
    props<{ id: number, text: string }>()
);

export const toggleAll = createAction(
    '[TODO] Toggle all',
    props<{ completed: boolean }>()
);

export const deleteCompleted = createAction(
    '[TODO] Delete completed'
);


