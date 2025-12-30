"use client";

import * as React from "react";

import {
    IconCamera,
    IconChartBar,
    IconDashboard,
    IconDatabase,
    IconFileAi,
    IconFileDescription,
    IconFileWord,
    IconFolder,
    IconHelp,
    IconInnerShadowTop,
    IconListDetails,
    IconReport,
    IconSearch,
    IconSettings,
    IconUsers,
} from "@tabler/icons-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "@/components/nav-user";
import { NavDocuments } from "@/components/nav-documents";

const data = {
    user: {
        name: "Gerick Andrei M. Salalima",
        email: "gerick.salalima@example.com",
        avatar: "https://ui-avatars.com/api/?name=Gerick+Andrei+Salalima&size=128",
    },

    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: IconDashboard,
        },
        {
            title: "Lifecycle",
            url: "/lifecycle",
            icon: IconListDetails,
        },
        {
            title: "Analytics",
            url: "/analytics",
            icon: IconChartBar,
        },
        {
            title: "Projects",
            url: "/projects",
            icon: IconFolder,
        },
        {
            title: "Team",
            url: "/team",
            icon: IconUsers,
        },
    ],

    navClouds: [
        {
            title: "Capture",
            icon: IconCamera,
            isActive: true,
            url: "/capture",
            items: [
                {
                    title: "Active Proposals",
                    url: "/capture/active-proposals",
                },
                {
                    title: "Archived",
                    url: "/capture/archived",
                },
            ],
        },
        {
            title: "Proposal",
            icon: IconFileDescription,
            url: "/proposal",
            items: [
                {
                    title: "Active Proposals",
                    url: "/proposal/active-proposals",
                },
                {
                    title: "Archived",
                    url: "/proposal/archived",
                },
            ],
        },
        {
            title: "Prompts",
            icon: IconFileAi,
            url: "/prompts",
            items: [
                {
                    title: "Active Proposals",
                    url: "/prompts/active-proposals",
                },
                {
                    title: "Archived",
                    url: "/prompts/archived",
                },
            ],
        },
    ],

    navSecondary: [
        {
            title: "Settings",
            url: "/settings",
            icon: IconSettings,
        },
        {
            title: "Get Help",
            url: "/help",
            icon: IconHelp,
        },
        {
            title: "Search",
            url: "/search",
            icon: IconSearch,
        },
    ],

    documents: [
        {
            name: "Data Library",
            url: "/data-library",
            icon: IconDatabase,
        },
        {
            name: "Reports",
            url: "/reports",
            icon: IconReport,
        },
        {
            name: "Word Assistant",
            url: "/word-assistant",
            icon: IconFileWord,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:p-1.5!"
                        >
                            <a href="#">
                                <IconInnerShadowTop className="size-5!" />
                                <span className="text-base font-semibold">
                                    Acme Inc.
                                </span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavDocuments items={data.documents} />
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
