import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('Angular4 SSR');

    meta.removeTag('name=description');

    meta.addTags([
      {
        name: 'author', content: 'webcyou.com'
      },
      {
        name: 'keywords', content: 'Angular 4 SSR tutorial'
      },
      {
        name: 'description', content: 'Angular4のSSR環境チュートリアルです'
      },
    ]);

  }

  ngOnInit() {
  }

}
