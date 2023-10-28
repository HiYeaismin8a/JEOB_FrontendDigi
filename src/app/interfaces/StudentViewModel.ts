import { FormControl } from "@angular/forms";
import { SubjectViewModel } from './SubjectViewModel';

export interface StudentViewModel {
  idAlumno:        number;
  nombre:          string;
  apellidoPaterno: string;
  apellidoMaterno: string;
}


export interface StudentViewModelForm{
  nombre:     FormControl<string>;
  apellidoPaterno: FormControl<string>;
  apellidoMaterno: FormControl<string>;
}
