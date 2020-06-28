import { Injectable, ViewContainerRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";



@Injectable({
    providedIn: 'root'
})
export class UIService{
    private _drawerState = new BehaviorSubject<void>(null)
    private _rootVCRef: ViewContainerRef

    get drawerState(){
        return this._drawerState.asObservable()
    }

    toggleDrawer(){
        this._drawerState.next(null);
    }

    setVCRef(vCRef: ViewContainerRef){
        this._rootVCRef = vCRef;
    }

    getVCRef(){
        return this._rootVCRef;
    }
}