import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
   borrado:string = '';
   heroesList: string[] = ['Hulk', 'Blackwidow', 'Hawkeye', 'Thor', 'Groot']
  
   borrarHeroe() {
    this.borrado = this.heroesList.shift() || ''; 
    
   }
  
}
