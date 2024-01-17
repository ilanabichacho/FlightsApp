using System.Diagnostics.Contracts;

namespace Data.DataModel;

public class City
{
    public City(int id, int countryId, string cityName)
    {
        this.id = id;
        this.countryId = countryId;
        this.cityName = cityName;
    }

    public int id  { get; set; }
    public int countryId { get; set; }
    public string cityName { get; set; }
}
