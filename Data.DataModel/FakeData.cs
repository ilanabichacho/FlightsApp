namespace Data.DataModel;

public class FakeData
{

    public List<Flight> getFlightsData() {
   
        List<Flight> flights  =  new List<Flight>();

        Flight flight = new Flight();
        flight.id = 1;
        flight.flightName = "ACA 1232";
        flight.flightDate = new DateTime(2024,1,1);
        flight.country = new Country(1,"ישראל");
        flight.city = new City(1,1,"תל אביב");
        flights.Add(flight);

        flight = new Flight();
        flight.id = 2;
        flight.flightName = "ACA 567";
        flight.flightDate = new DateTime(2024, 1, 2);
        flight.country = new Country(2,"גרמיה");
        flight.city = new City(5,2,"ברלין");
        flights.Add(flight);

        flight = new Flight();
        flight.id = 3;
        flight.flightName = "ACA 455";
        flight.flightDate = new DateTime(2024,1,3);
        flight.country = new Country(3,"צרפת");
        flight.city = new City(6,3,"פריז");
        flights.Add(flight);

        flight = new Flight();
        flight.id = 3;
        flight.flightName = "ACA 455";
        flight.flightDate = new DateTime(2024, 1, 3);
        flight.country = new Country(3, "צרפת");
        flight.city = new City(7, 3, "מרסי");
        flights.Add(flight);

        return flights;

    }

    public List<Country> getCountriesData() {

         List<Country> countries  =  new List<Country>();

        Country country = new Country(1,"ישראל");
        countries.Add(country);

        country = new Country(2,"גרמניה");
        countries.Add(country);

        country = new Country(3,"צרפת");
        countries.Add(country);

        country = new Country(4,"איטליה");
        countries.Add(country);

        country = new Country(5,"בולגריה");
        countries.Add(country);

        country = new Country(6,"סין");
        countries.Add(country);


        return countries;

    }

     public List<City> getCitiesData() {

        List<City> cities  =  new List<City>();

        City city = new City(1,1,"תל אביב");
        cities.Add(city);

        city = new City(2,1,"ירושלים");
        cities.Add(city);

        city = new City(3,1,"ירושלים");
        cities.Add(city);

        city = new City(4,2,"מינכן");
        cities.Add(city);

        city = new City(5,2,"ברלין");
        cities.Add(city);

        city = new City(6,3,"פריס");
        cities.Add(city);

        city = new City(7,3,"מרסי");
        cities.Add(city);

        city = new City(7,4,"רומא");
        cities.Add(city);

        city = new City(9,4,"ורנה");
        cities.Add(city);

        return cities;
     }

}
