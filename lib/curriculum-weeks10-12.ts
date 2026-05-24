import { Week } from './types';

export const weeks10to12: Week[] = [
  {
    weekId: 10,
    title: "Build a Web Page!",
    emoji: "🏗️",
    color: "from-orange-400 to-red-400",
    description: "Put HTML, CSS, and JavaScript together to build a real project!",
    days: [
      {
        dayId: 1,
        title: "Planning Your Project",
        emoji: "📝",
        explanation: `# Planning Your Project: Think Before You Code! 📝

The best coders PLAN before they write a single line of code!

## What Are We Building?
This week we're building a **Personal About Me Page** with:
- Your name and bio
- Your favourite hobbies (as a list)
- A color-changing theme button
- A simple quiz about yourself

## Step 1: Sketch It Out (Wireframe)
Before coding, draw a rough sketch of what the page looks like:
\`\`\`
┌─────────────────────────┐
│   My Name — Header      │
├─────────────────────────┤
│   Photo  │  About Me    │
│   (emoji)│  paragraph   │
├─────────────────────────┤
│   My Hobbies List       │
│   • Hobby 1             │
│   • Hobby 2             │
├─────────────────────────┤
│   [Change Theme Button] │
└─────────────────────────┘
\`\`\`

## Step 2: Break It Into Parts (Decompose!)
1. **HTML structure** — the skeleton
2. **CSS styling** — the look
3. **JavaScript** — the interactivity

## Step 3: Build One Part at a Time
Don't try to build everything at once!
- Build the HTML first ✅
- Style with CSS second ✅
- Add JavaScript last ✅

## The HTML Structure
\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>About Me</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1 id="name">Your Name</h1>
    </header>
    <main>
      <section id="about">...</section>
      <section id="hobbies">...</section>
    </main>
    <script src="script.js"></script>
  </body>
</html>
\`\`\`

## Why Plan First?
- Avoids confusion later 😊
- Makes coding faster 🚀
- Easier to spot problems early 🔍
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What should you do BEFORE writing any code?",
            options: ["Start typing immediately", "Plan the project (sketch and decompose)", "Pick colors", "Write JavaScript first"],
            answer: "Plan the project (sketch and decompose)",
            hint: "Plan first, code second!",
            explanation: "Good programmers plan before coding — sketching the layout and breaking it into small parts."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What is a wireframe?",
            options: ["CSS code", "A rough sketch of what a page will look like", "A type of loop", "A JavaScript function"],
            answer: "A rough sketch of what a page will look like",
            hint: "Wire = basic outline, frame = layout!",
            explanation: "A wireframe is a simple sketch showing where elements will go on the page."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "In what order should you build a web project?",
            options: ["JavaScript → CSS → HTML", "CSS → HTML → JavaScript", "HTML → CSS → JavaScript", "Any order"],
            answer: "HTML → CSS → JavaScript",
            hint: "Build the skeleton first!",
            explanation: "Best practice: HTML structure first, then CSS styling, then JavaScript interactivity."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Breaking a big project into small parts is called?",
            options: ["Looping", "Decomposition", "Scoping", "Refactoring"],
            answer: "Decomposition",
            hint: "We learned this in Week 2!",
            explanation: "Decomposition is breaking a complex problem into smaller, manageable pieces."
          },
          {
            id: 5,
            type: "true-false",
            question: "Planning before coding makes the process faster and easier.",
            options: ["True", "False"],
            answer: "True",
            hint: "A good plan prevents many mistakes!",
            explanation: "Yes! Planning prevents confusion, helps spot problems early, and makes coding faster."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "Which HTML tag creates a reusable section of the page?",
            options: ["<part>", "<area>", "<section>", "<block>"],
            answer: "<section>",
            hint: "section = a section of the page!",
            explanation: "The <section> tag groups related content into a meaningful section of the page."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Where does a <link> to a CSS file go in HTML?",
            options: ["<body>", "<footer>", "<head>", "<section>"],
            answer: "<head>",
            hint: "CSS links go in the head!",
            explanation: "<link rel='stylesheet' href='style.css'> belongs in the <head> section."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Where should the <script> tag go for best performance?",
            options: ["In <head>", "Just before </body>", "Inside <h1>", "After </html>"],
            answer: "Just before </body>",
            hint: "Load HTML first, then scripts!",
            explanation: "Placing <script> just before </body> lets the HTML load first before JavaScript runs."
          },
          {
            id: 9,
            type: "true-false",
            question: "A website's HTML, CSS, and JavaScript can be in separate files.",
            options: ["True", "False"],
            answer: "True",
            hint: "Separate files = cleaner code!",
            explanation: "Yes! HTML in .html, CSS in .css, JavaScript in .js files keeps code organized."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "What does <header> represent on a page?",
            options: ["The bottom of the page", "The top/heading section of the page", "A paragraph", "A list"],
            answer: "The top/heading section of the page",
            hint: "Header = the top of the page!",
            explanation: "<header> represents introductory content at the top of a page or section."
          }
        ]
      },
      {
        dayId: 2,
        title: "Building the Structure",
        emoji: "🦴",
        explanation: `# Building the HTML Structure! 🦴

Today we write the HTML skeleton of our About Me page.

## The DOCTYPE Declaration
Every HTML page starts with:
\`\`\`html
<!DOCTYPE html>
\`\`\`
This tells the browser "this is an HTML5 page."

## Semantic HTML Tags
These tags describe what the content IS, not just how it looks:

\`\`\`html
<header>   — top of the page
<nav>      — navigation links
<main>     — main content
<section>  — a group of related content
<article>  — a self-contained piece
<aside>    — side content
<footer>   — bottom of the page
\`\`\`

## Our About Me HTML
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Me</title>
</head>
<body>
  <header>
    <h1>👩‍💻 Emma's Page</h1>
    <p>Age 7 — Future Coder!</p>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>Hi! I'm Emma. I love coding, drawing, and reading.</p>
    </section>

    <section id="hobbies">
      <h2>My Hobbies</h2>
      <ul>
        <li>🎮 Gaming</li>
        <li>🎨 Drawing</li>
        <li>📚 Reading</li>
        <li>💻 Coding</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>Made with ❤️ by Emma</p>
  </footer>
</body>
</html>
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does <!DOCTYPE html> tell the browser?",
            options: ["The page title", "This is an HTML5 document", "The CSS file location", "The author's name"],
            answer: "This is an HTML5 document",
            hint: "DOCTYPE declares the document type!",
            explanation: "<!DOCTYPE html> declares this is an HTML5 document so the browser renders it correctly."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What is 'semantic HTML'?",
            options: ["HTML with colors", "Tags that describe what the content means", "HTML with JavaScript", "Fast HTML"],
            answer: "Tags that describe what the content means",
            hint: "Semantic = meaningful!",
            explanation: "Semantic HTML uses tags like <header>, <main>, <footer> that describe what the content IS."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Which tag holds the main content of the page?",
            options: ["<body>", "<content>", "<main>", "<section>"],
            answer: "<main>",
            hint: "main = the main content!",
            explanation: "<main> contains the primary content of the page — there should be only one per page."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Which tag is best for the copyright/info at the bottom of a page?",
            options: ["<bottom>", "<end>", "<footer>", "<last>"],
            answer: "<footer>",
            hint: "Footer = the foot of the page!",
            explanation: "<footer> holds footer content like copyright, contact links, and page credits."
          },
          {
            id: 5,
            type: "true-false",
            question: "Semantic HTML makes websites more accessible and easier to understand.",
            options: ["True", "False"],
            answer: "True",
            hint: "Meaningful tags help everyone understand the structure!",
            explanation: "Semantic HTML helps screen readers, search engines, and developers understand the page structure."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "lang='en' in <html lang='en'> tells the browser...",
            options: ["The page is HTML", "The page language is English", "The page is long", "The encoding is correct"],
            answer: "The page language is English",
            hint: "lang = language!",
            explanation: "lang='en' tells the browser the page content is in English — helpful for screen readers."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Which meta tag makes the page work well on phones?",
            options: ["<meta charset='UTF-8'>", "<meta name='viewport' content='width=device-width'>", "<meta name='author'>", "<meta name='color'>"],
            answer: "<meta name='viewport' content='width=device-width'>",
            hint: "Viewport meta = responsive!",
            explanation: "The viewport meta tag tells mobile browsers to use the device's real width."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "What does <section id='about'> allow you to do in CSS?",
            options: ["Nothing special", "Style just that section using #about", "Create a loop", "Make a function"],
            answer: "Style just that section using #about",
            hint: "id lets you target that specific element!",
            explanation: "Adding id='about' lets you style or interact with just that section using #about in CSS/JS."
          },
          {
            id: 9,
            type: "true-false",
            question: "<nav> is used to wrap navigation links.",
            options: ["True", "False"],
            answer: "True",
            hint: "nav = navigation!",
            explanation: "Yes! <nav> wraps navigation links like menus and site links."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "meta charset='UTF-8' does what?",
            options: ["Sets the font size", "Enables emojis and international characters", "Links a CSS file", "Sets the width"],
            answer: "Enables emojis and international characters",
            hint: "UTF-8 supports all characters worldwide!",
            explanation: "charset='UTF-8' ensures the page can display international characters and emojis correctly."
          }
        ]
      },
      {
        dayId: 3,
        title: "Styling Your Page",
        emoji: "🎨",
        explanation: `# Styling the About Me Page! 🎨

Now let's make the HTML page look amazing with CSS!

## CSS Reset and Base Styles
\`\`\`css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f4ff;
  color: #333;
}
\`\`\`

## Styling the Header
\`\`\`css
header {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-align: center;
  padding: 40px 20px;
  border-radius: 0 0 30px 30px;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 8px;
}
\`\`\`

## Styling the Main Content
\`\`\`css
main {
  max-width: 800px;
  margin: 30px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

section {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

section h2 {
  color: #667eea;
  margin-bottom: 12px;
}
\`\`\`

## Styling the List
\`\`\`css
ul {
  list-style: none;
}

li {
  padding: 8px 0;
  font-size: 1.1rem;
  border-bottom: 1px solid #f0f0f0;
}
\`\`\`

## CSS Variables (Custom Properties)
\`\`\`css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
  --bg: #f0f4ff;
}

header {
  background: var(--primary);
}
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does * { margin: 0; padding: 0; } do?",
            options: ["Removes all elements", "Resets all margins and paddings to 0", "Makes everything invisible", "Sets white background"],
            answer: "Resets all margins and paddings to 0",
            hint: "* selects ALL elements — a CSS reset!",
            explanation: "* { margin: 0; padding: 0; } resets default spacing on all elements — a common starting point."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does box-sizing: border-box; do?",
            options: ["Adds a box shadow", "Makes padding included in the width", "Creates a border", "Sets the box color"],
            answer: "Makes padding included in the width",
            hint: "border-box includes padding in the size!",
            explanation: "box-sizing: border-box means padding and border are included in the element's total width/height."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "margin: 30px auto; centers a block element how?",
            options: ["By centering text", "By setting equal left/right margins automatically", "By centering vertically", "By removing margin"],
            answer: "By setting equal left/right margins automatically",
            hint: "auto margins on left and right = horizontal center!",
            explanation: "margin: 30px auto sets 30px top/bottom and equal auto margins on left/right, centering the block."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "linear-gradient(135deg, #667eea, #764ba2) creates...",
            options: ["A solid color", "A gradient that goes from one color to another", "A border", "A shadow"],
            answer: "A gradient that goes from one color to another",
            hint: "linear-gradient = color transition!",
            explanation: "linear-gradient creates a smooth transition between two or more colors."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete the CSS variable declaration:",
            code: ":root {\n  ___primary: #667eea;\n}",
            options: ["@", "#", "--", "$"],
            answer: "--",
            hint: "CSS variables start with --!",
            explanation: "CSS custom properties (variables) are declared with -- prefix: --primary: #667eea;"
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "How do you USE a CSS variable called --primary?",
            options: ["color: @primary;", "color: #primary;", "color: var(--primary);", "color: $primary;"],
            answer: "color: var(--primary);",
            hint: "var() accesses a CSS variable!",
            explanation: "CSS variables are used with var(--variableName): color: var(--primary);"
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "gap: 20px in a flex container adds space...",
            options: ["Around the outside", "Between flex items", "Above and below", "Inside items"],
            answer: "Between flex items",
            hint: "gap = space between children!",
            explanation: "gap: 20px adds 20 pixels of space between flex (or grid) items."
          },
          {
            id: 8,
            type: "true-false",
            question: "list-style: none; removes bullet points from a list.",
            options: ["True", "False"],
            answer: "True",
            hint: "none removes the default bullets!",
            explanation: "Yes! list-style: none removes the default bullet points or numbers from lists."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "font-family: Arial, sans-serif; means...",
            options: ["Use Arial, or if unavailable, any sans-serif font", "Use only Arial", "Use sans-serif always", "Arial is blocked"],
            answer: "Use Arial, or if unavailable, any sans-serif font",
            hint: "The list is a fallback chain!",
            explanation: "CSS font stacks try each font in order. If Arial isn't available, use any sans-serif."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "rgba(0, 0, 0, 0.08) creates what color?",
            options: ["Solid black", "Very transparent black (slight shadow)", "White", "Blue"],
            answer: "Very transparent black (slight shadow)",
            hint: "0.08 = only 8% opacity — barely visible!",
            explanation: "rgba(0,0,0, 0.08) is black at only 8% opacity — a very subtle, barely-there shadow."
          }
        ]
      },
      {
        dayId: 4,
        title: "Adding Interactivity",
        emoji: "✨",
        explanation: `# Adding JavaScript Interactivity! ✨

Now let's make the page come alive with JavaScript!

## Theme Switcher Button
Add to HTML:
\`\`\`html
<button id="themeBtn" onclick="toggleTheme()">🌙 Dark Mode</button>
\`\`\`

Add to CSS:
\`\`\`css
.dark-mode {
  background-color: #1a1a2e;
  color: #eee;
}

.dark-mode header {
  background: linear-gradient(135deg, #16213e, #0f3460);
}
\`\`\`

Add JavaScript:
\`\`\`javascript
let isDark = false;

function toggleTheme() {
  isDark = !isDark;
  let btn = document.getElementById("themeBtn");

  if (isDark) {
    document.body.classList.add("dark-mode");
    btn.innerText = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    btn.innerText = "🌙 Dark Mode";
  }
}
\`\`\`

## Hobby Counter
\`\`\`javascript
let hobbies = [];

function addHobby() {
  let input = document.getElementById("hobbyInput");
  let hobby = input.value;

  if (hobby !== "") {
    hobbies.push(hobby);
    input.value = "";
    renderHobbies();
  }
}

function renderHobbies() {
  let list = document.getElementById("hobbyList");
  list.innerHTML = "";

  for (let hobby of hobbies) {
    let li = document.createElement("li");
    li.innerText = "🌟 " + hobby;
    list.appendChild(li);
  }
}
\`\`\`

## What We've Used!
- Variables (isDark, hobbies array)
- Functions (toggleTheme, addHobby, renderHobbies)
- If statements (isDark check, empty check)
- Loops (for...of in renderHobbies)
- DOM manipulation (classList, innerText, createElement)

**You're building a REAL web app!** 🎉
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "classList.toggle('dark-mode') does what?",
            options: ["Always adds dark-mode", "Always removes dark-mode", "Adds if not present, removes if present", "Does nothing"],
            answer: "Adds if not present, removes if present",
            hint: "Toggle = switch on/off!",
            explanation: "classList.toggle() adds the class if it's not there, or removes it if it is — like a light switch."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "let isDark = false; isDark = !isDark; — what is isDark now?",
            options: ["false", "true", "null", "undefined"],
            answer: "true",
            hint: "! flips the value!",
            explanation: "!false = true. We flip the isDark boolean to track the current theme."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "list.innerHTML = ''; does what?",
            options: ["Shows the list", "Clears all the list's HTML content", "Hides the list", "Styles the list"],
            answer: "Clears all the list's HTML content",
            hint: "Setting innerHTML to empty = clear!",
            explanation: "Setting innerHTML = '' removes all child elements from the container — clears it out."
          },
          {
            id: 4,
            type: "true-false",
            question: "JavaScript can change which CSS classes an element has.",
            options: ["True", "False"],
            answer: "True",
            hint: "classList.add/remove/toggle!",
            explanation: "Yes! classList.add(), .remove(), and .toggle() let JavaScript change an element's CSS classes."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "input.value reads what from an input field?",
            options: ["The input's ID", "The text the user typed", "The input's color", "The input's size"],
            answer: "The text the user typed",
            hint: "value = what's in the box!",
            explanation: "input.value contains whatever the user has typed into the input field."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "The 'if (hobby !== \"\")' check prevents...",
            options: ["Adding duplicate hobbies", "Adding an empty hobby", "Adding too many hobbies", "Removing hobbies"],
            answer: "Adding an empty hobby",
            hint: "\"\" = empty string = blank input!",
            explanation: "Checking !== '' ensures the user typed something before adding it to the list."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "input.value = '' after adding a hobby does what?",
            options: ["Focuses the input", "Clears the input for the next entry", "Deletes the hobby", "Shows the hobby"],
            answer: "Clears the input for the next entry",
            hint: "Reset to empty for the next input!",
            explanation: "Clearing input.value after adding resets it to empty so the user can type the next hobby."
          },
          {
            id: 8,
            type: "true-false",
            question: "This project uses variables, functions, if statements, loops, and DOM manipulation together.",
            options: ["True", "False"],
            answer: "True",
            hint: "Look at the code — all the concepts are there!",
            explanation: "Yes! The project combines all the concepts learned: variables, functions, if/else, loops, and DOM."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "document.createElement('li') then list.appendChild(li) does what?",
            options: ["Removes a list item", "Creates and adds a new list item to the list", "Finds a list item", "Styles a list item"],
            answer: "Creates and adds a new list item to the list",
            hint: "create then append = make and add!",
            explanation: "createElement creates a new element, and appendChild adds it to a parent element in the DOM."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Why do we re-render the full list in renderHobbies()?",
            options: ["It's required by JavaScript", "To make sure the display always matches the hobbies array", "For styling", "It's faster"],
            answer: "To make sure the display always matches the hobbies array",
            hint: "Clear and redraw = always in sync!",
            explanation: "Clearing and redrawing ensures the displayed list always matches the actual array data."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 10 Review!",
        emoji: "🏗️",
        explanation: `# Week 10 Review: Web Builder! 🏗️

You built a real interactive web page this week! Let's review what you did.

## Day 1: Planning 📝
- Always plan before coding
- Wireframe your layout
- Decompose into HTML → CSS → JavaScript
- Use semantic HTML tags

## Day 2: HTML Structure 🦴
- <!DOCTYPE html> starts every page
- Semantic tags: <header>, <main>, <section>, <footer>
- id attributes let JavaScript and CSS target elements

## Day 3: CSS Styling 🎨
- CSS reset with * { margin: 0; padding: 0; }
- CSS variables with :root { --name: value; }
- Flexbox for layout
- box-shadow and border-radius for beautiful cards

## Day 4: JavaScript Interactivity ✨
- Dark mode with classList.toggle()
- Dynamic list with push() and createElement()
- Reading input with .value
- Clearing with innerHTML = ''

## The Complete Picture
\`\`\`
HTML  → Structure and content
CSS   → Colors, layout, animations
JS    → User interactions, dynamic updates
\`\`\`

## You've Now Built:
✅ A responsive page layout
✅ Beautiful CSS styling
✅ A theme switcher
✅ A dynamic hobby list
✅ DOM manipulation with JS

**You're a real web developer! 🌐**`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is the correct order for building a web project?",
            options: ["JS → CSS → HTML", "CSS → HTML → JS", "HTML → CSS → JS", "Any order works"],
            answer: "HTML → CSS → JS",
            hint: "Structure first, style second, behavior third!",
            explanation: "Best practice: build HTML structure first, add CSS styling, then JavaScript interactivity."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which CSS at-rule defines CSS variables?",
            options: [":body", "::root", ":root", "@root"],
            answer: ":root",
            hint: ":root is the HTML element selector!",
            explanation: ":root { } is where CSS custom properties (variables) are defined — it targets the <html> element."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does <!DOCTYPE html> declare?",
            options: ["The page title", "This is HTML5", "The CSS version", "The JavaScript version"],
            answer: "This is HTML5",
            hint: "DOCTYPE = document type declaration!",
            explanation: "<!DOCTYPE html> tells the browser to use HTML5 rendering mode."
          },
          {
            id: 4,
            type: "true-false",
            question: "classList.toggle() adds a class if missing, removes it if present.",
            options: ["True", "False"],
            answer: "True",
            hint: "Toggle = switch between states!",
            explanation: "classList.toggle() acts like a light switch — it flips the class on or off."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "To read what a user typed in an input, use:",
            options: ["input.text", "input.value", "input.content", "input.data"],
            answer: "input.value",
            hint: "The .value property holds the typed text!",
            explanation: "input.value reads the current text in an input field."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "element.innerHTML = '' does what?",
            options: ["Shows the element", "Clears all content inside the element", "Hides the element", "Styles the element"],
            answer: "Clears all content inside the element",
            hint: "Empty string = no content!",
            explanation: "Setting innerHTML to an empty string removes all child elements and content."
          },
          {
            id: 7,
            type: "true-false",
            question: "margin: 0 auto; centers a block element horizontally.",
            options: ["True", "False"],
            answer: "True",
            hint: "Auto margins on left/right = centered!",
            explanation: "margin: 0 auto sets automatic equal margins on left and right, centering the block."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "box-sizing: border-box means...",
            options: ["Only borders are visible", "Padding and border are included in the element's width", "No border", "The box is smaller"],
            answer: "Padding and border are included in the element's width",
            hint: "border-box = all-in sizing!",
            explanation: "border-box makes width include padding and border — more predictable sizing."
          },
          {
            id: 9,
            type: "true-false",
            question: "Semantic HTML tags like <header> and <footer> describe the page's structure meaningfully.",
            options: ["True", "False"],
            answer: "True",
            hint: "Semantic = meaningful!",
            explanation: "Semantic tags tell browsers, screen readers, and developers what each section of the page represents."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "gap: 20px in a flex container adds space...",
            options: ["Between flex items", "Outside the container", "Inside each item", "Above the container"],
            answer: "Between flex items",
            hint: "gap = space between children!",
            explanation: "gap adds space between flex children, making layouts cleaner without extra margins."
          }
        ]
      }
    ]
  },
  {
    weekId: 11,
    title: "Advanced JavaScript",
    emoji: "🧠",
    color: "from-teal-400 to-green-400",
    description: "Level up with objects, events, and more JS techniques!",
    days: [
      {
        dayId: 1,
        title: "JavaScript Objects",
        emoji: "🗂️",
        explanation: `# Objects: Grouping Data Together! 🗂️

An **object** is like a container that groups related information together.

## Creating an Object
\`\`\`javascript
let person = {
  name: "Emma",
  age: 7,
  hobby: "coding",
  isStudent: true
};
\`\`\`

## Accessing Properties
\`\`\`javascript
console.log(person.name);   // "Emma"
console.log(person.age);    // 7
console.log(person["hobby"]); // "coding" (bracket notation)
\`\`\`

## Changing Properties
\`\`\`javascript
person.age = 8;
person.hobby = "drawing";
\`\`\`

## Adding Properties
\`\`\`javascript
person.score = 100;
\`\`\`

## Objects with Methods (Functions!)
\`\`\`javascript
let calculator = {
  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; }
};

console.log(calculator.add(5, 3)); // 8
\`\`\`

## Array of Objects
\`\`\`javascript
let students = [
  { name: "Emma", grade: "A" },
  { name: "Liam", grade: "B" },
  { name: "Sofia", grade: "A" }
];

for (let student of students) {
  console.log(student.name + " got " + student.grade);
}
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is a JavaScript object?",
            options: ["A type of loop", "A container that groups related data together", "A function", "An array"],
            answer: "A container that groups related data together",
            hint: "Objects group related properties!",
            explanation: "An object groups related data (properties) together — like a person's name, age, and hobbies."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "How do you access the 'name' property of object 'person'?",
            options: ["person->name", "person[name]", "person.name", "person::name"],
            answer: "person.name",
            hint: "Dot notation: object.property!",
            explanation: "Use dot notation (person.name) or bracket notation (person['name']) to access properties."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "let car = { color: 'red', speed: 100 }; What is car.color?",
            options: ["100", "'red'", "undefined", "car"],
            answer: "'red'",
            hint: "color property = 'red'!",
            explanation: "car.color accesses the 'color' property of the car object, which is 'red'."
          },
          {
            id: 4,
            type: "true-false",
            question: "Objects are created using curly braces {}.",
            options: ["True", "False"],
            answer: "True",
            hint: "{ } = object literal!",
            explanation: "Yes! JavaScript objects are created with curly braces: let obj = { key: value };"
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "Can you add a new property to an existing object?",
            options: ["No — objects are fixed", "Yes — person.newProp = value;", "Only with arrays", "Only in functions"],
            answer: "Yes — person.newProp = value;",
            hint: "Just assign to a new property!",
            explanation: "You can add properties to objects at any time: person.score = 100;"
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "An object's function is called a...",
            options: ["Property", "Index", "Method", "Parameter"],
            answer: "Method",
            hint: "Functions inside objects are methods!",
            explanation: "When a function is a property of an object, it's called a method."
          },
          {
            id: 7,
            type: "true-false",
            question: "An array can contain objects.",
            options: ["True", "False"],
            answer: "True",
            hint: "Arrays can hold any type!",
            explanation: "Yes! Arrays of objects are very common: [{name: 'Emma'}, {name: 'Liam'}]"
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "let p = {name: 'Emma', age: 7}; p.age = 8; — what is p.age now?",
            options: ["7", "8", "undefined", "'Emma'"],
            answer: "8",
            hint: "Assignment updates the property!",
            explanation: "p.age = 8 updates the age property from 7 to 8."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "For an array of objects, how do you access each object's name in a loop?",
            options: ["item.name", "item[name]", "item->name", "getName(item)"],
            answer: "item.name",
            hint: "Dot notation in a for...of loop!",
            explanation: "In for (let item of array) { item.name } — use dot notation to access each object's property."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "What do { } and [ ] create respectively?",
            options: ["Array and Object", "Object and Array", "Function and Loop", "Class and Method"],
            answer: "Object and Array",
            hint: "{} for objects, [] for arrays!",
            explanation: "Curly braces {} create objects, square brackets [] create arrays."
          }
        ]
      },
      {
        dayId: 2,
        title: "Event Listeners",
        emoji: "👂",
        explanation: `# Event Listeners: Listening for User Actions! 👂

**Event listeners** watch for things happening (clicks, typing, mouse moves) and respond!

## addEventListener
\`\`\`javascript
let button = document.getElementById("myBtn");

button.addEventListener("click", function() {
  alert("Button clicked!");
});
\`\`\`

## Common Events
\`\`\`javascript
element.addEventListener("click", handler);        // mouse click
element.addEventListener("mouseover", handler);    // mouse enters
element.addEventListener("mouseout", handler);     // mouse leaves
element.addEventListener("keydown", handler);      // key pressed
input.addEventListener("input", handler);          // typing in input
form.addEventListener("submit", handler);          // form submitted
\`\`\`

## Using Arrow Functions
\`\`\`javascript
button.addEventListener("click", () => {
  console.log("Clicked!");
});
\`\`\`

## The Event Object
The handler receives an event object with info:
\`\`\`javascript
input.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});
\`\`\`

## Real Example: Live Character Count
\`\`\`javascript
let nameInput = document.getElementById("name");
let counter = document.getElementById("count");

nameInput.addEventListener("input", () => {
  let length = nameInput.value.length;
  counter.innerText = length + " characters";
});
\`\`\`

## vs onclick attribute
\`\`\`javascript
// HTML: onclick="myFunc()"  ← old way
// JS: addEventListener("click", myFunc)  ← better way
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does addEventListener do?",
            options: ["Creates a new element", "Watches for an event and runs code when it happens", "Removes an element", "Adds CSS styles"],
            answer: "Watches for an event and runs code when it happens",
            hint: "Listen for events!",
            explanation: "addEventListener attaches a handler function to run when a specific event occurs on an element."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "element.addEventListener('click', handler) — when does handler run?",
            options: ["When the page loads", "When the element is clicked", "Every second", "When the page closes"],
            answer: "When the element is clicked",
            hint: "click event = mouse click!",
            explanation: "The 'click' event fires when the user clicks the element. The handler runs then."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Which event fires while the user is typing in an input?",
            options: ["click", "input", "keyup", "change"],
            answer: "input",
            hint: "Fires on every character typed!",
            explanation: "The 'input' event fires every time the input's value changes (each keystroke)."
          },
          {
            id: 4,
            type: "code-complete",
            question: "Complete the event listener for a click:",
            code: "btn.___('click', () => { alert('Hi!'); });",
            options: ["listen", "on", "addEventListener", "watch"],
            answer: "addEventListener",
            hint: "addEventListener is the method name!",
            explanation: "btn.addEventListener('click', handler) adds a click listener to the button."
          },
          {
            id: 5,
            type: "true-false",
            question: "You can add multiple event listeners to the same element.",
            options: ["True", "False"],
            answer: "True",
            hint: "Add as many as you need!",
            explanation: "Yes! You can add multiple event listeners to the same element for different events."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "The 'mouseover' event fires when...",
            options: ["The mouse is clicked", "The mouse enters the element", "The mouse leaves the element", "A key is pressed"],
            answer: "The mouse enters the element",
            hint: "mouseover = mouse is over (on top of) the element!",
            explanation: "The 'mouseover' event fires when the mouse cursor enters the element's area."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What is the event object passed to event handlers?",
            options: ["The HTML element", "Information about the event (like which key was pressed)", "The CSS styles", "The page URL"],
            answer: "Information about the event (like which key was pressed)",
            hint: "event.key, event.target, etc.!",
            explanation: "The event object contains details about what happened: which key, which mouse button, the target element, etc."
          },
          {
            id: 8,
            type: "true-false",
            question: "addEventListener is preferred over onclick in HTML attributes.",
            options: ["True", "False"],
            answer: "True",
            hint: "addEventListener is more flexible!",
            explanation: "addEventListener is more flexible, allows multiple handlers, and keeps JS separate from HTML."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "input.value.length in an 'input' event gives you...",
            options: ["The input's ID", "How many characters the user has typed", "The input's width", "The input type"],
            answer: "How many characters the user has typed",
            hint: ".length = number of characters!",
            explanation: "input.value is the text, and .length counts how many characters are in that text."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Which event fires when a form is submitted?",
            options: ["click", "input", "submit", "send"],
            answer: "submit",
            hint: "Forms have a submit event!",
            explanation: "The 'submit' event fires when a form is submitted (button clicked or Enter pressed)."
          }
        ]
      },
      {
        dayId: 3,
        title: "localStorage",
        emoji: "💾",
        explanation: `# localStorage: Save Data in the Browser! 💾

**localStorage** lets you save data in the browser so it persists even after the page refreshes!

## Saving Data
\`\`\`javascript
localStorage.setItem("playerName", "Emma");
localStorage.setItem("highScore", "1500");
\`\`\`

Note: localStorage only stores STRINGS!

## Reading Data
\`\`\`javascript
let name = localStorage.getItem("playerName");
console.log(name); // "Emma"
\`\`\`

## Removing Data
\`\`\`javascript
localStorage.removeItem("playerName");
localStorage.clear(); // remove ALL data
\`\`\`

## Storing Objects (JSON)
Since localStorage only stores strings, use JSON:
\`\`\`javascript
let player = { name: "Emma", score: 100 };

// Save (convert object to string):
localStorage.setItem("player", JSON.stringify(player));

// Load (convert string back to object):
let loaded = JSON.parse(localStorage.getItem("player"));
console.log(loaded.name); // "Emma"
\`\`\`

## Real Example: Remember User Name
\`\`\`javascript
// On load — check if name is saved:
window.addEventListener("load", () => {
  let savedName = localStorage.getItem("userName");
  if (savedName) {
    document.getElementById("greeting").innerText = "Welcome back, " + savedName + "!";
  }
});

// Save name when user types it:
function saveName() {
  let name = document.getElementById("nameInput").value;
  localStorage.setItem("userName", name);
  alert("Name saved! It will remember you next time.");
}
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does localStorage do?",
            options: ["Connects to a server", "Saves data in the browser persistently", "Creates HTML elements", "Plays sounds"],
            answer: "Saves data in the browser persistently",
            hint: "local = in the browser, storage = save data!",
            explanation: "localStorage saves key-value data in the browser that persists even after the page is closed."
          },
          {
            id: 2,
            type: "code-complete",
            question: "Complete the code to save a value:",
            code: "localStorage.___('score', '100');",
            options: ["save", "store", "setItem", "put"],
            answer: "setItem",
            hint: "setItem saves the key-value pair!",
            explanation: "localStorage.setItem('key', 'value') stores data with a key name."
          },
          {
            id: 3,
            type: "code-complete",
            question: "Complete the code to read a saved value:",
            code: "let score = localStorage.___('score');",
            options: ["readItem", "getItem", "loadItem", "fetchItem"],
            answer: "getItem",
            hint: "getItem retrieves by key!",
            explanation: "localStorage.getItem('key') retrieves the stored value for that key."
          },
          {
            id: 4,
            type: "true-false",
            question: "localStorage only stores strings.",
            options: ["True", "False"],
            answer: "True",
            hint: "Numbers and objects need converting!",
            explanation: "Yes! localStorage stores everything as strings. Use JSON.stringify/parse for objects."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "JSON.stringify({ name: 'Emma' }) produces?",
            options: ["{ name: Emma }", "'{ name: Emma }'", "'{\"name\":\"Emma\"}'", "An error"],
            answer: "'{\"name\":\"Emma\"}'",
            hint: "JSON.stringify converts objects to JSON strings!",
            explanation: "JSON.stringify converts a JavaScript object to a JSON string so it can be stored."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "JSON.parse(jsonString) does what?",
            options: ["Converts string to object", "Converts object to string", "Deletes data", "Encrypts data"],
            answer: "Converts string to object",
            hint: "parse = convert back to object!",
            explanation: "JSON.parse converts a JSON string back into a JavaScript object."
          },
          {
            id: 7,
            type: "true-false",
            question: "Data in localStorage is deleted when you close the browser.",
            options: ["True", "False"],
            answer: "False",
            hint: "Persistent means it stays!",
            explanation: "localStorage data persists across browser sessions — it stays until you delete it with code."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "localStorage.removeItem('score') does what?",
            options: ["Removes all data", "Removes only the 'score' item", "Reads the score", "Resets score to 0"],
            answer: "Removes only the 'score' item",
            hint: "removeItem targets one key!",
            explanation: "removeItem('key') deletes only that specific key-value pair from localStorage."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "localStorage.clear() does what?",
            options: ["Saves all data", "Removes ALL data from localStorage", "Reads all data", "Refreshes the page"],
            answer: "Removes ALL data from localStorage",
            hint: "clear = wipe everything!",
            explanation: "localStorage.clear() removes ALL stored data — use with caution!"
          },
          {
            id: 10,
            type: "true-false",
            question: "You can use localStorage to remember a user's name between visits.",
            options: ["True", "False"],
            answer: "True",
            hint: "That's exactly what it's for!",
            explanation: "Yes! Saving the name with setItem means you can read it on the next visit with getItem."
          }
        ]
      },
      {
        dayId: 4,
        title: "Building a Mini Game",
        emoji: "🎮",
        explanation: `# Build a Number Guessing Game! 🎮

Let's build a complete game using everything you've learned!

## The Game Plan
- Computer picks a secret number (1–100)
- Player guesses
- Computer says "Too high!", "Too low!", or "Correct!"
- Track number of guesses
- Show a winner message!

## The HTML
\`\`\`html
<div id="game">
  <h1>🎮 Guess the Number!</h1>
  <p>I'm thinking of a number between 1 and 100...</p>
  <input id="guessInput" type="number" placeholder="Your guess">
  <button onclick="makeGuess()">Guess!</button>
  <p id="message"></p>
  <p id="attempts"></p>
  <button id="restartBtn" style="display:none" onclick="startGame()">
    🔄 Play Again
  </button>
</div>
\`\`\`

## The JavaScript
\`\`\`javascript
let secretNumber;
let guessCount;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  document.getElementById("message").innerText = "";
  document.getElementById("attempts").innerText = "";
  document.getElementById("restartBtn").style.display = "none";
}

function makeGuess() {
  let input = document.getElementById("guessInput");
  let guess = Number(input.value);
  let message = document.getElementById("message");
  guessCount++;

  if (guess < 1 || guess > 100) {
    message.innerText = "Please guess between 1 and 100!";
    return;
  }

  if (guess < secretNumber) {
    message.innerText = "📈 Too low! Try higher.";
  } else if (guess > secretNumber) {
    message.innerText = "📉 Too high! Try lower.";
  } else {
    message.innerText = "🎉 Correct! You got it!";
    document.getElementById("attempts").innerText =
      "You took " + guessCount + " guesses!";
    document.getElementById("restartBtn").style.display = "block";
  }

  input.value = "";
}

startGame(); // Start when page loads
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Math.floor(Math.random() * 100) + 1 generates a random number between?",
            options: ["0–99", "0–100", "1–100", "1–99"],
            answer: "1–100",
            hint: "Math.random() * 100 gives 0-99.99, floor gives 0-99, +1 gives 1-100!",
            explanation: "Math.random() * 100 gives 0 to 99.99, floor gives 0-99, +1 shifts to 1-100."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Why do we use Number(input.value) instead of just input.value?",
            options: ["For display purposes", "To convert the string to a number for comparison", "To round it", "For performance"],
            answer: "To convert the string to a number for comparison",
            hint: "input.value is always a string!",
            explanation: "input.value returns a string. Number() converts it so we can compare it numerically."
          },
          {
            id: 3,
            type: "true-false",
            question: "The 'return' in 'if (guess < 1 || guess > 100) { message = ...; return; }' stops the function early.",
            options: ["True", "False"],
            answer: "True",
            hint: "return exits the function immediately!",
            explanation: "return in the validation check exits makeGuess() early so the rest doesn't run for invalid input."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "guessCount++ after each guess tracks...",
            options: ["The secret number", "How many guesses the player has made", "The player's score", "The remaining tries"],
            answer: "How many guesses the player has made",
            hint: "We increment guessCount each time!",
            explanation: "guessCount is incremented with ++ each time makeGuess() is called, tracking total guesses."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "Why do we reset secretNumber and guessCount in startGame()?",
            options: ["Required by JavaScript", "To start fresh for a new game", "For performance", "To show an error"],
            answer: "To start fresh for a new game",
            hint: "Restart = fresh state!",
            explanation: "Resetting these variables gives the player a brand new game with a new secret number."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "The game uses which concepts together?",
            options: ["Only loops", "Variables, functions, if/else, Math, and DOM", "Only functions", "Only variables"],
            answer: "Variables, functions, if/else, Math, and DOM",
            hint: "It uses EVERYTHING!",
            explanation: "The game combines: variables (secretNumber), functions (startGame, makeGuess), if/else, Math.random, and DOM."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "input.value = '' after a guess does what?",
            options: ["Shows the secret number", "Clears the input for the next guess", "Resets the game", "Stops the game"],
            answer: "Clears the input for the next guess",
            hint: "Clear it so the player can type a new guess!",
            explanation: "Setting input.value to '' removes the previous guess so the player can type a new one."
          },
          {
            id: 8,
            type: "true-false",
            question: "restartBtn.style.display = 'block' shows the hidden restart button.",
            options: ["True", "False"],
            answer: "True",
            hint: "display: block = visible!",
            explanation: "Setting display to 'block' makes the restart button visible when the player wins."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "The condition guess < secretNumber means the guess is...",
            options: ["Too high", "Correct", "Too low", "Invalid"],
            answer: "Too low",
            hint: "If your guess is less than the secret, you need to go higher!",
            explanation: "If guess < secretNumber, the guess is too low — needs to go higher."
          },
          {
            id: 10,
            type: "true-false",
            question: "Calling startGame() when the page loads sets up the initial game state.",
            options: ["True", "False"],
            answer: "True",
            hint: "startGame() initializes everything!",
            explanation: "Calling startGame() at the bottom sets the initial random number and resets counters."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 11 Review!",
        emoji: "🧠",
        explanation: `# Week 11 Review: Advanced JavaScript! 🧠

Fantastic work! You've learned some powerful JavaScript concepts!

## Day 1: Objects 🗂️
\`\`\`javascript
let person = { name: "Emma", age: 7 };
person.name   // access
person.age = 8  // update
person.score = 100  // add
\`\`\`

## Day 2: Event Listeners 👂
\`\`\`javascript
element.addEventListener("click", () => {
  // runs when clicked
});

// Events: click, input, keydown, submit, mouseover
\`\`\`

## Day 3: localStorage 💾
\`\`\`javascript
localStorage.setItem("key", "value");
let val = localStorage.getItem("key");
localStorage.removeItem("key");
// For objects: JSON.stringify / JSON.parse
\`\`\`

## Day 4: Mini Game 🎮
Built a complete number guessing game using:
- Math.random() for secret number
- Functions for game logic
- DOM manipulation for display
- If/else for game conditions

## JavaScript Tools Summary
| Tool | Purpose |
|------|---------|
| Objects | Group related data |
| Events | React to user actions |
| localStorage | Persist data between visits |
| JSON | Convert objects ↔ strings |
| DOM | Change the page dynamically |

## A Complete Mini App
The number guessing game used:
✅ Variables (secretNumber, guessCount)
✅ Functions (startGame, makeGuess)
✅ Math (Math.random, Math.floor)
✅ If/else (high/low/correct)
✅ DOM (getElementById, innerText)

**You can build real apps! 🌟**`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "How do you access the 'age' property of object 'user'?",
            options: ["user->age", "user[age]", "user.age", "user::age"],
            answer: "user.age",
            hint: "Dot notation: object.property!",
            explanation: "user.age accesses the 'age' property using dot notation."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does addEventListener('click', handler) do?",
            options: ["Creates a button", "Runs handler when the element is clicked", "Removes an event", "Styles an element"],
            answer: "Runs handler when the element is clicked",
            hint: "Listen for clicks!",
            explanation: "addEventListener('click', handler) runs the handler function every time the element is clicked."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "localStorage.setItem('name', 'Emma') stores...",
            options: ["A number", "A boolean", "A string 'Emma' under key 'name'", "An object"],
            answer: "A string 'Emma' under key 'name'",
            hint: "setItem stores key-value pairs!",
            explanation: "setItem stores the string 'Emma' with the key 'name' in localStorage."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "JSON.stringify() converts...",
            options: ["String to object", "Object to JSON string", "Number to string", "Array to object"],
            answer: "Object to JSON string",
            hint: "Stringify = make it a string!",
            explanation: "JSON.stringify() converts a JavaScript object into a JSON string for storage."
          },
          {
            id: 5,
            type: "true-false",
            question: "localStorage persists data even after the browser is closed.",
            options: ["True", "False"],
            answer: "True",
            hint: "Local = stored locally, persistent!",
            explanation: "Yes! localStorage data stays in the browser until it's explicitly removed."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "What is a method in an object?",
            options: ["A property that holds text", "A property that holds a function", "A property that holds a number", "A property that holds an array"],
            answer: "A property that holds a function",
            hint: "Method = function inside an object!",
            explanation: "A method is a function stored as a property of an object."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "The 'input' event on a text input fires...",
            options: ["Once when focused", "Each time the value changes (each keypress)", "When Enter is pressed", "When the form submits"],
            answer: "Each time the value changes (each keypress)",
            hint: "Input = fires on every change!",
            explanation: "The 'input' event fires immediately every time the input's value changes."
          },
          {
            id: 8,
            type: "true-false",
            question: "Objects can be stored in arrays.",
            options: ["True", "False"],
            answer: "True",
            hint: "Array of objects is very common!",
            explanation: "Arrays can hold objects: [{name: 'Emma'}, {name: 'Liam'}] is a common pattern."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "JSON.parse(jsonString) converts...",
            options: ["Object to string", "JSON string to object", "Number to string", "Array to string"],
            answer: "JSON string to object",
            hint: "Parse = convert back to object!",
            explanation: "JSON.parse() converts a JSON string back into a JavaScript object."
          },
          {
            id: 10,
            type: "code-complete",
            question: "Complete to read saved data:",
            code: "let name = localStorage.___('userName');",
            options: ["readItem", "setItem", "getItem", "loadItem"],
            answer: "getItem",
            hint: "getItem retrieves stored data!",
            explanation: "localStorage.getItem('key') retrieves the stored value for that key."
          }
        ]
      }
    ]
  },
  {
    weekId: 12,
    title: "Grand Finale! 🎓",
    emoji: "🎓",
    color: "from-yellow-400 to-orange-400",
    description: "Celebrate everything you've learned and look ahead!",
    days: [
      {
        dayId: 1,
        title: "HTML Review",
        emoji: "🌐",
        explanation: `# HTML Grand Review! 🌐

You've come so far! Let's celebrate by reviewing everything you know!

## Complete HTML Reference

### Document Structure
\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- Visible content here -->
    <script src="script.js"></script>
  </body>
</html>
\`\`\`

### Semantic Structure Tags
- \`<header>\` — top of page
- \`<nav>\` — navigation links
- \`<main>\` — primary content
- \`<section>\` — grouped content
- \`<article>\` — self-contained content
- \`<aside>\` — sidebar/extra info
- \`<footer>\` — bottom of page

### Text Tags
- \`<h1>\` to \`<h6>\` — headings
- \`<p>\` — paragraph
- \`<strong>\` — **bold**
- \`<em>\` — *italic*
- \`<br>\` — line break

### List Tags
- \`<ul>\` → \`<li>\` — bullet list
- \`<ol>\` → \`<li>\` — numbered list

### Media & Links
- \`<img src="" alt="">\` — image
- \`<a href="">\` — link

### Forms
- \`<form>\` — form container
- \`<input type="text">\` — text input
- \`<button>\` — clickable button
- \`<label>\` — input label
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Which tag creates a paragraph?",
            options: ["<text>", "<para>", "<p>", "<t>"],
            answer: "<p>",
            hint: "p = paragraph!",
            explanation: "The <p> tag creates a paragraph of text."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does <a href='page.html'>Click Me</a> create?",
            options: ["An image", "A heading", "A clickable link", "A paragraph"],
            answer: "A clickable link",
            hint: "a = anchor = link!",
            explanation: "The <a> tag with href creates a hyperlink — 'Click Me' is the clickable text."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Which tag creates a bulleted list?",
            options: ["<ol>", "<ul>", "<li>", "<bl>"],
            answer: "<ul>",
            hint: "ul = unordered list = bullets!",
            explanation: "<ul> creates an unordered (bulleted) list. Items go inside <li> tags."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What goes inside <head>?",
            options: ["Visible content", "Images", "Title, meta tags, CSS links", "Paragraphs"],
            answer: "Title, meta tags, CSS links",
            hint: "Head = invisible info about the page!",
            explanation: "<head> contains the page title, meta tags, and links to CSS files — not visible content."
          },
          {
            id: 5,
            type: "true-false",
            question: "<img> is a self-closing tag (no closing tag needed).",
            options: ["True", "False"],
            answer: "True",
            hint: "img stands alone!",
            explanation: "<img src='' alt=''> doesn't need a closing tag — it's self-closing."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "Which is the most important heading?",
            options: ["<h6>", "<h3>", "<h1>", "<heading>"],
            answer: "<h1>",
            hint: "Lower number = more important = bigger!",
            explanation: "<h1> is the most important heading. There should usually be only one per page."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What does the alt attribute in <img> do?",
            options: ["Sets the size", "Describes the image in text", "Links the image", "Changes the color"],
            answer: "Describes the image in text",
            hint: "alt = alternative text for accessibility!",
            explanation: "alt provides a text description for screen readers and when the image can't load."
          },
          {
            id: 8,
            type: "true-false",
            question: "<strong> makes text bold.",
            options: ["True", "False"],
            answer: "True",
            hint: "Strong = bold!",
            explanation: "Yes! <strong> displays text in bold to show it's important."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Where does the page's visible content go?",
            options: ["<head>", "<meta>", "<body>", "<html>"],
            answer: "<body>",
            hint: "The body holds the visible content!",
            explanation: "Everything the user sees goes inside <body>."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "<em> makes text...",
            options: ["Bold", "Italic", "Underlined", "Colored"],
            answer: "Italic",
            hint: "em = emphasis = italic!",
            explanation: "<em> makes text italic (emphasized)."
          }
        ]
      },
      {
        dayId: 2,
        title: "CSS Review",
        emoji: "🎨",
        explanation: `# CSS Grand Review! 🎨

## Complete CSS Reference

### Selectors
\`\`\`css
p { }          /* element */
.class { }     /* class */
#id { }        /* ID */
* { }          /* all elements */
parent child { } /* descendant */
\`\`\`

### Text & Fonts
\`\`\`css
color: red;
font-size: 18px;
font-weight: bold;
font-style: italic;
text-align: center;
text-decoration: underline;
\`\`\`

### Box Model
\`\`\`css
width: 300px;
height: 200px;
padding: 20px;
margin: 10px auto;
border: 2px solid black;
border-radius: 10px;
box-shadow: 2px 4px 10px gray;
\`\`\`

### Colors & Backgrounds
\`\`\`css
color: #3366ff;
background-color: lightyellow;
background: linear-gradient(135deg, purple, pink);
opacity: 0.8;
\`\`\`

### Flexbox
\`\`\`css
display: flex;
flex-direction: row | column;
justify-content: center | space-between | flex-start;
align-items: center | flex-start | flex-end;
gap: 20px;
\`\`\`

### Interactions
\`\`\`css
element:hover { ... }
transition: all 0.3s ease;
transform: scale(1.05);
cursor: pointer;
\`\`\`

### Responsive
\`\`\`css
@media (max-width: 600px) { ... }
width: 80%;
max-width: 1200px;
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Which selector targets elements with class='btn'?",
            options: ["btn { }", "#btn { }", ".btn { }", "@btn { }"],
            answer: ".btn { }",
            hint: "Dot = class!",
            explanation: ".btn { } in CSS targets all elements with class='btn'."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which CSS activates flexbox layout?",
            options: ["layout: flex;", "flex: on;", "display: flex;", "flexbox: true;"],
            answer: "display: flex;",
            hint: "display: flex turns it on!",
            explanation: "display: flex makes a container use flexbox for its children."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "To perfectly center items in a flex container:",
            options: ["center: both;", "justify-content: center; align-items: center;", "text-align: center;", "align: center;"],
            answer: "justify-content: center; align-items: center;",
            hint: "Two properties: horizontal + vertical!",
            explanation: "justify-content: center (horizontal) + align-items: center (vertical) = perfect centering."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "border-radius: 50% creates...",
            options: ["A rectangle", "A circle", "A triangle", "A square"],
            answer: "A circle",
            hint: "50% makes all corners round enough for a circle!",
            explanation: "border-radius: 50% rounds corners to create a circular shape."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "transition: all 0.3s makes CSS changes...",
            options: ["Instant", "Happen over 0.3 seconds smoothly", "Delayed by 3 seconds", "Random speed"],
            answer: "Happen over 0.3 seconds smoothly",
            hint: "transition = smooth over time!",
            explanation: "transition: all 0.3s makes any CSS property change animate over 0.3 seconds."
          },
          {
            id: 6,
            type: "true-false",
            question: "margin: 0 auto; horizontally centers a block element.",
            options: ["True", "False"],
            answer: "True",
            hint: "Auto margins on left/right = centered!",
            explanation: "margin: 0 auto creates equal auto margins on left and right, centering the block."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "@media (max-width: 768px) applies to screens...",
            options: ["Wider than 768px", "Exactly 768px", "768px or narrower", "All screens"],
            answer: "768px or narrower",
            hint: "max-width = up to that size!",
            explanation: "@media (max-width: 768px) targets screens 768 pixels wide or smaller."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "CSS variables are defined in...",
            options: [":body", "@variables", ":root", "#vars"],
            answer: ":root",
            hint: ":root is where CSS variables live!",
            explanation: ":root { --name: value; } is where you declare CSS custom properties (variables)."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "box-shadow: 0 4px 15px rgba(0,0,0,0.1) creates...",
            options: ["A border", "A subtle drop shadow", "A background color", "An outline"],
            answer: "A subtle drop shadow",
            hint: "box-shadow adds depth!",
            explanation: "box-shadow adds a drop shadow. rgba(0,0,0,0.1) is a very subtle, transparent black shadow."
          },
          {
            id: 10,
            type: "true-false",
            question: "element:hover { } applies styles only when the mouse is over it.",
            options: ["True", "False"],
            answer: "True",
            hint: ":hover = mouse is on top!",
            explanation: "The :hover pseudo-class applies styles only while the mouse cursor is over the element."
          }
        ]
      },
      {
        dayId: 3,
        title: "JavaScript Review",
        emoji: "⚡",
        explanation: `# JavaScript Grand Review! ⚡

## Complete JavaScript Reference

### Variables
\`\`\`javascript
let x = 5;          // changeable
const PI = 3.14;    // fixed
\`\`\`

### Data Types
\`\`\`javascript
"Hello"    // String
42         // Number
true/false // Boolean
[1,2,3]    // Array
{key: val} // Object
\`\`\`

### Operators
\`\`\`javascript
+ - * / %   // math
=== !== > < >= <=  // comparison
&& || !     // logical
\`\`\`

### Control Flow
\`\`\`javascript
if (condition) { }
else if (other) { }
else { }

switch (value) {
  case x: ...; break;
  default: ...;
}
\`\`\`

### Loops
\`\`\`javascript
for (let i = 0; i < n; i++) { }
while (condition) { }
for (let item of array) { }
\`\`\`

### Functions
\`\`\`javascript
function name(param) { return value; }
const name = (param) => value;
\`\`\`

### Arrays
\`\`\`javascript
arr.push(item)     // add to end
arr.pop()          // remove from end
arr.length         // count
arr.map(fn)        // transform each
arr.filter(fn)     // keep matching
\`\`\`

### DOM
\`\`\`javascript
document.getElementById("id")
element.innerText = "new text"
element.style.color = "red"
element.classList.add("class")
element.addEventListener("click", fn)
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Which creates a variable that CANNOT be changed?",
            options: ["let", "var", "const", "fix"],
            answer: "const",
            hint: "const = constant = fixed!",
            explanation: "const creates a constant — a variable that cannot be reassigned."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does [1,2,3].map(n => n * 2) return?",
            options: ["[1,2,3]", "[2,4,6]", "[3,6,9]", "6"],
            answer: "[2,4,6]",
            hint: "map doubles each item!",
            explanation: ".map(n => n * 2) applies n * 2 to each item: [1*2, 2*2, 3*2] = [2,4,6]."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does document.getElementById('box').innerText = 'Hi'; do?",
            options: ["Creates an element", "Changes the text of element with id='box' to 'Hi'", "Styles the element", "Removes the element"],
            answer: "Changes the text of element with id='box' to 'Hi'",
            hint: "innerText changes the visible text!",
            explanation: "Getting the element by ID and setting innerText changes its displayed text."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "true && false equals?",
            options: ["true", "false", "null", "undefined"],
            answer: "false",
            hint: "AND needs BOTH true!",
            explanation: "true && false = false. The AND operator requires both sides to be true."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "for (let item of arr) — what does 'item' hold?",
            options: ["The index", "The current element's value", "The array length", "null"],
            answer: "The current element's value",
            hint: "for...of gives you each value!",
            explanation: "In for...of, the variable holds the actual value of each array element."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "function add(a, b) { return a + b; } What does add(4, 6) return?",
            options: ["46", "10", "undefined", "4"],
            answer: "10",
            hint: "4 + 6 = ?",
            explanation: "add(4, 6) returns a + b = 4 + 6 = 10."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "arr.filter(n => n > 5) with arr = [2, 7, 3, 9, 1] returns?",
            options: ["[2,3,1]", "[7,9]", "[2,7,3,9,1]", "[]"],
            answer: "[7,9]",
            hint: "Only items where n > 5!",
            explanation: ".filter(n => n > 5) keeps only 7 and 9 (both > 5), returning [7, 9]."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "element.addEventListener('click', fn) runs fn...",
            options: ["On page load", "Every second", "When element is clicked", "On hover"],
            answer: "When element is clicked",
            hint: "click event = mouse click!",
            explanation: "addEventListener('click', fn) runs fn every time the element is clicked."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Math.floor(Math.random() * 6) + 1 simulates rolling a...",
            options: ["4-sided die (1-4)", "6-sided die (1-6)", "10-sided die (1-10)", "Coin (1-2)"],
            answer: "6-sided die (1-6)",
            hint: "* 6 gives 0-5, floor gives 0-5, +1 gives 1-6!",
            explanation: "Math.random()*6 → floor → 0-5, then +1 → 1-6. Perfect for a 6-sided die!"
          },
          {
            id: 10,
            type: "true-false",
            question: "localStorage.setItem('score', JSON.stringify(100)) stores the number 100.",
            options: ["True", "False"],
            answer: "True",
            hint: "JSON.stringify converts 100 to '100' as a string for storage!",
            explanation: "JSON.stringify(100) creates the string '100'. When read back, JSON.parse converts it to 100."
          }
        ]
      },
      {
        dayId: 4,
        title: "Final Project!",
        emoji: "🏆",
        explanation: `# Your Final Project: Digital Portfolio! 🏆

You've completed 12 weeks of coding — it's time to show what you know!

## Your Final Project: A Digital Portfolio

Build a webpage that shows everything you've learned:

### What to Include:
1. **Your Name and Bio** — with a profile emoji
2. **Skills Section** — list what you've learned (HTML, CSS, JS!)
3. **Projects Section** — describe what you've built
4. **Fun Facts** — things you love
5. **Theme Switcher** — dark/light mode (JavaScript!)
6. **Animated Elements** — hover effects (CSS!)

### HTML Structure
\`\`\`html
<body>
  <header id="top">
    <h1>👩‍💻 Emma's Portfolio</h1>
    <p>Age 7 — Junior Developer</p>
    <button onclick="toggleTheme()">🌙 Dark Mode</button>
  </header>
  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
  </nav>
  <main>
    <section id="about">...</section>
    <section id="skills">...</section>
    <section id="projects">...</section>
  </main>
  <footer>...</footer>
</body>
\`\`\`

### Skills You've Mastered:
- ✅ HTML structure and semantic tags
- ✅ CSS styling, flexbox, animations
- ✅ JavaScript variables, functions, loops
- ✅ DOM manipulation
- ✅ Event listeners
- ✅ localStorage
- ✅ Building complete projects!

## You Did It! 🎉

12 weeks, 60 days, 600+ questions — YOU COMPLETED IT ALL!

You are a REAL junior web developer. Keep building, keep learning, and remember:
**Every expert was once a beginner.** 🌟
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "A portfolio website is best for...",
            options: ["Playing games", "Showing your work and skills", "Shopping online", "Watching videos"],
            answer: "Showing your work and skills",
            hint: "Portfolio = collection of your work!",
            explanation: "A portfolio showcases your projects and skills to others — like a visual resume."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which HTML tag creates navigation links?",
            options: ["<links>", "<menu>", "<nav>", "<navigate>"],
            answer: "<nav>",
            hint: "nav = navigation!",
            explanation: "<nav> is the semantic tag for navigation links."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "<a href='#skills'> links to...",
            options: ["An external website", "The element with id='skills' on the SAME page", "A new page", "An email"],
            answer: "The element with id='skills' on the SAME page",
            hint: "# = jump to ID on the same page!",
            explanation: "Links starting with # jump to an element with that ID on the same page — good for navigation!"
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What three technologies make up the web development trio?",
            options: ["Python, Java, Ruby", "HTML, CSS, JavaScript", "React, Vue, Angular", "MySQL, PHP, Laravel"],
            answer: "HTML, CSS, JavaScript",
            hint: "Structure, Style, Behavior!",
            explanation: "HTML (structure) + CSS (style) + JavaScript (behavior) are the core web technologies."
          },
          {
            id: 5,
            type: "true-false",
            question: "A dark mode toggle uses JavaScript to switch CSS classes.",
            options: ["True", "False"],
            answer: "True",
            hint: "classList.toggle is the JS tool for this!",
            explanation: "Yes! Dark mode works by using JavaScript to add/remove a CSS class that changes colors."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "How many weeks of coding did you complete in this course?",
            options: ["6", "8", "10", "12"],
            answer: "12",
            hint: "This is Week 12!",
            explanation: "This is a 12-week coding course — 5 days per week, 45 minutes per day!"
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Which of these is NOT a JavaScript concept you learned?",
            options: ["Functions", "Arrays", "Database queries", "Event listeners"],
            answer: "Database queries",
            hint: "Databases use SQL — not what we covered!",
            explanation: "Database queries (SQL) weren't in this course. We covered JS: functions, arrays, events, objects, etc."
          },
          {
            id: 8,
            type: "true-false",
            question: "You can build real websites with what you've learned.",
            options: ["True", "False"],
            answer: "True",
            hint: "You've learned all the fundamentals!",
            explanation: "Absolutely! HTML, CSS, and JavaScript are all you need to build real websites."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What's the best way to keep improving after this course?",
            options: ["Stop coding — you know it all!", "Keep building projects and experimenting", "Only read about coding", "Wait until you're older"],
            answer: "Keep building projects and experimenting",
            hint: "Practice makes perfect!",
            explanation: "The best way to learn coding is to keep building things! Practice and experimentation are key."
          },
          {
            id: 10,
            type: "true-false",
            question: "Learning to code as a child gives you a big advantage for the future.",
            options: ["True", "False"],
            answer: "True",
            hint: "Technology is the future!",
            explanation: "Starting early builds strong foundations. Coding skills open doors to amazing careers and projects!"
          }
        ]
      },
      {
        dayId: 5,
        title: "🎓 Graduation Day!",
        emoji: "🎓",
        explanation: `# 🎓 Congratulations, Graduate!

## YOU DID IT! 🏆

You have completed **12 weeks of coding training**!

Let's celebrate everything you've mastered:

## 🌐 HTML Skills
- Document structure with semantic tags
- Headings, paragraphs, lists
- Images and links
- Forms and inputs
- Semantic tags: header, nav, main, section, footer

## 🎨 CSS Skills
- Selectors: elements, classes, IDs
- Colors, fonts, text alignment
- The box model: padding, margin, border
- Flexbox layout
- Hover effects and transitions
- Responsive design with media queries
- CSS variables

## ⚡ JavaScript Skills
- Variables (let, const)
- Data types (string, number, boolean, array, object)
- Operators (math, comparison, logical)
- If/else and switch decisions
- For loops and while loops
- Functions and return values
- Scope
- Arrow functions
- DOM manipulation
- Event listeners
- localStorage and JSON
- Building complete interactive apps!

## What's Next? 🚀
- **React** — build more complex web apps
- **Node.js** — JavaScript on the server
- **Python** — another great programming language
- **Games** — Scratch, Unity, or Pygame
- **Mobile Apps** — with React Native or Flutter

## A Message From Your Journey 🌟
\`\`\`
You started knowing nothing about code.
Today you can BUILD real things for the web.
You can make buttons work, pages dance,
And programs that think and respond.

That's not magic — it's YOU.
Keep building. Keep creating.
The whole digital world is yours to shape! 🌍
\`\`\`

## FINAL CHALLENGE 🏆
Build your dream project! It can be:
- A personal website
- A simple game
- A calculator
- An interactive story

**There are no limits — only your imagination!** ✨`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Happy Text Making Language", "Hyper Text Making Links", "Home Text Module Layer"],
            answer: "Hyper Text Markup Language",
            hint: "H-T-M-L!",
            explanation: "HTML = HyperText Markup Language — the language for structuring web pages."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does CSS stand for?",
            options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Settings", "Cascading Script System"],
            answer: "Cascading Style Sheets",
            hint: "C-S-S!",
            explanation: "CSS = Cascading Style Sheets — used to style and layout web pages."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "JavaScript makes web pages...",
            options: ["Structured", "Colorful", "Interactive and dynamic", "Faster"],
            answer: "Interactive and dynamic",
            hint: "JS = behavior!",
            explanation: "JavaScript adds interactivity and dynamic behavior to web pages."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "const add = (a, b) => a + b; What type of function is this?",
            options: ["Regular function", "Arrow function", "Method", "Constructor"],
            answer: "Arrow function",
            hint: "=> is the arrow!",
            explanation: "Arrow functions use the => syntax — a modern, concise way to write functions."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "Which correctly loops through an array?",
            options: ["loop arr { }", "for (let i in arr) { }", "for (let item of arr) { }", "while arr { }"],
            answer: "for (let item of arr) { }",
            hint: "for...of loops through values!",
            explanation: "for (let item of arr) { } is the clean way to loop through each value in an array."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "To perfectly center with flexbox:",
            options: ["center: all;", "justify-content: center; align-items: center;", "align: both center;", "flex-center: true;"],
            answer: "justify-content: center; align-items: center;",
            hint: "Both directions need their own property!",
            explanation: "Flexbox centering: justify-content (horizontal) and align-items (vertical) both set to center."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Which saves a name to localStorage?",
            options: ["localStorage.save('name', 'Emma')", "localStorage.setItem('name', 'Emma')", "save('name', 'Emma')", "store('name', 'Emma')"],
            answer: "localStorage.setItem('name', 'Emma')",
            hint: "setItem is the method!",
            explanation: "localStorage.setItem('key', 'value') saves data persistently in the browser."
          },
          {
            id: 8,
            type: "true-false",
            question: "You now know enough to build real websites.",
            options: ["True", "False"],
            answer: "True",
            hint: "Believe in yourself!",
            explanation: "YES! HTML + CSS + JavaScript are the fundamentals of web development. You can build real things!"
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What is the best way to become a better coder?",
            options: ["Memorize all syntax", "Build projects and practice regularly", "Read textbooks only", "Watch coding videos only"],
            answer: "Build projects and practice regularly",
            hint: "Practice by doing!",
            explanation: "The best way to improve at coding is to build real projects and practice consistently."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "How many questions did you answer in this 12-week course?",
            options: ["100", "300", "600", "Over 600"],
            answer: "Over 600",
            hint: "12 weeks × 5 days × 10 questions = 600!",
            explanation: "12 weeks × 5 days × 10 questions = 600 questions! You're a coding champion! 🏆"
          }
        ]
      }
    ]
  }
];
