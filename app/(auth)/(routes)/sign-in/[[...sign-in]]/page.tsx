import { SignIn } from "@clerk/nextjs";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <>
      <div className="pb-4">
        <Card>
          <CardHeader>
            <CardTitle>Account Info</CardTitle>
            <CardDescription>
              Use the following details to sign in
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Email: test@test.com</p>
            <p>Password: 123</p>
          </CardContent>
        </Card>
      </div>
      <SignIn />
    </>
  );
}
