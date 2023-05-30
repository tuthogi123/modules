{
    "_id"; ObjectId("user_id"),
    "username"; "john_doe",
    "email"; "john@example.com",
    "password";"hashed_password",
    "created_at";ISODate("2023-05-01T12:00:00Z"),
    "updated_at"; ISODate("2023-05-01T12:00:00Z")
  };
  

  {
    "_id"; ObjectId("post_id"),
    "title"; "Introduction to MongoDB",
    "content": "MongoDB is a flexible NoSQL database...",
    "author": ObjectId("user_id"),
    "created_at": ISODate("2023-05-02T09:30:00Z"),
    "updated_at": ISODate("2023-05-02T11:15:00Z")
  };



  {
    "_id": ObjectId("comment_id"),
    "post": ObjectId("post_id"),
    "user": ObjectId("user_id"),
    "content": "Great article! I learned a lot.",
    "created_at": ISODate("2023-05-03T14:20:00Z"),
    "updated_at": ISODate("2023-05-03T14:20:00Z")
  };
  
  