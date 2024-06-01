export function collaboration(active) {
  let title;
  let details;

  switch (active) {
    case "passion":
      title = "Our Passion";
      details =
        "At The Panther Studio, our passion for designing and developing websites drives every project we undertake. We are dedicated to crafting unique, user-centric digital experiences that exceed expectations and leave a lasting impact.";
      break;
    case "commitment":
      title = "Our Commitment";
      details =
        "The Panther Studio's foundation lies in our unwavering dedication to grasp the distinct requirements of each client. We prioritize forging enduring partnerships based on trust and shared advancement..";
      break;
    case "quality":
      title = "Our Quality";
      details =
        "At The Panther Studio, we uphold that excellence is the result of meticulous attention to detail. Every code line, pixel, and strategy undergoes rigorous quality assurance, elevating projects from good to outstanding.";
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
