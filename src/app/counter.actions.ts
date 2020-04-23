import { createAction, props } from "@ngrx/store";

export const increment = createAction("[Counter Component] Increment");
export const decrement = createAction("[Counter Component] Decrement");
export const reset = createAction("[Counter Component] Reset");
export const display = createAction(
  "[Toastr] Display Notification",
  props<{ title: string; description: string }>()
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
