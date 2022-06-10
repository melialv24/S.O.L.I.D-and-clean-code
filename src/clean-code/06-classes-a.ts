(() => {

    // No aplicando el principio de responsabilidad única

    type Gender= 'M' | 'F'
    class Person {

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthday: Date
        ){}

    }
    // el super es para llamar el constructor del padre
    // un usuario no existiría si no existe una persona
    //por lo tanto extiende las propiedades personas con unas adicionales
    class User extends Person {
        
        public lastAccess: Date

        constructor(
            public email: string, 
            public role: string,
            name: string,
            gender: Gender,
            birthday: Date,
        ){
            super( name, gender, birthday)
            this.lastAccess = new Date()
        }

        checkCredentials(){
            return true
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthday: Date

        ){
            super( email, role, name, gender, birthday )
        }
    }


    const userSettings = new UserSettings(
        'user/home',
        '/home',
        'melissaalh24@gmail.com',
        'admin',
        'melissa',
        'F',
        new Date('2000-11-24')
    )

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() })

})()