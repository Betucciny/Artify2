import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ViewStyle, useColorScheme, TextProps, TextInputProps, TextInput, ViewProps, View } from 'react-native';

interface ThemedButtonProps {
    lightColor?: string;
    darkColor?: string;
    title: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    textStyle?: ViewStyle;
}

function ThemedButton({
    title,
    onPress,
    buttonStyle,
    textStyle,
    lightColor,
    darkColor,
}: ThemedButtonProps) {
    const primary = useThemeColor({ light: lightColor, dark: darkColor }, 'primary');
    const onPrimary = useThemeColor({ light: lightColor, dark: darkColor }, 'onPrimary');
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle, { backgroundColor: primary }]}
            onPress={onPress}
        >
            <Text style={[styles.text, textStyle, { color: onPrimary }]}>{title}</Text>
        </TouchableOpacity>
    );
};


export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

function ThemedText({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'onBackground');

    return (
        <Text
            style={[
                { color },
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'link' ? styles.link : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

export type ThemedTextInput = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'full';
};

function ThemedTextInput({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}: ThemedTextInput) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'onBackground');
    const colorTint = useThemeColor({ light: lightColor, dark: darkColor }, 'onBackground');

    return (
        <TextInput
            selectionColor={type === "default" ? colorTint : "gray"}
            placeholderTextColor={type === "default" ? colorTint : "gray"}
            style={[
                {
                    color,
                    borderBottomColor: colorTint,
                    borderBottomWidth: 1,
                    padding: 8,
                },
                type === 'default' ? styles.default : undefined,
                type === 'full' ? styles.full : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

export type ThemedViewProps = ViewProps & {
    lightColor?: string;
    darkColor?: string;
};

export default function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

    return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}



const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: '#0a7ea4',
    },
    full: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
        color: "black",
    }
});

export { ThemedButton, ThemedText, ThemedTextInput, ThemedView };