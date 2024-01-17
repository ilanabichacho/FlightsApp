import { Injectable } from "@angular/core";
import { Configuration } from "../models/configuration";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";


@Injectable()
export class ConfigService {
    
    public config!: Configuration;

    constructor(private httpClient: HttpClient) {
          
    }

    load(url: string): Promise<void> {
        return new Promise((resolve) => {
            this.httpClient.get<Configuration>(url)
            .pipe(
                tap(config => {
                    this.config = config; //save configuration to local variable
                })).subscribe(() => resolve())
        })
    }

    getConfig(): Configuration {
        return this.config;
    }
}