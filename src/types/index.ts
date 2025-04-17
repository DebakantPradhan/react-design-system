export type TypographyProps = {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  weight?: 'light' | 'normal' | 'bold';
  color?: string;
  className?: string;
};

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export type CheckboxProps = {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
  className?: string;
};

export type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  className?: string;
};

export type SelectProps = {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  className?: string;
};

export type AlertProps = {
  type: 'info' | 'error' | 'success' | 'warning';
  message: string;
  className?: string;
};

export type ModalProps = {
  isVisible: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  actions?: React.ReactNode;
};

export type NotificationProps = {
  type: 'info' | 'error' | 'success' | 'warning';
  message: string;
  className?: string;
};