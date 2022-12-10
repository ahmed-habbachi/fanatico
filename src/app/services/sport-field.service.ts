import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
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

  // CRUD for SportField
  getAllSportFields(queryFilter: string = ''): Observable<SportField[]> {
    if (queryFilter) {
      return this.firestore.collection<SportField>(
        SPORTFIELDS, ref => ref.where('name', '==', queryFilter))
        .valueChanges({ idField: 'id' });
    } else {
      return this.firestore.collection<SportField>(SPORTFIELDS).valueChanges();
    }
  }

  getSportfield(id: string): Observable<SportField> {
    return this.firestore.collection<SportField>(SPORTFIELDS).doc(id).valueChanges();
  }

  addSportField(sportField: SportField): void {
    const sportFieldObject = { ...sportField };
    this.firestore.collection(SPORTFIELDS).add(sportFieldObject);
  }

  updateSportField(id: string, sportField: SportField): void {
    const sportFieldObject = { ...sportField };
    this.firestore.doc(SPORTFIELDS + '/' + id).update(sportFieldObject);
  }

  deleteSportField(id: string): void {
    this.firestore.doc(SPORTFIELDS + '/' + id).delete();
  }

  // CRUD for SportFieldType
  getAllSportFieldTypes(): Observable<SportFieldType[]> {
    return this.firestore.collection<SportFieldType>(SPORTFIELDTYPES).valueChanges({ idField: 'id' });
  }

  getSportFieldType(id: string): Observable<SportFieldType> {
    return this.firestore.collection<SportFieldType>(SPORTFIELDTYPES).doc(id).valueChanges();
  }

  addSportFieldType(sportType: SportFieldType): void {
    const sportFieldTypeObject = { ...sportType};
    this.firestore.collection(SPORTFIELDTYPES).add(sportFieldTypeObject);
  }

  updateSportFieldType(id: string, sportType: SportFieldType): void {
    const sportFieldTypeObject = { ...sportType };
    this.firestore.doc(SPORTFIELDTYPES + '/' + id).update(sportFieldTypeObject);
  }

  deleteSportFieldType(id: string): void {
    this.firestore.doc(SPORTFIELDTYPES + '/' + id).delete();
  }
}

