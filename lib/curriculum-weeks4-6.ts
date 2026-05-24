import { Week } from './types';

export const weeks4to6: Week[] = [
  {
    weekId: 4,
    title: "CSS: Paint Your Page!",
    emoji: "🎨",
    color: "from-pink-400 to-rose-400",
    description: "Learn to make your web pages beautiful with CSS!",
    days: [
      {
        dayId: 1,
        title: "What is CSS?",
        emoji: "🖌️",
        explanation: `# CSS: The Artist of the Web! 🎨

**CSS** stands for **Cascading Style Sheets**.

If HTML is the skeleton of a webpage (the structure), then **CSS is the skin, clothes, and makeup** — it makes things look beautiful!

## What Can CSS Do?
- Change text **colors** 🔴🔵🟢
- Set **font sizes** (big or small)
- Add **background colors** 🟨
- Control **spacing** and layout
- Add **borders** and **shadows**
- Make things **round** or **square**

## How to Write CSS

CSS is written as rules. Each rule has:
1. A **selector** (what to style)
2. **Properties** and **values** (how to style it)

\`\`\`css
p {
  color: blue;
  font-size: 20px;
}
\`\`\`

This says: "Make ALL paragraphs blue and 20 pixels tall."

## Parts of a CSS Rule
\`\`\`
selector {
  property: value;
}
\`\`\`

- **selector**: which HTML element to style (like \`p\`, \`h1\`, \`body\`)
- **property**: what to change (like \`color\`, \`font-size\`)
- **value**: what to set it to (like \`blue\`, \`20px\`)

## Where Does CSS Go?
You can put CSS inside a \`<style>\` tag in the \`<head>\`:

\`\`\`html
<head>
  <style>
    h1 { color: purple; }
    p { color: green; }
  </style>
</head>
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does CSS stand for?",
            options: ["Colorful Style Shapes", "Cascading Style Sheets", "Computer Screen Settings", "Create Special Shapes"],
            answer: "Cascading Style Sheets",
            hint: "C-S-S: Cascading Style Sheets!",
            explanation: "CSS stands for Cascading Style Sheets — it's the language used to style web pages."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "If HTML is the skeleton, what is CSS?",
            options: ["The brain", "The clothes and appearance", "The heart", "The hands"],
            answer: "The clothes and appearance",
            hint: "CSS makes things look good!",
            explanation: "HTML provides structure (skeleton), and CSS provides style (appearance) — like clothes and makeup."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "In CSS, what is the selector?",
            options: ["The value you set", "The property you change", "Which HTML element to style", "The color name"],
            answer: "Which HTML element to style",
            hint: "The selector SELECTS what to style!",
            explanation: "The selector tells CSS which HTML element to apply the styling to (like p, h1, body)."
          },
          {
            id: 4,
            type: "code-complete",
            question: "Complete the CSS to make paragraphs blue:",
            code: "p {\n  ___: blue;\n}",
            options: ["font-size", "background", "color", "border"],
            answer: "color",
            hint: "The property for text color is 'color'!",
            explanation: "p { color: blue; } makes all paragraph text blue. 'color' is the property for text color."
          },
          {
            id: 5,
            type: "true-false",
            question: "CSS can change the color of text on a webpage.",
            options: ["True", "False"],
            answer: "True",
            hint: "CSS controls the appearance!",
            explanation: "Yes! The color property in CSS lets you change the color of text."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "Where can you put CSS in an HTML page?",
            options: ["In the <body> tag only", "In a <style> tag in the <head>", "In the <p> tag", "Only in a separate file"],
            answer: "In a <style> tag in the <head>",
            hint: "Styles go in the head section!",
            explanation: "CSS can go inside a <style> tag in the <head> section of the HTML page."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What is the correct CSS format?",
            options: ["color = blue;", "selector { property: value; }", "property selector value", "value: property { selector }"],
            answer: "selector { property: value; }",
            hint: "Selector first, then curly braces!",
            explanation: "CSS format: selector { property: value; } — selector picks what, property/value describe how to style it."
          },
          {
            id: 8,
            type: "true-false",
            question: "CSS can only change text color — nothing else.",
            options: ["True", "False"],
            answer: "False",
            hint: "CSS can do LOTS of things!",
            explanation: "CSS can change colors, font sizes, backgrounds, spacing, borders, shadows, and much more!"
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "In 'p { color: red; }' — what is 'red'?",
            options: ["The selector", "The property", "The value", "The tag"],
            answer: "The value",
            hint: "Property: value — red is what we're setting the color TO!",
            explanation: "'red' is the value. The property is 'color' and we're setting its value to 'red'."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "In 'h1 { font-size: 30px; }' — what is 'h1'?",
            options: ["The property", "The value", "The selector", "The comment"],
            answer: "The selector",
            hint: "h1 is what we're selecting to style!",
            explanation: "'h1' is the selector — it tells CSS to apply this style to all h1 heading elements."
          }
        ]
      },
      {
        dayId: 2,
        title: "Colors and Text",
        emoji: "🌈",
        explanation: `# Colors and Text Styling! 🌈

CSS lets you control colors and text in many ways!

## Text Color
\`\`\`css
h1 { color: red; }
p  { color: #3366ff; }
\`\`\`

Colors can be:
- **Names**: red, blue, green, pink, purple, orange...
- **Hex codes**: #ff0000 (red), #0000ff (blue)

## Font Size
\`\`\`css
h1 { font-size: 40px; }
p  { font-size: 16px; }
\`\`\`

px = pixels (a unit of size on screens)

## Font Weight (Bold)
\`\`\`css
p { font-weight: bold; }
p { font-weight: normal; }
\`\`\`

## Text Alignment
\`\`\`css
h1 { text-align: center; }
p  { text-align: left; }
p  { text-align: right; }
\`\`\`

## Background Color
\`\`\`css
body { background-color: lightyellow; }
h1   { background-color: pink; }
\`\`\`

## Example: Styled Page
\`\`\`css
body {
  background-color: lavender;
}
h1 {
  color: purple;
  text-align: center;
  font-size: 48px;
}
p {
  color: darkblue;
  font-size: 18px;
}
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Which CSS property changes text color?",
            options: ["background-color", "font-size", "color", "text-style"],
            answer: "color",
            hint: "The color property changes text color!",
            explanation: "The 'color' property in CSS is used to change the color of text."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which CSS property changes the page background color?",
            options: ["color", "background-color", "page-color", "fill"],
            answer: "background-color",
            hint: "Background color = background-color!",
            explanation: "The 'background-color' property changes the background color of an element."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What unit is often used for font sizes in CSS?",
            options: ["cm", "px", "km", "lbs"],
            answer: "px",
            hint: "px = pixels — units on your screen!",
            explanation: "px (pixels) is the most common unit for font sizes in CSS. Example: font-size: 16px;"
          },
          {
            id: 4,
            type: "code-complete",
            question: "Complete the CSS to center the heading:",
            code: "h1 {\n  text-align: ___;\n}",
            options: ["middle", "center", "centered", "between"],
            answer: "center",
            hint: "The value for centering is 'center'!",
            explanation: "text-align: center; centers the text horizontally on the page."
          },
          {
            id: 5,
            type: "true-false",
            question: "In CSS, you can use color names like 'red' and 'blue'.",
            options: ["True", "False"],
            answer: "True",
            hint: "CSS understands many color names!",
            explanation: "Yes! CSS knows hundreds of color names: red, blue, green, pink, purple, orange, lavender, etc."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "font-weight: bold; makes text...",
            options: ["Bigger", "Italic", "Bold/thick", "Underlined"],
            answer: "Bold/thick",
            hint: "Bold = thick, heavy text!",
            explanation: "font-weight: bold; makes text appear bold (thick and heavy)."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What does font-size: 40px; do?",
            options: ["Makes text 40 letters long", "Makes text 40 pixels tall", "Makes text bold", "Makes text blue"],
            answer: "Makes text 40 pixels tall",
            hint: "px = pixels, font-size sets the height!",
            explanation: "font-size: 40px sets the text to be 40 pixels tall — quite large!"
          },
          {
            id: 8,
            type: "true-false",
            question: "text-align: right; moves text to the right side of the page.",
            options: ["True", "False"],
            answer: "True",
            hint: "text-align controls horizontal alignment!",
            explanation: "Yes! text-align: right; aligns text to the right side of its container."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Which CSS makes a heading purple and centered?",
            options: ["h1 { text: purple, center; }", "h1 { color: purple; text-align: center; }", "h1 { purple; center; }", "heading { color purple center }"],
            answer: "h1 { color: purple; text-align: center; }",
            hint: "Two separate properties, each ending with semicolons!",
            explanation: "You can have multiple properties in one rule: h1 { color: purple; text-align: center; }"
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "What is a hex color like #ff0000?",
            options: ["A code name for a color", "A font size", "A border style", "A background pattern"],
            answer: "A code name for a color",
            hint: "#ff0000 is red in hex code!",
            explanation: "Hex codes (#rrggbb) are six-character codes that represent exact colors. #ff0000 = red."
          }
        ]
      },
      {
        dayId: 3,
        title: "The Box Model",
        emoji: "📦",
        explanation: `# The Box Model: Everything is a Box! 📦

In CSS, **every element is a box**! Understanding the box model helps you control spacing.

## The Box Model Has 4 Layers:

\`\`\`
┌─────────────────────────┐
│        MARGIN           │  ← Space outside the box
│  ┌───────────────────┐  │
│  │     BORDER        │  │  ← The border around the box
│  │  ┌─────────────┐  │  │
│  │  │   PADDING   │  │  │  ← Space inside the box
│  │  │  ┌───────┐  │  │  │
│  │  │  │CONTENT│  │  │  │  ← The actual text/image
│  │  │  └───────┘  │  │  │
│  │  └─────────────┘  │  │
│  └───────────────────┘  │
└─────────────────────────┘
\`\`\`

## Padding — Space Inside
Padding is the space between the content and the border.
\`\`\`css
p {
  padding: 10px;
}
\`\`\`

## Margin — Space Outside
Margin is the space between elements.
\`\`\`css
p {
  margin: 20px;
}
\`\`\`

## Border — The Edge
\`\`\`css
p {
  border: 2px solid black;
}
\`\`\`

This means: 2 pixels thick, solid line, black color.

## Width and Height
\`\`\`css
div {
  width: 300px;
  height: 200px;
  background-color: lightyellow;
}
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "In CSS, every element is shaped like a...",
            options: ["Circle", "Triangle", "Box", "Star"],
            answer: "Box",
            hint: "The BOX model — everything is a box!",
            explanation: "In CSS, every element on a page is treated as a rectangular box."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What is 'padding' in the CSS box model?",
            options: ["Space outside the element", "Space between content and border", "The border thickness", "The text inside"],
            answer: "Space between content and border",
            hint: "Padding is on the INSIDE of the border!",
            explanation: "Padding is the space inside an element, between the content and the border."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What is 'margin' in the CSS box model?",
            options: ["Space inside the border", "The text color", "Space outside the element", "The border style"],
            answer: "Space outside the element",
            hint: "Margin pushes other elements away!",
            explanation: "Margin is space on the outside of an element — it creates distance between elements."
          },
          {
            id: 4,
            type: "code-complete",
            question: "Complete the CSS to add a black solid border:",
            code: "p {\n  border: 2px ___ black;\n}",
            options: ["dashed", "solid", "round", "thick"],
            answer: "solid",
            hint: "A solid border is one continuous line!",
            explanation: "border: 2px solid black; creates a 2 pixel solid black border around the element."
          },
          {
            id: 5,
            type: "true-false",
            question: "Padding adds space inside the border, around the content.",
            options: ["True", "False"],
            answer: "True",
            hint: "Padding = inside space!",
            explanation: "Yes! Padding creates space inside the box, between the content and the border."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "From inside to outside, the box model order is:",
            options: ["Margin, Border, Padding, Content", "Content, Padding, Border, Margin", "Border, Margin, Padding, Content", "Padding, Content, Border, Margin"],
            answer: "Content, Padding, Border, Margin",
            hint: "Start from the inside and work out!",
            explanation: "From inside to outside: Content → Padding → Border → Margin."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Which property sets how wide an element is?",
            options: ["height", "size", "width", "length"],
            answer: "width",
            hint: "Width = how wide!",
            explanation: "The 'width' property sets how wide an element is. Example: width: 300px;"
          },
          {
            id: 8,
            type: "true-false",
            question: "margin: 20px; adds 20 pixels of space outside the element.",
            options: ["True", "False"],
            answer: "True",
            hint: "Margin is OUTSIDE the box!",
            explanation: "Yes! margin: 20px adds 20 pixels of space around the outside of the element."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What does 'border: 3px dashed red;' create?",
            options: ["A solid red border", "A 3px dashed red border", "A 3px thick solid blue border", "No border"],
            answer: "A 3px dashed red border",
            hint: "Read the values: thickness, style, color!",
            explanation: "border: 3px dashed red creates a 3 pixel thick, dashed (dotted line), red border."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "To make two paragraphs farther apart, you would increase their...",
            options: ["padding", "content", "margin", "border"],
            answer: "margin",
            hint: "What creates space BETWEEN elements?",
            explanation: "Margin creates space between elements. Increasing margin pushes elements farther apart."
          }
        ]
      },
      {
        dayId: 4,
        title: "Classes and IDs",
        emoji: "🏷️",
        explanation: `# Classes and IDs: Targeting Specific Elements! 🏷️

What if you want to style only ONE specific paragraph, not all of them?

That's where **classes** and **IDs** come in!

## Classes — Style a Group
Add a class to HTML elements:
\`\`\`html
<p class="important">This is important!</p>
<p class="important">This is also important!</p>
<p>This is normal.</p>
\`\`\`

In CSS, use a **dot (.)** before the class name:
\`\`\`css
.important {
  color: red;
  font-weight: bold;
}
\`\`\`

Only paragraphs with class="important" turn red and bold!

## IDs — Style ONE Element
An ID is unique — only ONE element should have it:
\`\`\`html
<h1 id="main-title">Welcome!</h1>
\`\`\`

In CSS, use a **hash (#)** before the ID:
\`\`\`css
#main-title {
  color: purple;
  text-align: center;
}
\`\`\`

## Class vs ID
| | Class | ID |
|---|---|---|
| Symbol | . (dot) | # (hash) |
| How many? | Many elements | Just ONE |
| Use for | Groups of similar elements | One unique element |

## Multiple Classes
An element can have more than one class:
\`\`\`html
<p class="big red">Big red text!</p>
\`\`\`

\`\`\`css
.big { font-size: 30px; }
.red { color: red; }
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "In CSS, how do you select elements with class='highlight'?",
            options: ["highlight { }", "#highlight { }", ".highlight { }", "@highlight { }"],
            answer: ".highlight { }",
            hint: "Classes use a dot (.) in CSS!",
            explanation: "To style a class in CSS, put a dot (.) before the class name: .highlight { }"
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "In CSS, how do you select the element with id='header'?",
            options: [".header { }", "header { }", "#header { }", "*header { }"],
            answer: "#header { }",
            hint: "IDs use a hash (#) in CSS!",
            explanation: "To style an ID in CSS, put a hash (#) before the ID name: #header { }"
          },
          {
            id: 3,
            type: "true-false",
            question: "Many elements on a page can share the same class.",
            options: ["True", "False"],
            answer: "True",
            hint: "Classes are for groups!",
            explanation: "Yes! Multiple elements can have the same class — that's the purpose of classes."
          },
          {
            id: 4,
            type: "true-false",
            question: "Multiple elements can share the same ID.",
            options: ["True", "False"],
            answer: "False",
            hint: "IDs are unique — only one!",
            explanation: "IDs must be unique. Only ONE element on a page should have a specific ID."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "Which HTML attribute is used for classes?",
            options: ["id=", "style=", "class=", "name="],
            answer: "class=",
            hint: "class= gives an element a class!",
            explanation: "The class= attribute adds a class to an HTML element: <p class='myClass'>"
          },
          {
            id: 6,
            type: "code-complete",
            question: "Complete the CSS to style elements with class 'warning':",
            code: ".___ {\n  color: orange;\n}",
            options: ["#warning", "warning", ".warning", "@warning"],
            answer: "warning",
            hint: "The dot goes before the class name!",
            explanation: ".warning { color: orange; } styles all elements with class='warning'."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Can one element have both a class and an ID?",
            options: ["No, only one at a time", "Yes, it can have both", "Only in headings", "Only in paragraphs"],
            answer: "Yes, it can have both",
            hint: "Attributes can be combined!",
            explanation: "Yes! An element can have both: <p id='special' class='highlight'>text</p>"
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "What symbol is used for IDs in CSS?",
            options: [".", "@", "#", "*"],
            answer: "#",
            hint: "IDs use the hash symbol!",
            explanation: "IDs in CSS use the # (hash) symbol: #myId { property: value; }"
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Can an element have two classes at once?",
            options: ["No", "Yes, like class='big red'", "Only with IDs", "Only in forms"],
            answer: "Yes, like class='big red'",
            hint: "Separate class names with a space!",
            explanation: "Yes! <p class='big red'> gives the element both the 'big' and 'red' classes."
          },
          {
            id: 10,
            type: "true-false",
            question: "Using .myClass in CSS targets elements with class='myClass' in HTML.",
            options: ["True", "False"],
            answer: "True",
            hint: ".myClass in CSS matches class='myClass' in HTML!",
            explanation: "Correct! .myClass in CSS matches all HTML elements that have class='myClass'."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 4 Review!",
        emoji: "🎨",
        explanation: `# Week 4 Review: CSS Artist! 🎨

Amazing work! You've learned how to make web pages beautiful with CSS!

## Day 1: What is CSS? 🖌️
- CSS = Cascading Style Sheets
- Adds color, size, spacing to HTML
- Written as: selector { property: value; }

## Day 2: Colors and Text 🌈
- color: red; — text color
- background-color: yellow; — background
- font-size: 20px; — text size
- font-weight: bold; — bold text
- text-align: center; — alignment

## Day 3: The Box Model 📦
- Content → Padding → Border → Margin
- padding: space inside the border
- margin: space outside the element
- border: 2px solid black;

## Day 4: Classes and IDs 🏷️
- .className — targets class= elements
- #idName — targets id= elements
- Classes can be used many times
- IDs are unique (one per page)

## Putting It All Together!
\`\`\`css
body {
  background-color: lightyellow;
}

#main-title {
  color: purple;
  text-align: center;
  font-size: 48px;
}

.card {
  background-color: white;
  border: 2px solid lavender;
  padding: 20px;
  margin: 10px;
}
\`\`\`

You're a CSS artist! 🌟`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does CSS stand for?",
            options: ["Creative Style Settings", "Cascading Style Sheets", "Computer Screen Styling", "Colorful Screen Sheets"],
            answer: "Cascading Style Sheets",
            hint: "C-S-S!",
            explanation: "CSS = Cascading Style Sheets — it styles HTML pages."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which CSS property sets text color?",
            options: ["background-color", "font-color", "color", "text"],
            answer: "color",
            hint: "Just 'color'!",
            explanation: "The 'color' property sets the text color in CSS."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What symbol targets a CSS class?",
            options: ["#", "@", ".", "*"],
            answer: ".",
            hint: "Classes use a dot!",
            explanation: "A dot (.) before the name targets a CSS class: .myClass { }"
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What symbol targets a CSS ID?",
            options: [".", "@", "*", "#"],
            answer: "#",
            hint: "IDs use a hash!",
            explanation: "A hash (#) before the name targets a CSS ID: #myId { }"
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "In the box model, padding is...",
            options: ["Space outside the box", "Space between content and border", "The border itself", "The margin"],
            answer: "Space between content and border",
            hint: "Padding is INSIDE the border!",
            explanation: "Padding is the space between the content and the border, inside the box."
          },
          {
            id: 6,
            type: "true-false",
            question: "margin adds space outside an element.",
            options: ["True", "False"],
            answer: "True",
            hint: "Margin = outside space!",
            explanation: "Yes! Margin adds space on the outside of an element, separating it from others."
          },
          {
            id: 7,
            type: "code-complete",
            question: "Complete the CSS to center text:",
            code: "h1 {\n  text-align: ___;\n}",
            options: ["left", "middle", "center", "right"],
            answer: "center",
            hint: "The value for centering is 'center'!",
            explanation: "text-align: center; centers the text in the element."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "border: 1px solid blue; creates...",
            options: ["A 1px dashed blue border", "A 1px solid blue border", "A 1px thick blue shadow", "No border"],
            answer: "A 1px solid blue border",
            hint: "Read the values: thickness, style, color!",
            explanation: "border: 1px solid blue creates a 1 pixel, solid (continuous line), blue border."
          },
          {
            id: 9,
            type: "true-false",
            question: "Multiple elements can share the same CSS class.",
            options: ["True", "False"],
            answer: "True",
            hint: "Classes can be reused!",
            explanation: "Yes! Multiple elements can have the same class, and CSS will style all of them."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "font-weight: bold makes text...",
            options: ["Bigger", "Italic", "Thicker/heavier", "Colored"],
            answer: "Thicker/heavier",
            hint: "Bold = thick, heavy letters!",
            explanation: "font-weight: bold makes text thicker and heavier looking."
          }
        ]
      }
    ]
  },
  {
    weekId: 5,
    title: "More CSS Magic!",
    emoji: "✨",
    color: "from-cyan-400 to-teal-400",
    description: "Master flexbox, backgrounds, and advanced CSS styling!",
    days: [
      {
        dayId: 1,
        title: "Backgrounds and Borders",
        emoji: "🖼️",
        explanation: `# Backgrounds and Borders: Decorating Elements! 🖼️

## Background Properties
You've learned \`background-color\`. There's more!

### Background Color
\`\`\`css
body {
  background-color: lightblue;
}
\`\`\`

### Border Radius (Rounded Corners!)
\`\`\`css
div {
  border-radius: 10px;     /* slightly rounded */
  border-radius: 50%;      /* perfect circle! */
}
\`\`\`

### Box Shadow
\`\`\`css
div {
  box-shadow: 3px 3px 10px gray;
}
\`\`\`
This adds a shadow: 3px right, 3px down, 10px blur, gray color.

## Border Styles
\`\`\`css
p { border: 2px solid black; }   /* solid line */
p { border: 2px dashed red; }    /* dashed line */
p { border: 2px dotted blue; }   /* dotted line */
\`\`\`

## Border on One Side Only
\`\`\`css
p {
  border-top: 3px solid green;
  border-bottom: 3px solid green;
}
\`\`\`

## Combining it All
\`\`\`css
.card {
  background-color: white;
  border: 2px solid lavender;
  border-radius: 15px;
  box-shadow: 2px 4px 8px lightgray;
  padding: 20px;
}
\`\`\`

This creates a rounded card with a shadow! 🃏
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does border-radius: 50%; create?",
            options: ["A square", "A triangle", "A circle", "An oval"],
            answer: "A circle",
            hint: "50% radius on each corner makes a circle!",
            explanation: "border-radius: 50% rounds the corners so much it creates a circle shape."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which property adds a shadow to an element?",
            options: ["text-shadow", "box-shadow", "element-shadow", "shadow"],
            answer: "box-shadow",
            hint: "Shadow for a box = box-shadow!",
            explanation: "box-shadow adds a shadow effect around a box element."
          },
          {
            id: 3,
            type: "true-false",
            question: "border-radius makes corners rounded.",
            options: ["True", "False"],
            answer: "True",
            hint: "Radius = roundness!",
            explanation: "Yes! border-radius rounds the corners of elements."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What does 'border: 2px dashed red;' look like?",
            options: ["A solid red line", "A dotted red line", "A dashed red line", "No border"],
            answer: "A dashed red line",
            hint: "Dashed = a line made of dashes!",
            explanation: "A dashed border creates a line made up of short dashes."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete the CSS for slightly rounded corners:",
            code: "div {\n  border-___: 10px;\n}",
            options: ["round", "circle", "radius", "curve"],
            answer: "radius",
            hint: "border-radius rounds the corners!",
            explanation: "border-radius: 10px; makes the corners of an element slightly rounded."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "How do you add a border only to the top of an element?",
            options: ["border: top solid;", "border-top: 2px solid black;", "top-border: 2px;", "border: 2px top;"],
            answer: "border-top: 2px solid black;",
            hint: "border-top targets only the top side!",
            explanation: "border-top lets you add a border to just the top of an element."
          },
          {
            id: 7,
            type: "true-false",
            question: "You can combine border-radius and box-shadow on the same element.",
            options: ["True", "False"],
            answer: "True",
            hint: "CSS properties can be combined!",
            explanation: "Yes! You can use multiple CSS properties together on one element."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Which border style creates a dotted line?",
            options: ["solid", "dashed", "dotted", "broken"],
            answer: "dotted",
            hint: "Dots = dotted!",
            explanation: "border: 2px dotted blue creates a line made of dots."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "box-shadow: 3px 3px 10px gray — what does the '10px' control?",
            options: ["Shadow width", "Shadow color", "Shadow blur/spread", "Shadow thickness"],
            answer: "Shadow blur/spread",
            hint: "The third value controls how blurry/spread the shadow is!",
            explanation: "In box-shadow, the third value (10px) controls how blurry and spread out the shadow is."
          },
          {
            id: 10,
            type: "true-false",
            question: "background-color and border-radius can be used together.",
            options: ["True", "False"],
            answer: "True",
            hint: "You can combine many CSS properties!",
            explanation: "Absolutely! background-color and border-radius work great together — like a rounded colored card."
          }
        ]
      },
      {
        dayId: 2,
        title: "Flexbox: Line Things Up!",
        emoji: "📐",
        explanation: `# Flexbox: The Layout Superpower! 📐

**Flexbox** is a CSS layout tool that makes it easy to line things up horizontally or vertically.

## Turning on Flexbox
\`\`\`css
.container {
  display: flex;
}
\`\`\`

Any element with \`display: flex\` becomes a flex container, and its children line up in a row!

## Row or Column?
\`\`\`css
.row-container {
  display: flex;
  flex-direction: row;     /* side by side (default) */
}

.column-container {
  display: flex;
  flex-direction: column;  /* stacked up and down */
}
\`\`\`

## Aligning Items
### Horizontal alignment (justify-content):
\`\`\`css
.container {
  display: flex;
  justify-content: center;        /* center */
  justify-content: space-between; /* spread out */
  justify-content: flex-start;    /* left */
  justify-content: flex-end;      /* right */
}
\`\`\`

### Vertical alignment (align-items):
\`\`\`css
.container {
  display: flex;
  align-items: center;    /* vertical center */
  align-items: flex-start;/* top */
  align-items: flex-end;  /* bottom */
}
\`\`\`

## Perfect Centering!
\`\`\`css
.center-everything {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What CSS property turns on flexbox?",
            options: ["flex: on;", "layout: flex;", "display: flex;", "flex-mode: true;"],
            answer: "display: flex;",
            hint: "display: flex activates flexbox!",
            explanation: "Adding display: flex; to a container turns on flexbox for its children."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "flex-direction: row; arranges items...",
            options: ["Stacked vertically", "Side by side horizontally", "Diagonally", "Randomly"],
            answer: "Side by side horizontally",
            hint: "Row = horizontal line!",
            explanation: "flex-direction: row; places flex items side by side in a horizontal row."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "flex-direction: column; arranges items...",
            options: ["Side by side", "Stacked top to bottom", "In a circle", "Randomly"],
            answer: "Stacked top to bottom",
            hint: "Column = vertical stack!",
            explanation: "flex-direction: column; stacks flex items on top of each other vertically."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "justify-content: center; centers items...",
            options: ["Vertically", "Horizontally", "Diagonally", "Not at all"],
            answer: "Horizontally",
            hint: "justify-content controls the main axis (horizontal for row)!",
            explanation: "In a flex row, justify-content: center; centers items horizontally."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "To center something both horizontally AND vertically, you use:",
            options: ["display: flex; center: all;", "display: flex; justify-content: center; align-items: center;", "display: center;", "flex: center center;"],
            answer: "display: flex; justify-content: center; align-items: center;",
            hint: "Two properties: one for each direction!",
            explanation: "Combining justify-content: center and align-items: center creates perfect centering."
          },
          {
            id: 6,
            type: "true-false",
            question: "display: flex; makes items automatically line up in a row.",
            options: ["True", "False"],
            answer: "True",
            hint: "Flex rows are the default!",
            explanation: "Yes! By default, display: flex arranges items in a row (side by side)."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "justify-content: space-between; does what?",
            options: ["Centers items", "Spreads items with space between them", "Stacks items", "Removes items"],
            answer: "Spreads items with space between them",
            hint: "Space between = spread out!",
            explanation: "justify-content: space-between spreads items evenly, with equal space between each one."
          },
          {
            id: 8,
            type: "code-complete",
            question: "Complete the flexbox CSS to stack items vertically:",
            code: "div {\n  display: flex;\n  flex-direction: ___;\n}",
            options: ["row", "vertical", "column", "stack"],
            answer: "column",
            hint: "Column = top to bottom!",
            explanation: "flex-direction: column; stacks flex items vertically from top to bottom."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "align-items: center; centers items...",
            options: ["Horizontally", "Diagonally", "Vertically", "By color"],
            answer: "Vertically",
            hint: "align-items controls vertical (cross-axis) alignment!",
            explanation: "align-items: center centers items vertically within the flex container."
          },
          {
            id: 10,
            type: "true-false",
            question: "Flexbox can only be used for horizontal layouts.",
            options: ["True", "False"],
            answer: "False",
            hint: "flex-direction can be row OR column!",
            explanation: "Flexbox works for both horizontal (row) and vertical (column) layouts."
          }
        ]
      },
      {
        dayId: 3,
        title: "Hover Effects",
        emoji: "🖱️",
        explanation: `# Hover Effects: Interactive Styling! 🖱️

**Hover** effects change how something looks when you move your mouse over it!

## The :hover Selector
\`\`\`css
button:hover {
  background-color: darkblue;
  color: white;
}
\`\`\`

When you hover over a button, it turns dark blue!

## Transitions — Smooth Changes
\`\`\`css
button {
  background-color: lightblue;
  transition: background-color 0.3s;
}

button:hover {
  background-color: darkblue;
}
\`\`\`

The transition makes the color change smoothly over 0.3 seconds instead of instantly.

## Cursor
\`\`\`css
button {
  cursor: pointer; /* hand cursor when hovering */
}
\`\`\`

## Scaling Up on Hover
\`\`\`css
.card {
  transform: scale(1);
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05); /* 5% bigger on hover */
}
\`\`\`

## Example: Styled Button
\`\`\`css
.btn {
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.btn:hover {
  background-color: darkviolet;
  transform: scale(1.05);
}
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does the :hover selector do?",
            options: ["Styles elements when clicked", "Styles elements when the mouse is over them", "Styles elements when typed", "Styles elements always"],
            answer: "Styles elements when the mouse is over them",
            hint: "Hover = mouse is on top of the element!",
            explanation: ":hover applies styles when the user's mouse cursor is positioned over the element."
          },
          {
            id: 2,
            type: "code-complete",
            question: "Complete the hover selector for buttons:",
            code: "button:___ {\n  color: white;\n}",
            options: ["click", "focus", "hover", "active"],
            answer: "hover",
            hint: "The hover state is :hover!",
            explanation: "button:hover { } targets buttons only when the mouse is hovering over them."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does the transition property do?",
            options: ["Changes color instantly", "Makes style changes happen smoothly over time", "Removes styles", "Adds a border"],
            answer: "Makes style changes happen smoothly over time",
            hint: "Transition = smooth change!",
            explanation: "transition makes CSS changes (like color or size) happen gradually/smoothly instead of instantly."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "cursor: pointer; shows which cursor?",
            options: ["An arrow cursor", "A text cursor (I-beam)", "A hand/pointer cursor", "A spinning cursor"],
            answer: "A hand/pointer cursor",
            hint: "Pointer = the hand you see on clickable links!",
            explanation: "cursor: pointer shows the hand cursor — telling users this element is clickable."
          },
          {
            id: 5,
            type: "true-false",
            question: "Hover effects only work on buttons.",
            options: ["True", "False"],
            answer: "False",
            hint: "You can hover over any element!",
            explanation: "The :hover selector works on any HTML element: divs, images, links, paragraphs, etc."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "transform: scale(1.1); makes an element...",
            options: ["10% smaller", "10% bigger", "Rotate 10 degrees", "Move 10 pixels"],
            answer: "10% bigger",
            hint: "Scale 1 = normal size, 1.1 = 10% bigger!",
            explanation: "scale(1.1) makes an element 110% of its normal size — 10% bigger."
          },
          {
            id: 7,
            type: "true-false",
            question: "transition: background-color 0.5s; makes color changes take half a second.",
            options: ["True", "False"],
            answer: "True",
            hint: "0.5s = half a second!",
            explanation: "Yes! transition: property 0.5s makes that property's changes take 0.5 seconds to complete."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Why add transition when using :hover?",
            options: ["It's required to make hover work", "It makes the change look smooth and polished", "It changes the color", "It adds an animation"],
            answer: "It makes the change look smooth and polished",
            hint: "Transition = smooth, not instant!",
            explanation: "Transition makes the visual change happen gradually, which looks more polished and professional."
          },
          {
            id: 9,
            type: "code-complete",
            question: "Complete the CSS for a hover effect:",
            code: ".card:___ {\n  background-color: yellow;\n}",
            options: ["click", "hover", "mouseover", "active"],
            answer: "hover",
            hint: "The pseudo-class for hovering is :hover!",
            explanation: ".card:hover { } applies styles to elements with class='card' when the mouse hovers over them."
          },
          {
            id: 10,
            type: "true-false",
            question: "scale(0.9) would make an element slightly smaller.",
            options: ["True", "False"],
            answer: "True",
            hint: "0.9 is less than 1 (normal size)!",
            explanation: "scale(0.9) makes the element 90% of its normal size — slightly smaller."
          }
        ]
      },
      {
        dayId: 4,
        title: "Responsive Design",
        emoji: "📱",
        explanation: `# Responsive Design: Works on Any Screen! 📱

**Responsive design** means your website looks great on ALL screen sizes — phones, tablets, and computers!

## The Problem
A page that looks great on a big computer screen might look bad on a small phone screen.

## Solution: Percentages Instead of Pixels
\`\`\`css
/* Fixed — doesn't resize: */
div { width: 800px; }

/* Responsive — adjusts to screen: */
div { width: 80%; }
\`\`\`

80% means 80% of the screen width — so it always fits!

## max-width
\`\`\`css
.container {
  width: 100%;
  max-width: 1200px;
}
\`\`\`

This says: "Be 100% wide, but never wider than 1200px."

## Media Queries — Different Styles for Different Screens
\`\`\`css
/* Styles for ALL screens: */
p { font-size: 16px; }

/* Styles ONLY for small screens (phones): */
@media (max-width: 600px) {
  p { font-size: 14px; }
  .container { width: 100%; }
}
\`\`\`

## Viewport Meta Tag (in HTML)
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1">
\`\`\`

This tells the phone to use its real width — always put this in your \`<head>\`!

## Responsive Tips
- Use % for widths instead of px where possible
- Use max-width to prevent elements getting too wide
- Test your page at different sizes
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does 'responsive design' mean?",
            options: ["A website that loads fast", "A website that looks good on any screen size", "A website with animations", "A website with CSS"],
            answer: "A website that looks good on any screen size",
            hint: "Responds to different screen sizes!",
            explanation: "Responsive design means the website adapts its layout to look good on phones, tablets, and computers."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Why use width: 80% instead of width: 800px?",
            options: ["800px looks better", "80% adjusts to any screen width", "px is faster", "There's no difference"],
            answer: "80% adjusts to any screen width",
            hint: "Percentages scale with the screen!",
            explanation: "80% always takes up 80% of the screen, no matter how big or small the screen is."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does max-width: 1200px; do?",
            options: ["Makes the element 1200px wide always", "Prevents the element from being wider than 1200px", "Sets a minimum width", "Nothing"],
            answer: "Prevents the element from being wider than 1200px",
            hint: "max = maximum, it won't go beyond!",
            explanation: "max-width: 1200px means the element won't exceed 1200px wide, but can be smaller."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What is a media query used for?",
            options: ["Playing media files", "Applying different styles at different screen sizes", "Adding images", "Controlling video"],
            answer: "Applying different styles at different screen sizes",
            hint: "Media queries respond to the device!",
            explanation: "Media queries (@media) let you apply specific CSS rules for specific screen sizes."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete the media query for small screens:",
            code: "@___ (max-width: 600px) {\n  p { font-size: 14px; }\n}",
            options: ["screen", "style", "media", "responsive"],
            answer: "media",
            hint: "@media starts a media query!",
            explanation: "@media (max-width: 600px) { } applies styles only when the screen is 600px or narrower."
          },
          {
            id: 6,
            type: "true-false",
            question: "Using percentage widths (like 80%) helps make a responsive layout.",
            options: ["True", "False"],
            answer: "True",
            hint: "Percentages adapt to the screen!",
            explanation: "Yes! Percentage widths automatically adjust as the screen size changes."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "The viewport meta tag goes in the HTML...",
            options: ["<body>", "<footer>", "<head>", "<main>"],
            answer: "<head>",
            hint: "Meta tags go in the head!",
            explanation: "The viewport meta tag belongs in the <head> section: <meta name='viewport' ...>"
          },
          {
            id: 8,
            type: "true-false",
            question: "A website built for desktop will automatically look great on a phone.",
            options: ["True", "False"],
            answer: "False",
            hint: "You have to design for small screens!",
            explanation: "Not automatically — you need responsive design (media queries, flexible widths) to make it work on phones."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "max-width: 600px in a media query targets screens...",
            options: ["Wider than 600px", "Exactly 600px", "600px or narrower", "Only phones"],
            answer: "600px or narrower",
            hint: "max-width means up to that size!",
            explanation: "@media (max-width: 600px) applies to screens that are 600 pixels wide or narrower."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Which unit makes elements automatically adapt to screen width?",
            options: ["px", "%", "cm", "inches"],
            answer: "%",
            hint: "Percentages are relative to the screen!",
            explanation: "Percentage (%) widths are relative to the parent container, so they scale with the screen."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 5 Review!",
        emoji: "✨",
        explanation: `# Week 5 Review: CSS Master! ✨

You've leveled up your CSS skills this week!

## Day 1: Backgrounds and Borders 🖼️
- background-color for colorful backgrounds
- border-radius: 50% for circles, small values for rounded corners
- box-shadow for depth effects
- border-top/bottom/left/right for specific sides

## Day 2: Flexbox 📐
- display: flex activates flexbox
- flex-direction: row (horizontal) or column (vertical)
- justify-content centers horizontally
- align-items centers vertically
- Combined: perfect centering!

## Day 3: Hover Effects 🖱️
- :hover styles on mouse-over
- transition for smooth changes
- cursor: pointer for hand cursor
- transform: scale() to resize

## Day 4: Responsive Design 📱
- Use % widths instead of px for flexible layouts
- max-width prevents things getting too wide
- @media queries apply styles at specific screen sizes
- Viewport meta tag in <head>

## CSS You Know Now
\`\`\`css
.my-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 2px 4px 12px rgba(0,0,0,0.1);
  padding: 20px;
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
  cursor: pointer;
}

.my-card:hover {
  transform: scale(1.02);
}
\`\`\`

**You're a CSS wizard! 🧙‍♂️**`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Which property creates rounded corners?",
            options: ["border-round", "corner-radius", "border-radius", "radius"],
            answer: "border-radius",
            hint: "border-radius rounds corners!",
            explanation: "border-radius controls how rounded the corners of an element are."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What activates flexbox on a container?",
            options: ["flex: true;", "display: flex;", "layout: flex;", "flexbox: on;"],
            answer: "display: flex;",
            hint: "display: flex turns it on!",
            explanation: "display: flex; makes an element a flex container."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Which CSS applies styles only when hovering?",
            options: [".hover { }", ":hover { }", "hover: { }", "#hover { }"],
            answer: ":hover { }",
            hint: "The pseudo-class is :hover!",
            explanation: "selector:hover { } applies styles only when the mouse hovers over the element."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What does @media (max-width: 768px) target?",
            options: ["Screens wider than 768px", "Screens exactly 768px", "Screens 768px or narrower", "All screens"],
            answer: "Screens 768px or narrower",
            hint: "max-width = up to that width!",
            explanation: "@media (max-width: 768px) applies CSS to screens 768 pixels wide or smaller."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "justify-content: space-between; does what in flexbox?",
            options: ["Centers items", "Spreads items with equal space between them", "Aligns items vertically", "Hides items"],
            answer: "Spreads items with equal space between them",
            hint: "Space between = spread with gaps!",
            explanation: "justify-content: space-between spreads flex items with equal space between each one."
          },
          {
            id: 6,
            type: "true-false",
            question: "box-shadow adds a shadow effect to an element.",
            options: ["True", "False"],
            answer: "True",
            hint: "box-shadow = shadow around a box!",
            explanation: "Yes! box-shadow creates a drop shadow effect around the element."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "transition: transform 0.2s; means...",
            options: ["Transform instantly", "Transform takes 0.2 seconds smoothly", "Transform doesn't work", "Transform loops 0.2 times"],
            answer: "Transform takes 0.2 seconds smoothly",
            hint: "transition = smooth over time!",
            explanation: "transition: transform 0.2s makes transform changes happen smoothly over 0.2 seconds."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "To center items both horizontally and vertically in flexbox:",
            options: ["align: center center;", "justify-content: center; align-items: center;", "display: center;", "center: both;"],
            answer: "justify-content: center; align-items: center;",
            hint: "Two properties, one for each direction!",
            explanation: "Combine justify-content: center (horizontal) and align-items: center (vertical) for perfect centering."
          },
          {
            id: 9,
            type: "true-false",
            question: "Using width: 100% makes an element take up the full width of its container.",
            options: ["True", "False"],
            answer: "True",
            hint: "100% = all of the available width!",
            explanation: "Yes! width: 100% makes an element as wide as its parent container."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Which CSS makes an element grow slightly on hover?",
            options: [".el:hover { transform: scale(0.5); }", ".el:hover { transform: scale(1.1); }", ".el:hover { width: grow; }", ".el:hover { size: big; }"],
            answer: ".el:hover { transform: scale(1.1); }",
            hint: "scale(1.1) = 10% bigger!",
            explanation: "transform: scale(1.1) makes the element 10% bigger — a subtle, nice hover effect."
          }
        ]
      }
    ]
  },
  {
    weekId: 6,
    title: "Hello JavaScript!",
    emoji: "⚡",
    color: "from-yellow-400 to-amber-400",
    description: "Start coding with real JavaScript — make pages come alive!",
    days: [
      {
        dayId: 1,
        title: "What is JavaScript?",
        emoji: "⚡",
        explanation: `# JavaScript: The Brain of the Web! ⚡

You've learned HTML (structure) and CSS (style). Now it's time for **JavaScript** — the brain that makes pages DO things!

## What Can JavaScript Do?
- Make buttons work when you click them 🖱️
- Show and hide things on the page 👁️
- Do math and calculations 🔢
- Change the content without reloading 🔄
- Create animations and games 🎮
- Check if a form is filled in correctly ✅

## HTML vs CSS vs JavaScript
| | Purpose | Example |
|---|---|---|
| HTML | Structure | A button exists |
| CSS | Appearance | Button is blue |
| JavaScript | Behavior | Clicking the button does something |

## Adding JavaScript to HTML
JavaScript goes in a \`<script>\` tag:

\`\`\`html
<html>
  <body>
    <p id="message">Hello!</p>
    <button onclick="changeText()">Click me!</button>

    <script>
      function changeText() {
        document.getElementById("message").innerText = "You clicked it!";
      }
    </script>
  </body>
</html>
\`\`\`

## Your First JavaScript Line
\`\`\`javascript
alert("Hello World!");
\`\`\`

This pops up a message box saying "Hello World!" — your first JavaScript program! 🎉

## console.log — Print Messages
\`\`\`javascript
console.log("Hello from JavaScript!");
\`\`\`

This prints to the browser's developer tools console — coders use it all the time!
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is JavaScript mainly used for on websites?",
            options: ["Adding colors", "Creating structure", "Making pages interactive and doing things", "Writing text"],
            answer: "Making pages interactive and doing things",
            hint: "JavaScript = behavior!",
            explanation: "JavaScript adds behavior to web pages — making buttons work, animations, calculations, and more."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which HTML tag is used to add JavaScript to a page?",
            options: ["<js>", "<code>", "<javascript>", "<script>"],
            answer: "<script>",
            hint: "script tag = JavaScript!",
            explanation: "JavaScript code goes inside <script> tags in an HTML page."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does alert('Hello'); do?",
            options: ["Prints to the console", "Pops up a dialog box with 'Hello'", "Creates a heading", "Adds a paragraph"],
            answer: "Pops up a dialog box with 'Hello'",
            hint: "alert creates a pop-up message!",
            explanation: "alert() shows a pop-up dialog box with the message inside the parentheses."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What does console.log() do?",
            options: ["Shows a pop-up", "Writes to the screen", "Prints a message to the developer console", "Creates a button"],
            answer: "Prints a message to the developer console",
            hint: "Console = the developer's print tool!",
            explanation: "console.log() prints messages to the browser's developer console — great for testing!"
          },
          {
            id: 5,
            type: "true-false",
            question: "JavaScript can change text on a webpage after it has loaded.",
            options: ["True", "False"],
            answer: "True",
            hint: "That's one of JavaScript's superpowers!",
            explanation: "Yes! JavaScript can read and change any HTML content on the page dynamically."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "In the web trinity, what does JavaScript provide?",
            options: ["Structure", "Style/appearance", "Behavior/interactivity", "Images"],
            answer: "Behavior/interactivity",
            hint: "HTML = structure, CSS = style, JS = ?",
            explanation: "HTML = structure, CSS = style, JavaScript = behavior. JS makes things interactive!"
          },
          {
            id: 7,
            type: "true-false",
            question: "JavaScript can make a button do something when clicked.",
            options: ["True", "False"],
            answer: "True",
            hint: "Clicks are JavaScript events!",
            explanation: "Yes! JavaScript handles events like clicks, key presses, and more."
          },
          {
            id: 8,
            type: "code-complete",
            question: "Complete the JavaScript to show a pop-up:",
            code: "___(\"Hello!\");",
            options: ["console.log", "alert", "print", "show"],
            answer: "alert",
            hint: "alert shows a pop-up message!",
            explanation: "alert('Hello!') shows a pop-up dialog box with the text 'Hello!'."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Where is the best place to put a <script> tag in HTML?",
            options: ["Inside <head> only", "Just before </body>", "Inside a <p> tag", "After </html>"],
            answer: "Just before </body>",
            hint: "Scripts at the end let the page load first!",
            explanation: "Putting <script> just before </body> lets the HTML load first, then JavaScript runs."
          },
          {
            id: 10,
            type: "true-false",
            question: "JavaScript can only be used to show pop-ups.",
            options: ["True", "False"],
            answer: "False",
            hint: "JavaScript can do SO much more!",
            explanation: "JavaScript can do games, animations, math, change the page, talk to servers, and much more!"
          }
        ]
      },
      {
        dayId: 2,
        title: "Variables in JavaScript",
        emoji: "📦",
        explanation: `# JavaScript Variables: Storing Data! 📦

You already know what variables are (labeled boxes!). Now let's use them in real JavaScript!

## Creating Variables
In JavaScript, you create variables with \`let\` or \`const\`:

\`\`\`javascript
let name = "Emma";
let age = 7;
let score = 0;
const gravity = 9.8;  // const = can't change
\`\`\`

- **let** — can change later
- **const** — stays the same forever

## Data Types in JavaScript
\`\`\`javascript
let text = "Hello";      // String (text in quotes)
let number = 42;          // Number
let isHappy = true;       // Boolean (true or false)
\`\`\`

## Using Variables
\`\`\`javascript
let name = "Emma";
console.log("Hello, " + name + "!");  // Hello, Emma!

let score = 10;
score = score + 5;   // Now score is 15
console.log(score);  // 15
\`\`\`

## String Concatenation
Joining text together with +:
\`\`\`javascript
let firstName = "Emma";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log(fullName); // "Emma Smith"
\`\`\`

## Template Literals (Backtick Strings)
\`\`\`javascript
let name = "Emma";
let age = 7;
console.log(\`My name is \${name} and I am \${age} years old.\`);
\`\`\`

Output: "My name is Emma and I am 7 years old."
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Which keyword creates a variable that CAN change?",
            options: ["const", "fixed", "let", "var-able"],
            answer: "let",
            hint: "let = variable that can change!",
            explanation: "'let' creates a variable that can be updated. 'const' cannot be changed after creation."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which keyword creates a variable that CANNOT change?",
            options: ["let", "var", "const", "fixed"],
            answer: "const",
            hint: "const = constant = stays the same!",
            explanation: "'const' creates a constant — a variable that keeps its value and cannot be reassigned."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What type of value is \"Hello\" in JavaScript?",
            options: ["Number", "Boolean", "String", "Object"],
            answer: "String",
            hint: "Text in quotes = string!",
            explanation: "Text values in JavaScript are called strings. They're written in quotes: \"Hello\" or 'Hello'."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What type of value is true or false?",
            options: ["String", "Number", "Boolean", "Text"],
            answer: "Boolean",
            hint: "True/false values are Booleans!",
            explanation: "Boolean values are true or false — they represent yes/no, on/off decisions."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete the variable declaration:",
            code: "___ score = 0;",
            options: ["var-able", "make", "let", "create"],
            answer: "let",
            hint: "let creates a variable!",
            explanation: "let score = 0; creates a variable named 'score' with the initial value 0."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "let x = 5; x = x + 3; What is x now?",
            options: ["5", "3", "8", "53"],
            answer: "8",
            hint: "5 + 3 = ?",
            explanation: "x starts at 5, then x = x + 3 means x = 5 + 3 = 8."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What does 'Hello' + ' ' + 'World' produce?",
            options: ["'HelloWorld'", "'Hello World'", "An error", "'Hello' + 'World'"],
            answer: "'Hello World'",
            hint: "Strings join together with +!",
            explanation: "Using + between strings joins them: 'Hello' + ' ' + 'World' = 'Hello World'."
          },
          {
            id: 8,
            type: "true-false",
            question: "let age = 7; — the number 7 is stored in the variable 'age'.",
            options: ["True", "False"],
            answer: "True",
            hint: "= assigns the value to the variable!",
            explanation: "Yes! let age = 7 creates a variable called 'age' and stores the number 7 in it."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "In template literals, how do you insert a variable?",
            options: ["Using +variable+", "Using {variable}", "Using ${variable}", "Using (variable)"],
            answer: "Using ${variable}",
            hint: "Dollar sign and curly braces in backtick strings!",
            explanation: "In template literals (backtick strings), use ${variableName} to insert variable values."
          },
          {
            id: 10,
            type: "true-false",
            question: "const name = 'Emma'; name = 'Sophie'; — this is allowed.",
            options: ["True", "False"],
            answer: "False",
            hint: "const cannot be changed!",
            explanation: "const variables cannot be reassigned. You'd get an error trying to change a const."
          }
        ]
      },
      {
        dayId: 3,
        title: "Math in JavaScript",
        emoji: "🔢",
        explanation: `# Math in JavaScript: The Calculator! 🔢

JavaScript is great at math! You can do all kinds of calculations.

## Basic Math Operators
\`\`\`javascript
let sum = 5 + 3;      // 8 (addition)
let diff = 10 - 4;    // 6 (subtraction)
let product = 3 * 4;  // 12 (multiplication)
let quotient = 20 / 4;// 5 (division)
let remainder = 10 % 3;// 1 (remainder/modulo — leftover after division)
\`\`\`

## Updating Variables with Math
\`\`\`javascript
let score = 0;
score = score + 10;  // score is 10
score += 5;          // shortcut! score is 15
score++;             // adds 1! score is 16
score--;             // subtracts 1! score is 15
\`\`\`

## Math Object
JavaScript has a built-in Math object with helpful tools:

\`\`\`javascript
Math.round(3.7)    // 4 — round to nearest whole number
Math.floor(3.9)    // 3 — round DOWN
Math.ceil(3.1)     // 4 — round UP
Math.max(5, 9, 3)  // 9 — find the biggest
Math.min(5, 9, 3)  // 3 — find the smallest
Math.random()      // random number between 0 and 1
\`\`\`

## Random Numbers (Great for Games!)
\`\`\`javascript
// Random whole number 1-10:
let dice = Math.floor(Math.random() * 10) + 1;
\`\`\`

## Order of Operations
JavaScript follows math rules:
\`\`\`javascript
let result = 2 + 3 * 4;   // 14 (multiply first!)
let result2 = (2 + 3) * 4; // 20 (brackets first!)
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does 10 % 3 equal in JavaScript?",
            options: ["3", "1", "33", "0"],
            answer: "1",
            hint: "10 ÷ 3 = 3 remainder 1!",
            explanation: "% is the remainder (modulo) operator. 10 ÷ 3 = 3 with 1 left over, so 10 % 3 = 1."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does score++ do?",
            options: ["Doubles score", "Adds 10 to score", "Adds 1 to score", "Subtracts 1 from score"],
            answer: "Adds 1 to score",
            hint: "++ is the increment operator!",
            explanation: "score++ is a shortcut for score = score + 1 — it adds 1 to the variable."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does Math.round(4.6) return?",
            options: ["4", "5", "4.6", "6"],
            answer: "5",
            hint: ".6 rounds UP to the next whole number!",
            explanation: "Math.round rounds to the nearest whole number. 4.6 rounds up to 5."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What does Math.max(3, 8, 1) return?",
            options: ["1", "3", "8", "12"],
            answer: "8",
            hint: "max = the biggest number!",
            explanation: "Math.max() returns the largest of the numbers given. The biggest of 3, 8, 1 is 8."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete the shorthand for score = score + 5:",
            code: "score ___ 5;",
            options: ["= score +", "add", "+=", "=+"],
            answer: "+=",
            hint: "+= is the shorthand for adding to a variable!",
            explanation: "score += 5 is the same as score = score + 5. It adds 5 to the current score."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "What is 2 + 3 * 4 equal to?",
            options: ["20", "14", "24", "9"],
            answer: "14",
            hint: "Multiplication happens before addition!",
            explanation: "Following order of operations: 3 * 4 = 12 first, then 2 + 12 = 14."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Math.floor(7.9) returns?",
            options: ["8", "7", "7.9", "9"],
            answer: "7",
            hint: "floor = round DOWN!",
            explanation: "Math.floor always rounds DOWN to the nearest whole number. 7.9 becomes 7."
          },
          {
            id: 8,
            type: "true-false",
            question: "Math.random() generates a random number between 0 and 1.",
            options: ["True", "False"],
            answer: "True",
            hint: "It's between 0 (inclusive) and 1 (exclusive)!",
            explanation: "Math.random() returns a random decimal number between 0 and 1, like 0.374 or 0.891."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What does (2 + 3) * 4 equal?",
            options: ["14", "20", "9", "24"],
            answer: "20",
            hint: "Brackets go first!",
            explanation: "Brackets first: (2 + 3) = 5, then 5 * 4 = 20."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "let x = 10; x -= 3; What is x?",
            options: ["13", "10", "7", "3"],
            answer: "7",
            hint: "-= subtracts!",
            explanation: "x -= 3 means x = x - 3 = 10 - 3 = 7."
          }
        ]
      },
      {
        dayId: 4,
        title: "Getting User Input",
        emoji: "⌨️",
        explanation: `# Getting User Input: Talking to Your Program! ⌨️

Programs become more fun when they can ask YOU questions!

## prompt() — Ask the User
\`\`\`javascript
let name = prompt("What is your name?");
alert("Hello, " + name + "!");
\`\`\`

This pops up a box asking for the user's name, then greets them!

## Getting Numbers from Input
\`\`\`javascript
let ageText = prompt("How old are you?");
let age = Number(ageText);  // convert text to number
\`\`\`

All input from prompt() is text (a string). If you need a number, convert it with \`Number()\`.

## confirm() — Yes or No Questions
\`\`\`javascript
let answer = confirm("Do you like coding?");
// answer is true (OK) or false (Cancel)

if (answer) {
  alert("Great! Coding is awesome!");
} else {
  alert("You will after this course!");
}
\`\`\`

## Getting Values from HTML Forms
\`\`\`html
<input id="nameInput" type="text" placeholder="Enter your name">
<button onclick="greet()">Greet Me!</button>

<script>
function greet() {
  let name = document.getElementById("nameInput").value;
  alert("Hello, " + name + "!");
}
</script>
\`\`\`

## Reading from the DOM
\`\`\`javascript
// Get an element
let element = document.getElementById("myId");

// Read its text
let text = element.innerText;

// Read an input's value
let input = document.getElementById("myInput").value;
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does prompt() do?",
            options: ["Shows a message", "Asks the user to type something", "Creates a button", "Changes colors"],
            answer: "Asks the user to type something",
            hint: "prompt = ask a question!",
            explanation: "prompt() shows a dialog box where the user can type a response."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What type does prompt() always return?",
            options: ["Number", "Boolean", "String (text)", "Array"],
            answer: "String (text)",
            hint: "Everything typed in is treated as text!",
            explanation: "prompt() always returns a string, even if the user typed a number. Convert with Number() if needed."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does confirm() return when the user clicks OK?",
            options: ["A string", "true", "false", "null"],
            answer: "true",
            hint: "OK = yes = true!",
            explanation: "confirm() returns true if the user clicks OK, and false if they click Cancel."
          },
          {
            id: 4,
            type: "code-complete",
            question: "Complete the code to convert text to a number:",
            code: "let age = ___(ageText);",
            options: ["parseInt only", "String", "Number", "Convert"],
            answer: "Number",
            hint: "Number() converts to a number!",
            explanation: "Number(ageText) converts the string 'ageText' to a number so you can do math with it."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "How do you get the value from an HTML input element?",
            options: ["element.text", "element.input", "element.value", "element.content"],
            answer: "element.value",
            hint: "The .value property holds what was typed!",
            explanation: "The .value property of an input element contains the text the user typed in."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "What does document.getElementById('box') do?",
            options: ["Creates a new element", "Finds the element with id='box'", "Deletes an element", "Changes the color"],
            answer: "Finds the element with id='box'",
            hint: "getElementById = get by ID!",
            explanation: "document.getElementById() finds and returns the HTML element that has the matching id."
          },
          {
            id: 7,
            type: "true-false",
            question: "You need to use Number() to do math with values from prompt().",
            options: ["True", "False"],
            answer: "True",
            hint: "prompt always gives you a string!",
            explanation: "Yes! prompt() gives text. If you want to do math, convert it: Number(prompt('Your age?'))"
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "confirm('Are you sure?') — what happens when the user clicks Cancel?",
            options: ["Returns true", "Returns false", "Returns 'Cancel'", "Returns null"],
            answer: "Returns false",
            hint: "Cancel = No = false!",
            explanation: "confirm() returns false when the user clicks Cancel — it means 'no' or 'I disagree'."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "element.innerText = 'Hello'; does what?",
            options: ["Reads the text", "Changes the element's text to 'Hello'", "Creates an element", "Deletes the element"],
            answer: "Changes the element's text to 'Hello'",
            hint: "Setting .innerText changes the text!",
            explanation: "Setting innerText changes the visible text content of an HTML element."
          },
          {
            id: 10,
            type: "true-false",
            question: "prompt() can be saved into a variable with let answer = prompt('...');",
            options: ["True", "False"],
            answer: "True",
            hint: "prompt() returns a value you can save!",
            explanation: "Yes! The user's input from prompt() is returned and can be stored in a variable."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 6 Review!",
        emoji: "⚡",
        explanation: `# Week 6 Review: JavaScript Starter! ⚡

You've taken your first steps into JavaScript — the language that powers the web!

## Day 1: What is JavaScript? ⚡
- JavaScript = the behavior layer of the web
- Goes in <script> tags
- alert() shows pop-ups
- console.log() prints to developer console

## Day 2: Variables 📦
- let = variable that can change
- const = variable that stays the same
- String: "text", Number: 42, Boolean: true/false

## Day 3: Math 🔢
- +, -, *, /, % (remainder)
- score++ (add 1), score-- (subtract 1)
- score += 5 (add 5)
- Math.round(), Math.floor(), Math.max(), Math.random()

## Day 4: User Input ⌨️
- prompt() — ask user to type
- confirm() — ask yes/no
- Number() — convert text to number
- document.getElementById('id').value — read form input

## Real JavaScript Example
\`\`\`javascript
let playerName = prompt("What is your name?");
let score = 0;

score += 10;
score += 5;
score++;

console.log(\`\${playerName} scored \${score} points!\`);
alert(\`Great job, \${playerName}! Your score is \${score}.\`);
\`\`\`

**You're writing real JavaScript! 🎉**`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Which HTML tag holds JavaScript code?",
            options: ["<js>", "<code>", "<script>", "<program>"],
            answer: "<script>",
            hint: "script tag = JavaScript!",
            explanation: "JavaScript code goes inside <script> tags in HTML."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which keyword creates a variable that can change later?",
            options: ["const", "let", "fixed", "static"],
            answer: "let",
            hint: "let = let it change!",
            explanation: "'let' creates a changeable variable. 'const' cannot be reassigned."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does 15 % 4 equal?",
            options: ["3", "1", "3.75", "4"],
            answer: "3",
            hint: "15 ÷ 4 = 3 remainder 3!",
            explanation: "15 ÷ 4 = 3 with remainder 3, so 15 % 4 = 3."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What does prompt() do?",
            options: ["Shows a message", "Asks user to type input", "Does math", "Creates a loop"],
            answer: "Asks user to type input",
            hint: "prompt = ask a question!",
            explanation: "prompt() shows a dialog box where the user can type a response."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete to print a message to the console:",
            code: "___.log('Hello!');",
            options: ["window", "alert", "console", "print"],
            answer: "console",
            hint: "console.log is the print command!",
            explanation: "console.log() prints messages to the browser's developer console."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "let x = 8; x--; What is x now?",
            options: ["9", "8", "7", "0"],
            answer: "7",
            hint: "-- subtracts 1!",
            explanation: "x-- is the same as x = x - 1, so 8 - 1 = 7."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Math.floor(9.99) returns?",
            options: ["10", "9", "9.9", "9.99"],
            answer: "9",
            hint: "floor always rounds DOWN!",
            explanation: "Math.floor rounds down to the nearest whole number. 9.99 floors to 9."
          },
          {
            id: 8,
            type: "true-false",
            question: "confirm() returns true when the user clicks OK.",
            options: ["True", "False"],
            answer: "True",
            hint: "OK = yes = true!",
            explanation: "confirm() returns true for OK and false for Cancel."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "To use a number from prompt(), you need to:",
            options: ["Use it directly", "Wrap it with Number()", "Use parseInt() only", "Both Number() and parseInt() work"],
            answer: "Both Number() and parseInt() work",
            hint: "Both convert text to numbers!",
            explanation: "Number() converts to any number, parseInt() converts to a whole number. Both work!"
          },
          {
            id: 10,
            type: "true-false",
            question: "let greeting = 'Hello ' + 'World'; stores 'Hello World' in greeting.",
            options: ["True", "False"],
            answer: "True",
            hint: "+ joins strings!",
            explanation: "Yes! 'Hello ' + 'World' concatenates the two strings into 'Hello World'."
          }
        ]
      }
    ]
  }
];
