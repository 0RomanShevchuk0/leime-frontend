import MemesTablePage from "@/pages/MemesTablePage"
import { appRoutes } from "@/shared/config/routes.config"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute(appRoutes.memesTable)({
  component: MemesTablePage,
})
