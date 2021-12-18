import axios from "../../core/axios";

export default {
  get: () => axios.get("/appointments"),
  remove: (id) => axios.delete("/appointments/" + id),
  update: (id, data) => axios.patch("/appointments/" + id, data),
  add: (values) => axios.post("/appointments", values),
};