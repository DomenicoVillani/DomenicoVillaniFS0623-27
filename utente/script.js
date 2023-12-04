class User {
    constructor(userName,userSecondName,userAge,userLocation){
        this.firstname = userName
        this.secondName = userSecondName
        this.age= userAge
        this.location=userLocation
    }
    ageDifference(user){
        if(user1.age > user.age)
        {
            console.log(`${user1.firstname} e' piu' grande di ${user.firstname}`)
        } else if (user.age > user1.age){
            console.log(`${user.firstname} e' piu' grande di ${user1.firstname}`)
        } else {
            console.log(`${user1.firstname} e  ${user.firstname} hanno la stessa eta'`)
        }
    }
}

const user1 = new User('Ronaldo','Cristiano',38,'Riad')
const user2 = new User('Messi','Lionel',36,'Miami')

user1.ageDifference(user2)
