import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../repository';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RepositoryDetailService {

  private apiURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  getRepository(id: number): Observable<Repository | undefined> {
    return this.http.get<Repository[]>(`${this.apiURL}/repositories.json`).pipe(map(repos => repos.find(repo => repo.id === id)));
  }
}
