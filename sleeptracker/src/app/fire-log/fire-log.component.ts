import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fire-log',
  templateUrl: './fire-log.component.html',
  styleUrls: ['./fire-log.component.scss']
})
export class FireLogComponent {
  testItems: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.testItems = db.collection('test-collection').valueChanges();
  }

  ngOnInit() {
  }

}
