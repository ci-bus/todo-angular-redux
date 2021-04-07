import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { deleteCompleted } from '../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

    currentFiltro: validFilters;
    filters: validFilters[] = [
        'all', 'completed', 'pending'
    ];

    pending: number = 0;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
        this.store.subscribe(allData => {
            this.currentFiltro = allData.filter;
            this.pending = allData.todos.filter(todo => !todo.completed).length;
        });
    }

    changeFilter(filter:validFilters) {
        this.store.dispatch(setFilter({ filter }));
    }

    deleteCompleted() {
        this.store.dispatch(deleteCompleted());
    }

}
