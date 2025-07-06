import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/magicui/globe";
import { TypingAnimation } from "@/components/magicui/typing-animation";

interface HeroProps {
    badge?: string;
    heading?: string;
    description?: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
        };
        secondary?: {
            text: string;
            url: string;
        };
    };
}

export const HeroSection = ({
    badge = "Network Engineer",
    heading = "Hi There! I'm Josh Carlien Brix",
    description = "*Empowering Networks, Securing Systems, and Optimizing Performance* I specialize in building resilient network infrastructures, managing secure firewalls, and delivering scalable server solutions. From Fortinet to MikroTik, IP cameras to virtualization, I help businesses streamline operations and stay connected with confidence.",
    buttons = {
        primary: {
            text: "Discover my Projects",
            url: "#projects",
        },
    },
}: HeroProps) => {
    return (
        <section className="py-24">
            <div className="container max-w-7xl mx-auto">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    {/* Left Side */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        {badge && (
                            <Badge variant="outline">
                                {badge}
                            </Badge>
                        )}
                        <h1 className="text-pretty text-4xl font-bold lg:text-6xl">
                            <TypingAnimation>
                                {heading}
                            </TypingAnimation>
                        </h1>
                        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                                {description}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            {buttons.primary && (
                                <Button asChild className="w-full sm:w-auto">
                                    <a href={buttons.primary.url}>
                                        {buttons.primary.text}
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Right Side - Globe */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-[400px] h-[400px] drop-shadow  overflow-hidden">
                            <Globe />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
