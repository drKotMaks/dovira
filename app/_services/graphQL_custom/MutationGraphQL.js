export const submitMutation = `
  mutation SubmitForm($service: String!, $doctor: String!, $email: String!) {
    createSubmission(data: { service: $service, doctor: $doctor, email: $email }) {
      id
    }
  }
`;

