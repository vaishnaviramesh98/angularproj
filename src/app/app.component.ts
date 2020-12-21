import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Project';
  // @Input() datas: String;
  // @Output() params: String;
  readMe(){
    console.log("button clicked");
  }
  showMsg=true;
  showMsgg=true;
  showValue=true;
  switchValue="three";
  users = [
    {userId:1, firstName: 'john'},
   { userId:2, firstName: 'sonu'},
   {userId:1, firstName: 'peter'},
   {userId:1, firstName: 'thomas'},
   {userId:1, firstName: 'tom'}
  ];
  colVal='yellow';
  clsName='one';
  clsName2='two';
  subTitle='interpolation';
  numBer=7;
  use={
    id:5,
    name:'sonu'
  }
  colorVal='green';
  placeholderVal='Enter the value';
  hrefVal='http://google.com';
  updateVal='http://oracle.com';
  showAlert(){
    alert("event binding");
  }
  dataBind='';
  readFirstName()
{
  console.log(this.dataBind);
}
user={
  userId:7,
  name:"sonu",
  dob:"27/01/1998",
  city:'Adoor'
}
}
