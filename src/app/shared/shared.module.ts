import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LogDirectiveDirective } from "../directives/log-directive.directive";
import { RoundBlockDirectiveDirective } from "../directives/round-block-directive.directive";
import { FilterPipe } from "../pipes/filter.pipe";

@NgModule({
    declarations: [
        RoundBlockDirectiveDirective,
        LogDirectiveDirective,
        FilterPipe
    ],
    imports: [CommonModule, FormsModule],
    exports: [
        RoundBlockDirectiveDirective,
        LogDirectiveDirective,
        FilterPipe,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule]
})
export class SharedModule { }