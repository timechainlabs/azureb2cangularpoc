import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-backendapi',
  templateUrl: './backendapi.component.html',
  styleUrls: ['./backendapi.component.css']
})
export class BackendapiComponent implements OnInit {

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    });
    
    this.http.get('http://localhost:3000/payments/protected',{ headers })
  .pipe(
    catchError(err => {
      console.log('Error:', err);
      return throwError(err);
    })
  )
  .subscribe(data => {
    console.log(data);
  });
  }

}
