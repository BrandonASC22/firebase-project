/**
 * @TODO get a reference to the Firebase Database object
 */
 const database = firebase.database().ref();

 /**
  * @TODO get const references to the following elements:
  *      - div with id #all-blogs
  *      - input with id #username
  *      - input with id #blog
  *      - button with id #send-btn and the updateDB
  *        function as an onclick event handler
  */
 const allBlogs = document.querySelector("#all-blogs");
 const usernameElem = document.querySelector("#username");
 const blogElem = document.querySelector("#blog");
 const sendBtn = document.querySelector("#send-btn");

 function updateDB(event) {
    event.preventDefault();

    let data = {
        USERNAME: usernameElem.value,
        BLOG: blogElem.value
    };

    console.log(data);

    database.push(data);

    blogElem.value = "";
}
 
 /**
  * @TODO add the addBlogToBoard function as an event
  * handler for the "child_added" event on the database
  * object
  */
 database.on("child_added", addBlogToBoard);
 
 /**
  * @TODO create a function called addBlogToBoard that
  * takes one parameter rowData which:
  *      - console.logs the data within rowData
  *      - creates a new HTML element for a single blog
  *        containing the appropriate data
  *      - appends this HTML to the div with id
  *        #all-blogs (we should have a reference already!)
  */
 function addBlogToBoard(rowData) {
     // print the data snapshot received
     console.log(rowData);
 
     // get the acutal data as a JSON object
     let data = rowData.val();
     
     // print the JSON data
     console.log("RECEIVED FROM DATABASE:", data);
 
     // make a single blog element
     let singleBlog = makeSingleBlogHTML(data.USERNAME, data.BLOG);
 
     // append this to #all-blogs
     allBlogs.append(singleBlog);
 }