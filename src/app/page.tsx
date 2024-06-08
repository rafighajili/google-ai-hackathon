"use client";

import { Button, Card, Divider, Progress, Skeleton, Tab, Tabs } from "@nextui-org/react";
import { BrainIcon, CigaretteIcon, DropletIcon, HeartPulseIcon } from "lucide-react";
import { Fragment, useState } from "react";
import { Button as AriaButton, FileTrigger } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const CATEGORIES_DATA = [
  { key: "brain", title: "Brain tumor detection", Icon: BrainIcon },
  { key: "lung", title: "Lung cancer detection", Icon: CigaretteIcon },
  { key: "heart", title: "Heart values detection", Icon: HeartPulseIcon },
  { key: "blood", title: "Blood values detection", Icon: DropletIcon },
] as const;

type CategoriesKey = (typeof CATEGORIES_DATA)[number]["key"];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<CategoriesKey>(CATEGORIES_DATA[0]["key"]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <section>
        <div className="container space-y-12 pb-12 pt-24">
          <h1 className="text-primary text-5xl font-bold max-lg:text-3xl">Early disease detection and prediction</h1>

          <div className="overflow-x-auto">
            <Tabs
              selectedKey={selectedCategory}
              onSelectionChange={(key) => setSelectedCategory(key as CategoriesKey)}
              aria-label="Categories"
              color="primary"
              variant="bordered"
            >
              {CATEGORIES_DATA.map(({ key, title, Icon }) => (
                <Tab
                  key={key}
                  title={
                    <div className="flex items-center space-x-3">
                      <Icon className="size-5" />
                      <span>{title}</span>
                    </div>
                  }
                />
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12">
          <div className="flex items-center gap-24 max-lg:flex-col max-lg:gap-12">
            <Card className="aspect-square w-96 max-sm:w-full">
              {selectedImage ? (
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="selected image"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="text-default-500 grid h-full w-full place-items-center p-12 text-center">Choose your image in order to proceed</div>
              )}
            </Card>

            <div className="flex w-full flex-1 flex-col gap-6">
              <FileTrigger acceptedFileTypes={["image/*"]} onSelect={(e) => e && setSelectedImage(Array.from(e)[0])}>
                <AriaButton
                  className={({ isHovered }) =>
                    twMerge(
                      "grid h-48 w-full place-items-center rounded-3xl border border-dashed duration-200",
                      selectedImage
                        ? twMerge("border-primary bg-primary/10 text-primary", isHovered && "bg-primary/20")
                        : twMerge("border-default-300 text-default-500", isHovered && "border-default-700 text-default-900"),
                    )
                  }
                >
                  {selectedImage ? "Change" : "Choose"} your image
                </AriaButton>
              </FileTrigger>

              <div className="flex items-center justify-end gap-6">
                {isLoading && <Progress isIndeterminate size="sm" />}
                <Button color="primary" className="min-w-max" isDisabled={selectedImage === null} onPress={() => setIsLoading((prev) => !prev)}>
                  Upload your image
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-12 py-12">
          <h2 className="text-primary text-3xl font-bold uppercase underline max-lg:text-xl">Analysis output:</h2>

          <div className="grid grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Fragment key={i}>
                {isLoading ? (
                  <Skeleton className="h-48 rounded-3xl" />
                ) : (
                  <div className="border-primary flex h-48 flex-col items-center justify-center gap-1.5 rounded-3xl border uppercase">
                    <h3 className="text-primary text-sm font-bold">Lorem ipsum</h3>
                    <p className="text-lg font-medium">dolor sit amet</p>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-12 pb-24 pt-12">
          <h2 className="text-primary text-3xl font-bold uppercase underline max-lg:text-xl">Similar patients:</h2>

          <div className="flex flex-col gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Fragment key={i}>
                {isLoading ? (
                  <Skeleton className="h-[calc(84*4px)] rounded-[14px]" />
                ) : (
                  <Card className="p-6">
                    <div className="flex items-center gap-12">
                      <div className="bg-primary size-72 rounded-3xl" />

                      <div className="flex flex-1 flex-col gap-6">
                        <div className="flex flex-col gap-3">
                          <div>
                            <span className="text-primary text-sm font-bold uppercase">Patient&apos;s full name:</span> Rafig Hajili
                          </div>

                          <div>
                            <span className="text-primary text-sm font-bold uppercase">Patient&apos;s gender:</span> Male
                          </div>

                          <div>
                            <span className="text-primary text-sm font-bold uppercase">Patient&apos;s birth date:</span> 08.04.2003
                          </div>
                        </div>

                        <Divider />

                        <div className="flex flex-col gap-3">
                          <span className="text-primary text-sm font-bold uppercase underline">Patient&apos;s treatment process:</span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa deleniti eaque eius molestiae quae qui sequi
                            soluta tempore. Laboriosam?
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
