const data = {
  current: [
    {
      reservationNumnber: "123764521",
      property: "OYO-ROOMS",
      Area: "Bangalore",
      address: "One Plaza Dr., Secaucus, NJ 07094",
      checkinDate: ["03", "JAN", "TODAY"],
      checkoutDays: ["18", "JAN", "THUR"],
      guests: 2,
      nights: 15,
      image: require("../../assets/new/secaucus.jpeg")
    }
  ],

  upcoming: [
    {
      reservationNumnber: "4321678754",
      property: "OYO-ROOMS",
      Area: "Mumbai",
      checkinDate: ["06", "JAN", "SAT"],
      checkoutDays: ["09", "JAN", "TUE"],
      guests: 1,
      nights: 3,
      image: require("../../assets/new/Merillvile.jpeg")
    },
    {
      reservationNumnber: "54327697653",
      property: "OYO-ROOMS",
      Area: "Pune",
      checkinDate: ["11", "JAN", "THUR"],
      checkoutDays: ["15", "JAN", "MON"],
      guests: 2,
      nights: 4,
      image: require("../../assets/new/lansingChicago.jpeg")
    }
  ],

  cancelled: [
    {
      reservationNumnber: "ESA587427",
      property: "OYO-ROOMS",
      Area: "Mangalore",
      checkinDate: ["11", "JAN", "THUR"],
      checkoutDays: ["15", "JAN", "MON"],
      guests: 2,
      nights: 4,
      image: require("../../assets/new/secaucus.jpeg")
    }
  ]
};

export default data;
