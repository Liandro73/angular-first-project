import { Component, OnInit, ChangeDetectionStrategy, inject, model, signal } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
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
  label: string;
}

@Component({
  selector: 'app-address',
  imports: [
    FormsModule, 
    MatFormFieldModule,
    MatCardModule,
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
  ],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  stateControl = new FormControl<State | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);

  states: State[] = [
    {value: 'AC', label: 'Acre'},
    {value: 'AM', label: 'Amazônia'},
    {value: 'AP', label: 'Amapa'},
    {value: 'AL', label: 'Alagoas'},
    {value: 'BA', label: 'Bahia'},
    {value: 'CE', label: 'Ceará'},
    {value: 'DF', label: 'Distrito Federal'},
    {value: 'ES', label: 'Espírito Santo'},
    {value: 'GO', label: 'Goiás'},
    {value: 'MA', label: 'Maranhão'},
    {value: 'MG', label: 'Minas Gerais'},
    {value: 'MS', label: 'Mato Grosso do Sul'},
    {value: 'MT', label: 'Mato Grosso'},
    {value: 'PA', label: 'Pará'},
    {value: 'PB', label: 'Praíba'},
    {value: 'PE', label: 'Pernambuco'},
    {value: 'PI', label: 'Piauí'},
    {value: 'PR', label: 'Paraná'},
    {value: 'RJ', label: 'Rio de Janeiro'},
    {value: 'RN', label: 'Rio Grande do Norte'},
    {value: 'RO', label: 'Rondônia'},
    {value: 'RR', label: 'Roraima'},
    {value: 'RS', label: 'Rio Grande do Sul'},
    {value: 'SC', label: 'Santa Catarina'},
    {value: 'SE', label: 'Sergipe'},
    {value: 'SP', label: 'São Paulo'},
    {value: 'TO', label: 'Tocantins'}
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

