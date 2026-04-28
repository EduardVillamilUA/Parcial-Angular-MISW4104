import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Repositorie } from '../repositorie';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesListService {
    private apiURL = environment.baseURL;

    constructor(private http: HttpClient) { }

    getRepositories(): Observable<Repositorie[]> {
    
      return this.http.get<Repositorie[]>(`${this.apiURL}/repositories.json`);
    }

}
