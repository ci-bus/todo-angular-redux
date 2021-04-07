import { createAction, props } from '@ngrx/store'

export type validFilters = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
    '[Filters] Set filter',
    props<{ filter: validFilters }>()
);