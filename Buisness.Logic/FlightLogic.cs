using Data.DataModel;
using Data.DataService;

namespace Buisness.Logic;

public class FlightLogic
{
     private readonly FlightData _flightData;

    public FlightLogic()
    {
        _flightData = new FlightData();
    }

    public async Task<List<Flight>> selectFlights() {

        return await _flightData.selectFlights();

    }

    public async Task<List<Country>> selectCountries()
    {
        return await _flightData.selectCountries();
    }

    public async Task<List<City>> selectCities(int? countryId)
    {
        return await _flightData.selectCities(countryId);
    }

    public async Task<List<Flight>?> filterFlightsPaging(int numRowsInSearch, int currentPage, string? flightName, DateTime? fromDate,
                                                         DateTime? toDate, int? countryId, int? cityId)
    {
      List<Flight> flights = await _flightData.selectFlights();

      int countOfPages=0;
      int lastIndex = 0;
      int numOfRowsSelected = 0;
      
      if(flights != null && numRowsInSearch > 0 && currentPage > 0) {
      
       // Filter by params
         if(flightName != null && flightName !="") 
            flights = flights.FindAll(d => d.flightName == flightName);
        
        if(fromDate != null) 
            flights = flights.FindAll(d => d.flightDate >= fromDate);

        if(toDate != null) 
            flights = flights.FindAll(d => d.flightDate <= toDate);
 
        if(countryId != null && countryId > 0) 
            flights = flights.FindAll(d => d.country.id == countryId);

        if(cityId != null && cityId > 0) 
            flights = flights.FindAll(d => d.city.id == cityId);

            if (flights != null) {

                lastIndex = flights.Count;

                //count num of pages
                 countOfPages = flights.Count / numRowsInSearch;
                if ((flights.Count % numRowsInSearch) > 0) countOfPages++;

                if (countOfPages < currentPage) return null;

                if (countOfPages == currentPage && (flights.Count % numRowsInSearch) != 0)
                    numOfRowsSelected = flights.Count % numRowsInSearch;
                else
                    numOfRowsSelected = numRowsInSearch;

                flights = flights.GetRange(numRowsInSearch * (currentPage - 1), numOfRowsSelected);

                return flights;
            }
            else

                return null;
      }

      return null;
      
    }

}   
