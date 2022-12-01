import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    setMeme((prevValue) => {
      const { name, value } = event.target;
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="flex justify-center items-center flex-col gap-4 h-4/5">
        <div className="flex gap-6">
          <input
            type="text"
            placeholder="Top text"
            className="rounded p-1 border"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="rounded p-1 border"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </div>

        <button className="bg-black text-white rounded p-2" onClick={getMemeImage}>
          Not the right image? Click here.
        </button>
        <div className="meme">
          <img src={meme.randomImage} className="h-full rounded-2xl image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
