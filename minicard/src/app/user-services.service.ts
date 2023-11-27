import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private Http: HttpClient) { }

  private baseUrl = 'http://localhost:3000';


  userParfum(){
    return this.Http.get('http://localhost:3000/monmodels')
  }

  createParfum(parfumData: any) {
    return this.Http.post(this.baseUrl, parfumData);
  }

  updateParfum(articleId: number, updatedParfumData: any) {
    return this.Http.put(`${this.baseUrl}/${articleId}`, updatedParfumData);
  }

}
