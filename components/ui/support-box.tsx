import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import supportList from "@/data/support-list";

export default function SupportBox() {
  return (
    <Card className="w-full">
      <CardHeader className="text-center">
        <CardTitle>We Support Everything</CardTitle>
        <CardDescription>
          Any framework, any language, any integration, any infrastructure.
        </CardDescription>
      </CardHeader>
      <CardContent className="columns-3">
        {supportList.map((sublist) => (
          <>
            <h4 className="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">
              {sublist.title}
            </h4>
            <ul className="mb-2 ml-2">
              {sublist.list.map((item) => (
                <>
                  <li className="mb-2 flex items-center">
                    <div
                      className={`mr-2 h-4 w-4 rounded-full ${
                        item.status == "supported"
                          ? "bg-green-500"
                          : item.status == "wip"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    />
                    {item.name}
                  </li>
                </>
              ))}
            </ul>
          </>
        ))}
      </CardContent>
      <CardFooter className="border-t-2 border-gray-100 pt-4">
        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
        Supported
        <div className="ml-4 mr-2 h-4 w-4 rounded-full bg-yellow-500" />
        Work In Progress
        <div className="ml-4 mr-2 h-4 w-4 rounded-full bg-red-500" />
        Scheduled
      </CardFooter>
    </Card>
  );
}
