type Theme = 'primary' | 'secondary' | 'outline'

export interface ButtonProps {
  name: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  theme: Theme;
}
