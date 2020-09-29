import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'imc-angular';

  peso: number;
  altura: number;
  imc: number;

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.calcularImc();
  }

  calcularImc() {
    if (this.peso > 0 && this.altura > 1.00) {
      this.imc = this.peso / (this.altura * this.altura);
    }
  }
}
