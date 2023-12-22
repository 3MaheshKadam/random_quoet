import React, { useState, useEffect } from "react";
import relode from "./img/relode.png";

const View = () => {
  const [quoets, setQuoets] = useState([]);

  async function loadQuoets() {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      console.log("API Response:", response);
      console.log("Quoets Data:", data);

      setQuoets(data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  }

  useEffect(() => {
    loadQuoets();
  }, []); // Empty dependency array ensures this effect runs once on mount

  const [quoet, setQuoet] = useState({
    text: "I'am not fighting because i want to win I'm fighting because I have to win!!",
    author: "Ichigo Kurosaki",
  });

  const random = () => {
    if (quoets.length > 0) {
      const randomIndex = Math.floor(Math.random() * quoets.length);
      setQuoet(quoets[randomIndex]);
    } else {
      // Provide a default quote if quoets is empty
      setQuoet({
        text: "No quotes available.",
        author: "Unknown",
      });
    }
  };

  return (
    <div className="container">
      <div className="text">
        <h2>Quoet :</h2>
        <p>{quoet.text}</p>
        <div className="line">
          <div className="footer">
            <div className="img">
              <img onClick={random} src={relode} alt="" height="30" />
            </div>

            <div className="autor_name">
              <h3>-{quoet.author}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
