# Swap Google Profiles (within current Webpage)
This is an inject used for swapping between logged-in google accounts within the page currently being visted.

Click the button, and watch it cycle through the current profiles that are logged in.

**Setup**
- Add each profile's ID-number to the first array.
- Add to bookmarks bar.
- Click to use.

*The array is the first variable declared. Each profile is separated by a comma within the square brackets.*

```js
1: javascript:void function(){var a=[HERE, HERE, AND HERE] . . .

```
*Example of profiles "0", "1" and profile "3" being used:*
```js
1: javascript:void function(){var a=[0, 1, 3] . . .

```



Changelog
----
First upload.





Planned (Future) Changes
----
 - Properly annotated (commented) lines of code.
 - Auto detect all signed in users.



