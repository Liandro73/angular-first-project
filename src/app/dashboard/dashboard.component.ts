import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  UsersArray: any[] = [];
  search: any;
  userId: Number = 0;

  name: string = "";
  age: Number = 0;
  id: Number = 0;
  updated_at: string = "";

  currentUserId = "";

  constructor(private http: HttpClient) {
    this.getAllUsers()
  }

  getAllUsers() {
    this.http.get("http://127.0.0.1:8000/api/users/")
      .subscribe((resultData: any) => {
        this.UsersArray = resultData;
      })

    this.search = ''
  }

  onFill()
  {
    return this.userId;
  }

  getAllUserById()
  {
    this.http.get("http://127.0.0.1:8000/api/user/" + this.userId)
      .subscribe((resultData: any) => {
        this.UsersArray = [resultData];
      })
  }

  updateRecords()
  {
    
  }

  deleteRecords(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/api/users/delete/"+ data.id)
    .subscribe((resultData: any) => {
      alert("User deleted successfully");
      this.getAllUsers();
    })
  }

}
