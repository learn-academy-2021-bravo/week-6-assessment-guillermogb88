# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:you would add the key which states the number of sightings to the sightings model.

  Researched answer:
 i wasnt sure how to look this up? 


2. Which RESTful routes must always be passed params? Why?

  Your answer: patch and delete to make it more dynamic 

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: rails c: gets you into the console,   rails new app_name -d postgresql -T: creats new app deletes old database and creates new one, 
  rails db create: creates empty data base. 

  Researched answer:
  rails s: starts your rails server. 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students = gets all the strudents in the db     

method="GET"    /students/2= gets student number 2 in db  

method="GET"    /students/new = create new student 

method="GET"    /students/edit/2 = change student 2 and save it to the database  

method="POST"   /students/       

method="PATCH"  /students/2 = change and save student two    

method="DELETE" /students/2 = erases student 2   



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.
 

 1. as a user i can create a to do list with :task, :time consumption, :day it needs to be complete 
 
 2. as a consumer i can creat a list of tasks that need to be done 

 3. as a consumer i can update any of the task

 4. as a consumer i can delete any of the tasks from the database 

 5. as a comsumer i can create a taks completed 

 6. as a cosumer i cant create a taks with date and time it was completed 

 7. as a consumer i can update the completition date and time in the db

 8. as a consumer i can delete the task completion from the db

 9. as a consumer i can update the task competion status in the db 

 10. as a consumer i can see a taks with the date and time of comppletion 
