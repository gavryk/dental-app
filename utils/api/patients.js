import axios from "../../core/axios";

export default {
  get: () => axios.get("/patients"),
  add: (values) => axios.post("/patients", values),
  remove: (id) => axios.delete("/patients/" + id),
  update: (id, data) => axios.patch("/patients/" + id, data),
  show: (id) => axios.get("/patients/" + id),
};