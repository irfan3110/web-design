// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
  {
    country: "United States",
    capital: "Washington",
    largestCity: "New York",
    subdivisionName: "state",
    subdivisions: [
      {
        name: "Louisiana",
        capital: "Baton Rouge",
        largestCity: "New Orleans",
        area: 134264,
      },
      {
        name: "California",
        capital: "Sacramento",
        largestCity: "Los Angeles",
        area: 423970,
      },
      {
        name: "Nevada",
        capital: "Carson City",
        largestCity: "Las Vegas",
        area: 286382,
      },
    ],
  },
  {
    country: "Guatemala",
    capital: "Guatemala City",
    largestCity: "Guatemala City",
    subdivisionName: "department",
    subdivisions: [
      {
        name: "Huehuetenango",
        capital: "Huehuetenango",
        largestCity: "Huehuetenango",
        area: 7403,
      },
      {
        name: "Izabal",
        capital: "Puerto Barrios",
        largestCity: "Puerto Barrios",
        area: 9038,
      },
      {
        name: "El Progreso",
        capital: "Guastatoya",
        largestCity: "Guastatoya",
        area: 1922,
      },
    ],
  },
];
// Your code goes below
GEOGRAPHY_LIST.push(
  {
    country: "Australia",
    capital: "Canberra",
    largestCity: "Sydney",
    subdivisionName: "state",
    subdivisions: [
      {
        name: "New South Wales",
        capital: "Sydney",
        largestCity: "Sydney",
        area: 809444,
      },
      {
        name: "Victoria",
        capital: "Melbourne",
        largestCity: "Melbourne",
        area: 227416,
      },
    ],
  },
  {
    country: "Japan",
    capital: "Tokyo",
    largestCity: "Tokyo",
    subdivisionName: "prefecture",
    subdivisions: [
      {
        name: "Hokkaido",
        capital: "Sapporo",
        largestCity: "Sapporo",
        area: 83424,
      },
      {
        name: "Okinawa",
        capital: "Naha",
        largestCity: "Naha",
        area: 2280,
      },
    ],
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const geoElement = document.querySelector("#geo");

  GEOGRAPHY_LIST.forEach((country) => {
    const countrySection = document.createElement("section");
    const countryHeader = document.createElement("h2");
    countryHeader.textContent = `${country.country}: Capital - ${country.capital}, Largest City - ${country.largestCity}`;
    countrySection.appendChild(countryHeader);

    const subdivisionsList = document.createElement("ul");
    country.subdivisions.forEach((subdivision) => {
      const subdivisionItem = document.createElement("li");
      subdivisionItem.innerHTML = `
        <strong>${subdivision.name}</strong> (Capital: ${subdivision.capital}, Largest City: ${subdivision.largestCity}, Area: ${subdivision.area} km²)
      `;
      subdivisionsList.appendChild(subdivisionItem);
    });

    countrySection.appendChild(subdivisionsList);
    geoElement.appendChild(countrySection);
  });
});
