import { Week } from './types';

export const weeks7to9: Week[] = [
  {
    weekId: 7,
    title: "JavaScript Decisions",
    emoji: "🤔",
    color: "from-green-400 to-emerald-400",
    description: "Make your programs smart with if, else, and comparisons!",
    days: [
      {
        dayId: 1,
        title: "If Statements",
        emoji: "↔️",
        explanation: `# If Statements: Making Decisions! ↔️

You learned about decisions before — now let's write them in real JavaScript!

## The if Statement
\`\`\`javascript
let age = 7;

if (age >= 5) {
  console.log("You can go to school!");
}
\`\`\`

The code inside { } only runs if the condition is **true**.

## Comparison Operators
\`\`\`javascript
5 > 3    // greater than — true
5 < 3    // less than — false
5 >= 5   // greater than OR equal — true
5 <= 4   // less than OR equal — false
5 === 5  // exactly equal — true
5 !== 3  // NOT equal — true
\`\`\`

## if...else
\`\`\`javascript
let weather = "sunny";

if (weather === "rainy") {
  console.log("Take an umbrella!");
} else {
  console.log("No umbrella needed!");
}
\`\`\`

## if...else if...else
\`\`\`javascript
let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
\`\`\`

The computer checks each condition from top to bottom and runs the FIRST one that is true.
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does an if statement do?",
            options: ["Repeats code", "Runs code only when a condition is true", "Creates a variable", "Defines a function"],
            answer: "Runs code only when a condition is true",
            hint: "IF the condition is true, THEN run the code!",
            explanation: "An if statement runs its code block only when the condition inside the parentheses is true."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does === mean in JavaScript?",
            options: ["Greater than", "Less than", "Exactly equal to", "Not equal to"],
            answer: "Exactly equal to",
            hint: "Triple equals = exactly equal!",
            explanation: "=== checks if two values are exactly equal (same value AND same type)."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does !== mean?",
            options: ["Equal to", "Not equal to", "Greater than", "Less than or equal"],
            answer: "Not equal to",
            hint: "! = not, so !== = not equal!",
            explanation: "!== means 'not equal to' — it's true when the values are different."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "if (10 > 5) { console.log('Yes'); } — What prints?",
            options: ["Nothing", "Yes", "No", "An error"],
            answer: "Yes",
            hint: "Is 10 greater than 5?",
            explanation: "10 > 5 is true, so the code inside { } runs and prints 'Yes'."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "if (3 > 10) { console.log('Big'); } — What prints?",
            options: ["Big", "Nothing (condition is false)", "An error", "3"],
            answer: "Nothing (condition is false)",
            hint: "Is 3 greater than 10?",
            explanation: "3 > 10 is false, so the code inside { } does NOT run. Nothing is printed."
          },
          {
            id: 6,
            type: "code-complete",
            question: "Complete the else block:",
            code: "if (raining) {\n  console.log('Take umbrella');\n} ___ {\n  console.log('No umbrella');\n}",
            options: ["otherwise", "or", "else", "elif"],
            answer: "else",
            hint: "else runs when IF is false!",
            explanation: "'else' provides the code block to run when the if condition is false."
          },
          {
            id: 7,
            type: "true-false",
            question: "In an if-else if-else chain, ALL matching conditions run.",
            options: ["True", "False"],
            answer: "False",
            hint: "Only the FIRST matching condition runs!",
            explanation: "JavaScript stops at the first true condition in an if-else if chain. Only that block runs."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "let x = 5; if (x >= 5) { ... } — does the if block run?",
            options: ["No, x must be greater than 5", "Yes, because x equals 5 which satisfies >=", "Only if x is 6 or more", "Never"],
            answer: "Yes, because x equals 5 which satisfies >=",
            hint: ">= means greater than OR equal!",
            explanation: ">= means greater than or equal. Since x is 5 and 5 >= 5 is true, the block runs."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Which comparison checks if two values are NOT the same?",
            options: ["===", ">=", "!==", "<="],
            answer: "!==",
            hint: "! means not!",
            explanation: "!== is the 'not equal' operator — true when values are different."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "let score = 85; if (score >= 90) { A } else if (score >= 80) { B } else { C } — What runs?",
            options: ["A", "B", "C", "Both A and B"],
            answer: "B",
            hint: "85 is not >= 90, but it IS >= 80!",
            explanation: "85 >= 90 is false (skip A), but 85 >= 80 is true — so B runs."
          }
        ]
      },
      {
        dayId: 2,
        title: "Logical Operators",
        emoji: "🧩",
        explanation: `# Logical Operators: AND, OR, NOT! 🧩

Sometimes you need to check more than one condition at once.

## AND Operator (&&)
Both conditions must be true:
\`\`\`javascript
let age = 10;
let hasTicket = true;

if (age >= 8 && hasTicket) {
  console.log("You can ride!");
}
\`\`\`

Both "age >= 8" AND "hasTicket" must be true.

## OR Operator (||)
At least ONE condition must be true:
\`\`\`javascript
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("No school today!");
}
\`\`\`

## NOT Operator (!)
Flips true to false and false to true:
\`\`\`javascript
let isRaining = false;

if (!isRaining) {
  console.log("Let's go outside!");
}
\`\`\`

!false = true, !true = false

## Truth Table for AND (&&)
| A | B | A && B |
|---|---|--------|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

## Truth Table for OR (||)
| A | B | A \\|\\| B |
|---|---|--------|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does && (AND) require?",
            options: ["At least one condition true", "Both conditions true", "No conditions", "Exactly one condition true"],
            answer: "Both conditions true",
            hint: "AND = BOTH must be true!",
            explanation: "&& (AND) only returns true when BOTH conditions on each side are true."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does || (OR) require?",
            options: ["Both conditions true", "At least one condition true", "Neither condition true", "Exactly two conditions"],
            answer: "At least one condition true",
            hint: "OR = at least ONE is true!",
            explanation: "|| (OR) returns true when at least one of the conditions is true."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does !true equal?",
            options: ["true", "false", "null", "undefined"],
            answer: "false",
            hint: "! flips the value!",
            explanation: "!true = false. The ! (NOT) operator flips a boolean: true becomes false."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "true && false equals?",
            options: ["true", "false", "null", "true and false"],
            answer: "false",
            hint: "AND needs BOTH to be true!",
            explanation: "true && false = false. AND requires both sides to be true."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "true || false equals?",
            options: ["false", "true", "null", "0"],
            answer: "true",
            hint: "OR only needs ONE to be true!",
            explanation: "true || false = true. OR is true when at least one side is true."
          },
          {
            id: 6,
            type: "true-false",
            question: "false && false equals false.",
            options: ["True", "False"],
            answer: "True",
            hint: "AND needs both true — both are false here!",
            explanation: "false && false = false. AND requires both sides true, and neither is true here."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "let sunny = true; let warm = false; if (sunny && warm) — does it run?",
            options: ["Yes", "No — both must be true for &&", "Yes because sunny is true", "Error"],
            answer: "No — both must be true for &&",
            hint: "Both must be true for &&!",
            explanation: "sunny is true but warm is false, so sunny && warm = false. The if block doesn't run."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "let sunny = true; let warm = false; if (sunny || warm) — does it run?",
            options: ["No", "Yes — sunny is true so || is satisfied", "Only if both are true", "Error"],
            answer: "Yes — sunny is true so || is satisfied",
            hint: "OR only needs ONE true!",
            explanation: "sunny is true, so sunny || warm = true. The if block runs!"
          },
          {
            id: 9,
            type: "code-complete",
            question: "Complete: run if BOTH age >= 6 AND score > 50:",
            code: "if (age >= 6 ___ score > 50) { run(); }",
            options: ["||", "!", "&&", "and"],
            answer: "&&",
            hint: "Both conditions = AND = &&",
            explanation: "&& (AND) requires both conditions to be true."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "!false equals?",
            options: ["false", "true", "0", "null"],
            answer: "true",
            hint: "! flips false to true!",
            explanation: "!false = true. The NOT operator flips false to true."
          }
        ]
      },
      {
        dayId: 3,
        title: "Switch Statements",
        emoji: "🔀",
        explanation: `# Switch Statements: Many Choices! 🔀

When you have many possible values to check, a **switch** statement is cleaner than many if-else blocks.

## The switch Statement
\`\`\`javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend tomorrow!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Just a normal day.");
}
\`\`\`

## How switch Works
1. JavaScript checks the variable's value
2. It looks for a matching **case**
3. When found, it runs the code
4. **break** stops it checking more cases
5. **default** runs if no case matches (like else)

## Compared to if-else
\`\`\`javascript
// Using if-else:
if (color === "red") { ... }
else if (color === "green") { ... }
else if (color === "blue") { ... }
else { ... }

// Using switch — cleaner:
switch (color) {
  case "red": ...; break;
  case "green": ...; break;
  case "blue": ...; break;
  default: ...;
}
\`\`\`

## Why break?
Without \`break\`, JavaScript keeps running the next cases!
\`\`\`javascript
switch (num) {
  case 1:
    console.log("one");
    // NO break — falls through!
  case 2:
    console.log("two");
    break;
}
// If num is 1, prints BOTH "one" and "two"!
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is a switch statement good for?",
            options: ["Loops", "Checking one variable against many possible values", "Math calculations", "Creating functions"],
            answer: "Checking one variable against many possible values",
            hint: "Switch = choose between many cases!",
            explanation: "switch is great when you need to check one variable against many possible values."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does 'break' do in a switch statement?",
            options: ["Starts the switch", "Stops the program", "Exits the switch block", "Repeats the case"],
            answer: "Exits the switch block",
            hint: "break stops checking more cases!",
            explanation: "break exits the switch statement so no other cases run after the matched one."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What is the 'default' case?",
            options: ["The first case always", "The case that runs when no other case matches", "A required case", "The fastest case"],
            answer: "The case that runs when no other case matches",
            hint: "default = like else in if-else!",
            explanation: "default runs when the variable doesn't match any of the listed cases — like the final 'else'."
          },
          {
            id: 4,
            type: "true-false",
            question: "Without 'break', a switch statement will run the matching case AND the ones after it.",
            options: ["True", "False"],
            answer: "True",
            hint: "This is called 'fall-through'!",
            explanation: "Without break, execution 'falls through' to the next case(s). Always add break to each case."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "What keyword starts each possible value to check?",
            options: ["when", "if", "case", "check"],
            answer: "case",
            hint: "case 'value': ...",
            explanation: "Each possible value in a switch uses the 'case' keyword: case 'Monday': ..."
          },
          {
            id: 6,
            type: "code-complete",
            question: "Complete the switch for checking a color:",
            code: "switch (color) {\n  ___ \"red\":\n    console.log(\"Red!\");\n    break;\n}",
            options: ["if", "when", "case", "check"],
            answer: "case",
            hint: "case keyword introduces each option!",
            explanation: "case 'red': checks if color equals 'red'."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Which is more readable for checking 5+ possible values of one variable?",
            options: ["if-else chains", "switch statement", "They're the same", "Loops"],
            answer: "switch statement",
            hint: "switch is cleaner for many cases!",
            explanation: "For many possible values of one variable, switch is easier to read than long if-else chains."
          },
          {
            id: 8,
            type: "true-false",
            question: "Two cases can share the same code block in a switch.",
            options: ["True", "False"],
            answer: "True",
            hint: "List two cases together before the code!",
            explanation: "Yes! case 'Saturday': case 'Sunday': { same code } — both cases run the same block."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What does 'default' in switch correspond to in if-else?",
            options: ["if", "else if", "else", "break"],
            answer: "else",
            hint: "default = the fallback when nothing matches!",
            explanation: "default is like the final else — it runs when no other case matches the value."
          },
          {
            id: 10,
            type: "true-false",
            question: "A switch statement can only be used with numbers.",
            options: ["True", "False"],
            answer: "False",
            hint: "Switch works with strings too!",
            explanation: "switch works with any value type: numbers, strings, booleans, etc."
          }
        ]
      },
      {
        dayId: 4,
        title: "Changing the Page with JS",
        emoji: "✏️",
        explanation: `# Changing the Page with JavaScript! ✏️

Now let's use if statements to make a page respond to users!

## The DOM (Document Object Model)
The DOM is JavaScript's way of seeing and changing your HTML page.

\`\`\`javascript
// Get an element by its ID
let title = document.getElementById("title");

// Change its text
title.innerText = "Hello World!";

// Change its style
title.style.color = "red";
title.style.fontSize = "40px";

// Add/remove CSS classes
title.classList.add("highlight");
title.classList.remove("highlight");
\`\`\`

## Show and Hide Elements
\`\`\`javascript
let box = document.getElementById("box");

// Hide it
box.style.display = "none";

// Show it
box.style.display = "block";
\`\`\`

## A Real Interactive Example
\`\`\`html
<h1 id="mood">I feel neutral 😐</h1>
<button onclick="happy()">😊 Happy</button>
<button onclick="sad()">😢 Sad</button>

<script>
function happy() {
  let mood = document.getElementById("mood");
  mood.innerText = "I feel happy! 😊";
  mood.style.color = "green";
}

function sad() {
  let mood = document.getElementById("mood");
  mood.innerText = "I feel sad... 😢";
  mood.style.color = "blue";
}
</script>
\`\`\`

## createElement — Adding New Elements
\`\`\`javascript
let newParagraph = document.createElement("p");
newParagraph.innerText = "This is new!";
document.body.appendChild(newParagraph);
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does the DOM stand for?",
            options: ["Design Object Model", "Document Object Model", "Display Object Module", "Data Object Manager"],
            answer: "Document Object Model",
            hint: "DOM = Document Object Model!",
            explanation: "The DOM (Document Object Model) is how JavaScript sees and interacts with the HTML page."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "How do you change the text of an element?",
            options: ["element.text = '...';", "element.innerText = '...';", "element.change('...');", "element.content = '...';"],
            answer: "element.innerText = '...';",
            hint: "innerText holds the text content!",
            explanation: "Setting element.innerText changes the visible text content of the element."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "element.style.color = 'red'; does what?",
            options: ["Changes the background", "Changes the text color to red", "Removes the element", "Changes font size"],
            answer: "Changes the text color to red",
            hint: "style.color sets the CSS color!",
            explanation: "element.style.color = 'red' is like adding color: red to the element's CSS."
          },
          {
            id: 4,
            type: "code-complete",
            question: "Complete the code to hide an element:",
            code: "box.style.___ = \"none\";",
            options: ["visibility", "show", "display", "hidden"],
            answer: "display",
            hint: "display: none hides elements!",
            explanation: "element.style.display = 'none' hides the element — it disappears from the page."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "element.classList.add('glow'); does what?",
            options: ["Removes the class 'glow'", "Adds the CSS class 'glow' to the element", "Creates a new element", "Changes color"],
            answer: "Adds the CSS class 'glow' to the element",
            hint: "classList.add = add a class!",
            explanation: "classList.add('glow') adds the CSS class 'glow' to the element."
          },
          {
            id: 6,
            type: "true-false",
            question: "You can change CSS styles of elements using JavaScript.",
            options: ["True", "False"],
            answer: "True",
            hint: "element.style.property = 'value'!",
            explanation: "Yes! JavaScript can change any CSS property: element.style.color, .fontSize, .display, etc."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "document.createElement('p') does what?",
            options: ["Finds a paragraph", "Creates a new paragraph element", "Deletes a paragraph", "Styles a paragraph"],
            answer: "Creates a new paragraph element",
            hint: "createElement = make a new element!",
            explanation: "document.createElement('p') creates a new <p> element (not yet on the page)."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "To add a newly created element to the page, you use:",
            options: ["element.add()", "document.insert()", "document.body.appendChild(element)", "element.show()"],
            answer: "document.body.appendChild(element)",
            hint: "appendChild adds it to the page!",
            explanation: "appendChild(element) adds the new element as a child of the body (or any other parent)."
          },
          {
            id: 9,
            type: "true-false",
            question: "element.style.display = 'block'; makes a hidden element visible again.",
            options: ["True", "False"],
            answer: "True",
            hint: "display: block = show it!",
            explanation: "Yes! Setting display to 'block' (or 'flex', 'grid', etc.) makes a hidden element visible."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "onclick='myFunction()' in HTML does what?",
            options: ["Styles the element", "Runs myFunction() when the element is clicked", "Creates a function", "Imports JavaScript"],
            answer: "Runs myFunction() when the element is clicked",
            hint: "onclick = on click, run this!",
            explanation: "onclick is an event handler — it calls the named JavaScript function when the element is clicked."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 7 Review!",
        emoji: "🤔",
        explanation: `# Week 7 Review: JavaScript Decision Maker! 🤔

You can now make your programs think and decide!

## Day 1: If Statements ↔️
\`\`\`javascript
if (condition) {
  // runs if true
} else if (otherCondition) {
  // runs if first was false and this is true
} else {
  // runs if everything above was false
}
\`\`\`

Comparison operators: ===, !==, >, <, >=, <=

## Day 2: Logical Operators 🧩
- && (AND) — both must be true
- || (OR) — at least one must be true
- ! (NOT) — flips true to false

## Day 3: Switch Statements 🔀
- Check one variable against many cases
- Each case ends with break
- default = fallback (like else)

## Day 4: Changing the Page ✏️
\`\`\`javascript
document.getElementById('id')
element.innerText = 'new text'
element.style.color = 'red'
element.classList.add('class')
element.style.display = 'none'
\`\`\`

## Mini Project Example
\`\`\`javascript
function checkScore(score) {
  let message = document.getElementById('result');

  if (score >= 90) {
    message.innerText = "A - Excellent!";
    message.style.color = "green";
  } else if (score >= 70) {
    message.innerText = "B - Good Job!";
    message.style.color = "blue";
  } else {
    message.innerText = "Keep Practicing!";
    message.style.color = "orange";
  }
}
\`\`\`

**Your programs can make smart decisions! 🌟**`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What operator checks if two values are exactly equal?",
            options: ["=", "==", "===", "equals"],
            answer: "===",
            hint: "Triple equals = exactly equal!",
            explanation: "=== checks strict equality — both value and type must match."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "true && false equals?",
            options: ["true", "false", "null", "undefined"],
            answer: "false",
            hint: "AND needs both true!",
            explanation: "true && false = false. AND requires both sides to be true."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What is the purpose of 'break' in a switch statement?",
            options: ["Start the switch", "Exit after matching case", "Loop back", "Skip to default"],
            answer: "Exit after matching case",
            hint: "Break exits the switch!",
            explanation: "break stops execution and exits the switch, preventing fall-through to other cases."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "How do you change the text of element with id='title'?",
            options: ["getElementById('title').text = '...'", "getElementById('title').innerText = '...'", "getElement('title') = '...'", "title.text = '...'"],
            answer: "getElementById('title').innerText = '...'",
            hint: "innerText sets the text content!",
            explanation: "document.getElementById('title').innerText = 'new text' changes the element's text."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "false || true equals?",
            options: ["false", "true", "null", "0"],
            answer: "true",
            hint: "OR only needs one true!",
            explanation: "false || true = true. OR is true when at least one side is true."
          },
          {
            id: 6,
            type: "true-false",
            question: "element.style.display = 'none'; hides an element.",
            options: ["True", "False"],
            answer: "True",
            hint: "display: none = invisible!",
            explanation: "Yes! Setting display to 'none' hides the element from the page."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What runs when no case matches in a switch?",
            options: ["The first case", "Nothing", "default:", "An error"],
            answer: "default:",
            hint: "default = the fallback!",
            explanation: "The default case runs when the variable doesn't match any listed case."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "!true equals?",
            options: ["true", "false", "1", "null"],
            answer: "false",
            hint: "! flips the value!",
            explanation: "!true = false. The NOT operator flips true to false."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "let score = 75; if (score > 80) { A } else { B } — what runs?",
            options: ["A", "B", "Both A and B", "Neither"],
            answer: "B",
            hint: "Is 75 greater than 80?",
            explanation: "75 > 80 is false, so A doesn't run. The else block B runs."
          },
          {
            id: 10,
            type: "true-false",
            question: "classList.add('highlight') adds a CSS class to an element.",
            options: ["True", "False"],
            answer: "True",
            hint: "classList.add = add a class!",
            explanation: "Yes! classList.add('className') adds a CSS class to the element dynamically."
          }
        ]
      }
    ]
  },
  {
    weekId: 8,
    title: "JavaScript Loops",
    emoji: "🔁",
    color: "from-violet-400 to-purple-400",
    description: "Master for loops, while loops, and looping through data!",
    days: [
      {
        dayId: 1,
        title: "For Loops",
        emoji: "🔄",
        explanation: `# For Loops: Count and Repeat! 🔄

A **for loop** repeats code a specific number of times.

## For Loop Syntax
\`\`\`javascript
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
\`\`\`

Output:
\`\`\`
Count: 0
Count: 1
Count: 2
Count: 3
Count: 4
\`\`\`

## The Three Parts
\`\`\`javascript
for (start; condition; update) {
  // code to repeat
}
\`\`\`

1. **Start** — \`let i = 0\` — where to begin (usually 0)
2. **Condition** — \`i < 5\` — keep going while this is true
3. **Update** — \`i++\` — what to do after each loop

## Counting Up and Down
\`\`\`javascript
// Count up from 1 to 10:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Count down from 5 to 1:
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
\`\`\`

## Using the Counter
\`\`\`javascript
// Print times tables for 5:
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}
\`\`\`

Output: 5 x 1 = 5, 5 x 2 = 10, ...
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What are the three parts of a for loop?",
            options: ["start, middle, end", "start, condition, update", "begin, check, repeat", "value, test, change"],
            answer: "start, condition, update",
            hint: "for (start; condition; update)!",
            explanation: "A for loop has: start (initial value), condition (when to stop), update (how to change each time)."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "for (let i = 0; i < 3; i++) — how many times does this loop run?",
            options: ["0", "3", "4", "2"],
            answer: "3",
            hint: "i goes 0, 1, 2 — that's 3 times!",
            explanation: "i starts at 0 and loops while i < 3. So i = 0, 1, 2 — runs 3 times."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does i++ do in a for loop?",
            options: ["Subtracts 1 from i", "Adds 1 to i", "Resets i to 0", "Stops the loop"],
            answer: "Adds 1 to i",
            hint: "++ increments by 1!",
            explanation: "i++ adds 1 to i after each loop iteration. It's short for i = i + 1."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "for (let i = 1; i <= 5; i++) — what is the LAST value of i that runs?",
            options: ["4", "5", "6", "0"],
            answer: "5",
            hint: "i <= 5 means i can be 5!",
            explanation: "The loop runs while i <= 5. The last value where this is true is i = 5."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete the for loop to count from 1 to 10:",
            code: "for (let i = 1; i ___ 10; i++) {\n  console.log(i);\n}",
            options: ["<", ">", "<=", ">="],
            answer: "<=",
            hint: "We want to include 10, so <=!",
            explanation: "i <= 10 includes 10 in the loop. Using < 10 would stop at 9."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "for (let i = 5; i >= 1; i--) — what direction does this count?",
            options: ["Up from 5", "Down from 5 to 1", "Stays at 5", "Random"],
            answer: "Down from 5 to 1",
            hint: "i-- decrements, and condition is >= 1!",
            explanation: "i-- subtracts 1 each time, and the loop keeps going while i >= 1. Counts: 5, 4, 3, 2, 1."
          },
          {
            id: 7,
            type: "true-false",
            question: "The variable 'i' in a for loop can be used inside the loop body.",
            options: ["True", "False"],
            answer: "True",
            hint: "i holds the current count!",
            explanation: "Yes! The loop variable (often 'i') is available inside the loop to use in calculations or output."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "for (let i = 0; i < 0; i++) — how many times does this run?",
            options: ["0 times", "1 time", "Infinite", "Error"],
            answer: "0 times",
            hint: "The condition is false immediately!",
            explanation: "i starts at 0 and the condition i < 0 is immediately false. The loop never runs."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What prints first: for (let i = 0; i < 3; i++) { console.log(i); }",
            options: ["1", "3", "0", "2"],
            answer: "0",
            hint: "i starts at 0!",
            explanation: "The loop starts with i = 0, so 0 is printed first."
          },
          {
            id: 10,
            type: "true-false",
            question: "A for loop can count backwards using i-- and i >= 1.",
            options: ["True", "False"],
            answer: "True",
            hint: "i-- subtracts and >= checks!",
            explanation: "Yes! for (let i = 10; i >= 1; i--) counts from 10 down to 1."
          }
        ]
      },
      {
        dayId: 2,
        title: "While Loops",
        emoji: "⏳",
        explanation: `# While Loops: Repeat Until Done! ⏳

A **while loop** repeats code WHILE a condition is true — you don't need to know how many times in advance!

## While Loop Syntax
\`\`\`javascript
let count = 0;

while (count < 5) {
  console.log("Count: " + count);
  count++;
}
\`\`\`

Output: Count: 0, 1, 2, 3, 4

## The Difference from For Loops
- **For loop** — when you know how many times
- **While loop** — when you keep going until something happens

## Real Life Example
\`\`\`javascript
let hunger = 10;

while (hunger > 0) {
  console.log("Still hungry... eating!");
  hunger -= 3;
}

console.log("Full now!");
\`\`\`

## do...while Loop
Runs the code FIRST, then checks the condition:
\`\`\`javascript
let answer;

do {
  answer = prompt("Type 'yes' to continue:");
} while (answer !== "yes");

console.log("Great, you said yes!");
\`\`\`

## ⚠️ Infinite Loop Warning!
\`\`\`javascript
// DANGER! Never ending loop:
while (true) {
  console.log("This never stops!");
  // No way to exit!
}
\`\`\`

Always make sure your condition can become false!
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "When should you use a while loop instead of a for loop?",
            options: ["When you know exactly how many times", "When you don't know how many times in advance", "Always", "Never"],
            answer: "When you don't know how many times in advance",
            hint: "While loops run until a condition changes!",
            explanation: "Use a while loop when the number of repetitions depends on something that changes at runtime."
          },
          {
            id: 2,
            type: "true-false",
            question: "A while loop checks its condition BEFORE each iteration.",
            options: ["True", "False"],
            answer: "True",
            hint: "It checks first, then runs if true!",
            explanation: "A while loop checks the condition before each run. If false from the start, it never runs."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What is an infinite loop?",
            options: ["A very long loop", "A loop that never stops", "A loop with 1000 iterations", "A loop with break"],
            answer: "A loop that never stops",
            hint: "Infinite = forever!",
            explanation: "An infinite loop never terminates because its condition never becomes false — it's a bug!"
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "let x = 3; while (x > 0) { x--; } — what is x after the loop?",
            options: ["3", "1", "0", "-1"],
            answer: "0",
            hint: "x decrements until it's no longer > 0!",
            explanation: "x starts at 3, decrements each loop: 3→2→1→0. When x=0, condition is false, loop stops."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "What is different about a do...while loop?",
            options: ["It never runs", "It runs the code FIRST, then checks the condition", "It's the same as while", "It counts automatically"],
            answer: "It runs the code FIRST, then checks the condition",
            hint: "do the code first, THEN check!",
            explanation: "do...while always runs the code at least once, then checks the condition to decide if it repeats."
          },
          {
            id: 6,
            type: "code-complete",
            question: "Complete the while loop that runs while health > 0:",
            code: "___ (health > 0) {\n  health -= 10;\n}",
            options: ["for", "if", "while", "repeat"],
            answer: "while",
            hint: "while (condition) runs while it's true!",
            explanation: "while (health > 0) keeps running the block as long as health is greater than 0."
          },
          {
            id: 7,
            type: "true-false",
            question: "A while loop must always have a way to eventually make its condition false.",
            options: ["True", "False"],
            answer: "True",
            hint: "Otherwise it's an infinite loop!",
            explanation: "Yes! Without a way to make the condition false, the loop runs forever — a critical bug."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "let x = 10; while (x < 5) { x++; } — how many times does this run?",
            options: ["5 times", "10 times", "0 times", "Infinite"],
            answer: "0 times",
            hint: "Is 10 < 5?",
            explanation: "x = 10 and the condition is x < 5. Since 10 is not < 5, the loop never runs."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Which loop guarantees the code runs at least once?",
            options: ["for loop", "while loop", "do...while loop", "if statement"],
            answer: "do...while loop",
            hint: "do THEN check!",
            explanation: "do...while runs the code first, then checks. So it always runs at least once."
          },
          {
            id: 10,
            type: "true-false",
            question: "while (true) { break; } is an example of an infinite loop.",
            options: ["True", "False"],
            answer: "False",
            hint: "What does break do?",
            explanation: "Not quite — the break statement immediately exits the loop, so it only runs once."
          }
        ]
      },
      {
        dayId: 3,
        title: "Arrays",
        emoji: "📚",
        explanation: `# Arrays: Lists of Data! 📚

An **array** is a variable that can store MULTIPLE values in one place!

## Creating an Array
\`\`\`javascript
let fruits = ["apple", "banana", "orange", "mango"];
let scores = [95, 87, 72, 100, 88];
let mixed = ["Emma", 7, true, "coding"];
\`\`\`

## Accessing Items (Index)
Arrays are numbered starting from **0**:
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
//                0          1         2

console.log(fruits[0]);  // "apple"
console.log(fruits[1]);  // "banana"
console.log(fruits[2]);  // "orange"
\`\`\`

## Array Length
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length);  // 3
\`\`\`

## Adding and Removing
\`\`\`javascript
fruits.push("mango");    // add to end
fruits.pop();            // remove from end
\`\`\`

## Looping Through an Array
\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Even cleaner with for...of:
for (let fruit of fruits) {
  console.log(fruit);
}
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is an array?",
            options: ["A single value", "A variable that stores multiple values", "A loop", "A function"],
            answer: "A variable that stores multiple values",
            hint: "Arrays hold lists of values!",
            explanation: "An array is a variable that can store multiple values in an ordered list."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What index does the FIRST item in an array have?",
            options: ["1", "0", "-1", "First"],
            answer: "0",
            hint: "Arrays start counting from 0!",
            explanation: "Array indexing starts at 0. The first item is at index 0, second at 1, etc."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "let colors = ['red', 'green', 'blue']; — what is colors[1]?",
            options: ["'red'", "'green'", "'blue'", "undefined"],
            answer: "'green'",
            hint: "Index 0 = red, index 1 = green!",
            explanation: "colors[1] accesses index 1, which is 'green' (red is [0], green is [1], blue is [2])."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "let arr = [10, 20, 30]; What is arr.length?",
            options: ["2", "3", "30", "0"],
            answer: "3",
            hint: "Count the items: 10, 20, 30 = 3!",
            explanation: "arr.length returns the number of items. There are 3 items: 10, 20, 30."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete to add 'grape' to the END of the array:",
            code: "fruits.___('grape');",
            options: ["add", "push", "append", "insert"],
            answer: "push",
            hint: "push adds to the end!",
            explanation: "fruits.push('grape') adds 'grape' to the end of the fruits array."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "What does arr.pop() do?",
            options: ["Adds an item to the start", "Removes the last item", "Sorts the array", "Removes the first item"],
            answer: "Removes the last item",
            hint: "pop = remove from the end!",
            explanation: "arr.pop() removes and returns the last item from the array."
          },
          {
            id: 7,
            type: "true-false",
            question: "An array can hold both strings and numbers at the same time.",
            options: ["True", "False"],
            answer: "True",
            hint: "Arrays can hold any types!",
            explanation: "Yes! JavaScript arrays can mix types: ['Emma', 7, true] is perfectly valid."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "for (let item of myArray) { } does what?",
            options: ["Creates a new array", "Loops through each item in myArray", "Sorts the array", "Deletes items"],
            answer: "Loops through each item in myArray",
            hint: "for...of loops through each item!",
            explanation: "for...of is a clean way to loop through every item in an array, one at a time."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "let nums = [5, 10, 15]; What is nums[2]?",
            options: ["5", "10", "15", "undefined"],
            answer: "15",
            hint: "Index 2 is the third item (0, 1, 2)!",
            explanation: "nums[2] is the item at index 2 — which is 15 (5 is [0], 10 is [1], 15 is [2])."
          },
          {
            id: 10,
            type: "true-false",
            question: "Arrays are created using square brackets [].",
            options: ["True", "False"],
            answer: "True",
            hint: "[ ] are the array brackets!",
            explanation: "Yes! Arrays are created with square brackets: let arr = [1, 2, 3];"
          }
        ]
      },
      {
        dayId: 4,
        title: "Looping Through Arrays",
        emoji: "🔃",
        explanation: `# Looping Through Arrays: Processing Lists! 🔃

Combining loops and arrays unlocks powerful programming!

## For Loop with Array
\`\`\`javascript
let names = ["Emma", "Liam", "Sophia", "Noah"];

for (let i = 0; i < names.length; i++) {
  console.log("Hello, " + names[i] + "!");
}
\`\`\`

Output: Hello, Emma! Hello, Liam! Hello, Sophia! Hello, Noah!

## For...of Loop (Simpler)
\`\`\`javascript
for (let name of names) {
  console.log("Hello, " + name + "!");
}
\`\`\`

Same output — even cleaner!

## Finding the Biggest Number
\`\`\`javascript
let scores = [67, 92, 78, 88, 95, 71];
let highest = 0;

for (let score of scores) {
  if (score > highest) {
    highest = score;
  }
}

console.log("Highest score: " + highest); // 95
\`\`\`

## Counting Items That Match
\`\`\`javascript
let ages = [5, 8, 12, 6, 9, 7, 11];
let over10 = 0;

for (let age of ages) {
  if (age > 10) {
    over10++;
  }
}

console.log(over10 + " kids are over 10"); // 2
\`\`\`

## Adding to the Page with a Loop
\`\`\`javascript
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  let li = document.createElement("li");
  li.innerText = fruit;
  document.getElementById("list").appendChild(li);
}
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is names.length used for in a for loop with an array?",
            options: ["Accessing the first item", "Knowing when to stop looping", "Adding to the array", "Sorting the array"],
            answer: "Knowing when to stop looping",
            hint: "i < names.length makes sure we don't go past the end!",
            explanation: "Using array.length as the condition prevents the loop from going past the last item."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "for (let item of arr) — what does 'item' hold each iteration?",
            options: ["The index number", "The current array element", "The array length", "null"],
            answer: "The current array element",
            hint: "for...of gives you each VALUE!",
            explanation: "In for...of, the variable holds the actual value of the current array element."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "let arr = [3, 7, 1, 9, 2]; To find the biggest, you start with highest = ?",
            options: ["9", "0", "1", "100"],
            answer: "0",
            hint: "Start with 0 so any number beats it!",
            explanation: "Starting highest at 0 ensures the first number bigger than 0 becomes the new highest."
          },
          {
            id: 4,
            type: "true-false",
            question: "for...of is simpler than a regular for loop when you just need each item.",
            options: ["True", "False"],
            answer: "True",
            hint: "for...of doesn't need an index!",
            explanation: "for...of is simpler and more readable when you just need each value and don't care about the index."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "let words = ['cat', 'dog', 'bird']; After the loop, how many were checked?",
            options: ["1", "2", "3", "4"],
            answer: "3",
            hint: "The loop visits every item!",
            explanation: "A for...of or for loop visits every item in the array — all 3 items are checked."
          },
          {
            id: 6,
            type: "code-complete",
            question: "Complete the for...of loop:",
            code: "for (let num ___ numbers) {\n  console.log(num);\n}",
            options: ["in", "from", "of", "at"],
            answer: "of",
            hint: "for (let item OF array)!",
            explanation: "for...of syntax: for (let variable of array) — 'of' is the keyword."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "You can create HTML elements inside a loop and add them to the page.",
            options: ["False — loops can't create elements", "True — with createElement and appendChild", "Only with CSS", "Only in the head"],
            answer: "True — with createElement and appendChild",
            hint: "createElement inside a loop!",
            explanation: "Yes! You can call createElement() inside a loop to dynamically create many HTML elements."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "let scores = [80, 90, 70]; The loop counter starts at i = 0. What is scores[i] first?",
            options: ["90", "70", "80", "0"],
            answer: "80",
            hint: "Index 0 = first item!",
            explanation: "scores[0] = 80, which is the first item in the array."
          },
          {
            id: 9,
            type: "true-false",
            question: "You can use an if statement inside a for loop.",
            options: ["True", "False"],
            answer: "True",
            hint: "Combining tools = powerful programming!",
            explanation: "Absolutely! Combining loops and if statements is a fundamental programming pattern."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "let nums = [2, 4, 6, 8]; How do you access the last item?",
            options: ["nums[4]", "nums[3]", "nums.last", "nums[-1]"],
            answer: "nums[3]",
            hint: "Length is 4, last index is 4-1=3!",
            explanation: "The last item's index is length - 1. For a 4-item array, the last index is 3."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 8 Review!",
        emoji: "🔁",
        explanation: `# Week 8 Review: Loop Master! 🔁

Loops and arrays — two of the most powerful tools in programming!

## Day 1: For Loops 🔄
\`\`\`javascript
for (let i = 0; i < 5; i++) {
  // runs 5 times
}
\`\`\`
- Start: let i = 0
- Condition: i < 5
- Update: i++

## Day 2: While Loops ⏳
\`\`\`javascript
while (condition) {
  // runs while condition is true
}
\`\`\`
- Use when you don't know how many times
- Always ensure the condition can become false!

## Day 3: Arrays 📚
\`\`\`javascript
let arr = ["a", "b", "c"];
arr[0]       // "a" (first item)
arr.length   // 3
arr.push("d") // add to end
arr.pop()    // remove from end
\`\`\`

## Day 4: Looping Arrays 🔃
\`\`\`javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let item of arr) {
  console.log(item);
}
\`\`\`

## Combined Example: Grade Counter
\`\`\`javascript
let grades = [85, 92, 78, 96, 88, 71];
let total = 0;
let highest = 0;

for (let grade of grades) {
  total += grade;
  if (grade > highest) highest = grade;
}

let average = total / grades.length;
console.log("Average:", average);
console.log("Highest:", highest);
\`\`\`

**Arrays + Loops = Real programs! 🚀**`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "for (let i = 1; i <= 5; i++) — how many times does this run?",
            options: ["4", "5", "6", "1"],
            answer: "5",
            hint: "i goes 1, 2, 3, 4, 5 — five times!",
            explanation: "i starts at 1 and runs while i <= 5. So i = 1, 2, 3, 4, 5 — runs 5 times."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "let arr = ['x', 'y', 'z']; What is arr[2]?",
            options: ["'x'", "'y'", "'z'", "undefined"],
            answer: "'z'",
            hint: "Index: x=0, y=1, z=2!",
            explanation: "arr[2] accesses index 2, which is 'z'."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Which loop is best when you don't know how many times to repeat?",
            options: ["for loop", "while loop", "if statement", "switch"],
            answer: "while loop",
            hint: "while runs until the condition changes!",
            explanation: "Use a while loop when the number of repetitions depends on a changing condition."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "arr.push('new') does what?",
            options: ["Removes the last item", "Adds 'new' to the start", "Adds 'new' to the end", "Sorts the array"],
            answer: "Adds 'new' to the end",
            hint: "push = add to end!",
            explanation: "push() adds a new item to the END of the array."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "for (let n of nums) — what does 'n' hold?",
            options: ["The index", "The current value", "The array length", "null"],
            answer: "The current value",
            hint: "for...of gives you each VALUE!",
            explanation: "In for...of, the variable holds the actual value of each array element."
          },
          {
            id: 6,
            type: "true-false",
            question: "Arrays start counting from index 1.",
            options: ["True", "False"],
            answer: "False",
            hint: "Arrays start from 0!",
            explanation: "Arrays are zero-indexed. The first item is at index 0, not 1."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "let arr = [10, 20, 30, 40]; What is arr.length?",
            options: ["3", "4", "40", "0"],
            answer: "4",
            hint: "Count the items!",
            explanation: "There are 4 items in the array, so arr.length = 4."
          },
          {
            id: 8,
            type: "true-false",
            question: "An infinite while loop is a programming bug.",
            options: ["True", "False"],
            answer: "True",
            hint: "Infinite loops crash programs!",
            explanation: "An infinite loop (condition never becomes false) will crash or freeze the program."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "arr.pop() removes which item?",
            options: ["The first item", "A random item", "The last item", "All items"],
            answer: "The last item",
            hint: "pop = remove from end!",
            explanation: "arr.pop() removes and returns the last item from the array."
          },
          {
            id: 10,
            type: "code-complete",
            question: "Complete to loop through each fruit in the fruits array:",
            code: "for (let fruit ___ fruits) {\n  console.log(fruit);\n}",
            options: ["in", "of", "from", "at"],
            answer: "of",
            hint: "for...of loops through values!",
            explanation: "for (let fruit of fruits) loops through each fruit value in the array."
          }
        ]
      }
    ]
  },
  {
    weekId: 9,
    title: "JavaScript Functions",
    emoji: "⚙️",
    color: "from-indigo-400 to-blue-400",
    description: "Write reusable code with functions — the building blocks of programs!",
    days: [
      {
        dayId: 1,
        title: "What are Functions?",
        emoji: "⚙️",
        explanation: `# Functions: Reusable Code Blocks! ⚙️

A **function** is a block of code that you can name and run whenever you want!

## Why Functions?
Without functions, you'd repeat the same code:
\`\`\`javascript
// Without functions (repetitive):
console.log("Hello, Emma!");
console.log("Emma has been greeted.");

console.log("Hello, Liam!");
console.log("Liam has been greeted.");
\`\`\`

## Defining a Function
\`\`\`javascript
function greet(name) {
  console.log("Hello, " + name + "!");
  console.log(name + " has been greeted.");
}
\`\`\`

## Calling a Function
\`\`\`javascript
greet("Emma");  // Hello, Emma! / Emma has been greeted.
greet("Liam");  // Hello, Liam! / Liam has been greeted.
greet("Sofia"); // Hello, Sofia! / Sofia has been greeted.
\`\`\`

## Parts of a Function
\`\`\`javascript
function  greet  (name) {
  // ↑ keyword  ↑name  ↑parameter
  console.log("Hello, " + name);
  // ↑ function body
}
\`\`\`

- **function** keyword — tells JavaScript this is a function
- **name** — what you call it (like "greet")
- **parameters** — inputs in parentheses (like "name")
- **body** — the code inside { }

## Functions Without Parameters
\`\`\`javascript
function sayHello() {
  console.log("Hello World!");
}

sayHello(); // Call it with empty ()
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is a function in JavaScript?",
            options: ["A type of loop", "A reusable block of code with a name", "A variable", "An array"],
            answer: "A reusable block of code with a name",
            hint: "Functions can be called many times!",
            explanation: "A function is a named, reusable block of code that you can call whenever you need it."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which keyword defines a function?",
            options: ["define", "func", "function", "create"],
            answer: "function",
            hint: "The keyword is 'function'!",
            explanation: "The 'function' keyword is used to define a function in JavaScript."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What are parameters in a function?",
            options: ["The function's name", "Values passed INTO the function", "The code inside", "The return value"],
            answer: "Values passed INTO the function",
            hint: "Parameters are the inputs!",
            explanation: "Parameters are variables listed in the function definition that receive values when the function is called."
          },
          {
            id: 4,
            type: "code-complete",
            question: "Complete the function definition:",
            code: "___ sayHello() {\n  console.log('Hello!');\n}",
            options: ["define", "create", "function", "make"],
            answer: "function",
            hint: "The keyword is 'function'!",
            explanation: "function sayHello() { } defines a function named sayHello."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "How do you CALL (run) a function named 'greet'?",
            options: ["function greet;", "run greet;", "greet();", "call.greet;"],
            answer: "greet();",
            hint: "Name followed by () calls it!",
            explanation: "To call a function, write its name followed by parentheses: greet();"
          },
          {
            id: 6,
            type: "true-false",
            question: "A function can be called multiple times.",
            options: ["True", "False"],
            answer: "True",
            hint: "That's the whole point — reuse!",
            explanation: "Yes! Functions are meant to be reused. You can call the same function as many times as you need."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "function add(a, b) — how many parameters does this function have?",
            options: ["0", "1", "2", "3"],
            answer: "2",
            hint: "Count a and b!",
            explanation: "The function add has 2 parameters: 'a' and 'b'."
          },
          {
            id: 8,
            type: "true-false",
            question: "A function runs automatically as soon as it's defined.",
            options: ["True", "False"],
            answer: "False",
            hint: "You have to CALL a function to run it!",
            explanation: "Defining a function just creates it — it doesn't run until you call it with functionName()."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "function greet(name) { ... } — when you call greet('Emma'), what is 'name' inside?",
            options: ["undefined", "'Emma'", "greet", "null"],
            answer: "'Emma'",
            hint: "The argument 'Emma' fills in the parameter 'name'!",
            explanation: "When you call greet('Emma'), the string 'Emma' is passed in as the parameter 'name'."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Why are functions useful?",
            options: ["They make code longer", "They allow reusing code without repeating it", "They slow programs down", "They remove variables"],
            answer: "They allow reusing code without repeating it",
            hint: "DRY = Don't Repeat Yourself!",
            explanation: "Functions let you write code once and reuse it many times — reducing repetition."
          }
        ]
      },
      {
        dayId: 2,
        title: "Return Values",
        emoji: "↩️",
        explanation: `# Return Values: Functions That Give Back! ↩️

Functions can give back (**return**) a result after doing their work!

## Functions That Return Values
\`\`\`javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result); // 8
\`\`\`

The function runs, calculates a + b, then **returns** the result to where it was called.

## Using Return Values
\`\`\`javascript
function square(num) {
  return num * num;
}

console.log(square(4));  // 16
console.log(square(7));  // 49

let area = square(5);    // 25
\`\`\`

## Return Stops the Function
\`\`\`javascript
function checkAge(age) {
  if (age >= 18) {
    return "Adult";   // stops here if true
  }
  return "Child";     // only runs if above didn't
}

console.log(checkAge(20)); // "Adult"
console.log(checkAge(10)); // "Child"
\`\`\`

## Functions Without Return
If a function has no return statement, it returns **undefined**.
\`\`\`javascript
function sayHi() {
  console.log("Hi!");
  // no return
}

let x = sayHi();  // Hi! is printed
console.log(x);   // undefined
\`\`\`

## Real Example: Grade Calculator
\`\`\`javascript
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}

console.log(getGrade(95)); // "A"
console.log(getGrade(75)); // "C"
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does 'return' do in a function?",
            options: ["Loops back to the start", "Sends a value back to where the function was called", "Creates a variable", "Prints to the console"],
            answer: "Sends a value back to where the function was called",
            hint: "return sends the result back!",
            explanation: "return sends a value back from the function to the code that called it."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "function multiply(a, b) { return a * b; } What does multiply(4, 5) return?",
            options: ["9", "45", "20", "undefined"],
            answer: "20",
            hint: "4 × 5 = ?",
            explanation: "multiply(4, 5) returns a * b = 4 * 5 = 20."
          },
          {
            id: 3,
            type: "true-false",
            question: "When a return statement is reached, the function stops running.",
            options: ["True", "False"],
            answer: "True",
            hint: "Return = done, send result back!",
            explanation: "Yes! return immediately ends the function and sends back the value."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What does a function return if it has no return statement?",
            options: ["0", "null", "undefined", "false"],
            answer: "undefined",
            hint: "No return = undefined!",
            explanation: "If a function has no return statement, it returns undefined by default."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete the function to return the sum:",
            code: "function add(a, b) {\n  ___ a + b;\n}",
            options: ["print", "send", "return", "output"],
            answer: "return",
            hint: "return sends the value back!",
            explanation: "return a + b; sends the sum back to whoever called the function."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "let x = add(3, 7); — where does the returned value go?",
            options: ["Nowhere", "Into variable x", "Into the console", "Into the HTML"],
            answer: "Into variable x",
            hint: "The return value is assigned to x!",
            explanation: "The value returned by add(3, 7) is stored in the variable x."
          },
          {
            id: 7,
            type: "true-false",
            question: "You can save the return value of a function in a variable.",
            options: ["True", "False"],
            answer: "True",
            hint: "let result = myFunction();",
            explanation: "Yes! let result = someFunction(); stores the returned value in 'result'."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "function double(n) { return n * 2; } — double(6) returns?",
            options: ["12", "6", "2", "3"],
            answer: "12",
            hint: "6 × 2 = ?",
            explanation: "double(6) returns 6 * 2 = 12."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "In getGrade, if score = 85 and we check score >= 90 first (false), then score >= 80 (true) — what returns?",
            options: ["'A'", "'B'", "'C'", "'F'"],
            answer: "'B'",
            hint: "85 passes the >= 80 check!",
            explanation: "85 >= 90 is false (skip), 85 >= 80 is true — return 'B'."
          },
          {
            id: 10,
            type: "true-false",
            question: "A function can only have one return statement.",
            options: ["True", "False"],
            answer: "False",
            hint: "You can return from multiple places!",
            explanation: "Functions can have multiple return statements — useful in if-else blocks to return different values."
          }
        ]
      },
      {
        dayId: 3,
        title: "Function Scope",
        emoji: "🔭",
        explanation: `# Scope: Where Variables Live! 🔭

**Scope** determines where in your code a variable can be seen and used.

## Global Scope — Everywhere
Variables declared outside functions are **global** — accessible anywhere:
\`\`\`javascript
let globalName = "Emma";  // global variable

function greet() {
  console.log("Hello, " + globalName); // ✅ works!
}

greet();
console.log(globalName); // ✅ works here too!
\`\`\`

## Local Scope — Inside Functions Only
Variables declared inside a function are **local** — only available inside that function:
\`\`\`javascript
function makeGreeting() {
  let greeting = "Hello!"; // local variable
  console.log(greeting); // ✅ works inside
}

makeGreeting();
console.log(greeting); // ❌ ERROR! greeting doesn't exist here
\`\`\`

## Block Scope with let
Variables declared with \`let\` inside { } stay inside:
\`\`\`javascript
if (true) {
  let x = 10; // block scope
  console.log(x); // ✅ works
}
console.log(x); // ❌ ERROR!
\`\`\`

## Why Scope Matters
- Keeps variables organized 📦
- Prevents bugs from accidental variable sharing
- Each function has its own "private workspace"

## The Stack — Functions Calling Functions
\`\`\`javascript
function greet(name) {
  let msg = buildMessage(name);
  console.log(msg);
}

function buildMessage(name) {
  return "Hello, " + name + "!";
}

greet("Emma"); // Hello, Emma!
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is 'scope' in JavaScript?",
            options: ["The size of a function", "Where a variable can be accessed", "The speed of a function", "How many parameters a function has"],
            answer: "Where a variable can be accessed",
            hint: "Scope = visibility of a variable!",
            explanation: "Scope determines where in your code a variable exists and can be used."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "A global variable is one that...",
            options: ["Only exists inside a function", "Can be accessed anywhere", "Is very large", "Is a constant"],
            answer: "Can be accessed anywhere",
            hint: "Global = everywhere!",
            explanation: "A global variable is declared outside functions and can be accessed from anywhere in the code."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "A local variable (inside a function) can be accessed...",
            options: ["Anywhere in the file", "Only inside the function it's declared in", "Only by other functions", "Nowhere"],
            answer: "Only inside the function it's declared in",
            hint: "Local = private to that function!",
            explanation: "A local variable only exists inside the function where it was declared."
          },
          {
            id: 4,
            type: "true-false",
            question: "A function can use global variables.",
            options: ["True", "False"],
            answer: "True",
            hint: "Global variables are accessible everywhere!",
            explanation: "Yes! Functions can read and use global variables declared outside them."
          },
          {
            id: 5,
            type: "true-false",
            question: "Code outside a function can access variables declared inside that function.",
            options: ["True", "False"],
            answer: "False",
            hint: "Local variables are private to the function!",
            explanation: "No! Variables declared inside a function (local scope) cannot be accessed outside it."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "What happens if you try to use a local variable outside its function?",
            options: ["Works fine", "Returns 0", "Causes an error (undefined)", "Returns null"],
            answer: "Causes an error (undefined)",
            hint: "The variable doesn't exist outside!",
            explanation: "Using a local variable outside its scope causes a ReferenceError — the variable doesn't exist there."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "let x = 5; declared OUTSIDE all functions is...",
            options: ["Local variable", "Global variable", "Private variable", "Broken variable"],
            answer: "Global variable",
            hint: "Outside all functions = global!",
            explanation: "Variables declared outside all functions have global scope and are accessible everywhere."
          },
          {
            id: 8,
            type: "true-false",
            question: "Two different functions can have local variables with the same name without conflict.",
            options: ["True", "False"],
            answer: "True",
            hint: "Each function has its own private scope!",
            explanation: "Yes! Each function has its own scope. function a() { let x = 1; } and function b() { let x = 2; } don't conflict."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Why is local scope useful?",
            options: ["It makes variables global", "It keeps variables organized and prevents naming conflicts", "It makes programs slower", "It creates more memory"],
            answer: "It keeps variables organized and prevents naming conflicts",
            hint: "Private workspaces = organized code!",
            explanation: "Local scope gives each function its own private workspace, preventing accidental variable sharing."
          },
          {
            id: 10,
            type: "true-false",
            question: "let inside an if block { } is only available inside that block.",
            options: ["True", "False"],
            answer: "True",
            hint: "let has block scope — { } creates a new scope!",
            explanation: "let has block scope. Variables declared with let inside {} are only accessible inside those {}."
          }
        ]
      },
      {
        dayId: 4,
        title: "Arrow Functions",
        emoji: "➡️",
        explanation: `# Arrow Functions: Shorter Syntax! ➡️

**Arrow functions** are a shorter, more modern way to write functions in JavaScript!

## Regular Function vs Arrow Function
\`\`\`javascript
// Regular function:
function add(a, b) {
  return a + b;
}

// Arrow function (same thing!):
const add = (a, b) => {
  return a + b;
};

// Even shorter — one line:
const add = (a, b) => a + b;
\`\`\`

## How Arrow Functions Work
1. Remove the \`function\` keyword
2. Add \`=>\` (fat arrow) after the parameters
3. If only one line, skip { } and return

## Examples
\`\`\`javascript
// One parameter — can skip parentheses:
const double = n => n * 2;
console.log(double(5)); // 10

// No parameters — keep empty ():
const sayHi = () => "Hello!";
console.log(sayHi()); // Hello!

// Multiple lines — use { } and return:
const gradeScore = (score) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  return "C";
};
\`\`\`

## Arrow Functions in Arrays
Arrow functions shine in array methods:
\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

// Double each number:
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter only big ones:
let bigOnes = numbers.filter(n => n > 3);
console.log(bigOnes); // [4, 5]
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What symbol is used to create an arrow function?",
            options: ["->", "<-", "=>", "=="],
            answer: "=>",
            hint: "It looks like a fat arrow!",
            explanation: "Arrow functions use the => symbol (fat arrow) after the parameters."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "const double = n => n * 2; — what does double(6) return?",
            options: ["6", "3", "12", "2"],
            answer: "12",
            hint: "6 × 2 = ?",
            explanation: "double(6) applies n * 2 with n = 6, returning 12."
          },
          {
            id: 3,
            type: "true-false",
            question: "Arrow functions can be stored in variables with const.",
            options: ["True", "False"],
            answer: "True",
            hint: "const add = (a, b) => a + b;",
            explanation: "Yes! Arrow functions are expressions, so they're typically stored in const variables."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "const greet = () => 'Hello!'; — how many parameters does greet have?",
            options: ["1", "0", "2", "Undefined"],
            answer: "0",
            hint: "Empty () = no parameters!",
            explanation: "() means no parameters. greet takes no inputs and returns 'Hello!'."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "const add = (a, b) => a + b; — what does add(3, 4) return?",
            options: ["34", "7", "12", "undefined"],
            answer: "7",
            hint: "3 + 4 = ?",
            explanation: "add(3, 4) computes a + b = 3 + 4 = 7."
          },
          {
            id: 6,
            type: "code-complete",
            question: "Complete the arrow function that squares a number:",
            code: "const square = n ___ n * n;",
            options: ["=>", "->", "=", ">>"],
            answer: "=>",
            hint: "Arrow functions use =>!",
            explanation: "const square = n => n * n; creates an arrow function that returns n squared."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "numbers.map(n => n * 2) does what?",
            options: ["Removes items", "Creates a new array with each number doubled", "Sorts the array", "Finds the biggest"],
            answer: "Creates a new array with each number doubled",
            hint: "map transforms each item!",
            explanation: ".map() applies the function to each item and returns a new array with the results."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "numbers.filter(n => n > 5) does what?",
            options: ["Removes numbers > 5", "Returns only numbers greater than 5", "Sorts numbers", "Doubles numbers"],
            answer: "Returns only numbers greater than 5",
            hint: "filter keeps items where the condition is true!",
            explanation: ".filter() returns a new array with only items where the condition is true."
          },
          {
            id: 9,
            type: "true-false",
            question: "An arrow function with one line can skip { } and return.",
            options: ["True", "False"],
            answer: "True",
            hint: "Implicit return for single expressions!",
            explanation: "With a single expression, arrow functions implicitly return it: const double = n => n * 2;"
          },
          {
            id: 10,
            type: "true-false",
            question: "Arrow functions and regular functions do the exact same job.",
            options: ["True", "False"],
            answer: "True",
            hint: "Different syntax, same result!",
            explanation: "For most purposes, arrow functions and regular functions work the same way — just different syntax."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 9 Review!",
        emoji: "⚙️",
        explanation: `# Week 9 Review: Function Expert! ⚙️

Functions are the building blocks of all programs!

## Day 1: What are Functions? ⚙️
\`\`\`javascript
function functionName(parameter) {
  // code to run
}
functionName("value"); // call it
\`\`\`

## Day 2: Return Values ↩️
\`\`\`javascript
function add(a, b) {
  return a + b; // sends result back
}
let result = add(3, 5); // result = 8
\`\`\`

## Day 3: Scope 🔭
- **Global** — declared outside functions, everywhere
- **Local** — declared inside functions, only there
- Each function has its own private workspace

## Day 4: Arrow Functions ➡️
\`\`\`javascript
// Regular:
function add(a, b) { return a + b; }

// Arrow:
const add = (a, b) => a + b;

// Array methods:
[1,2,3].map(n => n * 2)    // [2,4,6]
[1,2,3].filter(n => n > 1) // [2,3]
\`\`\`

## Big Example: Score System
\`\`\`javascript
const getGrade = (score) => {
  if (score >= 90) return "A 🌟";
  if (score >= 80) return "B 😊";
  if (score >= 70) return "C 👍";
  return "Keep trying! 💪";
};

const scores = [95, 78, 85, 62, 91];
const grades = scores.map(s => getGrade(s));
console.log(grades);
// ["A 🌟", "C 👍", "B 😊", "Keep trying! 💪", "A 🌟"]
\`\`\`

**Functions make powerful, reusable programs! 🚀**`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does the function keyword do?",
            options: ["Calls a function", "Defines/creates a function", "Returns a value", "Creates a loop"],
            answer: "Defines/creates a function",
            hint: "function = define it!",
            explanation: "The 'function' keyword defines/creates a function with a name and body."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "function square(n) { return n * n; } What does square(5) return?",
            options: ["5", "10", "25", "55"],
            answer: "25",
            hint: "5 × 5 = ?",
            explanation: "square(5) returns n * n = 5 * 5 = 25."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "A local variable inside a function...",
            options: ["Is available everywhere", "Only exists inside that function", "Is the same as global", "Cannot be used"],
            answer: "Only exists inside that function",
            hint: "Local = private!",
            explanation: "Local variables only exist inside the function where they're declared."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "const half = n => n / 2; — what does half(10) return?",
            options: ["10", "20", "5", "2"],
            answer: "5",
            hint: "10 ÷ 2 = ?",
            explanation: "half(10) returns n / 2 = 10 / 2 = 5."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "What does [1,2,3].map(n => n + 10) return?",
            options: ["[1,2,3]", "[11,12,13]", "[10,10,10]", "36"],
            answer: "[11,12,13]",
            hint: "map applies the function to each item!",
            explanation: ".map(n => n + 10) adds 10 to each item: [1+10, 2+10, 3+10] = [11, 12, 13]."
          },
          {
            id: 6,
            type: "true-false",
            question: "return stops a function and sends a value back.",
            options: ["True", "False"],
            answer: "True",
            hint: "return = send back and stop!",
            explanation: "Yes! return exits the function immediately and sends the value to the caller."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What does .filter() do to an array?",
            options: ["Sorts it", "Returns items where the condition is true", "Doubles each item", "Removes all items"],
            answer: "Returns items where the condition is true",
            hint: "filter keeps items that pass the test!",
            explanation: ".filter() returns a new array with only the items where the callback returns true."
          },
          {
            id: 8,
            type: "true-false",
            question: "Arrow functions use the => symbol.",
            options: ["True", "False"],
            answer: "True",
            hint: "Fat arrow!",
            explanation: "Yes! Arrow functions use => between parameters and the function body."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "A function with no return statement returns...",
            options: ["0", "null", "undefined", "false"],
            answer: "undefined",
            hint: "No return = undefined!",
            explanation: "Functions with no return statement return undefined by default."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "What is the benefit of functions?",
            options: ["They make code longer", "Write once, use many times — no repetition", "They run slower", "They add variables"],
            answer: "Write once, use many times — no repetition",
            hint: "DRY = Don't Repeat Yourself!",
            explanation: "Functions let you write code once and call it many times, avoiding repetition."
          }
        ]
      }
    ]
  }
];
