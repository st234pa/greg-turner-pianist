import DefaultLayout from "@/layouts/default";
import Section from "@/layouts/section";
import {
  Tab,
  Tabs,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  ModalFooter,
  Link,
} from "@nextui-org/react";
import { ReactElement, useState } from "react";

type Subscription = {
  title: string;
  "60": number;
  "45": number;
  "30": number;
  highlight?: boolean;
  details: ReactElement;
};

export default function IndexPage() {
  const [selectedDuration, setSelectedDuration] = useState(30);
  const [selectedSubscription, setSelectedSubscription] = useState<
    Subscription | undefined
  >(undefined);

  const subscriptions = [
    {
      title: "Single Lesson",
      "60": 100,
      "45": 79,
      "30": 55,
      details: (
        <ul className="list-disc">
          <li>Pay for one lesson, minimal commitment!</li>
          <li>One makeup per month is allowed.</li>
          <li>
            Makeups are allowed if I am notified of absence at least 24 hours
            before the lesson time.
          </li>
          <li>
            Makeups must be used within 30 days of original time and can not be
            canceled or rescheduled again.
          </li>
          <li>Payment is due at the start of the lesson.</li>
          <li>
            There will be no refunds or makeups for lessons canceled within 24
            hours of the lesson time.
          </li>
          <li>
            Weekly time slots are not guaranteed for this scheduling method.
          </li>
        </ul>
      ),
    },
    {
      title: "Package of 5 Lessons",
      "60": 90,
      "45": 72,
      "30": 50,
      details: (
        <ul className="list-disc">
          <li>This package offers five lessons.</li>
          <li>Payment is due by the start of the first lesson.</li>
          <li>
            For these five lessons, you are given a fixed weekly lesson time for
            five weeks plus one extra week to allow for one rescheduled lesson.
          </li>
          <li>
            There will be no refunds or makeups for lessons canceled within 24
            hours of the lesson time.
          </li>
          <li>
            I will communicate any of my own planned absences at least two weeks
            in advance. Those weeks will not be counted towards the six weeks
            included in this package.
          </li>
          <li>
            For any unexpected absences on my part, I will provide a refund or
            lesson credit.
          </li>
          <li>
            Package must be renewed before the last lesson of the package
            (including missed lessons) to keep your lesson time for the next
            package.
          </li>
          <li>
            Students who wish to take more than their five scheduled lessons
            within the six weeks of the package can do so at a discounted rate,
            depending on availability.
          </li>
        </ul>
      ),
    },
    {
      title: "Package of 15 Lessons",
      "60": 80,
      "45": 64,
      "30": 45,
      details: (
        <ul className="list-disc">
          <li>This package offers 15 lessons.</li>
          <li>Payment is due by the start of the first lesson.</li>
          <li>
            For these 15 lessons, you are given a fixed weekly lesson time for
            15 weeks plus three extra weeks to allow for three rescheduled
            lessons.
          </li>
          <li>
            There will be no refunds or makeups for lessons canceled within 24
            hours of the lesson time.
          </li>
          <li>
            I will communicate any of my own planned absences at least two weeks
            in advance. Those weeks will not be counted towards the 18 weeks
            included in this package.
          </li>
          <li>
            For any unexpected absences on my part, I will provide a refund or
            lesson credit.
          </li>
          <li>
            Package must be renewed before the last lesson of the package
            (including missed lessons) to keep your lesson time for the next
            package.
          </li>
          <li>
            Students who wish to take more than their 15 scheduled lessons
            within the 15 weeks of the package can do so at a discounted rate,
            depending on availability.
          </li>
        </ul>
      ),
      highlight: true,
    },
  ];

  return (
    <DefaultLayout>
      <Section isFirst maxWidth={768}>
        <h1 className="pb-4 text-2xl">Pricing</h1>
        <div className="pb-6 pl-4">
          <ul className="list-disc">
            <li>30-Minute Lessons: Ideal for young beginners</li>
            <li>
              45-Minute Lessons: ideal for intermediate beginners and teenage
              beginners
            </li>
            <li>
              60-Minute Lessons: Best for intermediate and advanced students, as
              well as adult students
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Tabs
            radius="full"
            aria-label="Lesson Duration"
            selectedKey={selectedDuration}
            color="primary"
            onSelectionChange={(key) => {
              setSelectedDuration(key as number);
            }}
          >
            {[30, 45, 60].map((duration) => (
              <Tab
                key={duration}
                shouldSelectOnPressUp
                title={`${duration} min`}
              />
            ))}
          </Tabs>
        </div>
        <div className="pt-6 sm:pt-2 flex flex-col-reverse sm:grid sm:grid-cols-3 gap-3 justify-center items-end">
          {subscriptions.map((subscription) => (
            <div key={subscription.title} className="w-full">
              {subscription.highlight && (
                <div className="text-sm font-bold uppercase pb-1 text-right text-yellow-600">
                  Best Value!
                </div>
              )}
              <div
                className={`w-full rounded-2xl p-2 ${subscription.highlight ? "border-yellow-600 border-2 " : ""}`}
              >
                <Card
                  shadow="sm"
                  className={`w-full sm:${subscription.highlight ? "" : "mb-[2px]"}`}
                  isPressable
                  onPress={() => setSelectedSubscription(subscription)}
                >
                  <CardHeader>
                    <h1>{subscription.title}</h1>
                  </CardHeader>
                  <CardBody>
                    <span className="flex items-center justify-center">
                      <span className="text-4xl pr-1">
                        $
                        {
                          subscription[
                            selectedDuration.toString() as "30" | "45" | "60"
                          ]
                        }
                      </span>
                      / lesson
                    </span>
                  </CardBody>
                  <CardFooter>
                    <div className="w-full text-tiny uppercase text-right text-default-500">
                      Click to learn more
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Modal
        scrollBehavior="inside"
        isOpen={!!selectedSubscription}
        backdrop="blur"
        onOpenChange={() => setSelectedSubscription(undefined)}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1>{selectedSubscription?.title}</h1>
                <p className="text-sm font-normal">
                  $
                  {selectedSubscription
                    ? selectedSubscription[
                        selectedDuration.toString() as "30" | "45" | "60"
                      ]
                    : ""}{" "}
                  for each {selectedDuration}-minute lesson
                </p>
              </ModalHeader>
              <ModalBody>
                <div className="px-4">{selectedSubscription?.details}</div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" radius="full" as={Link} href="/contact">
                  Request a FREE Trial Lesson
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}
