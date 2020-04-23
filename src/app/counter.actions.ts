import { createAction, props } from "@ngrx/store";

export const increment = createAction("[Counter Component] Increment");
export const decrement = createAction("[Counter Component] Decrement");
export const reset = createAction("[Counter Component] Reset");
export const displaySuccess = createAction(
  "[Toastr Notification] Display Success",
  props<{ title: string; description: string }>()
);
export const displayWarning = createAction(
  "[Toastr Notification] Display Warning",
  props<{ title: string; description: string }>()
);
export const displayError = createAction(
  "[Toastr Notification] Display Error",
  props<{ title: string; description: string }>()
);
