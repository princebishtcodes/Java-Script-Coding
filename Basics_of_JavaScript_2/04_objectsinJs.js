// const tinderUser = new Object(); //constructor object
const tinderUser = {}; //singleton object
tinderUser.id = "prince123";
tinderUser.Name = "Prince";
tinderUser.EmailId = "prince@google.com";
tinderUser.isLoggedin = true;
// console.log(tinderUser);

const regularUser = {
    Email_Id: "princebisht@google.com",
    Full_Name: {
        User_Full_Name: {
            First_Name: "Prince",
            Last_Name: "Bisht"
        }
    }
}

// console.log(regularUser.Full_Name.User_Full_Name);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 5: "d", 6: "e", 7: "f" };
// const obj3 ={obj1,obj2};//For object inside Object, not for merging
// console.log(obj3);
// const obj3 = Object.assign({}, obj1, obj2); //Not used frequently
// console.log(obj3);
const obj3 = { ...obj1, ...obj2 }; //same as array, spread method used mostly
// console.log(obj3);

// Values from Database(IMP)

const data1 = [
    {
        id: "12@prince",
        Name: "Prince",
        EmailID1: "princebisht@chatgpt.com"
    },
    {
        id: "12@prince",
        Name: "Prince",
        EmailID1: "princebisht@chatgpt.com"
    },
    {
        id: "12@prince",
        Name: "Prince",
        EmailID1: "princebisht@chatgpt.com"
    }
]
// console.log(data1[1].EmailID1);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //This function will create an array of Keys in Object
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //Entries creates Arrays in which The Keys and Values are Alternate

//To find whether the keys or values exist in the Object we use hasOwnProperty() which returns boolean
// console.log(tinderUser.hasOwnProperty(isLogged));