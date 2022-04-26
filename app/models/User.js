class User {
    constructor(id,user,name,bio){
        this.id=id
        this.user=user
        this.name=name
        this.bio=bio
        this.dataCreated= new Date()
        this.lastUpdated= new Date() 
    }
    getUsername(){
        return this.name
    }
    getBio(){
        return this.bio
    }
    getDataCreated(){
        return this.dataCreated
    }
    getLastUpdated(){
        return this.lastUpdated
    }
    setUsername(newUsername){
        this.name = newUsername
    }
    setBio(newUserbio){
        this.bio = newUserbio
    }
}
module.exports = User