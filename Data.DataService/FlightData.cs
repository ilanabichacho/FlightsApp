using System.Collections.Concurrent;
using System.ComponentModel.Design;
using Data.DataModel;

namespace Data.DataService;

public class FlightData
{
    public FlightData()
    {

    }

    public async Task<List<Flight>> selectFlights()
    {
        //Here we will connect to DB in real site

        List<Flight> flights = new List<Flight>();

        FakeData fd = new FakeData();

        flights = fd.getFlightsData();

        return await Task.FromResult(flights);

    }

    public async Task<List<Country>> selectCountries()
    {
        List<Country> countries = new List<Country>();

        FakeData fd = new FakeData();

        countries = fd.getCountriesData();

        return await Task.FromResult(countries);

    }

    public async Task<List<City>> selectCities(int? countryId)
    {
        List<City> cities = new List<City>();

        FakeData fd = new FakeData();

        cities = fd.getCitiesData();

        if(countryId != null)
          cities = cities.FindAll(city => city.countryId == countryId);

        return await Task.FromResult(cities);

    }


}
