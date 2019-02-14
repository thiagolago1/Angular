import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public to_dos: any[] = [];

  constructor() {
    this.to_dos.push({ title: 'Arrumar o armário ', done: false });
    this.to_dos.push({ title: 'Atualizar KanBan', done: false });
    this.to_dos.push({ title: 'Formatar Desktop', done: false });
  }
}
