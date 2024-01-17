import { City } from "./city";
import { Country } from "./country";

export class Flight {

    public id: number | undefined;
    
    public flightName: string | undefined;

    public flightDate: Date | undefined;

    public country: Country | undefined;

    public city: City | undefined;

}
