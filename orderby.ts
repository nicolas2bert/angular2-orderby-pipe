import { Pipe,PipeTransform } from "angular2/core";

@Pipe({
  name: "orderby"
})
export class OrderByPipe implements PipeTransform {
  transform(array:Array<any>, args?) {
    if(array) {
      let orderByValue = args[0]
      array.sort((a: any, b: any) => {
        if(a[orderByValue] > b[orderByValue]) {
          return -1;
        } else if (a[orderByValue] < b[orderByValue]) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
    //
  }
}
