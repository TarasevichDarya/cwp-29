module.exports = async function (db) {
  await db.sequelize.sync({force: true});

  await db.pizzas.bulkCreate([
    {name: "Neapolitan", colories: 1000},
    {name: "Sicilian", colories: 1400},
    {name: "Pepperoni", colories: 2200},
    {name: "Mozzarella", colories: 1700},
  ]);

  await db.weapons.bulkCreate([
    {name: "Katana", dps: 79},
    {name: "Nunchucks", dps: 55},
    {name: "Staff", dps: 60},
    {name: "Sai", dps: 70},
  ]);

  await db.turtles.bulkCreate([
    {
      name: "Leonard",
      color: "White",
      favouritePizzaId: 1,
      weaponId: 1,
    },
    {
      name: "Micle",
      color: "Red",
      favoritePizzaId: 1,
      secondFavouritePizzaId: 2,
      weaponId: 2
    },
    {
      name: "Duckie",
      color: "Blue",
      favouritePizzaId: 2,
      weaponId: 3
    },
    {
      name: "Vero",
      color: "Rose",
      favouritePizzaId: 3,
      secondFavouritePizzaId: 1,
      weaponId: 4
    },
  ]);
};