(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizar la composición frente a la herencia
    // Tratar de evitar los extends

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email      : string;
        role      : string;
    }
    //no se llama al super por que no hay herencia, no se usa el extends
    class User{
        
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({
            email,
            role,
        }: UserProps ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class SettingsProps {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({

            workingDirectory,
            lastOpenFolder

        }: SettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    interface UserSettingsProps extends User {
        workingDirectory:       string
        lastOpenFolder:         string
        email:                  string
        role:                   string
        name:                   string
        gender:                 Gender
        birthdate:               Date
    }

    // Aquí vamos a priorizar la composición de una clase en lugar de hacer herencia
    class UserSettings {
        public person: Person;
        public user: User;
        public settings: SettingsProps;

        // Inicializamos los valores iniciales del nuevo objeto
        constructor({
            name, gender, birthdate, 
            email, role,
            workingDirectory, lastOpenFolder

        }: UserSettingsProps){
            this.person = new Person({ name, gender, birthdate})
            this.user = new User({ email, role })
            this.settings = new SettingsProps({ workingDirectory, lastOpenFolder})
        }

    }

    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();