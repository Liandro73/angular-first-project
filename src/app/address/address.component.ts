import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

interface State {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-address',
  imports: [
    FormsModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }


  states: State[] = [
    {value: 'AC', viewValue: 'Acre'},
    {value: 'AM', viewValue: 'Amazônia'},
    {value: 'AP', viewValue: 'Amapa'},
    {value: 'AL', viewValue: 'Alagoas'},
    {value: 'BA', viewValue: 'Rondônia'},
    {value: 'CE', viewValue: 'Rondônia'},
    {value: 'DF', viewValue: 'Rondônia'},
    {value: 'ES', viewValue: 'Rondônia'},
    {value: 'GO', viewValue: 'Rondônia'},
    {value: 'MA', viewValue: 'Rondônia'},
    {value: 'MG', viewValue: 'Rondônia'},
    {value: 'MS', viewValue: 'Rondônia'},
    {value: 'MT', viewValue: 'Rondônia'},
    {value: 'PA', viewValue: 'Rondônia'},
    {value: 'PB', viewValue: 'Rondônia'},
    {value: 'PE', viewValue: 'Rondônia'},
    {value: 'PI', viewValue: 'Rondônia'},
    {value: 'PR', viewValue: 'Rondônia'},
    {value: 'RJ', viewValue: 'Rondônia'},
    {value: 'RN', viewValue: 'Rondônia'},
    {value: 'RO', viewValue: 'Rondônia'},
    {value: 'RR', viewValue: 'Rondônia'},
    {value: 'RS', viewValue: 'Rondônia'},
    {value: 'SC', viewValue: 'Rondônia'},
    {value: 'SE', viewValue: 'Rondônia'},
    {value: 'SP', viewValue: 'Rondônia'},
    {value: 'TO', viewValue: 'Rondônia'}
  ]

  AddressArray: any[] = [];

  user: Number = 0;
  address_line_one: string = "";
  address_line_two: string = "";
  number: Number = 0;
  postal_code: string = "";
  city: string = "";
  state: string = "";
  country: string = "";
  
  saveRecords() 
  {
    let bodyData = {
      "user": this.user,
      "address_line_one": this.address_line_one,
      "address_line_two": this.address_line_two,
      "number": this.number,
      "postal_code": this.postal_code,
      "city": this.city,
      "state": this.state,
      "country": this.country,
    }

    this.http.post("http://127.0.0.1:8000/api/address/create/", bodyData)
      .subscribe(() => {
        alert("Address created successfully");
    })
  }

}
