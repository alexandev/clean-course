(() =>{

  // No aplicando el principio de responsabilidad unica.

  type Gender = 'M'|'F';

  // class Person {
  //   public name: string;
  //   public gender: Gender;
  //   public birthdate: Date;

  //   constructor(name: string, gender: Gender, birthdate: Date){
  //     this.name = name;
  //     this.gender = gender;
  //     this.birthdate = birthdate;
  //   }
  // }

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ){}
  }


  const newPerson = new Person('Alexander', 'M', new Date('1992-12-22'));

  console.log({ newPerson });



  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role:  string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ){
      super( name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials(){
      return true;
    }
  }

  class UserSettings extends User{
    constructor(
      public workingDirectory : string,
      public lastOpenFolder   : string,
      email                   : string,
      role                    : string,
      name                    : string,
      gender                  : Gender,
      birthdate               : Date
    ){
      super( email, role, name, gender, birthdate );
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'fernando@google.com',
    'Admin',
    'Fernando',
    'M',
    new Date('1985-10-21')
  );

  console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });
})();