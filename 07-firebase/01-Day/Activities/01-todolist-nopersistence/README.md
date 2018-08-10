# To-Do List (no persistence)

## File

* [`1-student-do-todolist`](Unsolved/1-student-do-todolist.html)

## Instruction

* Assign one student of the three of you to be the group's typist. All others in the group will help supervise, offer guidance, and help catch bugs that the group's typist might not be able to catch. Throughout this activity (and many of today's activities) you will be switching roles with those in your group.

* Then create a Basic To-Do application using the `1-student-do-todolist.html` as a starting point. The HTML is already created for you so you will only have to fill in the javascript sections where there are large blanks. Alternatively, if you are feeling bold and capable, your group may code it from scratch without the use of the base code provided.

* **HINT:** Each of the buttons and text elements should have a dynamically created identifier or data attribute that differentiates one item on the list from another. You should use these attributes to close out the appropriate items when you click on the "X" beside them.



<!DOCTYPE html>

<html lang="en-us">

  <head>

    <meta charset="UTF-8">
    <title>To Do App!</title>

    <style>
      #todo-item {
        font-weight: 700;
        font-size: 2em;
      }
    </style>
  </head>

  <body>

    <!-- Title -->
    <h1>My To Do's!</h1>

    <!-- Input Form -->
    <form>
      <span id="todo-item">To Do Item: <input id="to-do" type="text" ><input id="add-to-do" value="Add Item" type="submit"></span>
    </form>

    <hr>

    <!-- To-Do List -->
    <div id="to-dos"></div>

    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Script -->



  </body>

</html>