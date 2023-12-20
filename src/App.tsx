import CategoryPills from "./components/CategoryPills";
import PageHeader from "./layout/PageHeader";
import Sidebar from "./layout/Sidebar";
import VideoGridItems from "./layout/VideoGridItems";
import { SidebarProvider } from "./contexts/sidebarContext";

const App = () => {
  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader />
        <div className="grid grid-cols-[1fr] sm:grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <Sidebar />
          <div className="grid grid-cols-1">
            <main className="flex flex-col gap-4 p-4 max-w-[calc(100%-4rem)] sm:max-w-[calc(100%-2rem)] mx-auto">
              <CategoryPills />
              <VideoGridItems />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
