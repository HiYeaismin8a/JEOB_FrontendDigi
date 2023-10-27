import { FormControl } from "@angular/forms";

export interface LoginViewModel{
  name: string;
  lastName: string;
}

export interface LoginViewModelForm{
  name: FormControl<string>;
  lastName: FormControl<string>;
}
