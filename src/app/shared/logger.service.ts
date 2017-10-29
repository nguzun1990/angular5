import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    history: Array<string> = [];

    public test = null;

    log(message: string) {
        this.history.push(message);
        console.log(message + " added");
    }
}