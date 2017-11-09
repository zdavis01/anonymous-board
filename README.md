------ This is a project by Zach Davis for General Assembly JavaScript Development -----


    This project is an anonymous message board that allows users to post, like, dislike and delete messages anonymously.
    It also allows the user to sort messages by likes or by the date the message was published. It also allows a user to
    search through existing messages for a specific term using fuse - fuzzy search. 
    
    first things first, lets get it working in the browser


   Opening the submission in a browser via a terminal.

   Clone the repo onto your machine and navigate to the anonymous-board directory.
   Once here (assuming you have npm installed) start npm from the command line  using "npm start".
   
   Great work! Now a new window should open in the browser and you can view my project. If not you may need to navigate to 
   your local host 8080 or 3000.
   
   I followed the methods used in class to build the required features. I worked closley with My instructor on how to order the    messages by the number of likes. I researched how to generate a time stamp and created a property of the message object
   that would store this, I then used a similar approach to the order by like bonus feature to create a chronological ordering.
   
   The Fuzzy search was a bit more involved, mainly because a few of the resources I initially found online were broken.
   The package I ended up using had horrible documentation and at this point I was having to create so many components 
   transfering data from one to another bacame incredibly difficult. Eventually I wired it up right and it worked,
   I could output the results to the console.
   
   Getting them to the console was difficult but getting them to the browser was seemingy easy and only required a couple
   of tries. Making them useful to the user in the browser was the most difficult thing for me.
   
   What I wanted to do was create a component for messageList and one for searchResults, If a user clicked the search button
   I wanted to only show the search results. I also wanted to display a message that would inform the user if there were no
   results for what they were searching for. I wanted to also indicate to the user how many results there were. I think the
   user would have found it useful if the results were highlighted with the term they were searching - fuzzy search doesn't
   look through a collection of things for a term it almost finds things that relate to the term in multiple ways 
   which I learnt while configuring the options for it, in some instances you might get results back that at a first 
   glance make no sense but they do.
   
   I guess what I'm curious about now is using logic with components e.g If user cicks search switch MessageList 
   to MessageResult, if resultsArray.length == 0 display no results message.
   
   I also found it kind of irritating using bootstrap and not knowing how to override css properties which is partially
   why the styling is a mess. 
   
   I also don't think commenting in the code is that neccessary. 
   
   Really good project. 
   
  
   
   
   
