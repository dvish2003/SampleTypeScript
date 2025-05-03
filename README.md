<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TypeScript Installation and Basics Guide</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        h1 {
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
            margin-top: 30px;
        }
        code {
            background-color: #f5f5f5;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: Consolas, Monaco, 'Andale Mono', monospace;
        }
        pre {
            background-color: #f8f8f8;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        pre code {
            background-color: transparent;
            padding: 0;
        }
        .note {
            background-color: #e7f5fe;
            border-left: 4px solid #3498db;
            padding: 10px;
            margin: 10px 0;
        }
        .toc {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>TypeScript Installation and Basics Guide</h1>
    
    <p>This guide covers TypeScript installation on different operating systems and basic TypeScript concepts with code examples.</p>
    
    <div class="toc">
        <h2>Table of Contents</h2>
        <ul>
            <li><a href="#installation">Installation</a>
                <ul>
                    <li><a href="#windows-installation">Windows</a></li>
                    <li><a href="#macos-installation">macOS</a></li>
                    <li><a href="#ubuntu-installation">Ubuntu</a></li>
                </ul>
            </li>
            <li><a href="#typescript-introduction">TypeScript Introduction</a></li>
            <li><a href="#primitive-data-types">Primitive Data Types</a></li>
            <li><a href="#arrays">Arrays</a></li>
            <li><a href="#objects">Objects</a></li>
            <li><a href="#functions">Functions</a></li>
            <li><a href="#any-and-unknown-types">Any and Unknown Types</a></li>
            <li><a href="#custom-types">Custom Types</a></li>
            <li><a href="#literal-types">Literal Types</a></li>
        </ul>
    </div>

    <h2 id="installation">Installation</h2>

    <h3 id="windows-installation">Windows Installation</h3>
    <ol>
        <li>Install Node.js:
            <ul>
                <li>Download the LTS version from <a href="https://nodejs.org/" target="_blank">nodejs.org</a></li>
                <li>Run the installer with default settings</li>
            </ul>
        </li>
        <li>Install TypeScript:
            <pre><code>npm install -g typescript</code></pre>
        </li>
        <li>Verify Installation:
            <pre><code>tsc --version</code></pre>
        </li>
    </ol>

    <h3 id="macos-installation">macOS Installation</h3>
    <ol>
        <li>Install Node.js:
            <pre><code>brew install node</code></pre>
            Or download from <a href="https://nodejs.org/" target="_blank">nodejs.org</a>
        </li>
        <li>Install TypeScript:
            <pre><code>npm install -g typescript</code></pre>
        </li>
    </ol>

    <h3 id="ubuntu-installation">Ubuntu Installation</h3>
    <pre><code># Step 1: Install Node.js and npm
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

# For automatic compilation on changes:
npx tsc --watch</code></pre>

    <h2 id="typescript-introduction">TypeScript Introduction</h2>
    <p>TypeScript is a syntactic superset of JavaScript which adds static typing. This means TypeScript adds syntax on top of JavaScript, allowing developers to add types.</p>
    
    <div class="note">
        <h3>Why use TypeScript?</h3>
        <p>JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around. TypeScript allows specifying the types of data being passed around within the code, and reports errors when the types don't match.</p>
        <p>For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.</p>
    </div>

    <h2 id="primitive-data-types">Primitive Data Types</h2>
    <pre><code>let myName: string = "Name"; // String value
let myNumber: number = 2; // Number value
let myBoolean: boolean = true; // Boolean value

let myUnderFineVar: undefined = undefined; // undefined value
let myNulls: null = null; // null value</code></pre>

    <h2 id="arrays">Arrays</h2>
    <pre><code>// Number Array
let myNumberArray: number[] = [1,2,3,4,5];

// String Array
let myStringArray: string[] = ["Apple","banana"];

// Mixed dataType Array
let myMixArray: (string | number | boolean)[] = ["apple",1,true];

// Array in Array
let arraysInArrays: number[][] = [[1,2,3],[1,2,3,4],[1,2,3,4,5]];

// Mixed dataType Array in Array
let mixArraysInArrays: (string | number | boolean)[][] = [
  ["Apple",2,3],
  [1,true,3,4],
  ["banana",2,true,4,5]
];

// Fixed length array (tuple)
let fixArray: [string, number, string] = ["apple",1,"banana"];</code></pre>

    <h2 id="objects">Objects</h2>
    <pre><code>// Custom type
type Person = {
  name: string,
  age: number
}

// Object with type annotation
let person1: {name: string; age: number;} = {
  name: "Vishan",
  age: 27
};

// Using custom type
let person3: Person = {
  name: "sanduni",
  age: 27
};</code></pre>

    <h2 id="functions">Functions</h2>
    <pre><code>// Basic function
function add(a: number, b: number): number {
  return a + b;
}

// Void function
function logHello(massage: string): void {
  console.log(massage);
}

// Arrow function
let add1 = (a: number, b: number): number => {
  return a + b;
};</code></pre>

    <h2 id="any-and-unknown-types">Any and Unknown Types</h2>
    <pre><code>let myVariable: any = 4;
let unknownVar: unknown = 4;

myVariable = "dfdSGDG";
unknownVar = "sdfdsgd";

myVariable.toUpperCase();

// Type checking for unknown
if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}

// Type assertion
(unknownVar as string).toUpperCase();</code></pre>

    <h2 id="custom-types">Custom Types</h2>
    <pre><code>type MyCustomString = string;
type MyCustomNumber = number;
type MyCustomBoolean = boolean;
type MyCustomStringOrNumber = string | number;

// Using custom types
let myNum: MyCustomNumber = 1;
let myBoolean1: MyCustomBoolean = true;
let myChoice: MyCustomStringOrNumber = 1;

// Custom object type with optional properties
type Person = {
  name: string,
  readonly age: number,
  address?: string
}</code></pre>

    <h2 id="literal-types">Literal Types</h2>
    <pre><code>let direction: "North" = "North";

let direction1: "North" | "West" | "East" | "South" = "North"
direction1 = "East"

// Custom type literal
type Direction = "North" | "West" | "East" | "South";
let direction3: Direction = "East"</code></pre>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>
