import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faEnvelope,
  faPaperPlane,
  faUndo,
  faEnvelopeOpenText,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  send: any = faPaperPlane;
  reset: any = faUndo;
  mail: any = faPaperPlane;
  location: any = faMapMarkerAlt;

  mailForm: FormGroup;
  mailFormState: {
    submitted: boolean;
    loading: boolean;
    success: boolean;
    fail: boolean;
  } = {
    submitted: false,
    loading: false,
    success: false,
    fail: false,
  };
  constructor(private formBuilder: FormBuilder, public app: AppService) {
    this.mailForm = formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      subject: [null, [Validators.required, Validators.maxLength(30)]],
      comments: [null, [Validators.required, Validators.maxLength(500)]],
    });
  }
  contact: any = faEnvelope;
  ngOnInit(): void {}
  get email() {
    return this.mailForm.get('email');
  }
  get name() {
    return this.mailForm.get('name');
  }
  get subject() {
    return this.mailForm.get('subject');
  }
  get comments() {
    return this.mailForm.get('comments');
  }
  mailSub: Subscription;
  sendMail() {
    if (this.mailFormState.loading) return;
    this.mailFormState.submitted = true;
    if (this.mailForm.invalid) return;
    if (this.mailSub) this.mailSub.unsubscribe();
    console.log(this.mailForm.value);
    this.mailFormState.loading = true;
    this.mailSub = this.app.mailApi(this.mailForm.value).subscribe(
      (res) => {
        console.log(res);
        this.mailFormState.success = true;
        this.mailFormState.loading = false;
      },
      (err) => {
        console.log(err);
        this.mailFormState.fail = true;
        this.mailFormState.loading = false;
      }
    );
  }
  refresh() {
    this.mailFormState.submitted = false;
    this.mailFormState.success = false;
    this.mailFormState.fail = false;
    this.mailForm.reset();
  }
}
