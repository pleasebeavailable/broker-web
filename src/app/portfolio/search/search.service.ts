import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../../_shared/AppConstants';
import {map} from 'rxjs/operators';
import {Equity} from '../../_shared/_model/Equity';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
    'x-rapidapi-key': 'fc821fa986msh8f6b52e75ed2c80p17966bjsn8096c52d7371'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  news = 'stock/get-news?region=US&category=NBEV';
  private array: Equity[];

  constructor(private httpClient: HttpClient) {
  }

  getNews() {
    return this.httpClient.get(AppConstants.YAHOO_MARKET_URL + this.news, httpOptions).pipe(
      map(result => result)
    );
  }

  search(query: string) {
    const params: string = [
      `function=SYMBOL_SEARCH`,
      `keywords=${query}`,
      `apikey=${AppConstants.API_KEY}`
    ].join('&');
    const queryUrl = `${AppConstants.ALPHA_VANTAGE}?${params}`;

    return this.httpClient.get<Equity>(queryUrl).pipe(
      map((response: any) => {
        const data = response.bestMatches;
        this.array = [];
        data.forEach(eq => {
          this.array.push(eq);
        });
        return this.array;
      })
    );
  }

  getEquityDetails(symbol: string): Observable<Equity> {
    const params: string = [
      `function=GLOBAL_QUOTE`,
      `symbol=${symbol}`,
      `apikey=${AppConstants.API_KEY}`
    ].join('&');
    const queryUrl = `${AppConstants.ALPHA_VANTAGE}?${params}`;

    return this.httpClient.get<Equity>(queryUrl).pipe(
      map((response: any) => {
        const data = response['Global Quote'];
        return data;
      })
    );
  }


}
