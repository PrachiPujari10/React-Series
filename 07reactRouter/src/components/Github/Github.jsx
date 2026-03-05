import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="flex flex-col items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>Github followers: {data.followers}</p>

      <img
        src={data.avatar_url}
        alt="Git picture"
        width={300}
        className="mt-4 rounded-full"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/PrachiPujari10");
  return response.json();
};