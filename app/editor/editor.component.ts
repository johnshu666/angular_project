import { InfosService } from './../infos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  isSubmitting = true;
  infoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private infosService: InfosService
  ) {
    this.infoForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      school: ['', Validators.required],
      address: ['', Validators.required],
      selfIntro: ['', Validators.required],
      preference: ['', Validators.required],
      sexualType: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    const information = this.infoForm.value;
    this.infosService.save(information).subscribe(
      x => console.log('test in editor', x)
    );
  }

}
