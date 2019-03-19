# Những kiến thức cơ bản cần nắm về Typescript
1. Basic type
    * **Boolean**
    * **Number**
    * **String**
    * **Object**
    * **Array**
    * **Enum**
    * **Any**
    * **Void**

2. Function

    * **Declare function**

    ```
      // Type 1
      function userInfo1(info: string): string {
        return `User info ${info}`;
      }
      // Type 2
      let userInfo2 = function(info: string): string {
        return `User info ${info}`;
      }
      // Type 3
      let userInfo3: (name: string, age: number) => string = 
        function(name, age) {
          return `My name is ${name}, ${age} years old`;
        }
    ```

    * **Return**
    
    ```
      function noReturn(): void {
        console.log('ok');
      }
      function returnString(): (string | number) {
        return 'string';
      }
      function returnNumber(): number {
        return 23;
      }
      function returnStrArr(): number[] {
        return [2];
      }
    ```

    * **Parameter**

    ```
      // Full param
      function user1(name: string, age: number): string {
        return `My name is ${name}, ${age} years old`;
      }
      // Default param
      function user2(name: string = 'Dong', age: number): string {
        return `My name is ${name}, ${age} years old`;
      }
      // Optional and Default Parameters
      function user3(name: string, age?: number): string {
        return `My name is ${name}, ${age} years old`;
      }
      // Rest param
      function user4(name: string, ...info: any[]): string {
        return `My name is ${name}, ${info} years old`;
      }

    ```

    * **Overloads (use in case duplicate function name)**

    ```
    function overloadFunc(x: number): string;
    function overloadFunc(x: string): number;
    function overloadFunc(x: boolean): boolean;
    function overloadFunc(x: any): any {
      console.log(typeof x);
      if (typeof x === 'number') {
        return x.toString() + 'string';
      } else if (typeof x === 'string') {
        return +x;
      } else {
        console.log('boolean');
      }
    }
    ```

3. Class
    * **Normal Class**
    ```
    class Issue {
      id: number;
      name: string;
      status: string;
      constructor(id: number, name: string, status: string) {
        this.id = id;
        this.name = name;
        this.status = status;
      }

      showJob() {
        return `id: ${this.id} - name: ${this.name} - status: ${this.status}`;
      }
    }
    var issue = new Issue(12, 'Fix sonthing', 'Done');
    console.log(issue.showJob());
    ```

    * **Inheritance**
    ```
    class Person {
      name: string;
      age: number;

      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }

      getInfo() {
        return `Name: ${this.name} - age: ${this.age}`;
      }
    }

    class Man extends Person {
      skill: string;

      constructor(name: string, age: number, skill: string) {
        super(name, age);
        this.skill = skill;
      }

      getInfoAndSkill() {
        return `Name: ${this.name} - age: ${this.age} - skill: ${this.skill}`;
      }  
    }

    const man = new Man('Dong', 12, 'Da bong');
    console.log(man.getInfoAndSkill());
    ```

    * **Access modifier**
    ```
    /*
                  Inside    outside   Child Class
      Public      +         +         +
      Private     +         -         -
      Protected   +         -         +
    */
    
    class Person {
      private name: string;
      age: number;

      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }

      getInfo() {
        return `Name: ${this.name} - age: ${this.age}`;
      }
    }
    
    class Man extends Person {
      static skill: string;

      constructor(name: string, age: number, skill: string) {
        super(name, age);
        Man.skill = skill;
      }

      getInfoAndSkill() {
        return `Name: ${this.name} - age: ${this.age} - skill: ${Man.skill}`;
      }

      publicAccessChild() {
        console.log(this.name);
      }
    }

    const man = new Man('Dong', 12, 'Da bong');
    man.publicAccessChild();

    const person = new Person('asd', 12);
    ```

    * **Accessors (getter & setter)**
    ```
    class Person {
      private name: string;
      age: number;

      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }

      getInfo() {
        return `Name: ${this.name} - age: ${this.age}`;
      }

      get getName(): string {
        return this.name;
      }

      set getName(v: string) {
        this.name = v;
      }
    }
    const person = new Person('Dong', 12);
    person.getName = 'ho van dong';
    console.log(person.getName);
    ```
