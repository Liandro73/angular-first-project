import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

interface User {
  value: string;
  label: string;
}

@Component({
  selector: 'app-dashboard',
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
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  
  constructor(private http: HttpClient) {
  }

  UsersArray : any[] = [];

  name: string = "";
  age: Number = 0;
  id: Number = 0;
  created_at: string = "";

  userControl = new FormControl<User | null>(null, Validators.required);
  
  
  saveRecords() 
  {
    let bodyData = {
      "name": this.name,
      "age": this.age,
      "created_at": new Date
    }

    this.http.post("http://127.0.0.1:8000/api/users/create/", bodyData)
      .subscribe((resultData: any) => {
        alert("User created successfully");
    })
  }

}