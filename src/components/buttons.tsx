import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader } from "./ui/card";
export default function ButtonToLink() {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen gap-3 max-w-{300px}">
        <Button asChild className="h-20">
          <Card className="">
            <CardHeader>
              <Link
                href="http://atmis.kilimo.go.tz"
                target="_blank"
                className="text-center"
              >
                ATMIS
                <CardDescription>Agricultural Trade Management</CardDescription>
              </Link>
            </CardHeader>
          </Card>
        </Button>
        <Button asChild className="h-20 w-50">
          <Card className="">
            <CardHeader>
              <Link
                href="http://www.tra.go.tz"
                target="_blank"
                className="text-center"
              >
                TRA
                <CardDescription>
                  Tanzania Revenue Authority- home
                </CardDescription>
              </Link>
            </CardHeader>
          </Card>
        </Button>
        <Button asChild className="h-20 w-50">
          <Card>
            <CardHeader>
              <Link
                href="http://www.tbs.go.tz"
                target="_blank"
                className="text-center"
              >
                TBS
                <CardDescription>Home | TBS</CardDescription>
              </Link>
            </CardHeader>
          </Card>
        </Button>
      </div>
    </>
  );
}
