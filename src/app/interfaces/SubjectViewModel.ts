import { DecimalPipe } from "@angular/common";
import { FormControl } from "@angular/forms";

export interface SubjectViewModel {
  name: string;
  cost: number;

}

export interface SubjecttViewModelForm{
  name:     FormControl<string>;
  cost:     FormControl<number>;
}
