

class abc{
  a:number;
  constructor(a:number){

    this.a=a;
  }  

  public m():void{
      console.log(this.a);
  }

}

var k = new abc(10);
k.m();