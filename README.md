# asana-playwright-tests

Please see the following test cases automated:

Test Case 1
Login to Asana.
Navigate to "Cross-functional project plan, Project."
Verify "Draft project brief" is in the "To do" column.
Confirm tags: "Non-Priority" and "On track."

Test Case 2
Login to Asana.
Navigate to "Cross-functional project plan, Project."
Verify "Schedule kickoff meeting" is in the "To do" column.
Confirm tags: "Medium" and "At risk."

Test Case 3
Login to Asana.
Navigate to "Cross-functional project plan, Project."
Verify "Share timeline with teammates" is in the "To do" column.
Confirm tags: "High" and "Off track."

Test Case 4
Login to Asana.
Navigate to "Work Requests."
Verify "[Example] Laptop setup for new hire" is in the "New Requests" column.
Confirm tags: "Medium priority," "Low effort," "New hardware," and "Not Started."

Test Case 5
Login to Asana.
Navigate to "Work Requests."
Verify "[Example] Password not working" is in the "In Progress" column.
Confirm tags: "Low effort," "Low priority," "Password reset," and "Waiting."

Test Case 6
Login to Asana.
Navigate to "Work Requests."
Verify "[Example] New keycard for Daniela V" is in the "Completed" column.
Confirm tags: "Low effort," "New hardware," "High priority," and "Done."

To Run Tests:

To Run All Tests:
npm test

To Run Only the 'Asana Task Validation' Suite:
npm run test:asanataskvalidation

To Run Tests in Parallel:
npm run test:parallel

To Run a specific test from parallel:
npm run test:singleinparallel