import { Component, Input, OnInit } from '@angular/core';
import {Observable, tap} from 'rxjs';
import { Comentarios } from './comentarios';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ComentariosService } from './comentarios.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(
    private comentarioService: ComentariosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.buscarComentario(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)],
    });
  }

  gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value;
    this.comentarios$ = this.comentarioService
      .incluiComentario(this.id, comentario)
      .pipe(switchMap(() => this.comentarioService.buscarComentario(this.id)), tap(() => {
        this.comentarioForm.reset();
        alert('Comentario salvo');
      }));
  }
}
