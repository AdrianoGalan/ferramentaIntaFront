import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hashtag } from '../model/hashtag';
import { HashtagService } from '../services/hashtag.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.scss']
})
export class HashtagComponent implements OnInit {


  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  cadegorias: string[] = ['anime', 'mulher', 'natureza']

  selectedFood = 'anime';

  hashtags$!: Observable<Hashtag[]>;
  clickHashtag: boolean = true;
  hashGerada$!: Observable<string>;
  displayedColumns = ['id', 'hash', 'categoria']

  constructor(private hasservice: HashtagService) {

    this.hashtags$ = this.hasservice.list();

   }

  ngOnInit(): void {
  }

  onListar(){

    this.clickHashtag = true

    this.hashtags$ = this.hasservice.list();
  }

  onGerar(){


    this.clickHashtag = false
    this.hashGerada$ = this.hasservice.gerar(this.selectedFood);

  }

}
