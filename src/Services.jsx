import React from "react";

const Services = () => {
  const data = [
    {
      icon: "img/smart-protect-1.jpg",
      title: "Anti-spam",
      text: "Lorem ipsum dolor sit amet porro his no his deleniti",
      delay: 0
    },
    {
      icon: "img/smart-protect-2.jpg",
      title: "Phishing Detect",
      text: "Ne error antiopam usu. Sed vocen concludaturque ea",
      delay: 200
    },
    {
      icon: "img/smart-protect-3.jpg",
      title: "Smart Scan",
      text: "Et usu ocurreret elaboraret doctus prodesse assueverit.",
      delay: 400
    },
  ];

  return (
    <div class="container my-5 py-2">
      <h2 class="text-center font-weight-bold my-5">
        Smartest protection for your site
      </h2>
      <div class="row">
        {data.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay={item.delay}
            data-aos-duration="1000"
            data-aos-once="true"
            class="col-md-4 text-center"
          >
            <img
              src={item.icon}
              alt="Anti-spam"
              class="mx-auto"
            />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
