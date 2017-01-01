# noticeboard
This is my implementation of the ethcore javascript file found here: https://ethcore.io/javascript_advert.js

During development I decided to go with a version which parsed it all recursively as opposed to directly referencing parts and then further check the data to make it more appealing. However I quickly learned that this decision made
the rest of the code more complex. Especially as the map key is never given to check what the data is from, which did make it more difficult to later decide how to display it. This could have easily been overcome by including it in
the function (handleType and similar), however I decided against it to remove the requirement of knowing the key names. As it stands currently all of the JSON keys should be able to changed within the job variable without any issues.
Although in a realistic example the keys should not change, but I was commited to making that a possibility of easily adding multiple fields if required without having to change the code. (With the exception of custom data format).

The flow of the application is mostly using the function handleType, which decides what type of data is in that JSON variable. Then it is passed to the according function such as handleBoolean should it be a boolean type. There is
also the function handleList which is a little more confusing and is used for both number and key lists. It iterates through the list using handleType which allows it to fully process all of the data, which could be another list.
There are also functions such as handleStringExtra, this is to handle the data is a more appealing way. For example to display the salery information so it can display it in a single string. This function uses various other
functions such as the custom sprintf String class addition. It works differently but allows a map to be used to pull data into a string in a familar format to sprintf. There is also the function to add the correct currency symbol
which is currently a list of: USD, EUR, GBP. Which those are the most likely to be used, however more could easily be added along with their html code which would be supported should the currency variable be different.

I will move onto the more interesting part of how I decided to display the data in an unusual way: which is being a noticeboard with notes. While I was developing it I had it in multiple boxes each part for a while and I thought 
about just making a site with boxes, however due to the way it is processed there are very long boxes which would have looked strange, so it would of required to resize them into wider but shorter, or to have put them into two boxes.
But the main reason for the look is that I wanted it to be different and feel more realistic than just a website, so my idea was to look like more like a real life image rather than a website. As well as do something a little different
and due to my first unusual approach of dynamically parsing the data from the job JSON I thought it only made sense to put unsual with unsual. I think it turned out well after the various tweaks and background.

The animations was something I did because I felt like the notes were a little hard to read if they were rotated and under another. This is not so much the case now as they have been moved, but still happens with random rotation.
It was also to demonstrate a feature of CSS3, along with transform and I feel it just adds a little more life into the page and stands out. They also revert their rotation which was a nice unintended feature I instantly loved when
I saw it, so it was left in.

There are a lot of extra features I added, some are disabled by default but can be easily enabled by modifying the config JSON, such as: random note colors, random rotation, clock format, thousand seperator, note colors, icons. I
also feel that due to how easily it would be to add those features as a majority of the code was made to be improved I would add them. The note positions and colors are manually set in javascript in the placeNotes function. A lot
of the features are related to making the output data look good, this was important as just having plain numbers or lists would look very unappealing. One of the advantages of doing it this way is that similar data can be done at
the same time, and additional data such as multiple min max fields will be handled automatically.

There is a long list called stringToPretty, this is basically just a list of what to turn the out data into as otherwise it would just be a lowercase string. There was an easy change in makePretty which made the first letter capital,
which did make a fair amount of strings require no additional changes, however for a large amount this was not the case. There is similar on the actual value rather than the key, for example putting a space at every capital, which also
helped as there are some values such as "NotYetDecided" which looks better like "Not Yet Decided".

The icons are also there which improve the look, the reason for these were that I wanted it to feel more lively and immersive and just give it that extra touch. They are stored inside the images/icons folder, and were found online
for free, I intentionally avoided the colourful ones to avoid too much attention being spent on them and making it feel a little more formal. I do not think that them having colour would have hurt, but just didn't suit what I was going for.

Something which made testing easy initally was just using the handleType function directly on the job variable (with just a single box). This allowed an easy way to see how it was handling each value to make sure that handleType and
the other handle functions were working as intended as it made it all into lists. This is left in commented out in the processJs main function.

That is most of my thoughts, I think it went well I did spend more time than I expected to. I believe this is mostly due to that fact that I went down a different route than most would expect. But I am happy with the final product.
I have done some tests on it to make sure it is compactiable with browsers and it appears fine in both Chrome and Firefox, most of the HTML code is generated through javascript so there should be little issues there. I did think about
adding a little game to it in which the notes had a pin which could be removed allowing the notes to be moved, or placed to pin them. However it would add very little actual use as it would only obsure the data displayed. I do not regret
doing it the way I did, I think the added effort of tweaking their positions, backgrounds, animations, code has made it all work together and has come together well.