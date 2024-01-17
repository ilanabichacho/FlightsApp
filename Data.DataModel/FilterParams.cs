namespace Data.DataModel;

public class FilterParams
{
    public int numRowsInSearch { get; set; }
    public int currentPage { get; set;}
    public string? flightName {  get; set; }
    public DateTime? fromDate { get; set;  }
    public DateTime? toDate { get; set;  }
    public int? countryId { get; set; }
    public int? cityId { get; set; }

}
