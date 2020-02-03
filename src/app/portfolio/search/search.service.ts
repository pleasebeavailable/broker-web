import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../../_shared/AppConstants';
import {map} from 'rxjs/operators';

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
  private API_KEY = '22MBOE0URZQQMFWA';
  private array: any[];

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
      `apikey=${this.API_KEY}`
    ].join('&');
    const queryUrl = `${AppConstants.ALPHA_VANTAGE}?${params}`;

    return this.httpClient.get(queryUrl).pipe(
      map((response: any) => {
        const data = response.bestMatches;
        this.array = [];
        data.forEach(eq => {
          this.array.push(eq['1. symbol']);
        });
        return this.array;

        // return (response as any).streams.map(equity => {
        //   console.log(equity);
        //   return new Equity({name: equity.name});
        // });
      })
    );
  }
}
