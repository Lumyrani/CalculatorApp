import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  value1:string= ''
  value2:string=''
  result:number=0
  operator:string = ''
  eq_opr:string=''
  ref:string=''

  setValue(num:string)
  {
     if(this.operator ==''&& this.result==0 ){
     this.value1 =this.value1+num
     
     }
    else if( this.result!=0){
      
   
      this.value1 =this.result.toString()
     
      if(num!=""){
      this.value2 =this.value2+num
        
      }
    }
    else{

      console.log(this.value2)
   this.value2 =this.value2+num
  }
  if (this.value1.length >= 9 ||this.value2.length >= 9 ) 
  {
  this.value1 = 'ERROR \n ';
  this.value2 = 'Range Exceeded \n';
  
}
  
}

setClear(Clr:string)
{
  
if(Clr== "clr"){
  this.result=0
  this.value1=''
  this.value2=''
  this.operator=''
  this.eq_opr!='='
  
}

  
  }
  setOperator(opr:string)
  {
    if(opr == "=")
    {
    
        this.eq_opr=opr
        
        console.log(this.eq_opr)
        
        
    }
   
  
   
    if(this.operator=="+")

    {
        this.result=parseInt(this.value1)+parseInt(this.value2)
       
    }
    if(this.operator=="-")
    {
        this.result=parseInt(this.value1)-parseInt(this.value2)

    }
    if(this.operator=="*")
    {
      this.result=parseInt(this.value1)*parseInt(this.value2)
    
    }
   if(this.operator=="/")
    {
       this.result=parseInt(this.value1)/parseInt(this.value2)
        
    }
   
   
     else{
     
      this.operator=opr
      this.value2=""
      console.log(this.operator)
     
    
    }
  }
}

