import { Injectable } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('72P2HJ121O', 'd196e19d15205d7001a2a73ede52a083');
const index = client.initIndex('test_online_shop');


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }


  SearchAll(query: string) {
    return new Promise((resolve, reject) => {
      index.search(query).then((res) => {
        resolve(res.hits)
      })
    })
  }
}
