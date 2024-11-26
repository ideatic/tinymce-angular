/* eslint-disable no-console */
import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './FormControl.component.html'
})
export class FormControlComponent {
  private readonly formBuilder = inject(FormBuilder);

  public formControl = this.formBuilder.control<string | null>(null);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  public constructor() {
    this.formControl.valueChanges.subscribe(console.log);
    this.formControl.setValue('<p>Initial value</p>');
    // Console log should be triggered just once
  }
}
