"use client";

import { logout } from "@/app/(logged-in)/logout-button/actions";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function AppSignoutItem() {
    return (
        <DropdownMenuItem
            className="hover:bg-slate-300 dark:hover:bg-slate-800/60"
            onClick={async () => {
                await logout();
            }}
        >
            <span>Sign out</span>
        </DropdownMenuItem>
    );
}
