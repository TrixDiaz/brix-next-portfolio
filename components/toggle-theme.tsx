"use client"
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            size="sm"
            variant="ghost"
            className="w-auto justify-start rounded-full "
        >
            <div className="flex gap-2 dark:hidden">
                <Moon className="size-5" />
                <span className="block lg:hidden">Dark</span>
            </div>

            <div className="dark:flex gap-2 hidden">
                <Sun className="size-5" />
                <span className="block lg:hidden">Light</span>
            </div>

            <span className="sr-only">Toggle Theme</span>
        </Button>
    );
};
