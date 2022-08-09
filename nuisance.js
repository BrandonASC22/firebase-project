  sendBtn.onclick = updateDB;
 
  /**
   * @TODO create a function called updateDB which takes
   * one parameter, the event, that:
   *      - gets the values of the input elements and stores
   *        the data in a temporary object with the keys USERNAME
   *        and BLOG
   *      - console.logs the object above
   *      - writes this object to the database
   *      - resets the value of #blog input element
   */
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
  * @TODO create a function called makeSingleBlogHTML which takes
  * two parameters, usernameTxt and blogTxt, that:
  *      - creates a parent div with the class .single-blog
  * 
  *      - creates a p tag with the class .single-blog-username
  *      - update the innerHTML of this p to be the username 
  *        provided in the parameter object
  *      - appends this p tag to the parent div
  * 
  *      - creates a p tag
  *      - updates the innerHTML of this p to be the blog
  *        text provided in the parameter object
  *      - appends this p tag to the parent div
  * 
  *      - returns the parent div
  */
  function makeSingleBlogHTML(usernameTxt, blogTxt) {
    // create a parent div
    let parentDiv = document.createElement("div");
    // add .single-blog class
    parentDiv.setAttribute("class", "single-blog");

    // creat a p tag
    let usernameP = document.createElement('p');
    // add .single-blog-username class
    usernameP.classList.add("single-blog-username");
    // update innerHTMl of this p
    usernameP.innerHTML = usernameTxt + ":";
    // append p tag to parentDiv
    parentDiv.append(usernameP);

    // create a p tag
    let blogP = document.createElement('p');
    //update the innerHTML to the appropriate data
    blogP.innerHTML = blogTxt;
    //append this blog to the parentDiv
    parentDiv.append(blogP);

    return parentDiv;
}