import { RouterProvider, createRouter } from "@tanstack/react-router"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { routeTree } from "./routeTree.gen"
import { HeroUIProvider } from "@heroui/react"
import { Toaster } from "react-hot-toast"

const basepath = "/"

const router = createRouter({ routeTree, basepath })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <RouterProvider router={router} />
				<Toaster position="top-right" toastOptions={{duration: 5000}} />
      </HeroUIProvider>
    </QueryClientProvider>
  )
}

export default App
