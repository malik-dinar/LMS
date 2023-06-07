import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { baseUrl } from "../../utils/constant";

function Conversation({ conversation , currentUser, student }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const teacherId = conversation.members.find((m)=> m!== currentUser);
        (async()=>{
            try{
              if(student){
                const res = await axios(`${baseUrl}/tutors?userId=${teacherId}`);
                setUser(res.data.tutorname)
              }else{
                const res = await axios(`${baseUrl}/users?userId=${teacherId}`);
                setUser(res.data.username)
              }
               
            } catch(err){
                console.log(err);
            }
        })()
    }, [conversation , currentUser])
    

  return (
    <div class="px-3 flex items-center bg-grey-light cursor-pointer">
      <div className="hidden md:block">
        <img
          className="h-12 w-12 rounded-full"
          src="https://res.cloudinary.com/dd8vgf5yn/image/upload/v1684140052/Tequico_Create_an_image_that_celebrates_and_honors_Latino_teach_5eee5c40-c29f-4c67-9ed3-7cf9825cced5_vv0r2e.png"
        />
      </div>
      <div class="ml-4 flex-1 border-b border-grey-lighter py-4">
        <div class="flex items-bottom justify-between">
          <p class="text-grey-darkest">{user}</p>
          {/* <p class="text-xs text-grey-darkest">12:45 pm</p> */}
        </div>
        <p class="text-grey-dark mt-1 text-sm hidden md:block">
          Get {user} to clear the douts..!
        </p>
      </div>
    </div>
  );
}

export default Conversation;
