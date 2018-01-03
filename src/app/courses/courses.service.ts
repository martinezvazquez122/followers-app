import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  getAuthors(){
    return ['author1', 'author2', 'author3', ];
  }
  constructor() { }

}
