class Savings{
    constructor(id, description, balance){
        this.id=id;
        this.description=description;
        this.balance=0;
    }

    addAmt(Amt){
        if(typeof Amt !== "number"){
            console.error("must be a number");
            return false;
        }
        if(Amt <=0){console.error("amount must be zero");
        return false;
    }
        this.balance +=Amt;
        return true;
    }

transfer(Amt, toAcct){
    if(this.subAmt(Amt)){
    toAcct.addAmt(Amt)
    return true;}  
return false;}


    subAmt(Amt){
        if(typeof Amt !== "number"){
            console.error("must be a number");
            return false;
        }
        if(Amt <= 0){console.error("no");
        return false;
    }
    if(Amt>this.balance){
        console.error("ins funds");
        return false;
    }
    this.balance -=Amt;
    return true;
}
    print() {
        return `${this.id}| ${this.description}|${this.balance}`;
    }
}
let savings1= new Savings(1, "Tyler", 0.00);

savings1.addAmt(50);
savings1.addAmt(-45);       //doest add - numbers works
savings1.subAmt(25);        //works
savings1.subAmt(-25);
savings1.subAmt(65);
console.log(savings1.print());

let savings2= new Savings(2, "jim", 0.00);
savings2.addAmt(200);

savings2.transfer(100,savings1);
console.log(savings1.print());
