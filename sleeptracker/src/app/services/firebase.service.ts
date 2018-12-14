import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { SleepData } from '../data/sleep-data';
import { Observable } from 'rxjs';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  overnightData: Observable<any[]>;
  ratingsData: Observable<any[]>;
  overnightLog:AngularFirestoreCollection;
  ratingsLog:AngularFirestoreCollection;
  overnightDataString:string;
  ratingsDataString:string;

  constructor(db:AngularFirestore) {
    this.overnightData = db.collection('overnight').valueChanges();
    this.ratingsData = db.collection('ratings').valueChanges();
    this.overnightLog = db.collection('overnight');
    this.ratingsLog = db.collection('ratings');
  }

  addOvernightSleepLog(sleepLog:OvernightSleepData[]) {
    //TODO: implement this function to add sleep logs
    this.overnightLog.add(this.toOvernightObject(sleepLog)).then((reference) => {
      console.log("Reference added to data, kind of like a URL");
      console.log(reference);
    })
  }

  addRatingsSleepLog(sleepLog:StanfordSleepinessData[]) {
    //TODO: implement this function to add sleep logs
    this.ratingsLog.add(this.toRatingsObject(sleepLog)).then((reference) => {
      console.log("Reference added to data, kind of like a URL");
      console.log(reference);
    })
  }

  getOvernightSleepLogs() {
    //TODO: implement this function to retrieve sleep logs
    return this.fromOvernightObject(this.overnightLog);
  }
  getRatingsSleepLogs() {
    //TODO: implement this function to retrieve sleep logs
    return this.fromRatingsObject(this.ratingsLog);
  }


  toOvernightObject(data:OvernightSleepData[]):{} {
    var strObject = JSON.stringify(data)
    return {strObject};
  }
  toRatingsObject(data:StanfordSleepinessData[]):{} {
    var strObject = JSON.stringify(data)
    return {strObject};
  }

  fromOvernightObject(object:{}) {
    this.overnightDataString = object['overnightDataString'];
  }

  fromRatingsObject(object:{}) {
    this.ratingsDataString = object['ratingsDataString'];
  }
}
