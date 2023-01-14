import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'My best friend';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = './../../assets/f1.jpg';
    this.buttonText = 'Snap!';
  }

  onSnap() {
    if (this.buttonText == 'Snap!') {
      this.snaps++;
      this.buttonText = 'Unsnap!';
    } else {
      this.snaps--;
      this.buttonText = 'Snap!';
    }
  }

}
