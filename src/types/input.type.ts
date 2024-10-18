export interface InputProps {
    value?: string | number;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    onTextAreaChange?: (value: React.ChangeEvent<HTMLTextAreaElement>) => void;
    disabled?: boolean;
    label?: string;
    containerStyle?: string;
    labelStyle?: string;
    height?: string;
    error?: boolean;
    errorMessage?: string | null;
    onBlur?: () => void;
    showPasswordInput?: boolean;
    type?: string;
}