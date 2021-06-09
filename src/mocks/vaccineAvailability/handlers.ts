import { rest } from "msw";
import { VaccineAvailabilityExpandedResponse } from "../../apiClient";

export const vaccineAvailabilityHandlers = [
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/vaccine-availability`,
    (req, res, ctx) => {
      const response: VaccineAvailabilityExpandedResponse[] = [
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          numberAvailable: 0,
          numberTotal: 0,
          date: "2021-05-01",
          vaccine: 1,
          inputType: 1,
          tags: "high-risk",
          createdAt: "2021-05-01T21:07:28.232Z",
          timeslots: [],
          requirements: [
            {
              id: "f7c6fd71-a8ab-40e9-9c8b-cfc8e257c486",
              vaccineAvailability: "e92693f3-1e50-45ea-80bd-1fae24814bc3",
              requirement: 4,
              active: true,
              name: "HotSpot",
              description: "18+ in Specific Postal Codes",
              createdAt: "2021-05-03T02:00:01.847000+00:00",
            },
          ],
          location: {
            id: 0,
            name: "Location1 with no availability",
            phone: "(613) 555-5555",
            notes: "",
            active: 1,
            postcode: "K2K 2N6",
            url: "https://idapharmacy.com/",
            tags: "IDA",
            createdAt: "2021-05-01T21:07:28.232Z",
            organization: {
              createdAt: "2021-05-01T21:07:28.232Z",
              id: 0,
              shortName: "IDA",
              description: "IDA org description",
              fullName: "Independent Druggists' Alliance",
              url: "https://idapharmacy.com/",
            },
            address: {
              id: 123456,
              line1: "250 Stittsville Main St",
              line2: "",
              city: "Stittsville",
              province: "Ontario",
              postcode: "K2S 1S9",
              createdAt: "2021-05-01T21:07:28.232Z",
            },
          },
        },
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
          numberAvailable: 4,
          numberTotal: 10,
          date: "2021-05-01",
          vaccine: 1,
          inputType: 1,
          tags: "high-risk",
          createdAt: "2021-05-01T21:07:28.232Z",
          timeslots: [],
          requirements: [
            {
              id: "f7c6fd71-a8ab-40e9-9c8b-cfc8e257c486",
              vaccineAvailability: "e92693f3-1e50-45ea-80bd-1fae24814bc3",
              requirement: 4,
              active: true,
              name: "HotSpot",
              description: "18+ in Specific Postal Codes",
              createdAt: "2021-05-03T02:00:01.847000+00:00",
            },
          ],
          location: {
            id: 0,
            name: "Location1 with availability",
            phone: "(613) 555-5555",
            notes: "",
            active: 1,
            postcode: "K2K 2N6",
            url: "https://idapharmacy.com/",
            tags: "IDA",
            createdAt: "2021-05-01T21:07:28.232Z",
            organization: {
              createdAt: "2021-05-01T21:07:28.232Z",
              id: 0,
              shortName: "IDA",
              description: "IDA org description",
              fullName: "Independent Druggists' Alliance",
              url: "https://idapharmacy.com/",
            },
            address: {
              id: 123456,
              line1: "250 Stittsville Main St",
              line2: "",
              city: "Stittsville",
              province: "Ontario",
              postcode: "K2S 1S9",
              createdAt: "2021-05-01T21:07:28.232Z",
            },
          },
        },
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa8",
          numberAvailable: 0,
          numberTotal: 0,
          date: "2021-05-01",
          vaccine: 1,
          inputType: 1,
          tags: "high-risk",
          createdAt: "2021-05-01T21:07:28.232Z",
          timeslots: [],
          requirements: [
            {
              id: "f7c6fd71-a8ab-40e9-9c8b-cfc8e257c486",
              vaccineAvailability: "e92693f3-1e50-45ea-80bd-1fae24814bc3",
              requirement: 4,
              active: true,
              name: "HotSpot",
              description: "18+ in Specific Postal Codes",
              createdAt: "2021-05-03T02:00:01.847000+00:00",
            },
          ],
          location: {
            id: 0,
            name: "Location2 with no availability",
            phone: "(613) 555-5555",
            notes: "",
            active: 1,
            postcode: "K2K 2N6",
            url: "https://idapharmacy.com/",
            tags: "IDA",
            createdAt: "2021-05-01T21:07:28.232Z",
            organization: {
              createdAt: "2021-05-01T21:07:28.232Z",
              id: 0,
              shortName: "IDA",
              description: "IDA org description",
              fullName: "Independent Druggists' Alliance",
              url: "https://idapharmacy.com/",
            },
            address: {
              id: 123456,
              line1: "250 Stittsville Main St",
              line2: "",
              city: "Stittsville",
              province: "Ontario",
              postcode: "K2S 1S9",
              createdAt: "2021-05-01T21:07:28.232Z",
            },
          },
        },
        {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa9",
          numberAvailable: 4,
          numberTotal: 10,
          date: "2021-05-01",
          vaccine: 1,
          inputType: 1,
          tags: "high-risk",
          createdAt: "2021-05-01T21:07:28.232Z",
          timeslots: [],
          requirements: [
            {
              id: "f7c6fd71-a8ab-40e9-9c8b-cfc8e257c486",
              vaccineAvailability: "e92693f3-1e50-45ea-80bd-1fae24814bc3",
              requirement: 4,
              active: true,
              name: "HotSpot",
              description: "18+ in Specific Postal Codes",
              createdAt: "2021-05-03T02:00:01.847000+00:00",
            },
          ],
          location: {
            id: 0,
            name: "Location2 with availability",
            phone: "(613) 555-5555",
            notes: "",
            active: 1,
            postcode: "K2K 2N6",
            url: "https://idapharmacy.com/",
            tags: "IDA",
            createdAt: "2021-05-01T21:07:28.232Z",
            organization: {
              createdAt: "2021-05-01T21:07:28.232Z",
              id: 0,
              shortName: "IDA",
              description: "IDA org description",
              fullName: "Independent Druggists' Alliance",
              url: "https://idapharmacy.com/",
            },
            address: {
              id: 123456,
              line1: "250 Stittsville Main St",
              line2: "",
              city: "Stittsville",
              province: "Ontario",
              postcode: "K2S 1S9",
              createdAt: "2021-05-01T21:07:28.232Z",
            },
          },
        },
      ];

      return res(ctx.status(200), ctx.json(response));
    },
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}/api/v1/vaccine-availability/locations/key/:external_key`,
    (req, res, ctx) => res(ctx.status(200)),
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}/api/v1/vaccine-availability/location/`,
    (req, res, ctx) => {
      const payload = [
        {
          numberAvailable: 100,
          numberTotal: 100,
          vaccine: 4,
          inputType: 2,
          tags: "Walk In,Email,Cancellation,Expiring Doses",
          id: "5353546a-25cb-46f5-a625-0040d9eaccb7",
          location: 2238,
          createdAt: "2021-06-08T19:56:10.173000+00:00",
          date: "2021-06-10T04:00:00+00:00",
        },
        {
          numberAvailable: 200,
          numberTotal: 200,
          vaccine: 4,
          inputType: 2,
          tags: "Walk In,Email,Cancellation,Expiring Doses",
          id: "5353546a-25cb-46f5-a625-0040d9eaccb7",
          location: 2238,
          createdAt: "2021-06-08T19:56:10.173000+00:00",
          date: "2021-06-09T04:00:00+00:00",
        },
        {
          numberAvailable: 300,
          numberTotal: 300,
          vaccine: 1,
          inputType: 2,
          tags: "Walk In,Email,Cancellation,Expiring Doses",
          id: "5353546a-25cb-46f5-a625-0040d9eaccb7",
          location: 2238,
          createdAt: "2021-06-08T19:56:10.173000+00:00",
          date: "2021-06-08T04:00:00+00:00",
        },
        {
          numberAvailable: 1,
          numberTotal: 1,
          vaccine: 3,
          inputType: 1,
          tags: "Walk In,Email,Cancellation",
          id: "34d5fc06-c65f-45c2-a185-1eaaa929c265",
          location: 2238,
          createdAt: "2021-06-06T17:46:18.697000+00:00",
          date: "2021-06-06T04:00:00+00:00",
        },
      ];
      return res(ctx.json(payload));
    },
  ),
  rest.put(
    `${process.env.REACT_APP_API_URL}/api/v1/vaccine-availability/:vaccine_availability_id`,
    (req, res, ctx) => res(ctx.status(200)),
  ),
];
