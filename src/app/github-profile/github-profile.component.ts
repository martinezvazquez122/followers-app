import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //If we are 100% sure an user has to navigate away from this page, and then come back
    //instead of an observable we can use a snapshot

    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      console.log(id);
    });

    console.log('Github Profile OnInit');
  }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    });
  }

}
