import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'My best friend',
        imageUrl: './../../assets/f2.jpg',
        createdDate: new Date(),
        snaps: 1,
        location: 'Paris'
      },
      {
        title: 'My best friend',
        description: 'My best friend',
        imageUrl: './../../assets/f1.jpg',
        createdDate: new Date(),
        snaps: 3,
        location: 'Paris'
      },
      {
        title: 'Archibald',
        description: 'My best friend',
        imageUrl: './../../assets/f3.jpg',
        createdDate: new Date(),
        snaps: 6,
      }
      ];
  }
}
