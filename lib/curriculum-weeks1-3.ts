import { Week } from './types';

export const weeks1to3: Week[] = [
  {
    weekId: 1,
    title: "What is Coding?",
    emoji: "🚀",
    color: "from-purple-400 to-pink-400",
    description: "Learn what coding is and how computers think!",
    days: [
      {
        dayId: 1,
        title: "Computers and Instructions",
        emoji: "💻",
        explanation: `# What is a Computer Program? 🖥️

A **computer program** is a list of instructions that tells a computer what to do!

Think about when you make a peanut butter sandwich. You follow steps:
1. Get two slices of bread
2. Open the peanut butter jar
3. Spread peanut butter on one slice
4. Put the two slices together

Computers need instructions just like that! When we write those instructions for a computer, we call it **coding** or **programming**.

## Why Do We Code?
- To make games 🎮
- To build websites 🌐
- To create apps on phones 📱
- To make robots move 🤖

## Coders are like chefs!
A chef follows a recipe. A coder writes a recipe for the computer. The computer follows it perfectly every time!

**Remember:** Computers do EXACTLY what you tell them — not more, not less. So we have to be very careful with our instructions!`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is a computer program?",
            options: ["A type of game", "A list of instructions for a computer", "A special keyboard", "A computer screen"],
            answer: "A list of instructions for a computer",
            hint: "Think about what a recipe does for a chef!",
            explanation: "A computer program is a list of instructions that tells the computer exactly what to do, step by step."
          },
          {
            id: 2,
            type: "true-false",
            question: "Computers can guess what you want them to do even if you don't tell them.",
            options: ["True", "False"],
            answer: "False",
            hint: "Think about whether a recipe can cook itself!",
            explanation: "Computers only do exactly what they are told. They cannot guess or think on their own."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Writing instructions for a computer is called?",
            options: ["Drawing", "Singing", "Coding", "Dancing"],
            answer: "Coding",
            hint: "This is what we are learning to do!",
            explanation: "Writing instructions for a computer is called coding or programming."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Which of these is something you can make with coding?",
            options: ["A sandwich", "A video game", "A painting", "A shirt"],
            answer: "A video game",
            hint: "Think about things on a computer or phone!",
            explanation: "You can make video games, apps, websites and much more with coding!"
          },
          {
            id: 5,
            type: "true-false",
            question: "A coder is like a chef who writes recipes for computers.",
            options: ["True", "False"],
            answer: "True",
            hint: "What does a chef do with a recipe?",
            explanation: "Just like a chef follows a recipe, a computer follows the instructions (program) a coder writes."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "What happens if you give a computer the wrong instruction?",
            options: ["Nothing happens", "The computer fixes it", "The computer does the wrong thing", "The computer turns off"],
            answer: "The computer does the wrong thing",
            hint: "Computers do EXACTLY what you tell them!",
            explanation: "Computers follow instructions exactly. If you give a wrong instruction, the computer will do the wrong thing."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Which order is correct for making a sandwich?",
            options: ["Eat it, then make it", "Get bread, spread butter, put together", "Put together first, then get bread", "It doesn't matter"],
            answer: "Get bread, spread butter, put together",
            hint: "You need the bread before you can spread anything!",
            explanation: "Instructions must be in the right order. You can't spread butter without bread first — just like in coding!"
          },
          {
            id: 8,
            type: "true-false",
            question: "You need to be very good at math to start learning to code.",
            options: ["True", "False"],
            answer: "False",
            hint: "Anyone can learn to code!",
            explanation: "Anyone can learn to code! You just need curiosity and practice. Math helps later, but beginners don't need it."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What do we call the person who writes computer programs?",
            options: ["A painter", "A programmer or coder", "A driver", "A builder"],
            answer: "A programmer or coder",
            hint: "They write instructions for computers!",
            explanation: "A person who writes computer programs is called a programmer or a coder."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Apps on your phone were made by?",
            options: ["Factories", "Coders and programmers", "Robots that think alone", "Magic"],
            answer: "Coders and programmers",
            hint: "Someone had to write the instructions!",
            explanation: "Every app on your phone was built by coders who wrote thousands of instructions for your phone to follow."
          }
        ]
      },
      {
        dayId: 2,
        title: "Algorithms — Step by Step!",
        emoji: "📋",
        explanation: `# Algorithms: The Secret Recipe of Coding 📋

An **algorithm** is just a fancy word for a set of step-by-step instructions to solve a problem!

## Everyday Algorithms
You already use algorithms every day without knowing it!

**Getting ready for school:**
1. Wake up
2. Brush teeth
3. Eat breakfast
4. Put on clothes
5. Pack your bag
6. Go to school

That's an algorithm! ✅

## Rules for a Good Algorithm
A good algorithm must:
- Have a **clear start** 🟢
- Have steps in the **right order** 📝
- Have a **clear end** 🔴
- Give the **right answer** ✅

## Example: Finding the biggest number
If someone gives you three numbers: 5, 9, 3 — how do you find the biggest?

**Algorithm:**
1. Look at the first number (5)
2. Compare it to the next number (9)
3. 9 is bigger, so remember 9
4. Compare 9 to the last number (3)
5. 9 is still bigger
6. The answer is 9! 🎉

Algorithms are how computers solve ALL problems!`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is an algorithm?",
            options: ["A type of computer", "Step-by-step instructions to solve a problem", "A math formula", "A computer screen"],
            answer: "Step-by-step instructions to solve a problem",
            hint: "It's like a recipe for solving problems!",
            explanation: "An algorithm is a set of step-by-step instructions that solves a problem or completes a task."
          },
          {
            id: 2,
            type: "true-false",
            question: "The order of steps in an algorithm doesn't matter.",
            options: ["True", "False"],
            answer: "False",
            hint: "Can you put on shoes before socks?",
            explanation: "Order matters a lot! If steps are in the wrong order, the algorithm won't work correctly."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Which of these is an algorithm?",
            options: ["A random drawing", "Steps to brush your teeth", "A favorite song", "A sunny day"],
            answer: "Steps to brush your teeth",
            hint: "An algorithm has clear steps!",
            explanation: "Brushing teeth has clear steps in order (get brush, add toothpaste, brush, rinse) — that's an algorithm!"
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What must every algorithm have?",
            options: ["A computer", "A clear start and a clear end", "At least 100 steps", "Numbers"],
            answer: "A clear start and a clear end",
            hint: "Think about what makes a recipe complete!",
            explanation: "Every algorithm needs a clear beginning where it starts and a clear ending where it finishes."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "You want to make toast. What is the FIRST step?",
            options: ["Eat the toast", "Put bread in toaster", "Butter the toast", "Take out the toast"],
            answer: "Put bread in toaster",
            hint: "What do you need to do before anything else?",
            explanation: "You must put the bread in the toaster first! You can't butter toast that isn't made yet."
          },
          {
            id: 6,
            type: "true-false",
            question: "Algorithms are only used by computers.",
            options: ["True", "False"],
            answer: "False",
            hint: "Do YOU ever follow step-by-step instructions?",
            explanation: "Algorithms are used by people every day! Recipes, instructions for toys, and directions are all algorithms."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "An algorithm for adding 2 + 3 would end with?",
            options: ["The number 1", "The number 5", "The number 23", "No answer"],
            answer: "The number 5",
            hint: "2 + 3 = ?",
            explanation: "A correct algorithm for adding 2 + 3 produces the answer 5."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "What happens if you skip a step in an algorithm?",
            options: ["Everything is fine", "The result might be wrong or broken", "It runs faster", "The computer fixes it"],
            answer: "The result might be wrong or broken",
            hint: "What if you forgot to add flour to a cake recipe?",
            explanation: "Skipping steps in an algorithm can cause the wrong result — just like forgetting flour makes a bad cake!"
          },
          {
            id: 9,
            type: "true-false",
            question: "Getting dressed in the morning is an algorithm.",
            options: ["True", "False"],
            answer: "True",
            hint: "Does getting dressed have steps in order?",
            explanation: "Yes! Getting dressed has steps (underwear first, then clothes, then shoes) — that's an algorithm."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Which word means the same thing as algorithm?",
            options: ["A guess", "Step-by-step instructions", "A computer language", "A drawing"],
            answer: "Step-by-step instructions",
            hint: "Think about what an algorithm does!",
            explanation: "An algorithm is a set of step-by-step instructions — it's the plan for solving a problem."
          }
        ]
      },
      {
        dayId: 3,
        title: "Sequences",
        emoji: "🔢",
        explanation: `# Sequences: Order Matters! 🔢

A **sequence** is doing things in a specific order, one after another.

In coding, your computer reads your instructions one by one, from top to bottom, in order. This is called **executing a sequence**.

## Think About Dancing! 💃
If someone teaches you a dance:
1. Step left
2. Step right
3. Clap hands
4. Turn around

If you do step 3 before step 1, the dance looks wrong! **Order matters.**

## Sequences in Code
When a computer runs a program, it follows each instruction in order:

\`\`\`
Instruction 1 → runs first
Instruction 2 → runs second
Instruction 3 → runs third
\`\`\`

## Example: Drawing a House 🏠
\`\`\`
1. Draw a square (the walls)
2. Draw a triangle on top (the roof)
3. Draw a rectangle at the bottom (the door)
4. Draw small squares on the sides (windows)
\`\`\`

If you drew the door before the square, the house would look broken!

## Key Points
- Sequences run **top to bottom**
- **Every step** matters
- Changing the order **changes the result**
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is a sequence in coding?",
            options: ["A type of game", "Instructions in a specific order", "A computer screen", "A colorful picture"],
            answer: "Instructions in a specific order",
            hint: "Think about steps in a dance!",
            explanation: "A sequence is a set of instructions executed one after another in a specific order."
          },
          {
            id: 2,
            type: "true-false",
            question: "A computer reads instructions from bottom to top.",
            options: ["True", "False"],
            answer: "False",
            hint: "How do you read a book — top to bottom or bottom to top?",
            explanation: "Computers read instructions from top to bottom, just like we read a book."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "In a sequence, which instruction runs first?",
            options: ["The last one", "The middle one", "The first one at the top", "A random one"],
            answer: "The first one at the top",
            hint: "Sequences go top to bottom!",
            explanation: "In a sequence, the computer starts at the top and runs each instruction in order going down."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "To draw a house correctly, you should draw the walls...",
            options: ["After the roof", "Before the roof", "At the same time as the roof", "It doesn't matter"],
            answer: "Before the roof",
            hint: "A roof needs something to sit on!",
            explanation: "You draw the walls first because the roof needs to be placed on top of the walls."
          },
          {
            id: 5,
            type: "true-false",
            question: "Changing the order of steps in a sequence can change the result.",
            options: ["True", "False"],
            answer: "True",
            hint: "What if you put your shoes on before your socks?",
            explanation: "Yes! Changing the order changes the result. Shoes before socks feels very wrong!"
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "What word describes running instructions one after another?",
            options: ["Jumping", "Executing", "Sleeping", "Drawing"],
            answer: "Executing",
            hint: "We say a computer 'executes' its instructions.",
            explanation: "When a computer runs its instructions one by one, we say it is 'executing' the sequence."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Step 1: Pour milk. Step 2: Add cereal. Step 3: Eat. What is Step 2?",
            options: ["Pour milk", "Eat", "Add cereal", "Get a bowl"],
            answer: "Add cereal",
            hint: "Read the steps in order!",
            explanation: "Step 2 is 'Add cereal'. Reading sequences carefully in order is an important coding skill!"
          },
          {
            id: 8,
            type: "true-false",
            question: "In a sequence, you can skip steps if you feel like it.",
            options: ["True", "False"],
            answer: "False",
            hint: "What happens if you skip a step in a recipe?",
            explanation: "You shouldn't skip steps. Each step in a sequence is needed for the correct result."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Which sequence correctly makes orange juice?",
            options: ["Drink, then squeeze oranges", "Squeeze oranges, then drink", "Buy juice, squeeze, drink", "It doesn't matter"],
            answer: "Squeeze oranges, then drink",
            hint: "You need the juice before you can drink it!",
            explanation: "You must squeeze the oranges first to get the juice, then you can drink it."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "A computer program that runs 5 instructions in order is an example of a?",
            options: ["Loop", "Sequence", "Game", "Drawing"],
            answer: "Sequence",
            hint: "Instructions running one after another = ?",
            explanation: "When instructions run one after another in order, that's a sequence — a core concept in coding!"
          }
        ]
      },
      {
        dayId: 4,
        title: "Patterns",
        emoji: "🔄",
        explanation: `# Patterns: Finding Repetition! 🔄

A **pattern** is something that repeats in a predictable way.

Patterns are everywhere:
- 🔴🔵🔴🔵🔴🔵 (red, blue, red, blue...)
- 1, 2, 3, 1, 2, 3, 1, 2, 3...
- Monday, Tuesday, Wednesday, Monday, Tuesday...

## Why Patterns Matter in Coding
Coders LOVE patterns! When something repeats, we don't have to write the same instructions over and over. We use a **loop** (which you'll learn later!) to repeat the pattern.

## Spotting Patterns
Look at this pattern: 🌟⭐🌟⭐🌟⭐
What comes next? 🌟 !

Or this one: 2, 4, 6, 8, ___
Each number goes up by 2, so next is 10!

## Pattern Example in Code
Imagine a program that draws colored stripes:
\`\`\`
Draw red stripe
Draw blue stripe
Draw red stripe
Draw blue stripe
Draw red stripe
Draw blue stripe
\`\`\`

A smart coder sees the pattern (red, blue) and uses a loop to repeat it instead of writing it 6 times!

## Patterns Help Us
- Solve problems faster 🚀
- Write shorter code 📝
- Find mistakes more easily 🔍
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is a pattern?",
            options: ["Something random", "Something that repeats in a predictable way", "A type of computer", "A drawing tool"],
            answer: "Something that repeats in a predictable way",
            hint: "Think of stripes on a zebra!",
            explanation: "A pattern is something that repeats predictably, like stripes, numbers, or sequences."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What comes next? 🔴🔵🔴🔵🔴___",
            options: ["🔴", "🔵", "🟡", "🟢"],
            answer: "🔵",
            hint: "The pattern is red, blue, red, blue...",
            explanation: "The pattern alternates red and blue. After red comes blue!"
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What comes next? 1, 3, 5, 7, ___",
            options: ["8", "9", "10", "6"],
            answer: "9",
            hint: "Each number goes up by 2!",
            explanation: "The pattern adds 2 each time: 1, 3, 5, 7, 9. These are odd numbers!"
          },
          {
            id: 4,
            type: "true-false",
            question: "Patterns help coders write shorter programs.",
            options: ["True", "False"],
            answer: "True",
            hint: "If something repeats, do you need to write it many times?",
            explanation: "Yes! When coders spot patterns, they use loops to repeat them instead of writing the same code many times."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "What comes next? A, B, C, A, B, C, A, ___",
            options: ["A", "B", "C", "D"],
            answer: "B",
            hint: "The pattern is A, B, C repeating!",
            explanation: "The pattern repeats: A, B, C. After A comes B."
          },
          {
            id: 6,
            type: "true-false",
            question: "Patterns only appear in numbers, not in colors or shapes.",
            options: ["True", "False"],
            answer: "False",
            hint: "Think about a striped shirt!",
            explanation: "Patterns appear everywhere — in colors, shapes, numbers, words, and sounds!"
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What comes next? 10, 20, 30, 40, ___",
            options: ["41", "50", "45", "35"],
            answer: "50",
            hint: "Each number goes up by 10!",
            explanation: "The pattern adds 10 each time: 10, 20, 30, 40, 50."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "In coding, what do we use to repeat a pattern?",
            options: ["A pattern tool", "A loop", "A picture", "A keyboard shortcut"],
            answer: "A loop",
            hint: "We'll learn about this soon!",
            explanation: "In coding, loops let us repeat a set of instructions over and over — perfect for patterns!"
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Which of these is a pattern?",
            options: ["Randomly picking colors", "🌙⭐🌙⭐🌙⭐", "Writing your name once", "Drawing a circle"],
            answer: "🌙⭐🌙⭐🌙⭐",
            hint: "Look for something that repeats!",
            explanation: "Moon, star, moon, star — this repeats predictably, making it a pattern!"
          },
          {
            id: 10,
            type: "true-false",
            question: "The days of the week (Mon, Tue, Wed...) are an example of a pattern.",
            options: ["True", "False"],
            answer: "True",
            hint: "Do the days repeat every week?",
            explanation: "Yes! The 7 days repeat every week — that's a pattern with a length of 7."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 1 Review!",
        emoji: "🏆",
        explanation: `# Week 1 Review: You're Amazing! 🏆

You've learned SO much this week! Let's look back at everything:

## Day 1: Computer Programs 💻
- A computer program = instructions for a computer
- Computers do EXACTLY what you tell them
- Coders write the instructions

## Day 2: Algorithms 📋
- An algorithm = step-by-step instructions to solve a problem
- Good algorithms have a clear start, ordered steps, and a clear end
- We use algorithms every day!

## Day 3: Sequences 🔢
- A sequence = instructions in a specific order
- Computers run instructions top to bottom
- Order matters!

## Day 4: Patterns 🔄
- A pattern = something that repeats predictably
- Coders use loops to repeat patterns
- Patterns are everywhere!

## The Big Picture 🌟
All of these ideas work together when you code:
1. You write an **algorithm** (your plan)
2. The algorithm is made of a **sequence** of steps
3. Some steps might repeat in **patterns**
4. All of it becomes a **program** the computer runs!

## You're Ready! 🚀
Next week, we'll start thinking like a computer even more. Great job finishing Week 1!`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is a computer program?",
            options: ["A computer game only", "Instructions that tell a computer what to do", "A type of screen", "A special pencil"],
            answer: "Instructions that tell a computer what to do",
            hint: "It's like a recipe for a computer!",
            explanation: "A computer program is a set of instructions that tells the computer exactly what to do."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What is an algorithm?",
            options: ["A type of game", "A computer screen", "Step-by-step instructions to solve a problem", "A random guess"],
            answer: "Step-by-step instructions to solve a problem",
            hint: "Algorithms solve problems step by step!",
            explanation: "An algorithm is a step-by-step set of instructions designed to solve a specific problem."
          },
          {
            id: 3,
            type: "true-false",
            question: "Computers read instructions from bottom to top.",
            options: ["True", "False"],
            answer: "False",
            hint: "How do you read a book?",
            explanation: "Computers read instructions from top to bottom, in sequence order."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What comes next in this pattern? ⭐🌙⭐🌙⭐___",
            options: ["⭐", "🌙", "☀️", "🌟"],
            answer: "🌙",
            hint: "Star, moon, star, moon... what comes after star?",
            explanation: "The pattern is star, moon repeating. After star comes moon!"
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "What do we call instructions that run one after another in order?",
            options: ["A pattern", "A sequence", "A loop", "A game"],
            answer: "A sequence",
            hint: "It's the word for steps in order!",
            explanation: "A sequence is instructions that run one after another in a specific order."
          },
          {
            id: 6,
            type: "true-false",
            question: "Patterns in coding can be repeated using loops.",
            options: ["True", "False"],
            answer: "True",
            hint: "Loops let us repeat things!",
            explanation: "Loops in coding let us repeat patterns without writing the same code many times."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What comes next? 5, 10, 15, 20, ___",
            options: ["21", "22", "25", "30"],
            answer: "25",
            hint: "Each number goes up by 5!",
            explanation: "The pattern adds 5 each time: 5, 10, 15, 20, 25."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "The person who writes computer programs is called a?",
            options: ["Doctor", "Coder or programmer", "Chef", "Teacher"],
            answer: "Coder or programmer",
            hint: "That's what YOU are learning to be!",
            explanation: "Someone who writes computer programs is called a coder or programmer."
          },
          {
            id: 9,
            type: "true-false",
            question: "If you change the order of steps in an algorithm, the result might change.",
            options: ["True", "False"],
            answer: "True",
            hint: "Can you eat breakfast before waking up?",
            explanation: "Order matters! Changing step order can break an algorithm or give a wrong result."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Which idea helps coders avoid writing the same code many times?",
            options: ["Sequences", "Algorithms", "Patterns and loops", "Computers"],
            answer: "Patterns and loops",
            hint: "What repeats over and over?",
            explanation: "Patterns and loops let coders repeat instructions without writing them out every single time."
          }
        ]
      }
    ]
  },
  {
    weekId: 2,
    title: "Thinking Like a Computer",
    emoji: "🧠",
    color: "from-blue-400 to-cyan-400",
    description: "Learn how computers think and solve problems!",
    days: [
      {
        dayId: 1,
        title: "Breaking Problems Apart",
        emoji: "🧩",
        explanation: `# Breaking Problems Apart: Decomposition! 🧩

**Decomposition** means breaking a big problem into smaller, easier pieces.

When computers (and coders!) face a big problem, they don't try to solve it all at once. They break it into small parts!

## Example: Making a Birthday Cake 🎂
A birthday cake sounds hard to make! But if we break it down:

**Small problem 1:** Make the cake batter
- Mix flour, sugar, eggs, butter

**Small problem 2:** Bake the cake
- Put in oven, wait 30 minutes

**Small problem 3:** Make the frosting
- Mix butter and sugar

**Small problem 4:** Decorate
- Add frosting and candles

Now each piece is easy! 🎉

## In Coding
Programmers break big programs into smaller **functions** (mini programs). Each function solves one small problem.

For example, a video game might be broken into:
- A function that moves the character
- A function that checks for enemies
- A function that keeps score
- A function that shows the screen

## Why Decomposition?
- Big problems feel scary 😨
- Small problems are manageable 😊
- Easier to find mistakes 🔍
- Other coders can help with different pieces 👥
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does 'decomposition' mean in coding?",
            options: ["Making things colorful", "Breaking big problems into smaller pieces", "Drawing pictures", "Playing games"],
            answer: "Breaking big problems into smaller pieces",
            hint: "Decompose = break apart!",
            explanation: "Decomposition means breaking a big, complex problem into smaller, more manageable pieces."
          },
          {
            id: 2,
            type: "true-false",
            question: "Coders try to solve very big problems all at once without breaking them apart.",
            options: ["True", "False"],
            answer: "False",
            hint: "Is it easier to eat a pizza slice by slice or all at once?",
            explanation: "Good coders break big problems into small pieces first — it makes the work easier and less scary!"
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What are mini programs that solve one small problem called?",
            options: ["Loops", "Sequences", "Functions", "Patterns"],
            answer: "Functions",
            hint: "You'll learn more about these later!",
            explanation: "Functions are mini programs that each solve one specific small problem."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Making a birthday cake can be broken into how many smaller problems?",
            options: ["1", "It can't be broken down", "Many smaller steps", "Exactly 2"],
            answer: "Many smaller steps",
            hint: "Think about batter, baking, frosting, decorating...",
            explanation: "Making a cake can be broken into many steps: batter, baking, frosting, and decorating — all separate problems!"
          },
          {
            id: 5,
            type: "true-false",
            question: "Decomposition makes it easier to find mistakes in a program.",
            options: ["True", "False"],
            answer: "True",
            hint: "If a cake tastes wrong, is it easier to check one step at a time?",
            explanation: "Yes! When each piece is small, it's much easier to find where something went wrong."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "In a video game, which is a good example of one small function?",
            options: ["The entire game", "A function that moves the character", "All the graphics", "Everything at once"],
            answer: "A function that moves the character",
            hint: "One function = one small job!",
            explanation: "A good function does one specific job, like moving the character. It doesn't try to do everything."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Why is decomposition helpful for team projects?",
            options: ["It makes projects longer", "Different people can work on different pieces", "It makes code confusing", "It is not helpful for teams"],
            answer: "Different people can work on different pieces",
            hint: "Can many people work on a big puzzle at the same time?",
            explanation: "When a problem is broken into pieces, team members can work on different parts at the same time!"
          },
          {
            id: 8,
            type: "true-false",
            question: "Decomposition is only used in coding.",
            options: ["True", "False"],
            answer: "False",
            hint: "Do doctors, architects, and teachers break big tasks into steps?",
            explanation: "Decomposition is used everywhere — doctors, architects, teachers, and chefs all break big tasks into smaller steps."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What is the FIRST thing you should do when you face a big coding problem?",
            options: ["Write all the code immediately", "Give up", "Break it into smaller pieces", "Ask for a hint"],
            answer: "Break it into smaller pieces",
            hint: "Decompose first!",
            explanation: "Always start by breaking a big problem into smaller pieces. Then solve each piece one at a time."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Cleaning your whole house can be decomposed into?",
            options: ["One big task", "Cleaning kitchen, bedroom, bathroom separately", "It cannot be decomposed", "Two equal halves only"],
            answer: "Cleaning kitchen, bedroom, bathroom separately",
            hint: "You clean one room at a time!",
            explanation: "Cleaning the house can be broken into smaller tasks: clean the kitchen, then the bedroom, then the bathroom, etc."
          }
        ]
      },
      {
        dayId: 2,
        title: "Yes or No — Decisions!",
        emoji: "🤔",
        explanation: `# Decisions: Yes or No? 🤔

Computers make **decisions** all the time! Every decision is a simple yes or no (true or false).

## The IF Question
Computers ask "IF" questions to make decisions:

**IF** it is raining **THEN** take an umbrella

**IF** you are hungry **THEN** eat a snack

**IF** the traffic light is red **THEN** stop

## True or False
Computers understand two things:
- **TRUE** (yes, correct) ✅
- **FALSE** (no, not correct) ❌

Every question a computer asks has one of these two answers!

## Examples of Computer Decisions
- IF the player touches the enemy → game over!
- IF the score is higher than 100 → show "You Win!"
- IF the button is clicked → play music
- IF the password is correct → let them in

## What Comes After?
After IF there's always a THEN:

\`\`\`
IF (condition is true)
  THEN do something
\`\`\`

Later you'll learn to add ELSE too:

\`\`\`
IF (it is raining)
  THEN take umbrella
ELSE
  leave umbrella at home
\`\`\`

This is called an **if-else** decision!
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What two values do computers use for decisions?",
            options: ["Yes and Maybe", "True and False", "1 and 2", "On and Off and Maybe"],
            answer: "True and False",
            hint: "Computers think in two states!",
            explanation: "Computers use True (yes) and False (no) for every decision they make."
          },
          {
            id: 2,
            type: "true-false",
            question: "The IF statement helps a computer make a decision.",
            options: ["True", "False"],
            answer: "True",
            hint: "IF helps the computer choose what to do!",
            explanation: "The IF statement lets a computer check a condition and decide what to do based on the result."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Complete: IF it is raining THEN ___",
            options: ["Do nothing", "Take an umbrella", "Go swimming", "Sleep"],
            answer: "Take an umbrella",
            hint: "What do you do when it rains?",
            explanation: "IF it is raining, the right action THEN is to take an umbrella!"
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "In a video game: IF player touches fire, THEN ___",
            options: ["Player gets points", "Player loses health", "Game pauses", "Music starts"],
            answer: "Player loses health",
            hint: "Fire hurts in games!",
            explanation: "A common game rule: IF the player touches fire, THEN they lose health."
          },
          {
            id: 5,
            type: "true-false",
            question: "A computer decision can have more than two options (not just true/false).",
            options: ["True", "False"],
            answer: "False",
            hint: "Every question must be answerable with yes or no!",
            explanation: "Every computer decision is based on a true/false question. Complex decisions use combinations of true/false."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "What does ELSE mean in an IF-ELSE decision?",
            options: ["Do the same thing", "Do something different when IF is false", "Stop the program", "Repeat forever"],
            answer: "Do something different when IF is false",
            hint: "ELSE is the 'otherwise' option!",
            explanation: "ELSE provides an alternative action when the IF condition is false — it's the 'otherwise' case."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "IF the light is green THEN ___",
            options: ["Stop", "Go", "Turn around", "Honk"],
            answer: "Go",
            hint: "What does a green traffic light mean?",
            explanation: "Green means go! IF the light is green, THEN you go."
          },
          {
            id: 8,
            type: "true-false",
            question: "Computers can make decisions while a program is running.",
            options: ["True", "False"],
            answer: "True",
            hint: "Think of a game reacting to what you do!",
            explanation: "Yes! Computers constantly make decisions while running — checking conditions and responding to events."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "IF score > 100 THEN show 'You Win!'. If score is 50, what happens?",
            options: ["Shows 'You Win!'", "Nothing or shows something else", "Game crashes", "Score doubles"],
            answer: "Nothing or shows something else",
            hint: "Is 50 greater than 100?",
            explanation: "50 is NOT greater than 100, so the IF condition is false. 'You Win!' does NOT appear."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "What is the correct structure of an IF statement?",
            options: ["THEN condition IF action", "IF condition THEN action", "action IF condition", "THEN IF action"],
            answer: "IF condition THEN action",
            hint: "IF first, THEN second!",
            explanation: "The correct structure is: IF (condition is true) THEN (do the action)."
          }
        ]
      },
      {
        dayId: 3,
        title: "Loops — Repeat Repeat Repeat!",
        emoji: "🔁",
        explanation: `# Loops: Do It Again! 🔁

A **loop** tells the computer to repeat something a number of times (or until something happens).

## Without a Loop (boring!) 😴
If you want to say "Hello" 5 times without a loop:
\`\`\`
Say "Hello"
Say "Hello"
Say "Hello"
Say "Hello"
Say "Hello"
\`\`\`

## With a Loop (smart!) 🚀
\`\`\`
Repeat 5 times:
  Say "Hello"
\`\`\`

Same result, much less writing!

## Types of Loops

### Count Loop (FOR loop)
Repeats a specific number of times:
- "Repeat 10 times: jump"
- "For each student: say their name"

### Condition Loop (WHILE loop)
Repeats WHILE something is true:
- "While hungry: keep eating"
- "While music is playing: keep dancing"

## Real Life Loops
- Brushing teeth: repeat brushing motion many times
- Walking: repeat left-foot, right-foot
- Clapping: repeat clap clap clap

## Important!
A loop that NEVER stops is called an **infinite loop** — that's a bug! 🐛
Always make sure your loop has a way to stop.
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does a loop do in coding?",
            options: ["Stops a program", "Repeats instructions", "Draws pictures", "Makes sound"],
            answer: "Repeats instructions",
            hint: "Loop = repeat!",
            explanation: "A loop tells the computer to repeat a set of instructions a certain number of times or until a condition changes."
          },
          {
            id: 2,
            type: "true-false",
            question: "Using a loop makes code shorter when you need to repeat something.",
            options: ["True", "False"],
            answer: "True",
            hint: "Would you rather write 'Hello' 100 times or use one loop?",
            explanation: "Yes! Instead of writing the same code 100 times, one loop with 100 repetitions does the same job."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "A loop that repeats exactly 5 times is called a?",
            options: ["While loop", "For loop / count loop", "Pattern loop", "Decision loop"],
            answer: "For loop / count loop",
            hint: "It counts a specific number of times!",
            explanation: "A for loop (count loop) repeats a specific, set number of times."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "A loop that repeats WHILE you are hungry is called a?",
            options: ["For loop", "While loop", "Count loop", "Food loop"],
            answer: "While loop",
            hint: "It repeats WHILE a condition is true!",
            explanation: "A while loop repeats as long as a condition remains true — like while you're still hungry."
          },
          {
            id: 5,
            type: "true-false",
            question: "An infinite loop is a loop that never stops — and it's a good thing!",
            options: ["True", "False"],
            answer: "False",
            hint: "What happens if you keep eating and never stop?",
            explanation: "An infinite loop is a BUG — a mistake. Loops must always have a way to stop."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "How many times does 'Repeat 7 times: clap' make you clap?",
            options: ["1", "7", "70", "0"],
            answer: "7",
            hint: "The number tells you how many times!",
            explanation: "'Repeat 7 times' means the action inside happens exactly 7 times."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "Walking (left-foot, right-foot, left-foot...) is an example of?",
            options: ["A sequence that runs once", "A loop", "An algorithm that never repeats", "A decision"],
            answer: "A loop",
            hint: "Do you repeat left-foot, right-foot over and over?",
            explanation: "Walking repeats left-foot, right-foot continuously — that's a loop in real life!"
          },
          {
            id: 8,
            type: "true-false",
            question: "Loops are only useful when you need to repeat exactly 10 times.",
            options: ["True", "False"],
            answer: "False",
            hint: "Can you repeat something until a condition changes?",
            explanation: "Loops can repeat any number of times, or repeat until a condition becomes false — very flexible!"
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "How many times does this run? 'Repeat 3 times: say Yay'",
            options: ["1 time", "2 times", "3 times", "0 times"],
            answer: "3 times",
            hint: "The number says how many!",
            explanation: "'Repeat 3 times' runs the action exactly 3 times — so 'Yay' is said 3 times."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Which of these is a real-life example of a WHILE loop?",
            options: ["Reading one page of a book", "Keep reading WHILE the book is interesting", "Opening a book", "Closing a book"],
            answer: "Keep reading WHILE the book is interesting",
            hint: "WHILE something is true = while loop!",
            explanation: "Continuing to read WHILE the book is interesting is a while loop — it stops when the condition (interesting) becomes false."
          }
        ]
      },
      {
        dayId: 4,
        title: "Variables — Boxes for Information",
        emoji: "📦",
        explanation: `# Variables: Magic Storage Boxes! 📦

A **variable** is like a labeled box that stores information.

## Think About Boxes 📦
Imagine you have boxes in your room:
- A box labeled **"LEGO"** that holds your LEGO bricks
- A box labeled **"BOOKS"** that holds your books
- A box labeled **"TOYS"** that holds your toys

In coding, variables work the same way!

## Variable Examples
\`\`\`
playerName = "Emma"
score = 0
lives = 3
isGameOver = false
\`\`\`

- **playerName** is a box holding the name "Emma"
- **score** is a box holding the number 0
- **lives** is a box holding the number 3
- **isGameOver** is a box holding the value false

## Changing Variables
The value in a variable can change:
\`\`\`
score = 0     (box starts with 0)
score = 10    (now the box holds 10)
score = 50    (now the box holds 50)
\`\`\`

That's why we call them VARIables — the value can VARY (change)!

## Types of Values
Variables can store different types:
- **Numbers:** 5, 100, 3.14
- **Text (strings):** "Hello", "Emma"
- **True/False:** true, false

## Why Variables?
- Remember information while the program runs
- Update scores, names, settings
- Reuse information in many places
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is a variable in coding?",
            options: ["A type of loop", "A labeled box that stores information", "A decision in code", "A pattern that repeats"],
            answer: "A labeled box that stores information",
            hint: "Think of a box with a label on it!",
            explanation: "A variable is like a labeled storage box that holds a piece of information your program needs."
          },
          {
            id: 2,
            type: "true-false",
            question: "The value inside a variable can change while a program runs.",
            options: ["True", "False"],
            answer: "True",
            hint: "That's why it's called a VARIable — it can vary!",
            explanation: "Yes! Variables can change value while the program runs — like a score going from 0 to 10 to 50."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "score = 0, then score = 10. What is the value of score now?",
            options: ["0", "10", "0 and 10", "110"],
            answer: "10",
            hint: "The new value replaces the old one!",
            explanation: "When you assign score = 10, the new value 10 replaces the old value 0 in the box."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "Which of these is a correct variable?",
            options: ["123name = Emma", "playerName = Emma", "= playerName Emma", "Emma playerName"],
            answer: "playerName = Emma",
            hint: "The name comes first, then equals, then the value!",
            explanation: "Variables are written as: name = value. So playerName = Emma is correct."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "What type of value is the text 'Hello'?",
            options: ["A number", "A string (text)", "A loop", "A decision"],
            answer: "A string (text)",
            hint: "Text stored in a variable is called a string!",
            explanation: "Text values stored in variables are called strings. 'Hello' is a string."
          },
          {
            id: 6,
            type: "true-false",
            question: "Variables can only store numbers.",
            options: ["True", "False"],
            answer: "False",
            hint: "Can you store a name in a variable?",
            explanation: "Variables can store numbers, text (strings), and true/false values — and more!"
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "lives = 3. The player dies once. Now lives = ___",
            options: ["3", "4", "2", "0"],
            answer: "2",
            hint: "You lose one life when you die!",
            explanation: "If lives = 3 and the player dies (loses 1 life), lives becomes 3 - 1 = 2."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "Why are they called VARIables?",
            options: ["Because they are very big", "Because their value can VARY (change)", "Because they are colorful", "Because they are fast"],
            answer: "Because their value can VARY (change)",
            hint: "Vary means to change!",
            explanation: "They're called VARIables because the value they store can VARY (change) during the program."
          },
          {
            id: 9,
            type: "true-false",
            question: "isGameOver = false means the game is still going.",
            options: ["True", "False"],
            answer: "True",
            hint: "If isGameOver is false, the game is NOT over!",
            explanation: "If isGameOver = false, that means the game is NOT over yet — it's still going."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Which variable would you use to remember a player's name?",
            options: ["score = 0", "playerName = 'Emma'", "lives = 3", "speed = 5"],
            answer: "playerName = 'Emma'",
            hint: "The name of the variable should match what it stores!",
            explanation: "playerName = 'Emma' is the best choice — the variable name tells us it stores a player's name."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 2 Review!",
        emoji: "🎯",
        explanation: `# Week 2 Review: Computer Thinking! 🎯

Amazing work this week! Here's everything you learned:

## Day 1: Decomposition 🧩
- Break BIG problems into SMALL pieces
- Small pieces are easier to solve
- In coding, small pieces become functions

## Day 2: Decisions 🤔
- Computers use IF...THEN...ELSE
- Every decision is TRUE or FALSE
- Decisions let programs react to what happens

## Day 3: Loops 🔁
- Loops REPEAT instructions
- FOR loops repeat a set number of times
- WHILE loops repeat until a condition changes
- Infinite loops (never stop) = bugs!

## Day 4: Variables 📦
- Variables store information like labeled boxes
- Values can change while the program runs
- Types include numbers, text (strings), and true/false

## Putting It All Together 🌟
A real program uses ALL of these:

\`\`\`
score = 0          (variable)
lives = 3          (variable)

Repeat 10 times:   (loop)
  Move player      (sequence)
  IF hits enemy:   (decision)
    lives = lives - 1
\`\`\`

You're thinking like a computer now! 🖥️`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Breaking a big problem into small pieces is called?",
            options: ["Looping", "Decomposition", "Variables", "Sequencing"],
            answer: "Decomposition",
            hint: "Decompose = break apart!",
            explanation: "Decomposition is the process of breaking a complex problem into smaller, manageable pieces."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does IF score > 10 THEN show star mean?",
            options: ["Always show a star", "Show a star only when score is greater than 10", "Show a star when score is 0", "Never show a star"],
            answer: "Show a star only when score is greater than 10",
            hint: "The IF condition must be true first!",
            explanation: "The star only appears when the condition (score > 10) is true."
          },
          {
            id: 3,
            type: "true-false",
            question: "A WHILE loop keeps repeating as long as its condition is true.",
            options: ["True", "False"],
            answer: "True",
            hint: "WHILE = keep going as long as...",
            explanation: "A while loop checks its condition before each repeat. It keeps going while the condition is true."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "score = 5, then score = score + 3. What is score now?",
            options: ["5", "3", "8", "53"],
            answer: "8",
            hint: "5 + 3 = ?",
            explanation: "score starts at 5, then we add 3 to it: 5 + 3 = 8. So score is now 8."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "Which is a FOR loop?",
            options: ["While hungry: eat", "Repeat 5 times: jump", "IF raining THEN umbrella", "name = Emma"],
            answer: "Repeat 5 times: jump",
            hint: "A FOR loop repeats a specific number of times!",
            explanation: "'Repeat 5 times' is a for/count loop — it repeats exactly 5 times."
          },
          {
            id: 6,
            type: "true-false",
            question: "An infinite loop is a useful feature in coding.",
            options: ["True", "False"],
            answer: "False",
            hint: "What happens to a program that never stops?",
            explanation: "An infinite loop is a bug — a program that never stops usually crashes or freezes."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What can a variable store?",
            options: ["Only numbers", "Only text", "Numbers, text, and true/false", "Only true/false"],
            answer: "Numbers, text, and true/false",
            hint: "Variables are flexible boxes!",
            explanation: "Variables can hold numbers (5), text strings ('Hello'), and boolean values (true/false)."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "In a game, what variable would track how many lives you have?",
            options: ["playerName = 'Emma'", "lives = 3", "isRaining = true", "color = 'blue'"],
            answer: "lives = 3",
            hint: "The variable name should match what it stores!",
            explanation: "lives = 3 is perfect — it stores the number of lives the player has remaining."
          },
          {
            id: 9,
            type: "true-false",
            question: "Functions in coding are small pieces that solve one specific problem.",
            options: ["True", "False"],
            answer: "True",
            hint: "Functions come from decomposition!",
            explanation: "Functions are small, focused pieces of code that each solve one specific problem."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "What is the right IF-ELSE structure?",
            options: ["ELSE condition IF action", "IF condition THEN action ELSE other action", "THEN IF ELSE", "action condition IF"],
            answer: "IF condition THEN action ELSE other action",
            hint: "IF first, THEN the action, ELSE the alternative!",
            explanation: "The correct structure: IF (condition) THEN (do this) ELSE (do that instead)."
          }
        ]
      }
    ]
  },
  {
    weekId: 3,
    title: "Hello HTML!",
    emoji: "🌐",
    color: "from-orange-400 to-yellow-400",
    description: "Start building real web pages with HTML!",
    days: [
      {
        dayId: 1,
        title: "What is HTML?",
        emoji: "📄",
        explanation: `# HTML: The Building Blocks of Websites! 🌐

**HTML** stands for **HyperText Markup Language**.

It's the language used to create the structure of every webpage you see!

## What Does HTML Do?
HTML tells the browser:
- What text to show
- Where headings and paragraphs go
- How to show images and links
- The structure of the page

## HTML Tags
HTML uses **tags** to mark up content. Tags look like this:

\`\`\`html
<tagname>Content goes here</tagname>
\`\`\`

A tag has:
- An **opening tag**: \`<tagname>\`
- **Content** in the middle
- A **closing tag**: \`</tagname>\` (notice the slash!)

## Your First HTML
\`\`\`html
<p>Hello, my name is Emma!</p>
\`\`\`

The \`<p>\` tag means **paragraph**. The browser shows the text inside as a paragraph.

## The Basic HTML Page
\`\`\`html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
\`\`\`

- \`<html>\` — the whole page
- \`<head>\` — invisible info (like the title in the tab)
- \`<body>\` — everything you SEE on the page
- \`<p>\` — a paragraph of text
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does HTML stand for?",
            options: ["Happy Text Making Language", "HyperText Markup Language", "High Tech Modern Language", "Home Text Making Language"],
            answer: "HyperText Markup Language",
            hint: "H-T-M-L: HyperText Markup Language!",
            explanation: "HTML stands for HyperText Markup Language — it's the language used to build webpages."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does an HTML closing tag look like?",
            options: ["<p>", "</p>", "(p)", "[/p]"],
            answer: "</p>",
            hint: "Closing tags have a forward slash inside!",
            explanation: "A closing tag has a forward slash before the tag name: </p>. It marks where the element ends."
          },
          {
            id: 3,
            type: "true-false",
            question: "Every HTML opening tag needs a matching closing tag.",
            options: ["True", "False"],
            answer: "True",
            hint: "Tags come in pairs: open and close!",
            explanation: "Most HTML tags come in pairs: an opening tag <p> and a closing tag </p>."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What does the <p> tag do?",
            options: ["Makes text bold", "Creates a paragraph", "Shows an image", "Makes a heading"],
            answer: "Creates a paragraph",
            hint: "P stands for Paragraph!",
            explanation: "The <p> tag creates a paragraph of text on the page."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete the HTML to show 'Hello World' as a paragraph:",
            code: "<___>Hello World</___>",
            options: ["h1", "p", "body", "html"],
            answer: "p",
            hint: "P is for paragraph!",
            explanation: "<p>Hello World</p> creates a paragraph with the text 'Hello World'."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "Which part of an HTML page holds everything you SEE?",
            options: ["<head>", "<title>", "<body>", "<html>"],
            answer: "<body>",
            hint: "The body holds the visible content!",
            explanation: "Everything visible on a webpage goes inside the <body> tag."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "What does the <title> tag control?",
            options: ["The main heading on the page", "The text shown in the browser tab", "The background color", "The font size"],
            answer: "The text shown in the browser tab",
            hint: "Look at the tab at the top of your browser!",
            explanation: "The <title> tag sets the text that appears in the browser's tab at the top."
          },
          {
            id: 8,
            type: "true-false",
            question: "HTML is a programming language like JavaScript.",
            options: ["True", "False"],
            answer: "False",
            hint: "HTML marks up structure, it doesn't give instructions!",
            explanation: "HTML is a markup language, not a programming language. It structures content but doesn't give logic instructions."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What is the OUTERMOST tag that wraps everything on an HTML page?",
            options: ["<body>", "<head>", "<p>", "<html>"],
            answer: "<html>",
            hint: "The whole page is wrapped in one big tag!",
            explanation: "The <html> tag wraps the entire page — everything else goes inside it."
          },
          {
            id: 10,
            type: "code-complete",
            question: "What tag goes around invisible info like the title?",
            code: "<<___>>\n  <title>My Page</title>\n</<___>>",
            options: ["body", "head", "p", "html"],
            answer: "head",
            hint: "It's like the head — you can't see thoughts!",
            explanation: "The <head> tag holds invisible page information like the title and links to stylesheets."
          }
        ]
      },
      {
        dayId: 2,
        title: "Headings and Text",
        emoji: "✏️",
        explanation: `# Headings and Paragraphs: Organizing Text! ✏️

HTML has special tags for organizing text on a page.

## Heading Tags
Headings are like titles! HTML has 6 sizes:

\`\`\`html
<h1>Biggest Heading</h1>
<h2>Second Biggest</h2>
<h3>Third Biggest</h3>
<h4>Fourth</h4>
<h5>Fifth</h5>
<h6>Smallest Heading</h6>
\`\`\`

**h1** is the most important heading (biggest)
**h6** is the least important (smallest)

## Paragraph Tag
\`\`\`html
<p>This is a paragraph of text. It can be long or short.</p>
\`\`\`

## Bold and Italic
Make text **bold** with \`<strong>\`:
\`\`\`html
<strong>This is bold!</strong>
\`\`\`

Make text *italic* with \`<em>\`:
\`\`\`html
<em>This is italic!</em>
\`\`\`

## Line Break
Start a new line with \`<br>\` (no closing tag needed!):
\`\`\`html
<p>Line one<br>Line two</p>
\`\`\`

## Example: A Mini About-Me Page
\`\`\`html
<h1>About Me</h1>
<p>My name is <strong>Emma</strong>.</p>
<p>I am <em>7 years old</em>.</p>
<p>I love coding!</p>
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "Which heading tag creates the BIGGEST heading?",
            options: ["<h6>", "<h3>", "<h1>", "<h2>"],
            answer: "<h1>",
            hint: "Lower number = bigger heading!",
            explanation: "<h1> creates the largest, most important heading. Numbers go from h1 (biggest) to h6 (smallest)."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "Which heading tag creates the SMALLEST heading?",
            options: ["<h1>", "<h6>", "<h3>", "<h4>"],
            answer: "<h6>",
            hint: "Higher number = smaller heading!",
            explanation: "<h6> creates the smallest heading — it has the highest number."
          },
          {
            id: 3,
            type: "code-complete",
            question: "How do you make the text 'Hello' bold?",
            code: "<<___>>Hello</<___>>",
            options: ["bold", "strong", "b", "big"],
            answer: "strong",
            hint: "Strong = bold in HTML!",
            explanation: "<strong>Hello</strong> makes the text bold. The <strong> tag is used for important/bold text."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What does the <em> tag do?",
            options: ["Makes text bigger", "Makes text italic", "Makes text bold", "Deletes text"],
            answer: "Makes text italic",
            hint: "em = emphasis = italic!",
            explanation: "The <em> tag makes text italic (emphasized). Em stands for emphasis."
          },
          {
            id: 5,
            type: "true-false",
            question: "The <br> tag needs a closing tag like </br>.",
            options: ["True", "False"],
            answer: "False",
            hint: "<br> stands alone — it just creates a line break!",
            explanation: "<br> is a self-closing tag. You just write <br> and it creates a line break — no </br> needed."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "How many heading levels does HTML have?",
            options: ["3", "5", "6", "10"],
            answer: "6",
            hint: "h1 through h6!",
            explanation: "HTML has 6 heading levels: <h1> through <h6>."
          },
          {
            id: 7,
            type: "code-complete",
            question: "Complete the main page title tag:",
            code: "<<___>>Welcome to My Website</<___>>",
            options: ["p", "title", "h1", "header"],
            answer: "h1",
            hint: "The biggest, most important heading!",
            explanation: "<h1> is used for the main title of a page — it's the biggest and most important heading."
          },
          {
            id: 8,
            type: "true-false",
            question: "You can use <strong> inside a <p> tag.",
            options: ["True", "False"],
            answer: "True",
            hint: "Tags can go inside other tags!",
            explanation: "Yes! You can nest tags: <p>My name is <strong>Emma</strong>.</p> — strong is inside p."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What does <p>Hello<br>World</p> display?",
            options: ["Hello World on one line", "Hello on one line, World on the next", "Nothing", "An error"],
            answer: "Hello on one line, World on the next",
            hint: "<br> creates a line break!",
            explanation: "The <br> tag creates a line break, so Hello appears on one line and World on the next."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Which tag would you use for a subtitle below the main title?",
            options: ["<h1>", "<h2>", "<p>", "<strong>"],
            answer: "<h2>",
            hint: "Second most important heading!",
            explanation: "<h2> is perfect for a subtitle — it's the second-level heading, slightly smaller than <h1>."
          }
        ]
      },
      {
        dayId: 3,
        title: "Lists in HTML",
        emoji: "📝",
        explanation: `# Lists: Organizing Information! 📝

HTML has two types of lists: **unordered** and **ordered**.

## Unordered List (Bullet Points) 🔵
An **unordered list** uses bullet points. No specific order matters.

\`\`\`html
<ul>
  <li>Pizza</li>
  <li>Pasta</li>
  <li>Ice Cream</li>
</ul>
\`\`\`

Shows as:
• Pizza
• Pasta
• Ice Cream

## Ordered List (Numbered) 1️⃣
An **ordered list** uses numbers. Order matters!

\`\`\`html
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Eat breakfast</li>
</ol>
\`\`\`

Shows as:
1. Wake up
2. Brush teeth
3. Eat breakfast

## Remember
- \`<ul>\` = Unordered List (bullets)
- \`<ol>\` = Ordered List (numbers)
- \`<li>\` = List Item (goes inside ul or ol)

## Nested Lists
You can put a list inside a list!

\`\`\`html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does <ul> stand for?",
            options: ["Upper Level", "Unordered List", "Underlined Letters", "Unique Link"],
            answer: "Unordered List",
            hint: "UL = Unordered List = bullet points!",
            explanation: "<ul> stands for Unordered List — it creates a bullet-point list."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What does <ol> stand for?",
            options: ["Outer Layer", "Old Language", "Ordered List", "Open Line"],
            answer: "Ordered List",
            hint: "OL = Ordered List = numbers!",
            explanation: "<ol> stands for Ordered List — it creates a numbered list."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What tag goes inside <ul> or <ol> for each item?",
            options: ["<item>", "<list>", "<li>", "<bullet>"],
            answer: "<li>",
            hint: "LI = List Item!",
            explanation: "<li> stands for List Item. Each item in a list gets its own <li> tag."
          },
          {
            id: 4,
            type: "true-false",
            question: "An ordered list <ol> shows numbers instead of bullet points.",
            options: ["True", "False"],
            answer: "True",
            hint: "Ordered = numbered!",
            explanation: "An <ol> (ordered list) displays numbers (1, 2, 3...) instead of bullet points."
          },
          {
            id: 5,
            type: "code-complete",
            question: "Complete the list item tag:",
            code: "<<___>>Apples</<___>>",
            options: ["ul", "ol", "li", "item"],
            answer: "li",
            hint: "List Item = li!",
            explanation: "<li>Apples</li> creates one list item with the text 'Apples'."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "For a recipe (steps in order), which list type would you use?",
            options: ["<ul> — unordered list", "<ol> — ordered list", "<p> — paragraph", "<h1> — heading"],
            answer: "<ol> — ordered list",
            hint: "Recipe steps have a specific order!",
            explanation: "Use <ol> for recipe steps because order matters — step 1 before step 2."
          },
          {
            id: 7,
            type: "multiple-choice",
            question: "For a shopping list (no specific order), which list type would you use?",
            options: ["<ol> — ordered list", "<ul> — unordered list", "<h2> — heading", "<br> — line break"],
            answer: "<ul> — unordered list",
            hint: "Shopping items don't need to be in order!",
            explanation: "Use <ul> for shopping lists — the order you buy items doesn't matter."
          },
          {
            id: 8,
            type: "true-false",
            question: "You can put a list inside another list (nested lists).",
            options: ["True", "False"],
            answer: "True",
            hint: "Think of a subcategory under a category!",
            explanation: "Yes! You can nest lists — put a <ul> or <ol> inside a <li> to create sub-items."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "How many <li> items are in this list? <ul><li>Cat</li><li>Dog</li><li>Fish</li></ul>",
            options: ["1", "2", "3", "4"],
            answer: "3",
            hint: "Count the <li> tags!",
            explanation: "There are 3 <li> tags: Cat, Dog, and Fish — so 3 list items."
          },
          {
            id: 10,
            type: "code-complete",
            question: "What tag wraps numbered list items?",
            code: "<<___>>\n  <li>Step 1</li>\n  <li>Step 2</li>\n</<___>>",
            options: ["ul", "ol", "li", "list"],
            answer: "ol",
            hint: "Ordered List = numbers!",
            explanation: "<ol>...</ol> wraps the numbered list. Each step gets a <li> tag inside."
          }
        ]
      },
      {
        dayId: 4,
        title: "Images and Links",
        emoji: "🔗",
        explanation: `# Images and Links: Making Pages Interactive! 🔗

Two of the most important HTML elements are **images** and **links**!

## Images 🖼️
The \`<img>\` tag shows an image. It's self-closing (no ending tag)!

\`\`\`html
<img src="cat.jpg" alt="A cute cat">
\`\`\`

- **src** = source — where the image file is
- **alt** = alternative text — describes the image (for people who can't see it)

## Links 🔗
The \`<a>\` tag creates a link (also called an anchor):

\`\`\`html
<a href="https://www.google.com">Visit Google</a>
\`\`\`

- **href** = where the link goes
- The text between tags is what you click on

## Linking to Another Page
\`\`\`html
<a href="about.html">About Me</a>
\`\`\`

## Image as a Link
You can make an image clickable:

\`\`\`html
<a href="https://www.google.com">
  <img src="logo.png" alt="Google Logo">
</a>
\`\`\`

## Attributes
**src**, **alt**, and **href** are called **attributes**. They give extra information to HTML tags. They always go inside the opening tag!

\`\`\`html
<tagname attribute="value">Content</tagname>
\`\`\`
`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What tag is used to display an image?",
            options: ["<picture>", "<image>", "<img>", "<photo>"],
            answer: "<img>",
            hint: "img = image, short and simple!",
            explanation: "The <img> tag is used to display images on a webpage."
          },
          {
            id: 2,
            type: "multiple-choice",
            question: "What attribute tells an <img> tag where the image file is?",
            options: ["href", "alt", "src", "link"],
            answer: "src",
            hint: "src = source = where to find it!",
            explanation: "The src (source) attribute tells the browser where to find the image file."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "What does the alt attribute in an <img> tag do?",
            options: ["Changes image size", "Describes the image in text", "Links the image", "Sets the color"],
            answer: "Describes the image in text",
            hint: "alt = alternative text!",
            explanation: "The alt attribute provides a text description of the image, helpful for accessibility."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "What tag creates a hyperlink (clickable link)?",
            options: ["<link>", "<l>", "<a>", "<href>"],
            answer: "<a>",
            hint: "a = anchor!",
            explanation: "The <a> (anchor) tag creates clickable hyperlinks."
          },
          {
            id: 5,
            type: "multiple-choice",
            question: "What attribute in <a> tells the browser where to go when clicked?",
            options: ["src", "alt", "href", "link"],
            answer: "href",
            hint: "href = hypertext reference = the destination!",
            explanation: "The href attribute in an <a> tag specifies the URL the link points to."
          },
          {
            id: 6,
            type: "true-false",
            question: "The <img> tag needs a closing tag like </img>.",
            options: ["True", "False"],
            answer: "False",
            hint: "<img> is self-closing — it stands alone!",
            explanation: "<img> is a self-closing tag. You just write <img src='...' alt='...'> — no closing tag needed."
          },
          {
            id: 7,
            type: "code-complete",
            question: "Complete the link to go to 'page2.html' when clicked:",
            code: "<a ___=\"page2.html\">Go to Page 2</a>",
            options: ["src", "href", "link", "go"],
            answer: "href",
            hint: "href points to where the link goes!",
            explanation: "<a href='page2.html'>Go to Page 2</a> — href holds the link destination."
          },
          {
            id: 8,
            type: "true-false",
            question: "You can wrap an <img> inside an <a> to make a clickable image.",
            options: ["True", "False"],
            answer: "True",
            hint: "Put the image inside the link tag!",
            explanation: "Yes! Wrapping <img> inside <a href='...'> makes the image a clickable link."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "What are extra settings inside HTML tags (like src, alt, href) called?",
            options: ["Variables", "Functions", "Attributes", "Loops"],
            answer: "Attributes",
            hint: "They add extra information to tags!",
            explanation: "Attributes provide additional information to HTML tags. They appear inside the opening tag."
          },
          {
            id: 10,
            type: "multiple-choice",
            question: "Which HTML shows a dog image with alt text?",
            options: ["<img href='dog.jpg' title='A dog'>", "<img src='dog.jpg' alt='A dog'>", "<a src='dog.jpg'>A dog</a>", "<picture>dog.jpg</picture>"],
            answer: "<img src='dog.jpg' alt='A dog'>",
            hint: "img + src for location + alt for description!",
            explanation: "<img src='dog.jpg' alt='A dog'> is correct — src points to the file, alt describes it."
          }
        ]
      },
      {
        dayId: 5,
        title: "Week 3 Review — Build a Mini Page!",
        emoji: "🏗️",
        explanation: `# Week 3 Review: HTML Expert! 🏗️

Look how far you've come! You can now build real web pages!

## Everything You Learned:

### Tags and Structure
\`\`\`html
<html>
  <head><title>My Page</title></head>
  <body>
    <!-- Everything visible goes here -->
  </body>
</html>
\`\`\`

### Text Tags
- \`<h1>\` to \`<h6>\` — headings (big to small)
- \`<p>\` — paragraph
- \`<strong>\` — **bold**
- \`<em>\` — *italic*
- \`<br>\` — line break

### List Tags
- \`<ul>\` — bullet list
- \`<ol>\` — numbered list
- \`<li>\` — list item

### Media & Links
- \`<img src="" alt="">\` — image
- \`<a href="">\` — link

## A Full Mini Page!
\`\`\`html
<html>
  <head><title>About Me</title></head>
  <body>
    <h1>About Me</h1>
    <p>My name is <strong>Emma</strong>.</p>
    <h2>My Hobbies</h2>
    <ul>
      <li>Coding</li>
      <li>Drawing</li>
      <li>Reading</li>
    </ul>
    <a href="page2.html">Next Page</a>
  </body>
</html>
\`\`\`

**You're an HTML builder! 🌟**`,
        questions: [
          {
            id: 1,
            type: "multiple-choice",
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Happy Text Making Language", "High Tech Modern Language", "Hyper Text Making Links"],
            answer: "Hyper Text Markup Language",
            hint: "H-T-M-L!",
            explanation: "HTML = HyperText Markup Language — the language for building web pages."
          },
          {
            id: 2,
            type: "code-complete",
            question: "Complete the biggest heading tag:",
            code: "<<___>>Welcome!</___>",
            options: ["h6", "h3", "h1", "p"],
            answer: "h1",
            hint: "h1 = biggest heading!",
            explanation: "<h1>Welcome!</h1> creates the largest heading on the page."
          },
          {
            id: 3,
            type: "multiple-choice",
            question: "Which tag creates a bullet-point list?",
            options: ["<ol>", "<li>", "<ul>", "<list>"],
            answer: "<ul>",
            hint: "UL = Unordered List = bullets!",
            explanation: "<ul> creates an unordered (bullet-point) list."
          },
          {
            id: 4,
            type: "multiple-choice",
            question: "To show an image, which tag do you use?",
            options: ["<picture>", "<img>", "<photo>", "<show>"],
            answer: "<img>",
            hint: "img = image!",
            explanation: "The <img> tag displays an image. Remember to add src and alt attributes!"
          },
          {
            id: 5,
            type: "true-false",
            question: "The <body> tag holds everything visible on a webpage.",
            options: ["True", "False"],
            answer: "True",
            hint: "All visible content lives in the body!",
            explanation: "Everything the user sees on a webpage goes inside the <body> tag."
          },
          {
            id: 6,
            type: "multiple-choice",
            question: "Which attribute does <a> need to know where to link?",
            options: ["src", "alt", "href", "name"],
            answer: "href",
            hint: "href = hypertext reference = destination!",
            explanation: "The href attribute in <a> holds the URL or file the link points to."
          },
          {
            id: 7,
            type: "code-complete",
            question: "Complete the ordered list:",
            code: "<<___>>\n  <li>Step 1</li>\n  <li>Step 2</li>\n</<___>>",
            options: ["ul", "ol", "li", "p"],
            answer: "ol",
            hint: "Ordered = numbered!",
            explanation: "<ol> creates a numbered list. Each step gets a <li> tag."
          },
          {
            id: 8,
            type: "multiple-choice",
            question: "What makes text BOLD in HTML?",
            options: ["<b> or <strong>", "<italic>", "<big>", "<em>"],
            answer: "<b> or <strong>",
            hint: "Strong emphasis = bold!",
            explanation: "<strong> (or <b>) makes text bold in HTML."
          },
          {
            id: 9,
            type: "multiple-choice",
            question: "Where does the page title (shown in browser tab) go?",
            options: ["Inside <body>", "Inside <h1>", "Inside <head> with <title>", "Inside <p>"],
            answer: "Inside <head> with <title>",
            hint: "Head holds invisible info!",
            explanation: "The <title> tag goes inside <head> and sets the text shown in the browser's tab."
          },
          {
            id: 10,
            type: "true-false",
            question: "<img> and <br> do not need closing tags.",
            options: ["True", "False"],
            answer: "True",
            hint: "Some tags are self-closing!",
            explanation: "<img> and <br> are self-closing tags — they work without a matching closing tag."
          }
        ]
      }
    ]
  }
];
