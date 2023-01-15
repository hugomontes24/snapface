import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = {
      title: 'Archibald',
      description: 'My best friend',
      imageUrl: './../../assets/f2.jpg',
      createdDate: new Date(),
      snaps: 6,
      location: 'Paris'
    };
    this.myOtherSnap = {
      title: 'Archibald',
      description: 'My best friend',
      imageUrl: './../../assets/f1.jpg',
      createdDate: new Date(),
      snaps: 6,
      location: 'Paris'
    };
    this.myLastSnap = {
      title: 'Archibald',
      description: 'My best friend',
      imageUrl: './../../assets/f3.jpg',
      createdDate: new Date(),
      snaps: 6,
    };
  }
}
