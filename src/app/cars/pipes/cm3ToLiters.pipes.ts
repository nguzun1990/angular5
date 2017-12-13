import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cm3ToLiters' })
export class Cm3ToLiters implements PipeTransform {
    transform(value: number): string {
        return `${value / 1000} l`;
    }
}
