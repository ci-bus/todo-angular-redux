import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todos.actions';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

    completed: boolean = false;

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
    }

    toggleAll() {
        this.completed = !this.completed;
        this.store.dispatch(toggleAll({
            completed: this.completed
        }));
    }

}
