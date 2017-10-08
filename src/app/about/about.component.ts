import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('Angular4 SSR - aboutページ');

    meta.removeTag('name=description');

    meta.addTags([
      {
        name: 'description', content: 'aboutページのdescription'
      },
    ]);

  }

  ngOnInit() {
  }

}
