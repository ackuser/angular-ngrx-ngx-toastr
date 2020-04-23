import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { increment, displayError, displayWarning, displaySuccess } from "./counter.actions";
import { ToastrService } from "ngx-toastr";
import { map, tap } from "rxjs/operators";

@Injectable()
export class CounterEffects {
  displaySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(displaySuccess),
        tap(action => {
          this.toastr.success(action.title, action.description);
        })
      ),
    { dispatch: false }
  );

  displayWarning$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(displayWarning),
        tap(action => {
          this.toastr.warning(action.title, action.description);
        })
      ),
    { dispatch: false }
  );

  displayError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(displayError),
        tap(action => {
          this.toastr.error(action.title, action.description);
        })
      ),
    { dispatch: false }
  );

  increment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      map(action =>
        displaySuccess({
          title: "Increment",
          description: "Counter was incremented by 1"
        })
      )
    )
  );

  decrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      map(action =>
        displayError({
          title: "Decrement",
          description: "Counter was decremented by 1"
        })
      )
    )
  );

reset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      map(action =>
        displayWarning({
          title: "Reseted",
          description: "Counter was reseted to 0"
        })
      )
    )
  );  

  constructor(private actions$: Actions, private toastr: ToastrService) {}
}
