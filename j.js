let userName="أحمد";
let userAge=25;
let userEmail="ahmed@example.com";
let userCountry="Syria";
let userSkills=["javaScript","HTML","css"];
console.leg(userName,userAge,userEmail,userCountry,userSkills);
const user={
    name:userName,
    age:userAge,
    email:userEmail,
    country:userCountry,
skills:userSkills,    

};
console.log(user);
const users=[
    {
    name:"أحمد",
    age:25,
    email:"ahmed@example.com",
    country:"syria",
    skills:["javascript","html"]

    },
{
    name:"سارة",
        age:30,
    email:"sara@example.com",
    country:"Egypt",
    skills:["REACT","css"]

},
{
    name:"خالد",
    age:35,
    email:"khaled@example.com",
    country:"jordan",
    skills:["java"]

},
{
    name:"ريم",
    age:28,
    email:"reem@example.com",
    country:"Syria",
    skills:["python"]

},
{
    name:"علي",
    age:35,
    email:"ِali@example.com",
    country:"Egapt",
    skills:["pHp","LAravel"]

}
];
console.log(users);
function findUserByName(targetName) {
  return users.find(user => user.name === targetName);
}


let user1 = findUserByName("سارة");
console.log("نتيجة البحث عن سارة:", user1);

let user2 = findUserByName("محمد");
console.log("نتيجة البحث عن محمد:", user2);
function filterUsersByCountry(targetCountry){
  return users.filter(user => user.country === targetCountry);
}

let syrianUsers = filterUsersByCountry("Syria");

console.log("المستخدمون من سوريا هم:");
console.log(syrianUsers); 
function sortUsersByAge(){
  return [...users].sort((a, b) => a.age - b.age);
}


let sortedUsers = sortUsersByAge();

console.log("قائمة المستخدمين مرتبة من الأصغر إلى الأكبر سناً:");
console.log(sortedUsers);
function displayAllNames() {
  console.log("أسماء جميع المستخدمين:");
  
  users.forEach(user => {
    console.log(user.name);
  });
}
displayAllNames();
function calculateAverageAge() {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  

  const average = totalAge / users.length;
  
  return average;
}

let averageAge = calculateAverageAge();

console.log("متوسط أعمار المستخدمين في النظام هو:");
console.log(averageAge + " سنة"); 
function addNewUser(newUserObject) {
  users.push(newUserObject);

const newUser = {
  name: "نور",
  age: 26,
  email: "nour@example.com",
  country: "Syria",
  skills: ["React Native", "Git"]
};


addNewUser(newUser);

console.log("القائمة بعد إضافة نور:");
console.log(users);
function deleteUserByName(targetName) {
  return users.filter(user => user.name !== targetName);
}

let updatedUsers = deleteUserByName("أحمد");
console.log(updatedUsers);
function updateUserAge(targetName, newAge) {
  const user = users.find(u => u.name === targetName);
  if (user) {
    user.age = newAge;
  }
  return user;
}

updateUserAge("سارة", 31);
console.log(users);
