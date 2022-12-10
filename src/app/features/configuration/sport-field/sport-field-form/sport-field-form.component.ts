import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { SportField, SportFieldType } from 'src/app/interfaces';
import { City } from 'src/app/interfaces/country.interface';
import { AuthService, SportFieldService } from 'src/app/services';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'fan-sport-field-form',
  templateUrl: './sport-field-form.component.html',
  styleUrls: ['./sport-field-form.component.scss'],
})
export class SportFieldFormComponent implements OnInit, OnDestroy {
  @Input() sportField: SportField = {
    id: '',
    name: '',
    description: '',
    country: '',
    city: '',
    region: '',
    phone: '',
    phone2: '',
    email: '',
    picture: '',
    sportType: '',
    facebook: '',
    instagram: '',
    latitude: 0,
    longitude: 0,
    owner: '',
  };

  cities: string[];
  municipality: string[];

  subscriptions: Subscription[] = [];

  currentUser: User;
  sportFieldForm: FormGroup;
  sportFieldTypes: SportFieldType[];

  constructor(
    private toastController: ToastController,
    private ctrl: ModalController,
    private sportFieldService: SportFieldService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    public locationService: LocationService
  ) {
    this.subscriptions.push(
      this.authService.currentUser.subscribe(user => {
        this.currentUser = user;
      }),
      this.sportFieldService.getAllSportFieldTypes().subscribe(sfTypes => {
        this.sportFieldTypes = sfTypes;
      })
    );
  }

  public get sfControl() {
    return this.sportFieldForm.controls;
  }

  ngOnInit() {
    this.sportFieldForm = new FormGroup({
      name: new FormControl(this.sportField.name, [Validators.required, Validators.maxLength(46)]),
      description: new FormControl(this.sportField.description, Validators.required),
      country: new FormControl(this.sportField.country, Validators.required),
      city: new FormControl(this.sportField.city, Validators.required),
      region: new FormControl(this.sportField.region, Validators.required),
      phone: new FormControl(this.sportField.phone, [Validators.required, Validators.minLength(8),
        Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
      phone2: new FormControl(this.sportField.phone2, [Validators.minLength(8),
        Validators.maxLength(11), Validators.pattern('^[0-9]*$')]),
      email: new FormControl(this.sportField.email, [Validators.email]),
      picture: new FormControl(this.sportField.picture, Validators.required),
      selectedType: new FormControl(this.sportField.sportType, Validators.required),
      facebook: new FormControl(this.sportField.facebook),
      instagram: new FormControl(this.sportField.instagram)
    });

    this.cities = this.locationService.getGovernorates('Tunisia');
    this.municipality = this.locationService.getMunicipalities('Tunisia', this.sfControl.city.value);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }

  submit() {
    throw new Error('Method not implemented.');
  }

  dismissModal() {
    this.ctrl.dismiss();
  }
}
