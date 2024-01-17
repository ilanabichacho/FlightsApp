namespace Data.DataModel;

public class Flight
{
    public int id { get; set; }
    public string flightName { get; set; }
    public DateTime flightDate { get; set; }
    public Country country { get; set; }
    public City city { get; set;}
}
