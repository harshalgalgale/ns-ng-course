import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ActionBarComponent } from "./ui/action-bar/action-bar.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";


@NgModule({
    imports: [NativeScriptCommonModule,NativeScriptFormsModule],
    declarations: [ActionBarComponent],
    exports: [ActionBarComponent]
})
export class SharedModule{}