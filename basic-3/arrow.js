//ARROW function ES6 was introduced in 2015 along with newer features in which we got arrow function
//THROW keyword refer the current context of particular scope

const user={
    name:"shalu",
    price: 999,
    
    welcomeMsg: function(){
        console.log(`${this.name} , welcome to the site`); 
        
    }

}

user.welcomeMsg()   //default value
user.name="Sam"
user.welcomeMsg()   //changed value