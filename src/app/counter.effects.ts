import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { increment, display } from "./counter.actions";
import { ToastrService } from "ngx-toastr";
import { map, tap } from "rxjs/operators";

@Injectable()
export class CounterEffects {
  display$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(display),
        tap(action => {
          this.toastr.success(action.title, action.description);
        })
      ),
    { dispatch: false }
  );

  increment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      map(action =>
        display({
          title: "Increment",
          description: "Counter was incremented by 1"
        })
      )
    )
  );

  constructor(private actions$: Actions, private toastr: ToastrService) {}
}
