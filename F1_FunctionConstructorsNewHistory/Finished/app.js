function Person(fname, lname) {
 
    console.log(this);
    this.firstname = fname;
    this.lastname = lname;
    console.log('This function is invoked.');
    
}


function Person2() {
 
    console.log("--------------");
    console.log(this);
    this.firstname = 'John' +'';
    this.lastname = 'Doe'+'';
    console.log('This function is invoked.');
    console.log(this);
    console.log("--------------");
    
}
var john2= new Person2();

var jane2= new Person2();

console.log("------Done with person2 --------"); 
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);
