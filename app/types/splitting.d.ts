// types/splitting.d.ts
declare module 'splitting' {
  interface SplittingResult {
    el: HTMLElement;
    words?: HTMLElement[];
    chars?: HTMLElement[];
  }

  interface SplittingOptions {
    target?: string | HTMLElement | HTMLElement[];
    by?: string;
    whitespace?: boolean;
  }

  function Splitting(options?: SplittingOptions): SplittingResult[];

  export = Splitting;
}
