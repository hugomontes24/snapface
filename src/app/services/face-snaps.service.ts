import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn:'root'
  })
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit',
      imageUrl: '../assets/f1.jpg',
      createdDate: new Date(),
      snaps: 6,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit',
      imageUrl: '../assets/f2.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Marseille'
    },
    {
      id: 3,
      title: 'Fleurs',
      description: 'Mon meilleur ami depuis tout petit',
      imageUrl: '../assets/f3.jpg',
      createdDate: new Date(),
      snaps: 3
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
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
  

}
