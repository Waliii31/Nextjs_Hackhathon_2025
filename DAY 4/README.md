# Day 3 - API Integration and Data Migration

## Objective
In this project, the goal for Day 3 was to integrate an external API into the Next.js application, migrate data into Sanity CMS, and build a functional frontend to display the data. This process involved working with an API, adjusting schemas in Sanity, uploading images, and implementing a custom user interface to display car rental details.

## Key Features
- **API Integration:** Integrated the provided car rental API to fetch data.
- **Data Migration:** Migrated car rental data into Sanity CMS using a custom migration script.
- **Image Upload:** Uploaded car images from URLs to Sanity CMS.
- **Custom UI:** Built a custom user interface to display car data with features such as search, filter, and sort options.
- **Search & Filter:** Implemented functionality to search for cars by name and filter by car type (e.g., hybrid, diesel, petrol).
- **Sort by Price:** Added sorting functionality to organize cars by price.
- **View Details Modal:** Created a modal to view detailed information about each car.

## Tech Stack
- **Frontend:** Next.js (React)
- **Backend:** Sanity CMS
- **API Integration:** Axios
- **Environment Variables:** dotenv
- **Image Upload:** Sanity's asset API

## Steps for Day 3

### 1. API Testing
The first step was to test the provided API using Postman to ensure it was working and returning the expected data.

- **API URL:** [Template 7 API](https://sanity-nextjs-application.vercel.app/api/hackathon/template7)
- **Test Result:** Successfully received car rental data.

### 2. Data Migration
Used a custom migration script to migrate the car rental data from the API into **Sanity CMS**. This involved:
- Fetching data from the API.
- Mapping the fields to match the Sanity CMS schema.
- Uploading any images to Sanity's asset system.
- Creating new documents in Sanity for each car.

### 3. UI Implementation
Built a custom frontend to display the car data, which included:
- A **search bar** to search for cars by name.
- A **filter dropdown** to filter cars by type (e.g., hybrid, diesel, petrol).
- A **sort option** to sort cars by their price.
- A **view details modal** to show detailed information about each car.

### 4. Testing
- Tested the API integration thoroughly using tools like Postman and browser developer tools.
- Verified the data migration by checking the Sanity CMS dashboard.
- Ensured the frontend displayed the fetched car data correctly.

## Files
- `importData.js`: The main script used for fetching the API data and migrating it to Sanity CMS.
- `uploadImageToSanity.js`: Utility function to upload images to Sanity's asset store.
- `.env.local`: Environment variables file used to store sensitive data like API keys and project information.

## Project Report Images

![Page 1](./Project%20Report/1.png) 

![Page 2](./Project%20Report/2.png) 

![Page 3](./Project%20Report/3.png) 

![Page 4](./Project%20Report/4.png) 

![Page 5](./Project%20Report/5.png)