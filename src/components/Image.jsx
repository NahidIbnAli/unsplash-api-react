import { format } from "date-fns";
import React from "react";

const Image = (props) => {
  return (
    <article className="bg-white shadow-md rounded-3xl p-5">
      <img
        src={props.urls.full}
        alt=""
        loading="lazy"
        className="w-full h-52 object-cover"
      />
      <div className="flex justify-between items-center pt-3">
        <div className="flex items-center gap-3">
          <img
            src={props.user.profile_image.large}
            alt=""
            className="w-12 rounded-full shadow"
          />
          <ul className="text-sm">
            <li className="font-medium">{props.user.name}</li>
            <li>{format(new Date(props.created_at), "dd MMM yyyy")}</li>
          </ul>
        </div>

        <div>
          <ul className="text-sm">
            <li>
              <a
                href={`https://instagram.com/${props.user.instagram_username}`}
              >
                Likes
              </a>
            </li>
            <li className="text-center"> {props.likes}</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Image;
