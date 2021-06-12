/// git add -> commit
const MembersInFam = ['MotherName: Ho Thi Hanh','FatherName: Le Thanh Long','brothers: Le Thi Ho Tu, Le Thanh Tung'];
const listFriend = ['Le Van Uu','Tran Cong Hien','Nguyen Duong Linh','Pham Thien Dang','Pham Thien Dang'];
const listMyHobby = ['CODDING :))','AQUARIUM','PLAYING GAME'];
const myProfile = [{name: 'Le Thanh Tuan',age: 21,},MembersInFam,listFriend,listMyHobby];
const randomMembersInFam = arr =>{
    const newArr = []; var count = 1;
    newArr.push(arr[Math.floor(Math.random()*3)]);
    while(count !== 0){
         const randomNum = Math.floor(Math.random() * 2);
         if(arr[randomNum] !== newArr[0]){
             newArr.push(arr[randomNum]);
             count --;
         }
    }
    return newArr;
};
const randomlistFriend = arr =>{
    const alphabet = ['L','T','N','P'];
    const randomAlpha = alphabet[Math.floor(Math.random()*2)];
    const newArr = arr.filter(element => element[0] !== randomAlpha);
    return newArr;
};
const randomlistMyHobby = arr =>{
    const newArr = arr[Math.floor(Math.random()*2)];
    return newArr;
}

printProfile = () =>{

   const arr1 = randomMembersInFam(MembersInFam);
   const arr2 = randomlistFriend(listFriend);
   const arr3 = randomlistMyHobby(listMyHobby);
   
   console.log(`My fullname is ${myProfile[0].name} and My age is ${myProfile[0].age}`);
   console.log(`Name two of three members in my family: `);
   console.log(`${arr1[0]} and ${arr1[1]}`);
   console.log(`Here is some friends in my list: 
   1. ${arr2[0]}
   2. ${arr2[1]}
   3. ${arr2[2]}
   4. ${arr2[3]}`);
   console.log(` One of my hobby is ${arr3}`);
}
printProfile();