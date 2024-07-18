import DefaultLayout from '@/layouts/default';
import Section from '@/layouts/section';
import {
  CheckboxGroup,
  Checkbox,
  Input,
  Textarea,
  Button,
  Link,
} from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/modal';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const timeSlots = [
  'Morning (~9am-12pm)',
  'Early afternoon (~12pm-3pm)',
  'Late afternoon (~3pm-5pm)',
  'Evening (~5pm-8pm)',
];

export default function IndexPage() {
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<
    Map<string, string[]>
  >(new Map());
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [zip, setZip] = useState('');
  const [notes, setNotes] = useState('');

  const [validationModalOpen, setValidationModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const [submitState, setSubmitState] = useState<string | undefined>(undefined);
  const submitAttempted = submitState !== undefined;
  const submitting = submitState === 'inProgress';
  const abortController = useRef(new AbortController());

  useEffect(() => {
    return () => abortController.current.abort();
  }, []);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const invalidInputs =
    !email ||
    !name ||
    !zip ||
    isInvalidEmail(email) ||
    isInvalidZip(zip) ||
    isInvalidTimeslots(selectedTimeSlots);

  function onSubmit() {
    abortController.current.abort();
    abortController.current = new AbortController();
    setSubmitState('inProgress');
    setErrorModalOpen(false);
    const currentDate = new Date();
    executeRecaptcha &&
      executeRecaptcha('submit')
        .then((token: string) =>
          fetch('/api/submit', {
            method: 'POST',
            body: JSON.stringify({
              date: getDate(currentDate),
              time: getTime(currentDate),
              token,
              email,
              name,
              zip,
              notes,
              availability: getAvailability(selectedTimeSlots),
            }),
            signal: abortController.current.signal,
          })
        )
        .then((response) => {
          if (response.ok) {
            setSubmitState('success');
          } else {
            throw new Error();
          }
        })
        .catch(() => {
          setErrorModalOpen(true);
          setSubmitState('error');
        });
  }

  if (submitState === 'success') {
    return (
      <DefaultLayout>
        <Section
          maxWidth="max-w-4xl"
          isFirst
        >
          <div className="w-full pb-8">
            <h1 className="text-2xl pb-2">Thank you!</h1>
            Your response has been submitted. I'll get back to you as soon as I
            can.
          </div>
        </Section>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Section
        maxWidth="max-w-3xl"
        isFirst
      >
        <div className="w-full pb-4">
          <h1 className="text-3xl sm:text-4xl pb-4">
            Request a FREE Trial Lesson
          </h1>
          <p className="text-sm font-light">
            Please provide your contact information, location, and availability.
          </p>
          <p className="text-sm text-default-600 font-light">
            You can also reach me at{' '}
            <Link
              size="sm"
              href="mailto:regturnerpianist@gmail.com"
              color="secondary"
            >
              gregturnerpianist@gmail.com
            </Link>{' '}
            if you prefer! I will get back to you as soon as I can.
          </p>
        </div>
        <div className="w-full max-w-[400px] pb-4">
          <Input
            type="text"
            label="Name"
            isRequired
            value={name}
            onValueChange={setName}
            errorMessage="Please provide your name"
            isDisabled={submitting}
            isInvalid={submitAttempted && !name}
          />
        </div>
        <div className="w-full max-w-[400px] pb-4">
          <Input
            type="email"
            label="Email"
            isRequired
            onValueChange={setEmail}
            value={email}
            isInvalid={submitAttempted && isInvalidEmail(email)}
            errorMessage="Please enter a valid email"
            isDisabled={submitting}
          />
        </div>
        <div className="w-full max-w-[400px] pb-4">
          <Input
            type="text"
            inputMode="numeric"
            label="Zip"
            isRequired
            value={zip}
            onValueChange={setZip}
            isInvalid={submitAttempted && isInvalidZip(zip)}
            errorMessage="Please enter a valid zip code"
            isDisabled={submitting}
          />
        </div>
        <CheckboxGroup
          label="Which days are you available for a trial lesson?"
          value={Array.from(selectedTimeSlots.keys())}
          className="pb-6"
          orientation="horizontal"
          onValueChange={(newSelectedDays) => {
            setSelectedTimeSlots((prev) => {
              const newSelectedTimeSlots = new Map();
              daysOfWeek
                .filter((day) => newSelectedDays.includes(day))
                .forEach((day) => {
                  newSelectedTimeSlots.set(day, prev.get(day) || []);
                });
              return newSelectedTimeSlots;
            });
          }}
          isRequired
          isInvalid={submitAttempted && selectedTimeSlots.size === 0}
          errorMessage="Please select at least one day"
          isDisabled={submitting}
        >
          {daysOfWeek.map((day) => (
            <Checkbox
              key={day}
              value={day}
            >
              {day}
            </Checkbox>
          ))}
        </CheckboxGroup>
        {daysOfWeek
          .filter((day) => selectedTimeSlots.has(day))
          .map((selectedDay) => (
            <CheckboxGroup
              className="pb-6"
              key={`${selectedDay}-timeSlots`}
              value={selectedTimeSlots.get(selectedDay) || []}
              isRequired
              label={`What times on ${selectedDay} work for you?`}
              onValueChange={(selection) => {
                setSelectedTimeSlots((prev) => {
                  const newSelectedTimeSlots = new Map(prev);
                  newSelectedTimeSlots.set(
                    selectedDay,
                    timeSlots.filter((timeSlot) => selection.includes(timeSlot))
                  );
                  return newSelectedTimeSlots;
                });
              }}
              isInvalid={
                submitAttempted &&
                selectedTimeSlots.get(selectedDay)?.length === 0
              }
              errorMessage="Please select at least one time slot"
              isDisabled={submitting}
            >
              {timeSlots.map((timeSlot) => (
                <Checkbox
                  key={timeSlot}
                  value={timeSlot}
                >
                  {timeSlot}
                </Checkbox>
              ))}
            </CheckboxGroup>
          ))}
        <Textarea
          className="pb-7"
          label="Any questions, comments, or concerns?"
          isDisabled={submitting}
          value={notes}
          onValueChange={setNotes}
        />
        <Button
          color="primary"
          isDisabled={(invalidInputs && submitAttempted) || submitting}
          radius="full"
          fullWidth
          onPress={() => {
            if (!invalidInputs) {
              setConfirmationModalOpen(true);
            } else if (!submitAttempted && invalidInputs) {
              setValidationModalOpen(true);
              setSubmitState('invalid');
            }
          }}
          isLoading={submitting}
        >
          Submit
        </Button>
      </Section>
      <Modal
        placement="center"
        size="sm"
        isOpen={validationModalOpen}
        backdrop="blur"
        onOpenChange={setValidationModalOpen}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Invalid input
              </ModalHeader>
              <ModalBody>
                Please make sure all fields are populated correctly.
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  radius="full"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  radius="full"
                  onPress={() => {
                    onClose();
                  }}
                >
                  OK
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        placement="center"
        size="sm"
        backdrop="blur"
        isOpen={confirmationModalOpen}
        onOpenChange={setConfirmationModalOpen}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure?
              </ModalHeader>
              <ModalBody>This action cannot be undone.</ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  radius="full"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  radius="full"
                  onPress={() => {
                    onSubmit();
                    onClose();
                  }}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        placement="center"
        size="sm"
        isOpen={errorModalOpen}
        backdrop="blur"
        onOpenChange={setErrorModalOpen}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Oops!</ModalHeader>
              <ModalBody>Something went wrong. Please try again.</ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  radius="full"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  radius="full"
                  onPress={() => {
                    onSubmit();
                    onClose();
                  }}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}

function isInvalidEmail(value: string) {
  return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) ? false : true;
}

function isInvalidZip(value: string) {
  return value.match(/^[0-9]{5}(?:-[0-9]{4})?$/i) ? false : true;
}

function isInvalidTimeslots(selectedTimeSlots: Map<string, string[]>) {
  return (
    selectedTimeSlots.size === 0 ||
    Array.from(selectedTimeSlots.values()).find(
      (timeSlots) => timeSlots.length === 0
    )
  );
}

function getAvailability(selectedTimeslots: Map<string, string[]>) {
  return Array.from(selectedTimeslots.entries())
    .map((entry) => `${entry[0].substring(0, 3)}: ${entry[1].join(', ')}`)
    .join('\n');
}

function getDate(currentDate: Date) {
  return `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
}

function getTime(currentDate: Date) {
  return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}
