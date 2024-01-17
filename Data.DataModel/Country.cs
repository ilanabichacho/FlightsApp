namespace Data.DataModel;

public class Country
{
    public Country(int id, string name)
    {
      this.id = id;
      this.countryName = name;
    }

    public int id  { get; set; }
    public string countryName  { get; set; }


}
