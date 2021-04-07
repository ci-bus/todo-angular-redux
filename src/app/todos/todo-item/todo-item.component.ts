import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { edit, remove, toggle } from '../todos.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

    @Input() todo: Todo;
    @ViewChild('inputEdit') inputText: ElementRef;

    checkCompleted: FormControl;
    textInput: FormControl;

    editing: boolean = false;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {

        this.checkCompleted = new FormControl(this.todo.completed);
        this.textInput = new FormControl(this.todo.text, Validators.required);

        this.checkCompleted.valueChanges.subscribe(() => {
            this.store.dispatch(toggle({
                id: this.todo.id
            }));
        });
    }

    editar() {
        this.editing = true;
        this.textInput.setValue(this.todo.text);
        setTimeout(() => this.inputText.nativeElement.select(), 1);
    }

    save() {
        this.editing = false;
        if (!this.textInput.valid) return;
        if (this.textInput.value === this.todo.text) return;

        this.store.dispatch(edit({
            id: this.todo.id,
            text: this.textInput.value
        }));
    }

    remove() {
        this.store.dispatch(remove({
            id: this.todo.id
        }));
    }

}
