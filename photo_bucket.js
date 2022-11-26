"use strict";
/* 
      Project to move images between a photo bucket and photo list.
      Author: Nicholas Catalan
      Date:   11/06/2022 
*/

let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++){
      images[i].onclick = function(){
            if (this.parentElement.id == "photo_bucket"){
                  // console.log("photobucket")   
                let newItem = document.createElement("li");
                photoList.append(newItem);
                newItem.appendChild(this)  
            }
            else{
                  let oldItem = this.parentElement;
                  photoBucket.appendChild(this);
                  oldItem.parentElement.removeChild(oldItem);
            }
      }
}