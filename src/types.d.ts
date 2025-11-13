import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    command?: string;
    commandFor?: string;
    anchor?: string;
    popover?: true | "" | "auto" | "manual" | "hint";
  }
}

declare module '*.PDF' {
  const src: string;
  export default src;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'el-dropdown': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'el-menu': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'el-disclosure': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

