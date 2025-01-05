import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

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
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  userControl = new FormControl<User | null>(null, Validators.required);

  showForm: boolean = false;

  UsersArray: any[] = [];
  AddressesArray: any[] = [];
  search: any;
  userId: Number = 0;

  name: string = "";
  age: Number = 0;
  id: Number = 0;
  created_at: string = "";
  updated_at: string = "";

  currentUserId = "";

  constructor(private http: HttpClient) {
    this.getAllUsers()
  }

  getAllUsers() {
    this.http.get("http://127.0.0.1:8000/api/users/")
      .subscribe((resultData: any) => {
        this.UsersArray = resultData;
        console.log(this.UsersArray)
      })
    this.showForm = false;
  }

  onFill()
  {
    return this.userId;
  }

  onClickClearSearch()
  {
    this.search = ''
  }

  onClickCloseEdit()
  {
    this.showForm = false;
  }

  getAllUsersBySearch()
  {
    this.http.get("http://127.0.0.1:8000/api/users/search/" + this.search)
      .subscribe((resultData: any) => {
        this.UsersArray = resultData;
      })
  }

  deleteRecords(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/api/user/"+ data.id)
    .subscribe((resultData: any) => {
      alert("User deleted successfully");
      this.getAllUsers();
    })
  }

  setUpdate(data: any)
  {
    this.showForm = true;

    this.name = data.name;
    this.age = data.age;
    this.currentUserId = data.id;
  }

  updateRecords()
  {
    let bodyData = {
      "name": this.name,
      "age": this.age,
      "updated_at": new Date
    }

    this.http.put("http://127.0.0.1:8000/api/user/"+ this.currentUserId, bodyData)
    .subscribe((resultData: any) => {
      console.log(resultData);
      alert("User updated successfully");
      this.name = '';
      this.age = 0;
      this.updated_at = '';
      this.getAllUsers();
    })
  }

  newAddress()
  {

  }

}
