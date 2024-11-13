"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Typography from '@mui/material/Typography';

interface ModalIntershipTasksProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalIntershipTasks({
  isOpen,
  onClose,
}: ModalIntershipTasksProps) {
  return (
    <div className="relative">
      <Dialog open={isOpen} onClose={onClose}>
        <DialogBackdrop
          transition
          className="fixed inset-0 z-[99999] bg-black/70 transition-opacity duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-[99999] flex px-4 py-6 sm:px-6">
          <div className="mx-auto flex h-full max-w-full items-center">
            <DialogPanel
              transition
              className="overflow-hidden rounded-2xl bg-white text-black p-6 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
              style={{ maxHeight: '90vh' }}
            >
              <div className="overflow-y-auto" style={{ maxHeight: '80vh' }}>
                <Typography className="text-justify">
                  <h2 className="text-xl font-bold mb-4">Internship Tasks</h2>
                  <p className="mb-6">(22 May 2019 - 14 October 2019)</p>
                  <ol className="pl-6">
                    <li>
                      1. Redesigning the initial design of slideshows for the fair, adding design blocks.
                      <ol className="ml-6">
                        <li>a. Designing slideshows</li>
                        <li>b. Meetings, feedback and performance of new tasks from feedback</li>
                      </ol>
                    </li>

                    <li>
                      2. Rollup design (850x2050cm).
                      <ol className="ml-6">
                        <li>a. 850x2050cm rollup design work</li>
                        <li>b. Meetings, feedback, new design works based on feedback</li>
                      </ol>
                    </li>

                    <li>
                      3. Changes to Astro Baltics web pages to make them user-friendly and mobile-friendly.
                      <ol className="ml-6">
                        <li>a. Organizing the web and making it user-friendly and mobile-friendly</li>
                        <li>b. Tools used: phpstorm, xampp</li>
                      </ol>
                    </li>

                    <li>
                      4. Designing information brochures for Astro Baltic products.
                      <ol className="ml-6">
                        <li>a. Designing brochures for products offered by Astro Baltic for events</li>
                      </ol>
                    </li>

                    <li>
                      5. Design and development of a reservation system (Adobe XD).
                      <ol className="ml-6">
                        <li>a. Creating an initial design in Adobe XD</li>
                        <li>b. User journey creation, testing</li>
                        <li>c. Development of design work</li>
                        <li>d. Creating a prototype and creating customer views</li>
                      </ol>
                    </li>

                    <li>
                      6. Demo of Astro Baltics product for large touchscreens.
                      <ol className="ml-6">
                        <li>
                          a. The goal was to create a larger version of the mobile application for a large touchscreen that could be used at events and fairs
                        </li>
                      </ol>
                    </li>

                    <li>
                      7. Astro Baltics car design (advertising stickers).
                      <ol className="ml-6">
                        <li>a. The goal was to design advertising stickers for the new Astro Baltics car</li>
                      </ol>
                    </li>

                    <li>
                      8. Designing Astro Baltics trade fair booth (2m x 1.5m x 2.5m).
                      <ol className="ml-6">
                        <li>
                          a. The goal was to design the wall of the exhibition booth (2m wide, 1.5m deep, 2.5m high)
                        </li>
                        <li>b. Statement of the task by the public relations manager and supervisor</li>
                      </ol>
                    </li>

                    <li>
                      9. Participation in Udemy design courses.
                      <ol className="ml-6">
                        <li>a. The task was to participate in an Udemy course once a week with the design department</li>
                      </ol>
                    </li>

                    <li>
                      10. WordPress works: adding products and modifying designs.
                      <ol className="ml-6">
                        <li>a. The task is to add Astro Baltics products to WordPress</li>
                        <li>b. Modification and improvement of the existing design</li>
                        <li>c. Setting of the task by the instructor</li>
                      </ol>
                    </li>

                    <li>
                      11. Creation of a prototype for Astro Baltics product (economic software).
                      <ol className="ml-6">
                        <li>
                          a. The task was to create a prototype of economic software that would make the use of the Astro Baltics product more user-friendly for customers
                        </li>
                      </ol>
                    </li>

                    <li>
                      12. Testing prototype and providing feedback.
                      <ol className="ml-6">
                        <li>a. Testing the prototype currently in development and giving feedback</li>
                        <li>b. Making your own prototype to show your vision and give new ideas for the next version</li>
                      </ol>
                    </li>
                  </ol>
                </Typography>

                <div className="flex justify-center mt-6">
                  <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>

              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
