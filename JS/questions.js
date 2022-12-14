let questions =[
    {
      "question": "Inside which HTML element do we put the JavaScript??",
      "choice1": "<script>",
      "choice2": "<javascript>",
      "choice3": "<js>",
      "choice4": "<scripting>",
      "answer": 1
    },
    {
        "question" :"Which method can be used to remove any whitespace from both the beginning and the end of a string?",
        "choice1": "trim()",
        "choice2": "len()",
        "choice3": "strip() ",
        "choice4": "ptrim()",
        "answer": 3
    },
    {
        "question" :"Which method can be used to return a string in upper case letters?",
        "choice1": "toUpperCase() ",
        "choice2": "upper() ",
        "choice3": "uppercase()",
        "choice4": "upperCase()",
        "answer": 2
    },
    {
        "question" :"Which method can be used to replace parts of a string?",
        "choice1": "replace()",
        "choice2": "repl()",
        "choice3": "switch()",
        "choice4": "replaceString()",
        "answer": 1
    },
    {
        "question" :"How do you start writing a while loop in Python?",
        "choice1": "while (x > y)",
        "choice2": "while x > y {",
        "choice3": "x > y while {",
        "choice4": "while x > y:",
        "answer": 4
    },
    {
        "question" :"The background color of the content also covers:",
        "choice1": "margins",
        "choice2": "padding and margins",
        "choice3": "body",
        "choice4": "padding",
        "answer": 4
    },
    {
        "question" :"How do you make a list not display bullet points?",
        "choice1": "list-style-type: no-bullet",
        "choice2": "bulletpoints: none",
        "choice3": "list-style-type: none",
        "choice4": "list: none",
        "answer": 3
    },
    {
        "question" :"Which 'A' and 'B' pair makes the cursor appear as a pointer on paragraphs:<br><i class = 'code-in-question'> p{<br> &nbsp;&nbsp;&nbsp; A: B <br>}</i>",
        "choice1": "Default : Cursor",
        "choice2": "Cursor : Default",
        "choice3": "Pointer: Cursor",
        "choice4": "Cursor: Pointer",
        "answer": 4
    },
    {
      "question": "What is the correct syntax for referring to an external script called 'file.js'?",
      "choice1": "<script href='file.js'>",
      "choice2": "<script name='file.js'>",
      "choice3": "<script src='file.js'>",
      "choice4": "<script file='file.js'>",
      "answer": 3
    },
    {
      "question": " How do you write 'Hello World' in an alert box?",
      "choice1": "msgBox('Hello World');",
      "choice2": "alertBox('Hello World');",
      "choice3": "msg('Hello World');",
      "choice4": "alert('Hello World');",
      "answer": 4
    },
    {
        "question" :"Fill in the blanks to print the greater number.<br><i class = 'code-in-question'>int x = 5;<br>int y = 5;<br>__(x > y){ <br> &nbsp;&nbsp;&nbsp;System.out.println(_____);<br>}____{<br>&nbsp;&nbsp;&nbsp;System.out.ptintln(y);<br>}</i>",
        "choice1": "if, else, x",
        "choice2": "if, x, else",
        "choice3": "if, else, y",
        "choice4": "if, y, else",
        "answer": 2
    },
    {
        "question" :"Select the correct statements about && operator",
        "choice1": "a && b is true if either a or b is true",
        "choice2": "a && b is false if both a and b are true",
        "choice3": "a && b is true if both a and b are true",
        "choice4": "a && b is true if a is true and b is false",
        "answer": 3
    },
    {
        "question" :"What is the output of this code?<i class = 'code-in-question'><br>String array[ ][ ] = {{\"Hey\", \"John\", \"Bye\"}, {\"John\", \"Johnson\", \"Hello\"}};<br> System.out.println(array[1][1]);</i>",
        "choice1": "John",
        "choice2": "Hello",
        "choice3": "Johnson",
        "choice4": "Hey",
        "answer": 3
    },
    {
      "question": "What tag is used to create a line-break without an extra space between the text block?",
      "choice1": "br",
      "choice2": "escape",
      "choice3": "linebreak",
      "choice4": "break",
      "answer": 1
    },
    {
      "question": "General HTML elements consist of:",
      "choice1": "the body tag",
      "choice2": "only content",
      "choice3": "only tags",
      "choice4": "opening tag, content, closing tag",
      "answer": 4
    },
    {
      "question": "Which attribute contains the URL address of the webpage that is loaded after a form submission?",
      "choice1": "method",
      "choice2": "id",
      "choice3": "action",
      "choice4": "name",
      "answer": 3
    },
    {
      "question": "what value of the type attribute turns the input tag into submit button?",
      "choice1": "submit",
      "choice2": "radio",
      "choice3": "button",
      "choice4": "range",
      "answer": 1
    },
    {
      "question": "What attribute does the frameset tag require to indictate its size?",
      "choice1": "width and height",
      "choice2": "rows and cols",
      "choice3": "thickness and border",
      "choice4": "height and size",
      "answer": 2
    },
    {
      "question": "What is the \"=\"(equal sign) called in JavaScript?",
      "choice1": "Is equivalent",
      "choice2": "Assignment operator",
      "choice3": "eval",
      "choice4": "Equal to",
      "answer": 2
    },
    {
        "question" :"How do you make a list that lists its items with squares?",
        "choice1": "list-style-type: square;",
        "choice2": "list-type: square;",
        "choice3": "list: square;",
        "choice4": "list-style: square;",
        "answer": 1
    },
    {
        "question" :"How do you display a border like this:<br><i class = 'code-in-question'>&nbsp;&nbsp;&nbsp;The top border = 10 pixels<br>&nbsp;&nbsp;&nbsp;The bottom border = 5 pixels<br>&nbsp;&nbsp;&nbsp;The left border = 20 pixels<br>&nbsp;&nbsp;&nbsp;The right border = 1pixel?</i>",
        "choice1": "border-width:10px 1px 5px 20px; ",
        "choice2": "border-width:10px 5px 20px 1px;",
        "choice3": "border-width:5px 20px 10px 1px;",
        "choice4": "border-width:10px 20px 5px 1px;",
        "answer": 1
    },
    {
        "question" :"Which property is used to change the font of an element?",
        "choice1": "font-weight",
        "choice2": "font-style",
        "choice3": "font-family",
        "choice4": "font",
        "answer": 3
    },
    {
      "question": "What characters cannot be used in variable names? (javaScript)",
      "choice1": "Underscore sign (_)",
      "choice2": "Numbers",
      "choice3": "Special symbols(%, #, etc.)",
      "choice4": "Letters",
      "answer": 3
    },
    {
      "question": "What built in property is used to count the number of characters in an object's property? (javaScript)",
      "choice1": "size",
      "choice2": "width",
      "choice3": "max",
      "choice4": "length",
      "answer": 4
    },
    {
      "question" :"What is a correct syntax to output \"Hello World\" in Python?",
      "choice1": "echo \"Hello World\"",
      "choice2": "p(\"Hello World\")",
      "choice3": "print(\"Hello World\")",
      "choice4": "echo(\"Hello World\");",
      "answer": 3
    },
    {
      "question" :"How do you insert COMMENTS in Python code?",
      "choice1": "#This is a comment",
      "choice2": "//This is a comment",
      "choice3": "/*This is a comment*/",
      "choice4": "<!--This is a comment-->;",
      "answer": 1
    },
    {
      "question" :"Which collection does not allow duplicate members in Python?",
      "choice1": "TUPLE",
      "choice2": "SET",
      "choice3": "LIST",
      "choice4": "DICTIONARY",
      "answer": 2
    },
    {
      "question" :"How do you start writing an if statement in Python?",
      "choice1": "if x > y: ",
      "choice2": "if x > y then:",
      "choice3": "if (x > y)",
      "choice4": "if(x > y){",
      "answer": 1
    },
    {
      "question": "How many case statements are often used in the \"Switch\" statement?",
      "choice1": "One for each possible answer",
      "choice2": "Only 5",
      "choice3": "2 - for \"true\" and \"false\"",
      "choice4": "None of the above",
      "answer": 1
    },
    {
      "question": "What is the output of the following statment? <br><i class = 'code-in-question'> function multNumbers(a,b){<br> &nbsp;&nbsp;&nbsp;var c = a*b; <br>} <br></i> multNumbers(2,6);",
      "choice1": "24",
      "choice2": "nothing",
      "choice3": "12",
      "choice4": "8",
      "answer": 2
    },
    {
      "question": "Which of the following is correct about CSS?",
      "choice1": "CSS is used to control the style of a web document in a simple and easy way.",
      "choice2": "CSS is the acronym for \"Cascading Style Sheet\"",
      "choice3": " You can write CSS once and then reuse same sheet in multiple HTML pages",
      "choice4": " All of the above",
      "answer": 4
    },
    {
        "question" :"Which of the following property of a anchor element signifies unvisited hyperlinks?",
        "choice1": ":link",
        "choice2": ":visited",
        "choice3": ":hover",
        "choice4": ":active",
        "answer": 1
    },
    {
        "question" :"Which of the following property of a table element controls the placement of the table caption?",
        "choice1": ":border-collapse",
        "choice2": ":border-spacing",
        "choice3": ":caption-side",
        "choice4": ":empty-cells",
        "answer": 3
    },
    {
        "question" :"The background color of the content also covers:",
        "choice1": "margins",
        "choice2": "padding and margins",
        "choice3": "body",
        "choice4": "padding",
        "answer": 4
    },
    {
        "question" :"How do you make a list not display bullet points?",
        "choice1": "list-style-type: no-bullet",
        "choice2": "bulletpoints: none",
        "choice3": "list-style-type: none",
        "choice4": "list: none",
        "answer": 3
    },
    {
        "question" :"Which 'A' and 'B' pair makes the cursor appear as a pointer on paragraphs:<br><i class = 'code-in-question'> p{<br> &nbsp;&nbsp;&nbsp; A: B <br>}</i>",
        "choice1": "Default : Cursor",
        "choice2": "Cursor : Default",
        "choice3": "Pointer: Cursor",
        "choice4": "Cursor: Pointer",
        "answer": 4
    },
    {
        "question" :"What value of the \"display\" property makes the inline element act as a blocking level element?",
        "choice1": "block",
        "choice2": "table-cell",
        "choice3": "inline",
        "choice4": "list-item",
        "answer": 1
    },
    {
        "question" :"Make the element with the id=\"mystyle\" disappear:<br><i class = 'code-in-question'> #mystyle{<br> &nbsp;&nbsp;&nbsp;   display:_______; <br>}</i>",
        "choice1": "block",
        "choice2": "none",
        "choice3": "blank",
        "choice4": "invisible",
        "answer": 2
    },
    {
        "question" :"What is printed by the Python code?<br><i class = 'code-in-question'>d = dict()<br>d['left'] = '<<'<br>d['right'] = '>>'<br>print('{left} and {right} or {right} and {left}'.format(**d))</i>",
        "choice1": ">> and >> or << and <<",
        "choice2": "<< and >> or  << and >>",
        "choice3": "<< and >> or >> and <<",
        "choice4": ">> and << or >> and <<",
        "answer": 3
    },
    {
        "question" :"Why is the \"static\" value used in positioning?",
        "choice1": "To make the element unmovable",
        "choice2": "To prohibit the styling of the element",
        "choice3": "To make the element run in the natural order of the page",
        "choice4": "To make the element static",
        "answer": 3
    },
    {
        "question" :"Select from the options below to fix the paragraph to 100px from the top and 50px from the left:<br><i class = 'code-in-question'> p{<br> &nbsp;&nbsp;&nbsp; _____: fixed;<br>&nbsp;&nbsp;&nbsp;_____: 50px;<br>&nbsp;&nbsp;&nbsp;_____: 100px; <br>}</i>",
        "choice1": "Position, Left, Top",
        "choice2": "Top, Right, Left",
        "choice3": "Top, Left, Right",
        "choice4": "Position, Top, Left",
        "answer": 1
    },
    {
        "question" :"What is the purpose of the \"relative\" value?",
        "choice1": "It puts the element relative to the containing block",
        "choice2": "It puts the element relative to the browser window",
        "choice3": "It puts the element relative to the normal flow",
        "choice4": "None of the above",
        "answer": 3
    },
    {
        "question" :"By default which element in the markup will overlap the others when elements begin stacking?",
        "choice1": "none",
        "choice2": "the last element",
        "choice3": "the first element",
        "choice4": "all elements",
        "answer": 2
    },
    {
        "question" :"In order to make the z-index property work you must ...",
        "choice1": "position elements",
        "choice2": "use floating",
        "choice3": "use the overflow property",
        "choice4": "clear floats",
        "answer": 1
    },
    {
        "question" :"If you give a negative value to the \"top\" property, in which direction will the box be moved?",
        "choice1": "up",
        "choice2": "left",
        "choice3": "right",
        "choice4": "down",
        "answer": 1
    },
    {
        "question" :"When the \"float\" property is used with the values of \"left\" or \"right\", anything else that lives in the containing element will:",
        "choice1": "become invisible",
        "choice2": "flow around the element associated with the \"float\" property",
        "choice3": "be moved down of the element associated with the \"float\" property",
        "choice4": "become static",
        "answer": 2
    },
    {
        "question" :"Assign width of 500px to the \"text\" element and enable fixed scrollbars:<br><i class = 'code-in-question'> #text{<br> &nbsp;&nbsp;&nbsp; overflow:________;<br>&nbsp;&nbsp;&nbsp;height: 200px;<br>&nbsp;&nbsp;&nbsp;width: ________;; <br>}</i>",
        "choice1": "visible, 500px",
        "choice2": "visible, 500",
        "choice3": "scroll, 500px",
        "choice4": "scroll, 500",
        "answer": 3
    },
    {
        "question" :"Which exception is raised by this code?<br><i class = 'code-in-question'>print(\"7\" + 4)</i>",
        "choice1": "ZeroDivisionError",
        "choice2": "ValueError",
        "choice3": "TypeError",
        "choice4": "Synthax error",
        "answer": 3
    },
    {
        "question" :"Which line of code writes \"Hello world!\" to a file?",
        "choice1": "write(file, \"Hello world!\")",
        "choice2": "write(\"Hello world!\", file)",
        "choice3": "write.file(\"Hello world!\")",
        "choice4": "file.write(\"Hello world!\")",
        "answer": 4
    },
    {
        "question" :"If a file write operation is successful, which one of these statements will be true?",
        "choice1": "file.write(msg) == True",
        "choice2": "file.write(msg) == len(msg)",
        "choice3": "file.write(msg) == msg",
        "choice4": "None of the above",
        "answer": 2
    },
    {
        "question" :"In the background-clip property, which value allows for the creation of transparent borders?",
        "choice1": "none",
        "choice2": "border-box",
        "choice3": "margin-box",
        "choice4": "padding-box",
        "answer": 4
    },
    {
        "question" :"Which of the following is not a filter function?",
        "choice1": "hue-rotate",
        "choice2": "inverse",
        "choice3": "invert",
        "choice4": "contrast",
        "answer": 2
    },
    {
        "question" :"What is the default value of the position property?",
        "choice1": "relative",
        "choice2": "fixed",
        "choice3": "absolute",
        "choice4": "static",
        "answer": 4
    },
    {
        "question" :"How do you select all p elements inside a div element?",
        "choice1": "div.p",
        "choice2": "div p ",
        "choice3": "div + p",
        "choice4": "div>p",
        "answer": 2
    },
    {
        "question" :"How do you select elements with class name 'test'?",
        "choice1": ".test",
        "choice2": "*test",
        "choice3": "test",
        "choice4": "#test",
        "answer": 1
    },
    {
        "question" :"How do you make a list that lists its items with squares?",
        "choice1": "list-style-type: square;",
        "choice2": "list-type: square;",
        "choice3": "list: square;",
        "choice4": "list-style: square;",
        "answer": 1
    },
    {
        "question" :"How do you display a border like this:<br><i class = 'code-in-question'>&nbsp;&nbsp;&nbsp;The top border = 10 pixels<br>&nbsp;&nbsp;&nbsp;The bottom border = 5 pixels<br>&nbsp;&nbsp;&nbsp;The left border = 20 pixels<br>&nbsp;&nbsp;&nbsp;The right border = 1pixel?</i>",
        "choice1": "border-width:10px 1px 5px 20px; ",
        "choice2": "border-width:10px 5px 20px 1px;",
        "choice3": "border-width:5px 20px 10px 1px;",
        "choice4": "border-width:10px 20px 5px 1px;",
        "answer": 1
    },
    {
        "question" :"Which property is used to change the font of an element?",
        "choice1": "font-weight",
        "choice2": "font-style",
        "choice3": "font-family",
        "choice4": "font",
        "answer": 3
    },
    {
        "question" :"Which is the correct CSS syntax?",
        "choice1": "body {color: black;}",
        "choice2": "body:color=black;",
        "choice3": "{body;color:black;}",
        "choice4": "{body:color=black;}",
        "answer": 1
    },
    {
        "question" :"How do you start writing a for loop in Python?",
        "choice1": "for each x in y:",
        "choice2": "for x in y:",
        "choice3": "for(let i = 0; i<arr.length; i++){",
        "choice4": "for x > y:",
        "answer": 2
    },
    {
        "question" :"Which operator is used to multiply numbers?",
        "choice1": "%",
        "choice2": "*",
        "choice3": "x",
        "choice4": "#",
        "answer": 2
    },
    {
        "question" :"Which operator can be used to compare two values?",
        "choice1": "><",
        "choice2": "<>",
        "choice3": "=",
        "choice4": "==",
        "answer": 4
    },
    {
        "question" :"Which of these collections defines a LIST?",
        "choice1": "[\"apple\", \"banana\", \"cherry\"]",
        "choice2": "{\"apple\", \"banana\", \"cherry\"}",
        "choice3": "{\"name\": \"apple\", \"color\": \"green\"}",
        "choice4": "(\"apple\", \"banana\", \"cherry\")",
        "answer": 1
    },
    {
        "question" :"Which HTML attribute is used to define inline styles?",
        "choice1": "style",
        "choice2": "font",
        "choice3": "styles",
        "choice4": "class",
        "answer": 1
    },
    {
        "question" :"What is the correct HTML for referring to an external style sheet?",
        "choice1": "<link rel=\"stylesheet\" type=\"text/css\" file=\"mystyle.css\"> ",
        "choice2": "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\"> ",
        "choice3": "<stylesheet>mystyle.css</stylesheet>",
        "choice4": "<style src=\"mystyle.css\">",
        "answer": 2
    },
    {
      "question": "Inside which HTML element do we put the JavaScript?",
      "choice1": "<script>",
      "choice2": "<javascript>",
      "choice3": "<scripting>",
      "choice4": "<js>",
      "answer": 1
    },
    {
        "question" :"How do you make each word in a text start with a capital letter?",
        "choice1": "text-style:capitalize",
        "choice2": "You can't do that with CSS",
        "choice3": "transform:capitalize",
        "choice4": "text-transform:capitalize",
        "answer": 4
    },
    {
        "question" :"Which statement in regard to the char data type is true?",
        "choice1": "'K' is a char",
        "choice2": "\"Hello\" is a char",
        "choice3": "char is used to store numberic values",
        "choice4": "char is the same as string",
        "answer": 1
    },
    {
        "question" :"In every Java program,.........",
        "choice1": "there must ba at least two variables declared.",
        "choice2": "there must be a method called 'main'.",
        "choice3": "all the variables must be integers",
        "choice4": "there must a comment.",
        "answer": 2
    },
    {
        "question" :"Fill in the blanks to print \"Yeah\".<br><i class = 'code-in-question'>int x = 5;<br>__(x==5){ <br> &nbsp;&nbsp;&nbsp;System.out.println(\"Yeah\");<br>}</i>",
        "choice1": "while",
        "choice2": "for",
        "choice3": "switch",
        "choice4": "if",
        "answer": 4
    },
    {
        "question" :"How do you display hyperlinks without an underline?",
        "choice1": "a {text-decoration:no-underline;}",
        "choice2": "a {text-decoration:none;}",
        "choice3": "a {underline:none;}",
        "choice4": "a {decoration:no-underline;}",
        "answer": 2
    },
    {
        "question" :"What is the correct CSS syntax for making all the <p> elements bold?",
        "choice1": "<p style=\"text-size:bold;\">",
        "choice2": "p {font-weight:bold;}",
        "choice3": "p {text-size:bold;}",
        "choice4": "<p style=\"font-size:bold;\">",
        "answer": 2
    },
    {
        "question" :"Which one is NOT a legal variable name?",
        "choice1": "my_var",
        "choice2": "my-var",
        "choice3": "_myvar",
        "choice4": "@myvar",
        "answer": 2
    },
    {
        "question" :"How do you create a variable with the numeric value 5?",
        "choice1": "x = int(5)",
        "choice2": "int x = 5b",
        "choice3": "x = 5",
        "choice4": "Both the other answers are correct",
        "answer": 3
    },
    {
        "question" :"What is the correct file extension for Python files?",
        "choice1": ".pt",
        "choice2": ".pyt",
        "choice3": ".pyth",
        "choice4": ".py ",
        "answer": 4
    },
    {
      "question" :"To distribute your application to different platforms, How many JAVA versions do you need to create?",
      "choice1": "One for each",
      "choice2": "Two versions",
      "choice3": "Just one version",
      "choice4": "None of the above",
      "answer": 3
    },
    {
      "question" :"Which of the following statments is true?",
      "choice1": "Java is used only in web and mobile applications",
      "choice2": "Java is used only in NASA's space related applications",
      "choice3": "Java has a huge developer community",
      "choice4": "Java is the same as JavaScript",
      "answer": 3
    },
    {
      "question" :"Single-line comments are created in Java using:",
      "choice1": "**characters at the beginnig of the line",
      "choice2": "//characters at the beginnig of the line",
      "choice3": "*/characters at the beginnig of the line",
      "choice4": "//characters at the end of the line",
      "answer": 2
    },
    {
        "question" :"Which of these collections defines a TUPLE in Python?",
        "choice1": "[\"apple\", \"banana\", \"cherry\"]",
        "choice2": "(\"apple\", \"banana\", \"cherry\")",
        "choice3": "{\"apple\", \"banana\", \"cherry\"}",
        "choice4": "{\"name\": \"apple\", \"color\": \"green\"}",
        "answer": 2
    },
    {
        "question" :"Which of these collections defines a SET in Python??",
        "choice1": "{\"apple\", \"banana\", \"cherry\"}",
        "choice2": "[\"apple\", \"banana\", \"cherry\"]",
        "choice3": "{\"name\": \"apple\", \"color\": \"green\"}",
        "choice4": "(\"apple\", \"banana\", \"cherry\")",
        "answer": 1
    },
    {
        "question" :"Which CSS property controls the text size?",
        "choice1": "text-size",
        "choice2": "text-style",
        "choice3": "font-size",
        "choice4": "font-style",
        "answer": 3
    },
    {
        "question" :"Which CSS property controls the text size?",
        "choice1": "text-size",
        "choice2": "text-style",
        "choice3": "font-size",
        "choice4": "font-style",
        "answer": 3
    },
    {
        "question" :"How do you add a background color for all h1 elements?",
        "choice1": "h1 {background-color:#FFFFFF;} ",
        "choice2": "h1.all {background-color:#FFFFFF;}",
        "choice3": "all.h1 {background-color:#FFFFFF;}",
        "choice4": "*.h1 {background-color:#FFFFFF;}",
        "answer": 1
    },
    {
        "question" :"How do you insert a comment in a CSS file?",
        "choice1": "// this is a comment",
        "choice2": "// this is a comment //",
        "choice3": "#this is a comment",
        "choice4": "/* this is a comment */",
        "answer": 4
    },
    {
        "question" :"Which is the correct CSS syntax?",
        "choice1": "body {color: black;}",
        "choice2": "body:color=black;",
        "choice3": "{body;color:black;}",
        "choice4": "{body:color=black;}",
        "answer": 1
    },
    {
        "question" :"Which HTML attribute is used to define inline styles?",
        "choice1": "style",
        "choice2": "font",
        "choice3": "styles",
        "choice4": "class",
        "answer": 1
    },
    {
        "question" :"What is the correct HTML for referring to an external style sheet?",
        "choice1": "<link rel=\"stylesheet\" type=\"text/css\" file=\"mystyle.css\"> ",
        "choice2": "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\"> ",
        "choice3": "<stylesheet>mystyle.css</stylesheet>",
        "choice4": "<style src=\"mystyle.css\">",
        "answer": 2
    },
    {
        "question" :"Which method prints text in a Java program?",
        "choice1": "System.out()",
        "choice2": "out.writeText()",
        "choice3": "System.printText()",
        "choice4": "System.out.println()",
        "answer": 4
    },
    {
        "question" :"You can add a Java doc style comment by using:",
        "choice1": "// AND */ characters to wrap comment",
        "choice2": "/** AND */ characters to wrap comment",
        "choice3": "//characters at the beginnig of the line",
        "choice4": "/* AND */  characters to wrap comment",
        "answer": 2
    },
    {
        "question" :"Which variable type would you use for a city name?",
        "choice1": "String",
        "choice2": "int",
        "choice3": "Integer",
        "choice4": "double",
        "answer": 1
    },
    {
      "question": "Inside which HTML element do we put the JavaScript?",
      "choice1": "<script>",
      "choice2": "<javascript>",
      "choice3": "<scripting>",
      "choice4": "<js>",
      "answer": 1
    },
    {
      "question": "What is the correct JavaScript syntax to change the content of the HTML element below? <br><i class = 'code-in-question'><p id=\"demo\">This is a demonstration.</p></i>",
      "choice1": "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
      "choice2": "document.getElement(\"p\").innerHTML = \"Hello World!\";",
      "choice3": "#demo.innerHTML = \"Hello World!\";",
      "choice4": "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
      "answer": 4
    },
    {
        "question" :"Which of these collections defines a DICTIONARY in Python?",
        "choice1": "{\"apple\", \"banana\", \"cherry\"}",
        "choice2": "[\"apple\", \"banana\", \"cherry\"]",
        "choice3": "{\"name\": \"apple\", \"color\": \"green\"}",
        "choice4": "(\"apple\", \"banana\", \"cherry\")",
        "answer": 3
    },
    {
        "question" :"Which collection is ordered, changeable, and allows duplicate members in Python?",
        "choice1": "LIST",
        "choice2": "DICTIONARY",
        "choice3": "SET",
        "choice4": "TUPLE",
        "answer": 1
    },
    {
        "question" :"Which collection does not allow duplicate members in Python?",
        "choice1": "TUPLE",
        "choice2": "SET",
        "choice3": "LIST",
        "choice4": "DICTIONARY",
        "answer": 2
    },
    {
        "question" :"How do you start writing an if statement in Python?",
        "choice1": "if x > y: ",
        "choice2": "if x > y then:",
        "choice3": "if (x > y)",
        "choice4": "if(x > y){",
        "answer": 1
    },
    {
        "question" :"Which of these collections defines a DICTIONARY in Python?",
        "choice1": "{\"apple\", \"banana\", \"cherry\"}",
        "choice2": "[\"apple\", \"banana\", \"cherry\"]",
        "choice3": "{\"name\": \"apple\", \"color\": \"green\"}",
        "choice4": "(\"apple\", \"banana\", \"cherry\")",
        "answer": 3
    },
    {
        "question" :"Which collection is ordered, changeable, and allows duplicate members in Python?",
        "choice1": "LIST",
        "choice2": "DICTIONARY",
        "choice3": "SET",
        "choice4": "TUPLE",
        "answer": 1
    },
    {
      "question": "How can you open a link in a new tab/browser window?",
      "choice1": "<a href\"URL\" new>",
      "choice2": "<a href\"URL\" target = \"new\">",
      "choice3": "<a href\"URL\" target = \"_blank\">",
      "choice4": "<a href\"URL\" target = \"n_blank\">",
      "answer": 3
    },
    {
        "question" :"How do you start writing a for loop in Python?",
        "choice1": "for each x in y:",
        "choice2": "for x in y:",
        "choice3": "for(let i = 0; i<arr.length; i++){",
        "choice4": "for x > y:",
        "answer": 2
    },
    {
        "question" :"What is the output of this code?<i class = 'code-in-question'><br>String array[ ][ ] = {{3, 5, 8}, {7, 54, 1, 12, 4}};<br> System.out.println(array[0][2]);</i>",
        "choice1": "5",
        "choice2": "54",
        "choice3": "1",
        "choice4": "8",
        "answer": 4
    },
    {
        "question" :"How many times can you call a method?",
        "choice1": "one",
        "choice2": "only 2",
        "choice3": "none",
        "choice4": "as many as you want",
        "answer": 4
    },
    {
        "question" :"What would the name of the setter method for the class variable named \"age\"",
        "choice1": "setAge",
        "choice2": "getAge",
        "choice3": "Age",
        "choice4": "initAge",
        "answer": 1
    },
    {
        "question" :"Which statement is used to stop a loop?",
        "choice1": "break",
        "choice2": "return",
        "choice3": "exit",
        "choice4": "stop",
        "answer": 1
    },
    {
        "question" :"Which of these collections defines a LIST?",
        "choice1": "[\"apple\", \"banana\", \"cherry\"]",
        "choice2": "{\"apple\", \"banana\", \"cherry\"}",
        "choice3": "{\"name\": \"apple\", \"color\": \"green\"}",
        "choice4": "(\"apple\", \"banana\", \"cherry\")",
        "answer": 1
    },
    {
        "question" :"Which method can be used to return a string in upper case letters?",
        "choice1": "toUpperCase() ",
        "choice2": "upper() ",
        "choice3": "uppercase()",
        "choice4": "upperCase()",
        "answer": 2
    },
    {
      "question": "How do you create a function in JavaScript?",
      "choice1": "function:myFunction() ",
      "choice2": "function myFunction()",
      "choice3": "function = myFunction()",
      "choice4": "myFunction()",
      "answer": 2
    },
    {
      "question": "How do you call a function named \"myFunction\"?",
      "choice1": "call myFunction() ",
      "choice2": "call function myFunction()",
      "choice3": "myFunction()",
      "choice4": "myFunction",
      "answer": 3
    },
    {
      "question": "Which of the following is not an attribute of the audio element?",
      "choice1": "repeat",
      "choice2": "autoplay",
      "choice3": "src",
      "choice4": "controls",
      "answer": 1
    },
    {
      "question": "How many times can HTML5 events be fired?",
      "choice1": "Only two",
      "choice2": "One",
      "choice3": "Multiple",
      "choice4": "None",
      "answer": 3
    },
    {
      "question": "What is the output of this code?<br><i class = 'code-in-question'>function letItBe() {<br> &nbsp;&nbsp;&nbsp;  let v = 2;<br>&nbsp;&nbsp;&nbsp;if (true) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let v = 4;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(v);<br>}<br>&nbsp;&nbsp;&nbsp;console.log(v);<br>}<br>letItBe();</i>",
      "choice1": "4 4",
      "choice2": "2 2",
      "choice3": "4 2",
      "choice4": "2 4",
      "answer": 3
    },
    {
      "question": "The \"this\" keyword in a method means:",
      "choice1": "The name of the web page",
      "choice2": "The current object",
      "choice3": "The name of the given method",
      "choice4": "None of the above",
      "answer": 2
    },
    {
      "question": "How to write an IF statement in JavaScript?",
      "choice1": "if (i == 5) ",
      "choice2": "if i == 5 then",
      "choice3": "if i = 5",
      "choice4": "if i = 5 then",
      "answer": 1
    },
    {
      "question": "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
      "choice1": "if (i <> 5)",
      "choice2": "if i <> 5",
      "choice3": "if i =! 5 then",
      "choice4": "if (i != 5)",
      "answer": 4
    },
    {
      "question": "How does a WHILE loop start?",
      "choice1": "while (i <= 10; i++)",
      "choice2": "while()",
      "choice3": "while (i <= 10)",
      "choice4": "while i = 1 to 10",
      "answer": 3
    },
    {
      "question": "How does a FOR loop start?",
      "choice1": "for i = 1 to 5",
      "choice2": "for (i = 0; i <= 5; i++)",
      "choice3": "for (i <= 5; i++)",
      "choice4": "for (i = 0; i <= 5)",
      "answer": 2
    },
    {
      "question": "How can you add a comment in a JavaScript?",
      "choice1": "//This is a comment ",
      "choice2": "<!--This is a comment-->",
      "choice3": "#This is a comment#",
      "choice4": "``This is a comment``",
      "answer": 1
    },
    {
      "question": "What is the correct way to write a JavaScript array?",
      "choice1": "var colors = \"red\", \"green\", \"blue\"",
      "choice2": "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
      "choice3": "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
      "choice4": "var colors = [\"red\", \"green\", \"blue\"]  ",
      "answer": 4
    },
    {
      "question": "How do you round the number 7.25, to the nearest integer?",
      "choice1": "Math.rnd(7.25)",
      "choice2": "round(7.25)",
      "choice3": "Math.round(7.25)",
      "choice4": "rnd(7.25)",
      "answer": 3
    },
    {
      "question": "How do you find the number with the highest value of x and y? in javaScript",
      "choice1": "Math.ceil(x, y)",
      "choice2": "top(x, y)",
      "choice3": "ceil(x, y)",
      "choice4": "Math.max(x, y)",
      "answer": 4
    },
    {
      "question": "How can you detect the client's browser name?",
      "choice1": "client.browserName",
      "choice2": "navigator.appName ",
      "choice3": "client.navName",
      "choice4": "browser.name",
      "answer": 2
    },
    {
      "question": "Which event occurs when the user clicks on an HTML element?",
      "choice1": "onclick",
      "choice2": "onmouseclick",
      "choice3": "onchange",
      "choice4": "onmouseover",
      "answer": 1
    },
    {
      "question": "How do you declare a JavaScript variable \"carName\"",
      "choice1": "v carName;",
      "choice2": "$carName",
      "choice3": "variable carName;",
      "choice4": "var carName;",
      "answer": 4
    },
    {
      "question": "How do you declare a JavaScript variable \"carName\"",
      "choice1": "v carName;",
      "choice2": "$carName",
      "choice3": "variable carName;",
      "choice4": "var carName;",
      "answer": 4
    },
    {
      "question": "The text in between the audio tags is:",
      "choice1": "for supporting multiple audio type",
      "choice2": "for non-supported browsers",
      "choice3": "ignored",
      "choice4": "for supported browsers",
      "answer": 2
    },
    {
      "question": "Which of the following is not an attribute of the audio element?",
      "choice1": "repeat",
      "choice2": "autoplay",
      "choice3": "src",
      "choice4": "controls",
      "answer": 1
    },
    {
      "question": "How many times can HTML5 events be fired?",
      "choice1": "Only two",
      "choice2": "One",
      "choice3": "Multiple",
      "choice4": "None",
      "answer": 3
    },
    {
      "question": "What is the output of this code?<br><i class = 'code-in-question'>function letItBe() {<br> &nbsp;&nbsp;&nbsp;  let v = 2;<br>&nbsp;&nbsp;&nbsp;if (true) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let v = 4;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(v);<br>}<br>&nbsp;&nbsp;&nbsp;console.log(v);<br>}<br>letItBe();</i>",
      "choice1": "4 4",
      "choice2": "2 2",
      "choice3": "4 2",
      "choice4": "2 4",
      "answer": 3
    },
    {
      "question": "The \"this\" keyword in a method means:",
      "choice1": "The name of the web page",
      "choice2": "The current object",
      "choice3": "The name of the given method",
      "choice4": "None of the above",
      "answer": 2
    },
    {
      "question": "In order to use the object's properties within a function, use:",
      "choice1": "The \"this\" keyword",
      "choice2": "The \"var\" keyword",
      "choice3": "Just the name of the property",
      "choice4": "The function's name",
      "answer": 1
    },
    {
      "question": "An object properties are similar to variables; methods are similar to:",
      "choice1": "conditionals",
      "choice2": "operators",
      "choice3": "functions",
      "choice4": "properties",
      "answer": 3
    },
    {
      "question": "The \"break\" statement:",
      "choice1": "Stops the whole script",
      "choice2": "Ignores the current iteration and passes to the next",
      "choice3": "Ends the execution of the loop",
      "choice4": "error",
      "answer": 2
    },
    {
      "question": "What is the output of this code?<br><i class = 'code-in-question'>var x = 0;<br>while (x<6) {<br>&nbsp;&nbsp;&nbsp;x++;<br>}<br>document.write(x);</i>",
      "choice1": "5",
      "choice2": "3",
      "choice3": "8",
      "choice4": "6",
      "answer": 4
    },
    {
      "question": "What keyword is used to end the \"else if\" statement?",
      "choice1": "else",
      "choice2": "stop",
      "choice3": "end",
      "choice4": "break",
      "answer": 1
    },
    {
      "question": "When formatting text, can you get the same result when using different tags?",
      "choice1": "yes",
      "choice2": "no",
      "choice3": "sometimes",
      "choice4": "probably",
      "answer": 2
    },
    {
        "question" :"To declare an array in Java, define the variable type with:",
        "choice1": "()",
        "choice2": "{}",
        "choice3": "<>",
        "choice4": "[]",
        "answer": 4
    },
    {
        "question" :"How do you create a method in Java?",
        "choice1": "methodName()",
        "choice2": "methodName[]",
        "choice3": "methodName.",
        "choice4": "(methodName)",
        "answer": 1
    },
    {
        "question" :"Which keyword is used to create a class in Java?",
        "choice1": "MyClass",
        "choice2": "class()",
        "choice3": "class",
        "choice4": "className",
        "answer": 3
    },
    {
        "question" :"What is the correct way to create an object called myObj of MyClass?",
        "choice1": "new myObj = MyClass();",
        "choice2": "MyClass myObj = new MyClass();",
        "choice3": "class myObj = new MyClass();",
        "choice4": "class MyClass = new myObj();",
        "answer": 2
    },
    {
        "question" :"Which method can be used to find the highest value of x and y?",
        "choice1": "Math.largest(x,y)",
        "choice2": "Math.maximum(x,y)",
        "choice3": "Math.maxNum(x,y)",
        "choice4": "Math.max(x,y)  ",
        "answer": 4
    },
    {
        "question" :"Which keyword is used to import a package from the Java API library?",
        "choice1": "import ",
        "choice2": "getlib",
        "choice3": "package",
        "choice4": "lib",
        "answer": 1
    },
    {
        "question" :"Which keyword is used to return a value inside a method?",
        "choice1": "void ",
        "choice2": "return ",
        "choice3": "get",
        "choice4": "break",
        "answer": 2
    },
    {
      "question": "What does the href attribute contain?",
      "choice1": "the URL of the page to be transferred",
      "choice2": "whether the new page should be opened in the same or a new window",
      "choice3": "the name of the web page to be transferred",
      "choice4": "the URL of current page",
      "answer": 1
    },
    {
      "question": "Choose the correct HTML tag for the largest heading:",
      "choice1": "<heading>",
      "choice2": "<h1>",
      "choice3": "<head>",
      "choice4": "<h6>",
      "answer": 2
    },
    {
      "question": "Which of these tags are all table tags?",
      "choice1": "<table><tr><tt>",
      "choice2": "<tr><tt><dd>",
      "choice3": "<table><tr><td>",
      "choice4": "<thead><body><tr>",
      "answer": 3
    },
    {
      "question": "What attribute should be used to add an image URL?",
      "choice1": "url",
      "choice2": "address",
      "choice3": "location",
      "choice4": "src",
      "answer": 4
    },
    {
      "question": "What two attributes can be used to resize images inside HTML code?",
      "choice1": "width AND height",
      "choice2": "quantity AND size",
      "choice3": "size AND width",
      "choice4": "size AND height",
      "answer": 1
    },
    {
      "question": "Which attribute of the link tag contains the URL location that you are trying to link to?",
      "choice1": "href",
      "choice2": "location",
      "choice3": "address",
      "choice4": "target",
      "answer": 1
    },
    {
      "question": "What characters does the hexadecimal system consist of?",
      "choice1": "0-9",
      "choice2": "0-z",
      "choice3": "a-z",
      "choice4": "0-f",
      "answer": 4
    },
    {
      "question": "Which color model does HTML use?",
      "choice1": "HSLA",
      "choice2": "CMYK",
      "choice3": "RGB",
      "choice4": "HSB",
      "answer": 3
    },
    {
      "question": "The header element is appropriate to use...",
      "choice1": "...inside of the head tag",
      "choice2": "...inside the footer",
      "choice3": "...at the top of the document",
      "choice4": "...inside of the body tag",
      "answer": 4
    },
    {
      "question": "The text in between the audio tags is:",
      "choice1": "for supporting multiple audio type",
      "choice2": "for non-supported browsers",
      "choice3": "ignored",
      "choice4": "for supported browsers",
      "answer": 2
    },
    {
      "question": "Which of the following is not an attribute of the audio element?",
      "choice1": "repeat",
      "choice2": "autoplay",
      "choice3": "src",
      "choice4": "controls",
      "answer": 1
    },
    {
      "question": "How many times can HTML5 events be fired?",
      "choice1": "Only two",
      "choice2": "One",
      "choice3": "Multiple",
      "choice4": "None",
      "answer": 3
    },
    {
      "question": "Which of the following is not a supported type for the input tag?",
      "choice1": "hidden",
      "choice2": "planet",
      "choice3": "tel",
      "choice4": "url",
      "answer": 2
    },
    {
        "question" :"What is printed by the Python code?<br><i class = 'code-in-question'>print(2 * ('No' + 3*'!'))</i>",
        "choice1": "No!!!No!",
        "choice2": "No!No!No!",
        "choice3": "No!!!No!!!",
        "choice4": "Nono!!!",
        "answer": 3
    },
    {
        "question" :"What is printed by the Python code?<br><i class = 'code-in-question'>x = 5<br>y = x + 3<br>x = x - 1<br>z = 10<br>x = x + z<br>print('x: {}, y: {}, z: {}'.format(x, y, z))</i>",
        "choice1": "x: 12, y: 6, z: 5",
        "choice2": "x: 14, y: 8, z: 10",
        "choice3": "x: 4, y: 8, z: -10",
        "choice4": "x: 4, y: 10, z: 5",
        "answer": 2
    },
    {
        "question" :"What value is stored in the result variable?<br><i class = 'code-in-question'>int x = 8, y = 5; <br> int result = x%y;</i>",
        "choice1": "1.6",
        "choice2": "0.625",
        "choice3": "3",
        "choice4": "1",
        "answer": 3
    },
    {
        "question" :"Fill in the blanks to print 11.<br><i class = 'code-in-question'>int a = 10;<br> __a; <br> System.out.println(a);</i>",
        "choice1": "++",
        "choice2": "+",
        "choice3": "--",
        "choice4": "-",
        "answer": 1
    },
    {
        "question" :"Fill in the missing A and B of the following code to print 13.<br><i class = 'code-in-question'>int x = 25;<br>int y;<br> y = A-12; <br> System.out.println(B);</i>",
        "choice1": "A = y, B = y",
        "choice2": "A = x, B = x",
        "choice3": "A = 13, B = x",
        "choice4": "A = x, B = y",
        "answer": 4
    },
    {
        "question" :"What is printed by the Python code?<br><i class = 'code-in-question'>print(14//4, 14%4, 14.0/4))</i>",
        "choice1": "3, 2, 3.5",
        "choice2": "1, 4, 2",
        "choice3": "0.4, 2, 3.5",
        "choice4": "error",
        "answer": 1
    },
    {
        "question" :"What is printed by the Python code?<br><i class = 'code-in-question'>print(2*'No' + 3*'!')</i>",
        "choice1": "No!!!",
        "choice2": "Nono!!",
        "choice3": "No!No!!",
        "choice4": "Nono!!!",
        "answer": 4
    },
    {
        "question" :"What is printed by the Python code?<br><i class = 'code-in-question'>x = 2.5679<br>y = 9.0<br>print('Answers {:.3f} and {:.3f}'.format(x, y))</i>",
        "choice1": "Answers 2.567 and 9.000",
        "choice2": "Answers 2.568 and 9.000",
        "choice3": "Answers 2.5678 and 9.0",
        "choice4": "Answers 2.568 and 9.00",
        "answer": 2
    },
    {
      "question": "The aside element is used to define:",
      "choice1": "secondary content",
      "choice2": "comments",
      "choice3": "a description of a text",
      "choice4": "main content",
      "answer": 1
    },
    {
        "question" :"Make the element with the id=\"mystyle\" disappear:<br><i class = 'code-in-question'> #mystyle{<br> &nbsp;&nbsp;&nbsp;   display:_______; <br>}</i>",
        "choice1": "block",
        "choice2": "none",
        "choice3": "blank",
        "choice4": "invisible",
        "answer": 2
    },
    {
        "question" :"How do you create a variable with the floating number 2.8?",
        "choice1": "x = 2.8",
        "choice2": "x = float(2.8)",
        "choice3": "Both A and B answers are correct",
        "choice4": "Both A and B answers are not correct ",
        "answer": 3
    },
    {
        "question" :"What is the correct syntax to output the type of a variable or object in Python?",
        "choice1": "print(type(x))",
        "choice2": "print(typeof(x))",
        "choice3": "print(typeOf(x))",
        "choice4": "print(typeof x)",
        "answer": 1
    },
    {
        "question" :"What is the correct way to create a function in Python?",
        "choice1": "function myfunction():",
        "choice2": "def myFunction():",
        "choice3": "create myFunction():",
        "choice4": "myFunction = () =>{",
        "answer": 2
    },
    {
        "question" :"How do you create a variable with the numeric value 5?",
        "choice1": "int x = 5;",
        "choice2": "num x = 5",
        "choice3": "Int x = 5;",
        "choice4": "x = 5;",
        "answer": 1
    },
    {
        "question" :"How do you create a variable with the floating number 2.8?",
        "choice1": "x = 2.8f;",
        "choice2": "int x = 2.8f;",
        "choice3": "float x = 2.8f; ",
        "choice4": "byte x = 2.8f;",
        "answer": 3
    },
    {
        "question" :"Which method can be used to find the length of a string?",
        "choice1": "getLength()",
        "choice2": "length()",
        "choice3": "getSize()",
        "choice4": "len()",
        "answer": 2
    },
    {
        "question" :"What is a correct syntax to return the first character in a string?",
        "choice1": "x = sub(\"Hello\", 0, 1)",
        "choice2": "x = \"Hello\".sub(0, 1)",
        "choice3": "\"Hello\".get[0]",
        "choice4": "x = \"Hello\"[0]",
        "answer": 4
    },
    {
        "question" :"Why is the \"static\" value used in positioning?",
        "choice1": "To make the element unmovable",
        "choice2": "To prohibit the styling of the element",
        "choice3": "To make the element run in the natural order of the page",
        "choice4": "To make the element static",
        "answer": 3
    },
    {
        "question" :"Select from the options below to fix the paragraph to 100px from the top and 50px from the left:<br><i class = 'code-in-question'> p{<br> &nbsp;&nbsp;&nbsp; _____: fixed;<br>&nbsp;&nbsp;&nbsp;_____: 50px;<br>&nbsp;&nbsp;&nbsp;_____: 100px; <br>}</i>",
        "choice1": "Position, Left, Top",
        "choice2": "Top, Right, Left",
        "choice3": "Top, Left, Right",
        "choice4": "Position, Top, Left",
        "answer": 1
    },
    {
        "question" :"Which access modifier explicitly says that a method or variable of an object can be accessed by code from outside of the class of that object?",
        "choice1": "default",
        "choice2": "public",
        "choice3": "private",
        "choice4": "static",
        "answer": 2
    }
]