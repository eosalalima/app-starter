"use client";

import { IconCirclePlusFilled, IconMail, type Icon } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon?: Icon;
    }[];
}) {
    const pathname = usePathname();

    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center gap-2">
                        <SidebarMenuButton
                            tooltip="Quick Create"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
                        >
                            <IconCirclePlusFilled />
                            <span>Quick Create</span>
                        </SidebarMenuButton>
                        <Button
                            size="icon"
                            className="size-8 group-data-[collapsible=icon]:opacity-0 border-gray-200"
                            variant="outline"
                        >
                            <IconMail />
                            <span className="sr-only">Inbox</span>
                        </Button>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive =
                            pathname === item.url ||
                            pathname.startsWith(`${item.url}/`);

                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    asChild
                                    isActive={isActive}
                                    className="rounded-md data-[active=true]:bg-slate-900 data-[active=true]:text-white data-[active=true]:shadow-sm         data-[active=true]:[&>svg]:text-white hover:bg-slate-300 dark:data-[active=true]:bg-primary dark:data-[active=true]:text-primary-foreground dark:hover:bg-slate-800/80"
                                >
                                    <a
                                        href={item.url}
                                        aria-current={
                                            isActive ? "page" : undefined
                                        }
                                    >
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
