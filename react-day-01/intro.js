// how ui is formed?

// HTML file is received, render engine parses the html and makes a dom tree(all html elements remain there as nodes)
// same story for css,cssom makes style rules
// they are pressed into "attachment"
// attachment makes a "render tree"
// render tree goes through layout, and gets attached to the ui according to the coordinates
// paints the dom

// when we edit something, the dom tree gets repainted

// this process is slow, especially for spa applications, where the whole dom is maintained in a single page (show gmail/angular docs)
// if we perform too many dom operations, this is really costly

// that is why, we try to change dom as lesser number of times as possible, we try to do batch update, do a number of tasks and then update the dom tree
// so that the repain process is low

// here comes react

// react makes its own dom, other than the actual dom from brow3ser, so that it can change it however it wants. it can use javascript to change the dom

// react just keeps track of two trees, and puts a diffing algortihm between them, when it finds difference in its trees, it starts the diffing algorithm which
// changes the old tree and makes changes, not making a new tree



// what is spa?