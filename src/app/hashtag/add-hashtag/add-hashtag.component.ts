import { HashtagService } from './../services/hashtag.service';
import { Hashtag } from './../model/hashtag';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-hashtag',
  templateUrl: './add-hashtag.component.html',
  styleUrls: ['./add-hashtag.component.scss']
})
export class AddHashtagComponent implements OnInit {

  formulario!: FormGroup;
  hashtag!: Hashtag

  constructor(
    private formBuilder: FormBuilder,
    private hashService: HashtagService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      hashtag: [null, [Validators.required, Validators.minLength(3)]],
      categoria: [null, [Validators.required, Validators.minLength(3)]] 
    });
  }

  onSubmit(){

    if(this.formulario.valid){

    this.hashtag = new Hashtag()

    this.hashtag.categoria = this.formulario.value['categoria'];
    this.hashtag.hash = this.formulario.value['hashtag'];
    
    this.hashService.salvar(this.hashtag).subscribe(

      success => {

        this.formulario.reset();
        this.router.navigate(['hashtag']);

      },
      erro => {




      }

    );

    
    }
  }

}
