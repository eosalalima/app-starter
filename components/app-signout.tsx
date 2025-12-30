"use client";

import { logout } from "@/app/(logged-in)/logout-button/actions";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export default function AppSignoutItem() {
    return (
        <DropdownMenuItem
            onClick={async () => {
                await logout();
            }}
        >
            <span>Sign out</span>
        </DropdownMenuItem>
    );
}
