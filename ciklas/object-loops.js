console.clear();

const user = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isMarried);
console.log(user['name']);


const userKeys = Object.keys(user);
console.log(userKeys);

for (let i = 0; i < userKeys.length; i++) {
    const key = userKeys[i];
    const value = user[key]; 
   console.log(value);
};
console.log('---------');
//FOR-IN

for (const key in user) {
    const value = user[key];
}
