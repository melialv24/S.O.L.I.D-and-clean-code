(() => {

    // No aplicando el principio de responsabilidad única

    type Gender= 'M' | 'F'

    interface PersonProps {
            name    : string, 
            gender  : Gender, 
            birthdate: Date
    }

    class Person {

        public name: string
        public gender: Gender
        public birthdate: Date

        constructor({ name, gender, birthdate } : PersonProps){
            this.name = name
            this.gender = gender
            this.birthdate = birthdate
        }

    }
    // el super es para llamar el constructor del padre
    // un usuario no existiría si no existe una persona
    //por lo tanto extiende las propiedades personas con unas adicionales
    interface UserProps {
        email:     string
        role:      string
        name:      string
        gender:    Gender
        birthdate:  Date
    }

    class User extends Person {
        
        public lastAccess: Date
        public email: string
        public role: string

        constructor({ email, role, name, gender, birthdate}: UserProps ){
            super({name, gender, birthdate})
            this.email = email
            this.role = role
            this.lastAccess = new Date()
        }

        checkCredentials(){
            return true
        }
    }

    interface UserSettings extends User {
        workingDirectory:       string
        lastOpenFolder:         string
        email:                  string
        role:                   string
        name:                   string
        gender:                 Gender
        birthdate:               Date
    }


    class UserSettings extends User {

        public workingDirectory: string
        public lastOpenFolder: string


        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role ,
            name ,
            gender,
            birthdate
        }: UserSettings){
            super({email, role, name, gender, birthdate})
            this.workingDirectory = workingDirectory
            this.lastOpenFolder = lastOpenFolder
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: 'user/home',
        lastOpenFolder: '/home',
        email: 'melissaalh24@gmail.com',
        role: 'admin',
        name: 'melissa',
        gender: 'F',
        birthdate: new Date('2000-11-24')
    })

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() })

})()