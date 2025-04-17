import MemesListPage from '@/pages/MemesListPage'
import { appRoutes } from '@/shared/config/routes.config'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(appRoutes.memesList)({
  component: MemesListPage,
})
