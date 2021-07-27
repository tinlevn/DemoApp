import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { catchError, map, retry } from 'rxjs/operators';
import { throwError } from "rxjs";
import { Product } from "./Product";

const productUrl = environment.baseUrlsProduct;




@Injectable({
    providedIn: 'root'
})
export class ProductDataService {
    count = 4;

    constructor(private http: HttpClient) { }

    // getProducts() {
    //     return this.http.get(productUrl).pipe(map(x => {
    //         this.count++;
    //         return x
    //     }), retry(2), catchError((error, src) => {
    //         console.log('Caught in CatchError. Throwing error')
    //         console.log(src);
    //         if (this.count > 3) {
    //             throw new Error("Failed  after 3 retry");

    //         }
    //         return throwError(error);
    //     }));
    // }

    getProducts() {
        return this.http.get<Product>(productUrl).pipe(catchError(this.errorHandler));
    }

    getProductsById(id: number) {
        debugger
        const x = this.http.get<any>(productUrl).pipe(map((x) => x.filter((p: any) => p.id == id)[0]));
        return x;
    }


    errorHandler(error: HttpErrorResponse) {
        console.log('Caught in CatchError. Throwing error')
        return throwError(error);

    }
}