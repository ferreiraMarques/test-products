import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Output() addProduct: EventEmitter<string> = new EventEmitter<string>();

  public addForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.addForm = this.fb.group({
      title: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {

  }

  public addNew() {
    if(this.addForm.valid) {
      this.addProduct.emit(this.title.value);
      this.addForm.reset();
    }
  }

  get title() {
    return this.addForm.get('title');
  }

}
