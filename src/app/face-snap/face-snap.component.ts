import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Snap!';
  }

  onSnap() {
    if (this.buttonText == 'Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Unsnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Snap!';
    }
  }

}
