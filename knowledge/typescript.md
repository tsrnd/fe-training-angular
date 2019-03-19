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
