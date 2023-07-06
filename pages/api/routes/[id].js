import dbConnect from "../../../lib/db/connect";
import hikingApp from "@/lib/db/models/Route";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const route = await hikingApp.findById(id);
      if (!route) {
        return response.status(404).json({ status: "The route not found" });
      }
      response.status(200).json(route);
    } catch (error) {
      response.status(405).json({ message: "Failed to load the data" });
    }
  }
  if (request.method === "PATCH") {
    const updatedRoute = request.body;
    try {
      const route = await hikingApp.findByIdAndUpdate(id, updatedRoute);
      if (!route) {
        return response.status(404).json({ status: "The route not found" });
      }
      response.status(201).json({ status: "The route is updated" });
    } catch (error) {
      response.status(405).json({ message: error });
    }
  }
  if (request.method === "DELETE") {
    try {
      const route = await hikingApp.findByIdAndDelete(id);
      if (!route) {
        return response.status(404).json({ status: "The route not found" });
      }
      response.status(201).json({ status: "The route is deleted" });
    } catch (error) {
      response.status(405).json({ message: error });
    }
  }
}
