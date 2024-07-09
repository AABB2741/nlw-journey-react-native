import clsx from "clsx";
import { createContext, useContext } from "react";
import {
    ActivityIndicator,
    Text,
    TextProps,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native";

type Variant = "primary" | "secondary";

interface ButtonProps extends TouchableOpacityProps {
    variant?: Variant;
    isLoading?: boolean;
}

interface ThemeContextValue {
    variant?: Variant;
}

const ThemeContext = createContext({} as ThemeContextValue);

function Button({
    variant = "primary",
    isLoading,
    children,
    ...rest
}: ButtonProps) {
    return (
        <TouchableOpacity disabled={isLoading} activeOpacity={0.7} {...rest}>
            <View
                className={clsx(
                    "w-full h-11 flex-row items-center justify-center rounded-lg gap-2",
                    {
                        "bg-lime-300": variant === "primary",
                        "bg-zinc-800": variant === "secondary",
                    }
                )}
            >
                <ThemeContext.Provider value={{ variant }}>
                    {isLoading ? (
                        <ActivityIndicator className="text-lime-950" />
                    ) : (
                        children
                    )}
                </ThemeContext.Provider>
            </View>
        </TouchableOpacity>
    );
}

function Title({ ...rest }: TextProps) {
    const { variant } = useContext(ThemeContext);

    return (
        <Text
            className={clsx("text-base font-semibold", {
                "text-lime-950": variant === "primary",
                "text-zinc-200": variant === "secondary",
            })}
            {...rest}
        />
    );
}

Button.Title = Title;

export { Button };
