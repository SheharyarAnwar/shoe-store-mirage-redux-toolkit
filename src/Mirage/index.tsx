import { createServer } from "miragejs";

const Index = () => {
  return createServer({
    environment: "development",
    seeds(server) {
      server.db.loadData({});
    },
    routes() {
      this.namespace = "api";
    },
  });
};

export default Index;
