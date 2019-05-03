import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
   * Split array into multi array
   * @param myArray : object array
   * @param chunkSize : size of chunk
   */
  chunkData(myArray: object[], chunkSize: number) {
    const results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunkSize));
    }

    return results;
  }
}
