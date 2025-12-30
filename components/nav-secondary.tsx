"use client";

import * as React from "react";
import { type Icon } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSecondary({
    items,
    ...props
}: {
    items: {
        title: string;
        url: string;
        icon: Icon;
    }[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
    const pathname = usePathname();

    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive =
                            pathname === item.url ||
                            pathname.startsWith(`${item.url}/`);

                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={isActive}
                                    className="rounded-md data-[active=true]:bg-slate-900 data-[active=true]:text-white data-[active=true]:shadow-sm data-[active=true]:[&>svg]:text-white hover:bg-slate-300 dark:hover:bg-slate-800/60"
                                >
                                    <a href={item.url}>
                                        <item.icon />
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
