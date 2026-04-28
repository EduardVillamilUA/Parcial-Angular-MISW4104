import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesListService {
    private apiURL = environment.baseURL;

    constructor(private http: HttpClient) { }

    getRepositories(): Observable<Repository[]> {
    
      return this.http.get<Repository[]>(`${this.apiURL}/repositories.json`);
    }

}
