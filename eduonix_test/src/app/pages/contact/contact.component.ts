import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      subject: ['', Validators.compose([Validators.required])],
      message: ['', Validators.compose([Validators.required])],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert("submited");
  }
}
