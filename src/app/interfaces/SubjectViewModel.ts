import { DecimalPipe } from "@angular/common";
import { FormControl } from "@angular/forms";

export interface SubjectViewModel {
  idMateria?: number;
  nombre: string;
  costo: number;

}

export interface SubjectViewModelForm{
  nombre:    FormControl<string>;
  costo:     FormControl<number>;
}
