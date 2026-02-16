import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'outlined' | 'solid' | 'text';
    color?: 'light' | 'dark';
    hoverColor?: 'light' | 'dark';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'solid',
    color = 'dark',
    hoverColor,
    children,
    className,
    ...props
}) => {
    // Determine default hover color if not provided
    const resolvedHoverColor = hoverColor || (color === 'light' ? 'dark' : 'light');

    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[color],
        styles[`hover${resolvedHoverColor.charAt(0).toUpperCase() + resolvedHoverColor.slice(1)}`],
        className
    ].filter(Boolean).join(' ');

    return (
        <button className={buttonClasses} {...props}>
            <span className={styles.content}>{children}</span>
        </button>
    );
};

export default Button;
