import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  constructor(private formBuilder : FormBuilder) { 
    // this.checkoutForm=formBuilder.group({
    // emailAdress: new FormControl(),
    // quantity: new FormControl(),
    // terms: new FormControl()
    //  } );
    this.checkoutForm=formBuilder.group({
      emailAdress: ['',[Validators.minLength(12) ,Validators.required, Validators.email]],
      quantity: ['', Validators.required],
      terms:['', Validators.requiredTrue]
       } );
    }
  ngOnInit(): void {
  }
  postData(){
    console.log(this.checkoutForm);
    console.log(this.checkoutForm.value);
    console.log("email : "+this.checkoutForm.value.emailAdress);

  }
}
