"use client";

import { Button, Card, Divider, Modal, ModalBody, ModalContent, ModalHeader, Progress, Skeleton, Tab, Tabs, useDisclosure } from "@nextui-org/react";
import { BrainIcon, CigaretteIcon, DropletIcon, FileText, HeartPulseIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import { Button as AriaButton, FileTrigger } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { BRAIN_SIMILARITIES, BrainSimilarityType } from "#/constants";

const CATEGORIES_DATA = [
  { key: "brain", title: "Brain tumor detection", Icon: BrainIcon },
  { key: "lung", title: "Lung cancer detection", Icon: CigaretteIcon },
  { key: "heart", title: "Heart values detection", Icon: HeartPulseIcon },
  { key: "blood", title: "Blood values detection", Icon: DropletIcon },
] as const;

type CategoriesKey = (typeof CATEGORIES_DATA)[number]["key"];

type AnalysisType = { state: BrainSimilarityType["brain_disease"] | "no_tumor"; size: number };

const delay = (ms: number) => new Promise((_) => setTimeout(_, ms));

function get_random<T>(list: T[]) {
  return list[Math.floor(Math.random() * list.length)];
}

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<CategoriesKey>(CATEGORIES_DATA[0]["key"]);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const [analysisData, setAnalysisData] = useState<AnalysisType | null>(null);
  const [similarityData, setSimilarityData] = useState<BrainSimilarityType[] | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleUpload() {
    setIsLoading(true);
    await delay(5000);
    setIsLoading(false);

    const rndm = parseFloat((Math.random() * 10).toFixed(2));
    const randomSize = get_random([0, rndm, rndm]);
    setAnalysisData({ state: randomSize === 0 ? "no_tumor" : get_random(["glioma_tumor", "meningioma_tumor", "pituitary_tumor"]), size: randomSize });
  }

  useEffect(() => {
    analysisData !== null && setSimilarityData(BRAIN_SIMILARITIES.filter((item) => item.brain_disease === analysisData.state));
  }, [analysisData]);

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

      {selectedCategory === "brain" ? (
        <>
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
                    <div className="text-default-500 grid h-full w-full place-items-center p-12 text-center">
                      Choose your image in order to proceed
                    </div>
                  )}
                </Card>

                <div className="flex w-full flex-1 flex-col gap-6">
                  <FileTrigger acceptedFileTypes={["image/*"]} onSelect={(e) => e && setSelectedImage(Array.from(e)[0])}>
                    <AriaButton
                      className={({ isHovered, isDisabled }) =>
                        twMerge(
                          "grid h-48 w-full place-items-center rounded-3xl border border-dashed duration-200",
                          selectedImage
                            ? twMerge("border-primary bg-primary/10 text-primary", isHovered && "bg-primary/20")
                            : twMerge("border-default-300 text-default-500", isHovered && "border-default-700 text-default-900"),
                          isDisabled && "cursor-not-allowed opacity-50",
                        )
                      }
                      isDisabled={isLoading}
                    >
                      {selectedImage ? "Change" : "Choose"} your image
                    </AriaButton>
                  </FileTrigger>

                  <div className="flex items-center justify-end gap-6">
                    {isLoading && <Progress aria-label="loading progress" isIndeterminate size="sm" />}
                    <Button color="primary" className="min-w-max" isDisabled={selectedImage === null || isLoading} onPress={() => handleUpload()}>
                      Upload your image
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {(analysisData !== null || isLoading) && (
            <section>
              <div className="container space-y-12 py-12">
                <h2 className="text-primary text-3xl font-bold uppercase underline max-lg:text-xl">Analysis output:</h2>

                <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1">
                  {isLoading ? (
                    <>
                      <Skeleton className="h-48 rounded-3xl" />
                      <Skeleton className="h-48 rounded-3xl" />
                    </>
                  ) : (
                    analysisData !== null && (
                      <>
                        <div className="border-primary flex h-48 flex-col items-center justify-center gap-1.5 rounded-3xl border text-center uppercase">
                          <h3 className="text-primary text-sm font-bold">Tumor type</h3>
                          <p className="text-lg font-medium">{analysisData.state.replace("_", " ")}</p>
                        </div>

                        {!!analysisData.size && (
                          <div className="border-primary flex h-48 flex-col items-center justify-center gap-1.5 rounded-3xl border text-center uppercase">
                            <h3 className="text-primary text-sm font-bold">Tumor size</h3>
                            <p
                              className={twMerge(
                                "text-lg font-medium",
                                analysisData.size <= 2 ? "text-success" : analysisData.size >= 5 ? "text-danger" : "text-warning",
                              )}
                            >
                              {analysisData.size} cm
                            </p>
                          </div>
                        )}
                      </>
                    )
                  )}
                </div>
              </div>
            </section>
          )}

          {(similarityData !== null || isLoading) && (
            <section>
              <div className="container space-y-12 pb-24 pt-12">
                <h2 className="text-primary text-3xl font-bold uppercase underline max-lg:text-xl">Similar patients:</h2>

                <div className="flex flex-col gap-6">
                  {isLoading ? (
                    <>
                      <Skeleton className="h-[calc(84*4px)] rounded-[14px]" />
                      <Skeleton className="h-[calc(84*4px)] rounded-[14px]" />
                      <Skeleton className="h-[calc(84*4px)] rounded-[14px]" />
                    </>
                  ) : analysisData?.state !== "no_tumor" ? (
                    similarityData !== null && similarityData.map((data) => <PatientCard key={data.full_name} {...data} />)
                  ) : (
                    <p className="text-xl font-bold uppercase">Patient has a good condition</p>
                  )}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <section>
          <div className="container pb-24 pt-12">
            <h2 className="text-3xl font-bold uppercase max-lg:text-xl">Coming soon...</h2>
          </div>
        </section>
      )}
    </>
  );
}

function PatientCard(props: BrainSimilarityType) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="p-6">
        <div className="relative flex items-center gap-12 max-lg:flex-col">
          <div className="bg-primary aspect-square w-72 overflow-hidden rounded-3xl max-sm:w-full">
            <Image src={props.image} alt={props.full_name} width={300} height={300} className="h-full w-full object-cover object-center" />
          </div>

          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-primary text-sm font-bold uppercase">Patient&apos;s full name:</span> {props.full_name}
              </div>

              <div>
                <span className="text-primary text-sm font-bold uppercase">Patient&apos;s gender:</span> {props.gender === "K" ? "Male" : "Female"}
              </div>

              <div>
                <span className="text-primary text-sm font-bold uppercase">Patient&apos;s birth date:</span> {props.birthdate}
              </div>

              <div>
                <span className="text-primary text-sm font-bold uppercase">Patient&apos;s phone number:</span> {props.phone_number}
              </div>
            </div>

            <Divider />

            <div className="flex flex-col gap-3">
              <span className="text-primary text-sm font-bold uppercase underline">Patient&apos;s treatment process:</span>
              <p className="whitespace-pre-wrap lg:line-clamp-2">{props.main_page}</p>
            </div>

            <Button
              color="primary"
              variant="flat"
              className="right-0 top-0 lg:absolute"
              endContent={<FileText className="size-5" />}
              onPress={onOpen}
            >
              Show more
            </Button>
          </div>
        </div>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" scrollBehavior="inside">
        <ModalContent>
          <ModalHeader className="p-6 pb-0">More detailed information</ModalHeader>

          <ModalBody className="p-6">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-12 max-lg:flex-col">
                <div className="bg-primary aspect-square w-72 overflow-hidden rounded-3xl max-sm:w-full">
                  <Image src={props.image} alt={props.full_name} width={300} height={300} className="h-full w-full object-cover object-center" />
                </div>

                <div className="flex flex-1 flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="text-primary text-sm font-bold uppercase">Patient&apos;s full name:</span> {props.full_name}
                    </div>

                    <div>
                      <span className="text-primary text-sm font-bold uppercase">Patient&apos;s gender:</span>{" "}
                      {props.gender === "K" ? "Male" : "Female"}
                    </div>

                    <div>
                      <span className="text-primary text-sm font-bold uppercase">Patient&apos;s birth date:</span> {props.birthdate}
                    </div>

                    <div>
                      <span className="text-primary text-sm font-bold uppercase">Patient&apos;s phone number:</span> {props.phone_number}
                    </div>
                  </div>
                </div>
              </div>

              <Divider />

              <div className="flex flex-col gap-3">
                <span className="text-primary text-sm font-bold uppercase underline">Patient&apos;s treatment process:</span>
                <p className="whitespace-pre-wrap">{props.main_page}</p>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-primary text-sm font-bold uppercase underline">Patient&apos;s treatment process:</span>
                <p className="whitespace-pre-wrap">{props.additional_page}</p>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
