import * as yup from "yup";

const interviewSchema = yup.object().shape({
  pId: yup.string().required("Placement drive ID is Required"),
  cId: yup.string().required("Candidate ID is Required"),
  cName: yup.string().required("Candidate name is Required"),
  bName: yup.string().required("Batch name is Required"),
  domain: yup.string().required("Domain is Required"),
  tOfD: yup.string().required("type Of Disability is Required"),
});

export default interviewSchema;
