import { Book, Menu, Sunset, Zap } from "lucide-react";
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ToggleTheme } from "../toggle-theme";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface NavbarProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
    contact?: {
        message: {
            title: string;
            url: string;
        };
    };
}

export const HeaderSection = ({
    logo = {
        url: "/",
        src: "/logo.png",
        alt: "logo",
        title: "LIEN",
    },
    menu = [
        { title: "Home", url: "/" },
        { title: "Projects", url: "#project" },
        {
            title: "Services",
            url: "#",
            items: [
                {
                    title: "Firewall & Network Security",
                    description: "Fortinet, SonicWall, MikroTik, pfSense, VPN, and Hardening",
                    icon: <Zap className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Server & Remote Management",
                    description: "iLO, iDRAC, PXE, Diskless, RAID, and Virtualization",
                    icon: <Sunset className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "CCTV & Access Control",
                    description: "IP Cameras, Door Access, NVRs, and Remote Viewing",
                    icon: <Book className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Network Optimization",
                    description: "Health Checks, Troubleshooting, and Tech Consultations",
                    icon: <Zap className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Tech Consultations",
                    description: "Planning, audits, documentation & proposals",
                    icon: <Zap className="size-5 shrink-0" />,
                    url: "#",
                },
            ],
        },
        { title: "Feature", url: "#feature" },
    ],
    contact = {
        message: { title: "Message me", url: "https://www.facebook.com/carlien.brix" },
    },
}: NavbarProps) => {
    return (
        <section className="py-4">
            <div className="container max-w-7xl mx-auto px-4">
                {/* Desktop Menu */}
                <nav className="hidden justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <Link href={logo.url} className="flex items-center gap-2">
                            <Image
                                width={32}
                                height={32}
                                src={logo.src}
                                alt={logo.alt}
                                className="max-h-8"
                            />
                            <span className="text-lg font-semibold tracking-tighter">
                                {logo.title}
                            </span>
                        </Link>
                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {menu.map((item) => renderMenuItem(item))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button asChild size="sm">
                            <Link href={contact.message.url} target="_blank">
                                {contact.message.title}
                            </Link>
                        </Button>
                        <ToggleTheme />
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href={logo.url} className="flex items-center gap-2">
                            <Image
                                width={32}
                                height={32}
                                src={logo.src}
                                alt={logo.alt}
                                className="max-h-8"
                            />
                        </Link>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link href={logo.url} className="flex items-center gap-2">
                                            <Image
                                                width={32}
                                                height={32}
                                                src={logo.src}
                                                alt={logo.alt}
                                                className="max-h-8"
                                            />
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>

                                    <div className="flex flex-col gap-3">
                                        <Button asChild>
                                            <Link href={contact.message.url} target="_blank">{contact.message.title}
                                            </Link>
                                        </Button>
                                        <ToggleTheme />
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover text-popover-foreground">
                    {item.items.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.title} className="w-80">
                            <SubMenuLink item={subItem} />
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <Link key={item.title} href={item.url} className="text-md font-semibold">
            {item.title}
        </Link>
    );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
        <Link
            className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
            href={item.url}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold">{item.title}</div>
                {item.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                        {item.description}
                    </p>
                )}
            </div>
        </Link>
    );
};
