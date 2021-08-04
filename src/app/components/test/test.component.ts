import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  url: string = 'https://reqres.in/api/users?page=2';
  dataD: any[] = [];
  constructor() {}
  ngOnInit() {
    fetch(this.url).then((res) =>
      res.json().then((val) => {
        this.dataD = val.data;
        console.log(this.dataD);
      })
    );
  }
}
