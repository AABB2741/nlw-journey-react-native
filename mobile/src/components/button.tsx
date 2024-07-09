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
    className,
    ...rest
}: ButtonProps) {
    return (
        <View
            className={clsx(
                "h-11 rounded-lg overflow-hidden",
                {
                    "bg-lime-300": variant === "primary",
                    "bg-zinc-800": variant === "secondary",
                },
                className
            )}
        >
            <TouchableOpacity
                disabled={isLoading}
                activeOpacity={0.7}
                style={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 8,
                }}
                {...rest}
            >
                <ThemeContext.Provider value={{ variant }}>
                    {isLoading ? (
                        <ActivityIndicator className="text-lime-950" />
                    ) : (
                        children
                    )}
                </ThemeContext.Provider>
            </TouchableOpacity>
        </View>
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
