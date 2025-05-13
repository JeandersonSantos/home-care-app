import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

interface MaskedInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
  value: string;
}

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  (props, ref) => {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(00) 00000-0000"
        inputRef={ref}
        onAccept={(value: string) => {
          onChange({ target: { name: props.name, value } });
        }}
        overwrite
      />
    );
  }
);
