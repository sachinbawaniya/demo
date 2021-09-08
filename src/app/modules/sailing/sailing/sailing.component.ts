import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountryModel } from '../../shared/models/country.model';
import { LocationModel } from '../../shared/models/location.model';
import { SailingSchedule } from '../../shared/models/sailing-schedule.model';
import { CodesService } from '../../shared/services/codes.service';
import { SailingService } from '../../shared/services/sailing.service';

@Component({
  selector: 'app-sailing',
  templateUrl: './sailing.component.html',
  styleUrls: ['./sailing.component.scss']
})
export class SailingComponent implements OnInit {

  // public variables
  public locations: LocationModel[] = [];
  public filteredCountries: Observable<CountryModel[]>;
  public locationFromCtrl = new FormControl();
  public locationToCtrl = new FormControl();
  public filteredFromLocations: Observable<LocationModel[]>;
  public filteredToLocations: Observable<LocationModel[]>;
  public selectedFromLocationUncode: string;
  public selectedToLocationUncode: string;
  public displayedColumns: string[] = ['productType', 'voyageNumber', 'vesselName', 'vesselImoNumber', 'fromLocation', 'toLocation', 'action'];
  public sailingDataSource: MatTableDataSource<SailingSchedule>;
  public sailingSchedules: SailingSchedule[];

  constructor(
    private sailingService: SailingService,
    private codesService: CodesService,
  ) { }

  ngOnInit() {
    this.getLocatinonsList();
  }

  getLocatinonsList(): void {
    this.codesService.getLocations()
      .subscribe((locationList: LocationModel[]) => {
        if (locationList) {
          this.locations = locationList;
          this.filteredFromLocations = this.locationFromCtrl.valueChanges
            .pipe(
              startWith(''),
              map(location => location ? this._filterLocations(location) : this.locations.slice())
            );
          this.filteredToLocations = this.locationToCtrl.valueChanges
            .pipe(
              startWith(''),
              map(location => location ? this._filterLocations(location) : this.locations.slice())
            );
        }

      });
  }
  private _filterLocations(value: string): LocationModel[] {
    const filterValue = value.toLowerCase();
    return this.locations.filter(location => location.name.toLowerCase().includes(filterValue));
  }

  trackByUnCode(index: number, element: LocationModel): string {
    if (!element) {
      return '';
    }
    return element.unCode;
  }

  getSelectedFromLocation(event: MouseEvent, unCode: string): void {
    this.selectedFromLocationUncode = unCode;
  }

  getSelectedToLocation(event: MouseEvent, unCode: string): void {
    this.selectedToLocationUncode = unCode;
  }

  searchSailingSchedules(): void {
    if (this.selectedFromLocationUncode && this.selectedToLocationUncode) {
      const fromLocation = this.selectedFromLocationUncode;
      const toLocation = this.selectedToLocationUncode;
      this.sailingService.getSailingSchedules(fromLocation, toLocation).subscribe((data) => {
        this.sailingSchedules = data;
        this.sailingDataSource = new MatTableDataSource(this.sailingSchedules);
      });
    }
  }

}

