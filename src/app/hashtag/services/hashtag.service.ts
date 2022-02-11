import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Hashtag } from './../model/hashtag';

@Injectable({
  providedIn: 'root'
})
export class HashtagService {


  private readonly API = `${environment.API}hashtag`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Hashtag[]>(this.API).pipe(take(1));
  }

  gerar(categoria: string) {

    return this.http.get(`${this.API}/gerar/${categoria}`, {responseType: 'text'}).pipe(take(1));
  }
}
