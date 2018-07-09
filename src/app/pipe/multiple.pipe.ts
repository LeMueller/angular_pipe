import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {
// 原始值，参数。 返回转换完成的值
  transform(value: any, args?: any): any {
    if(!args) {
      args = 1;
    }
    return value * args;
  }

}
