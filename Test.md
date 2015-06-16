# Question 1.
 
* We are going to implement a simple iterator for JavaScript.
* Please implement a class that has the following interface.

## Requirements:
* A constructor that takes an array.
 
## Methods:
** hasNext()
If the class can iterate the array further, it will return true.
If a call to next() will fail, it will return false.
 
### next()
This moves the iterator one spot and returns the new value.
 
### current()
This will return the current value pointed to by the iterator.
 
### tag()
This function will return a function, this function when invoked will return 
the current value when the tag function was invoked. 
 
### reverse() 
This function will reverse the loaded array. After this function is invoked a 
call to current will return the same value it would have before the call.
For example:

```
1 2 3
 
current -> 2
reverse -> (internal state is now 3 2 1)
current -> 2
```

# Question 2.
Write a script that will load from the first div with the class section into the iterator class you just created.

You are given the following html page.

```
<html>
<head></head>
<body>
<div class="section">
    1 2 3 4 5 6
</div>
<div class="section">
    6 5 4 3 2 1
</div>
</body>
</html>
```

# Question 3.
Describe your favorite feature in your favorite website or application.
What is it about this feature that makes it important to you?
What are some things that make this feature unique? What is something
you don't like about this feature? How would you improve this?
====

I am a huge fan of Soundcloud. I have a great respect for their vision and product, to give the ability for everyone to instantly discover, consume and distribute brand new music through an web application. The application allows for a user to "follow" the other users and access a "feed" of music that is created chronologically from content that followed users have posted. This means that after setting up a base of followed users/artists you can very quickly have access to newest tracks and albums around.

I love that the application works well over many browsers and mobile devices (with native app support) and I love that much of the complexity of the application is hidden from the user requiring little input from a user to begin and start enjoying music. 

I personally enjoy listening to an eccelectic variety of different kinds of music however Soundcloud only allows for the creation of one "feed" per user account. This means that all of content from all of my followed users ends up in the same feed, in chronological order. Often I find that when I sit down to listen to some music I am not in the mood to listen to every type of music, but rather a specific subset of my personal tastes. I would love to see this feature improved by adding a subfeature that would allow users to create their own custom "feeds" by grouping selected artists into buckets or groups. I could for example create "Oliver's Hip Hop feed" and add only the hip hop artists I follow and another for "Oliver's Podcasts" adding the various news and entertainment podcasts. 

This could likely be done quite simply by allowing for a user to use the Soundcloud application to load a specific "feed" which would be a JSON object containing a list of artists or followed users to include content from. This object could also hold some other settings / metadata such as the amount of times a user has used this "feed", amount of minutes spent listening to this feed and even a unique identifier of some sort so that this "feed" object could be shared and copied to other users accounts that might want the same feed. This would not only provide a better user experience for users such as myself that follow a wide array of artists but would also provide more metrics for Soundcloud in the form of understanding what artists are most frequently grouped with other artists, sponsored "feeds" (for example record labels could group several of their signed artists into a single feed without needing to repost that artists content to a separate account representing the entire label) and more user engagement from the sharing of user generated feeds. The functionality to build playlists already exists so that can likely be leveraged to make the level of effort quite low.