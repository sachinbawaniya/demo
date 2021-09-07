/* **consolidated material list imported into shared module */
import { NgModule } from '@angular/core';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        MatPaginatorModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatTableModule,
        MatAutocompleteModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatPaginatorModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatTableModule,
        MatAutocompleteModule,
        MatInputModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})

export class MaterialModule { }


