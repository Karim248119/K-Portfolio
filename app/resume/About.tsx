import { TabsContent } from "@/components/ui/tabs";
import React from "react";

const Line = ({ first, second }: { first: string; second: string }) => {
  return (
    <div className="flex gap-3 justify-between sm:justify-start w-full">
      <div className="text-main sm:text-xs xl:text-base font-semibold">
        {first}
      </div>
      <div className="text-white">{second}</div>
    </div>
  );
};

export default function About() {
  return (
    <TabsContent value="About">
      <div className="gid sm:grid-cols-2 justify-center sm:justify-start">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 ">
          <h1 className="text-3xl font-bold">About me</h1>
          <p className=" text-white/60">
            I am a passionate self-taught front-end developer. I love coding
            creative UIs and bringing designs to life with clean, efficient
            code. My expertise includes building responsive and user friendly
            websites and applications, constantly learning and adapting to new
            technologies and trends to deliver the best digital experiences.
          </p>
          <div className="w-full grid sm:grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <Line first="Name" second="Karim AbdelHalim" />
              <Line first="Nationality" second="Egyptian" />
              <Line first="Freelance" second="Available" />
            </div>
            <div className="flex flex-col gap-2">
              <Line first="Phone" second="(+20) 102 309 6263" />
              <Line first="Email" second="karimoda66@gmail.com" />
              <Line first="Language" second="Arabic, English" />
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
}
