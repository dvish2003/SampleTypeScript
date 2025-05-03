# 📘 TypeScript Installation and Basics Guide

This guide covers **TypeScript installation** on various operating systems along with basic TypeScript concepts using practical code examples. Perfect for beginners looking to understand the foundations of TypeScript! 🚀

---

## 📑 Table of Contents

- [📥 Installation](#installation)
  - [🪟 Windows](#windows-installation)
  - [🍏 macOS](#macos-installation)
  - [🐧 Ubuntu](#ubuntu-installation)
- [📚 TypeScript Introduction](#typescript-introduction)
- [🔢 Primitive Data Types](#primitive-data-types)
- [📦 Arrays](#arrays)
- [👤 Objects](#objects)
- [🛠️ Functions](#functions)
- [🎭 Any and Unknown Types](#any-and-unknown-types)
- [🏗️ Custom Types](#custom-types)
- [🧭 Literal Types](#literal-types)

---

## 📥 Installation

### 🪟 Windows Installation

1. **Install Node.js**  
   - Download the LTS version from [nodejs.org](https://nodejs.org/)
   - Run the installer using default settings

2. **Install TypeScript**
   ```bash
   npm install -g typescript
Verify Installation
bash
Copy code
tsc --version
🍏 macOS Installation
Install Node.js

bash
Copy code
brew install node
Or download from nodejs.org

Install TypeScript

bash
Copy code
npm install -g typescript
🐧 Ubuntu Installation
bash
Copy code
# Step 1: Install Node.js and npm
sudo apt update
sudo apt install nodejs npm -y

# Step 2: Install TypeScript
sudo npm install -g typescript

# Step 3: Verify installation
tsc --version

# Step 4: Create a TypeScript file
touch index.ts

# Step 5: Compile TypeScript to JavaScript
npx tsc

# For automatic compilation on file changes
npx tsc --watch
📚 TypeScript Introduction
TypeScript is a syntactic superset of JavaScript that adds static typing, helping developers catch errors early and write more robust code.

⚠️ Why use TypeScript?

JavaScript is loosely typed, which can lead to unexpected bugs. TypeScript allows you to define and enforce types, improving code quality and maintainability.

🔢 Primitive Data Types
ts
Copy code
let myName: string = "Name";
let myNumber: number = 2;
let myBoolean: boolean = true;

let myUnderFineVar: undefined = undefined;
let myNulls: null = null;
📦 Arrays
ts
Copy code
let myNumberArray: number[] = [1, 2, 3, 4, 5];
let myStringArray: string[] = ["Apple", "banana"];
let myMixArray: (string | number | boolean)[] = ["apple", 1, true];

let arraysInArrays: number[][] = [[1,2,3], [1,2,3,4], [1,2,3,4,5]];
let mixArraysInArrays: (string | number | boolean)[][] = [
  ["Apple", 2, 3],
  [1, true, 3, 4],
  ["banana", 2, true, 4, 5]
];

let fixArray: [string, number, string] = ["apple", 1, "banana"];
👤 Objects
ts
Copy code
type Person = {
  name: string;
  age: number;
};

let person1: { name: string; age: number } = {
  name: "Vishan",
  age: 27
};

let person3: Person = {
  name: "Sanduni",
  age: 27
};
🛠️ Functions
ts
Copy code
function add(a: number, b: number): number {
  return a + b;
}

function logHello(message: string): void {
  console.log(message);
}

let add1 = (a: number, b: number): number => {
  return a + b;
};
🎭 Any and Unknown Types
ts
Copy code
let myVariable: any = 4;
let unknownVar: unknown = 4;

myVariable = "SomeString";
unknownVar = "AnotherString";

myVariable.toUpperCase();

if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}

// Type assertion
(unknownVar as string).toUpperCase();
🏗️ Custom Types
ts
Copy code
type MyCustomString = string;
type MyCustomNumber = number;
type MyCustomBoolean = boolean;
type MyCustomStringOrNumber = string | number;

let myNum: MyCustomNumber = 1;
let myBoolean1: MyCustomBoolean = true;
let myChoice: MyCustomStringOrNumber = "Hello";

type Person = {
  name: string;
  readonly age: number;
  address?: string;
};
🧭 Literal Types
ts
Copy code
let direction: "North" = "North";

let direction1: "North" | "West" | "East" | "South" = "North";
direction1 = "East";

type Direction = "North" | "West" | "East" | "South";
let direction3: Direction = "East";
✅ License
This project is open-source and available under the MIT License.

🙌 Contributing
Contributions are welcome! If you find any issues or want to improve this guide, feel free to open a pull request or submit an issue.

Happy Coding! 💻✨

