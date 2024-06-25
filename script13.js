// POM---- Framework

//Design pattern 

// User Defined data type ???

// class
//1) Encapsulation 2) unheritance  3) poymorphism  4) Abstraction
// Encapsulation
// Inheritance
// Polymorphisam -- overloading overriding 
// overloadinng --- same class , same method name different signuture
//overriding --- different class same name and same signuture


// opps

//class defined

// data type ---->  string ,boolean ,array ,number ,object ,map ,set dom
// User defined data ---->
// Object ----> properties and methods

// opps 
//1)Encapsulation
//2)Inhertiance 
//3)Polymorphisam
//4)Abstarction

//program 1

// class student{
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastname = ln
//     }
//     displayName(){
//         console.log(this.firstName+this.lastname)
//     }

// }
// let amol = new student("chinmay","deshpande")
// console.log(amol.firstName)
// console.log(amol.lastname)

// //program 2

// class Teacher {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastname  = ln
//     }
//     displayName(){
//         console.log(this.firstName+ this.lastname)
//     }
// }

// class Student extends Teacher{
//     constructor (fn,ln,spec){
//         super(fn,ln)
//         self.specialization = spec
//     }
//     displaySpec(){
//         console.log(this.specialization)
//     }
// } 


// let amol = new Student("amol","rao","salary")
// amol.displayName()
// amol.displaySpec()
// console.log(amol.firstName)
// console.log(amol.lastName)

//plymorphism

// class Calculator {

//     addition(a,b,c,d){

//         if(a != undefined && b != undefined && c != undefined && d != undefined){
//             console.log(a+b+c+d)
//         }
//         else if(a != undefined && b != undefined && c != undefined){
//             console.log(a+b+c)
//         }
//         else if(a != undefined && b != undefined){
//             console.log(a+b)
//         }

//     }

// }

// let cal = new Calculator()
// cal.add(12,4)
// cal.add(12,4,3)
// cal.add(12,4,3,2)

// program 4
// overriding

class WorldBank {
    save(){
        console.log("save")
    }
    loan(){
        console.log("loan")
    }
}

class SBI  extends WorldBank{
    save(){
        console.log("save SBI")
    }
    loan(){
        console.log("loan SBI")
    }
}

let SBI = new WorldBank()
SBI.loan()

