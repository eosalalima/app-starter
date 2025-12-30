import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import TwoFactorAuthForm from "./two-factor-auth-form";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import db from "@/db/drizzle";
import { Button } from "@/components/ui/button";

export default async function MyAccount() {
    const session = await auth();

    const [user] = await db
        .select({
            twoFactorAuthActivated: users.twoFactorAuthActivated,
        })
        .from(users)
        .where(eq(users.id, parseInt(session!.user!.id!)))
        .execute();

    return (
        <Card className="w-[350px] border-gray-200">
            <CardHeader>
                <CardTitle>My Account</CardTitle>
            </CardHeader>
            <CardContent>
                <Label>Email Address</Label>
                <div className="text-muted-foreground">
                    {session?.user?.email}
                </div>
                <TwoFactorAuthForm
                    twoFactorActivated={user?.twoFactorAuthActivated ?? false}
                />
                <Button
                    className="mt-2 hover:bg-secondary-foreground/10"
                    variant="secondary"
                    asChild
                >
                    <a href="/change-password">Change Password</a>
                </Button>
            </CardContent>
        </Card>
    );
}
