import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = '3 Authors';
  authors;

  getTitle(){
    return this.title;
  }

  constructor(services: CoursesService) {
    this.authors = services.getAuthors();
  }

  ngOnInit() {
  }

}
