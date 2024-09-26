import {} from '@material-tailwind/react';
type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

declare module '@material-tailwind/react' {
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface InputProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface SelectProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TextareaProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TypographyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface AvatarProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface DialogProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface DialogHeaderProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface DialogBodyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface DialogFooterProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface RadioProps extends EventCapture {
    crossOrigin?: unknown;
  }
  export interface CardProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface CardBodyProps extends EventCapture {
    placeholder?: unknown;
  }
  // more...
}
