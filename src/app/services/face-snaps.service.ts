import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn:'root'
  })
export class FaceSnapsService {

  constructor(private http: HttpClient) { };

  faceSnaps: FaceSnap[] = [];
   

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get < FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found')
    } else {
      return faceSnap;
    }
  }


  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }

  addFaceSnap(formValue: {
    title: string,
    description: string,
    imageUrl: string,
    location?: string
  }): void {
    const faceSnap: FaceSnap = {
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    }
    this.faceSnaps.push(faceSnap);
  }

}
