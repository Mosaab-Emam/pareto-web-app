import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { Input } from "./input";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between p-12 py-8 sm:flex-row md:px-24">
      <div>
        Made with ❤️ By
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" className="ml-2 p-0">
              Mosaab Emam
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/mosaabemam.jpg" />
                <AvatarFallback>Mosaab Emam</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Mosaab Emam</h4>
                <p className="text-sm">
                  Full Stack Web Developer from Sudan 🇸🇩
                </p>
                <div className="flex items-center pt-2 text-xs">
                  Follow:
                  <span className="text-muted-foreground">
                    <Link
                      href="https://github.com/Mosaab-Emam"
                      className="ml-2"
                      target="_blank"
                    >
                      Github
                    </Link>
                  </span>
                  <div className="ml-2">·</div>
                  <span className="text-muted-foreground">
                    <Link
                      href="https://twitter.com/EmamMosaab"
                      className="ml-2"
                      target="_blank"
                    >
                      Twitter
                    </Link>
                  </span>
                </div>
                <div className="flex items-center pt-2 text-xs">
                  Support:
                  <span className="text-muted-foreground">
                    <Link
                      href="https://www.buymeacoffee.com/mosaabemam"
                      className="ml-2"
                      target="_blank"
                    >
                      Buy Me a Coffee
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Email" />
        <Button type="submit" className="w-44">
          Get Updated
        </Button>
      </div>
    </footer>
  );
}
