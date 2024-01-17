export class DateTimeUtilities {

    static FormatDataTime(date: Date) {
        if(date != null) {
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();

            return day + "/" + month + "/" + year;
        }

        return null;
    } 
}