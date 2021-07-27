import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "../auth.service";
@Injectable()
export class CanActivateAuthGaurdService implements CanActivate {
    constructor(private authservice: AuthService) { }
    canActivate() {
        return this.authservice.isAuthenticated;
    }
}