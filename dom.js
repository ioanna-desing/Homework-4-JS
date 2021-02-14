- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле имя должно присутствовать только 1 раз в одном объекте)

let user = {
    name : 'Ioanna',
    surname : 'Bogomyrova',
    age : 35,
};
let work = {
    hobby: 'drowing',
    myWork : 'modeller',
    skill : 'animator',
};
let skills = {  
   hardSkill : 'programm', 
   softSkill : 'comunication',
   language : 'ukranian',  
};
let family = {
    family : true,
    home : true,
    children : 3,
};
let status = {
    status : false,
    car : false,
    workPlace : 'office',
};

- создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт 

 let flat = {name: 'panel', floor :9, adress :['chernivtsi','Golovna'],live:{n1:'Meri',n2:'Andriy',n3:'Dania'}};
 let car = { model : 'Volvo XC90', producer:['Volvo','Geartronic 4x4'], characteristic:{tankVolume:71,horsePower:235}};
 let model = {firstName : 'Naomi', contract:[true, true,true,true], look: {skin:'black',eyes:'brown',hair:'wavy',body:'thin',stature:'tall',face:'handsome'}};
 let children = { number : 3, youngest:['Danilo',1.8], names :{daughter:'Maria',son:'Dreik',young:'Bysia'}};
 let cinema = { who : 'witcher', produce: ['Netflix',' Hivemind','Platige Image'], herous:{men:'Geralt',girl:'Cirilla'}};

 - При помощи для вывести все ключи всех объектов из задания 1 и 2
for( userKey in user){
    console.log(userKey); 
}
for (workKey in work){
    console.log(workKey);
}
for(skillsKey in skills){
    console.log(skillsKey);
}
for(familyKey in family){
    console.log(familyKey);
}
for(statusKey in status){
    console.log(statusKey);
}
for (flatKey in flat){
    console.log(flatKey);
}
for(carKey in car){
    console.log(carKey);
}
for(modelKey in model){
    console.log(modelKey);
}
for(childrenKey in children){
    console.log(childrenKey);
}
for(cinemaKey in cinema){
    console.log(cinemaKey);
};


- При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
let userKey = Object.keys(user);
console.log(userKey);
let workKey = Object.keys(work);
console.log(workKey);
let skillsKey = Object.keys(skills);
console.log(skillsKey);
let familyKey = Object.keys(family);
console.log(familyKey);
let statusKey = Object.keys(status);
console.log(statusKey);
let flatKey = Object.keys(flat);
console.log(flatKey);
let carKey = Object.keys(car);
console.log(carKey);
let modelKey = Object.keys(model);
console.log(modelKey);
let childrenKey = Object.keys(children);
console.log(childrenKey);
let cinemaKey = Object.keys(cinema);
console.log(cinemaKey);

- Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let arrayCars = [
    { 
      model : 'Mercedes A-Class (W177) 220d',
      color : 'white' ,
      horsePower : 190 , 
      year : 2005,
    },

    { 
        model : 'Suzuki Jimny 1.5i (102 л.с.) 4-авт 4x4',
        color : 'black',
        horsePower : 102, 
        year : 2007,
    },

    {
        model : 'Subaru Forester 2.5i-S AT FR',
        color : 'silver' ,
        horsePower : 184, 
        year : 2008,

    },

    {
        model : 'Toyota Land Cruiser 200 4.5D AT PREMIUM 4WD',
        color : 'red' ,
        horsePower : 249, 
        year : 2009,
    },

    {
        model : 'Nissan Patrol 5.6i (428 л.с.) 7-авт 4x4',
        color : 'pink',
        horsePower : 428,
        year : 2011,
    },

    {
        model : 'Mitsubishi L200 2.4 DI-D (181 л.с.) 6-АКП INVECS II 4x4',
        color : 'grey' ,
        horsePower :181,
        year : 2017,
    },

    {
        model : 'Opel Combo Life 1.5 BlueHDi (102 л.с.) 5-мех',
        color : 'green' ,
        horsePower :102,
        year : 2012,
    },

    {
        model : 'Volvo XC90 2.0 B5 (235 л.с.) 8-АКП Geartronic 4x4',
        color : 'beige' ,
        horsePower :235,
        year : 2020,
    },

    {
        model :'Lamborghini Huracan LP 610-4 Spyder 5.2 AT',
        color : 'metal' ,
        horsePower :610,
        img : 2019,
    },

    {
        model :'Porsche 718 Spyder 4.0i (420 л.с.) 6-мех',
        color : 'blue' ,
        horsePower :420,
        year : 1997,
    },
]
- Создать массив объектов городов и заполнить его объекты с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
let arrayCities = [
    {
        city : 'БЕРЛИН',
        country : 'ГЕРМАНИЯ',
        region : 'ЛИХТЕНБЕРГ',
        population : 3980837 ,
        small: false,
    },
    {
        city : 'БАРСЕЛОНА',
        country : 'ИСПАНИЯ',
        region :'КАТАЛОНИЯ',
        population: 5292354,
        small: false,
    },
    {
        city : 'САН-ФРАНЦИСКО',
        country : 'США',
        region : 'КАЛИФОРНИЯ',
        population:739426 ,
        small: false,
    },
    {
        city : 'ЛОС-АНДЖЕЛЕС ',
        country :'США',
        region : 'КАЛИФОРНИЯ',
        population:3831868,
        small: false,
    },
    {
        city : 'ШЕНЬЧЖЕНЬ',
        country : 'КИТАЙ',
        region : 'ГУАНДУН',
        population: 10358,
        small: true,
    },
    
]
- Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является объектом с полями имя, возраст, пол, стаж.
let carsDriver = [
{
    model : 'Daewoo Lanos Hatchback 1.5i MT (TF48Y1-29)',
    color: 'blue',
    horsePower :86,
    driver : {
        name:'Петя',
        age: 3,
        experience: 4,
        gender:'муж',
    },
},

{
    model : 'Chevrolet Corvette Convertible 6.2 MT',
    color: 'brown',
    horsePower :466,
    driver : {
        name:'Сергей',
        age: 36,
        experience:2,
        gender:'муж',
    },
},

{
    model : 'Honda Pilot 3.0 AT Premium AWD',
    color: 'black',
    horsePower :249,
    driver : {
        name:'Ольга',
        age: 37,
        experience:7,
        gender:'жен',
    },
},

{
    model : 'BMW X6 (G06) M50i',
    color: 'margent',
    horsePower :530,
    driver : {
        name:'Виталина',
        age:34,
        experience:15,
        gender:'жен',
    },
},
]
- проитерировать каждый массив из задания 5,6,7 при помощи while.
let i=0;
while (i<arrayCars.length){
    console.log(arrayCars[i])
    i++
};
let i = 0;
while (i<arrayCities.length){
    console.log(arrayCities[i])
    i++
};
let i = 0;
while (i<carsDriver.length){
    console.log(carsDriver[i])
    i++
};

- проитерировать каждый массив из задания 5,6,7 при помощи для.
for (let i =0; i< arrayCars.length;i++){
    console.log(arrayCars[i]);
};
for( let i = 0; i<arrayCities.length;i++){
    console.log(arrayCities[i]);
};
for ( let i = 0; i< carsDriver.length;i++){
    console.log(carsDriver[i])
};

- проитерировать каждый массив из задания 5,6,7 при помощи для of.
for(arrayCars2 of arrayCars){
    console.log(arrayCars2);
}
for(arrayCities2 of arrayCities){
    console.log(arrayCities);
}
for(carsDriver2 of carsDriver){
    console.log(carsDriver2);
};
- взять объекты из задания 1 и превратить каждый в json.
let user = {
        name : 'Ioanna',
        surname : 'Bogomyrova',
        age : 35,
    };
    let userBack = JSON.stringify(user);
    console.log(userBack);


    let work = {
        hobby: 'drowing',
        myWork : 'modeller',
        skill : 'animator',
    };
    let workBack = JSON.stringify(work);
    console.log(workBack);

    let skills = {  
       hardSkill : 'programm', 
       softSkill : 'comunication',
       language : 'ukranian',  
    };
    let skillsBack = JSON.stringify(skills);
    console.log(skillsBack);


    let family = {
        family : true,
        home : true,
        children : 3,
    };
    let familyBack = JSON.stringify(family);
    console.log(familyBack);

    let status = {
        status : false,
        car : false,
        workPlace : 'office',
    };
    let statusBack = JSON.stringify(status);
    console.log(statusBack);
- взять json из задания 11 и превратить их обратно в объекты.
console.log(JSON.parse(userBack));
console.log(JSON.parse(workBack));
console.log(JSON.parse(skillsBack));
console.log(JSON.parse(familyBack));
console.log(JSON.parse(statusBack));
- взять массив из задания 5, в цикле перебрать его объекты превратив их в json.
let arrayCars = [
        { 
          model : 'Mercedes A-Class (W177) 220d',
          color : 'white' ,
          horsePower : 190 , 
          year : 2005,
        },
    
        { 
            model : 'Suzuki Jimny 1.5i (102 л.с.) 4-авт 4x4',
            color : 'black',
            horsePower : 102, 
            year : 2007,
        },
    
        {
            model : 'Subaru Forester 2.5i-S AT FR',
            color : 'silver' ,
            horsePower : 184, 
            year : 2008,
    
        },
    
        {
            model : 'Toyota Land Cruiser 200 4.5D AT PREMIUM 4WD',
            color : 'red' ,
            horsePower : 249, 
            year : 2009,
        },
    
        {
            model : 'Nissan Patrol 5.6i (428 л.с.) 7-авт 4x4',
            color : 'pink',
            horsePower : 428,
            year : 2011,
        },
    
        {
            model : 'Mitsubishi L200 2.4 DI-D (181 л.с.) 6-АКП INVECS II 4x4',
            color : 'grey' ,
            horsePower :181,
            year : 2017,
        },
    
        {
            model : 'Opel Combo Life 1.5 BlueHDi (102 л.с.) 5-мех',
            color : 'green' ,
            horsePower :102,
            year : 2012,
        },
    
        {
            model : 'Volvo XC90 2.0 B5 (235 л.с.) 8-АКП Geartronic 4x4',
            color : 'beige' ,
            horsePower :235,
            year : 2020,
        },
    
        {
            model :'Lamborghini Huracan LP 610-4 Spyder 5.2 AT',
            color : 'metal' ,
            horsePower :610,
            year : 2019,
        },
    
        {
            model :'Porsche 718 Spyder 4.0i (420 л.с.) 6-мех',
            color : 'blue' ,
            horsePower :420,
            year : 1997,
        },
    ]
for(arrayCarsBack of arrayCars){
    console.log(JSON.stringify(arrayCarsBack));
};
- взять массив из задания 6, в цикле перебрать его объекты превратив их в json.

let arrayCities = [
        {
            city : 'БЕРЛИН',
            country : 'ГЕРМАНИЯ',
            region : 'ЛИХТЕНБЕРГ',
            population : 3980837 ,
            small: false,
        },
        {
            city : 'БАРСЕЛОНА',
            country : 'ИСПАНИЯ',
            region :'КАТАЛОНИЯ',
            population: 5292354,
            small: false,
        },
        {
            city : 'САН-ФРАНЦИСКО',
            country : 'США',
            region : 'КАЛИФОРНИЯ',
            population:739426 ,
            small: false,
        },
        {
            city : 'ЛОС-АНДЖЕЛЕС ',
            country :'США',
            region : 'КАЛИФОРНИЯ',
            population:3831868,
            small: false,
        },
        {
            city : 'ШЕНЬЧЖЕНЬ',
            country : 'КИТАЙ',
            region : 'ГУАНДУН',
            population: 10358,
            small: true,
        },
    ]
for (arrayCitiesBack of arrayCities){
    console.log(JSON.stringify(arrayCitiesBack));
};    
- взять массив из задания 7, в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
carsDrive = [];
for (let driver of carsDriver){
    carsDrive.push(driver)
}
    console.log(JSON.stringify(carsDrive));

- Создать массив пользователей. У каждого пользователя обязательно должено быть поле навыков, которое является массивом.
 Проитерировать массив пользователей и в каждом пользователе проитерировать его массив навыков
- Создать массив пользователей. У каждого пользователя обязательно должено быть поле навыков, которое является массивом. 
Проитерировать массив пользователей и в каждом пользователе проитерировать его массив навыков. Скопировать все навыки всех пользователей в отедльный массив
- За допомогою 2-х циклов цикл проработки масив и масив кожного обтекания.
 let users = [
     {name: 'vasya',age: 31, status: false, skills: ['java', 'js']},
     {name: 'petya',age: 30, status: true, skills: [ 'java', 'js', 'html']},
     {name: 'kolya',age: 29, status: true, skills: ['mysql', ', mongo']},
     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
     {name: 'max',  age: 30, status: true, skills: ['mysql', ', mongo']},
    ] 
    for ( let i=0;i<users.length;i++){
      for ( let com of users[i].skills){
          console.log(com)
      }
    }
    let userSkills = [];
    let skillDublicate=[];
    for ( let user of users){
        for( let userSkills of user.skills){
           skillDublicate.push(userSkills)    
        }
    }
    console.log(skillDublicate);


- За допомоги циклу проітерувати масив пользователей, записать кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одном блоці.
- За допомоги циклу проітерувати масив пользователей, записать кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам,
 блок с адресою зробити окремим блоком, з блоками для кожної властивості

   let users = [
     {
    	name: 'васья',
    	age : 31,
    	status: false,
    	adress: {city: 'Львов', country: 'Украина', street: 'Шевченко', numb: 1}
    }, {
     name: 'петя',
     age: 30,
     status: true,
	 adress: {city: 'Нью-Йорк', country: 'США', street: 'Восточная улица', numb: 21}
    }, {
   	 name: 'коля',
     age: 29,
     status: true,
     adress: {city: 'Будапешт', country: 'Венгрия', street: 'Кураку', numb: 78}
    }, {
     name: 'оля',
     age: 28,
     status: false,
     adress: {city: 'Прага', country: 'Чехия', street: 'Пастер', numb: 56}
    }, {
     name: 'макс',
     age: 30,
     status: true,
     adress: {city: 'Стамбул', country: 'Турция', street: 'Микар',numb: 39}
    }, {
     name: 'аня',
     age: 31,
     status: false,
     adress: {city: 'Рио', country: 'Бразилия', street: 'Роналди', numb: 5}
    }, {
     name: 'олег',
     age: 28,
     status: false,
     adress: {city: 'Монреаль', country: 'Канада', street: 'Акусто', numb: 90}
    }, {
     name: 'андрей',
     age: 29,
     status: true,
     adress: {city: 'Квебек', country: 'Канада', street: 'Бинаро', numb: 33}
    }, {
     name: 'маша',
     age: 30,
     status: true,
     adress: {city: 'Москва', country: 'Россия', street: 'Гоголя', numb: 1}
    }, {
     name: 'оля',
     age: 31,
     status: false,
     adress: {city: 'Портленд', country: 'США', street: 'Forest str', numb: 4}
    }, {
     name: 'макс',
     age: 31,
     status: true,
     adress: {city: 'Каир', country: 'Египет', street: 'Морской берег', numb: 45}
    }];
    - З масиву пользователей за допомогою циклу витягнути адреси користувачів и записати (скопіювати) их в інший порожній масив.
    
    
      let usersAdress = []
    for( let user of users){
        console.log(user.adress)
        usersAdress.push(user.adress)
    }
    console.log(usersAdress);



    - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
       
      for(let user of users){
        let userInfo = document.createElement ('div')
        userInfo.classList.add('info');
        userInfo.innerText = `${user.name} ${user.age} ${user.status} ${user.adress}`
        document.body.appendChild(userInfo)
        }
        

- За допомоги циклу проітерувати масив пользователей, записать кожного юзера в сівй блок за допомоги document.createElement, 
    розділивши всі властивості по своїм блокам (div> div * 4)
    - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам ,
     блок з адресою зробити окремим блоком, з блоками для кожної властивості 
    
    for (let user of users){
        let userName = document.createElement('div')
        userName.classList.add('name');
        userName.innerText = `${user.name}`

        document.body.appendChild(userName)
    }

    for (let user of users){
        let userAge = document.createElement('div')
        userAge.classList.add('age');
        userAge.innerText = `${user.age}`

        document.body.appendChild(userAge)
    }

    for (let user of users){
        let userStatus = document.createElement('div')
        userStatus.classList.add('status');
        userStatus.innerText = `${user.status}`

        document.body.appendChild(userStatus)
    }
    for (let user of users){
        console.log(user.adress)
        let usersAdress = document.createElement('div')
        usersAdress.classList.add('adress');
        usersAdress.innerText = `${user.adress.city} ${user.adress.country} ${user.adress.street} ${user.adress.numb}`

        document.body.appendChild(usersAdress)
    }

    - Дано 2 масиви з рівною кількістю об'єктів.З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив

         let usersWithId = [
                 {id: 1, name: 'vasya', age: 31, status: false},
                 {id: 2, name: 'petya', age: 30, status: true},
                 {id: 3, name: 'kolya', age: 29, status: true}, 
                 {id: 4, name: 'olya', age: 28, status: false},
                ];
         let citiesWithId = [
             {user_id: 3, country: 'USA', city: 'Portland'},
             {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
             {user_id: 2, country: 'Poland', city: 'Krakow'}, 
             {user_id: 4, country: 'USA', city: 'Miami'},
            ];
      let usersWithCities = []
    for( let user of usersWithId){ 
      for (let city of citiesWithId){
       if (user.id === city.user_id){
          user.adress = city
          usersWithCities.push(user,user.adress)
       }
    }   
}
console.log(usersWithCities)

- створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

let someInfo = document.getElementById('Info')
console.log(someInfo.innerText)

let someClass = document.getElementsByClassName('gritting')
for (let elementClass of someClass){
console.log(elementClass.innerText)
}

let someTag = document.getElementsByTagName('h1')
for (let someText of someTag){
console.log(someText)
}


- змінити цей текст використовуючи селектори id, class,  tag

let someInfo = document.getElementById('Info')
Info.innerText = "something"
console.log(Info.innerText)

let someClass = document.getElementsByClassName('gritting')
for( let elementClass of someClass){
    elementClass.innerText = "HI HI HI"
console.log(elementClass.innerText)}


let someTag = document.getElementsByTagName('h1')
for (let elementsTag of someTag){
  elementsTag.innerText = "HO HO"
console.log(elementsTag.innerText)}

- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
let someInfo = document.getElementById('Info')
Info.style.width = "100px"
Info.style.height = "100px"

let someClass = document.getElementsByClassName('gritting')
for( let elementClass of someClass){
    elementClass.style.width = "200px"
    elementClass.style.height = "200px"
}


let someTag = document.getElementsByTagName('h1')
for (let elementsTag of someTag){
  elementsTag.style.width = "250px"
  elementsTag.style.height = "50px"
}
