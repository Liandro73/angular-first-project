import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
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