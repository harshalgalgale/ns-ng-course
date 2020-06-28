import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { SharedModule } from "~/app/shared/ui/shared.module";
import { ChallengeEditComponent } from "./challenge-edit.component";

@NgModule({
  declarations: [ChallengeEditComponent],
  imports: [NativeScriptCommonModule, SharedModule,
    NativeScriptFormsModule,
    //  NativeScriptRouterModule   <--- must be imported if I want to use nsRouterLink, yes double import. Watch video #105
    NativeScriptRouterModule.forChild([{ path: '', component: ChallengeEditComponent }])],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeEditModule { }