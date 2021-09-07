import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountryModel } from '../../shared/models/country.model';
import { LocationModel } from '../../shared/models/location.model';
import { CodesService } from '../../shared/services/codes.service';
import { SailingService } from '../../shared/services/sailing.service';

@Component({
  selector: 'app-sailing',
  templateUrl: './sailing.component.html',
  styleUrls: ['./sailing.component.scss']
})
export class SailingComponent implements OnInit {

  // public variables
  public countries: CountryModel[] = [];
  public locations: LocationModel[] = [];
  public countryCtrl = new FormControl();
  public filteredCountries: Observable<CountryModel[]>;
  public locationCtrl = new FormControl();
  public filteredLocations: Observable<LocationModel[]>;

  constructor(
    private sailingService: SailingService,
    private codesService: CodesService,
  ) { }

  ngOnInit() {
    this.getCountriesList();
    this.getLocatinonsList();
  }

  getCountriesList(): void {
    this.codesService.getCountries()
      .subscribe((countriesList: CountryModel[]) => {
        if (countriesList) {
          this.countries = countriesList;
          this.filteredCountries = this.countryCtrl.valueChanges
            .pipe(
              startWith(''),
              map(country => country ? this._filterCountries(country) : this.countries.slice())
            );
        }
      })
  }

  private _filterCountries(value: string): CountryModel[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  getLocatinonsList(): void {
    this.codesService.getLocations()
      .subscribe((locationList: LocationModel[]) => {
        if(locationList) {
          this.locations = locationList;
          this.filteredLocations = this.locationCtrl.valueChanges
            .pipe(
              startWith(''),
              map(location => location ? this._filterLocations(location) : this.locations.slice())
            );
        }
        
      })
  }
  private _filterLocations(value: string): LocationModel[] {
    const filterValue = value.toLowerCase();
    return this.locations.filter(location => location.name.toLowerCase().includes(filterValue));
  }

}

