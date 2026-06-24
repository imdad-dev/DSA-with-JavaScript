// ==========================================
// 1. DATA TYPES & TYPE DETECTION
// ==========================================

/* Theory: 
JS has Primitives (Number, String, Boolean, undefined, null, BigInt, Symbol) 
and Non-Primitives (Objects, Arrays).
*/

let speed = 90;
let name = "Imdad";
let isValid = true;
let data = null; // Note: typeof null is "object" due to a legacy JS bug.
let nonDefined;

console.log(typeof speed);      // Output: number
console.log(typeof name);       // Output: string
console.log(typeof isValid);    // Output: boolean
console.log(typeof data);       // Output: object
console.log(typeof nonDefined); // Output: undefined

// ==========================================
// 2. OPERATORS & EQUALITY (CRITICAL FOR DSA)
// ==========================================

/* Theory: 
==  (Loose Equality): Checks only value (performs implicit conversion).
=== (Strict Equality): Checks both value AND data type. Always use === in DSA.
*/

console.log(5 == "5");  // Output: true  (coerces string to number)
console.log(5 === "5"); // Output: false (different types)

// Arithmetic & Modulo (Used in digit extraction, e.g., reversing a number)
let num = 123;
console.log(num % 10);  // Output: 3 (gets last digit)
console.log(10 / 3);    // Output: 3.3333333333333335 (JS numbers are floats by default)
console.log(Math.floor(10 / 3)); // Output: 3 (Integer division needed for DSA)

// ==========================================
// 3. TRUTHY AND FALSY VALUES
// ==========================================

/* Theory: 
When evaluated in a condition, these 6 values are always FALSE:
false, 0, "" (empty string), null, undefined, NaN.
Everything else is TRUE (including empty arrays `[]` and empty objects `{}`).
*/

let count = 0;
if (count) {
    console.log("True");
} else {
    console.log("Falsy"); // Output: Falsy
}

let arr = [];
if (arr) {
    console.log("Empty array is Truthy"); // Output: Empty array is Truthy
}

// ==========================================
// 4. STRINGS: MUTABILITY VS IMMUTABILITY
// ==========================================

/* Theory: 
Strings in JS are IMMUTABLE. You cannot change a character directly by index. 
You must create a new string or convert it to an array.
*/

let str = "hello";
str[0] = "H"; // Error silent failures in non-strict mode
console.log(str); // Output: hello (Did not change!)

// Right way to manipulate for DSA:
let strArr = str.split(""); // Convert to array
strArr[0] = "H";
str = strArr.join(""); // Convert back to string
console.log(str); // Output: Hello

// ==========================================
// 5. VARIABLES: var vs let vs const
// ==========================================

/* Theory:
var:   Function-scoped, can be redeclared. (Avoid in DSA).
let:   Block-scoped, can reassign value. (Use for loop counters, pointers).
const: Block-scoped, cannot reassign value. (Use for constants/fixed references).
*/

const PI = 3.14;
// PI = 3.15; // TypeError: Assignment to constant variable.

const nums = [1, 2, 3];
nums.push(4); // Allowed! The reference to the array doesn't change, only the content.
console.log(nums); // Output: [1, 2, 3, 4]


// ==========================================
// 6. TYPE COERCION (IMPLICIT CONVERSION)
// ==========================================

/* Theory: 
Coercion happens automatically when you apply operators to different types.

- Subtraction (-), Multiplication (*), Division (/) always force conversion to NUMBERS.
- Addition (+) is tricky: If ANY side is a STRING, it acts as string concatenation.
- When objects/arrays are forced into strings, they use their default string form:
  [] becomes "" (empty string)
  {} becomes "[object Object]"
*/

// Subtraction triggers Number conversion
console.log("4" - 1);   // Output: 3  (String "4" becomes Number 4)

// Addition triggers String concatenation if a string is present
console.log("4" + 1);   // Output: "41" (Number 1 becomes String "1")

// Object and Array Coercion:
console.log([] + {});   // Output: "[object Object]"
// Explanation: [] becomes "" and {} becomes "[object Object]". Formed: "" + "[object Object]"

console.log({} + []);   // Output: "[object Object]" 
// Explanation: Same logic in standard execution contexts: "[object Object]" + ""


console.log(true + 1);  // Output: 2  (true is coerced to 1)
console.log(false + 1); // Output: 1  (false is coerced to 0)
console.log("5" - "2"); // Output: 3  (Both coerced to numbers)

// ==========================================
// 7. EXPLICIT TYPE CONVERSION (TYPECASTING)
// ==========================================

/* Theory: 
Manually converting values using built-in methods. Always do this in DSA 
to avoid bugs from implicit coercion.
*/

// To Number
console.log(Number("12.34"));   // Output: 12.34
console.log(parseInt("12.34")); // Output: 12 (Drops decimals, crucial for indexing)
console.log(Number("abc"));     // Output: NaN (Not a Number)

// To String
let score = 500;
console.log(String(score));     // Output: "500"
console.log(score.toString());  // Output: "500"

// To Boolean
console.log(Boolean(1));        // Output: true
console.log(Boolean(0));        // Output: false

// ==========================================
// 8. NAN (NOT A NUMBER) BEHAVIOR
// ==========================================

/* Theory: 
NaN is a special value indicating an invalid math operation. 
Crucial rule: NaN is NEVER equal to anything, including itself.
*/

let invalidMath = "hello" * 5; 
console.log(invalidMath);        // Output: NaN

console.log(NaN === NaN);       // Output: false (The only value in JS not equal to itself)

// How to check for NaN safely in DSA:
console.log(Number.isNaN(invalidMath)); // Output: true

// ==========================================
// 9. UNDEFINED VS NULL
// ==========================================

/* Theory: 
undefined: A variable has been declared, but has NOT yet been assigned a value. 
           It is JavaScript's default placeholder.
null:      An intentional assignment of "nothing". It represents an empty value.

In DSA, functions that don't explicitly return anything will return `undefined` by default.
*/

let x; 
console.log(x);         // Output: undefined (JS auto-assigns this)
console.log(typeof x);  // Output: undefined

let y = null;
console.log(y);         // Output: null (Intentional emptiness)
console.log(typeof y);  // Output: object (Legacy JS bug, but important to know)

// Missing function returns
function test() {
    let sum = 2 + 2;
    // No return statement
}
console.log(test());    // Output: undefined

// Loose vs Strict comparison
console.log(undefined == null);  // Output: true  (Both represent "no value")
console.log(undefined === null); // Output: false (Different data types)