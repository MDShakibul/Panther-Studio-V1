export function collaboration(active) {
  let title;
  let details;

  switch (active) {
    case "passion":
      title = "Our Passion";
      details =
        "At Panther, our passion for designing and developing websites drives every project we undertake. We are dedicated to crafting unique, user-centric digital experiences that exceed expectations and leave a lasting impact.";
      break;
    case "commitment":
      title = "Our Commitment";
      details =
        "At Panther, our commitment to excellence ensures that every project is handled with the utmost care and professionalism. We strive to deliver top-quality digital solutions that meet and exceed client expectations.";
      break;
    case "quality":
      title = "Our Quality";
      details =
        "At Panther, our unwavering focus on quality is evident in every aspect of our work. We aim to deliver superior websites that not only look great but also perform flawlessly.";
      break;
    default:
      title = "Our Focus";
      details =
        "At Panther, we are dedicated to delivering exceptional digital experiences through a focus on passion, commitment, and quality.";
  }

  return {
    title,
    details,
  };
}
