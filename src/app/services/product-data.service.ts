import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { filter, map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from "@angular/compiler";

const productUrl = environment.baseUrlsProduct;
@Injectable({
    providedIn: 'root'
})
export class ProductDataService {
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(productUrl);
    }
    getProductsById(id: number) {
        debugger
        const x = this.http.get<any>(productUrl).pipe(map((x) => x.filter((p: any) => p.id == id)[0]));
        return x;
    }
}