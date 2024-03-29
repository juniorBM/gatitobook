import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

const API = environment.apiUrl;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  private urlOriginal = '';
  @Input() descricao = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`
    }
  }

  get url() {
    return this.urlOriginal;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
