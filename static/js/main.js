$(function slide() {
  let author = ["Rijan Neupane", "Aakash Thapa", "Donald Trump", "K.P Oli"];
  let title = [
    "Trustable Content",
    "Make as a Student",
    "Learn by Doing",
    "Perfect Place for learning",
  ];
  let content = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum ducimus rerum laborum eos nulla.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum ducimus rerum laborum eos nulla.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum ducimus rerum laborum eos nulla.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum ducimus rerum laborum eos nulla.",
  ];
  let bgcolor = [
    "linear-gradient(200deg, #3a62e7, #92abff)",
    " linear-gradient(200deg, #ff6021, #fdad7f)",
    "linear-gradient(200deg, #ff21da, #ea4cff)",
    "linear-gradient(200deg, #21e2a2, #2e8f6f)",
  ];

  // Buttons
  let btn1 = $(".whyUs .container .contentCards .textContent .button .btn1");
  let btn2 = $(".whyUs .container .contentCards .textContent .button .btn2");
  // cards content
  let contenttitle = $(
    ".whyUs .container .contentCards .card .cardcontainer .cardTitle p"
  );
  let innercontent = $(
    ".whyUs .container .contentCards .card .cardcontainer .content p"
  );
  let innerauthor = $(
    ".whyUs .container .contentCards .card .cardcontainer .cardCreatorDetail h2"
  );
  let card = $(".whyUs .container .contentCards .card");
  count = 1;
  btn1.click(() => {
    contenttitle.html(title[count]);
    innercontent.html(content[count]);
    innerauthor.html(author[count]);
    card.css({
      background: bgcolor[count],
    });
    count -= 1;
    if (count < 0) {
      count = 0;
    }
  });

  btn2.click(() => {
    contenttitle.html(title[count]);
    innercontent.html(content[count]);
    innerauthor.html(author[count]);

    count += 1;
    card.css({
      background: bgcolor[count],
    });
    if (count > title.length) {
      count = title.length;
    }
  });
});
