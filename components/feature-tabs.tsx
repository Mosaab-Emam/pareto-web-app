import { databases } from "@/data/databases";
import { frameworks } from "@/data/frameworks";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function FeatureTabs() {
  return (
    <Tabs
      defaultValue="framework"
      orientation="vertical"
      className="grid w-full grid-cols-2 gap-12"
    >
      <TabsList className="h-full w-full flex-col items-baseline py-0">
        <TabsTrigger value="framework" className="w-full grow text-xl">
          Any Framework
        </TabsTrigger>
        <TabsTrigger value="database" className="w-full grow text-xl">
          Any Databse
        </TabsTrigger>
        <TabsTrigger value="integration" className="w-full grow text-xl">
          Any Integration
        </TabsTrigger>
        <TabsTrigger value="infrastructure" className="w-full grow text-xl">
          Any Infrastructure
        </TabsTrigger>
      </TabsList>
      <TabsContent value="framework" className="mt-0">
        <Card>
          <CardContent className="flex flex-wrap gap-6 pt-6">
            {frameworks.map(({ id, icon, name }) => (
              <Image key={id} src={icon} alt={name} width={64} height={64} />
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="database">
        <Card>
          <CardContent className="flex flex-wrap gap-6 pt-6">
            {databases.map(({ id, icon, name }) => (
              <Image key={id} src={icon} alt={name} width={64} height={64} />
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="integration">List of integrations here</TabsContent>
      <TabsContent value="infrastructure">
        List of infrastructure here
      </TabsContent>
    </Tabs>
  );
}
