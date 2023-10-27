import { FormControl } from "@angular/forms";

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
