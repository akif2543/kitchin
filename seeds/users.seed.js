require("dotenv").config();
const seeder = require("mongoose-seed");
const bcrypt = require("bcrypt");

const db = process.env.MONGO_URI;

const hashPassword = (password) => bcrypt.hashSync(password, 10);

const users = [
  {
    model: "User",
    documents: [
      {
        firstName: "Mehdi",
        lastName: "Ali",
        handle: "mehdi",
        email: "mehdi@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/eFVxDij.jpg",
        location: "Dubai, UAE",
        occupation: "Marketing",
        bio:
          "Born in Delhi, but Dubai is home. I can make all kinds of traditional Indian dishes, and am hoping to learn all kinds of Middle Eastern cooking.",
        cuisine: "Indian",
        favoriteFood: "Shawarma",
      },
      {
        firstName: "Arif",
        lastName: "Khan",
        handle: "akhan",
        email: "arif@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/olljGck.jpg",
        location: "Dubai, UAE",
        cuisine: "Afghani",
      },
      {
        firstName: "Maria",
        lastName: "Fuentes",
        handle: "mfofficial",
        email: "mf@email.com",
        password: hashPassword("password"),
      },
      {
        firstName: "Margaret",
        lastName: "Engels",
        handle: "margsnengels",
        email: "margs@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/evqtRLz.jpg",
        location: "Dubai, UAE",
        occupation: "Developer",
        bio:
          "Full stack developer based in Dubai. Always on the hunt for new and interesting food!",
        cuisine: "German",
        favoriteFood: "Shiro and injera",
      },
      {
        firstName: "Fred",
        lastName: "Saito",
        handle: "saitosan",
        email: "saito@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/RMmQNK1.jpg",
        location: "Dubai, UAE",
        occupation: "Accountant",
        bio: "Hot pot enthusiast.",
        cuisine: "Japanese",
        favoriteFood: "Xiao Long Bao",
      },
      {
        firstName: "Sara",
        lastName: "Walid",
        handle: "swali",
        email: "swalid@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/DYOqeff.jpg",
        location: "Dubai, UAE",
        occupation: "Designer",
        bio:
          "I'm a fashion designer living in Dubai. Amman-born, London-educated, hungry for more!",
        cuisine: "Jordanian",
        favoriteFood: "Sushi, ceviche",
      },
      {
        firstName: "Marie",
        lastName: "Coulombe",
        handle: "coulz",
        email: "marie@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/lyhSZQT.jpg",
        location: "Dubai, UAE",
        occupation: "Air Traffic Controller",
        bio: "French-Canadian, Francophile & lover of all things Far Eastern.",
        cuisine: "French",
        favoriteFood: "Pad kee mao, som tum, laksa",
      },
      {
        firstName: "Zara",
        lastName: "Saeed",
        handle: "zsa",
        email: "zaras@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/rIRKubf.jpg",
        location: "Dubai, UAE",
        occupation: "Writer",
        bio:
          "Palestinian by way of Egypt, Lebanon, and the US. Rootless cosmopolitan.",
        cuisine: "Middle Eastern",
        favoriteFood: "Anything with zaatar",
      },
      {
        firstName: "Anita",
        lastName: "Eveleigh",
        handle: "anitaevie",
        email: "anita@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/xMagssJ.jpg",
        location: "Absurdistan",
        occupation: "Business, none of your",
        bio: "No, thank you.",
        cuisine: "Lean",
        favoriteFood: "Baby Yoda",
      },
      {
        firstName: "Mohammed",
        lastName: "Masri",
        handle: "moma",
        email: "momasri@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/Mb48vPd.jpg",
        location: "Dubai, UAE",
        occupation: "Shurta",
        bio: "Mo' money, Mo Masri",
        cuisine: "Egyptian",
        favoriteFood: "Mandi",
      },
      {
        firstName: "Jon",
        lastName: "Smith",
        handle: "braibru",
        email: "jsmith11@email.com",
        password: hashPassword("password"),
        avatar: "https://i.imgur.com/36SlS9h.jpg",
        location: "Dubai, UAE",
        occupation: "Realtor",
        bio: "Aussie in Dubai, always on the prowl for interesting food.",
        cuisine: "Barbecue",
        favoriteFood: "Pho, bun cha",
      },
    ],
  },
];

seeder.connect(db, function () {
  seeder.loadModels(["../models/user.js"]);
  seeder.clearModels(["User"], function () {
    seeder.populateModels(users, function (err, done) {
      if (err) {
        return console.log("seed err", err);
      }
      if (done) {
        return console.log("seed done", done);
      }
      seeder.disconnect();
    });
  });
});
