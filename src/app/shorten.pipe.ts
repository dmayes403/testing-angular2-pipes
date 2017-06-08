import { PipeTransform, Pipe } from '@angular/core'


// must also be added to the module file
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number) {
    if (value.length > limit){
      return value.substr(0,limit) + '...';
    }
    return value;
  }
}
