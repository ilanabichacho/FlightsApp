using API.Data;
using Microsoft.AspNetCore.Mvc;
using Buisness.Logic;
using Data.DataModel;


namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] //api/users
public class FlightsController : ControllerBase
{
    //private readonly DataContext _context;
    private readonly FlightLogic _flightLogic;

    public FlightsController()
    {
        _flightLogic = new FlightLogic();

    }

    [HttpGet(nameof(SelectAllFlights))]
    public async Task<List<Flight>> SelectAllFlights()
    {
        return await _flightLogic.selectFlights();
    }

    [HttpGet(nameof(selectCountries))]
    public async Task<List<Country>> selectCountries()
    {
        return await _flightLogic.selectCountries();
    }

    [HttpPost(nameof(selectCities))]
    public async Task<List<City>> selectCities(FilterParams filterParams)
    {
        return await _flightLogic.selectCities(filterParams.countryId);
    }

    [HttpPost(nameof(filterFlightsPaging))]
    public async Task<List<Flight>> filterFlightsPaging(FilterParams filterParams)
    { 
        return await _flightLogic.filterFlightsPaging(filterParams.numRowsInSearch, filterParams.currentPage,
              filterParams.flightName, filterParams.fromDate,
                                                filterParams.toDate, filterParams.countryId, filterParams.cityId);
    }

}
