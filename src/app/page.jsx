"use client";

import React, { useState } from "react";

const HomePage = () => {
  const [file, setfile] = useState(null);

  return (
    <div>
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();

          const form = new FormData();
          form.set("file", file);

          if (!file) return;
          const a = await fetch("/api/upload", {
            method: "POST",
            body: form,
          });
          const b = await a.json();
          console.log(b);
        }}
      >
        <label htmlFor="">Upload file</label>
        <input
          type="file"
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
        />

        <button className="bg-blue-600">Upload</button>
      </form>

      {file && <img src={URL.createObjectURL(file)} alt="" />}
    </div>
  );
};

export default HomePage;
