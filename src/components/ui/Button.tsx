import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, href, size = 'md', className = '', onClick, type = 'button' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold transition-colors';
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const styles = `${baseStyles} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  );
} 