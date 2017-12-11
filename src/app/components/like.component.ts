import { Component, Output, Input, EventEmitter } from '@angular/core';


@Component({
    selector: 'like-component',
    templateUrl: 'like.component.html',
})
export class LikeComponent {
    @Output() likeEvent = new EventEmitter();

    @Input("liked") liked: boolean;

    public emitEvent() {
        this.likeEvent.emit("addLike");
    }

}
