import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { SportField, SportFieldType } from '../interfaces';

const SPORTFIELDS = 'sportFields';
const SPORTFIELDTYPES = 'sportFieldTypes';

@Injectable({
  providedIn: 'root'
})
export class SportFieldService {
  sportFields: Subject<SportField[]> = new Subject<SportField[]>();
  sportFieldTypes: Subject<SportField[]> = new Subject<SportField[]>();

  constructor(private firestore: AngularFirestore) { }

  getAllSportFields(queryFilter: string = '') {
    if (queryFilter) {
      return this.firestore.collection<SportField>(
        SPORTFIELDS, ref => ref.where('name', '==', queryFilter))
        .valueChanges({ idField: 'id' });
    } else {
      return this.firestore.collection<SportField>(SPORTFIELDS).valueChanges();
    }
  }

  addSportField(sportField: SportField) {
    const sportFieldObject = { ...sportField };
    this.firestore.collection(SPORTFIELDS).add(sportFieldObject);
  }

  getSportfield(id: string) {
    return this.firestore.collection<SportField>(SPORTFIELDS).doc(id).valueChanges();
  }

  updateSportField(id: string, sportField: SportField) {
    const sportFieldObject = { ...sportField };
    this.firestore.doc(SPORTFIELDS + '/' + id).update(sportFieldObject);
  }

  deleteSportField(id: string) {
    this.firestore.doc(SPORTFIELDS + '/' + id).delete();
  }

  getAllSportFieldTypes() {
    return this.firestore.collection<SportFieldType>(SPORTFIELDTYPES).valueChanges({ idField: 'id' });
  }

  getSportFieldType(id: string) {
    return this.firestore.collection<SportFieldType>(SPORTFIELDTYPES).doc(id).valueChanges();
  }

  deleteSportFieldType(id: string) {
    this.firestore.doc(SPORTFIELDTYPES + '/' + id).delete();
  }

  addSportFieldType(sportType: SportFieldType) {
    const sportFieldTypeObject = { ...sportType};
    this.firestore.collection(SPORTFIELDTYPES).add(sportFieldTypeObject);
  }

  updateSportFieldType(id: string, sportType: SportFieldType) {
    const sportFieldTypeObject = { ...sportType };
    this.firestore.doc(SPORTFIELDTYPES + '/' + id).update(sportFieldTypeObject);
  }
}

