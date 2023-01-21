import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
    this.destroy$ = new Subject<boolean>();
    console.log(this.destroy$);

    interval(1000).pipe(
      //take(3),
      takeUntil(this.destroy$),
      tap(value => console.log(value))
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);

}

}
