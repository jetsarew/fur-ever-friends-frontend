export interface InputProps {
    value?: string | number;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    label?: string;
    containerStyle?: string;
    labelStyle?: string;
    error?: boolean;
    errorMessage?: string | null;
    onBlur?: () => void;
    showPasswordInput?: boolean;
    type?: string;
}