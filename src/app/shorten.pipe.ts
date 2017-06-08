import { PipeTransform, Pipe } from '@angular/core'


// must also be added to the module file
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    if (value.length > 10){
      return value.substr(0,10) + '...';
    }
    return value;
  }
}
