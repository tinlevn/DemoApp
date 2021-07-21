import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductDataService } from "./product-data.service";

@Injectable()
export class ProductResolverService implements Resolve<any> {
    constructor(private service: ProductDataService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.service.getProducts();
    }
}