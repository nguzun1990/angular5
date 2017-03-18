import { Component } from '@angular/core';

@Component({
    selector: 'list-component',
    template: `
    <div class="list-group">
        <a href="#" class="list-group-item">Mercedes B180</a>
        <a href="#" class="list-group-item">Mercedes B200</a>
        <a href="#" class="list-group-item">Mercedes C200</a>
        <a href="#" class="list-group-item">Mercedes E200</a>
        <a href="#" class="list-group-item">Mercedes E220</a>
        <a href="#" class="list-group-item">Mercedes S180</a>
    </div>`,
})
export class ListComponent  { }
