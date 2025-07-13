import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
