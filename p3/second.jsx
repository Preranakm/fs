import React from "react";
import First from "./first.jsx";
import "./first.css";

function Second(){

  const blogPosts = [
    {
      title:"Margherita Pizza",
      body:"Margherita pizza is a classic Italian dish made with fresh tomato sauce, mozzarella cheese and basil.",
      author:"John",
      imgUrl:"https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
    },

    {
      title:"Masala Dosa",
      body:"Masala dosa is a South Indian dish made from fermented batter with crispy texture and potato filling.",
      author:"Ravi",
      imgUrl:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },

    {
      title:"Chocolate Cake",
      body:"Chocolate cake is a delicious dessert which is soft, sweet and perfect for celebrations.",
      author:"Anu",
      imgUrl:"https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
    }
  ];


  return(
    <div className="container">

      <h1>🍴 Food Blog</h1>

      <div className="posts-container">

        {blogPosts.map((post,index)=>(
          <First
            key={index}
            title={post.title}
            body={post.body}
            imgUrl={post.imgUrl}
            author={post.author}
          />
        ))}

      </div>

    </div>
  );
}

export default Second;