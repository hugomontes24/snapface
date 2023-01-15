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
    this.mySnap = new FaceSnap(
      'Archibald',
      'My best friend',
      './../../assets/f1.jpg',
      new Date(),
      6
    );
    this.myOtherSnap = new FaceSnap(
      'Three Rock Mountain',
      'Beautiful place',
      './../../assets/f2.jpg',
      new Date(),
      1
    );
    this.myLastSnap = new FaceSnap(
      'A good recipe',
      'It\'s always appreciate',
      './../../assets/f3.jpg',
      new Date(),
      3
    );

  }
}
