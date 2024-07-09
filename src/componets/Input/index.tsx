import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export const Input = ({ ...rest }: InputProps) => {
    return <input type="text" {...rest}/>;
}