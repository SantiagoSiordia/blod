import { FC } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { colors } from '../Theme';

interface BTextProps extends TextProps {
  bold?: boolean;
  size?: "small" | "medium" | "large" | "title";
  color?: "primary" | "secondary" | "tertiary";
}

export const BText: FC<BTextProps> = ({
  style,
  bold,
  size = "medium",
  color = "primary",
  children,
  ...rest
}) => {
  const textStyles = StyleSheet.flatten([
    styles[size],
    styles[color],
    bold && styles.bold,
    style,
  ]);

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
  },
  medium: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
  },
  title: {
    fontSize: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary,
  },
  tertiary: {
    color: colors.tertiary,
  },
});